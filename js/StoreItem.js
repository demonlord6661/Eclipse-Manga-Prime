window.onload = function() {
    try {
        var url_string = $(location).attr("href");
        var url = new URL(url_string);
        var name = url.searchParams.get("name");
        $.getJSON(`https://demonlord6661.github.io/Eclipse-Manga-Prime/JSON/ShopItems/${name}.json`, function(item) {
            var name = item.Name;
            console.log(item.RelatingMigug);
            if (item.RelatingMigug != "") {
                var related = item.RelatingMigug;
                $("#item_related").text(`Related Migug: ${related}`);
            } else {
                $("#item_related").text(``);
            }
            $("#item_name").text(`${name}`);
        })
    } catch (err) {
        console.log("Issues with parsing URL Parameter's - " + err);
    }
}