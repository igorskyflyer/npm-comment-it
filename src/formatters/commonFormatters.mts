// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentTransform } from '../CommentTransform.mjs'

export const MultilineFormatter = (
  value: string,
  prefix: string,
  spaceNewlines = false
): string => {
  const lines: string[] = value.split(/[\r*\n]{1}/gm)
  const count: number = lines.length
  let result: string = ''

  if (count === 0) {
    return ''
  }

  for (let i = 0; i < count; i++) {
    const line: string = lines[i]
    let space: string = ' '

    if (!spaceNewlines && line === '') {
      space = ''
    }

    result += `${prefix}${space}${lines[i]}\n`
  }

  return result
}

export const CommonFormatter: { [key: string]: CommentTransform } = {
  ColonMulti: (value: string): string => MultilineFormatter(value, ';'),
  ColonSingle: (value: string): string => `; ${value}`,
  DoubleDash: (value: string): string => `-- ${value}`,
  DoubleSlash: (value: string): string => `// ${value}`,
  Percent: (value: string): string => `% ${value}`,
  Pound: (value: string): string => `# ${value}`,
  SlashAsterisk: (value: string): string => `/* ${value} */`,
  MultiPound: (value: string): string => MultilineFormatter(value, '#'),
  StarParen: (value: string): string => `(* ${value} *)`
}
