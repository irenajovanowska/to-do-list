// check off done todos
$("#list").on("click", ".list-item", function () {
    $(this).toggleClass("done");
});

// delete todos
$("#list").on("click", ".delete", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});

// add todos
$(".new").on("keypress", function (event) {
    if (event.which === 13) {
        // take the input text
        // make a new li element
        // clear the input
        var todoText = $(this).val();
        $(this).val("");
        var string = "<li class=\"list-item\"><span class=\"delete\"><i class=\"fas fa-times delete-todo\"></i></span>" + todoText + "</li>";
        $("ul").append(string);
    }
});

$(".new").hide();

// show input field
$(".add-input").on("click", function () {
    $(".new").fadeToggle();
})
