// @ts-ignore
import library from 'smartquotes/lib/replacements'

type PatternsAndSubstitutions = [RegExp, string | Function][]

export const replacements = (library as PatternsAndSubstitutions).filter(
  ([_, substitution]) => {
    if (typeof substitution === 'function') return substitution(false)
    return substitution
  }
)
