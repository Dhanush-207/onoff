var bulb = 0;
 function findbulb()
  { if(bulb==0) 
    { document.getElementById("image").src="auto off.jpg";
     bulb=1; 
    }
     else{
          document.getElementById("image").src="auto light on.jpg";
           bulb=0; 
        } 
    }