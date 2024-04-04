"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "typeOf", {
    enumerable: true,
    get: function() {
        return typeOf;
    }
});
var _constants = require("../constants");
var _jsonTypes = require("../jsonTypes");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function typeOf(json) {
    var type;
    var _null = isNull(json), array = isArray(json), object = isObject(json), primitive = isPrimitive(json);
    if (_null) {
        type = _jsonTypes.NULL_JSON_TYPE;
    }
    if (array) {
        type = _jsonTypes.ARRAY_JSON_TYPE;
    }
    if (object) {
        type = _jsonTypes.OBJECT_JSON_TYPE;
    }
    if (primitive) {
        type = _jsonTypes.PRIMITIVE_JSON_TYPE;
    }
    return type;
}
function isNull(json) {
    var _null = json === null;
    return _null;
}
function isArray(json) {
    var array = Array.isArray(json);
    return array;
}
function isObject(json) {
    var array = isArray(json), primitive = isPrimitive(json), object = !array && !primitive;
    return object;
}
function isString(json) {
    var string = (typeof json === "undefined" ? "undefined" : _type_of(json)) === _constants.STRING;
    return string;
}
function isNumber(json) {
    var number = (typeof json === "undefined" ? "undefined" : _type_of(json)) === _constants.NUMBER;
    return number;
}
function isBoolean(json) {
    var boolean = (typeof json === "undefined" ? "undefined" : _type_of(json)) === _constants.BOOLEAN;
    return boolean;
}
function isPrimitive(json) {
    var _null = isNull(json), string = isString(json), number = isNumber(json), boolean = isBoolean(json), primitive = _null || string || number || boolean;
    return primitive;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1RSSU5HLCBOVU1CRVIsIEJPT0xFQU4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOVUxMX0pTT05fVFlQRSwgQVJSQVlfSlNPTl9UWVBFLCBPQkpFQ1RfSlNPTl9UWVBFLCBQUklNSVRJVkVfSlNPTl9UWVBFIH0gZnJvbSBcIi4uL2pzb25UeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZU9mKGpzb24pIHtcbiAgbGV0IHR5cGU7XG5cbiAgY29uc3QgX251bGwgPSBpc051bGwoanNvbiksXG4gICAgICAgIGFycmF5ID0gaXNBcnJheShqc29uKSxcbiAgICAgICAgb2JqZWN0ID0gaXNPYmplY3QoanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlKGpzb24pO1xuXG4gIGlmIChfbnVsbCkge1xuICAgIHR5cGUgPSBOVUxMX0pTT05fVFlQRTtcbiAgfVxuXG4gIGlmIChhcnJheSkge1xuICAgIHR5cGUgPSBBUlJBWV9KU09OX1RZUEU7XG4gIH1cblxuICBpZiAob2JqZWN0KSB7XG4gICAgdHlwZSA9IE9CSkVDVF9KU09OX1RZUEU7XG4gIH1cblxuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgdHlwZSA9IFBSSU1JVElWRV9KU09OX1RZUEU7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gaXNOdWxsKGpzb24pIHtcbiAgY29uc3QgX251bGwgPSAoanNvbiA9PT0gbnVsbCk7XG5cbiAgcmV0dXJuIF9udWxsO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KGpzb24pIHtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGpzb24pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoanNvbikge1xuICBjb25zdCBhcnJheSA9IGlzQXJyYXkoanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlKGpzb24pLFxuICAgICAgICBvYmplY3QgPSAoIWFycmF5ICYmICFwcmltaXRpdmUpO1xuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGpzb24pIHtcbiAgY29uc3Qgc3RyaW5nID0gKCh0eXBlb2YganNvbikgPT09IFNUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoanNvbikge1xuICBjb25zdCBudW1iZXIgPSAoKHR5cGVvZiBqc29uKSA9PT0gTlVNQkVSKTtcblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oanNvbikge1xuICBjb25zdCBib29sZWFuID0gKCh0eXBlb2YganNvbikgPT09IEJPT0xFQU4pO1xuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShqc29uKSB7XG4gIGNvbnN0IF9udWxsID0gaXNOdWxsKGpzb24pLFxuICAgICAgICBzdHJpbmcgPSBpc1N0cmluZyhqc29uKSxcbiAgICAgICAgbnVtYmVyID0gaXNOdW1iZXIoanNvbiksXG4gICAgICAgIGJvb2xlYW4gPSBpc0Jvb2xlYW4oanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IChfbnVsbCB8fCBzdHJpbmcgfHwgbnVtYmVyIHx8IGJvb2xlYW4pO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG4iXSwibmFtZXMiOlsidHlwZU9mIiwianNvbiIsInR5cGUiLCJfbnVsbCIsImlzTnVsbCIsImFycmF5IiwiaXNBcnJheSIsIm9iamVjdCIsImlzT2JqZWN0IiwicHJpbWl0aXZlIiwiaXNQcmltaXRpdmUiLCJOVUxMX0pTT05fVFlQRSIsIkFSUkFZX0pTT05fVFlQRSIsIk9CSkVDVF9KU09OX1RZUEUiLCJQUklNSVRJVkVfSlNPTl9UWVBFIiwiQXJyYXkiLCJpc1N0cmluZyIsInN0cmluZyIsIlNUUklORyIsImlzTnVtYmVyIiwibnVtYmVyIiwiTlVNQkVSIiwiaXNCb29sZWFuIiwiYm9vbGVhbiIsIkJPT0xFQU4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLZ0JBOzs7ZUFBQUE7Ozt5QkFId0I7eUJBQytDOzs7OztBQUVoRixTQUFTQSxPQUFPQyxJQUFJO0lBQ3pCLElBQUlDO0lBRUosSUFBTUMsUUFBUUMsT0FBT0gsT0FDZkksUUFBUUMsUUFBUUwsT0FDaEJNLFNBQVNDLFNBQVNQLE9BQ2xCUSxZQUFZQyxZQUFZVDtJQUU5QixJQUFJRSxPQUFPO1FBQ1RELE9BQU9TLHlCQUFjO0lBQ3ZCO0lBRUEsSUFBSU4sT0FBTztRQUNUSCxPQUFPVSwwQkFBZTtJQUN4QjtJQUVBLElBQUlMLFFBQVE7UUFDVkwsT0FBT1csMkJBQWdCO0lBQ3pCO0lBRUEsSUFBSUosV0FBVztRQUNiUCxPQUFPWSw4QkFBbUI7SUFDNUI7SUFFQSxPQUFPWjtBQUNUO0FBRUEsU0FBU0UsT0FBT0gsSUFBSTtJQUNsQixJQUFNRSxRQUFTRixTQUFTO0lBRXhCLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTRyxRQUFRTCxJQUFJO0lBQ25CLElBQU1JLFFBQVFVLE1BQU1ULE9BQU8sQ0FBQ0w7SUFFNUIsT0FBT0k7QUFDVDtBQUVBLFNBQVNHLFNBQVNQLElBQUk7SUFDcEIsSUFBTUksUUFBUUMsUUFBUUwsT0FDaEJRLFlBQVlDLFlBQVlULE9BQ3hCTSxTQUFVLENBQUNGLFNBQVMsQ0FBQ0k7SUFFM0IsT0FBT0Y7QUFDVDtBQUVBLFNBQVNTLFNBQVNmLElBQUk7SUFDcEIsSUFBTWdCLFNBQVUsQUFBQyxDQUFBLE9BQU9oQixxQ0FBUCxTQUFPQSxLQUFHLE1BQU9pQixpQkFBTTtJQUV4QyxPQUFPRDtBQUNUO0FBRUEsU0FBU0UsU0FBU2xCLElBQUk7SUFDcEIsSUFBTW1CLFNBQVUsQUFBQyxDQUFBLE9BQU9uQixxQ0FBUCxTQUFPQSxLQUFHLE1BQU9vQixpQkFBTTtJQUV4QyxPQUFPRDtBQUNUO0FBRUEsU0FBU0UsVUFBVXJCLElBQUk7SUFDckIsSUFBTXNCLFVBQVcsQUFBQyxDQUFBLE9BQU90QixxQ0FBUCxTQUFPQSxLQUFHLE1BQU91QixrQkFBTztJQUUxQyxPQUFPRDtBQUNUO0FBRUEsU0FBU2IsWUFBWVQsSUFBSTtJQUN2QixJQUFNRSxRQUFRQyxPQUFPSCxPQUNmZ0IsU0FBU0QsU0FBU2YsT0FDbEJtQixTQUFTRCxTQUFTbEIsT0FDbEJzQixVQUFVRCxVQUFVckIsT0FDcEJRLFlBQWFOLFNBQVNjLFVBQVVHLFVBQVVHO0lBRWhELE9BQU9kO0FBQ1QifQ==