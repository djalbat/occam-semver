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
                arrayA = (0, _array.deleteElement)(arrayA, elementA); ///
                arrayB = (0, _array.deleteElement)(arrayB, elementB); ///
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
                objectA = (0, _object.deleteKey)(objectA, keyA); ///
                objectB = (0, _object.deleteKey)(objectB, keyB); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gcmVxdWlyZShcIm5lY2Vzc2FyeVwiKTtcblxuaW1wb3J0IHsgdHlwZU9mIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBkZWxldGVLZXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgZGVsZXRlRWxlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEFSUkFZX0pTT05fVFlQRSwgT0JKRUNUX0pTT05fVFlQRSwgUFJJTUlUSVZFX0pTT05fVFlQRSB9IGZyb20gXCIuLi9qc29uVHlwZXNcIjtcbmltcG9ydCB7IEVRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiwgTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiwgU1RSSUNUTFlfTEVTU19USEFOX0pTT05fQ09NUEFSSVNPTiB9IGZyb20gXCIuLi9qc29uQ29tcGFyaXNvbnNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlSlNPTihqc29uQSwganNvbkIsIGNvbXBhcmVQcmltaXRpdmVzKSB7XG4gIGxldCBqc29uQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG5cbiAgY29uc3QganNvbkFUeXBlID0gdHlwZU9mKGpzb25BKSxcbiAgICAgICAganNvbkJUeXBlID0gdHlwZU9mKGpzb25CKTtcblxuICBpZiAoanNvbkFUeXBlID09PSBqc29uQlR5cGUpIHtcbiAgICBjb25zdCBqc29uVHlwZSA9IGpzb25BVHlwZTsgLy8vXG5cbiAgICBzd2l0Y2ggKGpzb25UeXBlKSB7XG4gICAgICBjYXNlIEFSUkFZX0pTT05fVFlQRToge1xuICAgICAgICBjb25zdCBhcnJheUEgPSBqc29uQSwgLy8vXG4gICAgICAgICAgICAgIGFycmF5QiA9IGpzb25COyAvLy9cblxuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IGNvbXBhcmVBcnJheXMoYXJyYXlBLCBhcnJheUIpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9CSkVDVF9KU09OX1RZUEU6IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0QSA9IGpzb25BLCAvLy9cbiAgICAgICAgICAgICAgb2JqZWN0QiA9IGpzb25COyAvLy9cblxuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IGNvbXBhcmVPYmplY3RzKG9iamVjdEEsIG9iamVjdEIpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFBSSU1JVElWRV9KU09OX1RZUEU6IHtcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlQSA9IGpzb25BLCAvLy9cbiAgICAgICAgICAgICAgcHJpbWl0aXZlQiA9IGpzb25COyAvLy9cblxuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IGNvbXBhcmVQcmltaXRpdmVzKHByaW1pdGl2ZUEsIHByaW1pdGl2ZUIpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBqc29uQ29tcGFyaXNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBcnJheXMoYXJyYXlBLCBhcnJheUIpIHtcbiAgbGV0IGpzb25Db21wYXJpc29uO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA8PSBhcnJheUJMZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBFUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IFNUUklDVExZX0xFU1NfVEhBTl9KU09OX0NPTVBBUklTT047XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdEpTT05Db21wYXJpc29uID0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcblxuICAgICAgY29uc3QgZWxlbWVudHNBID0gYXJyYXlBLCAvLy9cbiAgICAgICAgICAgIGVsZW1lbnRzQiA9IGFycmF5QiwgLy8vXG4gICAgICAgICAgICBmaXJzdEVsZW1lbnRBID0gZmlyc3QoZWxlbWVudHNBKSxcbiAgICAgICAgICAgIGVsZW1lbnRBID0gZmlyc3RFbGVtZW50QTsgLy8vXG5cbiAgICAgIGxldCBmb3VuZEVsZW1lbnRCID0gbnVsbDtcblxuICAgICAgaWYgKGZvdW5kRWxlbWVudEIgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudHNCLnNvbWUoKGVsZW1lbnRCKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbkEgPSBlbGVtZW50QSwgLy8vXG4gICAgICAgICAgICAgICAganNvbkIgPSBlbGVtZW50QjsgLy8vXG5cbiAgICAgICAgICBmaXJzdEpTT05Db21wYXJpc29uID0gY29tcGFyZUpTT04oanNvbkEsIGpzb25CKTtcblxuICAgICAgICAgIGlmIChmaXJzdEpTT05Db21wYXJpc29uID09PSBFUVVBTF9UT19KU09OX0NPTVBBUklTT04pIHtcbiAgICAgICAgICAgIGZvdW5kRWxlbWVudEIgPSBlbGVtZW50QjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZEVsZW1lbnRCID09PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnRzQi5zb21lKChlbGVtZW50QikgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb25BID0gZWxlbWVudEEsIC8vL1xuICAgICAgICAgICAgICAgIGpzb25CID0gZWxlbWVudEI7IC8vL1xuXG4gICAgICAgICAgZmlyc3RKU09OQ29tcGFyaXNvbiA9IGNvbXBhcmVKU09OKGpzb25BLCBqc29uQik7XG5cbiAgICAgICAgICBpZiAoZmlyc3RKU09OQ29tcGFyaXNvbiA9PT0gU1RSSUNUTFlfTEVTU19USEFOX0pTT05fQ09NUEFSSVNPTikge1xuICAgICAgICAgICAgZm91bmRFbGVtZW50QiA9IGVsZW1lbnRCOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0SlNPTkNvbXBhcmlzb24gPT09IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT04pIHtcbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEIgPSBmb3VuZEVsZW1lbnRCOyAvLy9cblxuICAgICAgICBhcnJheUEgPSBkZWxldGVFbGVtZW50KGFycmF5QSwgZWxlbWVudEEpOyAvLy9cblxuICAgICAgICBhcnJheUIgPSBkZWxldGVFbGVtZW50KGFycmF5QiwgZWxlbWVudEIpOyAvLy9cblxuICAgICAgICBjb25zdCBqc29uQSA9IGFycmF5QSwgIC8vL1xuICAgICAgICAgICAgICBqc29uQiA9IGFycmF5QiwgIC8vL1xuICAgICAgICAgICAgICByZW1haW5pbmdKU09OQ29tcGFyaXNvbiA9IGNvbXBhcmVKU09OKGpzb25BLCBqc29uQik7XG5cbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBNYXRoLm1heChmaXJzdEpTT05Db21wYXJpc29uLCByZW1haW5pbmdKU09OQ29tcGFyaXNvbik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGpzb25Db21wYXJpc29uID0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcbiAgfVxuXG4gIHJldHVybiBqc29uQ29tcGFyaXNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVPYmplY3RzKG9iamVjdEEsIG9iamVjdEIpIHtcbiAgbGV0IGpzb25Db21wYXJpc29uO1xuXG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqZWN0QSksXG4gICAgICAgIGtleXNCID0gT2JqZWN0LmtleXMob2JqZWN0QiksXG4gICAgICAgIGtleXNBTGVuZ3RoID0ga2V5c0EubGVuZ3RoLFxuICAgICAgICBrZXlzQkxlbmd0aCA9IGtleXNCLmxlbmd0aDtcblxuICBpZiAoa2V5c0FMZW5ndGggPD0ga2V5c0JMZW5ndGgpIHtcbiAgICBpZiAoa2V5c0FMZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChrZXlzQUxlbmd0aCA9PT0ga2V5c0JMZW5ndGgpIHtcbiAgICAgICAganNvbkNvbXBhcmlzb24gPSBFUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IFNUUklDVExZX0xFU1NfVEhBTl9KU09OX0NPTVBBUklTT047XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdEpTT05Db21wYXJpc29uID0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcblxuICAgICAgY29uc3QgZmlyc3RLZXlBID0gZmlyc3Qoa2V5c0EpLFxuICAgICAgICAgICAga2V5QSA9IGZpcnN0S2V5QTsgLy8vXG5cbiAgICAgIGtleXNCLnNvbWUoKGtleUIpID0+IHtcbiAgICAgICAgaWYgKGtleUIgPT09IGtleUEpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZUEgPSBvYmplY3RBW2tleUFdLFxuICAgICAgICAgICAgICAgIHZhbHVlQiA9IG9iamVjdEJba2V5Ql0sXG4gICAgICAgICAgICAgICAganNvbkEgPSB2YWx1ZUEsIC8vL1xuICAgICAgICAgICAgICAgIGpzb25CID0gdmFsdWVCOyAvLy9cblxuICAgICAgICAgIGZpcnN0SlNPTkNvbXBhcmlzb24gPSBjb21wYXJlSlNPTihqc29uQSwganNvbkIpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmlyc3RKU09OQ29tcGFyaXNvbiA9PT0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTikge1xuICAgICAgICBqc29uQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBrZXlCID0ga2V5QTsgIC8vL1xuXG4gICAgICAgIG9iamVjdEEgPSBkZWxldGVLZXkob2JqZWN0QSwga2V5QSk7IC8vL1xuXG4gICAgICAgIG9iamVjdEIgPSBkZWxldGVLZXkob2JqZWN0Qiwga2V5Qik7IC8vL1xuXG4gICAgICAgIGNvbnN0IGpzb25BID0gb2JqZWN0QSwgIC8vL1xuICAgICAgICAgICAgICBqc29uQiA9IG9iamVjdEIsICAvLy9cbiAgICAgICAgICAgICAgcmVtYWluaW5nSlNPTkNvbXBhcmlzb24gPSBjb21wYXJlSlNPTihqc29uQSwganNvbkIpO1xuXG4gICAgICAgIGpzb25Db21wYXJpc29uID0gTWF0aC5tYXgoZmlyc3RKU09OQ29tcGFyaXNvbiwgcmVtYWluaW5nSlNPTkNvbXBhcmlzb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBqc29uQ29tcGFyaXNvbiA9IE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gIH1cblxuICByZXR1cm4ganNvbkNvbXBhcmlzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUHJpbWl0aXZlcyhwcmltaXRpdmVBLCBwcmltaXRpdmVCKSB7XG4gIGxldCBqc29uQ29tcGFyaXNvbjtcblxuICBpZiAocHJpbWl0aXZlQSA9PT0gcHJpbWl0aXZlQikge1xuICAgIGpzb25Db21wYXJpc29uID0gRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9IGVsc2Uge1xuICAgIGpzb25Db21wYXJpc29uID0gTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTjtcbiAgfVxuXG4gIHJldHVybiBqc29uQ29tcGFyaXNvbjtcbn1cbiJdLCJuYW1lcyI6WyJjb21wYXJlSlNPTiIsImNvbXBhcmVBcnJheXMiLCJjb21wYXJlT2JqZWN0cyIsImNvbXBhcmVQcmltaXRpdmVzIiwiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwiZmlyc3QiLCJqc29uQSIsImpzb25CIiwianNvbkNvbXBhcmlzb24iLCJOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OIiwianNvbkFUeXBlIiwidHlwZU9mIiwianNvbkJUeXBlIiwianNvblR5cGUiLCJBUlJBWV9KU09OX1RZUEUiLCJhcnJheUEiLCJhcnJheUIiLCJPQkpFQ1RfSlNPTl9UWVBFIiwib2JqZWN0QSIsIm9iamVjdEIiLCJQUklNSVRJVkVfSlNPTl9UWVBFIiwicHJpbWl0aXZlQSIsInByaW1pdGl2ZUIiLCJhcnJheUFMZW5ndGgiLCJsZW5ndGgiLCJhcnJheUJMZW5ndGgiLCJFUVVBTF9UT19KU09OX0NPTVBBUklTT04iLCJTVFJJQ1RMWV9MRVNTX1RIQU5fSlNPTl9DT01QQVJJU09OIiwiZmlyc3RKU09OQ29tcGFyaXNvbiIsImVsZW1lbnRzQSIsImVsZW1lbnRzQiIsImZpcnN0RWxlbWVudEEiLCJlbGVtZW50QSIsImZvdW5kRWxlbWVudEIiLCJzb21lIiwiZWxlbWVudEIiLCJkZWxldGVFbGVtZW50IiwicmVtYWluaW5nSlNPTkNvbXBhcmlzb24iLCJNYXRoIiwibWF4Iiwia2V5c0EiLCJPYmplY3QiLCJrZXlzIiwia2V5c0IiLCJrZXlzQUxlbmd0aCIsImtleXNCTGVuZ3RoIiwiZmlyc3RLZXlBIiwia2V5QSIsImtleUIiLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJkZWxldGVLZXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlnQkEsV0FBVztlQUFYQTs7SUEwQ0FDLGFBQWE7ZUFBYkE7O0lBNEVBQyxjQUFjO2VBQWRBOztJQXlEQUMsaUJBQWlCO2VBQWpCQTs7O29CQXZMTztzQkFDRztxQkFDSTt5QkFDeUM7K0JBQ29DO0FBTjNHLElBQU0sQUFBRUMsaUJBQW1CQyxRQUFRLGFBQTNCRDtBQVFSLElBQU0sQUFBRUUsUUFBVUYsZUFBVkU7QUFFRCxTQUFTTixZQUFZTyxLQUFLLEVBQUVDLEtBQUssRUFBRUwsaUJBQWlCO0lBQ3pELElBQUlNLGlCQUFpQkM7SUFFckIsSUFBTUMsWUFBWUMsSUFBQUEsY0FBT0wsUUFDbkJNLFlBQVlELElBQUFBLGNBQU9KO0lBRXpCLElBQUlHLGNBQWNFLFdBQVc7UUFDM0IsSUFBTUMsV0FBV0gsV0FBVyxHQUFHO1FBRS9CLE9BQVFHO1lBQ04sS0FBS0M7Z0JBQWlCO29CQUNwQixJQUFNQyxTQUFTVCxPQUNUVSxTQUFTVCxPQUFPLEdBQUc7b0JBRXpCQyxpQkFBaUJSLGNBQWNlLFFBQVFDO29CQUV2QztnQkFDRjtZQUVBLEtBQUtDO2dCQUFrQjtvQkFDckIsSUFBTUMsVUFBVVosT0FDVmEsVUFBVVosT0FBTyxHQUFHO29CQUUxQkMsaUJBQWlCUCxlQUFlaUIsU0FBU0M7b0JBRXpDO2dCQUNGO1lBRUEsS0FBS0M7Z0JBQXFCO29CQUN4QixJQUFNQyxhQUFhZixPQUNiZ0IsYUFBYWYsT0FBTyxHQUFHO29CQUU3QkMsaUJBQWlCTixrQkFBa0JtQixZQUFZQztvQkFFL0M7Z0JBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT2Q7QUFDVDtBQUVPLFNBQVNSLGNBQWNlLE1BQU0sRUFBRUMsTUFBTTtJQUMxQyxJQUFJUjtJQUVKLElBQU1lLGVBQWVSLE9BQU9TLFFBQ3RCQyxlQUFlVCxPQUFPUTtJQUU1QixJQUFJRCxnQkFBZ0JFLGNBQWM7UUFDaEMsSUFBSUYsaUJBQWlCLEdBQUc7WUFDdEIsSUFBSUEsaUJBQWlCRSxjQUFjO2dCQUNqQ2pCLGlCQUFpQmtCO1lBQ25CLE9BQU87Z0JBQ0xsQixpQkFBaUJtQjtZQUNuQjtRQUNGLE9BQU87WUFDTCxJQUFJQyxzQkFBc0JuQjtZQUUxQixJQUFNb0IsWUFBWWQsUUFDWmUsWUFBWWQsUUFDWmUsZ0JBQWdCMUIsTUFBTXdCLFlBQ3RCRyxXQUFXRCxlQUFlLEdBQUc7WUFFbkMsSUFBSUUsZ0JBQWdCO1lBRXBCLElBQUlBLGtCQUFrQixNQUFNO2dCQUMxQkgsVUFBVUksS0FBSyxTQUFDQztvQkFDZCxJQUFNN0IsUUFBUTBCLFVBQ1J6QixRQUFRNEIsVUFBVSxHQUFHO29CQUUzQlAsc0JBQXNCN0IsWUFBWU8sT0FBT0M7b0JBRXpDLElBQUlxQix3QkFBd0JGLDJDQUEwQjt3QkFDcERPLGdCQUFnQkUsVUFBVSxHQUFHO3dCQUU3QixPQUFPO29CQUNUO2dCQUNGO1lBQ0Y7WUFFQSxJQUFJRixrQkFBa0IsTUFBTTtnQkFDMUJILFVBQVVJLEtBQUssU0FBQ0M7b0JBQ2QsSUFBTTdCLFFBQVEwQixVQUNSekIsUUFBUTRCLFVBQVUsR0FBRztvQkFFM0JQLHNCQUFzQjdCLFlBQVlPLE9BQU9DO29CQUV6QyxJQUFJcUIsd0JBQXdCRCxxREFBb0M7d0JBQzlETSxnQkFBZ0JFLFVBQVUsR0FBRzt3QkFFN0IsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1lBRUEsSUFBSVAsd0JBQXdCbkIsK0NBQThCO2dCQUN4REQsaUJBQWlCQztZQUNuQixPQUFPO2dCQUNMLElBQU0wQixXQUFXRixlQUFlLEdBQUc7Z0JBRW5DbEIsU0FBU3FCLElBQUFBLHNCQUFjckIsUUFBUWlCLFdBQVcsR0FBRztnQkFFN0NoQixTQUFTb0IsSUFBQUEsc0JBQWNwQixRQUFRbUIsV0FBVyxHQUFHO2dCQUU3QyxJQUFNN0IsUUFBUVMsUUFDUlIsUUFBUVMsUUFDUnFCLDBCQUEwQnRDLFlBQVlPLE9BQU9DO2dCQUVuREMsaUJBQWlCOEIsS0FBS0MsSUFBSVgscUJBQXFCUztZQUNqRDtRQUNGO0lBQ0YsT0FBTztRQUNMN0IsaUJBQWlCQztJQUNuQjtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTUCxlQUFlaUIsT0FBTyxFQUFFQyxPQUFPO0lBQzdDLElBQUlYO0lBRUosSUFBTWdDLFFBQVFDLE9BQU9DLEtBQUt4QixVQUNwQnlCLFFBQVFGLE9BQU9DLEtBQUt2QixVQUNwQnlCLGNBQWNKLE1BQU1oQixRQUNwQnFCLGNBQWNGLE1BQU1uQjtJQUUxQixJQUFJb0IsZUFBZUMsYUFBYTtRQUM5QixJQUFJRCxnQkFBZ0IsR0FBRztZQUNyQixJQUFJQSxnQkFBZ0JDLGFBQWE7Z0JBQy9CckMsaUJBQWlCa0I7WUFDbkIsT0FBTztnQkFDTGxCLGlCQUFpQm1CO1lBQ25CO1FBQ0YsT0FBTztZQUNMLElBQUlDLHNCQUFzQm5CO1lBRTFCLElBQU1xQyxZQUFZekMsTUFBTW1DLFFBQ2xCTyxPQUFPRCxXQUFXLEdBQUc7WUFFM0JILE1BQU1ULEtBQUssU0FBQ2M7Z0JBQ1YsSUFBSUEsU0FBU0QsTUFBTTtvQkFDakIsSUFBTUUsU0FBUy9CLE9BQU8sQ0FBQzZCLEtBQUssRUFDdEJHLFNBQVMvQixPQUFPLENBQUM2QixLQUFLLEVBQ3RCMUMsUUFBUTJDLFFBQ1IxQyxRQUFRMkMsUUFBUSxHQUFHO29CQUV6QnRCLHNCQUFzQjdCLFlBQVlPLE9BQU9DO29CQUV6QyxPQUFPO2dCQUNUO1lBQ0Y7WUFFQSxJQUFJcUIsd0JBQXdCbkIsK0NBQThCO2dCQUN4REQsaUJBQWlCQztZQUNuQixPQUFPO2dCQUNMLElBQU11QyxPQUFPRCxNQUFPLEdBQUc7Z0JBRXZCN0IsVUFBVWlDLElBQUFBLG1CQUFVakMsU0FBUzZCLE9BQU8sR0FBRztnQkFFdkM1QixVQUFVZ0MsSUFBQUEsbUJBQVVoQyxTQUFTNkIsT0FBTyxHQUFHO2dCQUV2QyxJQUFNMUMsUUFBUVksU0FDUlgsUUFBUVksU0FDUmtCLDBCQUEwQnRDLFlBQVlPLE9BQU9DO2dCQUVuREMsaUJBQWlCOEIsS0FBS0MsSUFBSVgscUJBQXFCUztZQUNqRDtRQUNGO0lBQ0YsT0FBTztRQUNMN0IsaUJBQWlCQztJQUNuQjtJQUVBLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTTixrQkFBa0JtQixVQUFVLEVBQUVDLFVBQVU7SUFDdEQsSUFBSWQ7SUFFSixJQUFJYSxlQUFlQyxZQUFZO1FBQzdCZCxpQkFBaUJrQjtJQUNuQixPQUFPO1FBQ0xsQixpQkFBaUJDO0lBQ25CO0lBRUEsT0FBT0Q7QUFDVCJ9