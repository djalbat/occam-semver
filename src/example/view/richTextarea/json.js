"use strict";

import RichTextarea from "../richTextarea";

import { DOUBLE_SPACE } from "../../constants";

export default class JSONRichTextarea extends RichTextarea {
  getJSON() {
    let json = null;

    const content = this.getContent(),
          jsonString = content; ///

    try {
      json = JSON.parse(jsonString);
    } catch (error) {
      ///
    }

    return json;
  }

  setJSON(json) {
    try {
      const jsonString = JSON.stringify(json, null, DOUBLE_SPACE),
            content = jsonString;

      this.setContent(content);

    } catch (error) {
      ///
    }
  }

  static defaultProperties = {
    className: "json",
    spellCheck: "false"
  };
}
