import { Bar } from "./index";
import { ActsOnList } from "package1";
console.log(Bar);
let aol = new ActsOnList<"bar">();
let bar = aol.get("bar")
bar.anotherMethod();

let aol2 = new ActsOnList<"foo">();
let foo = aol2.get("foo")
foo.someMethod();