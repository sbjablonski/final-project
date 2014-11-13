// ON CLICK BEER TOGGLE - When arrow is clicked, hide current beer-type and show next beer in the array. //

    var beersarray = ["rodeoclown","sympathy","hopadillo","weekendwarrior","weisseversa","barnburner","lovestreet","karbachtoberfest","mother"];
    var beercount = 0; // Start at "sympathy" in the array (since "rodeoclown" loads with the page). //
    var beerlast = "#" + beersarray[beersarray.length - 1];

    $('#beer-right').on('click', function(){
        var beerid = '#' + beersarray[beercount + 1]; // When arrow clicked, set the value in array at current count.
        for (var i = 0; i <= beersarray.length; i++){
            var beer_check = '#' + beersarray[i];
            if ($(beer_check).hasClass('no-display') == !true){
                $(beer_check).addClass('no-display');
            };
        };
        $(beerid).toggleClass('no-display'); // Toggle the current count (next to show) beer-type to display.
        beercount += 1; // Set count for next click. //
        // console.log(beerid);
        if (beercount == beersarray.length){ // Reset count when the end of the array is reached to select through array again, starting at "rodeoclown." //
        beercount = 0;
        $('#rodeoclown').toggleClass('no-display');
        };
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
    });

    $('#beer-left').on('click', function(){
        for (var i = 0; i <= beersarray.length; i++){
            var beer_check = '#' + beersarray[i];
            if ($(beer_check).hasClass('no-display') == !true){
                $(beer_check).addClass('no-display');
            };
        };
        var beeridnext = '#' + beersarray[beercount];
        var beerid = '#' + beersarray[beercount - 1];
        $(beeridnext).addClass('no-display'); // Toggle previous count (current displayed) beer-type to 'none.'
        $(beerid).removeClass('no-display'); // Toggle previous count (current displayed) beer-type to 'none.'
        if (beercount == 0){
            beercount = 8;
            $(beerlast).removeClass('no-display');
        }
        else{
            beercount -= 1;
        };
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
    });

$('.beer-bug').on('click',function(){
    //Log the selected element's class, changing that to an id (Have to remove 'beer-bug' and Foundation columns).
    var beer_selected = $(this).attr('class').replace('beer-bug ','').replace(' large-2 medium-4 small-6 columns','');
    for (var i = 0; i <= beersarray.length; i++){
            var beer_check = '#' + beersarray[i];
            if ($(beer_check).hasClass('no-display') == !true){
                $(beer_check).addClass('no-display');
                $('#' + beer_selected).removeClass('no-display');
                console.log(beer_selected);
                $.getJSON( "js/beer-objects.js", function(json) {
                    var beer_number = beersarray.indexOf(beer_selected);
                    var primary_json = json[beer_number].primary;
                    var secondary_json = json[beer_number].secondary;
                    $('.logo-cont').css('background-color', primary_json);
                    $('header').css('background-color', secondary_json);
                    $('footer').css('border-top','10px solid ' + primary_json);
                    $('footer').css('background-color', secondary_json);
                }).fail(function() {
                    console.log( "Something went wrong..." );
                            });
            };
    };
});