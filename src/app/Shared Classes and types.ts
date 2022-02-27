export interface IProduct{
    ID:number,
    Name:string,
    Quantity:number,
    Price:number,
    Img:string;
}

export interface ICatogary{
    ID:number,
    Name:string,
}
export enum DiscountOffers{
    "noDiscount",
   "10%",
    "15%",
}