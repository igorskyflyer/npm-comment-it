// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.mjs'
import { commonFormatter } from './commonFormatters.mjs'

export const poundFormatter: CommentFormatter = {
  single: commonFormatter.Pound,
  multi: commonFormatter.MultiPound
}
