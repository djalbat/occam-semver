"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _json = /*#__PURE__*/ _interop_require_default(require("../../richTextarea/json"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  margin-right: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PreviousContextJSONRichTextarea = /*#__PURE__*/ function(JSONRichTextarea) {
    _inherits(PreviousContextJSONRichTextarea, JSONRichTextarea);
    var _super = _create_super(PreviousContextJSONRichTextarea);
    function PreviousContextJSONRichTextarea() {
        _class_call_check(this, PreviousContextJSONRichTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(PreviousContextJSONRichTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var getPreviousContextJSON = this.getJSON.bind(this), setPreviousContextJSON = this.setJSON.bind(this), activatePreviousContextJSONRichTextarea = this.activate.bind(this); ///
                return {
                    getPreviousContextJSON: getPreviousContextJSON,
                    setPreviousContextJSON: setPreviousContextJSON,
                    activatePreviousContextJSONRichTextarea: activatePreviousContextJSONRichTextarea
                };
            }
        }
    ]);
    return PreviousContextJSONRichTextarea;
}(_json.default);
_define_property(PreviousContextJSONRichTextarea, "defaultProperties", {
    className: "previous-context"
});
var _default = (0, _easywithstyle.default)(PreviousContextJSONRichTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcmljaFRleHRhcmVhL2pzb24vcHJldmlvdXNDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgSlNPTlJpY2hUZXh0YXJlYSBmcm9tIFwiLi4vLi4vcmljaFRleHRhcmVhL2pzb25cIjtcblxuY2xhc3MgUHJldmlvdXNDb250ZXh0SlNPTlJpY2hUZXh0YXJlYSBleHRlbmRzIEpTT05SaWNoVGV4dGFyZWEge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFByZXZpb3VzQ29udGV4dEpTT04gPSB0aGlzLmdldEpTT04uYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0UHJldmlvdXNDb250ZXh0SlNPTiA9IHRoaXMuc2V0SlNPTi5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBhY3RpdmF0ZVByZXZpb3VzQ29udGV4dEpTT05SaWNoVGV4dGFyZWEgPSB0aGlzLmFjdGl2YXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQcmV2aW91c0NvbnRleHRKU09OLFxuICAgICAgc2V0UHJldmlvdXNDb250ZXh0SlNPTixcbiAgICAgIGFjdGl2YXRlUHJldmlvdXNDb250ZXh0SlNPTlJpY2hUZXh0YXJlYVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV2aW91cy1jb250ZXh0XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXZpb3VzQ29udGV4dEpTT05SaWNoVGV4dGFyZWEpYFxuXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlByZXZpb3VzQ29udGV4dEpTT05SaWNoVGV4dGFyZWEiLCJwYXJlbnRDb250ZXh0IiwiZ2V0UHJldmlvdXNDb250ZXh0SlNPTiIsImdldEpTT04iLCJiaW5kIiwic2V0UHJldmlvdXNDb250ZXh0SlNPTiIsInNldEpTT04iLCJhY3RpdmF0ZVByZXZpb3VzQ29udGV4dEpTT05SaWNoVGV4dGFyZWEiLCJhY3RpdmF0ZSIsIkpTT05SaWNoVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0JBOzs7ZUFBQTs7O29FQXRCc0I7MkRBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLGdEQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHlCQUF5QixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDL0NDLHlCQUF5QixJQUFJLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDL0NHLDBDQUEwQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUU3RSxPQUFRO29CQUNORix3QkFBQUE7b0JBQ0FHLHdCQUFBQTtvQkFDQUUseUNBQUFBO2dCQUNGO1lBQ0Y7OztXQVhJUDtFQUF3Q1MsYUFBZ0I7QUFhNUQsaUJBYklULGlDQWFHVSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNaIn0=