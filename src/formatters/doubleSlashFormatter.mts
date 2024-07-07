// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.mjs'
import { commonFormatter, multilineFormatter } from './commonFormatters.mjs'

export const doubleSlashFormatter: CommentFormatter = {
  single: commonFormatter.DoubleSlash,
  multi: (value: string): string => multilineFormatter(value, '//')
}
