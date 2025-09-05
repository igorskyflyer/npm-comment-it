// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.js'

export const cStyleFormatter: CommentFormatter = {
  single: (value: string): string => `// ${value}`,
  multi: (value: string): string => `/* ${value} */`
}
