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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1RSSU5HLCBOVU1CRVIsIEJPT0xFQU4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOVUxMX0pTT05fVFlQRSwgQVJSQVlfSlNPTl9UWVBFLCBPQkpFQ1RfSlNPTl9UWVBFLCBQUklNSVRJVkVfSlNPTl9UWVBFIH0gZnJvbSBcIi4uL2pzb25UeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZU9mKGpzb24pIHtcbiAgbGV0IHR5cGU7XG5cbiAgY29uc3QgX251bGwgPSBpc051bGwoanNvbiksXG4gICAgICAgIGFycmF5ID0gaXNBcnJheShqc29uKSxcbiAgICAgICAgb2JqZWN0ID0gaXNPYmplY3QoanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlKGpzb24pO1xuXG4gIGlmIChfbnVsbCkge1xuICAgIHR5cGUgPSBOVUxMX0pTT05fVFlQRTtcbiAgfVxuXG4gIGlmIChhcnJheSkge1xuICAgIHR5cGUgPSBBUlJBWV9KU09OX1RZUEU7XG4gIH1cblxuICBpZiAob2JqZWN0KSB7XG4gICAgdHlwZSA9IE9CSkVDVF9KU09OX1RZUEU7XG4gIH1cblxuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgdHlwZSA9IFBSSU1JVElWRV9KU09OX1RZUEU7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gaXNOdWxsKGpzb24pIHtcbiAgY29uc3QgX251bGwgPSAoanNvbiA9PT0gbnVsbCk7XG5cbiAgcmV0dXJuIF9udWxsO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KGpzb24pIHtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KGpzb24pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoanNvbikge1xuICBjb25zdCBhcnJheSA9IGlzQXJyYXkoanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlKGpzb24pLFxuICAgICAgICBvYmplY3QgPSAoIWFycmF5ICYmICFwcmltaXRpdmUpO1xuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGpzb24pIHtcbiAgY29uc3Qgc3RyaW5nID0gKCh0eXBlb2YganNvbikgPT09IFNUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoanNvbikge1xuICBjb25zdCBudW1iZXIgPSAoKHR5cGVvZiBqc29uKSA9PT0gTlVNQkVSKTtcblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oanNvbikge1xuICBjb25zdCBib29sZWFuID0gKCh0eXBlb2YganNvbikgPT09IEJPT0xFQU4pO1xuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShqc29uKSB7XG4gIGNvbnN0IF9udWxsID0gaXNOdWxsKGpzb24pLFxuICAgICAgICBzdHJpbmcgPSBpc1N0cmluZyhqc29uKSxcbiAgICAgICAgbnVtYmVyID0gaXNOdW1iZXIoanNvbiksXG4gICAgICAgIGJvb2xlYW4gPSBpc0Jvb2xlYW4oanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IChfbnVsbCB8fCBzdHJpbmcgfHwgbnVtYmVyIHx8IGJvb2xlYW4pO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG4iXSwibmFtZXMiOlsidHlwZU9mIiwianNvbiIsInR5cGUiLCJfbnVsbCIsImlzTnVsbCIsImFycmF5IiwiaXNBcnJheSIsIm9iamVjdCIsImlzT2JqZWN0IiwicHJpbWl0aXZlIiwiaXNQcmltaXRpdmUiLCJOVUxMX0pTT05fVFlQRSIsIkFSUkFZX0pTT05fVFlQRSIsIk9CSkVDVF9KU09OX1RZUEUiLCJQUklNSVRJVkVfSlNPTl9UWVBFIiwiQXJyYXkiLCJpc1N0cmluZyIsInN0cmluZyIsIlNUUklORyIsImlzTnVtYmVyIiwibnVtYmVyIiwiTlVNQkVSIiwiaXNCb29sZWFuIiwiYm9vbGVhbiIsIkJPT0xFQU4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtnQkE7OztlQUFBQTs7O3lCQUh3Qjt5QkFDK0M7Ozs7O0FBRWhGLFNBQVNBLE9BQU9DLElBQUksRUFBRTtJQUMzQixJQUFJQztJQUVKLElBQU1DLFFBQVFDLE9BQU9ILE9BQ2ZJLFFBQVFDLFFBQVFMLE9BQ2hCTSxTQUFTQyxTQUFTUCxPQUNsQlEsWUFBWUMsWUFBWVQ7SUFFOUIsSUFBSUUsT0FBTztRQUNURCxPQUFPUyx5QkFBYztJQUN2QixDQUFDO0lBRUQsSUFBSU4sT0FBTztRQUNUSCxPQUFPVSwwQkFBZTtJQUN4QixDQUFDO0lBRUQsSUFBSUwsUUFBUTtRQUNWTCxPQUFPVywyQkFBZ0I7SUFDekIsQ0FBQztJQUVELElBQUlKLFdBQVc7UUFDYlAsT0FBT1ksOEJBQW1CO0lBQzVCLENBQUM7SUFFRCxPQUFPWjtBQUNUO0FBRUEsU0FBU0UsT0FBT0gsSUFBSSxFQUFFO0lBQ3BCLElBQU1FLFFBQVNGLFNBQVMsSUFBSTtJQUU1QixPQUFPRTtBQUNUO0FBRUEsU0FBU0csUUFBUUwsSUFBSSxFQUFFO0lBQ3JCLElBQU1JLFFBQVFVLE1BQU1ULE9BQU8sQ0FBQ0w7SUFFNUIsT0FBT0k7QUFDVDtBQUVBLFNBQVNHLFNBQVNQLElBQUksRUFBRTtJQUN0QixJQUFNSSxRQUFRQyxRQUFRTCxPQUNoQlEsWUFBWUMsWUFBWVQsT0FDeEJNLFNBQVUsQ0FBQ0YsU0FBUyxDQUFDSTtJQUUzQixPQUFPRjtBQUNUO0FBRUEsU0FBU1MsU0FBU2YsSUFBSSxFQUFFO0lBQ3RCLElBQU1nQixTQUFVLEFBQUMsQ0FBQSxPQUFPaEIscUNBQVAsU0FBT0EsS0FBSSxBQUFELE1BQU9pQixpQkFBTTtJQUV4QyxPQUFPRDtBQUNUO0FBRUEsU0FBU0UsU0FBU2xCLElBQUksRUFBRTtJQUN0QixJQUFNbUIsU0FBVSxBQUFDLENBQUEsT0FBT25CLHFDQUFQLFNBQU9BLEtBQUksQUFBRCxNQUFPb0IsaUJBQU07SUFFeEMsT0FBT0Q7QUFDVDtBQUVBLFNBQVNFLFVBQVVyQixJQUFJLEVBQUU7SUFDdkIsSUFBTXNCLFVBQVcsQUFBQyxDQUFBLE9BQU90QixxQ0FBUCxTQUFPQSxLQUFJLEFBQUQsTUFBT3VCLGtCQUFPO0lBRTFDLE9BQU9EO0FBQ1Q7QUFFQSxTQUFTYixZQUFZVCxJQUFJLEVBQUU7SUFDekIsSUFBTUUsUUFBUUMsT0FBT0gsT0FDZmdCLFNBQVNELFNBQVNmLE9BQ2xCbUIsU0FBU0QsU0FBU2xCLE9BQ2xCc0IsVUFBVUQsVUFBVXJCLE9BQ3BCUSxZQUFhTixTQUFTYyxVQUFVRyxVQUFVRztJQUVoRCxPQUFPZDtBQUNUIn0=