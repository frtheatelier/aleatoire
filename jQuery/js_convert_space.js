// material referenced: https://stackoverflow.com/questions/50157296/how-to-obtain-data-from-random-wikipedia-page-with-jquery (answered by Andrew L)
// material refrenced: https://codepen.io/loweehahn/pen/LZYxwj by Kelvin
// material referenced: https://www.reddit.com/r/webdev/comments/y1a2qa/why_does_the_page_keeps_refreshing/ yea it was an issue thanks reddit


$(document).ready(function(){

    $('form').submit(function(e) {
        e.preventDefault();

        // clear articles
        // $('#articles').html('');

        // get number of articles to generate
        var $input = $(e.target).find('input');
        var txt = $input.val();

        console.log(txt);

    })

});