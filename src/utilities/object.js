"use strict";

export function deleteKey(object, key) {
  const deletedKey = key, ///
        keys = Object.keys(object),
        values = Object.values(object);

  object = keys.reduce((object, key, index) => {  ///
    if (key !== deletedKey) {
      const value = values[index];

      object[key] = value;
    }

    return object;
  }, {});

  return object;
}
