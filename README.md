# ice-cream-service

Sample AWS Lambda app which demonstrates simple CRUD operations for an ice cream shop.

- [getIceCreams.ts](ice-cream-service/src/getIceCreams.ts)
  - Returns list of ice creams.
  - Supports querying by name as well.
- [getIceCreamById.ts](ice-cream-service/src/getIceCreamById.ts)
  - Returns an ice cream by id.
- [createIceCream.ts](ice-cream-service/src/createIceCream.ts)
  - Creates an ice cream.

Sample http requests can be found in [tests/integration](ice-cream-service/tests/integration) folder.
