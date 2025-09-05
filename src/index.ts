// Author: Igor Dimitrijević (@igorskyflyer)

import { findMatch, strIsIn } from '@igorskyflyer/str-is-in'
import type { CommentFormatter } from './CommentFormatter.js'
import type { CommentLanguage } from './ICommentObject.js'
import { comment } from './comment.js'

/**
 * Gets IDs of all available language
 * formatters. Language formatters are
 * callable as `comment.<languageId>`.
 * @see comment
 */
export function getLanguageIds(): string[] {
  return Object.keys(comment)
}

/**
 * Performs a case-insensitive search
 *  for a language formatter with
 * the provided `id` and returns it - if
 * one is found - else returns null.
 */
export function language(id: string): CommentFormatter | null {
  if (typeof id !== 'string') {
    return null
  }

  const allLanguages: string[] = getLanguageIds()
  const languageId: string = findMatch.full(id, allLanguages)

  if (languageId.length > 0) {
    return comment[languageId]
  }

  return null
}

/**
 * Returns whether the given language formatter is supported, case-sensitive.
 */
export function supportsLanguage(id: string): boolean {
  const languages: string[] = getLanguageIds()

  return strIsIn(
    id,
    languages,
    (langId, myId) => langId.toLowerCase() === myId.toLowerCase()
  )
}

/**
 * Adds an alias for an existing comment formatter.
 */
export function alias(id: CommentLanguage, alias: string): boolean {
  if (typeof id !== 'string' || typeof alias !== 'string') {
    return false
  }

  if (id.length === 0) {
    return false
  }

  if (alias.length === 0) {
    return false
  }

  const allLanguages: string[] = getLanguageIds()

  if (strIsIn(alias, allLanguages)) {
    return false
  }

  const languageId: string = findMatch.full(id, allLanguages)

  if (languageId.length > 0) {
    comment[alias] = comment[languageId]
    return true
  }

  return false
}

// export the object containing all formatters
export { comment }
