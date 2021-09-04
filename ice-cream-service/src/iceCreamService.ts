import IceCream from "./iceCream";

export default interface IceCreamService {
  getIceCreamById(id: number): IceCream | undefined;
  getIceCreamsByName(name: string): IceCream[];
  getIceCreams(): IceCream[];
  saveIceCream(iceCream: IceCream): IceCream;
}
