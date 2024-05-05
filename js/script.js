// side navbar visibility
// navbar hover effect
$(".navbar").hover(
    function () {
        $(this).css("width", "150px");
        $(".logo").css("width", "150px");
        $(".text").css("visibility", "visible");
        $("section").css("width", "90%");
        $("section").css("marginLeft", "80px");
    },
    function () {
        $(this).css("width", "58px");
        $(".logo").css("width", "50px");
        $(".text").css("visibility", "hidden");
        $("section").css("width", "95%");
        $("section").css("marginLeft", "0px");
    }
);

// project hover and close button
$("#one").click(() => {
    $("#myNav1").css("height", "90%");
});
$("#two").click(() => {
    $("#myNav2").css("height", "90%");
});
$("#three").click(() => {
    $("#myNav3").css("height", "90%");
});
$(".closebtn").hover(() => {
    $("#myNav1, #myNav2, #myNav3, #myNav4, #myNav5, #myNav6, #myNav7, #myNav8").css("height", "0%");
});

// about me
$("#aboutMe").click(() => {
    $("#myNav4").css("height", "80%");
});

// certificates
$("#ICT").click(() => {
    $("#myNav5").css("height", "80%");
});
$("#sly").click(() => {
    $("#myNav6").css("height", "80%");
});
$("#intern").click(() => {
    $("#myNav7").css("height", "80%");
});
$("#axis").click(() => {
    $("#myNav8").css("height", "80%");
});

// night mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("darkMode");
}