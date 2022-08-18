
$(document).ready( function() 
{
   var banner_array=['images/slider1.jpg','images/slider2.jpg','images/slider3.jpg','images/slider4.jpg']
    
    var image = document.getElementById('image');
    
    var pre = document.getElementById('banner_back');
    var next = document.getElementById('banner_next');
    
    pre.onclick = function(){changeBanner("pre");}
    next.onclick = function() {changeBanner("next");}
    
    var i=0;
    
    function changeBanner(e)
    {
      if(e==='pre')
      {    
        if(i==0)
        {
          i=banner_array.length-1;
        }
        else
        {
          i--;
        }
      }
      else
      {
        if(i==banner_array.length-1)
        {
          i=0;
        }
        else
        {
          i++;
        }
      }
       image.src = banner_array[i];
    
    }
});       