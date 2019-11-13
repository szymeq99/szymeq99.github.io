$(document).ready(function(){
    // console.log('test');
    changeColor()

    //Selektor znacznika
    var allP = $('p');
    allP.css('color', '#00f');
    
    // Selektor class
    var allGreen = $('.green');
    allGreen.css('color', '#0f0');

    // metoda text
    console.log(allP.text());
    // allP.text('TEST TEST');

    // eq(0) to to samo co [0]


    // Obie te metody działaja wewnątrz znacznika text nie interpretuje znaczków a html je interpretuje


    // metoda html
    console.log( $('.html').html());
    $('.html').html('<p>test</p>');

    // dodawanie tresci na początku
    $('#container').prepend('<p class="prepend">Prepend</p>');

    // dodawanie tresci na koncu
    $('#container').append('<p class="append">Append</p>');

    // dodawanie tresci przd danym selektorem
    $('#container').before('<div class="before">Before</div>');

    // dodawanie tresci za danym selektorem
    $('#container').after('<div class="after">After</div>');

    // usuwanie tresci
    $('#delete p').empty();

    // Usuwanie tresci i całego węzła
    $('#delete p').remove();

    //z własciwościa - get
    console.log($('.css p').css('color'));

    //właściwość, wartość - set
    $('.css p').css('color' , 'pink')

    //właściwość: wartość - set
    $('.css').css({
        width: '50%',
        backgroundColor: 'grey',

    })

    // metoda val

    // GET bo bez parametru
    console.log($('form input:first-of-type').val());

    //SET bo z parametrem

    $('form input:first-of-type').val('Szymon')

    //Dodawanie klasy

    $('form').addClass('formularz formularz2');

    //Usuwanie klasy

    $('form').removeClass('formularz2');

    // find
    $('.find').find('span').css('font-size', '40px');

    //Each() - Dla kazdego li
    // $('nav li').each(function(){
    //     $(this).click(function(){
    //         $(this).find('a').css('color', 'green');
    //     })
    // })
    
    //łaczenie kilku zdarzen pod jedym elementem

    $('nav li').on({
        'click': function() {
            $(this).find('a').css('color', 'green');
        },
        'mouseenter': function() {
            $(this).find('a').css('font-size', '20px');
        },
        'mouseleave': function(){
            $(this).find('a').css('font-size', '14px');
        }
    })

    //colback funkcja po przecinku wykona sie kiedy skonczy sie wykonywac metoda.

    $('nav').hide(4000, function(){
        $('body').addClass('klasasamawsobie');
    }).show(4000, function() {
        $('body').removeClass('klasasamawsobie');
    })

    //Fade zanikanie i powracanie tzw. odnikanie

    $('.fade').fadeOut(4000).delay(2000).fadeIn(4000);

    // $('#slide').click(function() {
    //     // $('.slide').slideUp(1000);
    //     $('.slide').slideToggle(400);
    // })
    $('#slide').click(function(){
        $('.slide').animate({
            width: '50%',
            height: '150px'
        }, 1000, animateHeight)
    })


});


/* First jquery function */

//Selektor id
function changeColor(){
    $('#first').css('background-color', 'red').hide('slow').show(3000)  //Jedna wartość

}

function animateHeight(){
    $('.slide').animate({
        height: '300px',
    }, 1000, costam)
}

function costam(){
//itd mozna zagnieżdzać funkcje w funkcji
};
