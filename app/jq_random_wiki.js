// material referenced: https://stackoverflow.com/questions/50157296/how-to-obtain-data-from-random-wikipedia-page-with-jquery (answered by Andrew L)
// material refrenced: https://codepen.io/loweehahn/pen/LZYxwj by Kelvin
// material referenced: https://www.reddit.com/r/webdev/comments/y1a2qa/why_does_the_page_keeps_refreshing/ yea it was an issue thanks reddit

function getArticle(data) {
    
    let p = data.query.pages; // random page
    console.log(p);

    let item = Object.keys(p)[0];
    return [p[item].title, p[item].extract];
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
                url: "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=random&grnnamespace=0&prop=info|extracts|images&rvprop=content",
                success: function(data) {
                    console.log(getArticle(data));
                },
                error: function(xhr, error) {
                    console.log(xhr);
                    console.log(error);
                }
            });
        }
    })

});