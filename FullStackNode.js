// const dateFns=require("date-fns")
// console.log(dateFns)

// let's run index.js using node..and now u will see that there are alot of methods inside this date fns package.. this itself is an object.. these curly brackets tell u that date-fns is an object... and all these methods have been exported from that particular module inside this object... so the logic itself remains the same.. nwo u r using a module that's created by someone else and lives inside the node underscore modules directory , and u r imporitng it using the commonjs syntax... these methods are ready for you to use and u would have t orefer to the datefns documentaion in order to see which mthod does what, and which mehod do u want to use..

//1..and instead of importing all the method because i do not need them, i'm just going ahead and use object destructuring...and i'm going to import some of the methods that i'm going to demonstrate over here... so i'll import format i'll import add days as well as sub days.., so i'll import these three methods because i'm going to use them to demonstrate how u can use any package inside ur application...


const {format, subDays, addDays}= require("date-fns");

// 2.. let's create new date , assume now as a variable and this is going to be equal to the new date, so i'm going to generate the date that is right now using the format method imported from date-fns.. we can format this date... so let's do a console.log and within this lets format the date, so let's say today is then i'm going to use the format method, so the format method takes the date that u want to format which is now that's the first argument, and then as a second argument it takes the format into which u want to format this date... i want this date to be formatted into this particular format which is yy-mm-dd and now how do i know that format method works like this, well it's from the documentation... u again have to refer to the documentation..
const now =new Date();
console.log("Today is :", format(now, "yyyy-MM-dd"));

// 3.. so using adddays method we can calculate the next week, so i'm going to create a new constant let's call it next week.. and let's add seven days to today , so i'll use the addDays adn this method again takes two arguemnts the current date adn how many days do u want to add to this.. so i want to add the seven days to this, and i can go ahead adn print the next week as well... so this time we want to format the next week variable like so .. adn let's change this to next week... so next week just the way u can use addDays method to add some days , to add some days u can also use some days method to subtract some days...
const nextweek=addDays(now, 7);
console.log("next week:", format(nextweek,"yyyy-MM-dd"));

const previousweek=subDays(now, 7);
console.log("previous week", format(previousweek, "yyy-MMM-dd"));

// this is hwo u create the package , this is how you install the package...



