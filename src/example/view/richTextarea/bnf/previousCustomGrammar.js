"use strict";

import withStyle from "easy-with-style";  ///

import BNFRichTextarea from "../../richTextarea/bnf";

class PreviousCustomGrammarBNFRichTextarea extends BNFRichTextarea {
  parentContext() {
    const getPreviousCustomGrammarBNF = this.getBNF.bind(this), ///
          setPreviousCustomGrammarBNF = this.setBNF.bind(this), ///
          activatePreviousCustomGrammarBNFRichTextarea = this.activate.bind(this); ///

    return ({
      getPreviousCustomGrammarBNF,
      setPreviousCustomGrammarBNF,
      activatePreviousCustomGrammarBNFRichTextarea
    });
  }

  static defaultProperties = {
    className: "previous-custom-grammar"
  };
}

export default withStyle(PreviousCustomGrammarBNFRichTextarea)`

  margin-right: 1rem;
  
`;
