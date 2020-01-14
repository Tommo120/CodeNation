const orderDrink = (drinkSize, drinkType) => {
    console.log(`You have ordered a ${drinkSize} ${drinkType} costing £%f.`, calculatePrice(drinkSize));
}

const calculatePrice = (drinkSize) => {
    switch(drinkSize.toLowerCase()){
        case 'tiny':
            return 0.50;
        case 'small':
            return 4.50;
        case 'medium':
            return 5.75;
        case 'large':
            return 7.00;
        case 'supersize':
            return 15.00;
        default:
            return null;
    }
}

orderDrink('Large', 'Mocha');
orderDrink('Tiny', 'Green Tea');
orderDrink('Supersize', 'Tap Water');
orderDrink('Medium', 'Pear Cider');