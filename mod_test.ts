import { sizeof } from "./mod.ts";
Deno.test({
  name: "sizeof object",
  fn: () => {
    const obj = {
      this: "is",
      alot: 6,
      of: true,
      "data": "keks",
    };
    console.log(sizeof(obj));
  },
});
Deno.test({
  name: "sizeof string",
  fn: () => {
    const string = "testing string lmfao";
    console.log(sizeof(string));
  },
});
Deno.test({
  name: "sizeof number",
  fn: () => {
    const num = 69420;
    console.log(sizeof(num));
  },
});
Deno.test({
  name: "sizeof boolean",
  fn: () => {
    const bool = false;
    console.log(sizeof(bool));
  },
});
