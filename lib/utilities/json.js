"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "compareJSON", {
    enumerable: true,
    get: function() {
        return compareJSON;
    }
});
var _type = require("../utilities/type");
var _jsonTypes = require("../jsonTypes");
var _jsonComparisons = require("../jsonComparisons");
var arrayUtilities = require("necessary").arrayUtilities;
var first = arrayUtilities.first;
function compareJSON(jsonA, jsonB) {
    var jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
    var jsonAType = (0, _type.typeOf)(jsonA), jsonBType = (0, _type.typeOf)(jsonB);
    if (jsonAType === jsonBType) {
        var jsonType = jsonAType; ///
        switch(jsonType){
            case _jsonTypes.ARRAY_JSON_TYPE:
                {
                    var arrayA = jsonA, arrayB = jsonB; ///
                    jsonComparison = compareArrays(arrayA, arrayB);
                    break;
                }
            case _jsonTypes.OBJECT_JSON_TYPE:
                {
                    var objectA = jsonA, objectB = jsonB; ///
                    jsonComparison = compareObjects(objectA, objectB);
                    break;
                }
            case _jsonTypes.PRIMITIVE_JSON_TYPE:
                {
                    var primitiveA = jsonA, primitiveB = jsonB; ///
                    jsonComparison = comparePrimitives(primitiveA, primitiveB);
                    break;
                }
        }
    }
    return jsonComparison;
}
function compareArrays(arrayA, arrayB) {
    var jsonComparison;
    var arrayALength = arrayA.length, arrayBLength = arrayB.length;
    if (arrayALength <= arrayBLength) {
        if (arrayALength === 0) {
            if (arrayALength === arrayBLength) {
                jsonComparison = _jsonComparisons.EQUAL_TO_JSON_COMPARISON;
            } else {
                jsonComparison = _jsonComparisons.STRICTLY_LESS_THAN_JSON_COMPARISON;
            }
        } else {
            var firstJSONComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
            var elementsA = arrayA, elementsB = arrayB, firstElementA = first(elementsA), elementA = firstElementA; ///
            var foundElementB = null;
            if (foundElementB === null) {
                elementsB.some(function(elementB) {
                    var jsonA = elementA, jsonB = elementB; ///
                    firstJSONComparison = compareJSON(jsonA, jsonB);
                    if (firstJSONComparison === _jsonComparisons.EQUAL_TO_JSON_COMPARISON) {
                        foundElementB = elementB; ///
                        return true;
                    }
                });
            }
            if (foundElementB === null) {
                elementsB.some(function(elementB) {
                    var jsonA = elementA, jsonB = elementB; ///
                    firstJSONComparison = compareJSON(jsonA, jsonB);
                    if (firstJSONComparison === _jsonComparisons.STRICTLY_LESS_THAN_JSON_COMPARISON) {
                        foundElementB = elementB; ///
                        return true;
                    }
                });
            }
            if (firstJSONComparison === _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON) {
                jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
            } else {
                var elementB = foundElementB; ///
                arrayA = deleteElement(arrayA, elementA); ///
                arrayB = deleteElement(arrayB, elementB); ///
                var jsonA = arrayA, jsonB = arrayB, remainingJSONComparison = compareJSON(jsonA, jsonB);
                jsonComparison = Math.max(firstJSONComparison, remainingJSONComparison);
            }
        }
    } else {
        jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
    }
    return jsonComparison;
}
function compareObjects(objectA, objectB) {
    var jsonComparison;
    var keysA = Object.keys(objectA), keysB = Object.keys(objectB), keysALength = keysA.length, keysBLength = keysB.length;
    if (keysALength <= keysBLength) {
        if (keysALength === 0) {
            if (keysALength === keysBLength) {
                jsonComparison = _jsonComparisons.EQUAL_TO_JSON_COMPARISON;
            } else {
                jsonComparison = _jsonComparisons.STRICTLY_LESS_THAN_JSON_COMPARISON;
            }
        } else {
            var firstJSONComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
            var firstKeyA = first(keysA), keyA = firstKeyA; ///
            keysB.some(function(keyB) {
                if (keyB === keyA) {
                    var valueA = objectA[keyA], valueB = objectB[keyB], jsonA = valueA, jsonB = valueB; ///
                    firstJSONComparison = compareJSON(jsonA, jsonB);
                    return true;
                }
            });
            if (firstJSONComparison === _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON) {
                jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
            } else {
                var keyB = keyA; ///
                objectA = deleteKey(objectA, keyA); ///
                objectB = deleteKey(objectB, keyB); ///
                var jsonA = objectA, jsonB = objectB, remainingJSONComparison = compareJSON(jsonA, jsonB);
                jsonComparison = Math.max(firstJSONComparison, remainingJSONComparison);
            }
        }
    } else {
        jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
    }
    return jsonComparison;
}
function comparePrimitives(primitiveA, primitiveB) {
    var jsonComparison;
    if (primitiveA === primitiveB) {
        jsonComparison = _jsonComparisons.EQUAL_TO_JSON_COMPARISON;
    } else {
        jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
    }
    return jsonComparison;
}
function deleteElement(array, element) {
    var deletedElement = element; ///
    array = array.reduce(function(array, element) {
        if (element !== deletedElement) {
            array.push(element);
        }
        return array;
    }, []);
    return array;
}
function deleteKey(object, key) {
    var deletedKey = key, keys = Object.keys(object), values = Object.values(object);
    object = keys.reduce(function(object, key, index) {
        if (key !== deletedKey) {
            var value = values[index];
            object[key] = value;
        }
        return object;
    }, {});
    return object;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gcmVxdWlyZShcIm5lY2Vzc2FyeVwiKTtcblxuaW1wb3J0IHsgdHlwZU9mIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBBUlJBWV9KU09OX1RZUEUsIE9CSkVDVF9KU09OX1RZUEUsIFBSSU1JVElWRV9KU09OX1RZUEUgfSBmcm9tIFwiLi4vanNvblR5cGVzXCI7XG5pbXBvcnQgeyBFUVVBTF9UT19KU09OX0NPTVBBUklTT04sIE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT04sIFNUUklDVExZX0xFU1NfVEhBTl9KU09OX0NPTVBBUklTT04gfSBmcm9tIFwiLi4vanNvbkNvbXBhcmlzb25zXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUpTT04oanNvbkEsIGpzb25CKSB7XG4gIGxldCBqc29uQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG5cbiAgY29uc3QganNvbkFUeXBlID0gdHlwZU9mKGpzb25BKSxcbiAgICAgICAganNvbkJUeXBlID0gdHlwZU9mKGpzb25CKTtcblxuICBpZiAoanNvbkFUeXBlID09PSBqc29uQlR5cGUpIHtcbiAgICBjb25zdCBqc29uVHlwZSA9IGpzb25BVHlwZTsgLy8vXG5cbiAgICBzd2l0Y2ggKGpzb25UeXBlKSB7XG4gICAgICBjYXNlIEFSUkFZX0pTT05fVFlQRToge1xuICAgICAgICBjb25zdCBhcnJheUEgPSBqc29uQSwgLy8vXG4gICAgICAgICAgICAgIGFycmF5QiA9IGpzb25COyAvLy9cblxuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IGNvbXBhcmVBcnJheXMoYXJyYXlBLCBhcnJheUIpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9CSkVDVF9KU09OX1RZUEU6IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0QSA9IGpzb25BLCAvLy9cbiAgICAgICAgICAgICAgb2JqZWN0QiA9IGpzb25COyAvLy9cblxuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IGNvbXBhcmVPYmplY3RzKG9iamVjdEEsIG9iamVjdEIpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFBSSU1JVElWRV9KU09OX1RZUEU6IHtcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlQSA9IGpzb25BLCAvLy9cbiAgICAgICAgICAgICAgcHJpbWl0aXZlQiA9IGpzb25COyAvLy9cblxuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IGNvbXBhcmVQcmltaXRpdmVzKHByaW1pdGl2ZUEsIHByaW1pdGl2ZUIpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBqc29uQ29tcGFyaXNvbjtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheUEsIGFycmF5Qikge1xuICBsZXQganNvbkNvbXBhcmlzb247XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoIDw9IGFycmF5Qkxlbmd0aCkge1xuICAgIGlmIChhcnJheUFMZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IEVRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGpzb25Db21wYXJpc29uID0gU1RSSUNUTFlfTEVTU19USEFOX0pTT05fQ09NUEFSSVNPTjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpcnN0SlNPTkNvbXBhcmlzb24gPSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuXG4gICAgICBjb25zdCBlbGVtZW50c0EgPSBhcnJheUEsIC8vL1xuICAgICAgICAgICAgZWxlbWVudHNCID0gYXJyYXlCLCAvLy9cbiAgICAgICAgICAgIGZpcnN0RWxlbWVudEEgPSBmaXJzdChlbGVtZW50c0EpLFxuICAgICAgICAgICAgZWxlbWVudEEgPSBmaXJzdEVsZW1lbnRBOyAvLy9cblxuICAgICAgbGV0IGZvdW5kRWxlbWVudEIgPSBudWxsO1xuXG4gICAgICBpZiAoZm91bmRFbGVtZW50QiA9PT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50c0Iuc29tZSgoZWxlbWVudEIpID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uQSA9IGVsZW1lbnRBLCAvLy9cbiAgICAgICAgICAgICAgICBqc29uQiA9IGVsZW1lbnRCOyAvLy9cblxuICAgICAgICAgIGZpcnN0SlNPTkNvbXBhcmlzb24gPSBjb21wYXJlSlNPTihqc29uQSwganNvbkIpO1xuXG4gICAgICAgICAgaWYgKGZpcnN0SlNPTkNvbXBhcmlzb24gPT09IEVRVUFMX1RPX0pTT05fQ09NUEFSSVNPTikge1xuICAgICAgICAgICAgZm91bmRFbGVtZW50QiA9IGVsZW1lbnRCOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kRWxlbWVudEIgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudHNCLnNvbWUoKGVsZW1lbnRCKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbkEgPSBlbGVtZW50QSwgLy8vXG4gICAgICAgICAgICAgICAganNvbkIgPSBlbGVtZW50QjsgLy8vXG5cbiAgICAgICAgICBmaXJzdEpTT05Db21wYXJpc29uID0gY29tcGFyZUpTT04oanNvbkEsIGpzb25CKTtcblxuICAgICAgICAgIGlmIChmaXJzdEpTT05Db21wYXJpc29uID09PSBTVFJJQ1RMWV9MRVNTX1RIQU5fSlNPTl9DT01QQVJJU09OKSB7XG4gICAgICAgICAgICBmb3VuZEVsZW1lbnRCID0gZWxlbWVudEI7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RKU09OQ29tcGFyaXNvbiA9PT0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTikge1xuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGZvdW5kRWxlbWVudEI7IC8vL1xuXG4gICAgICAgIGFycmF5QSA9IGRlbGV0ZUVsZW1lbnQoYXJyYXlBLCBlbGVtZW50QSk7IC8vL1xuXG4gICAgICAgIGFycmF5QiA9IGRlbGV0ZUVsZW1lbnQoYXJyYXlCLCBlbGVtZW50Qik7IC8vL1xuXG4gICAgICAgIGNvbnN0IGpzb25BID0gYXJyYXlBLCAgLy8vXG4gICAgICAgICAgICAgIGpzb25CID0gYXJyYXlCLCAgLy8vXG4gICAgICAgICAgICAgIHJlbWFpbmluZ0pTT05Db21wYXJpc29uID0gY29tcGFyZUpTT04oanNvbkEsIGpzb25CKTtcblxuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IE1hdGgubWF4KGZpcnN0SlNPTkNvbXBhcmlzb24sIHJlbWFpbmluZ0pTT05Db21wYXJpc29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAganNvbkNvbXBhcmlzb24gPSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9XG5cbiAgcmV0dXJuIGpzb25Db21wYXJpc29uO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlT2JqZWN0cyhvYmplY3RBLCBvYmplY3RCKSB7XG4gIGxldCBqc29uQ29tcGFyaXNvbjtcblxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iamVjdEEpLFxuICAgICAgICBrZXlzQiA9IE9iamVjdC5rZXlzKG9iamVjdEIpLFxuICAgICAgICBrZXlzQUxlbmd0aCA9IGtleXNBLmxlbmd0aCxcbiAgICAgICAga2V5c0JMZW5ndGggPSBrZXlzQi5sZW5ndGg7XG5cbiAgaWYgKGtleXNBTGVuZ3RoIDw9IGtleXNCTGVuZ3RoKSB7XG4gICAgaWYgKGtleXNBTGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoa2V5c0FMZW5ndGggPT09IGtleXNCTGVuZ3RoKSB7XG4gICAgICAgIGpzb25Db21wYXJpc29uID0gRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBTVFJJQ1RMWV9MRVNTX1RIQU5fSlNPTl9DT01QQVJJU09OO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZmlyc3RKU09OQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG5cbiAgICAgIGNvbnN0IGZpcnN0S2V5QSA9IGZpcnN0KGtleXNBKSxcbiAgICAgICAgICAgIGtleUEgPSBmaXJzdEtleUE7IC8vL1xuXG4gICAgICBrZXlzQi5zb21lKChrZXlCKSA9PiB7XG4gICAgICAgIGlmIChrZXlCID09PSBrZXlBKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVBID0gb2JqZWN0QVtrZXlBXSxcbiAgICAgICAgICAgICAgICB2YWx1ZUIgPSBvYmplY3RCW2tleUJdLFxuICAgICAgICAgICAgICAgIGpzb25BID0gdmFsdWVBLCAvLy9cbiAgICAgICAgICAgICAgICBqc29uQiA9IHZhbHVlQjsgLy8vXG5cbiAgICAgICAgICBmaXJzdEpTT05Db21wYXJpc29uID0gY29tcGFyZUpTT04oanNvbkEsIGpzb25CKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpcnN0SlNPTkNvbXBhcmlzb24gPT09IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT04pIHtcbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qga2V5QiA9IGtleUE7ICAvLy9cblxuICAgICAgICBvYmplY3RBID0gZGVsZXRlS2V5KG9iamVjdEEsIGtleUEpOyAvLy9cblxuICAgICAgICBvYmplY3RCID0gZGVsZXRlS2V5KG9iamVjdEIsIGtleUIpOyAvLy9cblxuICAgICAgICBjb25zdCBqc29uQSA9IG9iamVjdEEsICAvLy9cbiAgICAgICAgICAgICAganNvbkIgPSBvYmplY3RCLCAgLy8vXG4gICAgICAgICAgICAgIHJlbWFpbmluZ0pTT05Db21wYXJpc29uID0gY29tcGFyZUpTT04oanNvbkEsIGpzb25CKTtcblxuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IE1hdGgubWF4KGZpcnN0SlNPTkNvbXBhcmlzb24sIHJlbWFpbmluZ0pTT05Db21wYXJpc29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAganNvbkNvbXBhcmlzb24gPSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9XG5cbiAgcmV0dXJuIGpzb25Db21wYXJpc29uO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlUHJpbWl0aXZlcyhwcmltaXRpdmVBLCBwcmltaXRpdmVCKSB7XG4gIGxldCBqc29uQ29tcGFyaXNvbjtcblxuICBpZiAocHJpbWl0aXZlQSA9PT0gcHJpbWl0aXZlQikge1xuICAgIGpzb25Db21wYXJpc29uID0gRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9IGVsc2Uge1xuICAgIGpzb25Db21wYXJpc29uID0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcbiAgfVxuXG4gIHJldHVybiBqc29uQ29tcGFyaXNvbjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRWxlbWVudChhcnJheSwgZWxlbWVudCkge1xuICBjb25zdCBkZWxldGVkRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gIGFycmF5ID0gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4geyAgLy8vXG4gICAgaWYgKGVsZW1lbnQgIT09IGRlbGV0ZWRFbGVtZW50KSB7XG4gICAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlS2V5KG9iamVjdCwga2V5KSB7XG4gIGNvbnN0IGRlbGV0ZWRLZXkgPSBrZXksIC8vL1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KSxcbiAgICAgICAgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvYmplY3QpO1xuXG4gIG9iamVjdCA9IGtleXMucmVkdWNlKChvYmplY3QsIGtleSwgaW5kZXgpID0+IHsgIC8vL1xuICAgIGlmIChrZXkgIT09IGRlbGV0ZWRLZXkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2luZGV4XTtcblxuICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cbiJdLCJuYW1lcyI6WyJjb21wYXJlSlNPTiIsImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsImZpcnN0IiwianNvbkEiLCJqc29uQiIsImpzb25Db21wYXJpc29uIiwiTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiIsImpzb25BVHlwZSIsInR5cGVPZiIsImpzb25CVHlwZSIsImpzb25UeXBlIiwiQVJSQVlfSlNPTl9UWVBFIiwiYXJyYXlBIiwiYXJyYXlCIiwiY29tcGFyZUFycmF5cyIsIk9CSkVDVF9KU09OX1RZUEUiLCJvYmplY3RBIiwib2JqZWN0QiIsImNvbXBhcmVPYmplY3RzIiwiUFJJTUlUSVZFX0pTT05fVFlQRSIsInByaW1pdGl2ZUEiLCJwcmltaXRpdmVCIiwiY29tcGFyZVByaW1pdGl2ZXMiLCJhcnJheUFMZW5ndGgiLCJsZW5ndGgiLCJhcnJheUJMZW5ndGgiLCJFUVVBTF9UT19KU09OX0NPTVBBUklTT04iLCJTVFJJQ1RMWV9MRVNTX1RIQU5fSlNPTl9DT01QQVJJU09OIiwiZmlyc3RKU09OQ29tcGFyaXNvbiIsImVsZW1lbnRzQSIsImVsZW1lbnRzQiIsImZpcnN0RWxlbWVudEEiLCJlbGVtZW50QSIsImZvdW5kRWxlbWVudEIiLCJzb21lIiwiZWxlbWVudEIiLCJkZWxldGVFbGVtZW50IiwicmVtYWluaW5nSlNPTkNvbXBhcmlzb24iLCJNYXRoIiwibWF4Iiwia2V5c0EiLCJPYmplY3QiLCJrZXlzIiwia2V5c0IiLCJrZXlzQUxlbmd0aCIsImtleXNCTGVuZ3RoIiwiZmlyc3RLZXlBIiwia2V5QSIsImtleUIiLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJkZWxldGVLZXkiLCJhcnJheSIsImVsZW1lbnQiLCJkZWxldGVkRWxlbWVudCIsInJlZHVjZSIsInB1c2giLCJvYmplY3QiLCJrZXkiLCJkZWxldGVkS2V5IiwidmFsdWVzIiwiaW5kZXgiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVWdCQTs7O2VBQUFBOzs7b0JBTk87eUJBQ2dEOytCQUNvQztBQUozRyxJQUFNLEFBQUVDLGlCQUFtQkMsUUFBUSxhQUEzQkQ7QUFNUixJQUFNLEFBQUVFLFFBQVVGLGVBQVZFO0FBRUQsU0FBU0gsWUFBWUksS0FBSyxFQUFFQyxLQUFLO0lBQ3RDLElBQUlDLGlCQUFpQkM7SUFFckIsSUFBTUMsWUFBWUMsSUFBQUEsY0FBT0wsUUFDbkJNLFlBQVlELElBQUFBLGNBQU9KO0lBRXpCLElBQUlHLGNBQWNFLFdBQVc7UUFDM0IsSUFBTUMsV0FBV0gsV0FBVyxHQUFHO1FBRS9CLE9BQVFHO1lBQ04sS0FBS0M7Z0JBQWlCO29CQUNwQixJQUFNQyxTQUFTVCxPQUNUVSxTQUFTVCxPQUFPLEdBQUc7b0JBRXpCQyxpQkFBaUJTLGNBQWNGLFFBQVFDO29CQUV2QztnQkFDRjtZQUVBLEtBQUtFO2dCQUFrQjtvQkFD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