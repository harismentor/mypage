$(document).ready(function(){
    $("#signup-form").validate({
        fname:{
            rules:{
                required:true,
                minlength:4
            }
           
        },
        sname:{
            rules:{
                required:true,
                minlength:4
            }

        }
    })

})

