// ON CLICK BEER TOGGLE - When arrow is clicked, hide current beer-type and show next beer in the array. //

    var beersarray = ["rodeoclown","sympathy","hopadillo","weekendwarrior","weisseversa","mother"];
    var beercount = 0; // Start at "sympathy" in the array (since "rodeoclown" loads with the page). //
    var beerlast = "#" + beersarray[beersarray.length - 1];

    $('#beer-right').on('click', function(){
        var beerid = '#' + beersarray[beercount + 1]; // When arrow clicked, set the value in array at current count.
        var beeridprev = '#' + beersarray[beercount]; // Set the value in array at previous count. //
        $(beeridprev).toggleClass('no-display'); // Toggle previous count (current displayed) beer-type to 'none.'
        $(beerid).toggleClass('no-display'); // Toggle the current count (next to show) beer-type to display.
        beercount += 1; // Set count for next click. //
        console.log(beerid);
        if (beercount == beersarray.length){ // Reset count when the end of the array is reached to select through array again, starting at "rodeoclown." //
            beercount = 0;
            $('#rodeoclown').toggleClass('no-display');
        }
    });

    $('#beer-left').on('click', function(){
        var beeridnext = '#' + beersarray[beercount];
        var beerid = '#' + beersarray[beercount - 1];
        $(beeridnext).toggleClass('no-display'); // Toggle previous count (current displayed) beer-type to 'none.'
        $(beerid).toggleClass('no-display'); // Toggle previous count (current displayed) beer-type to 'none.'
        if (beercount == 0){
            beercount = 5;
            $(beerlast).removeClass('no-display');
        }
        else{
            beercount -= 1;
        };
        console.log(beerid);
    });


// COLORS //
$('#beer-right').on('click', function(){
        if ($('#rodeoclown').hasClass('no-display') != true){
            $(beerlast).addClass('no-display');
            $('.logo-cont').css('background-color','#f0302b');
            $('header').css('background-color','#282c89');
            $('footer').css('border-top','10px solid #f0302b');
            $('footer').css('background-color','#282c89');
        };

        if ($('#sympathy').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#c4b5ad');
            $('header').css('background-color','#b22f11');
            $('footer').css('border-top','10px solid #c4b5ad');
            $('footer').css('background-color','#b22f11');

        };
        if ($('#hopadillo').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#97dca4');
            $('header').css('background-color','#573a53');
            $('footer').css('border-top','10px solid #97dca4');
            $('footer').css('background-color','#573a53');

        };
        if ($('#weekendwarrior').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#35e181');
            $('header').css('background-color','#145444');
            $('footer').css('border-top','10px solid #35e181');
            $('footer').css('background-color','#145444');

        };
        if ($('#weisseversa').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#f9dd15');
            $('header').css('background-color','#0094e1');
            $('footer').css('border-top','10px solid #f9dd15');
            $('footer').css('background-color','#0094e1');

        };
        if ($('#mother').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#784e52');
            $('header').css('background-color','#202c39');
            $('footer').css('border-top','10px solid #784e52');
            $('footer').css('background-color','#202c39');
            $('#rodeoclown').addClass('no-display');
        };
    });

$('#beer-left').on('click', function(){
        if ($('#rodeoclown').hasClass('no-display') != true){
            $(beerlast).addClass('no-display');
            $('.logo-cont').css('background-color','#f0302b');
            $('header').css('background-color','#282c89');
            $('footer').css('border-top','10px solid #f0302b');
            $('footer').css('background-color','#282c89');

        };

        if ($('#sympathy').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#c4b5ad');
            $('header').css('background-color','#b22f11');
            $('footer').css('border-top','10px solid #c4b5ad');
            $('footer').css('background-color','#b22f11');

        };
        if ($('#hopadillo').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#97dca4');
            $('header').css('background-color','#573a53');
            $('footer').css('border-top','10px solid #97dca4');
            $('footer').css('background-color','#573a53');

        };
        if ($('#weekendwarrior').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#35e181');
            $('header').css('background-color','#145444');
            $('footer').css('border-top','10px solid #35e181');
            $('footer').css('background-color','#145444');

        };
        if ($('#weisseversa').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#f9dd15');
            $('header').css('background-color','#0094e1');
            $('footer').css('border-top','10px solid #f9dd15');
            $('footer').css('background-color','#0094e1');

        };
        if ($('#mother').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#784e52');
            $('header').css('background-color','#202c39');
            $('footer').css('border-top','10px solid #784e52');
            $('footer').css('background-color','#202c39');
            $('#rodeoclown').addClass('no-display');
        };
    });