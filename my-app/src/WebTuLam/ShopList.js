import React from 'react';
import DisplayShop from '../WebTuLam/Shop';
import sanpham from '../data/dataShop';

const ShopList = () => {
    return (
        <div className="pricing-page">
            <h2>Cửa hàng "Nhóm 2"</h2>
            {/* <div className="top">
                <div className="top-left">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#">Về chúng tôi</a>
                        </li>
                        <li>
                            <a href="#">Sản phẩm</a>
                        </li>
                        <li>
                            <a href="#">Điều khoản</a>
                        </li>
                        <li>
                            <a href="#">Liên hệ</a>
                        </li>
                    </ul>
                    <a href="#"></a>
                </div>

                <div className="top-right">
                    <ul>
                        <li>
                            <a href="#">Ngôn ngữ</a>
                        </li>
                        <li>
                            <a href="#">Đăng ký</a>
                        </li>
                        <li>
                            <a href="#">Đăng nhập</a>
                        </li>
                    </ul>
                </div>
            </div> */}

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Trang chủ
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Giới thiệu
                                </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sản phẩm
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Thời trang Nam
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Thời trang Nữ
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Về chúng tôi
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="product-list">
                {sanpham.map((product, index) => (
                    <DisplayShop key={index} {...product} />
                ))}
            </div>

            <footer>
                <p>
                    &copy; 2023. Bản quyền thuộc về <a href="#">Nhóm 2</a>
                </p>
            </footer>
        </div>
    );
};

export default ShopList;
