// print  number  1 to 10 using for loop


for(let i=1; i<=10;i++){
    console.log(i);
    
}

// print number 10 to 1 using while loop

    // let i=10;
    // while(i>=1){
    //     console.log(i);
    //     i--;
        
    // }

    // print even number 1 to 20 using for loop


    for(let i=1; i<=20; i++){
        if(i%2===0){
            console.log(i);
            
        }
    }

    // print odd number 1 to 20 using while loop

    // let i=1;
    // while(i<=20){
    //    if( i%2 === 1){
    //        console.log(i);
           
    //    }
    // }


    //   print table of 5 like 5*1=5, 


    for(let i=1; i<=10; i++){
        console.log(` 5 * ${i} = ${5*i}`);  
    }


    //  find the sum of number 1 to 100 using for loop
      let sum=0;
    for(let i=1; i<=100; i++){
        sum+=i;
    }
    console.log(sum);
    

//  print all number 1 to 50 divisible by 3

     for(let i=1; i<=50; i++){
        if(i%3===0){
            console.log(i);
            
        }
     }


// ask the user for number print each number odd even like 1 is odd 2 is even 

    //    let val= prompt("enter any no ");
    //    for(let i=1;i<=val;i++){
    //        if(i%2===0){
    //         console.log(`${i} is even`);
            
    //        }
    //        else{
    //         console.log(`${i} is odd`);
            
    //        }
    //    }

       // print the number divisble by 5 and 3 1 to 50

        for(let i=1;i<=50; i++){
            if(i%3===0 && i%5===0){
                console.log(i);
                
            }
        }


        // print the reverse string

        // let str="hello";
        //   let reverse="";

        // for(let i=str.length-1; i>=0;i--){
        //     reverse+=str[i];
        // }
        // console.log(reverse);



        ///   print each charcter one by one 

          let string="Bihar";
          for(let i=0;i<string.length;i++){
           console.log(string[i]);
              
          }
        

          //     character count using loop 


          let strr="Biharr";
           let count=0;


          for(i=1; i<=strr.length;i++){
              count++;
          }
          console.log("total count",count);
          

// count vowel in this string

let str="Rohitsingh";
 let vowel=0;
for(let i=0; i<=str.length; i++){
     if("aeiou".includes(str[i])){
        vowel++;
     }
}
console.log(vowel);



// sum of even number 1 to 50;


     let add=0;
     for(let i=1; i<=50; i++){
       if(i%2===0){
        add+=i;
        console.log(i);
        
       }
       
     }
          console.log(add);



          // 🔹 2️ Sum of first N natural numbers (user input)

                //      let summ=0;
                //    let natural=prompt("enter the no");
                //    for(let i=1;i<=natural; i++){
                //        summ+=i;
                //    }
                //    console.log(summ);




                   // print the factorial 

                      let fact=1;
                   for(let i=1; i<=40; i++){
                        fact*=i;
                   }
                   console.log(fact);
                   
                   
      // print  1 to 15 number and count grater than 8 how many 
      
      let counts=0;
      for(let i=1; i<=15; i++){
             if(i>8){
                count++;
             }
      }
      console.log(count);


      // “Ask user for password and print access status.
// Hardcoded correct password. Compare with user input.”



    //   let user_pass=prompt("enter the your password");
    //   let hard_pass="123@456";
    //   if(user_pass===hard_pass){
    //     console.log("acces code");
    //   }
    //   else{
    //     console.log("code denied");
        
    //   }
      
//    allow only three attemp when user type right break 
    //       let pass=prompt("enter pass");
    //       let correct_pass="122345@";
    //    for(let i=1; i<=3; i++){
    //         if(pass===correct_pass){
    //             console.log("open account");  
    //             break;

    //         }
    //         else{
    //            pass=prompt("type sahi pass");
    //         }
    //         if(i===3){
    //             console.log("acount blocked");
                
    //         }
    //    }


    let correct_pass = "122345@";
let pass;

// for (let i = 1; i <= 3; i++) {
//   pass = prompt("Enter password:");

//   if (pass === correct_pass) {
//     console.log("Access granted");
//     break;
//   } else {
//     console.log("Wrong password");
//   }

//   // Agar ye last (3rd) attempt hai aur abhi tak sahi nahi mila
//   if (i === 3) {
//     console.log("Account blocked");
//     break;
//   }
// }

//   let pass1="123456@";
//     let userpass;
//   for(let i=1; i<=3;i++){
//       userpass=prompt("Enter User Password");
//       if(pass1===userpass){
//         console.log("Acount open 🎉"); 
//         break;
//       }else{
//         console.log("Wrong password");   
//       }

//       if(i===3){
//         console.log("Acount Blocked‼️");
//         break;
//       }


  // sum of all odd number using 1 to 50 
           let count_odd=0;
       for(let i=1; i<=50; i++){
           if(i%2===1){
            count_odd+=i;
           }
       }
       console.log(count_odd);
       



// print number divisible by 7 1 to 50



    for(let i=1; i<=50; i++){
        if(i%7===0){
            console.log(i);
            
        }
    }



// keping asking numberv untill user even no then 
    

    //   while(true){
    // let even= prompt("enter the no");
    //     if(even%2===0) break;

    //   }



// 6. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

//    let first= +prompt("Start no");
//    let end  = +prompt("End No");
    
//       for(let i=first; i<=end; i++){
//         console.log(i);
        
//       }


      //Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

let odd=0;
for(let i=1; i<=20; i++){
    if(i%2===1){
         odd++;
    }
    if(odd===3){
        break;
    }
}

// Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.


   let positive=0;

   for(let i=1; i<=5; i++){
     let num=prompt(` Enter No ${i}:`);
     if(num>0){
        positive++
     }
   }

    console.log(` the time of positive is ${positive}`);
    









// let positive = 0;

// for (let i = 1; i <= 5; i++) {
//   let num = +prompt(`Enter the no ${i}:`);
//   if (num > 0) {
//     positive++;
//   }
// }

// console.log("Total positive numbers:", positive);
     


          // note - yadi loop me string ke question me string ko last index tk chlna hai to wha string.lenghth use hoga aur last index se chlna hai to str.length-1 hoga
          // note while ke case me yadi condition pata nhi hai kb chlna hai kb rukna to while ke andr hm ek truthy value pass karte yani ture ka etc  eg.   let even;

    //   while(true){
    //    even= prompt("enter the no");
    //     if(even%2===0) break;

    //   }