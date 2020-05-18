//Toogle button for Shop page //

$('#open-close-toggle').on("click", function(){
    var $arrows = $(this).find("img");
    $('#toggle-section').slideToggle(function(){
        $arrows.toggle();
    });
});
