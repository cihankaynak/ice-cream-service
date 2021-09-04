"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const mockIceCreamService_1 = require("./mockIceCreamService");
exports.lambdaHandler = async (event) => {
    let service = new mockIceCreamService_1.default();
    let id = Number.parseInt(event.pathParameters.id);
    let iceCream = service.getIceCreamById(id);
    return {
        statusCode: iceCream ? 200 : 404,
        body: iceCream ? JSON.stringify(iceCream) : "",
    };
};
//# sourceMappingURL=getIceCreamById.js.map