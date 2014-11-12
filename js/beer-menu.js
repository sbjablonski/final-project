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
            $('.logo-cont').css('background-color','#E8413A');
            $('header').css('background-color','#25337E');
            $('footer').css('border-top','10px solid #E8413A');
            $('footer').css('background-color','#25337E');
        };

        if ($('#sympathy').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#9A9287');
            $('header').css('background-color','#BC3115');
            $('footer').css('border-top','10px solid #9A9287');
            $('footer').css('background-color','#BC3115');

        };
        if ($('#hopadillo').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#80BF8D');
            $('header').css('background-color','#473037');
            $('footer').css('border-top','10px solid #80BF8D');
            $('footer').css('background-color','#473037');

        };
        if ($('#weekendwarrior').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#4ACC75');
            $('header').css('background-color','#145444');
            $('footer').css('border-top','10px solid #4ACC75');
            $('footer').css('background-color','#145444');

        };
        if ($('#weisseversa').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#FFD156');
            $('header').css('background-color','#0BA8DB');
            $('footer').css('border-top','10px solid #FFD156');
            $('footer').css('background-color','#0BA8DB');

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
            $('.logo-cont').css('background-color','#E8413A');
            $('header').css('background-color','#25337E');
            $('footer').css('border-top','10px solid #E8413A');
            $('footer').css('background-color','#25337E');

        };

        if ($('#sympathy').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#9A9287');
            $('header').css('background-color','#BC3115');
            $('footer').css('border-top','10px solid #9A9287');
            $('footer').css('background-color','#BC3115');

        };
        if ($('#hopadillo').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#9edfa5');
            $('header').css('background-color','#473037');
            $('footer').css('border-top','10px solid #9edfa5');
            $('footer').css('background-color','#473037');

        };
        if ($('#weekendwarrior').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#4ACC75');
            $('header').css('background-color','#145444');
            $('footer').css('border-top','10px solid #4ACC75');
            $('footer').css('background-color','#145444');

        };
        if ($('#weisseversa').hasClass('no-display') != true){
            $('.logo-cont').css('background-color','#e2c303');
            $('header').css('background-color','#0094e1');
            $('footer').css('border-top','10px solid #e2c303');
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