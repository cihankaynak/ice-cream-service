"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iceCream_1 = require("./iceCream");
const ingredient_1 = require("./ingredient");
class MockIceCreamService {
    constructor() {
        this.iceCreams = undefined;
        this.populateIceCreams();
    }
    getIceCreamsByName(name) {
        return this.findBy((iceCream) => iceCream.name === name);
    }
    getIceCreamById(id) {
        let iceCreams = this.findBy((iceCream) => iceCream.id === id);
        return iceCreams.length == 0 ? undefined : iceCreams[0];
    }
    findBy(filter) {
        let iceCreams = this.iceCreams.filter(filter);
        return iceCreams;
    }
    populateIceCreams() {
        if (this.iceCreams) {
            return;
        }
        this.iceCreams = [];
        let mint = new ingredient_1.default("Mint");
        let chocolate = new ingredient_1.default("Chocolate");
        let sugar = new ingredient_1.default("Sugar");
        let milk = new ingredient_1.default("Milk");
        let vanilla = new ingredient_1.default("Vanilla");
        let mintChocolate = new iceCream_1.default(1, "Mint Chocolate");
        mintChocolate.add(mint);
        mintChocolate.add(chocolate);
        mintChocolate.add(sugar);
        mintChocolate.add(milk);
        let frenchVanilla = new iceCream_1.default(2, "French Vanilla");
        frenchVanilla.add(vanilla);
        frenchVanilla.add(sugar);
        frenchVanilla.add(milk);
        this.iceCreams.push(mintChocolate);
        this.iceCreams.push(frenchVanilla);
    }
    saveIceCream(iceCream) {
        iceCream.id = this.iceCreams.length + 1;
        this.iceCreams.push(iceCream);
        return iceCream;
    }
    getIceCreams() {
        return this.iceCreams;
    }
}
exports.default = MockIceCreamService;
//# sourceMappingURL=mockIceCreamService.js.map