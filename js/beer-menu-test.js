// ARROW BEER THROUGH- When arrow is clicked, hide current beer-type and show next beer in the array. //

    var beersarray = ["rodeoclown","sympathy","hopadillo","weekendwarrior","weisseversa","barnburner","lovestreet","karbachtoberfest","mother"]; // IF ADDING A BEER, this needs to be updated with that beer's class name.
    var beercount = 0;
    var beerlast = "#" + beersarray[beersarray.length - 1];
    var beerid = '#' + beersarray[beercount + 1];

// BEER DISPLAY OFF- Loop through all the beer descriptions and if a description is dislaying, turn it off. //

    function beerDisplayOff(){
        for (var i = 0; i <= beersarray.length; i++){
            var beer_check = '#' + beersarray[i];
            if ($(beer_check).hasClass('no-display') == !true){
                $(beer_check).addClass('no-display');
            };
        };
    }

// BEER COLOR CSS STYLES- When arrow is clicked, hide current beer-type and show next beer in the array. //

    function beercolors(beerid){
        $.getJSON( "js/beer-objects.js", function(json) {
            var beer_number = beersarray.indexOf(beerid);
            var primary_json = json[beercount].primary;
            var secondary_json = json[beercount].secondary;
            $('.logo-cont').css('background-color', primary_json);
            $('header').css('background-color', secondary_json);
            $('footer').css('border-top','10px solid ' + primary_json);
            $('footer').css('background-color', secondary_json);
        })
            .fail(function() {
                console.log( "Something went wrong..." );
            });
    };

// RIGHT ARROW- Beer count increases by 1 to toggle through the array. If the end of the array is reached, reset beer count to 0 and display Rodeo Clown (first beer). //

    $('#beer-right').on('click', function(){
        var beerid = '#' + beersarray[beercount + 1];
        beerDisplayOff();
        $(beerid).toggleClass('no-display');
        beercount += 1;
        if (beercount == beersarray.length){
        beercount = 0;
        $('#rodeoclown').toggleClass('no-display');
        };
        // beercolors();
    });

    $('#beer-left').on('click', function(){
        beerDisplayOff();
        var beeridnext = '#' + beersarray[beercount];
        var beerid = '#' + beersarray[beercount - 1];
        $(beeridnext).addClass('no-display');
        $(beerid).removeClass('no-display');
        if (beercount == 0){
            beercount = beersarray.length - 1;
            $(beerlast).removeClass('no-display');
        }
        else{
            beercount -= 1;
        };
        // beercolors();
    });

// ON CLICK GO TO BEER CAN - When beer can is clicked, hide current beer-type and show the corresponding beer info. //

$('.beer-bug').on('click',function(){
    var beerid = $(this).attr('class').replace('beer-bug ','').replace(' large-2 medium-4 small-6 columns','');
    beerDisplayOff();
    $('#' + beerid).removeClass('no-display');
    // $.getJSON( "js/beer-objects.js", function(json) {
    //     var beer_number = beersarray.indexOf(beerid);
    //     var primary_json = json[beer_number].primary;
    //     var secondary_json = json[beer_number].secondary;
    //     $('.logo-cont').css('background-color', primary_json);
    //     $('header').css('background-color', secondary_json);
    //     $('footer').css('border-top','10px solid ' + primary_json);
    //     $('footer').css('background-color', secondary_json);
    // })
    //     .fail(function() {
    //         console.log( "Something went wrong..." );
    //     });
});