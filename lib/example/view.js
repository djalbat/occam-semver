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
var compareBNF = _index.bnfUtilities.compareBNF;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "customChangeHandler", function(event, element) {
            var customGrammarBNF = _this.getCustomGrammarBNF(), previousCustomGrammarBNF = _this.getPreviousCustomGrammarBNF(), bnfA = previousCustomGrammarBNF, bnfB = customGrammarBNF, bnfComparison = compareBNF(bnfA, bnfB);
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
                        onCustomChange: this.customChangeHandler,
                        active: true
                    }),
                    /*#__PURE__*/ React.createElement(_customGrammar.default, {
                        onCustomChange: this.customChangeHandler,
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
                this.customChangeHandler(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYm5mVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1c3RvbUdyYW1tYXJCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3JpY2hUZXh0YXJlYS9ibmYvY3VzdG9tR3JhbW1hclwiO1xuaW1wb3J0IFByZXZpb3VzQ3VzdG9tR3JhbW1hckJORlRleHRhcmVhIGZyb20gXCIuL3ZpZXcvcmljaFRleHRhcmVhL2JuZi9wcmV2aW91c0N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBjb21wYXJlQk5GIH0gPSBibmZVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3VzdG9tQ2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJCTkYgPSB0aGlzLmdldEN1c3RvbUdyYW1tYXJCTkYoKSxcbiAgICAgICAgICBwcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYgPSB0aGlzLmdldFByZXZpb3VzQ3VzdG9tR3JhbW1hckJORigpLFxuICAgICAgICAgIGJuZkEgPSBwcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYsICAvLy9cbiAgICAgICAgICBibmZCID0gY3VzdG9tR3JhbW1hckJORiwgIC8vL1xuICAgICAgICAgIGJuZkNvbXBhcmlzb24gPSBjb21wYXJlQk5GKGJuZkEsIGJuZkIpO1xuXG4gICAgY29uc29sZS5sb2coYm5mQ29tcGFyaXNvbik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldmlvdXNDdXN0b21HcmFtbWFyQk5GVGV4dGFyZWEgb25DdXN0b21DaGFuZ2U9e3RoaXMuY3VzdG9tQ2hhbmdlSGFuZGxlcn0gYWN0aXZlIC8+LFxuICAgICAgPEN1c3RvbUdyYW1tYXJCTkZUZXh0YXJlYSBvbkN1c3RvbUNoYW5nZT17dGhpcy5jdXN0b21DaGFuZ2VIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEN1c3RvbUdyYW1tYXJCTkYsIGluaXRpYWxQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckJORiA9IGluaXRpYWxDdXN0b21HcmFtbWFyQk5GLCAvLy9cbiAgICAgICAgICBwcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYgPSBpbml0aWFsUHJldmlvdXNDdXN0b21HcmFtbWFyQk5GO1xuXG4gICAgdGhpcy5zZXRDdXN0b21HcmFtbWFyQk5GKGN1c3RvbUdyYW1tYXJCTkYpO1xuXG4gICAgdGhpcy5zZXRQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYocHJldmlvdXNDdXN0b21HcmFtbWFyQk5GKTtcblxuICAgIHRoaXMuYWN0aXZhdGVDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmFjdGl2YXRlUHJldmlvdXNDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmN1c3RvbUNoYW5nZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbEN1c3RvbUdyYW1tYXJCTkYgPSBcIlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsUHJldmlvdXNDdXN0b21HcmFtbWFyQk5GID0gXCJcIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJjb21wYXJlQk5GIiwiYm5mVXRpbGl0aWVzIiwiVmlldyIsImN1c3RvbUNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjdXN0b21HcmFtbWFyQk5GIiwiZ2V0Q3VzdG9tR3JhbW1hckJORiIsInByZXZpb3VzQ3VzdG9tR3JhbW1hckJORiIsImdldFByZXZpb3VzQ3VzdG9tR3JhbW1hckJORiIsImJuZkEiLCJibmZCIiwiYm5mQ29tcGFyaXNvbiIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZEVsZW1lbnRzIiwiUHJldmlvdXNDdXN0b21HcmFtbWFyQk5GVGV4dGFyZWEiLCJvbkN1c3RvbUNoYW5nZSIsImFjdGl2ZSIsIkN1c3RvbUdyYW1tYXJCTkZUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQ3VzdG9tR3JhbW1hckJORiIsImluaXRpYWxQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkYiLCJzZXRDdXN0b21HcmFtbWFyQk5GIiwic2V0UHJldmlvdXNDdXN0b21HcmFtbWFyQk5GIiwiYWN0aXZhdGVDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhIiwiYWN0aXZhdGVQcmV2aW91c0N1c3RvbUdyYW1tYXJCTkZSaWNoVGV4dGFyZWEiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkRBOzs7ZUFBQTs7O29FQTNEc0I7b0JBRUU7cUJBQ0s7b0VBRVE7NEVBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTSxBQUFFQSxhQUFlQyxtQkFBWSxDQUEzQkQ7QUFFUixJQUFBLEFBQU1FLHFCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSx1QkFBc0IsU0FBQ0MsT0FBT0M7WUFDNUIsSUFBTUMsbUJBQW1CLE1BQUtDLG1CQUFtQixJQUMzQ0MsMkJBQTJCLE1BQUtDLDJCQUEyQixJQUMzREMsT0FBT0YsMEJBQ1BHLE9BQU9MLGtCQUNQTSxnQkFBZ0JaLFdBQVdVLE1BQU1DO1lBRXZDRSxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7OztrQkFUSVY7O1lBV0phLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyw4QkFBZ0M7d0JBQUNDLGdCQUFnQixJQUFJLENBQUNkLG1CQUFtQjt3QkFBRWUsUUFBQUE7O2tDQUM1RSxvQkFBQ0Msc0JBQXdCO3dCQUFDRixnQkFBZ0IsSUFBSSxDQUFDZCxtQkFBbUI7d0JBQUVlLFFBQUFBOztpQkFFckU7WUFDSDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQXFFLG9CQUFBLElBQUksQ0FBQ0MsV0FBVyxFQUE3RUMsMEJBQTZELGtCQUE3REEseUJBQXlCQyxrQ0FBb0Msa0JBQXBDQSxpQ0FDM0JsQixtQkFBbUJpQix5QkFDbkJmLDJCQUEyQmdCO2dCQUVqQyxJQUFJLENBQUNDLG1CQUFtQixDQUFDbkI7Z0JBRXpCLElBQUksQ0FBQ29CLDJCQUEyQixDQUFDbEI7Z0JBRWpDLElBQUksQ0FBQ21CLG9DQUFvQztnQkFFekMsSUFBSSxDQUFDQyw0Q0FBNEM7Z0JBRWpELElBQUksQ0FBQ3pCLG1CQUFtQixJQUFJLEdBQUc7WUFDakM7OztXQXBDSUQ7cUJBQWEyQixhQUFPO0FBc0N4QixpQkF0Q0kzQixNQXNDR3FCLDJCQUEwQjtBQUVqQyxpQkF4Q0lyQixNQXdDR3NCLG1DQUFrQztBQUV6QyxpQkExQ0l0QixNQTBDRzRCLFdBQVU7QUFFakIsaUJBNUNJNUIsTUE0Q0c2QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUMvQiJ9