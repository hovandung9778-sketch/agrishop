import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import heroBg from '../../assets/hero-bg.png';

const Hero: React.FC = () => {
    return (
        <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl animate-slide-up space-y-6">
                    <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm border border-white/20">
                        🌿 100% Tự nhiên & Hữu cơ
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Mang tinh hoa
                        <span className="block text-primary-400">nông sản Việt</span>
                        đến gia đình bạn
                    </h1>
                    <p className="max-w-xl text-lg text-gray-200">
                        Chúng tôi kết nối trực tiếp với nông dân để mang đến những sản phẩm tươi ngon, sạch và chất lượng nhất mỗi ngày.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8">
                            Mua ngay
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10 hover:text-white border-2">
                            Tìm hiểu thêm
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
