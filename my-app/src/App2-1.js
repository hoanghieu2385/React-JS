import logo from './logo.svg';
import './App.css';

const Text = ({ style = {} }) => (
    <p style={{ ...style, fontFamyly: "Inter" }}>Hello World!</p>
);
const StyledText = withStyles(Text); //new Component

function withStyles(Component) {
    return (props) => {
        const styles = {
            color: "red",
            fontSize: "2em",
        ...props.style,};
        return <Component {...props} style={styles} />
    }
}

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
            Text Component <Text />
            StyledText Component <StyledText />
        </div>
    );
}