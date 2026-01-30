import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import type { Product } from '../../types';
import Button from '../common/Button';
import { cn } from '../../utils/cn';

interface ProductCardProps {
    product: Product;
    className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
    return (
        <div className={cn("group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg border border-gray-100", className)}>
            {/* Discount Badge - Optional */}
            {/* <div className="absolute top-3 left-3 z-10 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
        -20%
      </div> */}

            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                {/* Quick Actions */}
                <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:text-red-500 transition-colors">
                        <Heart size={16} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">

                <div className="mb-2 flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            fill={i < (product.rating || 0) ? "currentColor" : "none"}
                            className={i < (product.rating || 0) ? "text-yellow-400" : "text-gray-300"}
                        />
                    ))}
                    <span className="ml-1 text-xs text-gray-500">({product.rating})</span>
                </div>

                <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1">
                    {product.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500 line-clamp-2 flex-grow">
                    {product.description}
                </p>

                <div className="mt-4 flex items-end justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Giá</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-lg font-bold text-primary-700">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                            </span>
                            <span className="text-sm text-gray-500">/{product.unit}</span>
                        </div>
                    </div>

                    <Button size="sm" className="rounded-full !px-3 shadow-none hover:shadow-md transition-all">
                        <ShoppingCart size={18} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
