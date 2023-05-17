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
var PreviousContextJSONTextarea = /*#__PURE__*/ function(JSONTextarea) {
    _inherits(PreviousContextJSONTextarea, JSONTextarea);
    var _super = _create_super(PreviousContextJSONTextarea);
    function PreviousContextJSONTextarea() {
        _class_call_check(this, PreviousContextJSONTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(PreviousContextJSONTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var getPreviousContextJSON = this.getJSON.bind(this), setPreviousContextJSON = this.setJSON.bind(this); ///
                return {
                    getPreviousContextJSON: getPreviousContextJSON,
                    setPreviousContextJSON: setPreviousContextJSON
                };
            }
        }
    ]);
    return PreviousContextJSONTextarea;
}(_json.default);
_define_property(PreviousContextJSONTextarea, "defaultProperties", {
    className: "previous-context"
});
var _default = (0, _easywithstyle.default)(PreviousContextJSONTextarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvanNvbi9wcmV2aW91c0NvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBKU09OVGV4dGFyZWEgZnJvbSBcIi4uLy4uL3RleHRhcmVhL2pzb25cIjtcblxuY2xhc3MgUHJldmlvdXNDb250ZXh0SlNPTlRleHRhcmVhIGV4dGVuZHMgSlNPTlRleHRhcmVhIHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQcmV2aW91c0NvbnRleHRKU09OID0gdGhpcy5nZXRKU09OLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFByZXZpb3VzQ29udGV4dEpTT04gPSB0aGlzLnNldEpTT04uYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFByZXZpb3VzQ29udGV4dEpTT04sXG4gICAgICBzZXRQcmV2aW91c0NvbnRleHRKU09OXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXZpb3VzLWNvbnRleHRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUHJldmlvdXNDb250ZXh0SlNPTlRleHRhcmVhKWBcblxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJQcmV2aW91c0NvbnRleHRKU09OVGV4dGFyZWEiLCJwYXJlbnRDb250ZXh0IiwiZ2V0UHJldmlvdXNDb250ZXh0SlNPTiIsImdldEpTT04iLCJiaW5kIiwic2V0UHJldmlvdXNDb250ZXh0SlNPTiIsInNldEpTT04iLCJKU09OVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBQTs7O29FQXBCc0I7MkRBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFBLEFBQU1BLDRDQWdCSCxBQWhCSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1DLHlCQUF5QixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDL0NDLHlCQUF5QixJQUFJLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUUzRCxPQUFRO29CQUNORix3QkFBQUE7b0JBQ0FHLHdCQUFBQTtnQkFDRjtZQUNGOzs7V0FUSUw7RUFBb0NPLGFBQVk7QUFXcEQsaUJBWElQLDZCQVdHUSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNWIn0=