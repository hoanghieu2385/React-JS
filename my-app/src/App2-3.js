import logo from './logo.svg';
import './App.css';

function Welcome({myName}) {
    return(
        <section>
            <h1>Hello World 😘😘</h1>
        </section>
    );
}

export default function MyApp() {
    return (
        <div className='App'>
            <Welcome />
            <Welcome />
            <Welcome />
        </div>
    );
}