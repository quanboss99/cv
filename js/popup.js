status = "A. Quân"
let a = new Array(), n = "";
a[1] = 'E';
a[2] = 'm';
a[3] = ' ';
a[4] = 'n';
a[5] = 'h';
a[6] = 'ấ';
a[7] = 't';
a[8] = ' ';
a[9] = 't';
a[10] = 'r';
a[11] = 'í';
a[12] = ' ';
a[13] = 'v';
a[14] = 'ớ';
a[15] = 'i';
a[16] = ' ';
a[17] = 'a';
a[18] = 'n';
a[19] = 'h';
a[20] = ' ';
a[21] = 'Q';
a[22] = 'u';
a[23] = 'â';
a[24] = 'n';
a[25] = ' ';
a[26] = 'n';
a[27] = 'h';
a[28] = 'a!';
a[29] = '♥';

function one() {
    let t = document.f.txt.value
    let j = t.length
    if (j > 0) {
        for (let i = 1; i <= j; i++) {
            n = n + a[i]
            if (i === 29) {
                document.f.txt.value = ""
                n = ""
            }
        }
    }
    document.f.txt.value = n
    n = ""
    setTimeout("one()", 1)
}

function s() {
}

function on() {
    one()
}

$(document).ready(function () {
    $('#k').hide();
    $('h1').click(function () {
        $('.active').removeClass('active');
        $('#k').slideUp('fast');
        if ($(this).next('#k').is(':hidden') === true) {
            $(this).addClass('active');
            $(this).next('#k').slideDown('fast');
        }
    });
});

function Yeu() {
    $("#divResult").fadeOut(0);
    $("#divResult").html("</br><h2>Anh luôn đồng ý với ý kiến của em lun :)) <img style=\"width: 20%;border-radius: 30px;margin-left: 20px;\" src='img/cute.png'</img></h2>");
    window.open('media/CV.pdf');
}
				