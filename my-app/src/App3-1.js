function User ({ name, pic }) {
    return (
        <section>
        <img className="user-profile-pic" src={pic} alt={name}/>
        <h2 className="user-name">
            Hello, <span className="user-first-name">{name}</span>😘😊   
        </h2>
        </section>
    );
}

export default function App() {
    const users = [
        {
            name: 'John',
            pic: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f3/f3344566b1e9a21bee1bae9e17f6c076473a9258_full.jpg',
        },
        {
            name: 'Jane',
            pic: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/01/012b475316e654b526288af92b0d4d10db31f692_full.jpg',
        },
        {
            name: 'Jack',
            pic: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/01/012ef7ac3b80599e8f441282f2c76e35b9a9e431_full.jpg',
        },
        {
            name: 'Jill',
            pic: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/01/01608e06acda96fcd31be269f95624225b11082e_full.jpg',
        },
    ];
    return (
        <div className="App">
        {users.map((usr) => (
            <User name={usr.name} pic={usr.pic} />
        ))}
        </div>
        );
}