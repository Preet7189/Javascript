"use strict";


var $ = function(id) { return document.getElementById(id); };

var toggle = function() {
    var h2 = this;                    
    var div = h2.nextElementSibling; 
  
    if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");	
    } else { 
        h2.setAttribute("class", "minus"); 
    }

  
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    } 

     
    var array= faqs.getElementsByTagName("h2");
    var active= faqs.getElementsByClassName("minus");
    for (var i = 0; i < array.length; i++)
        {
            h2 = array[i];
            div = array[i].nextElementSibling;
            if (h2 != this)
                {
                    h2.removeAttribute("class");
                    div.removeAttribute("class");
                   
                }
        }


};

window.onload = function() {
  
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    
    	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
   
    h2Elements[0].firstChild.focus();       
};







