import { replacements } from './replacements'

/**
 * Based on:
 * https://practicaltypography.com/straight-and-curly-quotes.html
 */
export const curlyq: (value: string) => string = (value = '') =>
  replacements.reduce(
    (accumulator: string, [pattern, substitution]) =>
      accumulator.replace(pattern, substitution as string),
    value
  )
