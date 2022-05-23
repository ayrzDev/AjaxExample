$(function() {
    $(".gonder").click(function() {
        var name = $("input[name=name]").val();
        var pass = $("input[name=password]").val();
        var email = $("input[name=email]").val();

        $.ajax({
            url: "process.php",
            type: "POST",
            data: {
                "name": name,
                "email": email,
                "pass": pass
            },
            success: function(sonuc) {
                $(".process").html(sonuc);
            }
        })
    });
});