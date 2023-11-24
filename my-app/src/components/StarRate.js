import { FaStar } from 'react-icons/fa';

const StarVip = ({ name, price, discount, image, rating, sale }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} className="star" color={index < rating ? '#ffc107' : '#e4e5e9'} />
    ));

    return (
        <div>
            <h1>{stars}</h1>
        </div>
    )
}

export default StarVip

// Ham export ben duoi de nhet truc tiep vao App.js ⏬⏬

// export default function MyApp() {
//     const stars = Array.from({ length: 5 }, (_, index) => (
//         <FaStar key={index} color={index < 3 ? 'Orange' : 'Gray'} />
//     ));

//     return (
//         <div>
//             <h1>Welcome to my app form Hieu</h1>
//             {stars}
//         </div>
//     );
// }
