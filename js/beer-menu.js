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
            $('body').css('background-color','#f0302b');
            $('header').css('background-color','#282c89');
            $('footer').css('background-color','#282c89');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };

        if ($('#sympathy').hasClass('no-display') != true){
            $('body').css('background-color','#c4b5ad');
            $('header').css('background-color','#ed4634');
            $('footer').css('background-color','#ed4634');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };
        if ($('#hopadillo').hasClass('no-display') != true){
            $('body').css('background-color','#97dca4');
            $('header').css('background-color','#573a53');
            $('footer').css('background-color','#573a53');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };
        if ($('#weekendwarrior').hasClass('no-display') != true){
            $('body').css('background-color','#35e181');
            $('header').css('background-color','#145444');
            $('footer').css('background-color','#145444');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };
        if ($('#weisseversa').hasClass('no-display') != true){
            $('body').css('background-color','#b9a22f');
            $('header').css('background-color','#0094e1');
            $('footer').css('background-color','#0094e1');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };
        if ($('#mother').hasClass('no-display') != true){
            $('body').css('background-color','#784e52');
            $('header').css('background-color','#202c39');
            $('footer').css('background-color','#202c39');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
            $(rodeoclown).addClass('no-display');
        };
    });

$('#beer-left').on('click', function(){
        if ($('#rodeoclown').hasClass('no-display') != true){
            $(beerlast).addClass('no-display');
            $('body').css('background-color','#f0302b');
            $('header').css('background-color','#282c89');
            $('footer').css('background-color','#282c89');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };

        if ($('#sympathy').hasClass('no-display') != true){
            $('body').css('background-color','#c4b5ad');
            $('header').css('background-color','#ed4634');
            $('footer').css('background-color','#ed4634');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };
        if ($('#hopadillo').hasClass('no-display') != true){
            $('body').css('background-color','#97dca4');
            $('header').css('background-color','#573a53');
            $('footer').css('background-color','#573a53');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };
        if ($('#weekendwarrior').hasClass('no-display') != true){
            $('body').css('background-color','#35e181');
            $('header').css('background-color','#145444');
            $('footer').css('background-color','#145444');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };
        if ($('#weisseversa').hasClass('no-display') != true){
            $('body').css('background-color','#b9a22f');
            $('header').css('background-color','#0094e1');
            $('footer').css('background-color','#0094e1');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };
        if ($('#mother').hasClass('no-display') != true){
            $('body').css('background-color','#784e52');
            $('header').css('background-color','#202c39');
            $('footer').css('background-color','#202c39');
            $(rodeoclown).addClass('no-display');
            $('p').css('color','#fff');
            $('li').css('color','#fff');
            $('.fa').css('color','#fff');
        };
    });

// // ON SCROLL BEER TOGGLE - All beer types displayed, changes colors when scrolled to corresponding beer type.

//     var beersarray = ["rodeoclown","sympathy","hopadillo","weekendwarrior","weisseversa","mother"];

//     var beercount = 1; // Start at "sympathy" in the array (since "rodeoclown" loads with the page). //

//         for (var i = beercount; i < beersarray.length; i++){
//             var beerid = '#' + beersarray[i];
//             $(beerid).toggleClass('no-display');
//             $(beerid).css('margin-top','200px');
//             console.log(beerid);
//         };

//     $(window).on('scroll',function(){
//         if ($('#rodeoclown').visible() == true){
//             $('body').css('background-color','#f0302b');
//             $('header').css('background-color','#282c89');
//             $('footer').css('background-color','#282c89');
//         };
//         if ($('#sympath').visible() == true){
//             $('body').css('background-color','#c4b5ad');
//             $('header').css('background-color','#ed4634');
//             $('footer').css('background-color','#ed4634');
//         };
//         if ($('#hopadillo').visible() == true){
//             $('body').css('background-color','#97dca4');
//             $('header').css('background-color','#573a53');
//             $('footer').css('background-color','#573a53');
//         };
//         if ($('#weekendwarrior').visible() == true){
//             $('body').css('background-color','#35e181');
//             $('header').css('background-color','#145444');
//             $('footer').css('background-color','#145444');
//         };
//         if ($('#weisseversa').visible() == true){
//             $('body').css('background-color','#b9a22f');
//             $('header').css('background-color','#0094e1');
//             $('footer').css('background-color','#0094e1');
//         };
//         if ($('#mother').visible() == true){
//             $('body').css('background-color','#784e52');
//             $('header').css('background-color','#202c39');
//             $('footer').css('background-color','#202c39');
//         };
//     });




