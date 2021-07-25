# /\* CommentIt! \*/

📜 Formats the provided string as a comment, either a single or a multi line comment for the given programming language. 💻

<br>

<h4 align="center">🌍 36 languages are currently supported. 🎤</h4>

<br>

### Usage

Install it by running,

```shell
npm i "@igor.dvlpr/comment-it"
```

<br>

### API

#### supportsLanguage()

```ts
supportsLanguage(id: string): boolean
```

Returns whether the given language formatter is supported, **case-sensitive**.

Supported identifiers are: **`batch`**, **`coffeeScript`**, **`c`**, **`cpp`**, **`cSharp`**, **`css`**, **`dart`**, **`dockerFile`**, **`fSharp`**, **`go`**, **`groovy`**, **`html`**, **`java`**, **`javaScript`**, **`jsx`**, **`kotlin`**, **`lua`**, **`objectiveC`**, **`objectiveCpp`**, **`perl`**, **`php`**, **`powerShell`**, **`pug`**, **`python`**, **`r`**, **`razor`**, **`ruby`**, **`rust`**, **`shellScript`**, **`sql`**, **`swift`**, **`typeScript`**, **`vue`**, **`vueHtml`**, **`visualBasic`**, **`xml`**.

<br>

#### comment

An `object` where all formatters are stored.

<br>

`comment`'s formatters:

- **`comment.batch`** - Batch,
- **`comment.c`** - C,
- **`comment.coffeeScript`** - CoffeeScript,
- **`comment.cpp`** - C++,
- **`comment.cSharp`** - C#,
- **`comment.css`** - CSS,
- **`comment.dart`** - Dart,
- **`comment.dockerFile`** - Dockerfile,
- **`comment.fSharp`** - F#,
- **`comment.go`** - Go,
- **`comment.groovy`** - Groovy,
- **`comment.html`** - HTML,
- **`comment.java`** - Java,
- **`comment.javaScript`** - JavaScript,
- **`comment.jsx`** - JSX,
- **`comment.kotlin`** - Kotlin,
- **`comment.lua`** - Lua,
- **`comment.objectiveC`** - Objective-C,
- **`comment.objectiveCpp`** - Objective-C++,
- **`comment.perl`** - Perl,
- **`comment.php`** - PHP,
- **`comment.powerShell`** - PowerShell,
- **`comment.pug`** - Pug/Jade,
- **`comment.python`** - Python,
- **`comment.r`** - R,
- **`comment.razor`** - Razor,
- **`comment.ruby`** - Ruby,
- **`comment.rust`** - Rust,
- **`comment.shellScript`** - ShellScript,
- **`comment.sql`** - SQL,
- **`comment.swift`** - Swift,
- **`comment.typeScript`** - TypeScript,
- **`comment.visualBasic`** - VisualBasic,
- **`comment.vue`** - Vue,
- **`comment.vueHtml`** - VueHtml,
- **`comment.xml`** - XML.

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
const { comment, supports } = require('@igor.dvlpr/comment-it')
const singleLine = 'hello world'
const multiLine = `hello


world

this is a test`

console.log(comment.javaScript.single(singleLine)) // prints '// hello world'

console.log(comment.jsx.single(singleLine)) // prints '{/* hello world */}'

console.log(comment.coffeeScript.multi(multiLine)) // prints ''###\nhello\n\n\nworld\n\nthis is a test\n###''

// note: new lines in the example results are written as-is for brevity

console.log(supports('lua')) // prints true
console.log(supports('TYPEscript')) // prints false
```
