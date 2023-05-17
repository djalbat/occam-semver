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
var _easy = require("easy");
var _index = require("../index");
var _context = /*#__PURE__*/ _interop_require_default(require("./view/richTextarea/json/context"));
var _previousContext = /*#__PURE__*/ _interop_require_default(require("./view/richTextarea/json/previousContext"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
            var contextJSON = _this.getContextJSON(), previousContextJSON = _this.getPreviousContextJSON(), jsonComparison = (0, _index.compareContextJSON)(previousContextJSON, contextJSON);
            console.log(jsonComparison);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_previousContext.default, {
                        onChange: this.changeHandler,
                        active: true
                    }),
                    /*#__PURE__*/ React.createElement(_context.default, {
                        onChange: this.changeHandler,
                        active: true
                    })
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialContextJSON = _this_constructor.initialContextJSON, initialPreviousContextJSON = _this_constructor.initialPreviousContextJSON, contextJSON = initialContextJSON, previousContextJSON = initialPreviousContextJSON;
                this.setContextJSON(contextJSON);
                this.setPreviousContextJSON(previousContextJSON);
                this.activateContextJSONRichTextarea();
                this.activatePreviousContextJSONRichTextarea();
                this.changeHandler();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialContextJSON", {});
_define_property(View, "initialPreviousContextJSON", {});
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgY29tcGFyZUNvbnRleHRKU09OIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbnRleHRKU09OVGV4dGFyZWEgZnJvbSBcIi4vdmlldy9yaWNoVGV4dGFyZWEvanNvbi9jb250ZXh0XCI7XG5pbXBvcnQgUHJldmlvdXNDb250ZXh0SlNPTlRleHRhcmVhIGZyb20gXCIuL3ZpZXcvcmljaFRleHRhcmVhL2pzb24vcHJldmlvdXNDb250ZXh0XCI7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHRKU09OID0gdGhpcy5nZXRDb250ZXh0SlNPTigpLFxuICAgICAgICAgIHByZXZpb3VzQ29udGV4dEpTT04gPSB0aGlzLmdldFByZXZpb3VzQ29udGV4dEpTT04oKSxcbiAgICAgICAgICBqc29uQ29tcGFyaXNvbiA9IGNvbXBhcmVDb250ZXh0SlNPTihwcmV2aW91c0NvbnRleHRKU09OLCBjb250ZXh0SlNPTik7XG5cbiAgICBjb25zb2xlLmxvZyhqc29uQ29tcGFyaXNvbik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldmlvdXNDb250ZXh0SlNPTlRleHRhcmVhIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGFjdGl2ZSAvPixcbiAgICAgIDxDb250ZXh0SlNPTlRleHRhcmVhIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQ29udGV4dEpTT04sIGluaXRpYWxQcmV2aW91c0NvbnRleHRKU09OIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGNvbnRleHRKU09OID0gaW5pdGlhbENvbnRleHRKU09OLCAvLy9cbiAgICAgICAgICBwcmV2aW91c0NvbnRleHRKU09OID0gaW5pdGlhbFByZXZpb3VzQ29udGV4dEpTT047XG5cbiAgICB0aGlzLnNldENvbnRleHRKU09OKGNvbnRleHRKU09OKTtcblxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZXh0SlNPTihwcmV2aW91c0NvbnRleHRKU09OKTtcblxuICAgIHRoaXMuYWN0aXZhdGVDb250ZXh0SlNPTlJpY2hUZXh0YXJlYSgpO1xuXG4gICAgdGhpcy5hY3RpdmF0ZVByZXZpb3VzQ29udGV4dEpTT05SaWNoVGV4dGFyZWEoKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZXh0SlNPTiA9IHt9O1xuXG4gIHN0YXRpYyBpbml0aWFsUHJldmlvdXNDb250ZXh0SlNPTiA9IHt9O1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udGV4dEpTT04iLCJnZXRDb250ZXh0SlNPTiIsInByZXZpb3VzQ29udGV4dEpTT04iLCJnZXRQcmV2aW91c0NvbnRleHRKU09OIiwianNvbkNvbXBhcmlzb24iLCJjb21wYXJlQ29udGV4dEpTT04iLCJjb25zb2xlIiwibG9nIiwiY2hpbGRFbGVtZW50cyIsIlByZXZpb3VzQ29udGV4dEpTT05UZXh0YXJlYSIsIm9uQ2hhbmdlIiwiYWN0aXZlIiwiQ29udGV4dEpTT05UZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQ29udGV4dEpTT04iLCJpbml0aWFsUHJldmlvdXNDb250ZXh0SlNPTiIsInNldENvbnRleHRKU09OIiwic2V0UHJldmlvdXNDb250ZXh0SlNPTiIsImFjdGl2YXRlQ29udGV4dEpTT05SaWNoVGV4dGFyZWEiLCJhY3RpdmF0ZVByZXZpb3VzQ29udGV4dEpTT05SaWNoVGV4dGFyZWEiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5REE7OztlQUFBOzs7b0VBdkRzQjtvQkFFRTtxQkFDVzs4REFFSDtzRUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLHFCQStDSCxBQS9DSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGlCQUFnQixTQUFDQyxPQUFPQyxTQUFZO1lBQ2xDLElBQU1DLGNBQWMsTUFBS0MsY0FBYyxJQUNqQ0Msc0JBQXNCLE1BQUtDLHNCQUFzQixJQUNqREMsaUJBQWlCQyxJQUFBQSx5QkFBa0IsRUFBQ0gscUJBQXFCRjtZQUUvRE0sUUFBUUMsR0FBRyxDQUFDSDtRQUNkOzs7a0JBUElSOztZQVNKWSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQVE7a0NBRU4sb0JBQUNDLHdCQUEyQjt3QkFBQ0MsVUFBVSxJQUFJLENBQUNiLGFBQWE7d0JBQUVjLFFBQUFBLElBQU07O2tDQUNqRSxvQkFBQ0MsZ0JBQW1CO3dCQUFDRixVQUFVLElBQUksQ0FBQ2IsYUFBYTt3QkFBRWMsUUFBQUEsSUFBTTs7aUJBRTFEO1lBQ0g7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQTJELG9CQUFBLElBQUksQ0FBQ0MsV0FBVyxFQUFuRUMscUJBQW1ELGtCQUFuREEsb0JBQW9CQyw2QkFBK0Isa0JBQS9CQSw0QkFDdEJqQixjQUFjZ0Isb0JBQ2RkLHNCQUFzQmU7Z0JBRTVCLElBQUksQ0FBQ0MsY0FBYyxDQUFDbEI7Z0JBRXBCLElBQUksQ0FBQ21CLHNCQUFzQixDQUFDakI7Z0JBRTVCLElBQUksQ0FBQ2tCLCtCQUErQjtnQkFFcEMsSUFBSSxDQUFDQyx1Q0FBdUM7Z0JBRTVDLElBQUksQ0FBQ3hCLGFBQWE7WUFDcEI7OztXQWxDSUQ7cUJBQWEwQixhQUFPO0FBb0N4QixpQkFwQ0kxQixNQW9DR29CLHNCQUFxQixDQUFDO0FBRTdCLGlCQXRDSXBCLE1Bc0NHcUIsOEJBQTZCLENBQUM7QUFFckMsaUJBeENJckIsTUF3Q0cyQixXQUFVO0FBRWpCLGlCQTFDSTNCLE1BMENHNEIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDOUIifQ==