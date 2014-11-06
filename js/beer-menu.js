// On click, //


// $('#beer-left').on('click',function(){

//         $('#rodeoclown').toggleClass('beer-display');
//         $('#sympathy').toggleClass('beer-display');
//     if($('#sympathy').hasClass('beer-display') != true){
//         $('body').css('background-color','#c4b5ad');
//         $('header').css('background-color','#ed4634');
//         $('footer').css('background-color','#ed4634');
//         $('#sympathy p').css('color','#333');
//         $('#sympathy li').css('color','#333');
//         $('#sympathy .fa-video-camera').css('color','#333');
//     }
//     else if ($('#rodeoclown').hasClass('beer-display') != true){
//         $('body').css('background-color','#f0302b');
//         $('header').css('background-color','#282c89');
//         $('footer').css('background-color','#282c89');
//         $('p').css('color','#fff');
//         $('li').css('color','#fff');
//    }

// });

// BEER TOGGLE - When arrow is clicked, hide current beer-type and show next beer in the array. //

    var beersarray = ["rodeoclown","sympathy","hopadillo","weekendwarrior","weisseversa","mother"];

    var beercount = 1; // Start at "sympathy" in the array (since "rodeoclown" loads with the page). //

    $('#beer-left').on('click',function(){
        var beerid = '#' + beersarray[beercount]; // When arrow clicked, set the value in array at current count.
        var beeridprev = '#' + beersarray[beercount - 1]; // Set the value in array at previous count. //
        $(beeridprev).toggleClass('beer-display'); // Toggle previous count (current displayed) beer-type to 'none.'
        $(beerid).toggleClass('beer-display'); // Toggle the current count (next to show) beer-type to display.
        beercount += 1; // Set count for next click. //
        console.log(beerid);
        if (beercount == beersarray.length){ // Reset count when the end of the array is reached to select through array again, starting at "rodeoclown." //
            beercount = 0;
        }

// COLORS //
        if (beerid == "#rodeoclown"){
            $("#mother").addClass('beer-display'); //resets beer-display so "mother" doesn't continue in next cycle.
            $('body').css('background-color','#f0302b');
            $('header').css('background-color','#282c89');
            $('footer').css('background-color','#282c89');
        };
        if (beerid == "#sympathy"){
            $('body').css('background-color','#c4b5ad');
            $('header').css('background-color','#ed4634');
            $('footer').css('background-color','#ed4634');
        };
        if (beerid == "#hopadillo"){
            $('body').css('background-color','#97dca4');
            $('header').css('background-color','#573a53');
            $('footer').css('background-color','#573a53');
        };
        if (beerid == "#weekendwarrior"){
            $('body').css('background-color','#35e181');
            $('header').css('background-color','#145444');
            $('footer').css('background-color','#145444');
        };
        if (beerid == "#weisseversa"){
            $('body').css('background-color','#b9a22f');
            $('header').css('background-color','#0094e1');
            $('footer').css('background-color','#0094e1');
        };
        if (beerid == "#mother"){
            $('body').css('background-color','#784e52');
            $('header').css('background-color','#202c39');
            $('footer').css('background-color','#202c39');
        };
    });




