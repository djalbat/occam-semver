"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    compareJSON: function() {
        return compareJSON;
    },
    compareArrays: function() {
        return compareArrays;
    },
    compareObjects: function() {
        return compareObjects;
    },
    comparePrimitives: function() {
        return comparePrimitives;
    }
});
var _type = require("../utilities/type");
var _object = require("../utilities/object");
var _array = require("../utilities/array");
var _jsonTypes = require("../jsonTypes");
var _jsonComparisons = require("../jsonComparisons");
var arrayUtilities = require("necessary").arrayUtilities;
var first = arrayUtilities.first;
function compareJSON(jsonA, jsonB, comparePrimitives) {
    var jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
    var jsonAType = (0, _type.typeOf)(jsonA), jsonBType = (0, _type.typeOf)(jsonB);
    if (jsonAType === jsonBType) {
        var jsonType = jsonAType; ///
        switch(jsonType){
            case _jsonTypes.ARRAY_JSON_TYPE:
                {
                    var arrayA = jsonA, arrayB = jsonB; ///
                    jsonComparison = compareArrays(arrayA, arrayB, comparePrimitives);
                    break;
                }
            case _jsonTypes.OBJECT_JSON_TYPE:
                {
                    var objectA = jsonA, objectB = jsonB; ///
                    jsonComparison = compareObjects(objectA, objectB, comparePrimitives);
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
function compareArrays(arrayA, arrayB, comparePrimitives) {
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
                    firstJSONComparison = compareJSON(jsonA, jsonB, comparePrimitives);
                    if (firstJSONComparison === _jsonComparisons.EQUAL_TO_JSON_COMPARISON) {
                        foundElementB = elementB; ///
                        return true;
                    }
                });
            }
            if (foundElementB === null) {
                elementsB.some(function(elementB) {
                    var jsonA = elementA, jsonB = elementB; ///
                    firstJSONComparison = compareJSON(jsonA, jsonB, comparePrimitives);
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
                arrayA = (0, _array.deleteElement)(arrayA, elementA); ///
                arrayB = (0, _array.deleteElement)(arrayB, elementB); ///
                var jsonA = arrayA, jsonB = arrayB, remainingJSONComparison = compareJSON(jsonA, jsonB, comparePrimitives);
                jsonComparison = Math.max(firstJSONComparison, remainingJSONComparison);
            }
        }
    } else {
        jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
    }
    return jsonComparison;
}
function compareObjects(objectA, objectB, comparePrimitives) {
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
                    firstJSONComparison = compareJSON(jsonA, jsonB, comparePrimitives);
                    return true;
                }
            });
            if (firstJSONComparison === _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON) {
                jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
            } else {
                var keyB = keyA; ///
                objectA = (0, _object.deleteKey)(objectA, keyA); ///
                objectB = (0, _object.deleteKey)(objectB, keyB); ///
                var jsonA = objectA, jsonB = objectB, remainingJSONComparison = compareJSON(jsonA, jsonB, comparePrimitives);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gcmVxdWlyZShcIm5lY2Vzc2FyeVwiKTtcblxuaW1wb3J0IHsgdHlwZU9mIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBkZWxldGVLZXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgZGVsZXRlRWxlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEFSUkFZX0pTT05fVFlQRSwgT0JKRUNUX0pTT05fVFlQRSwgUFJJTUlUSVZFX0pTT05fVFlQRSB9IGZyb20gXCIuLi9qc29uVHlwZXNcIjtcbmltcG9ydCB7IEVRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiwgTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiwgU1RSSUNUTFlfTEVTU19USEFOX0pTT05fQ09NUEFSSVNPTiB9IGZyb20gXCIuLi9qc29uQ29tcGFyaXNvbnNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlSlNPTihqc29uQSwganNvbkIsIGNvbXBhcmVQcmltaXRpdmVzKSB7XG4gIGxldCBqc29uQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG5cbiAgY29uc3QganNvbkFUeXBlID0gdHlwZU9mKGpzb25BKSxcbiAgICAgICAganNvbkJUeXBlID0gdHlwZU9mKGpzb25CKTtcblxuICBpZiAoanNvbkFUeXBlID09PSBqc29uQlR5cGUpIHtcbiAgICBjb25zdCBqc29uVHlwZSA9IGpzb25BVHlwZTsgLy8vXG5cbiAgICBzd2l0Y2ggKGpzb25UeXBlKSB7XG4gICAgICBjYXNlIEFSUkFZX0pTT05fVFlQRToge1xuICAgICAgICBjb25zdCBhcnJheUEgPSBqc29uQSwgLy8vXG4gICAgICAgICAgICAgIGFycmF5QiA9IGpzb25COyAvLy9cblxuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IGNvbXBhcmVBcnJheXMoYXJyYXlBLCBhcnJheUIsIGNvbXBhcmVQcmltaXRpdmVzKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBPQkpFQ1RfSlNPTl9UWVBFOiB7XG4gICAgICAgIGNvbnN0IG9iamVjdEEgPSBqc29uQSwgLy8vXG4gICAgICAgICAgICAgIG9iamVjdEIgPSBqc29uQjsgLy8vXG5cbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBjb21wYXJlT2JqZWN0cyhvYmplY3RBLCBvYmplY3RCLCBjb21wYXJlUHJpbWl0aXZlcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgUFJJTUlUSVZFX0pTT05fVFlQRToge1xuICAgICAgICBjb25zdCBwcmltaXRpdmVBID0ganNvbkEsIC8vL1xuICAgICAgICAgICAgICBwcmltaXRpdmVCID0ganNvbkI7IC8vL1xuXG4gICAgICAgIGpzb25Db21wYXJpc29uID0gY29tcGFyZVByaW1pdGl2ZXMocHJpbWl0aXZlQSwgcHJpbWl0aXZlQik7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGpzb25Db21wYXJpc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheUEsIGFycmF5QiwgY29tcGFyZVByaW1pdGl2ZXMpIHtcbiAgbGV0IGpzb25Db21wYXJpc29uO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA8PSBhcnJheUJMZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBFUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IFNUUklDVExZX0xFU1NfVEhBTl9KU09OX0NPTVBBUklTT047XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdEpTT05Db21wYXJpc29uID0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcblxuICAgICAgY29uc3QgZWxlbWVudHNBID0gYXJyYXlBLCAvLy9cbiAgICAgICAgICAgIGVsZW1lbnRzQiA9IGFycmF5QiwgLy8vXG4gICAgICAgICAgICBmaXJzdEVsZW1lbnRBID0gZmlyc3QoZWxlbWVudHNBKSxcbiAgICAgICAgICAgIGVsZW1lbnRBID0gZmlyc3RFbGVtZW50QTsgLy8vXG5cbiAgICAgIGxldCBmb3VuZEVsZW1lbnRCID0gbnVsbDtcblxuICAgICAgaWYgKGZvdW5kRWxlbWVudEIgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudHNCLnNvbWUoKGVsZW1lbnRCKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbkEgPSBlbGVtZW50QSwgLy8vXG4gICAgICAgICAgICAgICAganNvbkIgPSBlbGVtZW50QjsgLy8vXG5cbiAgICAgICAgICBmaXJzdEpTT05Db21wYXJpc29uID0gY29tcGFyZUpTT04oanNvbkEsIGpzb25CLCBjb21wYXJlUHJpbWl0aXZlcyk7XG5cbiAgICAgICAgICBpZiAoZmlyc3RKU09OQ29tcGFyaXNvbiA9PT0gRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OKSB7XG4gICAgICAgICAgICBmb3VuZEVsZW1lbnRCID0gZWxlbWVudEI7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRFbGVtZW50QiA9PT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50c0Iuc29tZSgoZWxlbWVudEIpID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uQSA9IGVsZW1lbnRBLCAvLy9cbiAgICAgICAgICAgICAgICBqc29uQiA9IGVsZW1lbnRCOyAvLy9cblxuICAgICAgICAgIGZpcnN0SlNPTkNvbXBhcmlzb24gPSBjb21wYXJlSlNPTihqc29uQSwganNvbkIsIGNvbXBhcmVQcmltaXRpdmVzKTtcblxuICAgICAgICAgIGlmIChmaXJzdEpTT05Db21wYXJpc29uID09PSBTVFJJQ1RMWV9MRVNTX1RIQU5fSlNPTl9DT01QQVJJU09OKSB7XG4gICAgICAgICAgICBmb3VuZEVsZW1lbnRCID0gZWxlbWVudEI7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RKU09OQ29tcGFyaXNvbiA9PT0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTikge1xuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGZvdW5kRWxlbWVudEI7IC8vL1xuXG4gICAgICAgIGFycmF5QSA9IGRlbGV0ZUVsZW1lbnQoYXJyYXlBLCBlbGVtZW50QSk7IC8vL1xuXG4gICAgICAgIGFycmF5QiA9IGRlbGV0ZUVsZW1lbnQoYXJyYXlCLCBlbGVtZW50Qik7IC8vL1xuXG4gICAgICAgIGNvbnN0IGpzb25BID0gYXJyYXlBLCAgLy8vXG4gICAgICAgICAgICAgIGpzb25CID0gYXJyYXlCLCAgLy8vXG4gICAgICAgICAgICAgIHJlbWFpbmluZ0pTT05Db21wYXJpc29uID0gY29tcGFyZUpTT04oanNvbkEsIGpzb25CLCBjb21wYXJlUHJpbWl0aXZlcyk7XG5cbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBNYXRoLm1heChmaXJzdEpTT05Db21wYXJpc29uLCByZW1haW5pbmdKU09OQ29tcGFyaXNvbik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGpzb25Db21wYXJpc29uID0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcbiAgfVxuXG4gIHJldHVybiBqc29uQ29tcGFyaXNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVPYmplY3RzKG9iamVjdEEsIG9iamVjdEIsIGNvbXBhcmVQcmltaXRpdmVzKSB7XG4gIGxldCBqc29uQ29tcGFyaXNvbjtcblxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iamVjdEEpLFxuICAgICAgICBrZXlzQiA9IE9iamVjdC5rZXlzKG9iamVjdEIpLFxuICAgICAgICBrZXlzQUxlbmd0aCA9IGtleXNBLmxlbmd0aCxcbiAgICAgICAga2V5c0JMZW5ndGggPSBrZXlzQi5sZW5ndGg7XG5cbiAgaWYgKGtleXNBTGVuZ3RoIDw9IGtleXNCTGVuZ3RoKSB7XG4gICAgaWYgKGtleXNBTGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoa2V5c0FMZW5ndGggPT09IGtleXNCTGVuZ3RoKSB7XG4gICAgICAgIGpzb25Db21wYXJpc29uID0gRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBTVFJJQ1RMWV9MRVNTX1RIQU5fSlNPTl9DT01QQVJJU09OO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZmlyc3RKU09OQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG5cbiAgICAgIGNvbnN0IGZpcnN0S2V5QSA9IGZpcnN0KGtleXNBKSxcbiAgICAgICAgICAgIGtleUEgPSBmaXJzdEtleUE7IC8vL1xuXG4gICAgICBrZXlzQi5zb21lKChrZXlCKSA9PiB7XG4gICAgICAgIGlmIChrZXlCID09PSBrZXlBKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVBID0gb2JqZWN0QVtrZXlBXSxcbiAgICAgICAgICAgICAgICB2YWx1ZUIgPSBvYmplY3RCW2tleUJdLFxuICAgICAgICAgICAgICAgIGpzb25BID0gdmFsdWVBLCAvLy9cbiAgICAgICAgICAgICAgICBqc29uQiA9IHZhbHVlQjsgLy8vXG5cbiAgICAgICAgICBmaXJzdEpTT05Db21wYXJpc29uID0gY29tcGFyZUpTT04oanNvbkEsIGpzb25CLCBjb21wYXJlUHJpbWl0aXZlcyk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXJzdEpTT05Db21wYXJpc29uID09PSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OKSB7XG4gICAgICAgIGpzb25Db21wYXJpc29uID0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGtleUIgPSBrZXlBOyAgLy8vXG5cbiAgICAgICAgb2JqZWN0QSA9IGRlbGV0ZUtleShvYmplY3RBLCBrZXlBKTsgLy8vXG5cbiAgICAgICAgb2JqZWN0QiA9IGRlbGV0ZUtleShvYmplY3RCLCBrZXlCKTsgLy8vXG5cbiAgICAgICAgY29uc3QganNvbkEgPSBvYmplY3RBLCAgLy8vXG4gICAgICAgICAgICAgIGpzb25CID0gb2JqZWN0QiwgIC8vL1xuICAgICAgICAgICAgICByZW1haW5pbmdKU09OQ29tcGFyaXNvbiA9IGNvbXBhcmVKU09OKGpzb25BLCBqc29uQiwgY29tcGFyZVByaW1pdGl2ZXMpO1xuXG4gICAgICAgIGpzb25Db21wYXJpc29uID0gTWF0aC5tYXgoZmlyc3RKU09OQ29tcGFyaXNvbiwgcmVtYWluaW5nSlNPTkNvbXBhcmlzb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBqc29uQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gIH1cblxuICByZXR1cm4ganNvbkNvbXBhcmlzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUHJpbWl0aXZlcyhwcmltaXRpdmVBLCBwcmltaXRpdmVCKSB7XG4gIGxldCBqc29uQ29tcGFyaXNvbjtcblxuICBpZiAocHJpbWl0aXZlQSA9PT0gcHJpbWl0aXZlQikge1xuICAgIGpzb25Db21wYXJpc29uID0gRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9IGVsc2Uge1xuICAgIGpzb25Db21wYXJpc29uID0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcbiAgfVxuXG4gIHJldHVybiBqc29uQ29tcGFyaXNvbjtcbn1cbiJdLCJuYW1lcyI6WyJjb21wYXJlSlNPTiIsImNvbXBhcmVBcnJheXMiLCJjb21wYXJlT2JqZWN0cyIsImNvbXBhcmVQcmltaXRpdmVzIiwiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwiZmlyc3QiLCJqc29uQSIsImpzb25CIiwianNvbkNvbXBhcmlzb24iLCJOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OIiwianNvbkFUeXBlIiwidHlwZU9mIiwianNvbkJUeXBlIiwianNvblR5cGUiLCJBUlJBWV9KU09OX1RZUEUiLCJhcnJheUEiLCJhcnJheUIiLCJPQkpFQ1RfSlNPTl9UWVBFIiwib2JqZWN0QSIsIm9iamVjdEIiLCJQUklNSVRJVkVfSlNPTl9UWVBFIiwicHJpbWl0aXZlQSIsInByaW1pdGl2ZUIiLCJhcnJheUFMZW5ndGgiLCJsZW5ndGgiLCJhcnJheUJMZW5ndGgiLCJFUVVBTF9UT19KU09OX0NPTVBBUklTT04iLCJTVFJJQ1RMWV9MRVNTX1RIQU5fSlNPTl9DT01QQVJJU09OIiwiZmlyc3RKU09OQ29tcGFyaXNvbiIsImVsZW1lbnRzQSIsImVsZW1lbnRzQiIsImZpcnN0RWxlbWVudEEiLCJlbGVtZW50QSIsImZvdW5kRWxlbWVudEIiLCJzb21lIiwiZWxlbWVudEIiLCJkZWxldGVFbGVtZW50IiwicmVtYWluaW5nSlNPTkNvbXBhcmlzb24iLCJNYXRoIiwibWF4Iiwia2V5c0EiLCJPYmplY3QiLCJrZXlzIiwia2V5c0IiLCJrZXlzQUxlbmd0aCIsImtleXNCTGVuZ3RoIiwiZmlyc3RLZXlBIiwia2V5QSIsImtleUIiLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJkZWxldGVLZXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlnQkEsV0FBVztlQUFYQTs7SUEwQ0FDLGFBQWE7ZUFBYkE7O0lBNEVBQyxjQUFjO2VBQWRBOztJQXlEQUMsaUJBQWlCO2VBQWpCQTs7O29CQXZMTztzQkFDRztxQkFDSTt5QkFDeUM7K0JBQ29DO0FBTjNHLElBQU0sQUFBRUMsaUJBQW1CQyxRQUFRLGFBQTNCRDtBQVFSLElBQU0sQUFBRUUsUUFBVUYsZUFBVkU7QUFFRCxTQUFTTixZQUFZTyxLQUFLLEVBQUVDLEtBQUssRUFBRUwsaUJBQWlCO0lBQ3pELElBQUlNLGlCQUFpQkM7SUFFckIsSUFBTUMsWUFBWUMsSUFBQUEsY0FBT0wsUUFDbkJNLFlBQVlELElBQUFBLGNBQU9KO0lBRXpCLElBQUlHLGNBQWNFLFdBQVc7UUFDM0IsSUFBTUMsV0FBV0gsV0FBVyxHQUFHO1FBRS9CLE9BQVFHO1lBQ04sS0FBS0M7Z0JBQWlCO29CQUNwQixJQUFNQyxTQUFTVCxPQUNUVSxTQUFTVCxPQUFPLEdBQUc7b0JBRXpCQyxpQkFBaUJSLGNBQWNlLFFBQVFDLFFBQVFkO29CQUUvQztnQkFDRjtZQUVBLEtBQUtlO2dCQUFrQjtvQkFDckIsSUFBTUMsVUFBVVosT0FDVmEsVUFBVVosT0FBTyxHQUFHO29CQUUxQkMsaUJBQWlCUCxlQUFlaUIsU0FBU0MsU0FBU2pCO29CQUVsRDtnQkFDRjtZQUVBLEtBQUtrQjtnQkFBcUI7b0JBQ3hCLElBQU1DLGFBQWFmLE9BQ2JnQixhQUFhZixPQUFPLEdBQUc7b0JBRTdCQyxpQkFBaUJOLGtCQUFrQm1CLFlBQVlDO29CQUUvQztnQkFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPZDtBQUNUO0FBRU8sU0FBU1IsY0FBY2UsTUFBTSxFQUFFQyxNQUFNLEVBQUVkLGlCQUFpQjtJQUM3RCxJQUFJTTtJQUVKLElBQU1lLGVBQWVSLE9BQU9TLFFBQ3RCQyxlQUFlVCxP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