import React from 'react';
import PlanCard from './PlanCard';

const PricingPage = () => {
    const plans = [
        {
            planName: "Basic",
            description: "Individual",
            price: 8,
            features: [
                { text: "Feature 1", disabled: false},
                { text: "Feature 2", disabled: false},
                { text: "Feature 3", disabled: false},
            ],
        },
        {
            planName: "Standard",
            description: "Small Business",
            price: 20,
            features: [
                { text: "Feature A", disabled: false},
                { text: "Feature B", disabled: true},
                { text: "Feature C", disabled: true},
            ],
        },
        {
            planName: "Premium",
            description: "Large Comanies",
            price: 40,
            features: [
                { text: "Feature X", disabled: false},
                { text: "Feature Y", disabled: true},
                { text: "Feature Z", disabled: false},
            ],
        },
    ];

    return (
        <div className="container-fluid" style={{ background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)'}}>
            <div className="container p-5">
                <div className="row">
                    {plans.map((plan, index) => (
                        <div key={index} className="col-lg-4 col-md-12 mb-4">
                            <PlanCard {...plan} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;