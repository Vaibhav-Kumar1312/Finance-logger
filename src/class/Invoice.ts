import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  //     // private,public,readonly are access modifiers
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;
  // we can also write the above variables in this way
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    this.client;
    this.details;
    this.amount;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}
