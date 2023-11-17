function Welcome({ name }) {
    return(
        <section>
            <h1>Hello, <span>{name}</span>🎉🎉</h1>
        </section>
    )
}

function withStyles(Component) {
    return (props) => {
        const styles = {
            color: "red",
            fontSize: "2em",
            ...props.style,
        };
        return <Component {...props} style={styles} />;
    };
}

const Text = ({ style = {} }) => (
    <p style={{ ...style, fontFamily: "Inter" }}>Hello World!</p>
);
const StyledText = withStyles(Text);

export default function App() {
    return (
        <div className="App">
            <Welcome name ="Hieu"/>
            <Text />
            <StyledText />
        </div>
    )
}