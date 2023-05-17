"use strict";

import Textarea from "../textarea";

export default class JSONTextarea extends Textarea {
  getJSON() {
    let json = null;

    const value = this.getValue(),
          jsonString = value; ///

    try {
      json = JSON.parse(jsonString);
    } catch (error) {
      ///
    }

    return json;
  }

  parentContext() {
    const getJSON = this.getJSON.bind(this);

    return ({
      getJSON
    });
  }

  static defaultProperties = {
    className: "json",
    spellCheck: "false"
  };
}
