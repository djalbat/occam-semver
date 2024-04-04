"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deleteElement", {
    enumerable: true,
    get: function() {
        return deleteElement;
    }
});
function deleteElement(array, element) {
    var deletedElement = element; ///
    array = array.reduce(function(array, element) {
        if (element !== deletedElement) {
            array.push(element);
        }
        return array;
    }, []);
    return array;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVFbGVtZW50KGFycmF5LCBlbGVtZW50KSB7XG4gIGNvbnN0IGRlbGV0ZWRFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgYXJyYXkgPSBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBpZiAoZWxlbWVudCAhPT0gZGVsZXRlZEVsZW1lbnQpIHtcbiAgICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIl0sIm5hbWVzIjpbImRlbGV0ZUVsZW1lbnQiLCJhcnJheSIsImVsZW1lbnQiLCJkZWxldGVkRWxlbWVudCIsInJlZHVjZSIsInB1c2giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxjQUFjQyxLQUFLLEVBQUVDLE9BQU87SUFDMUMsSUFBTUMsaUJBQWlCRCxTQUFTLEdBQUc7SUFFbkNELFFBQVFBLE1BQU1HLE1BQU0sQ0FBQyxTQUFDSCxPQUFPQztRQUMzQixJQUFJQSxZQUFZQyxnQkFBZ0I7WUFDOUJGLE1BQU1JLElBQUksQ0FBQ0g7UUFDYjtRQUVBLE9BQU9EO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0E7QUFDVCJ9