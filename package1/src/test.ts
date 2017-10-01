import { ActsOnList } from './index';

let aol = new ActsOnList<"foo">();

let foo = aol.get("foo");
foo.someMethod();