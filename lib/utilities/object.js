"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deleteKey", {
    enumerable: true,
    get: function() {
        return deleteKey;
    }
});
function deleteKey(object, key) {
    var deletedKey = key, keys = Object.keys(object), values = Object.values(object);
    object = keys.reduce(function(object, key, index) {
        if (key !== deletedKey) {
            var value = values[index];
            object[key] = value;
        }
        return object;
    }, {});
    return object;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlS2V5KG9iamVjdCwga2V5KSB7XG4gIGNvbnN0IGRlbGV0ZWRLZXkgPSBrZXksIC8vL1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KSxcbiAgICAgICAgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvYmplY3QpO1xuXG4gIG9iamVjdCA9IGtleXMucmVkdWNlKChvYmplY3QsIGtleSwgaW5kZXgpID0+IHsgIC8vL1xuICAgIGlmIChrZXkgIT09IGRlbGV0ZWRLZXkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2luZGV4XTtcblxuICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cbiJdLCJuYW1lcyI6WyJkZWxldGVLZXkiLCJvYmplY3QiLCJrZXkiLCJkZWxldGVkS2V5Iiwia2V5cyIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsImluZGV4IiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsVUFBVUMsTUFBTSxFQUFFQyxHQUFHO0lBQ25DLElBQU1DLGFBQWFELEtBQ2JFLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0gsU0FDbkJLLFNBQVNELE9BQU9DLE1BQU0sQ0FBQ0w7SUFFN0JBLFNBQVNHLEtBQUtHLE1BQU0sQ0FBQyxTQUFDTixRQUFRQyxLQUFLTTtRQUNqQyxJQUFJTixRQUFRQyxZQUFZO1lBQ3RCLElBQU1NLFFBQVFILE1BQU0sQ0FBQ0UsTUFBTTtZQUUzQlAsTUFBTSxDQUFDQyxJQUFJLEdBQUdPO1FBQ2hCO1FBRUEsT0FBT1I7SUFDVCxHQUFHLENBQUM7SUFFSixPQUFPQTtBQUNUIn0=