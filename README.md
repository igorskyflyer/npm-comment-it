# /\* CommentIt! \*/

📜 Formats the provided string as a comment, either a single or a multi line comment for the given programming language. 💻

<br>

<h4 align="center">36 languages are currently supported.</h4>

<br>

### Usage

Install it by running,

```shell
npm i "@igor.dvlpr/comment-it"
```

<br>

### API

Exposes a single `enum` named `comment` where all formatters are stored.

`comment`'s formatters:

- `comment.batch`,
- `comment.c`,
- `comment.coffeeScript`,
- `comment.cpp`,
- `comment.cSharp`,
- `comment.css`,
- `comment.dart`,
- `comment.dockerFile`,
- `comment.fSharp`,
- `comment.go`,
- `comment.groovy`,
- `comment.html`,
- `comment.java`,
- `comment.javaScript`,
- `comment.jsx`,
- `comment.kotlin`,
- `comment.lua`,
- `comment.objectiveC`,
- `comment.objectiveCpp`,
- `comment.perl`,
- `comment.php`,
- `comment.powerShell`,
- `comment.pug`,
- `comment.python`,
- `comment.r`,
- `comment.razor`,
- `comment.ruby`,
- `comment.rust`,
- `comment.shellScript`,
- `comment.sql`,
- `comment.swift`,
- `comment.typeScript`,
- `comment.visualBasic`,
- `comment.vue`,
- `comment.vueHtml`,
- `comment.xml`.

<br>

Each formatter exposes two functions, `single()` for single-line comments and `multi()` for multi-line comments.

<br>
<br>

### single()

```ts
single(value: string): string
```

Returns a single-line comment formatted for the selected language.

<br>

### multi()

```ts
multi(value: string): string
```

Returns a multi-line comment formatted for the selected language.

<br>

### Examples

```js
const { comment } = require('@igor.dvlpr/comment-it')
const singleLine = 'hello world'
const multiLine = `hello


world

this is a test`

console.log(comment.javaScript.single(singleLine)) // prints '// hello world'

console.log(comment.jsx.single(singleLine)) // prints '{/* hello world */}'

console.log(comment.coffeeScript.multi(multiLine)) // prints ''###\nhello\n\n\nworld\n\nthis is a test\n###''

// note: new lines in the example results are written as-is for brevity
```
