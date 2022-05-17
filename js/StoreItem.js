window.onload = function() {
    try {
        var url_string = $(location).attr("href");
        var url = new URL(url_string);
        var name = url.searchParams.get("name");
        $.getJSON(`https://demonlord6661.github.io/Eclipse-Manga-Prime/JSON/ShopItems/${name}.json`, function(item) {
            //Variables
            var name = item.Name;
            var rating = item.Rating;
            var related = item.RelatingMigug;
            var price = item.Price;
            var stock = item.Stock;
            var colors = item.Colors;

            //Variable Usage
            if (related != "") {
                $("#item_related").text(`Related Migug: ${related}`);
            } else {
                $("#item_related").text(``);
            }

            $("#item_name").text(`${name}`);
            for (var i = 0; i < rating; i++) {
                document.getElementById('item_rating').innerHTML += `&nbsp;<div class="bi-star-fill"></div>&nbsp;`;
            }
            if (colors != "") {
                for (var j = 0; j < colors.length; j++) {
                    document.getElementById("item_color_drop_down").innerHTML += `<li><a class="dropdown-item" href="#">${colors[j]}</a></li>`
                }
            } else {
                document.getElementById("item_colors").innerHTML = "";
            }
            $("#item_price").text(price);
            $("#item_stock").text(`Stock: ${stock}`)
        })
    } catch (err) {
        console.log("Issues with parsing URL Parameter's - " + err);
    }
}