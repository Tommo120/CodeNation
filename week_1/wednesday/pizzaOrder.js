let orderCount = 0;
const takeOrder = (topping, sauce) => {
    orderCount++;
    console.log(`Order No. ${orderCount}: Pizza with ${topping} and a ${sauce} base`);
}

takeOrder("Tuna", "Tomato");
takeOrder("Sausage", "Barbeque");
takeOrder("Pepperoni", "Tomato");
takeOrder("Marshmallows", "Chocolate");
takeOrder("Ham", "Garlic");
