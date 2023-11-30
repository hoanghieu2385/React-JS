import React, { useState, useEffect } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const Product = ({ name, price, discount, image, rating, sale, addToCart, cartItems }) => {
    // State để theo dõi số lượng sản phẩm trong giỏ hàng
    const [cartCount, setCartCount] = useState(0);

    // Sử dụng useEffect để cập nhật cartCount mỗi khi giỏ hàng thay đổi 
    useEffect(() => {
        // TÍnh tổng số lượng sản phẩm trong giỏ hàng
        const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        // Cập nhật state cartCount
        setCartCount(totalCount);
    }, [cartItems]);

    // Tạo sao dựa trên rating của sản phẩm
    const stars = Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} color={rating >index ? '#ffc107' : '#e4e5e9'} />
    ));

    // Tính giá sau khi giảm giá
    const discountedPrice = price - (price * discount) /100;

    // Xử lí sự kiện khi thêm sản phẩm vào giỏ hàng
    const handleAddToCart = () => {
        // Gọi hàm addToCart từ props để thêm sản phẩm vào giỏ hàng
        addToCart({ name, price, quantity: 1 });
    };

    return (
        <div className="product">
            {/* Hiển thị "Sale" nếu sản phẩm đang được giảm giá */}
            {sale && <div className="sale-label">Sale</div>}

            {/* Hiển thị hình ảnh sản phẩm */}
            <img src={image} alt={name} />

            {/* Hiện thị tên sản phẩm */}
            <h3>{name}</h3>

            {/* Hiện thị giá gốc nếu có giảm giá */}
            <div className="price-container">
                {discount > 0 && (
                    <p className="original-price">${price.toFixed(2)}</p>
                )}

                {/* Hiện thị giá sau khi giảm giá */}
                <p className="discounted-price">${discountedPrice.toFixed(2)}</p>
            </div>

            {/* Hiển thị đánh giá sản phẩm bằng sao */}
            <div className="rating">{stars}</div>

            {/* Hiển thị nút "Add to Cart" nếu sản phẩm đang được giảm giá, 
            ngược lại hiển thị nút "View Options" nếu không có giảm giá */}
            {sale ? (
                <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            ) : (
                <button className="view-options">View Options</button>
            )}
        </div>
    );
};

export default Product;