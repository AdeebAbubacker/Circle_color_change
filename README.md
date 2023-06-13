# About
Change the colour of circle , when we click button and increment the counter inside the circle.

#Description
In this project we change colour of circle when we click on "Change Color" button.The colour is generated randomly.
Also increase the counter value on onClick.

#Algorithm
||1. First we declare a variable which containes hexadecimal charector string from (0 - 9) and (a - f)  ||,   
2. As we know hexadecimal is combination of 6 character from these.  ||,   
3. So we generate random 6 digits using a for loop and random method.  ||,             
4. so after every for loop, we append the value to the right of "#".  ||,              
5. After 6 iterations the for loop will be exited and a random colour is generated.  ||,            

#Hooks Used
useState 

#Functions
increment() - To increase the counter value,   
changeColor() - To change colour of circle,  
getRandomColor() - To change colour of circle, 
FormatMe() - To make numbers less than 10 to two digit by appending 0 in its left
