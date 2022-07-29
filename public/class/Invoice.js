export class Invoice {
    //     // private,public,readonly are access modifiers
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    // we can also write the above variables in this way
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client;
        this.details;
        this.amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
