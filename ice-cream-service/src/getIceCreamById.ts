import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import MockIceCreamService from "./mockIceCreamService";
import IceCreamService from "./iceCreamService";
import IceCream from "./iceCream";

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let service: IceCreamService = new MockIceCreamService();
  let id: number = Number.parseInt(event.pathParameters.id);
  let iceCream: IceCream = service.getIceCreamById(id);
  return {
    statusCode: iceCream ? 200 : 404,
    body: iceCream ? JSON.stringify(iceCream) : "",
  };
};
