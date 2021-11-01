$("#wPrice").bind('keyup', function () {
    minimumSellPrice();
});

$("#bFee").bind('keyup', function () {
    minimumSellPrice();
});

function minimumSellPrice () {
    var wPrice = $("#wPrice").val();
    var bFee = $("#bFee").val();
    if (wPrice == '') {
        swal("Warning", "Please enter the buying price", "warning");
    } else {
        var minSellPrice = (wPrice * bFee) + wPrice;
        minSellPrice = parseFloat(minSellPrice).toFixed(2);
        $("#minSellPrice").val(minSellPrice);
        if (minSellPrice < wPrice) {
            $("#minSellPrice").css({ "color": "red", "background-color": "black" });
        } else {
            $("#minSellPrice").css({ "color": "green", "background-color": "white" });
        }
    }
}