window.onload = function() {
    try {
        var url_string = $(location).attr("href");
        var url = new URL(url_string);
        var name = url.searchParams.get("name");
        $.getJSON(`https://demonlord6661.github.io/Eclipse-Manga-Prime/JSON/ShopItems/${name}.json`, function(migug) {
            
        })
    } catch (err) {
        console.log("Issues with parsing URL Parameter's - " + err);
    }
}