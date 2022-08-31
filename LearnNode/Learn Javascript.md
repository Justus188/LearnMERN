# npm
[Guide](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
## package.json
Project metadata: create using `npm init` in cmd in project root
    `npm init -y` skips manual metadata input and populates with defaults
Includes dependencies and devDependencies
    dependencies are encoded as `dependencyName: ~versionNum` using semantic versioning (`~` is this version, `^` is this version and above)
## Installing dependencies
`npm install module1 module2` or `npm i module1 module2` installs into `./node_modules`
`npm i module --save` adds module into `package.json` `dependencies`
`npm i module --save-dev` adds module into `package.json` `devDependencies`
`npm i module --global` saves modules globally into system directory
`npm install` installs from `package.json` `dependencies` and `devDependencies`

# NodeJS execution style:
Wraps modules in a function:
`function(exports, require, module, __filename, __dirname){...}`

# Function def
`function(args) = {function body}`
`(args) => {function body}`

# String manipulation
```console.log(`I am: ${myname}`)```

# Class
`class ClassName extends Parent {
    method(arg) {
        this.parentFunction()
    }
}`
`const instance = new Class`

# Global Scope
## Standard functions
`console.log(string)` Print to console
`setTimeout()` Execute function after delay
`clearTimeout()`
# Modules
Every file is a module - functions and variables are created in module scope
To export:
`exports.exportedFunctionName = internalFunctionName`
To import:
`const module = require('./module.js'); module.function();` - Same folder, assumes .js if undeclared

To export a singular function: `module.exports = function`
Import: `const function = require('./module.js'); function()`

# Builtin modules:
[List](https://nodejs.org/dist/latest-v16.x/docs/api/packages.html)
## path
`path.parse(__filename)`: root, dir, base = name + ext, ext, name
## os
`os.freemem()`, `os.totalmem()`
## fs
`fs.access()` - asynchronous functions need a callback function: `function(err, str_array)`. If error, `err` will be nonNone for error handling. There are also synchronous versions of functions by calling `functionSync`
`fs.readdir()`
## events
```
const EventEmitter = require('events');
emitter = new EventEmitter();
emitter.on('eventName', callback); // listener, callback can take arg
emitter.emit('eventName', arg);
```
## http
```
const http = require('http');
const server = http.createServer((req, res) => { // edits the webpage itself
    if (req.url === '/'){
        res.write('Hello World!')
        res.end()
    }
});

server.on("connection", (socket) => console.log("New connection!")) // connection event

server.listen(3000); // triggers events
console.log("Listening on port 3000")
```
For list of events, see node.js documentation

# Installations (using npm install)
## nodemon
Dynamic updating of webpages during development
## cors
Middleware for some stability thing
## express
Webserver framework
## mongodb
## dotenv
Environment variables from a file