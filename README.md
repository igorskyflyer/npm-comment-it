# /\* CommentIt! \*/

<br>

📜 Formats the provided string as a comment, either a single or a multi line comment for the given programming language. 💻

<br>

<h4 align="center">🌍 62 languages are currently supported, even <a href="https://github.com/carbon-language/carbon-lang">Carbon</a>,<br> an upcoming C++ successor made by Google 🎤</h4>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/comment-it"
```

<br>

## 🤹🏼 API


#### getLanguageIds()

```ts
getLanguageIds(): string[]
```

Gets IDs of all available language formatters. Language formatters are callable as `comment.<languageId>`. See more below at [`comment`](#comment).

<br>

#### language()

```ts
language(id: string): CommentFormatter | null
```

Performs a case-insensitive search for a language formatter with the provided `id` and returns it - if one is found - else returns null.

<br>

#### supportsLanguage()

```ts
supportsLanguage(id: string): boolean
```

Returns whether the given language formatter is supported, **case-insensitive**.

See the [comment](#comment) object below for available valid identifiers.

<br>

#### alias()

```ts
 alias(id: CommentLanguage, alias: string): boolean
```

Adds an alias for an existing comment formatter. Returns true upon success, false otherwise.

<br>

<a id="comment"></a>

#### comment

An `object` where all formatters are stored.

<br>

`comment`'s properties/formatters:

- **`comment.ada`** - Ada
- **`comment.bash`** - Bash
- **`comment.batch`** - Batch
- **`comment.c`** - C
- **`comment.carbon`** - Carbon
- **`comment.cSharp`** - C#
- **`comment.coffeeScript`** - CoffeeScript
- **`comment.cpp`** - C++
- **`comment.crystal`** - Crystal
- **`comment.css`** - CSS
- **`comment.dart`** - Dart
- **`comment.delphi`** - Delphi
- **`comment.dockerFile`** - Dockerfile
- **`comment.elixir`** - Elixir
- **`comment.erlang`** - Erlang
- **`comment.euphoria`** - Euphoria
- **`comment.fortran`** - Fortran
- **`comment.fSharp`** - F#
- **`comment.genie`** - Genie
- **`comment.go`** - Go
- **`comment.groovy`** - Groovy
- **`comment.hack`** - Hack
- **`comment.haskell`** - Haskell
- **`comment.html`** - HTML
- **`comment.icon`** - Icon
- **`comment.java`** - Java
- **`comment.javaScript`** - JavaScript
- **`comment.jsx`** - JSX
- **`comment.julia`** - Julia
- **`comment.kotlin`** - Kotlin
- **`comment.lisp`** - Lisp
- **`comment.liveCode`** - LiveCode
- **`comment.lua`** - Lua
- **`comment.maple`** - Maple
- **`comment.matlab`** - MATLAB
- **`comment.mercury`** - Mercury
- **`comment.mql4`** - MQL4
- **`comment.objectiveC`** - Objective-C
- **`comment.objectiveCpp`** - Objective-C++
- **`comment.oz`** - Oz
- **`comment.pascal`** - Pascal
- **`comment.perl`** - Perl
- **`comment.php`** - PHP
- **`comment.powerShell`** - PowerShell
- **`comment.pug`** - Pug/Jade
- **`comment.python`** - Python
- **`comment.q`** - Q
- **`comment.r`** - R
- **`comment.razor`** - Razor
- **`comment.red`** - Red
- **`comment.ring`** - Ring
- **`comment.ruby`** - Ruby
- **`comment.rust`** - Rust
- **`comment.scala`** - Scala
- **`comment.sql`** - SQL
- **`comment.swift`** - Swift
- **`comment.typeScript`** - TypeScript
- **`comment.vala`** - Vala
- **`comment.visualBasic`** - VisualBasic
- **`comment.vue`** - Vue
- **`comment.vueHtml`** - VueHtml
- **`comment.xml`** - XML

<br>

Each formatter exposes two functions, `single()` for single-line comments and `multi()` for multi-line comments.

<br>
<br>

##### single()

```ts
single(value: string): string
```

Returns a single-line comment formatted for the selected language.

<br>

##### multi()

```ts
multi(value: string): string
```

Returns a multi-line comment formatted for the selected language.

<br>

### Examples

```ts
import { comment, supportsLanguage } from '@igor.dvlpr/comment-it'

const singleLine: string = 'hello world'
const multiLine: string = `hello


world

this is a test`

console.log(comment.javaScript.single(singleLine)) // prints '// hello world'

console.log(comment.jsx.single(singleLine)) // prints '{/* hello world */}'

console.log(comment.coffeeScript.multi(multiLine)) // prints '###\nhello\n\n\nworld\n\nthis is a test\n###'

// note: new lines in the example results are written as-is for brevity

console.log(supportsLanguage('lua')) // prints true
console.log(supportsLanguage('TYPEscript')) // prints true
console.log(supportsLanguage('foo')) // prints false
```

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-comment-it/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/mapped-replacer](https://www.npmjs.com/package/@igor.dvlpr/mapped-replacer)

> _🗺 Zero-dependency Map and RegExp based string replacer with Unicode support. 🍁_

[@igor.dvlpr/jmap](https://www.npmjs.com/package/@igor.dvlpr/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

[@igor.dvlpr/strip-html-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-html-headings)

> _🍛 Strips HTML headings! 🍤_

[@igor.dvlpr/strip-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-headings)

> _⛸ Strips Markdown headings! 🏹_

[@igor.dvlpr/unc-path](https://www.npmjs.com/package/@igor.dvlpr/unc-path)

> _🥽 Provides ways of parsing UNC paths and checking whether they are valid. 🎱_

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
