const listoflanguages = Object.keys(flashcards);

function showListOfLanguages(language)
{
    const div = document.createElement("div");
    const anchor = document.createElement("a");
    const image = document.createElement("img");

    div.className = "lang";

    // const url = language + '/' + language + '.html'
    const url = `${language}/${language}.html`;

    anchor.setAttribute("href",url);
    image.src = `images/${language}.png`;
    image.className= "imageobject";

    section = document.getElementById("languages");
    div.append(anchor);
    anchor.append(image);
    section.append(div);
}

listoflanguages.forEach(function(languages){
    showListOfLanguages(languages);
})