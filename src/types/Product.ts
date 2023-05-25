export interface Product{
    id:number;
    name:string;
    inInventary:number;
    price:number;
    description:string;
    image:string;
}

export interface ProductList{
    products:Product[];
}