#!/usr/bin/env node

import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
import isTextPath from 'is-text-path'
import getStdin from 'get-stdin'
import { version } from '../package.json'
import { curlyq } from './curlyq'

type Argv = string[]

const argv: Argv = process.argv.slice(1)
const flags: Argv = argv.filter((arg: string) => /^--?/.test(arg))
const args: Argv = argv.filter((arg: string) => !flags.includes(arg))

const help: string = `
Usage: curlyq [-] [STRING] [FILE]

  Convert straight quotes to smart quotes

Example:
  $ curlyq \\""That's a 'magic' shoe.\\""
  “That’s a ‘magic’ shoe.”

Via stdin:
  $ echo \\""That's a 'magic' shoe.\\"" | curlyq
  “That’s a ‘magic’ shoe.”

Via file:
  $ echo \\""That's a 'magic' shoe.\\"" > file.txt
  $ curlyq file.txt
  “That’s a ‘magic’ shoe.”

Options:
  -v --version              Display current program version
  -h --help                 Display help and usage details`

const hasFlags: (allFlags: Argv, checkFlags: string[]) => boolean = (
  allFlags,
  checkFlags
) => allFlags.some(flag => checkFlags.includes(flag))

const exitWithSuccess: (message: string) => void = message => {
  process.stdout.write(message)
  process.exit(0)
}

const exitWithError: (message: string, code?: number) => void = (
  message,
  code = 1
) => {
  process.stderr.write(message)
  process.exit(code)
}

const needsHelp: boolean = hasFlags(flags, ['-h', '--help'])
const needsVersion: boolean = hasFlags(flags, ['-v', '--version'])

if (needsHelp) exitWithSuccess(help)
if (needsVersion) exitWithSuccess(version)

const processFile: (file: string) => Promise<string> = async file => {
  const readFile = promisify(fs.readFile)
  const data: string = await readFile(path.join(process.cwd(), file), 'utf8')
  return data
}

const processString: (value: string) => string = value => value
const processStdin: () => Promise<string> = async () => await getStdin()
;(async function run () {
  try {
    const input: string = args[1]

    if (input) {
      if (isTextPath(input)) {
        const fileData: string = await processFile(input)
        exitWithSuccess(curlyq(fileData))
      } else {
        const stringData: string = processString(input)
        exitWithSuccess(curlyq(stringData))
      }
    }

    const stdinData: string = await processStdin()

    if (stdinData) exitWithSuccess(curlyq(stdinData))

    exitWithSuccess(help)
  } catch (error) {
    exitWithError(error.message)
  }
})()
