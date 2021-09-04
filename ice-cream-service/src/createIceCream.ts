import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import MockIceCreamService from "./mockIceCreamService";
import IceCreamService from "./iceCreamService";
import IceCream from "./iceCream";

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let service: IceCreamService = new MockIceCreamService();
  let iceCream: IceCream = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(service.saveIceCream(iceCream)),
  };
};
