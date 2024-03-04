"use strict";

import { compareJSON, comparePrimitives } from "./utilities/json";
import { PATCH_VERSION_NUMBER_CHANGE, MINOR_VERSION_NUMBER_CHANGE, MAJOR_VERSION_NUMBER_CHANGE } from "./versionNumberChanges";
import { EQUAL_TO_JSON_COMPARISON, NOT_EQUAL_TO_JSON_COMPARISON, STRICTLY_LESS_THAN_JSON_COMPARISON } from "./jsonComparisons";

export default function compareContextJSON(previousContextJSON, contextJSON) {
  let contextJSONVersionNumberChange;

  const jsonA = previousContextJSON, ///
        jsonB = contextJSON, ///
        jsonComparison = compareJSON(jsonA, jsonB, comparePrimitives);

  switch (jsonComparison) {
    case EQUAL_TO_JSON_COMPARISON: {
      contextJSONVersionNumberChange = PATCH_VERSION_NUMBER_CHANGE;

      break;
    }

    case NOT_EQUAL_TO_JSON_COMPARISON: {
      contextJSONVersionNumberChange = MAJOR_VERSION_NUMBER_CHANGE;

      break;
    }

    case STRICTLY_LESS_THAN_JSON_COMPARISON: {
      contextJSONVersionNumberChange = MINOR_VERSION_NUMBER_CHANGE;

      break;
    }
  }

  return contextJSONVersionNumberChange;
}
