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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVFbGVtZW50KGFycmF5LCBlbGVtZW50KSB7XG4gIGNvbnN0IGRlbGV0ZWRFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgYXJyYXkgPSBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBpZiAoZWxlbWVudCAhPT0gZGVsZXRlZEVsZW1lbnQpIHtcbiAgICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIl0sIm5hbWVzIjpbImRlbGV0ZUVsZW1lbnQiLCJhcnJheSIsImVsZW1lbnQiLCJkZWxldGVkRWxlbWVudCIsInJlZHVjZSIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsY0FBY0MsS0FBSyxFQUFFQyxPQUFPO0lBQzFDLElBQU1DLGlCQUFpQkQsU0FBUyxHQUFHO0lBRW5DRCxRQUFRQSxNQUFNRyxPQUFPLFNBQUNILE9BQU9DO1FBQzNCLElBQUlBLFlBQVlDLGdCQUFnQjtZQUM5QkYsTUFBTUksS0FBS0g7UUFDYjtRQUVBLE9BQU9EO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0E7QUFDVCJ9