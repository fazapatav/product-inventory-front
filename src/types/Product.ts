export interface Product{
    id:number;
    name:string;
    inInventary:number;
    price:number;
    description:string;
    images:string[];
}

export interface ProductList{
    products:Product[];
}