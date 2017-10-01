export interface ListOfProperties {
  foo: Foo;
}


export class Foo {
  someMethod() {
    console.log("hello from Foo!");
  }
}

export const instances: ListOfProperties = {
  foo: new Foo()
}

export class ActsOnList<T extends keyof ListOfProperties> {
  get(name: T): ListOfProperties[T] {
    return instances[name];
  }
}