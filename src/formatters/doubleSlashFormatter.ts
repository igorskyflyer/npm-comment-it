// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.js'
import { commonFormatter, multilineFormatter } from './commonFormatters.js'

export const doubleSlashFormatter: CommentFormatter = {
  single: commonFormatter.DoubleSlash,
  multi: (value: string): string => multilineFormatter(value, '//')
}
