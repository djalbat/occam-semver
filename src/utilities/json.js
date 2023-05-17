"use strict";

const { arrayUtilities } = require("necessary");

import { typeOf } from "../utilities/type";
import { ARRAY_JSON_TYPE, OBJECT_JSON_TYPE, PRIMITIVE_JSON_TYPE } from "../jsonTypes";
import { EQUAL_TO_JSON_COMPARISON, NOT_EQUAL_TO_JSON_COMPARISON, STRICTLY_LESS_THAN_JSON_COMPARISON } from "../jsonComparisons";

const { first } = arrayUtilities;

export function compareJSON(jsonA, jsonB) {
  let jsonComparison = NOT_EQUAL_TO_JSON_COMPARISON;

  const jsonAType = typeOf(jsonA),
        jsonBType = typeOf(jsonB);

  if (jsonAType === jsonBType) {
    const jsonType = jsonAType; ///

    switch (jsonType) {
      case ARRAY_JSON_TYPE: {
        const arrayA = jsonA, ///
              arrayB = jsonB; ///

        jsonComparison = compareArrays(arrayA, arrayB);

        break;
      }

      case OBJECT_JSON_TYPE: {
        const objectA = jsonA, ///
              objectB = jsonB; ///

        jsonComparison = compareObjects(objectA, objectB);

        break;
      }

      case PRIMITIVE_JSON_TYPE: {
        const primitiveA = jsonA, ///
              primitiveB = jsonB; ///

        jsonComparison = comparePrimitives(primitiveA, primitiveB);

        break;
      }
    }
  }

  return jsonComparison;
}

function compareArrays(arrayA, arrayB) {
  let jsonComparison;

  const arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength <= arrayBLength) {
    if (arrayALength === 0) {
      if (arrayALength === arrayBLength) {
        jsonComparison = EQUAL_TO_JSON_COMPARISON;
      } else {
        jsonComparison = STRICTLY_LESS_THAN_JSON_COMPARISON;
      }
    } else {
      let firstJSONComparison = NOT_EQUAL_TO_JSON_COMPARISON;

      const elementsA = arrayA, ///
            elementsB = arrayB, ///
            firstElementA = first(elementsA),
            elementA = firstElementA; ///

      let foundElementB = null;

      if (foundElementB === null) {
        elementsB.some((elementB) => {
          const jsonA = elementA, ///
                jsonB = elementB; ///

          firstJSONComparison = compareJSON(jsonA, jsonB);

          if (firstJSONComparison === EQUAL_TO_JSON_COMPARISON) {
            foundElementB = elementB; ///

            return true;
          }
        });
      }

      if (foundElementB === null) {
        elementsB.some((elementB) => {
          const jsonA = elementA, ///
                jsonB = elementB; ///

          firstJSONComparison = compareJSON(jsonA, jsonB);

          if (firstJSONComparison === STRICTLY_LESS_THAN_JSON_COMPARISON) {
            foundElementB = elementB; ///

            return true;
          }
        });
      }

      if (firstJSONComparison === NOT_EQUAL_TO_JSON_COMPARISON) {
        jsonComparison = NOT_EQUAL_TO_JSON_COMPARISON;
      } else {
        const elementB = foundElementB; ///

        arrayA = deleteElement(arrayA, elementA); ///

        arrayB = deleteElement(arrayB, elementB); ///

        const jsonA = arrayA,  ///
              jsonB = arrayB,  ///
              remainingJSONComparison = compareJSON(jsonA, jsonB);

        jsonComparison = Math.max(firstJSONComparison, remainingJSONComparison);
      }
    }
  } else {
    jsonComparison = NOT_EQUAL_TO_JSON_COMPARISON;
  }

  return jsonComparison;
}

function compareObjects(objectA, objectB) {
  let jsonComparison;

  const keysA = Object.keys(objectA),
        keysB = Object.keys(objectB),
        keysALength = keysA.length,
        keysBLength = keysB.length;

  if (keysALength <= keysBLength) {
    if (keysALength === 0) {
      if (keysALength === keysBLength) {
        jsonComparison = EQUAL_TO_JSON_COMPARISON;
      } else {
        jsonComparison = STRICTLY_LESS_THAN_JSON_COMPARISON;
      }
    } else {
      let firstJSONComparison = NOT_EQUAL_TO_JSON_COMPARISON;

      const firstKeyA = first(keysA),
            keyA = firstKeyA; ///

      keysB.some((keyB) => {
        if (keyB === keyA) {
          const valueA = objectA[keyA],
                valueB = objectB[keyB],
                jsonA = valueA, ///
                jsonB = valueB; ///

          firstJSONComparison = compareJSON(jsonA, jsonB);

          return true;
        }
      });

      if (firstJSONComparison === NOT_EQUAL_TO_JSON_COMPARISON) {
        jsonComparison = NOT_EQUAL_TO_JSON_COMPARISON;
      } else {
        const keyB = keyA;  ///

        objectA = deleteKey(objectA, keyA); ///

        objectB = deleteKey(objectB, keyB); ///

        const jsonA = objectA,  ///
              jsonB = objectB,  ///
              remainingJSONComparison = compareJSON(jsonA, jsonB);

        jsonComparison = Math.max(firstJSONComparison, remainingJSONComparison);
      }
    }
  } else {
    jsonComparison = NOT_EQUAL_TO_JSON_COMPARISON;
  }

  return jsonComparison;
}

function comparePrimitives(primitiveA, primitiveB) {
  let jsonComparison;

  if (primitiveA === primitiveB) {
    jsonComparison = EQUAL_TO_JSON_COMPARISON;
  } else {
    jsonComparison = NOT_EQUAL_TO_JSON_COMPARISON;
  }

  return jsonComparison;
}

function deleteElement(array, element) {
  const deletedElement = element; ///

  array = array.reduce((array, element) => {  ///
    if (element !== deletedElement) {
      array.push(element);
    }

    return array;
  }, []);

  return array;
}

function deleteKey(object, key) {
  const deletedKey = key, ///
        keys = Object.keys(object),
        values = Object.values(object);

  object = keys.reduce((object, key, index) => {  ///
    if (key !== deletedKey) {
      const value = values[index];

      object[key] = value;
    }

    return object;
  }, {});

  return object;
}
