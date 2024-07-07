// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.mjs'

export const XmlFormatter: CommentFormatter = {
  single: (value: string): string => `<!-- ${value} -->`,
  multi: (value: string): string => `<!--\n${value}\n-->`
}
