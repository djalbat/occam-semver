"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContextJSONTextarea;
    }
});
var _json = /*#__PURE__*/ _interop_require_default(require("../../textarea/json"));
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
var ContextJSONTextarea = /*#__PURE__*/ function(JSONTextarea) {
    _inherits(ContextJSONTextarea, JSONTextarea);
    var _super = _create_super(ContextJSONTextarea);
    function ContextJSONTextarea() {
        _class_call_check(this, ContextJSONTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(ContextJSONTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var getContextJSON = this.getJSON.bind(this), setContextJSON = this.setJSON.bind(this); ///
                return {
                    getContextJSON: getContextJSON,
                    setContextJSON: setContextJSON
                };
            }
        }
    ]);
    return ContextJSONTextarea;
}(_json.default);
_define_property(ContextJSONTextarea, "defaultProperties", {
    className: "context"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvanNvbi9jb250ZXh0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSlNPTlRleHRhcmVhIGZyb20gXCIuLi8uLi90ZXh0YXJlYS9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRKU09OVGV4dGFyZWEgZXh0ZW5kcyBKU09OVGV4dGFyZWEge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldENvbnRleHRKU09OID0gdGhpcy5nZXRKU09OLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldENvbnRleHRKU09OID0gdGhpcy5zZXRKU09OLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDb250ZXh0SlNPTixcbiAgICAgIHNldENvbnRleHRKU09OXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRleHRcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb250ZXh0SlNPTlRleHRhcmVhIiwicGFyZW50Q29udGV4dCIsImdldENvbnRleHRKU09OIiwiZ2V0SlNPTiIsImJpbmQiLCJzZXRDb250ZXh0SlNPTiIsInNldEpTT04iLCJKU09OVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ3ZDQyxpQkFBaUIsSUFBSSxDQUFDQyxPQUFPLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFbkQsT0FBUTtvQkFDTkYsZ0JBQUFBO29CQUNBRyxnQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBVG1CTDtFQUE0Qk8sYUFBWTtBQVczRCxpQkFYbUJQLHFCQVdaUSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9