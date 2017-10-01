Running Bug Demo
================

It seems like you can't augment a module that is re-exported from
another module's index of exports. Maybe there's some voodoo I know
about?


```
$ cd package1
$ npm install
$ npm test

> package1@0.1.0 pretest /Users/ceppstei/Work/sailfish/scratch/augmentation_bug/package1
> rm -rf dist && tsc


> package1@0.1.0 test /Users/ceppstei/Work/sailfish/scratch/augmentation_bug/package1
> node dist/test.js

hello from Foo!

$ cd ../package2
$ npm install

src/test.ts(4,26): error TS2344: Type '"bar"' does not satisfy the constraint '"foo"'.
```

To work around bug:


```
$ cd package1
$ mv src/properties.ts src/index.ts
$ npm test
$ cd ../package2
$ rm -rf node_modules/package1
$ npm install
$ npm test

[Function: Bar]
hello from Bar!
hello from Foo!
```
