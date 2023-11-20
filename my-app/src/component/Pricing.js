// import React from 'react';
const Pricing = () => {
    return (
        <div className="container">
            <h1>Pricing</h1>
            <p>Demo hahahahahahahaha</p>
            <p>Demo hahahahahahahaha</p>
            <p>Demo hahahahahahahaha</p>
            <div className="row">
                <div className="col-md-3">
                    <h5>Free</h5>
                    <div className="free">
                        <h3>
                            $0<i>/month</i>
                        </h3>
                        <p>15gb data tốc độ cao</p>
                        <p>200 sms/month</p>
                        <p>5gb hostpost</p>
                        <p> Hỗ trợ theo giờ hành chính</p>
                    </div>
                    <button>Buy Now</button>
                </div>

                <div className="col-md-3">
                    <h5>Vip</h5>
                    <div className="Vip">
                        <h3>
                            $20<i>/month</i>
                        </h3>
                        <p>50gb data tốc độ cao</p>
                        <p>500 sms/month</p>
                        <p>5gb hostpost</p>
                        <p>Hỗ trợ 20/24h</p>
                    </div>
                    <button>Buy </button>

                </div>

                <div className="col-md-3">
                    <h5>Lifetime</h5>
                    <div className="free">
                        <h3>
                            $40<i>/month</i>
                        </h3>
                        <p>99gb data tốc độ cao</p>
                        <p>9999 sms/month</p>
                        <p>99gb hostpost</p>
                        <p> Giờ nào cũng nghe</p>
                    </div>
                    <button>Buy </button>

                </div>
            </div>
        </div>
    );
};

export default Pricing;
