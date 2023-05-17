"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { compareContextJSON } from "../index";  ///

import ContextJSONTextarea from "./view/richTextarea/json/context";
import PreviousContextJSONTextarea from "./view/richTextarea/json/previousContext";

class View extends Element {
  changeHandler = (event, element) => {
    const contextJSON = this.getContextJSON(),
          previousContextJSON = this.getPreviousContextJSON(),
          jsonComparison = compareContextJSON(previousContextJSON, contextJSON);

    console.log(jsonComparison);
  }

  childElements() {
    return ([

      <PreviousContextJSONTextarea onChange={this.changeHandler} active />,
      <ContextJSONTextarea onChange={this.changeHandler} active />

    ]);
  }

  initialise() {
    this.assignContext();

    const { initialContextJSON, initialPreviousContextJSON } = this.constructor,
          contextJSON = initialContextJSON, ///
          previousContextJSON = initialPreviousContextJSON;

    this.setContextJSON(contextJSON);

    this.setPreviousContextJSON(previousContextJSON);

    this.activateContextJSONRichTextarea();

    this.activatePreviousContextJSONRichTextarea();

    this.changeHandler();
  }

  static initialContextJSON = {};

  static initialPreviousContextJSON = {};

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
