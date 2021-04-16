/* Author: 

*/

$(document).ready(function() {
    var counter1 = $(".counter1");
    var counter2 = $(".counter2");
    var counter3 = $(".counter3");
    var max1 = 2523,max2=63075,max3=12218;
    var max =[2523,63075,12218];


    var counter =[counter1,counter2,counter3];
    for(var i=0;i<max.length;i++)
    {
        start_counter(counter[i],max[i]);
    }

    function start_counter(counter,max) {
        var current = parseInt(counter.html());
        counter.text(current+10);
        if (current< max-10) {
            setTimeout(start_counter,10);
          current++; 
        }
    }      
    

});





















