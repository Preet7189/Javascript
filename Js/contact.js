$(document).ready( function() 
{

    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    
    var phone_Pattern = /^(\d{3})-+(\d{3})-+(\d{4})$/; 
        
    document.getElementById("error_button").style.display = "none";
    
    $("#submit_form").click(function(event)
    {
        var name = $("#name").val().trim();
        var email_address = $("#email_address").val().trim();
        var mobile = $("#mobile").val().trim();
        var Comment = $("#Comment").val().trim();
        var select_date = $("#select_date").val().trim();
        
        var correct = true;
        
        $(".error_statement").remove();
        
       
         if(name=="")
            {
                 $('#name').after('<span class="error_statement text-danger">Enter your name </span>');
                
                 correct = false;
            }
        
         if(Comment=="" || isNaN(Comment))
            {
                
                 $('#Comment').after('<span class="error_statement text-danger">Enter Comments...!</span>');
                
                correct = false;
            }
        
            if(email_address=="" || !emailPattern.test(email_address))
            {
                
                $('#email_address').after('<span class="error_statement text-danger">Enter email-id in proper format</span>');
                
                correct = false;
            }
        
            if(mobile=="" || !phone_Pattern.test(mobile))
            {
                
                 $('#mobile').after('<span class="error_statement text-danger">Enter valid Phone Comment</span>');
                
                correct = false;
            }
        
            if(select_date=="")
            {
                 $('#select_date').after('<span class="error_statement text-danger">Enter date in valid format.</span>');
                
                 correct = false;
            }
        
           if(correct == true)
           {
             $( "#error_button" ).trigger( "click" );
            }
			   
    });
});
    