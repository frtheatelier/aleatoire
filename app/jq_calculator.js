function modNumString(numstring, val, nums, operations) {
    if ("1234567890".includes(val)) {

        // $(".calculator .input input").append(val);
        numstring += val
        $(".calculator .input input").val(numstring);

    } else if ("+-*/".includes(val)) {

        nums.push(numstring);
        operations.push(val);

        $(".calculator .input input").val("");

        console.log("nums: ", nums);
        console.log("methods: ", operations);

    } else if (val == "+/-") {

        if (numstring.includes("-")) {
            
            numstring = numstring.replace('-', '');
            $(".calculator .input input").val(numstring);
            
        } else {

            numstring = '-' + numstring;
            $(".calculator .input input").val(numstring);

        }

    } else if (val == 'CLR') {

        $(".calculator .input input").val('');

    } else if (val == 'DEL') {

        numstring = numstring.slice(0, numstring.length-1);
        $(".calculator .input input").val(numstring);

    }
}

$(document).ready(function(){

    var nums = [];
    var operations = [];

    $(".calc-button").click(function(){
        // $(this).hide();
        var numstring = $(".calculator .input input").val()
        var val = $(this).text();

        modNumString(numstring, val, nums, operations)
    });

});