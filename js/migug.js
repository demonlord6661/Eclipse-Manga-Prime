window.onload = function() {
    try {
        var url_string = $(location).attr("href");
        var url = new URL(url_string);
        var name = url.searchParams.get("name");
        $.getJSON(`https://demonlord6661.github.io/Eclipse-Manga-Prime/JSON/migugs/${name}.json`, function(migug) {
            var name = migug.name;
            var genre = migug.Genre;
            var authors = migug.Authors;
            var rating = migug.Rating;
            var chapters = migug.Chapters;
            var description = migug.Description;
            var image1 = migug.image1;
            var image2 = migug.image2;
            var image3 = migug.image3;
            $('#migug_name').text(`${name}`);
            $('#migug_genre').text(`Genres: ${genre}`);
            $('#migug_authors').text(`Authors: ${authors}`);
            for (var i = 0; i < rating; i++) {
                document.getElementById('migug_rating').innerHTML += `<div class="bi-star-fill"></div>&nbsp;`
            }
            for (var i = 1; i <= chapters; i++) {
                document.getElementById('migug_chapters').innerHTML += `<li><a class="dropdown-item" href="#">${i}</a></li>`
            }
            $('#migug_description').text(`Description: ${description}`);
            document.getElementById('migug_image_one').innerHTML += `<img src="${image1}" class="d-block w-100" alt="...">`
            document.getElementById('migug_image_two').innerHTML += `<img src="${image2}" class="d-block w-100" alt="...">`
            document.getElementById('migug_image_three').innerHTML += `<img src="${image3}" class="d-block w-100" alt="...">`
        })
    } catch (err) {
        console.log("Issues with parsing URL Parameter's - " + err);
    }
}