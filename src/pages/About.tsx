import React from 'react';
import { Leaf, Heart, Users, CheckCircle2, Award, Sprout } from 'lucide-react';
import Button from '../components/common/Button';
import { cn } from '../utils/cn';

const About: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-primary-900 py-20 text-center text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 mx-auto max-w-3xl px-6">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary-800/50 px-4 py-1.5 backdrop-blur-sm border border-primary-700">
                        <span className="text-sm font-medium text-primary-100">Câu chuyện của chúng tôi</span>
                    </div>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Gieo mầm xanh <br />
                        <span className="text-primary-300">Gặt sức khỏe</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-primary-100 md:text-xl">
                        Hành trình 10 năm mang nông sản sạch từ những nông trại trù phú nhất Việt Nam đến bữa cơm gia đình bạn.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                    <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-100 lg:aspect-auto lg:h-[600px]">
                        <img
                            src="https://images.unsplash.com/photo-1595855709940-51206144e532?auto=format&fit=crop&q=80&w=1000"
                            alt="Farmer holding fresh vegetables"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-primary-500 rounded-full p-2">
                                    <Award size={20} />
                                </div>
                                <span className="font-semibold">Chứng nhận Organic</span>
                            </div>
                            <p className="text-sm text-gray-200">Cam kết 100% sản phẩm đạt tiêu chuẩn an toàn vệ sinh thực phẩm quốc tế.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Sứ mệnh của AgriFarm</h2>
                            <div className="mt-2 h-1 w-20 rounded-full bg-primary-500" />
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Chúng tôi tin rằng thực phẩm không chỉ là nguồn dinh dưỡng mà còn là liều thuốc cho tâm hồn và sức khỏe. AgriFarm ra đời với mong muốn kết nối trực tiếp người tiêu dùng với những nông dân tử tế, loại bỏ các khâu trung gian không cần thiết để đảm bảo độ tươi ngon nhất.
                        </p>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="rounded-xl border border-primary-100 bg-primary-50/50 p-6 transition-colors hover:bg-primary-50">
                                <Leaf className="mb-4 h-8 w-8 text-primary-600" />
                                <h3 className="mb-2 font-semibold text-gray-900">Canh tác bền vững</h3>
                                <p className="text-sm text-gray-600">Bảo vệ đất và môi trường cho thế hệ tương lai.</p>
                            </div>
                            <div className="rounded-xl border border-primary-100 bg-primary-50/50 p-6 transition-colors hover:bg-primary-50">
                                <Heart className="mb-4 h-8 w-8 text-primary-600" />
                                <h3 className="mb-2 font-semibold text-gray-900">Đặt tâm vào sản phẩm</h3>
                                <p className="text-sm text-gray-600">Chăm sóc từng gốc rau, quả ngọt như con cái.</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="rounded-full px-8">
                                Xem quy trình của chúng tôi
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-primary-900 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-primary-300">
                                <Sprout size={24} />
                            </div>
                            <div className="text-4xl font-bold text-white mb-1">50+</div>
                            <div className="text-sm text-primary-200">Nông trại liên kết</div>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-primary-300">
                                <Users size={24} />
                            </div>
                            <div className="text-4xl font-bold text-white mb-1">10k+</div>
                            <div className="text-sm text-primary-200">Khách hàng tin dùng</div>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-primary-300">
                                <Leaf size={24} />
                            </div>
                            <div className="text-4xl font-bold text-white mb-1">100%</div>
                            <div className="text-sm text-primary-200">Thực phẩm sạch</div>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-primary-300">
                                <CheckCircle2 size={24} />
                            </div>
                            <div className="text-4xl font-bold text-white mb-1">5+</div>
                            <div className="text-sm text-primary-200">Năm phát triển</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Giá trị cốt lõi</h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Những nguyên tắc bất di bất dịch giúp AgriFarm giữ vững niềm tin nơi khách hàng trong suốt chặng đường vừa qua.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { title: 'Minh bạch', desc: 'Rõ ràng nguồn gốc xuất xứ, quy trình trồng trọt và giá cả.', color: 'bg-blue-50 text-blue-600' },
                        { title: 'Tận tâm', desc: 'Phục vụ khách hàng bằng sự chân thành và trách nhiệm cao nhất.', color: 'bg-green-50 text-green-600' },
                        { title: 'Đổi mới', desc: 'Liên tục cập nhật công nghệ bảo quản để giữ trọn vị tươi ngon.', color: 'bg-orange-50 text-orange-600' }
                    ].map((val, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                            <div className={cn("absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-20 transition-transform group-hover:scale-150", val.color)} />
                            <h3 className="mb-3 text-xl font-bold text-gray-900">{val.title}</h3>
                            <p className="text-gray-600">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-gray-50 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Trở thành đối tác của AgriFarm?</h2>
                        <p className="mt-2 text-gray-600">
                            Nếu bạn là nhà nông đang tìm đầu ra ổn định cho nông sản sạch, hãy liên hệ ngay với chúng tôi.
                        </p>
                    </div>
                    <div className="flex gap-4 shrink-0">
                        <Button variant="outline" className="bg-white">Đăng ký ngay</Button>
                        <Button>Liên hệ hợp tác</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
