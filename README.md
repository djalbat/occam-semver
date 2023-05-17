# Occam Semver

[Occam](https://github.com/djalbat/occam)'s semantic versioning.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Building](#building)
- [Contact](#contact)

## Introduction

Occam's package versioning is effectively taken out of the user's control with packaged versions being enforced when packages are published. This package contains that functionality.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-semver

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-semver.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

Custom grammars and contexts are compared separately. The maximum of the two version number changes can be used for the version number change overall.  

```
import { Version } from "occam-file-system";
import { updateVersion, compareContexts, compareCustomGrammars, versionNumberChanges } from "occam-semver";

const { PATCH_VERSION_NJMBER_CHANGE. MINOR_VERSION_NUMBER_CHANGE, MAJOR_VERSION_NUMBER_CHANGE } = versionNumberChanges;

const contetx = ... ,
      previousContext = ''' ,
      contextVersionNumberChange = compareContexts(previousContext, context);

const customGrammar = ... ,
      previousCustomGrammar = ... ,
      customGrammarVersionNumberChange = compareCustomGrammars(previousCutomGrammar, customGrammar),
      
const versionNumberChange = math.max(contxtVersionNumberChange, customGrammarVersionNumberChage);

let version;

const previousVersion = ... ;

version = previousVersion;  ///

version = Version.fromVersion(version); ///

updateVersion(version, versionNumberChange);
```

The `updateVersion` function can be used to apply the version number change.
 
## Example

The example allows to JSON objects to be input in order to demonstrate the underlying JSON diffing.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## Contact

* james.smith@djalbat.com

