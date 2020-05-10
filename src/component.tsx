import { FunctionComponent, ReactNode } from 'react'
import { recursivelyWalkChildren } from './helpers'
import { curlyq } from './curlyq'

export const CurlyQ: FunctionComponent<{
  children: ReactNode
}> = ({ children }) =>
  recursivelyWalkChildren(children, child => curlyq(child.toString()))
