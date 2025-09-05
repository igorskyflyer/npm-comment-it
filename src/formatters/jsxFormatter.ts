// Author: Igor Dimitrijević (@igorskyflyer)

import type { CommentFormatter } from '../CommentFormatter.js'

export const jsxFormatter: CommentFormatter = {
  single: (value: string): string => `{/* ${value} */}`,
  multi: (value: string): string => `{/* ${value} */}`
}
