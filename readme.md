# Calculate size of variables

## How to use

```ts
// import sizeof
import sizeof from "./mod.ts";

//calculate size of object
const obj = {
  this: "is",
  alot: 6,
  of: true,
  "data": "lol",
};

console.log(sizeof(obj));
/**
Expected output:
{
  bytesize: 32,
  KiB: 0.03125,
  MiB: 0.031189083820662766,
  GiB: 0.0311587147030185,
  size: "32B"
}
*/

// calculate size of a string
const string = "testing string lmfao";

console.log(sizeof(string));
/**
Expected output:
{
  bytesize: 20,
  KiB: 0.01953125,
  MiB: 0.01949317738791423,
  GiB: 0.019474196689386564,
  size: "20B"
}
*/

// calculate size of a number
const num = 69420;

console.log(sizeof(num));
/**
Expected output:
{
  bytesize: 8,
  KiB: 0.0078125,
  MiB: 0.007797270955165692,
  GiB: 0.007789678675754625,
  size: "8B"
}
*/

// Calculate size of a boolean
const bool = false;
console.log(sizeof(bool));
/**
Expected output:
{
  bytesize: 4,
  KiB: 0.00390625,
  MiB: 0.003898635477582846,
  GiB: 0.0038948393378773127,
  size: "4B"
}
*/
```

## Author's and Credit's

- Skyler "MierenMans" van Boheemen

## Licence

Copyright 2021 Skyler "MierenMans" van Boheemen

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
