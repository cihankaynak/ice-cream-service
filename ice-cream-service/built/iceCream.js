"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IceCream {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.ingredients = [];
    }
    add(ingredient) {
        this.ingredients.push(ingredient);
    }
}
exports.default = IceCream;
//# sourceMappingURL=iceCream.js.map