export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    unit: string; // e.g., 'kg', 'bunch', 'box'
    inStock: boolean;
    rating?: number;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface CartItem extends Product {
    quantity: number;
}
