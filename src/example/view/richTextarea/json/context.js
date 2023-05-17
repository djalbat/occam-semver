"use strict";

import JSONRichTextarea from "../../richTextarea/json";

export default class ContextJSONRichTextarea extends JSONRichTextarea {
  parentContext() {
    const getContextJSON = this.getJSON.bind(this), ///
          setContextJSON = this.setJSON.bind(this), ///
          activateContextJSONRichTextarea = this.activate.bind(this); ///

    return ({
      getContextJSON,
      setContextJSON,
      activateContextJSONRichTextarea
    });
  }

  static defaultProperties = {
    className: "context"
  };
}
