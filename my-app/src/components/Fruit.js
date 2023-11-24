const products = [
    { title: 'Cabbage', isFruit: true, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 }
]

export default function ShoppingList() {
    const listItems = products.map(products => 
        <li 
            key={products.id}
            style={{
                color: products.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {products.title}
        </li>
        );

        return(
            <ul>{listItems}</ul>
        )
}