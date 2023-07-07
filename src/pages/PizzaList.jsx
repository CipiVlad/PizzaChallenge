function PizzaList({ pizzaOffers, friends }) {
    return (
        <div>
            <p>Friends: {friends[0].name}, {friends[1].name}</p>
            <p>Pizza: {pizzaOffers[0].name}, {pizzaOffers[1].name}</p>
        </div>
    )
}

export default PizzaList;
