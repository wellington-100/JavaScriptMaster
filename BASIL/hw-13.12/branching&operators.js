food_1_N  = "Pizza"
food_1_P = 75.00
food_1_availQ = 1
food_2_N  = "Salad"
food_2_P = 25.00
food_2_availQ = 2
food_3_N  = "Beer"
food_3_P = 30.00
food_3_availQ = 3
food_4_N  = "Ice Cream"
food_4_P = 40.00
food_4_availQ = 4

alert(
    "########   FOOD  ########" + 
    "\n" + food_1_N + " " + food_1_P.toFixed(2) +
    "\n" + food_2_N + " " + food_2_P.toFixed(2) +
    "\n" + food_3_N + " " + food_3_P.toFixed(2) +
    "\n" + food_4_N + " " + food_4_P.toFixed(2) +
    "\n########   FOOD  ########"
)

let food_1_Q = parseInt(prompt(`How many "${food_1_N}" do you want?`));
if (food_1_Q > food_1_availQ) {
    alert("Sorry, we can offer only " + food_1_availQ + " " + food_1_N);
    food_1_Q = parseInt(prompt(`So, how many "${food_1_N}" do you want?`));} 


let food_2_Q = parseInt(prompt("How many " + food_2_N + " do you want?"));
if (food_2_Q > food_2_availQ) {
    alert("Sorry, we can offer only " + food_2_availQ + " " + food_2_N);
    food_2_Q = parseInt(prompt("So, how many " + food_2_N + " do you want?"));} 

let food_3_Q = parseInt(prompt("How many " + food_3_N + " do you want?"));
if (food_3_Q > food_3_availQ) {
    alert("Sorry, we can offer only " + food_3_availQ + " " + food_3_N);
    food_3_Q = parseInt(prompt("So, how many " + food_3_N + " do you want?"));} 

let food_4_Q = parseInt(prompt("How many " + food_4_N + " do you want?"));
if (food_4_Q > food_4_availQ) {
    alert("Sorry, we can offer only " + food_4_availQ + " " + food_4_N);
    food_4_Q = parseInt(prompt("So, how many " + food_4_N + " do you want?"));} 

cost_1 = food_1_P * food_1_Q
cost_2 = food_2_P * food_2_Q
cost_3 = food_3_P * food_3_Q
cost_4 = food_4_P * food_4_Q

total = cost_1 + cost_2 + cost_3 + cost_4
let free_delivery = total > 200 ? true : false;

alert(
    "######### BILL ##########" +
    "\n1. " + food_1_N + " x " + food_1_Q + " = " +  cost_1.toFixed(2) +
    "\n2. " + food_2_N + " x " + food_2_Q + " = " +  cost_2.toFixed(2) +
    "\n3. " + food_3_N + " x " + food_3_Q + " = " +  cost_3.toFixed(2) +
    "\n4. " + food_4_N + " x " + food_4_Q + " = " +  cost_4.toFixed(2) +
    "\n-----------------------------------------" +
    "\ntotal: " + total.toFixed(2) + 
    "\nfree delivery: " +  free_delivery +
    "\n######### BILL ##########"
)
//#####