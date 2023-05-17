"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class View extends Element {
  childElements() {
    return ([


    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
