// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentTransform } from './CommentTransform.js'

export type CommentFormatter = {
  single: CommentTransform
  multi: CommentTransform
}
