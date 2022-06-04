let n = parseInt(prompt("enter the number"));

 if(n > 0) 
 {
   for(i = 3;i <= n ;i++)
   {
      if(i % 3 ==0 || i % 5 == 0)
      {
         console.log(i);
      }
   }
}