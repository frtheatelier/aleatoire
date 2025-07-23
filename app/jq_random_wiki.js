// material referenced: https://stackoverflow.com/questions/50157296/how-to-obtain-data-from-random-wikipedia-page-with-jquery (answered by Andrew L)
// material refrenced: https://codepen.io/loweehahn/pen/LZYxwj by Kelvin
// material referenced: https://www.reddit.com/r/webdev/comments/y1a2qa/why_does_the_page_keeps_refreshing/ yea it was an issue thanks reddit

function getArticle(data) {
    
    let p = data.query.pages; // random page
    console.log(p);

    let item = Object.keys(p)[0];
    return [p[item].title, p[item].extract];
}

function showArticles(data) {
    var article_data = getArticle(data);
    var clean_title = article_data[0].replace(/ /g, "_"); // replace whitespace in title with underscore

    var statement = "<a href='https://en.wikipedia.org/wiki/" + clean_title + "'>"
        + "<div class='article-page basic-button margin-top-15px transition-eio width-500px'>"
        + "<h3 class='header'>" + article_data[0] + "</h3>"
        + "<p>" + article_data[1] + "</p>"
        + "</div></a>" ;

    $("#articles").append(statement);
}

$(document).ready(function(){

    $('form').submit(function(e) {
        e.preventDefault();

        // clear articles
        $('#articles').html('');

        // get number of articles to generate
        var $input = $(e.target).find('input');
        var n = $input.val();
        console.log(n);

        // console.log("bull");

        for (let index = 0; index < n; index++) {
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=random&grnnamespace=0&prop=info|extracts|images&exchars=100&exlimit=max&explaintext=true&exintro=true&rvprop=content",
                success: function(data) {
                    // console.log(getArticle(data));
                    showArticles(data)
                },
                error: function(xhr, error) {
                    console.log(xhr);
                    console.log(error);
                }
            });
        }
    })

});