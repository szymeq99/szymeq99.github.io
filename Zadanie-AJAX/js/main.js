$(document).ready(function () {
    $('.btn').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            console.log(data);

            $('body').append('<div id="dane-programisty"></div>')
            $('#dane-programisty').append('<p></p>')

            $('p').text(`${data.imie} ${data.nazwisko} ${data.zawod} ${data.firma}`);

        });

    })
})