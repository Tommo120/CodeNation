let dayOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let currentDay = "tuesday";

while(!currentDay != "saturday" && !currentDay != "sunday")
{
    currentDay = dayOfWeek[Math.floor(Math.random() * 7)];
    console.log(currentDay);
}