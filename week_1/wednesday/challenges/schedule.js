let time = 18;
let placeOfWork = 'CodeNation';
let townOfHome = 'Manchester';

if(time <= 8)
    console.log('I\'m at home');
else if(time > 8 && time < 9)
    console.log('I\'m commuting to work');
else if(time > 9 && time < 17)
    console.log('I\'m at work');
else if(time > 17 && time < 23)
    console.log('I\'m at home');