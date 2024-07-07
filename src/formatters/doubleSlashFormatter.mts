// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.mjs'
import { CommonFormatter, MultilineFormatter } from './CommonFormatters.mjs'

export const DoubleSlashFormatter: CommentFormatter = {
  single: CommonFormatter.DoubleSlash,
  multi: (value: string): string => MultilineFormatter(value, '//')
}
