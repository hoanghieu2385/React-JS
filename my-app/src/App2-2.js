import logo from './logo.svg';
import './App.css';

function Welcome({myName}) {
    return(
        <section>
            <h1>Hello, <span>{myName}</span></h1>
        </section>
    )
}

export default function MyApp() {
    return (
        <div className='App'>
        <Welcome myName="Hieu" />
        </div>
    );
}