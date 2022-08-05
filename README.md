# /\* CommentIt! \*/

📜 Formats the provided string as a comment, either a single or a multi line comment for the given programming language. 💻

<br>

<h4 align="center">🌍 62 <sup>(*)</sup> languages are currently supported, even <a href="https://github.com/carbon-language/carbon-lang">Carbon</a>, an upcoming C++ successor made by Google. 🎤</h4>

<p align="center">
<sup>* an additional alias is available for <code>shellScript</code> named <code>bash</code>.</sup>
</p>

<br>

✨Since version `2.0.0` `CommentIt!` is a hybrid module that supports both CommonJS (legacy) and ES modules, thanks to [Modern Module](https://github.com/igorskyflyer/npm-modern-module).

<br>

### Usage

Install it by running,

```shell
npm i "@igor.dvlpr/comment-it"
```

<br>

### API

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

Supported identifiers are: **`ada`**,**`bash`**,**`batch`**,**`c`**,**`carbon`**,**`cSharp`**,**`coffeeScript`**,**`cpp`**,**`crystal`**,**`css`**,**`dart`**,**`delphi`**,**`dockerFile`**,**`elixir`**,**`erlang`**,**`euphoria`**,**`fSharp`**,**`fortran`**,**`genie`**,**`go`**,**`groovy`**,**`hack`**,**`haskell`**,**`html`**,**`icon`**,**`java`**,**`javaScript`**,**`jsx`**,**`julia`**,**`kotlin`**,**`lisp`**,**`liveCode`**,**`lua`**,**`maple`**,**`matlab`**,**`mercury`**,**`mql4`**,**`objectiveC`**,**`objectiveCpp`**,**`oz`**,**`pascal`**,**`perl`**,**`php`**,**`powerShell`**,**`pug`**,**`python`**,**`q`**,**`r`**,**`razor`**,**`red`**,**`ring`**,**`ruby`**,**`rust`**,**`scala`**,**`shellScript`**,**`sql`**,**`swift`**,**`typeScript`**,**`vala`**,**`visualBasic`**,**`vue`**,**`vueHtml`**,**`xml`**.

<br>

#### alias()

```ts
 alias(id: LanguageId, alias: string): boolean
```

Adds an alias for an existing comment formatter. Returns true upon success, false otherwise.

<br>

<a id="comment"></a>

#### comment

An `object` where all formatters are stored.

<br>

`comment`'s formatters:

- **`comment.ada`** - Ada
- **`comment.bash`** - Bash (alias of `shellScript`)
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
- **`comment.shellScript`** - ShellScript/Bash
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

```js
const { comment, supportsLanguage } = require('@igor.dvlpr/comment-it')
const singleLine = 'hello world'
const multiLine = `hello


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
