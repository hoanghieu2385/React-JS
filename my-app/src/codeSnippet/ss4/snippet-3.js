function ClickMe() {
    const onUserClick = () => console.log("Clicked");
    return <button onClick={onUserClick}>Click Me</button>;
}