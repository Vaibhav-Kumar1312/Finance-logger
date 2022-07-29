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
