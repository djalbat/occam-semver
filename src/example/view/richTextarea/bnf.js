"use strict";

import RichTextarea from "../richTextarea";

export default class BNFRichTextarea extends RichTextarea {
  getBNF() {
    const content = this.getContent(),
          bnf = content;  ///

    return bnf;
  }

  setBNF(bnf) {
    const content = bnf;  ///

    this.setContent(content);
  }

  static defaultProperties = {
    className: "bnf",
    spellCheck: "false"
  };
}
