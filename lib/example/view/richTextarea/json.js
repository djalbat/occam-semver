"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONRichTextarea;
    }
});
var _richTextarea = /*#__PURE__*/ _interop_require_default(require("../richTextarea"));
var _constants = require("../../constants");
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
var JSONRichTextarea = /*#__PURE__*/ function(RichTextarea) {
    _inherits(JSONRichTextarea, RichTextarea);
    var _super = _create_super(JSONRichTextarea);
    function JSONRichTextarea() {
        _class_call_check(this, JSONRichTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(JSONRichTextarea, [
        {
            key: "getJSON",
            value: function getJSON() {
                var json = null;
                var content = this.getContent(), jsonString = content; ///
                try {
                    json = JSON.parse(jsonString);
                } catch (error) {
                ///
                }
                return json;
            }
        },
        {
            key: "setJSON",
            value: function setJSON(json) {
                try {
                    var jsonString = JSON.stringify(json, null, _constants.DOUBLE_SPACE), content = jsonString;
                    this.setContent(content);
                } catch (error) {
                ///
                }
            }
        }
    ]);
    return JSONRichTextarea;
}(_richTextarea.default);
_define_property(JSONRichTextarea, "defaultProperties", {
    className: "json",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcmljaFRleHRhcmVhL2pzb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4uL3JpY2hUZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBET1VCTEVfU1BBQ0UgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05SaWNoVGV4dGFyZWEgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBnZXRKU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gY29udGVudDsgLy8vXG5cbiAgICB0cnkge1xuICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc2V0SlNPTihqc29uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBET1VCTEVfU1BBQ0UpLFxuICAgICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7XG5cbiAgICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLy9cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImpzb25cIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJKU09OUmljaFRleHRhcmVhIiwiZ2V0SlNPTiIsImpzb24iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImpzb25TdHJpbmciLCJKU09OIiwicGFyc2UiLCJlcnJvciIsInNldEpTT04iLCJzdHJpbmdpZnkiLCJET1VCTEVfU1BBQ0UiLCJzZXRDb250ZW50IiwiUmljaFRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzttRUFKSTt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxPQUFPO2dCQUVYLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxhQUFhRixTQUFTLEdBQUc7Z0JBRS9CLElBQUk7b0JBQ0ZELE9BQU9JLEtBQUtDLEtBQUssQ0FBQ0Y7Z0JBQ3BCLEVBQUUsT0FBT0csT0FBTztnQkFDZCxHQUFHO2dCQUNMO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUVAsSUFBSTtnQkFDVixJQUFJO29CQUNGLElBQU1HLGFBQWFDLEtBQUtJLFNBQVMsQ0FBQ1IsTUFBTSxNQUFNUyx1QkFBWSxHQUNwRFIsVUFBVUU7b0JBRWhCLElBQUksQ0FBQ08sVUFBVSxDQUFDVDtnQkFFbEIsRUFBRSxPQUFPSyxPQUFPO2dCQUNkLEdBQUc7Z0JBQ0w7WUFDRjs7O1dBMUJtQlI7RUFBeUJhLHFCQUFZO0FBNEJ4RCxpQkE1Qm1CYixrQkE0QlpjLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0FBQ2QifQ==