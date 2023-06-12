"use strict";

export function deleteElement(array, element) {
  const deletedElement = element; ///

  array = array.reduce((array, element) => {  ///
    if (element !== deletedElement) {
      array.push(element);
    }

    return array;
  }, []);

  return array;
}
