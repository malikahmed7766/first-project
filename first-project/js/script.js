$(document).ready(function () {

    $("#open-sidebar").click(() => {
        $(".sidebar").addClass("active");
    });

    $("#close-sidebar").click(() => {
        $(".sidebar").removeClass("active");
    });

});