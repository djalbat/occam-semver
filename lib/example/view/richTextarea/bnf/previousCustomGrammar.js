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
var _bnf = /*#__PURE__*/ _interop_require_default(require("../../richTextarea/bnf"));
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
var PreviousCustomGrammarBNFRichTextarea = /*#__PURE__*/ function(BNFRichTextarea) {
    _inherits(PreviousCustomGrammarBNFRichTextarea, BNFRichTextarea);
    var _super = _create_super(PreviousCustomGrammarBNFRichTextarea);
    function PreviousCustomGrammarBNFRichTextarea() {
        _class_call_check(this, PreviousCustomGrammarBNFRichTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(PreviousCustomGrammarBNFRichTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var getPreviousCustomGrammarBNF = this.getBNF.bind(this), setPreviousCustomGrammarBNF = this.setBNF.bind(this), activatePreviousCustomGrammarBNFRichTextarea = this.activate.bind(this); ///
                return {
                    getPreviousCustomGrammarBNF: getPreviousCustomGrammarBNF,
                    setPreviousCustomGrammarBNF: setPreviousCustomGrammarBNF,
                    activatePreviousCustomGrammarBNFRichTextarea: activatePreviousCustomGrammarBNFRichTextarea
                };
            }
        }
    ]);
    return PreviousCustomGrammarBNFRichTextarea;
}(_bnf.default);
_define_property(PreviousCustomGrammarBNFRichTextarea, "defaultProperties", {
    className: "previous-custom-grammar"
});
var _default = (0, _easywithstyle.default)(PreviousCustomGrammarBNFRichTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcmljaFRleHRhcmVhL2JuZi9wcmV2aW91c0N1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBCTkZSaWNoVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3JpY2hUZXh0YXJlYS9ibmZcIjtcblxuY2xhc3MgUHJldmlvdXNDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhIGV4dGVuZHMgQk5GUmljaFRleHRhcmVhIHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYgPSB0aGlzLmdldEJORi5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYgPSB0aGlzLnNldEJORi5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBhY3RpdmF0ZVByZXZpb3VzQ3VzdG9tR3JhbW1hckJORlJpY2hUZXh0YXJlYSA9IHRoaXMuYWN0aXZhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFByZXZpb3VzQ3VzdG9tR3JhbW1hckJORixcbiAgICAgIHNldFByZXZpb3VzQ3VzdG9tR3JhbW1hckJORixcbiAgICAgIGFjdGl2YXRlUHJldmlvdXNDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXZpb3VzLWN1c3RvbS1ncmFtbWFyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXZpb3VzQ3VzdG9tR3JhbW1hckJORlJpY2hUZXh0YXJlYSlgXG5cbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiUHJldmlvdXNDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhIiwicGFyZW50Q29udGV4dCIsImdldFByZXZpb3VzQ3VzdG9tR3JhbW1hckJORiIsImdldEJORiIsImJpbmQiLCJzZXRQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYiLCJzZXRCTkYiLCJhY3RpdmF0ZVByZXZpb3VzQ3VzdG9tR3JhbW1hckJORlJpY2hUZXh0YXJlYSIsImFjdGl2YXRlIiwiQk5GUmljaFRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdCQTs7O2VBQUE7OztvRUF0QnNCOzBEQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSxxREFrQkgsQUFsQkg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDhCQUE4QixJQUFJLENBQUNDLE9BQU9DLEtBQUssSUFBSSxHQUNuREMsOEJBQThCLElBQUksQ0FBQ0MsT0FBT0YsS0FBSyxJQUFJLEdBQ25ERywrQ0FBK0MsSUFBSSxDQUFDQyxTQUFTSixLQUFLLElBQUksR0FBRyxHQUFHO2dCQUVsRixPQUFRO29CQUNORiw2QkFBQUE7b0JBQ0FHLDZCQUFBQTtvQkFDQUUsOENBQUFBO2dCQUNGO1lBQ0Y7OztXQVhJUDtFQUE2Q1M7QUFhakQsaUJBYklULHNDQWFHVSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHdCQUFVWiJ9