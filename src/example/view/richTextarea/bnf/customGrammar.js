"use strict";

import BNFRichTextarea from "../../richTextarea/bnf";

export default class CustomGrammarBNFRichTextarea extends BNFRichTextarea {
  parentContext() {
    const getCustomGrammarBNF = this.getBNF.bind(this), ///
          setCustomGrammarBNF = this.setBNF.bind(this), ///
          activateCustomGrammarBNFRichTextarea = this.activate.bind(this); ///

    return ({
      getCustomGrammarBNF,
      setCustomGrammarBNF,
      activateCustomGrammarBNFRichTextarea
    });
  }

  static defaultProperties = {
    className: "custom-grammar"
  };
}
