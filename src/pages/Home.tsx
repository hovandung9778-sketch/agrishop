import React from 'react';
import Hero from '../components/layout/Hero';
import ProductCard from '../components/products/ProductCard';
import type { Product } from '../types';
import { ArrowRight, Truck, ShieldCheck, Leaf, Clock } from 'lucide-react';
import Button from '../components/common/Button';

// Mock data
const FEATURED_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Dâu Tây Đà Lạt Cao Cấp',
        description: 'Dâu tây giống New Zealand trồng tại Đà Lạt, ngọt, thơm, không dư lượng thuốc bảo vệ thực vật.',
        price: 350000,
        image: 'https://images.unsplash.com/photo-1543528176-61b239494933?auto=format&fit=crop&q=80&w=800',
        category: 'Trai cay',
        unit: 'kg',
        inStock: true,
        rating: 5,
    },
    {
        id: '2',
        name: 'Cà Chua Cherry Hữu Cơ',
        description: 'Cà chua cherry đỏ mọng, giòn ngọt, thích hợp ăn sống hoặc làm salad.',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&q=80&w=800',
        category: 'Rau cu',
        unit: 'kg',
        inStock: true,
        rating: 4,
    },
    {
        id: '3',
        name: 'Súp Lơ Xanh Baby',
        description: 'Súp lơ xanh baby tươi ngon, giàu vitamin, được thu hoạch vào sáng sớm.',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1459411621453-7fb8db86aa23?auto=format&fit=crop&q=80&w=800',
        category: 'Rau cu',
        unit: '500g',
        inStock: true,
        rating: 5,
    },
    {
        id: '4',
        name: 'Cam Vàng Navel Úc',
        description: 'Cam vàng Navel nhập khẩu Úc, mọng nước, không hạt, vị ngọt thanh.',
        price: 120000,
        image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800',
        category: 'Trai cay',
        unit: 'kg',
        inStock: true,
        rating: 4,
    },
];

const FEATURES = [
    {
        icon: <Leaf className="h-8 w-8 text-primary-500" />,
        title: '100% Tự Nhiên',
        description: 'Sản phẩm được canh tác theo quy trình hữu cơ, không hóa chất độc hại.',
    },
    {
        icon: <Truck className="h-8 w-8 text-primary-500" />,
        title: 'Giao Hàng Nhanh',
        description: 'Giao hàng trong nội thành chỉ trong 2 giờ để đảm bảo độ tươi ngon.',
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary-500" />,
        title: 'Đảm Bảo Chất Lượng',
        description: 'Hoàn tiền 100% nếu sản phẩm không đạt chất lượng cam kết.',
    },
    {
        icon: <Clock className="h-8 w-8 text-primary-500" />,
        title: 'Hỗ Trợ 24/7',
        description: 'Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào.',
    },
];

const Home: React.FC = () => {
    return (
        <div className="flex flex-col gap-12 pb-16">
            <Hero />

            {/* Features Section */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2 lg:grid-cols-4 border border-gray-100">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 p-2 transition-all hover:translate-y-[-2px]">
                            <div className="rounded-full bg-primary-50 p-3">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Sản phẩm nổi bật</h2>
                        <p className="mt-2 text-gray-500">Những sản phẩm được yêu thích nhất tuần qua</p>
                    </div>
                    <Button variant="ghost" className="hidden sm:flex group">
                        Xem tất cả
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURED_PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-8 flex justify-center sm:hidden">
                    <Button variant="outline" className="w-full">
                        Xem tất cả sản phẩm
                    </Button>
                </div>
            </section>

            {/* Banner/Promotion */}
            <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-primary-900 px-6 py-12 sm:px-12 sm:py-16 md:px-16 lg:px-20">
                    <div className="relative z-10 flex flex-col items-start gap-6 text-white md:w-1/2">
                        <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                            Ưu đãi đặc biệt
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Giảm giá 20% cho đơn hàng đầu tiên
                        </h2>
                        <p className="text-primary-100">
                            Nhập mã <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">NEW20</span> khi thanh toán để nhận ngay ưu đãi. Áp dụng cho đơn hàng từ 500k.
                        </p>
                        <Button className="bg-white text-primary-900 override:hover:bg-gray-100 mt-2">
                            Mua sắm ngay
                        </Button>
                    </div>

                    <div className="absolute top-0 right-0 h-full w-full opacity-20 md:w-1/2 md:opacity-100">
                        {/* Decorative pattern or image could go here */}
                        <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary-500 blur-3xl mix-blend-multiply opacity-50" />
                        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-secondary-500 blur-3xl mix-blend-multiply opacity-50" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
