$(function () {
    $(".fa-bars").click(function () {
        $(".nav-links").css({
            "right": "0px",
        });
    });
    $(".fa-close").click(function () {
        $(".nav-links").css({
            "right": "-200px",
        });
    }); 
    $(".onlyCol").mouseenter(function () {
        $(".cover").slideDown(500);
    });
    $(".onlyCol").mouseleave(function () {
        $(".cover").slideUp(500);
    });
});
window.onload = function () {
    var name = document.getElementById("Name");
    var cmnt = document.getElementById("Comnt");
    var form = document.getElementById("forma");
    form.onsubmit = function () {
        var i1 = document.getElementById("inp1");
        var i2 = document.getElementById("inp2");
        var i3 = document.getElementById("inp3");
        var name = document.getElementById("Name");
        var cmnt = document.getElementById("Comnt");
        if (i1.value != "" && i2.value != "" && i3.value != "") {
            $('#cont').text("");
            name.innerText = i1.value;
            cmnt.innerText = i3.value;
            return true;
        }
        $('#cont').text("Please All Fields Should Be Filled And Email Should Not Be Duplicate");
        return false;
    }
};