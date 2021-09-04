"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const mockIceCreamService_1 = require("./mockIceCreamService");
exports.lambdaHandler = async (event) => {
    let service = new mockIceCreamService_1.default();
    let iceCream = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify(service.saveIceCream(iceCream)),
    };
};
//# sourceMappingURL=createIceCream.js.map