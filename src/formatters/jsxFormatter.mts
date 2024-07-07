// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.mjs'

export const JsxFormatter: CommentFormatter = {
  single: (value: string): string => `{/* ${value} */}`,
  multi: (value: string): string => `{/* ${value} */}`
}
