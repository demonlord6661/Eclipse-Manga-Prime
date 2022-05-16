$.getJSON(`JSON/Migug.json`, function(migug) {
    var name = migug.name;
    $("<div/>", {
        'class': "col mb-5",
        text: "d",
        id: `${name}`,
    }).appendTo('#topTen');
    $("<div/>", {
        'class': "card h-100",
        text: "d",
        id: `${name}_card`,
    }).appendTo(`${name}`);
});