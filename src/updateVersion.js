"use strict";

import { MAJOR_VERSION_NUMBER_CHANGE, MINOR_VERSION_NUMBER_CHANGE, PATCH_VERSION_NUMBER_CHANGE } from "./versionNumberChanges";

export default function updateVersion(version, versionNumberChange) {
  switch (versionNumberChange) {
    case MAJOR_VERSION_NUMBER_CHANGE: {
      version.bumpMajorNumber();
      version.resetMinorNumber();
      version.resetPatchNumber();

      break;
    }

    case MINOR_VERSION_NUMBER_CHANGE: {
      version.bumpMinorNumber();
      version.resetPatchNumber();

      break;
    }

    case PATCH_VERSION_NUMBER_CHANGE: {
      version.bumpPatchNumber();

      break;
    }
  }
}
