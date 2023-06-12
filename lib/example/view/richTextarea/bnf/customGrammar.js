"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammarBNFRichTextarea;
    }
});
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
var CustomGrammarBNFRichTextarea = /*#__PURE__*/ function(BNFRichTextarea) {
    _inherits(CustomGrammarBNFRichTextarea, BNFRichTextarea);
    var _super = _create_super(CustomGrammarBNFRichTextarea);
    function CustomGrammarBNFRichTextarea() {
        _class_call_check(this, CustomGrammarBNFRichTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(CustomGrammarBNFRichTextarea, [
        {
            key: "parentContext",
            value: function parentContext() {
                var getCustomGrammarBNF = this.getBNF.bind(this), setCustomGrammarBNF = this.setBNF.bind(this), activateCustomGrammarBNFRichTextarea = this.activate.bind(this); ///
                return {
                    getCustomGrammarBNF: getCustomGrammarBNF,
                    setCustomGrammarBNF: setCustomGrammarBNF,
                    activateCustomGrammarBNFRichTextarea: activateCustomGrammarBNFRichTextarea
                };
            }
        }
    ]);
    return CustomGrammarBNFRichTextarea;
}(_bnf.default);
_define_property(CustomGrammarBNFRichTextarea, "defaultProperties", {
    className: "custom-grammar"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcmljaFRleHRhcmVhL2JuZi9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQk5GUmljaFRleHRhcmVhIGZyb20gXCIuLi8uLi9yaWNoVGV4dGFyZWEvYm5mXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXJCTkZSaWNoVGV4dGFyZWEgZXh0ZW5kcyBCTkZSaWNoVGV4dGFyZWEge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEN1c3RvbUdyYW1tYXJCTkYgPSB0aGlzLmdldEJORi5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRDdXN0b21HcmFtbWFyQk5GID0gdGhpcy5zZXRCTkYuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgYWN0aXZhdGVDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhID0gdGhpcy5hY3RpdmF0ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q3VzdG9tR3JhbW1hckJORixcbiAgICAgIHNldEN1c3RvbUdyYW1tYXJCTkYsXG4gICAgICBhY3RpdmF0ZUN1c3RvbUdyYW1tYXJCTkZSaWNoVGV4dGFyZWFcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY3VzdG9tLWdyYW1tYXJcIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyQk5GUmljaFRleHRhcmVhIiwicGFyZW50Q29udGV4dCIsImdldEN1c3RvbUdyYW1tYXJCTkYiLCJnZXRCTkYiLCJiaW5kIiwic2V0Q3VzdG9tR3JhbW1hckJORiIsInNldEJORiIsImFjdGl2YXRlQ3VzdG9tR3JhbW1hckJORlJpY2hUZXh0YXJlYSIsImFjdGl2YXRlIiwiQk5GUmljaFRleHRhcmVhIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzBEQUZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxPQUFPQyxLQUFLLElBQUksR0FDM0NDLHNCQUFzQixJQUFJLENBQUNDLE9BQU9GLEtBQUssSUFBSSxHQUMzQ0csdUNBQXVDLElBQUksQ0FBQ0MsU0FBU0osS0FBSyxJQUFJLEdBQUcsR0FBRztnQkFFMUUsT0FBUTtvQkFDTkYscUJBQUFBO29CQUNBRyxxQkFBQUE7b0JBQ0FFLHNDQUFBQTtnQkFDRjtZQUNGOzs7V0FYbUJQO0VBQXFDUztBQWF4RCxpQkFibUJULDhCQWFaVSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9