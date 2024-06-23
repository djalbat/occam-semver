"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bnfUtilities: function() {
        return _bnf.default;
    },
    compareContextJSON: function() {
        return _compareContextJSON.default;
    },
    compareCustomGrammarJSON: function() {
        return _compareCustomGrammarJSON.default;
    },
    updateVersion: function() {
        return _updateVersion.default;
    }
});
var _bnf = /*#__PURE__*/ _interop_require_default(require("./utilities/bnf"));
var _updateVersion = /*#__PURE__*/ _interop_require_default(require("./updateVersion"));
var _compareContextJSON = /*#__PURE__*/ _interop_require_default(require("./compareContextJSON"));
var _compareCustomGrammarJSON = /*#__PURE__*/ _interop_require_default(require("./compareCustomGrammarJSON"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBibmZVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYm5mXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVwZGF0ZVZlcnNpb24gfSBmcm9tIFwiLi91cGRhdGVWZXJzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBhcmVDb250ZXh0SlNPTiB9IGZyb20gXCIuL2NvbXBhcmVDb250ZXh0SlNPTlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wYXJlQ3VzdG9tR3JhbW1hckpTT04gfSBmcm9tIFwiLi9jb21wYXJlQ3VzdG9tR3JhbW1hckpTT05cIjtcbiJdLCJuYW1lcyI6WyJibmZVdGlsaXRpZXMiLCJjb21wYXJlQ29udGV4dEpTT04iLCJjb21wYXJlQ3VzdG9tR3JhbW1hckpTT04iLCJ1cGRhdGVWZXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFb0JBLFlBQVk7ZUFBWkEsWUFBWTs7SUFFWkMsa0JBQWtCO2VBQWxCQSwyQkFBa0I7O0lBQ2xCQyx3QkFBd0I7ZUFBeEJBLGlDQUF3Qjs7SUFGeEJDLGFBQWE7ZUFBYkEsc0JBQWE7OzswREFETztvRUFDQzt5RUFDSzsrRUFDTSJ9