var suggestion_input = document.getElementById('taskInput');
var suggestions = 4;

document.getElementById("error_button").style.display = "none";

function addElement (){
    
  var list = document.createElement("li");  
  var span = document.createElement("span");  
  var icon = document.createElement("i");
  var attr = document.createAttribute("onclick");
    
  attr.value = "removeTask(this)"; 
  span.setAttributeNode(attr);
  var attrID = document.createAttribute("id");
    
  attrID.value = "list"+suggestions; 
  list.setAttributeNode(attrID);
  var attrIcon = document.createAttribute("id");
    
  attrIcon.value = suggestions; 
  span.setAttributeNode(attrIcon);
  list.className = "list-group-item d-flex justify-content-between align-items-center";
  span.className = "close";
  icon.className = "fa fa-times";
  if(suggestion_input.value === "")
  {
       $( "#error_button" ).trigger( "click" );
  }
  else{
      list.innerHTML = suggestion_input.value;
      document.getElementById("taskList").appendChild(list); 
      list.appendChild(span); 
      span.appendChild(icon);
      suggestions++;
      suggestion_input.value="";
  }
}

function removeTask(e){
  //console.log(e.id);
    $("#list"+e.id).removeClass();
    $("#list"+e.id).addClass("d-none");
}