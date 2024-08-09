const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];



const {[0]:fruit1 ,[3]:fruit2} = fruits;
console.log(fruit1, fruit2)
// here what will happen is [] the square brackets will tell the index of the fruits and when we include
// like [0]:fruits2 the fruit 2 will take the  0th position in the index
// it means according to fruit 2 it is apple bit the print banana because we have used the index 0. in that position there is banana.