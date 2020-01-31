# Exiter [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/exiter/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/exiter)

Access power options for a computer.

[![NPM Badge](https://nodei.co/npm/exiter.png)](https://npmjs.com/package/exiter)

## Install

```sh
npm install exiter
```

## Usage

```js
const exiter = require("exiter");

exiter.sync() // Shutdown synchronously

exiter.restartSync() // Restart synchronously
```

## API

### exiter()
### exiter.sync()

### exiter.restart()
### exiter.restartSync()

## Related

- [cross-exit](https://github.com/Richienb/cross-exit) - Terminate the execution of a script.
