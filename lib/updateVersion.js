"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateVersion;
    }
});
var _versionNumberChanges = require("./versionNumberChanges");
function updateVersion(version, versionNumberChange) {
    switch(versionNumberChange){
        case _versionNumberChanges.MAJOR_VERSION_NUMBER_CHANGE:
            {
                version.bumpMajorNumber();
                version.resetMinorNumber();
                version.resetPatchNumber();
                break;
            }
        case _versionNumberChanges.MINOR_VERSION_NUMBER_CHANGE:
            {
                version.bumpMinorNumber();
                version.resetPatchNumber();
                break;
            }
        case _versionNumberChanges.PATCH_VERSION_NUMBER_CHANGE:
            {
                version.bumpPatchNumber();
                break;
            }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91cGRhdGVWZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNQUpPUl9WRVJTSU9OX05VTUJFUl9DSEFOR0UsIE1JTk9SX1ZFUlNJT05fTlVNQkVSX0NIQU5HRSwgUEFUQ0hfVkVSU0lPTl9OVU1CRVJfQ0hBTkdFIH0gZnJvbSBcIi4vdmVyc2lvbk51bWJlckNoYW5nZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVmVyc2lvbih2ZXJzaW9uLCB2ZXJzaW9uTnVtYmVyQ2hhbmdlKSB7XG4gIHN3aXRjaCAodmVyc2lvbk51bWJlckNoYW5nZSkge1xuICAgIGNhc2UgTUFKT1JfVkVSU0lPTl9OVU1CRVJfQ0hBTkdFOiB7XG4gICAgICB2ZXJzaW9uLmJ1bXBNYWpvck51bWJlcigpO1xuICAgICAgdmVyc2lvbi5yZXNldE1pbm9yTnVtYmVyKCk7XG4gICAgICB2ZXJzaW9uLnJlc2V0UGF0Y2hOdW1iZXIoKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBNSU5PUl9WRVJTSU9OX05VTUJFUl9DSEFOR0U6IHtcbiAgICAgIHZlcnNpb24uYnVtcE1pbm9yTnVtYmVyKCk7XG4gICAgICB2ZXJzaW9uLnJlc2V0UGF0Y2hOdW1iZXIoKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBQQVRDSF9WRVJTSU9OX05VTUJFUl9DSEFOR0U6IHtcbiAgICAgIHZlcnNpb24uYnVtcFBhdGNoTnVtYmVyKCk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInVwZGF0ZVZlcnNpb24iLCJ2ZXJzaW9uIiwidmVyc2lvbk51bWJlckNoYW5nZSIsIk1BSk9SX1ZFUlNJT05fTlVNQkVSX0NIQU5HRSIsImJ1bXBNYWpvck51bWJlciIsInJlc2V0TWlub3JOdW1iZXIiLCJyZXNldFBhdGNoTnVtYmVyIiwiTUlOT1JfVkVSU0lPTl9OVU1CRVJfQ0hBTkdFIiwiYnVtcE1pbm9yTnVtYmVyIiwiUEFUQ0hfVkVSU0lPTl9OVU1CRVJfQ0hBTkdFIiwiYnVtcFBhdGNoTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O29DQUY4RTtBQUV2RixTQUFTQSxjQUFjQyxPQUFPLEVBQUVDLG1CQUFtQjtJQUNoRSxPQUFRQTtRQUNOLEtBQUtDLGlEQUEyQjtZQUFFO2dCQUNoQ0YsUUFBUUcsZUFBZTtnQkFDdkJILFFBQVFJLGdCQUFnQjtnQkFDeEJKLFFBQVFLLGdCQUFnQjtnQkFFeEI7WUFDRjtRQUVBLEtBQUtDLGlEQUEyQjtZQUFFO2dCQUNoQ04sUUFBUU8sZUFBZTtnQkFDdkJQLFFBQVFLLGdCQUFnQjtnQkFFeEI7WUFDRjtRQUVBLEtBQUtHLGlEQUEyQjtZQUFFO2dCQUNoQ1IsUUFBUVMsZUFBZTtnQkFFdkI7WUFDRjtJQUNGO0FBQ0YifQ==