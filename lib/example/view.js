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
var _bnf = require("../utilities/bnf");
var _customGrammar = /*#__PURE__*/ _interop_require_default(require("./view/richTextarea/bnf/customGrammar"));
var _previousCustomGrammar = /*#__PURE__*/ _interop_require_default(require("./view/richTextarea/bnf/previousCustomGrammar"));
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
            var customGrammarBNF = _this.getCustomGrammarBNF(), previousCustomGrammarBNF = _this.getPreviousCustomGrammarBNF(), bnfA = previousCustomGrammarBNF, bnfB = customGrammarBNF, bnfComparison = (0, _bnf.compareBNF)(bnfA, bnfB);
            console.log(bnfComparison);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_previousCustomGrammar.default, {
                        onChange: this.changeHandler,
                        active: true
                    }),
                    /*#__PURE__*/ React.createElement(_customGrammar.default, {
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
                var _this_constructor = this.constructor, initialCustomGrammarBNF = _this_constructor.initialCustomGrammarBNF, initialPreviousCustomGrammarBNF = _this_constructor.initialPreviousCustomGrammarBNF, customGrammarBNF = initialCustomGrammarBNF, previousCustomGrammarBNF = initialPreviousCustomGrammarBNF;
                this.setCustomGrammarBNF(customGrammarBNF);
                this.setPreviousCustomGrammarBNF(previousCustomGrammarBNF);
                this.activateCustomGrammarBNFRichTextarea();
                this.activatePreviousCustomGrammarBNFRichTextarea();
                this.changeHandler();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialCustomGrammarBNF", "");
_define_property(View, "initialPreviousCustomGrammarBNF", "");
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgY29tcGFyZUJORiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYm5mXCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy9yaWNoVGV4dGFyZWEvYm5mL2N1c3RvbUdyYW1tYXJcIjtcbmltcG9ydCBQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3JpY2hUZXh0YXJlYS9ibmYvcHJldmlvdXNDdXN0b21HcmFtbWFyXCI7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkYgPSB0aGlzLmdldEN1c3RvbUdyYW1tYXJCTkYoKSxcbiAgICAgICAgICBwcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYgPSB0aGlzLmdldFByZXZpb3VzQ3VzdG9tR3JhbW1hckJORigpLFxuICAgICAgICAgIGJuZkEgPSBwcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYsICAvLy9cbiAgICAgICAgICBibmZCID0gY3VzdG9tR3JhbW1hckJORiwgIC8vL1xuICAgICAgICAgIGJuZkNvbXBhcmlzb24gPSBjb21wYXJlQk5GKGJuZkEsIGJuZkIpO1xuXG4gICAgY29uc29sZS5sb2coYm5mQ29tcGFyaXNvbik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldmlvdXNDdXN0b21HcmFtbWFyQk5GVGV4dGFyZWEgb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gYWN0aXZlIC8+LFxuICAgICAgPEN1c3RvbUdyYW1tYXJCTkZUZXh0YXJlYSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEN1c3RvbUdyYW1tYXJCTkYsIGluaXRpYWxQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORiA9IGluaXRpYWxDdXN0b21HcmFtbWFyQk5GLCAvLy9cbiAgICAgICAgICBwcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYgPSBpbml0aWFsUHJldmlvdXNDdXN0b21HcmFtbWFyQk5GO1xuXG4gICAgdGhpcy5zZXRDdXN0b21HcmFtbWFyQk5GKGN1c3RvbUdyYW1tYXJCTkYpO1xuXG4gICAgdGhpcy5zZXRQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYocHJldmlvdXNDdXN0b21HcmFtbWFyQk5GKTtcblxuICAgIHRoaXMuYWN0aXZhdGVDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmFjdGl2YXRlUHJldmlvdXNDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ3VzdG9tR3JhbW1hckJORiA9IFwiXCI7XG5cbiAgc3RhdGljIGluaXRpYWxQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYgPSBcIlwiO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJjaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY3VzdG9tR3JhbW1hckJORiIsImdldEN1c3RvbUdyYW1tYXJCTkYiLCJwcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYiLCJnZXRQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYiLCJibmZBIiwiYm5mQiIsImJuZkNvbXBhcmlzb24iLCJjb21wYXJlQk5GIiwiY29uc29sZSIsImxvZyIsImNoaWxkRWxlbWVudHMiLCJQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkZUZXh0YXJlYSIsIm9uQ2hhbmdlIiwiYWN0aXZlIiwiQ3VzdG9tR3JhbW1hckJORlRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxDdXN0b21HcmFtbWFyQk5GIiwiaW5pdGlhbFByZXZpb3VzQ3VzdG9tR3JhbW1hckJORiIsInNldEN1c3RvbUdyYW1tYXJCTkYiLCJzZXRQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYiLCJhY3RpdmF0ZUN1c3RvbUdyYW1tYXJCTkZSaWNoVGV4dGFyZWEiLCJhY3RpdmF0ZVByZXZpb3VzQ3VzdG9tR3JhbW1hckJORlJpY2hUZXh0YXJlYSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJEQTs7O2VBQUE7OztvRUF6RHNCO29CQUVFO21CQUNHO29FQUVVOzRFQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQUEsQUFBTUEscUJBaURILEFBakRIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsaUJBQWdCLFNBQUNDLE9BQU9DO1lBQ3RCLElBQU1DLG1CQUFtQixNQUFLQyxtQkFBbUIsSUFDM0NDLDJCQUEyQixNQUFLQywyQkFBMkIsSUFDM0RDLE9BQU9GLDBCQUNQRyxPQUFPTCxrQkFDUE0sZ0JBQWdCQyxJQUFBQSxlQUFVLEVBQUNILE1BQU1DO1lBRXZDRyxRQUFRQyxHQUFHLENBQUNIO1FBQ2Q7OztrQkFUSVY7O1lBV0pjLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyw4QkFBZ0M7d0JBQUNDLFVBQVUsSUFBSSxDQUFDZixhQUFhO3dCQUFFZ0IsUUFBQUE7O2tDQUNoRSxvQkFBQ0Msc0JBQXdCO3dCQUFDRixVQUFVLElBQUksQ0FBQ2YsYUFBYTt3QkFBRWdCLFFBQUFBOztpQkFFekQ7WUFDSDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQXFFLG9CQUFBLElBQUksQ0FBQ0MsV0FBVyxFQUE3RUMsMEJBQTZELGtCQUE3REEseUJBQXlCQyxrQ0FBb0Msa0JBQXBDQSxpQ0FDM0JuQixtQkFBbUJrQix5QkFDbkJoQiwyQkFBMkJpQjtnQkFFakMsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQ3BCO2dCQUV6QixJQUFJLENBQUNxQiwyQkFBMkIsQ0FBQ25CO2dCQUVqQyxJQUFJLENBQUNvQixvQ0FBb0M7Z0JBRXpDLElBQUksQ0FBQ0MsNENBQTRDO2dCQUVqRCxJQUFJLENBQUMxQixhQUFhO1lBQ3BCOzs7V0FwQ0lEO3FCQUFhNEIsYUFBTztBQXNDeEIsaUJBdENJNUIsTUFzQ0dzQiwyQkFBMEI7QUFFakMsaUJBeENJdEIsTUF3Q0d1QixtQ0FBa0M7QUFFekMsaUJBMUNJdkIsTUEwQ0c2QixXQUFVO0FBRWpCLGlCQTVDSTdCLE1BNENHOEIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDaEMifQ==