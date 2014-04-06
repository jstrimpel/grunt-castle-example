# Grunt-castle Example
This is a simple example of how to use [grunt-castle](https://github.com/walmartlabs/grunt-castle)
to unit test a client-server AMD code base.

## Overview
In this example the fictitious application resides in the `lib` directory. The `lib/modules`
directory represents code that was imported from another project. This imported code
is used to highlight a case for mocking dependencies.

The `test/mocks` directory contains the testing mocks. Grunt-castle supports two types
of mocks, AMD and global. `money.js` is a global mock, which is referenced in the
application code. `test/mocks/modules/sylvesterMcMonkeyMcBean.js` mocks the application
file `lib/modules/sylvesterMcMonkeyMcBean.js`.

The `test/specs` directory contains the specifications to be tested. In this example there
is only 1 specification, `test/specs/shared/sneetch.js`. This specification will be tested on
both the client and the server.

The grunt-castle task configuration for this example can be found in `Gruntfile.js`.

For further information about grunt-castle visit the Github
[repo](https://github.com/walmartlabs/grunt-castle).

## Getting Started

First clone the repo:

```shell
git clone git@github.com:jstrimpel/grunt-castle-example.git
```

Second install the dependencies from the local repo directory:

```shell
npm install
```

Third run the tests:

```shell
grunt castle
```

You are done.

## Known Issue

If you see the following error then you will need to edit the `package.json` for a Squire.js.

```shell
Running "castle:application" (castle) task
Warning: Cannot find module 'squirejs' Use --force to continue.

Aborted due to warnings.
```

Locate the Squire.js node_modules directory and the following to the `package.json`.

```javascript
"main": "./src/Squire"
```

This issue has been noted in grunt-castle, https://github.com/walmartlabs/grunt-castle/issues/16, and will be fixed.
