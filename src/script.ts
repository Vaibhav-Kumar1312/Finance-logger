// // const anch = document.querySelector("a")!;

// // console.log(anch.href);
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }

// const kaizoku: IsPerson = {
//   name: "Monkey.D.Luffy",
//   age: 16,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log("i spent", amount);
//     return amount;
//   },
// };

// console.log(kaizoku);

// const invOne = new Invoice("luffy", "pirate king", 1.5);
// const invTwo = new Invoice("law", "pirate KIng", 1.2);
// console.log(invOne, invTwo);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.format());
// });

// let rec1: HasFormatter;
// let rec2: HasFormatter;

// rec1 = new Payment("sabo", "rescue kuma", 8);
// rec2 = new Invoice("noble", "slaving kuma", 99);

// let rec: HasFormatter[] = [];
// rec.push(rec1);
// rec.push(rec2);
// console.log(rec1, rec2);

import { Invoice } from "./class/Invoice.js";
import { Payment } from "./class/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplates } from "./class/ListTemplate.js";
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector(".item-list") as HTMLUListElement;

const list = new ListTemplates(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  //   console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
  list.render(doc, type.value, "end");
});
