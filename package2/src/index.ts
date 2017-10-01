import { instances} from "package1";

export class Bar {
  anotherMethod() {
    console.log("hello from Bar!");
  }
}

declare module "package1" {
  interface ListOfProperties {
    bar: Bar;
  }
}

instances["bar"] = new Bar();
