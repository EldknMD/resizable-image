$(document).ready(function() {
    $(document).on("click", ".select", function(){
        var id = $(this).attr("id");
        console.log("./img/" + id + ".jpg");
        $(".selectImg").attr("src", "./img/" + id + ".jpg");
    });
    
    var isResizing = false;
    $(".sm").mousedown(function(event) {
     isResizing = true;
    });

    $(document).mousemove(function(event) {
         if(!isResizing){
             return;
         }
       
      var x = event.clientX;
      var width = x - 400;
      $(".bigcont").width(width);
      $(".bigcont").height(width); 
    }).on('mouseup', function(e){
        isResizing = false;
      })  
  });


 
         











     



