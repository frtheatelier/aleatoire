// material referenced: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
// material refrenced: https://www.codiga.io/blog/display-code-snippets-in-html/

function displayText(txt) {
    $('#displaytext').show();
    $("#displaytext").append(txt);
}

function displayCode(txt) {
    var newtxt = txt.replace("<", "&lt;");
    newtxt = newtxt.replace(">", "&gt;");

    console.log(newtxt);

    // var code = $("<code></code>").text(newtxt);
    var pre = $("<pre></pre>").text(txt);

    $('#convertedtext').show();
    $("#convertedtext").append(pre);
}

function copyText() {
    $('#convertedtext').select();
    $('#convertedtext').setSelectionRange(0, 99999);

    navigator.clipboard.writeText($('#convertedtext').val());
}

$(document).ready(function(){
    $('#displaytext').hide();
    $('#convertedtext').hide();

    $('form').submit(function(e) {
        e.preventDefault();

        // clear articles
        $('#displaytext').html('');
        $('#convertedtext').html('');

        // get text to convert
        var $input = $(e.target).find('textarea');
        var txt = $input.val();

        console.log(txt);
        
        // remove linebreaks
        var newtxt = txt.replace(/(\r\n|\n|\r)/gm, "<br>");

        console.log(newtxt);

        displayText(newtxt);
        displayCode(newtxt);
    })

});