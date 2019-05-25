export class Item {
    
    _id?: string;
    name: string;
    description: string;
    quantity: number;
    type: string;
    price: number;
    suit_category: string;
    color: String;
    customer: Rent;
} 

export class Rent {
    name: string;
    nic: string;
    tel: number;
    date_took: Date;
    date: Date;
    advanced: number;
}