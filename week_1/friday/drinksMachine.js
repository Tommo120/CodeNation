function drink(type, cost, stock) {
    this.type = type;
    this.cost = cost;
    this.stock = stock;
}
let drinksMenu = [
    new drink('Coffee', 3.75, 5),
    new drink('Tea', 3.00, 7),
    new drink('Hot Chocolate', 2.50, 10),
    new drink('Vimto', 2.00, 0)
]

const checkDrinksMenu = () => {
    drinksMenu.forEach(function(drink){
        console.log(`${drink.type}\t\t£${drink.cost}`);
    })
}

checkDrinksMenu();