"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const mockIceCreamService_1 = require("./mockIceCreamService");
exports.lambdaHandler = async (event) => {
    let service = new mockIceCreamService_1.default();
    let name = event === null || event === void 0 ? void 0 : event.queryStringParameters.name;
    let iceCreams = name
        ? service.getIceCreamsByName(name)
        : service.getIceCreams();
    return {
        statusCode: iceCreams.length == 0 ? 404 : 200,
        body: JSON.stringify(iceCreams),
    };
};
//# sourceMappingURL=getIceCreams.js.map