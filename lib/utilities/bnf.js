"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "compareBNF", {
    enumerable: true,
    get: function() {
        return compareBNF;
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
function nodeFromBNF(bnf) {
    var node = null;
    if (bnf !== null) {
        var content = bnf, tokens = bnfLexer.tokenise(content);
        node = bnfParser.parse(tokens);
    }
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IEVRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiwgTk9UX0VRVUFMX1RPX0pTT05fQ09NUEFSSVNPTiB9IGZyb20gXCIuLi9qc29uQ29tcGFyaXNvbnNcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQk5GKGJuZkEsIGJuZkIpIHtcbiAgbGV0IGpzb25Db21wYXJpc29uO1xuXG4gIGNvbnN0IG5vZGVBID0gbm9kZUZyb21CTkYoYm5mQSksXG4gICAgICAgIG5vZGVCID0gbm9kZUZyb21CTkYoYm5mQik7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbCkgJiYgKG5vZGVCID09PSBudWxsKSkge1xuICAgIGpzb25Db21wYXJpc29uID0gRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9IGVsc2UgaWYgKG5vZGVBID09PSBudWxsKSB7XG4gICAganNvbkNvbXBhcmlzb24gPSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9IGVsc2UgaWYgKG5vZGVCID09PSBudWxsKSB7XG4gICAganNvbkNvbXBhcmlzb24gPSBOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBub2RlQS5tYXRjaChub2RlQik7XG5cbiAgICBqc29uQ29tcGFyaXNvbiA9IG1hdGNoZXMgP1xuICAgICAgICAgICAgICAgICAgICAgICBFUVVBTF9UT19KU09OX0NPTVBBUklTT04gOlxuICAgICAgICAgICAgICAgICAgICAgICAgIE5PVF9FUVVBTF9UT19KU09OX0NPTVBBUklTT047XG4gIH1cblxuICByZXR1cm4ganNvbkNvbXBhcmlzb247XG59XG5cbmZ1bmN0aW9uIG5vZGVGcm9tQk5GKGJuZikge1xuICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgaWYgKGJuZiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBibmYsXG4gICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICBub2RlID0gYm5mUGFyc2VyLnBhcnNlKHRva2Vucyk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iXSwibmFtZXMiOlsiY29tcGFyZUJORiIsImJuZkxleGVyIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJORlBhcnNlciIsImJuZkEiLCJibmZCIiwianNvbkNvbXBhcmlzb24iLCJub2RlQSIsIm5vZGVGcm9tQk5GIiwibm9kZUIiLCJFUVVBTF9UT19KU09OX0NPTVBBUklTT04iLCJOT1RfRVFVQUxfVE9fSlNPTl9DT01QQVJJU09OIiwibWF0Y2hlcyIsIm1hdGNoIiwiYm5mIiwibm9kZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVZ0JBOzs7ZUFBQUE7OzsyQkFSUzs0QkFDQzsrQkFFNkM7QUFFdkUsSUFBTUMsV0FBV0MscUJBQVEsQ0FBQ0MsV0FBVyxJQUMvQkMsWUFBWUMsdUJBQVMsQ0FBQ0YsV0FBVztBQUVoQyxTQUFTSCxXQUFXTSxJQUFJLEVBQUVDLElBQUk7SUFDbkMsSUFBSUM7SUFFSixJQUFNQyxRQUFRQyxZQUFZSixPQUNwQkssUUFBUUQsWUFBWUg7SUFFMUIsSUFBSSxBQUFDRSxVQUFVLFFBQVVFLFVBQVUsTUFBTztRQUN4Q0gsaUJBQWlCSSx5Q0FBd0I7SUFDM0MsT0FBTyxJQUFJSCxVQUFVLE1BQU07UUFDekJELGlCQUFpQkssNkNBQTRCO0lBQy9DLE9BQU8sSUFBSUYsVUFBVSxNQUFNO1FBQ3pCSCxpQkFBaUJLLDZDQUE0QjtJQUMvQyxPQUFPO1FBQ0wsSUFBTUMsVUFBVUwsTUFBTU0sS0FBSyxDQUFDSjtRQUU1QkgsaUJBQWlCTSxVQUNFRix5Q0FBd0IsR0FDdEJDLDZDQUE0QjtJQUNuRDtJQUVBLE9BQU9MO0FBQ1Q7QUFFQSxTQUFTRSxZQUFZTSxHQUFHO0lBQ3RCLElBQUlDLE9BQU87SUFFWCxJQUFJRCxRQUFRLE1BQU07UUFDaEIsSUFBTUUsVUFBVUYsS0FDVkcsU0FBU2xCLFNBQVNtQixRQUFRLENBQUNGO1FBRWpDRCxPQUFPYixVQUFVaUIsS0FBSyxDQUFDRjtJQUN6QjtJQUVBLE9BQU9GO0FBQ1QifQ==