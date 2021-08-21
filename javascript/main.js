//1

// var userString = prompt("enter string")

// function getString(string){
//     if(string.length > 5){
//     return alert("long");
//     }
//     return alert("short");

    
    
// }
// getString(userString);

//2

// var userString = prompt("enter your string");
// function getString(str){
//     if(str.indexOf('a') > -1){
//       console.log(str.indexOf('a'));
//       return;
      
//     }
//      console.log("not found");
//      return;     
//   }

// getString(userString);

//3

// var userString = prompt("enter your string");
// function getString(str){
//   if(str.indexOf('r') > -1){
//     return true;
//   }
//   return false;
// }
// console.log(getString(userString));


//4

// var userString = prompt("enter your string");
// var charecter = prompt("enter your charecter");
// function getStringAndChar(str,char){
//   if(str.indexOf(char) > -1){
//     return true;
//   }
//   return false;
// }

// console.log(getStringAndChar(userString,charecter));

//5

// var userString = prompt("enter your string");
// var charecter = prompt("enter your charecter");
// function getStringAndChar(str,char){
//   if(str.indexOf(char) > -1){
//     return str.lastIndexOf(char);
//   }
//   return "not found id " + str;
// }

// console.log(getStringAndChar(userString,charecter));



//6

// var string = prompt("enter word");
// function returnThreeChars(str){
//   return str.substr([0],[3]);
// }
// console.log(returnThreeChars(string));

//7

//8

// var string = prompt("enter word");
// function returnChars(str){
//   return str.substring([3]);
// }
// console.log(returnChars(string));

//9

// var string = prompt("enter string");
// var userIndex = prompt("enter index");
// function getStringAndIndex(str,index){
//     if(index.length > str.length){
//         return index + " too big";
//     }
//     return str.substr(index);
   
// }
// console.log(getStringAndIndex(string,userIndex));


//10

// var string = prompt("enter string");
// var index = prompt("enter index");
// function getStringAndIndex(str,index){
//     if(index.length > str.length){
//         return index.length + " too big";
//     }
//     else{
//         return str.substr(index,[3]);
//     }
// }
// console.log(getStringAndIndex(string,index));


//11

// var string = prompt("enter word");
// var num1 = Number(prompt("enter first number"));
// var num2 = Number(prompt("enter last number"));
// function returnStringAndTwoNums(str,one,two){
//     if(num1 > str.length){
//          alert("not good");
//     }
//     else if(num2 > str.length){
//          alert("not good"); 
//     }
//     return str.substring([one],[two]);
   
// }
// console.log(returnStringAndTwoNums(string,num1,num2));

//12

var string = prompt("enter string");
function getString(str){
    return str.substring([0],[3]);
}
console.log(getString(string));

//13

// var string = prompt("enter string");
// function getString(str){
//     return str.substring([2],[7]);
// }
// console.log(getString(string));
//14

// var string = prompt("enter string");
// function getString(str){
//     return str.substring([3]);
// }
// console.log(getString(string));

//15

// var fullName = prompt("enter your full name");
// function getFullName(name1){
//      console.log(name1.length);
//      if(name1.indexOf(" ") > -1){
//          console.log("we got space");
//      }
//      console.log(name1.substring(name1[0],name1.indexOf(" ")));
//      console.log(name1.substring(name1.indexOf(" ") +1));

// }
// getFullName(fullName);

//16

// var string1 = prompt("enter your first string");
// var string2 = prompt("enter your second string");
// function getTwoStrings(str1,str2){
//     if(str1.length == str2.length){
//         return "even length " + str1.toLowerCase() + " " + str1;
//     }
//     if(str2.length != str1.length){
//         return "NOT even length " + str2.toLowerCase() + " " + str2;
//     }
// } 
// console.log(getTwoStrings(string1,string2));  

//17

// var string1 = prompt("enter your first string");
// var string2 = prompt("enter your second string");
// function getTwoStrings(str1,str2){
//     if(str1.length == str2.length){
//         return "even length " + str1.toUpperCase() + " " + str1;
//     }
//     if(str2.length != str1.length){
//         return "NOT even length " + str2.toUpperCase() + " " + str2;
//     }
// } 
// console.log(getTwoStrings(string1,string2));  





