
export interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
    imgUrl: string,
};

export interface ProductResponse {
    id: number,
    name: string,
    description: string,
    imageUri: string,
    price: number,
}

export interface BasketItem {
    name: string,
    price: number,
    nb: number,
    id: number,
};

export interface User {
    userId: number,
    name: string;
}

export interface ProductOrderType {
    name: string,
    price: number,
}

export interface ProductOrder {
    date: string,
    total: number,
    products: ProductOrderType[],
}


export const url = 'http://localhost';
