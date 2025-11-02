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

       let val= prompt("enter any no ");
       for(let i=1;i<=val;i++){
           if(i%2===0){
            console.log(`${i} is even`);
            
           }
           else{
            console.log(`${i} is odd`);
            
           }
       }

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

                     let summ=0;
                   let natural=prompt("enter the no");
                   for(let i=1;i<=natural; i++){
                       summ+=i;
                   }
                   console.log(summ);




                   // print the factorial 

                      let fact=1;
                   for(let i=1; i<=40; i++){
                        fact*=i;
                   }
                   console.log(fact);
                   
                   
          


          // note - yadi loop me string ke question me string ko last index tk chlna hai to wha string.lenghth use hoga aur last index se chlna hai to str.length-1 hoga