import IceCream from "./iceCream";
import IceCreamService from "./iceCreamService";
import Ingredient from "./ingredient";

export default class MockIceCreamService implements IceCreamService {
  private iceCreams: IceCream[] = undefined;

  constructor() {
    this.populateIceCreams();
  }

  getIceCreamsByName(name: string): IceCream[] {
    return this.findBy((iceCream) => iceCream.name === name);
  }

  getIceCreamById(id: number): IceCream | undefined {
    let iceCreams: IceCream[] = this.findBy((iceCream) => iceCream.id === id);
    return iceCreams.length == 0 ? undefined : iceCreams[0];
  }

  private findBy(filter: (iceCream: IceCream) => boolean): IceCream[] {
    let iceCreams: IceCream[] = this.iceCreams.filter(filter);
    return iceCreams;
  }

  private populateIceCreams(): void {
    if (this.iceCreams) {
      return;
    }

    this.iceCreams = [];
    let mint: Ingredient = new Ingredient("Mint");
    let chocolate: Ingredient = new Ingredient("Chocolate");
    let sugar: Ingredient = new Ingredient("Sugar");
    let milk: Ingredient = new Ingredient("Milk");
    let vanilla: Ingredient = new Ingredient("Vanilla");

    let mintChocolate: IceCream = new IceCream(1, "Mint Chocolate");
    mintChocolate.add(mint);
    mintChocolate.add(chocolate);
    mintChocolate.add(sugar);
    mintChocolate.add(milk);

    let frenchVanilla: IceCream = new IceCream(2, "French Vanilla");
    frenchVanilla.add(vanilla);
    frenchVanilla.add(sugar);
    frenchVanilla.add(milk);

    this.iceCreams.push(mintChocolate);
    this.iceCreams.push(frenchVanilla);
  }

  saveIceCream(iceCream: IceCream): IceCream {
    iceCream.id = this.iceCreams.length + 1;
    this.iceCreams.push(iceCream);
    return iceCream;
  }

  getIceCreams(): IceCream[] {
    return this.iceCreams;
  }
}
