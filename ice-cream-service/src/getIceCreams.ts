import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import MockIceCreamService from "./mockIceCreamService";
import IceCreamService from "./iceCreamService";
import IceCream from "./iceCream";

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let service: IceCreamService = new MockIceCreamService();
  let name = event.queryStringParameters?.name;
  let iceCreams: IceCream[] = name
    ? service.getIceCreamsByName(name)
    : service.getIceCreams();

  return {
    statusCode: iceCreams.length == 0 ? 404 : 200,
    body: JSON.stringify(iceCreams),
  };
};
