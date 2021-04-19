/* Author: 

*/

$(document).ready(function() {
    var counter1 = $(".counter1");
    var counter2 = $(".counter2");
    var counter3 = $(".counter3");
    var max1 = 2523,max2=63075,max3=12218;
   
    function start_counter1() {
         var current1 = parseInt(counter1.html());
         if (current1< max1) {
            counter1.text(current1+1);
            setInterval(start_counter1,10);
          current1++; 
        }
    }  

    function start_counter2() {
       var current2 = parseInt(counter2.html());
       if (current2< max2) {
          counter2.text(current2+1);
          setInterval(start_counter2,1);
        current2++; 
       }
    }  

    function start_counter3() {
        var current3 = parseInt(counter3.html());
        if (current3< max3) {
        counter3.text(current3+1);
        setInterval(start_counter3,5);
        current3++; 
    }
    }  



  start_counter1();    
  start_counter2();    
  start_counter3();    

});





















