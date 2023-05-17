"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContextJSONRichTextarea;
    }
});
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
var ContextJSONRichTextarea = /*#__PURE__*/ function(JSONRichTextarea) {
    _inherits(ContextJSONRichTextarea, JSONRichTextarea);
    var _super = _create_super(ContextJSONRichTextarea);
    function ContextJSONRichTextarea() {
        _class_call_check(this, ContextJSONRichTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(ContextJSONRichTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var getContextJSON = this.getJSON.bind(this), setContextJSON = this.setJSON.bind(this), activateContextJSONRichTextarea = this.activate.bind(this); ///
                return {
                    getContextJSON: getContextJSON,
                    setContextJSON: setContextJSON,
                    activateContextJSONRichTextarea: activateContextJSONRichTextarea
                };
            }
        }
    ]);
    return ContextJSONRichTextarea;
}(_json.default);
_define_property(ContextJSONRichTextarea, "defaultProperties", {
    className: "context"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcmljaFRleHRhcmVhL2pzb24vY29udGV4dC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEpTT05SaWNoVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3JpY2hUZXh0YXJlYS9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRKU09OUmljaFRleHRhcmVhIGV4dGVuZHMgSlNPTlJpY2hUZXh0YXJlYSB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29udGV4dEpTT04gPSB0aGlzLmdldEpTT04uYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0Q29udGV4dEpTT04gPSB0aGlzLnNldEpTT04uYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgYWN0aXZhdGVDb250ZXh0SlNPTlJpY2hUZXh0YXJlYSA9IHRoaXMuYWN0aXZhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldENvbnRleHRKU09OLFxuICAgICAgc2V0Q29udGV4dEpTT04sXG4gICAgICBhY3RpdmF0ZUNvbnRleHRKU09OUmljaFRleHRhcmVhXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRleHRcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb250ZXh0SlNPTlJpY2hUZXh0YXJlYSIsInBhcmVudENvbnRleHQiLCJnZXRDb250ZXh0SlNPTiIsImdldEpTT04iLCJiaW5kIiwic2V0Q29udGV4dEpTT04iLCJzZXRKU09OIiwiYWN0aXZhdGVDb250ZXh0SlNPTlJpY2hUZXh0YXJlYSIsImFjdGl2YXRlIiwiSlNPTlJpY2hUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHdDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdkNDLGlCQUFpQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDdkNHLGtDQUFrQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUVyRSxPQUFRO29CQUNORixnQkFBQUE7b0JBQ0FHLGdCQUFBQTtvQkFDQUUsaUNBQUFBO2dCQUNGO1lBQ0Y7OztXQVhtQlA7RUFBZ0NTLGFBQWdCO0FBYW5FLGlCQWJtQlQseUJBYVpVLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=