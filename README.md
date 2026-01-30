# AgriFarm - Website Bán Hàng Nông Sản

Dự án website bán hàng nông sản hiện đại, chuẩn SOLID, sử dụng React + TypeScript + Tailwind CSS.

## Công nghệ sử dụng

- **Core**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Routing**: React Router DOM (v7)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Cấu trúc dự án

Dự án được phân tách component rõ ràng theo nguyên lý SOLID:

```
src/
├── assets/          # Tài nguyên (hình ảnh, fonts)
├── components/      # Các component tái sử dụng
│   ├── common/      # Component chung (Button, Input...)
│   ├── layout/      # Component bố cục (Header, Footer, Layout...)
│   └── products/    # Component liên quan đến sản phẩm (ProductCard...)
├── pages/           # Các trang chính (Home, Cart, Checkout...)
├── types/           # Định nghĩa kiểu dữ liệu (Product, Category...)
├── utils/           # Các hàm tiện ích (cn, format price...)
├── App.tsx          # Router và config chính
└── main.tsx         # Entry point
```

## Hướng dẫn cài đặt và chạy

1.  **Cài đặt dependencies**:
    ```bash
    npm install
    ```

2.  **Chạy server development**:
    ```bash
    npm run dev
    ```

3.  **Build production**:
    ```bash
    npm run build
    ```

## Tính năng

- Thiết kế Responsive (Mobile & Desktop)
- Giao diện hiện đại, Clean UX/UI
- Hệ thống màu sắc xanh lá (Earth tones) phù hợp với nông sản
- Component tái sử dụng cao
