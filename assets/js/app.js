$(".my-img").on("click", function (e) {
    e.preventDefault();
    var domainUrl = window.location.hostname;
    var imgUrl = domainUrl + "/" + $(this).attr("src");
    alert(imgUrl);
});

$("#submit-form").on("submit", function(e){
    e.preventDefault();
    var name = $("#name").val().trim();
    $("#username").text(name);
});