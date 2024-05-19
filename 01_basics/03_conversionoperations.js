let score = "33abc"
 console.log(typeof score);
 console.log(typeof (score));

 //agar koi operation hai jo sirf number ke sath karna hai oth we can do this
 let valueInNumber = Number(score)
 console.log(valueInNumber);
 console.log(typeof valueInNumber);
 //NaN is not a number

 let truu = 1
 let truuboolorna = Boolean(truu)
 console.log(truuboolorna);

 //1 true
 // 0 flse
  // " " false
  // "anvesh" true
  // similarly we can do for strings as well 

  //**********************OPERATIONS */
  // basic math operations +,-,/,%,*
  let str1 = "anv"
  let str2 = " " + "huh"
  let str3 = str1 + str2
  console.log(str3)
  console.log("1"+2)//all will be converted to string
  console.log(1+2+"3")//here the first 2 will be added first then then they will be added to a string
  //never use this type of complicated code instead use brackets and stuff
  console.log(+true);
  console.log(+"");//aise tricky conversions maat kiya karo