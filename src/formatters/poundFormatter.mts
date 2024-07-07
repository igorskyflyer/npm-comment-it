// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.mjs'
import { CommonFormatter } from './CommonFormatters.mjs'

export const PoundFormatter: CommentFormatter = {
  single: CommonFormatter.Pound,
  multi: CommonFormatter.MultiPound
}
