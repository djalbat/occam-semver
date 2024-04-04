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
    compareBNF: function() {
        return compareBNF;
    },
    default: function() {
        return _default;
    }
});
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var _jsonComparisons = require("../jsonComparisons");
var bnfLexer = _occamlexers.BNFLexer.fromNothing(), bnfParser = _occamparsers.BNFParser.fromNothing();
function compareBNF(bnfA, bnfB) {
    var jsonComparison;
    var nodeA = nodeFromBNF(bnfA), nodeB = nodeFromBNF(bnfB);
    if (nodeA === null && nodeB === null) {
        jsonComparison = _jsonComparisons.EQUAL_TO_JSON_COMPARISON;
    } else if (nodeA === null) {
        jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
    } else if (nodeB === null) {
        jsonComparison = _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
    } else {
        var matches = nodeA.match(nodeB);
        jsonComparison = matches ? _jsonComparisons.EQUAL_TO_JSON_COMPARISON : _jsonComparisons.NOT_EQUAL_TO_JSON_COMPARISON;
    }
    return jsonComparison;
}
var _default = {
    compareBNF: compareBNF
};
function nodeFromBNF(bnf) {
    var node = null;
    if (bnf !== null) {
        var content = bnf, tokens = bnfLexer.tokenise(content);
        node = bnfParser.parse(tokens);
    }
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IEVRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiwgTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiB9IGZyb20gXCIuLi9qc29uQ29tcGFyaXNvbnNcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQk5GKGJuZkEsIGJuZkIpIHtcbiAgbGV0IGpzb25Db21wYXJpc29uO1xuXG4gIGNvbnN0IG5vZGVBID0gbm9kZUZyb21CTkYoYm5mQSksXG4gICAgICAgIG5vZGVCID0gbm9kZUZyb21CTkYoYm5mQik7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbCkgJiYgKG5vZGVCID09PSBudWxsKSkge1xuICAgIGpzb25Db21wYXJpc29uID0gRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9IGVsc2UgaWYgKG5vZGVBID09PSBudWxsKSB7XG4gICAganNvbkNvbXBhcmlzb24gPSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9IGVsc2UgaWYgKG5vZGVCID09PSBudWxsKSB7XG4gICAganNvbkNvbXBhcmlzb24gPSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBub2RlQS5tYXRjaChub2RlQik7XG5cbiAgICBqc29uQ29tcGFyaXNvbiA9IG1hdGNoZXMgP1xuICAgICAgICAgICAgICAgICAgICAgICBFUVVBTF9UT19KU09OX0NPTVBBUklTT04gOlxuICAgICAgICAgICAgICAgICAgICAgICAgIE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gIH1cblxuICByZXR1cm4ganNvbkNvbXBhcmlzb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcGFyZUJORlxufTtcblxuZnVuY3Rpb24gbm9kZUZyb21CTkYoYm5mKSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBpZiAoYm5mICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29udGVudCA9IGJuZixcbiAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIG5vZGUgPSBibmZQYXJzZXIucGFyc2UodG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSJdLCJuYW1lcyI6WyJjb21wYXJlQk5GIiwiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mQSIsImJuZkIiLCJqc29uQ29tcGFyaXNvbiIsIm5vZGVBIiwibm9kZUZyb21CTkYiLCJub2RlQiIsIkVRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiIsIk5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT04iLCJtYXRjaGVzIiwibWF0Y2giLCJibmYiLCJub2RlIiwiY29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwicGFyc2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVVnQkEsVUFBVTtlQUFWQTs7SUF1QmhCLE9BRUU7ZUFGRjs7OzJCQS9CeUI7NEJBQ0M7K0JBRTZDO0FBRXZFLElBQU1DLFdBQVdDLHFCQUFRLENBQUNDLFdBQVcsSUFDL0JDLFlBQVlDLHVCQUFTLENBQUNGLFdBQVc7QUFFaEMsU0FBU0gsV0FBV00sSUFBSSxFQUFFQyxJQUFJO0lBQ25DLElBQUlDO0lBRUosSUFBTUMsUUFBUUMsWUFBWUosT0FDcEJLLFFBQVFELFlBQVlIO0lBRTFCLElBQUksQUFBQ0UsVUFBVSxRQUFVRSxVQUFVLE1BQU87UUFDeENILGlCQUFpQkkseUNBQXdCO0lBQzNDLE9BQU8sSUFBSUgsVUFBVSxNQUFNO1FBQ3pCRCxpQkFBaUJLLDZDQUE0QjtJQUMvQyxPQUFPLElBQUlGLFVBQVUsTUFBTTtRQUN6QkgsaUJBQWlCSyw2Q0FBNEI7SUFDL0MsT0FBTztRQUNMLElBQU1DLFVBQVVMLE1BQU1NLEtBQUssQ0FBQ0o7UUFFNUJILGlCQUFpQk0sVUFDRUYseUNBQXdCLEdBQ3RCQyw2Q0FBNEI7SUFDbkQ7SUFFQSxPQUFPTDtBQUNUO0lBRUEsV0FBZTtJQUNiUixZQUFBQTtBQUNGO0FBRUEsU0FBU1UsWUFBWU0sR0FBRztJQUN0QixJQUFJQyxPQUFPO0lBRVgsSUFBSUQsUUFBUSxNQUFNO1FBQ2hCLElBQU1FLFVBQVVGLEtBQ1ZHLFNBQVNsQixTQUFTbUIsUUFBUSxDQUFDRjtRQUVqQ0QsT0FBT2IsVUFBVWlCLEtBQUssQ0FBQ0Y7SUFDekI7SUFFQSxPQUFPRjtBQUNUIn0=