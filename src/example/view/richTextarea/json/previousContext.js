"use strict";

import withStyle from "easy-with-style";  ///

import JSONRichTextarea from "../../richTextarea/json";

class PreviousContextJSONRichTextarea extends JSONRichTextarea {
  parentContext() {
    const getPreviousContextJSON = this.getJSON.bind(this), ///
          setPreviousContextJSON = this.setJSON.bind(this), ///
          activatePreviousContextJSONRichTextarea = this.activate.bind(this); ///

    return ({
      getPreviousContextJSON,
      setPreviousContextJSON,
      activatePreviousContextJSONRichTextarea
    });
  }

  static defaultProperties = {
    className: "previous-context"
  };
}

export default withStyle(PreviousContextJSONRichTextarea)`

  margin-right: 1rem;
  
`;
