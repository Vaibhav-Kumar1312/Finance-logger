import { Invoice } from "./class/Invoice.js";
import { Payment } from "./class/Payment.js";
import { ListTemplates } from "./class/ListTemplate.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
const list = new ListTemplates(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //   console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
