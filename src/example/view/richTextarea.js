"use strict";

import withStyle from "easy-with-style";  ///

import { RichTextarea } from "easy-richtextarea";

export default withStyle(RichTextarea)`

  width: 36rem;
  height: 48rem;
  border: 1px solid darkgrey;
  resize: horizontal;
  padding: 0.25rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  white-space: pre;
  font-family: monospace;

`;
