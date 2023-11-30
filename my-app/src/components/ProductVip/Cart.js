import React from 'react';

const Cart = ({ cartItems }) => {
    // Tính tổng số tiền của giỏ hàng bằng cách lặp qua từng sản ohẩm và tính tổng giá trị ( giá * số lượng)
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            {/* Tiêu đề phần giỏ hàng */}
            <h2>Your Cart</h2>

            {/* Hiển thi thông báo khi giỏ hàng trống */}
            {cartItems.leghth === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                // hiển thị bảng gảng hàng khi có sản phẩm trong giỏ
                <div>
                    <table className="cart-table">
                        {/* phần bảng với các cột */}
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        {/* Dữ liệu chi tiết từng sản phẩm trong giỏ hàng */}
                        <tbody>
                            {cartItems.map((item, index) => (
                                // mỗi sản phẩm trong giỏ sẽ tạo ra 1 dòng trong giỏ hàng
                                <tr key={index}>
                                    {/*  Cột chứa tên sản phẩm */}
                                    <td>{item.name}</td>

                                    {/* cột chứa giá sản phẩm, định dạng với 2 số sau dấu thập phân */}
                                    <td>${item.price.toFixed(2)}</td>

                                    {/* cột chứa số lượng sản phẩm */}
                                    <td>{item.quantity}</td>

                                    {/* cột chứa tổng giá trị của sản phẩm ( giá * số lượng ), định dạng với 2 số sau dấu thập phân */}
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Hiển thị tổng giá trị của giỏ hàng */}
                    <p className='cart-total'>Total: ${totalAmount.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;