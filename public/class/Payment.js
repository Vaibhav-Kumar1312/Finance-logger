export class Payment {
    //     // private,public,readonly are access modifiers
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    // we can also write the above variables in this way
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
        this.recepient;
        this.details;
        this.amount;
    }
    format() {
        return `${this.recepient} owed ${this.amount} for ${this.details}`;
    }
}
