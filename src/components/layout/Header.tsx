import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Leaf } from 'lucide-react';
import Button from '../common/Button';
import { cn } from '../../utils/cn';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Mock cart items count
    const cartItemCount = 2;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white">
                        <Leaf size={20} />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                        AgriFarm
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
                        Trang chủ
                    </Link>
                    <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
                        Sản phẩm
                    </Link>
                    <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
                        Về chúng tôi
                    </Link>
                    <Link to="/blog" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
                        Bài viết
                    </Link>
                    <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
                        Liên hệ
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex relative">
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="h-9 w-64 rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>

                    <Button variant="ghost" size="sm" className="hidden sm:flex" aria-label="Account">
                        <User size={20} />
                    </Button>

                    <Link to="/cart" className="relative group">
                        <div className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
                            <ShoppingCart size={20} />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                                    {cartItemCount}
                                </span>
                            )}
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-500"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="space-y-1 px-4 py-4">
                        <Link to="/" className="block py-2 text-base font-medium text-gray-900">
                            Trang chủ
                        </Link>
                        <Link to="/products" className="block py-2 text-base font-medium text-gray-600">
                            Sản phẩm
                        </Link>
                        <Link to="/about" className="block py-2 text-base font-medium text-gray-600">
                            Về chúng tôi
                        </Link>
                        <Link to="/contact" className="block py-2 text-base font-medium text-gray-600">
                            Liên hệ
                        </Link>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:border-primary-500 focus:bg-white focus:outline-none"
                                />
                                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
