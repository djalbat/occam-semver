"use strict";

import { STRING, NUMBER, BOOLEAN } from "../constants";
import { NULL_JSON_TYPE, ARRAY_JSON_TYPE, OBJECT_JSON_TYPE, PRIMITIVE_JSON_TYPE } from "../jsonTypes";

export function typeOf(json) {
  let type;

  const _null = isNull(json),
        array = isArray(json),
        object = isObject(json),
        primitive = isPrimitive(json);

  if (_null) {
    type = NULL_JSON_TYPE;
  }

  if (array) {
    type = ARRAY_JSON_TYPE;
  }

  if (object) {
    type = OBJECT_JSON_TYPE;
  }

  if (primitive) {
    type = PRIMITIVE_JSON_TYPE;
  }

  return type;
}

function isNull(json) {
  const _null = (json === null);

  return _null;
}

function isArray(json) {
  const array = Array.isArray(json);

  return array;
}

function isObject(json) {
  const array = isArray(json),
        primitive = isPrimitive(json),
        object = (!array && !primitive);

  return object;
}

function isString(json) {
  const string = ((typeof json) === STRING);

  return string;
}

function isNumber(json) {
  const number = ((typeof json) === NUMBER);

  return number;
}

function isBoolean(json) {
  const boolean = ((typeof json) === BOOLEAN);

  return boolean;
}

function isPrimitive(json) {
  const _null = isNull(json),
        string = isString(json),
        number = isNumber(json),
        boolean = isBoolean(json),
        primitive = (_null || string || number || boolean);

  return primitive;
}
