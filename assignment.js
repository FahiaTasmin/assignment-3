/* 1.kilometerToMeter */
function kilometerToMeter(kiloMeter) {
    if (kiloMeter < 0) {     //for negtive value
        console.log("Distance cannot be negative!")
    }
    else {
        var meter = kiloMeter * 1000; // 1 Kilometer = 1000 meter
        return meter;
    }

}

var result = kilometerToMeter(20);
console.log(result);

/* 2.budgetCaculator */
function budgetCaculator(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {  //for negative value
        console.log("Amount of things cannot be negative!");
    }
    else {
        var watch = a * 50;     //watch price = 50$, a = quantitiy
        var phone = b * 100;    //phone price = 100$, b = quantity
        var laptop = c * 500;   //laptop price = 500$,c = quantity
        var total = watch + phone + laptop; //sum of total cost 
    }

    return total;
}

var result = budgetCaculator(1, 5, 2);
console.log(result);

/* 3.hotelCost */
function hotelCost(n) {
    var totalCost;
    var firstPart = 100 * 10;   //for the first 10 days rent is 100$
    var secondPart = 80 * 10;   //for the second 10 days rent is 80$ 
    if (n < 0) {    //for the negative value
        console.log("Days cannot be negative!")
    }
    else {
        if (n <= 10) {
            totalCost = 100 * n;    //between first 1o days.
        }
        else if (n <= 20) {
            totalCost = 80 * (n - 10) + firstPart;  //between second 10 days.
        }
        else {
            totalCost = 50 * (n - 20) + secondPart + firstPart;  //above 20 days or more.
        }
    }

    return totalCost;
}

var result = hotelCost(25);
console.log(result);

/* 4.megaFriend */
function megaFriend(arr) {
    var logestLength = 0;   //initial value of array lenght.
    var longestWord;
  
    for (var i = 0; i < arr.length; i++) {   //for loop for looping the all element of the array
  
      if (arr[i].length <= 0) {     //for empty element messege
        console.log("Plz! Fill the empty empty elemnt in the array.");
      }
      else {
        if (arr[i].length > logestLength) {     //compareing array length.
          var logestLength = arr[i].length;   //putting the array lenght in logestLenght.
          longestWord = arr[i];         //putting the string of i index in the longestWord.
        }
      }
    }
    return longestWord;
  }
  
  var names = ["Rahim", "Karim", "Minhaj", "Saima", "Mehedi", "Tahmidur", "Arham", "Sinthia", "Tasmin", ""];
  var result = megaFriend(names);
  
  console.log(result);
