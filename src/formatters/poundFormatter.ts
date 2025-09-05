// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.js'
import { commonFormatter } from './commonFormatters.js'

export const poundFormatter: CommentFormatter = {
  single: commonFormatter.Pound,
  multi: commonFormatter.MultiPound
}
