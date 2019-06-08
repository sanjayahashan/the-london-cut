export class Item {
    
    _id?: string;
    name: string;
    description: string;
    quantity: string;
    type: string;
    price: string;
    suit_category: string;
    color: string;
    image: File;
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