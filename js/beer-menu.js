// On click, //


$('#beer-left').on('click',function(){
    if($('.beer-type:first').is('#rodeoclown') != 'images/sympathy.png'){

        $('.beer-description').html('<p>Please allow me to introduce myself Im a beer of damn fine taste. Ive been around for a long, long time, Many brewers have ruined my name Ive watched now for several decades. As my character has been disgraced, But now the boys down on Karbach Street Have gone and made me first rate.<br><br> Full of fine malt and German hops, My taste is both clean and bold And though my flavor always stands up Im best when enjoyed cold So if you meet me Have some courtesy Show some sympathy Enjoy my taste.</p>');

//CSS Changes//


        $('#beer-img').attr('src','images/sympathy.png');
        $('body').css('background-color','#c4b5ad');
        $('header').css('background-color','#ed4634');
        $('footer').css('background-color','#ed4634');
    }else if($('#beer-img').attr('src') == 'images/sympathy.png'){
        $('#beer-img').attr('src','images/rodeoclown.png');
        $('body').css('background-color','#F0302B');
        $('header').css('background-color','#282c89');
        $('footer').css('background-color','#282c89');
    }
});

//Same, for right arrow//

$('#beer-right').on('click',function(){
    if($('#rodeoclown').css('display')!='none'){

        $('.beer-description').html('<p>Please allow me to introduce myself Im a beer of damn fine taste. Ive been around for a long, long time, Many brewers have ruined my name Ive watched now for several decades. As my character has been disgraced, But now the boys down on Karbach Street Have gone and made me first rate.<br><br> Full of fine malt and German hops, My taste is both clean and bold And though my flavor always stands up Im best when enjoyed cold So if you meet me Have some courtesy Show some sympathy Enjoy my taste.</p>');

        $('#beer-img').animate({
            width: [ "toggle", "swing" ]
            }, 500, "easein", function() {
                $('#beer-img').attr('src','images/sympathy.png');
                });
        $('body').css('background-color','#c4b5ad');
        $('header').css('background-color','#ed4634');
        $('footer').css('background-color','#ed4634');
        $('p').css('color','#333');
    }else if($('#2').css('display')!='none'){
        $('#1').show().siblings('div').hide();
    }
    console.log("test.");
});
