"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";

import { EQUAL_TO_JSON_COMPARISON, NOT_EQUAL_TO_JSON_COMPARISON } from "../jsonComparisons";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export function compareBNF(bnfA, bnfB) {
  let jsonComparison;

  const nodeA = nodeFromBNF(bnfA),
        nodeB = nodeFromBNF(bnfB);

  if ((nodeA === null) && (nodeB === null)) {
    jsonComparison = EQUAL_TO_JSON_COMPARISON;
  } else if (nodeA === null) {
    jsonComparison = NOT_EQUAL_TO_JSON_COMPARISON;
  } else if (nodeB === null) {
    jsonComparison = NOT_EQUAL_TO_JSON_COMPARISON;
  } else {
    const matches = nodeA.match(nodeB);

    jsonComparison = matches ?
                       EQUAL_TO_JSON_COMPARISON :
                         NOT_EQUAL_TO_JSON_COMPARISON;
  }

  return jsonComparison;
}

export default {
  compareBNF
};

function nodeFromBNF(bnf) {
  let node = null;

  if (bnf !== null) {
    const content = bnf,
          tokens = bnfLexer.tokenise(content);

    node = bnfParser.parse(tokens);
  }

  return node;
}