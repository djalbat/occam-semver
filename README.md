# Occam Semver

[Occam](https://github.com/djalbat/occam)'s semantic versioning.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
- [Examples](#examples)
- [Building](#building)
- [Contact](#contact)

## Introduction

Occam's package versioning is effectively taken out of the user's control with versions being enforced when packages are published. This package contains that functionality.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-semver

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-semver.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

Custom grammars and contexts are compared separately. The maximum of the two version number changes can be used for the version number change overall.  

```
import { Version } from "occam-file-system";
import { updateVersion, compareContextJSON, compareCustomGrammarJSON } from "occam-semver";

const contextJSON = ... ,
      previousContextJSON = ''' ,
      contextJSONVersionNumberChange = compareContextJSON(previousContextJSON, contextJSON);

const customGrammarJSON = ... ,
      previousCustomGrammarJSON = ... ,
      customGrammarVJSONersionNumberChange = compareCustomGrammarJSON(previousCustomGrammarJSON, customGrammarJSON),
      
const versionNumberChange = Math.max(contxtJSONVersionNumberChange, customGrammarVJSONersionNumberChange);

let version;

const previousVersion = ... ;

version = previousVersion;  ///

version = Version.fromVersion(version); ///

updateVersion(version, versionNumberChange);
```

The `updateVersion()` function can be used to apply the version number change. Note that the `Version` class' `fromVersion()` static factory method is called to duplicate the previous version before making the change.
 
## Example

The example demonstrates the underlying JSON diffing.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com

