// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentTransform } from './CommentTransform.mjs'

export type CommentFormatter = {
  single: CommentTransform
  multi: CommentTransform
}
