function modNumString(numstring, val, nums, operations) {
    if ("1234567890".includes(val)) {

        numstring += val

    } else if ("+-*/".includes(val)) {

        nums.push(numstring);
        operations.push(val);

        $(".calculator .input input").val("");

        console.log("nums: ", nums);
        console.log("methods: ", operations);

        return;

    } else if (val == '.') {

        if (numstring.includes('.')) {
            return;
        } else if (numstring == '') {
            $(".calculator .input input").val('0.');
            return;
        } else {
            numstring += '.';
        }

    } else if (val == "+/-") {

        if (numstring.includes("-")) {
            
            numstring = numstring.replace('-', '');
            
        } else {

            numstring = '-' + numstring;

        }

    } else if (val == 'CLR') {

        $(".calculator .input input").val('');
        return;

    } else if (val == 'DEL') {

        numstring = numstring.slice(0, numstring.length-1);

    } else if (val == '=') {

        nums.push(numstring);
        console.log("nums: ", nums);
        console.log("methods: ", operations);

        numstring = runOperations(nums, operations);

    }

    $(".calculator .input input").val(numstring);
}

function runOperations(nums, operations) {
    total = parseFloat(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        const next = parseFloat(nums[i]);
        const op = operations[i-1];

        total = calculate(total, next, op);
    }

    return total;
}

function calculate(a, b, op) {
    if (op == '+'){
        return a + b;
    } else if (op == '-'){
        return a - b;
    } else if (op == '*'){
        return a * b;
    } else if (op == '/'){
        return a / b;
    }
}

function codeToOp(keycode) {
    if (keycode == 43) {
        return '+';
    } else if (keycode == 45) {
        return '-';
    } else if (keycode == 42) {
        return '*';
    } else if (keycode == 47) {
        return '/';
    } else if (keycode == 13) {
        return '=';
    }
}

$(document).ready(function(){

    var nums = [];
    var operations = [];

    $(".calc-button").click(function(){
        // $(this).hide();
        var numstring = $(".calculator .input input").val();
        var val = $(this).text();

        modNumString(numstring, val, nums, operations);

        if (val == '=') {
            nums = [];
            operations = []
        }
    });

    $(".calculator .input input").keypress(function(e){
        var numstring = $(".calculator .input input").val();
        var val = codeToOp(e.keyCode)

        modNumString(numstring, val, nums, operations);

        if (e.keyCode == 13) {
            nums = [];
            operations = []
        }
    });

});