"use strict";

import { compareBNF } from "./utilities/bnf";
import { compareJSON } from "./utilities/json";
import { PATCH_VERSION_NUMBER_CHANGE, MAJOR_VERSION_NUMBER_CHANGE } from "./versionNumberChanges";
import { EQUAL_TO_JSON_COMPARISON, NOT_EQUAL_TO_JSON_COMPARISON, STRICTLY_LESS_THAN_JSON_COMPARISON } from "./jsonComparisons";

export default function compareCustomGrammarJSON(previousCustomGrammarJSON, customGrammarJSON) {
  let customGrammarJSONVersionNumberChange;

  const jsonA = previousCustomGrammarJSON,  ///
        jsonB = customGrammarJSON,  ///
        comparePrimitives = compareBNF,  ///
        jsonComparison = compareJSON(jsonA, jsonB, comparePrimitives);

  switch (jsonComparison) {
    case EQUAL_TO_JSON_COMPARISON: {
      customGrammarJSONVersionNumberChange = PATCH_VERSION_NUMBER_CHANGE;

      break;
    }

    case NOT_EQUAL_TO_JSON_COMPARISON:
    case STRICTLY_LESS_THAN_JSON_COMPARISON: {
      customGrammarJSONVersionNumberChange = MAJOR_VERSION_NUMBER_CHANGE;

      break;
    }
  }

  return customGrammarJSONVersionNumberChange;
}
