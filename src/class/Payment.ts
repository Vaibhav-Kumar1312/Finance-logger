import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
  //     // private,public,readonly are access modifiers
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;
  // we can also write the above variables in this way
  constructor(
    readonly recepient: string,
    private details: string,
    public amount: number
  ) {
    this.recepient;
    this.details;
    this.amount;
  }

  format() {
    return `${this.recepient} owed ${this.amount} for ${this.details}`;
  }
}
