import React from 'react';
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 pt-16 pb-8 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white">
                                <Leaf size={20} />
                            </div>
                            <span className="text-xl font-bold text-white">
                                AgriFarm
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Chúng tôi cung cấp nông sản sạch, tươi ngon trực tiếp từ nông trại đến bàn ăn của bạn. Cam kết chất lượng và vệ sinh an toàn thực phẩm.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Trang chủ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Sản phẩm</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Về chúng tôi</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Liên hệ</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Danh mục</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Rau củ quả sạch</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Trái cây tươi</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Thực phẩm hữu cơ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Đặc sản vùng miền</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 text-primary-500 shrink-0" />
                                <span>123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary-500 shrink-0" />
                                <span>(+84) 90 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary-500 shrink-0" />
                                <span>contact@agrifarm.vn</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2026 AgriFarm. All rights reserved. Designed with love.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
