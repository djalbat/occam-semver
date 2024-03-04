"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { bnfUtilities } from "../index";  ///

import CustomGrammarBNFTextarea from "./view/richTextarea/bnf/customGrammar";
import PreviousCustomGrammarBNFTextarea from "./view/richTextarea/bnf/previousCustomGrammar";

const { compareBNF } = bnfUtilities;

class View extends Element {
  customChangeHandler = (event, element) => {
    const customGrammarBNF = this.getCustomGrammarBNF(),
          previousCustomGrammarBNF = this.getPreviousCustomGrammarBNF(),
          bnfA = previousCustomGrammarBNF,  ///
          bnfB = customGrammarBNF,  ///
          bnfComparison = compareBNF(bnfA, bnfB);

    console.log(bnfComparison);
  }

  childElements() {
    return ([

      <PreviousCustomGrammarBNFTextarea onCustomChange={this.customChangeHandler} active />,
      <CustomGrammarBNFTextarea onCustomChange={this.customChangeHandler} active />

    ]);
  }

  initialise() {
    this.assignContext();

    const { initialCustomGrammarBNF, initialPreviousCustomGrammarBNF } = this.constructor,
          customGrammarBNF = initialCustomGrammarBNF, ///
          previousCustomGrammarBNF = initialPreviousCustomGrammarBNF;

    this.setCustomGrammarBNF(customGrammarBNF);

    this.setPreviousCustomGrammarBNF(previousCustomGrammarBNF);

    this.activateCustomGrammarBNFRichTextarea();

    this.activatePreviousCustomGrammarBNFRichTextarea();

    this.customChangeHandler(); ///
  }

  static initialCustomGrammarBNF = "";

  static initialPreviousCustomGrammarBNF = "";

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
