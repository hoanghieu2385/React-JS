import './App.css';
import { FaStar } from 'react-icons/fa';

const Product = ({ name, price, discount, image, rating, sale }) => {
    const stars = Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className="star" color={i < rating ? '#ffc107' : '#e4e5e9'} />
    ));

    return (
        <div>
            <h1>{stars}</h1>
        </div>
    )
}

export default function MyApp() {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} color={index < 3 ? 'Orange' : 'Gray'} />
    ));

    return (
        <div>
            <h1>Welcom to my app form Hieu</h1>
            {stars}
        </div>
    );
}
