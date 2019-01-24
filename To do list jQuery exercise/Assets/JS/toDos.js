$("ul").on("click", "li", function(){
    $(this).toggleClass("checked");
});
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + toDoText +"</li>");
    }
}) 

$("#listIcon").click(function(){
    $("input[type='text']").fadeToggle();
});