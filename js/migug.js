function onLoadPage(){

  
  
  $.getJSON(`../JSON/Migug.json`, function(migug) {
    var name = migug.Name;
    $("<div/>", {
        'class': "container px-4 px-lg-5 mt-5",
        text: "",
        id: `${name}`,
    }).appendTo('#topTen');

    $("<div/>", {
        'class': "row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center",
        text: "",
        id: ``,
    }).appendTo(`${name}_card`);
  });
}