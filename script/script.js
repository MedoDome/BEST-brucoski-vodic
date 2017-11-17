$(document).ready(function () {
    /*$("#defaultCountdown").countdowntimer({
        dateAndTime: "2017/10/02 11:00:00", //end date
        size: "xl"
    });*/

    // Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: false
    });

    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    /*$(window).resize(function(){*/
    if ($(window).width() <= 480) {
        $("#defaultCountdown").countdowntimer({
            dateAndTime: "2017/10/02 11:00:00",
            size: "xs"
        });
    } else if ($(window).width() <= 767) {
        $("#defaultCountdown").countdowntimer({
            dateAndTime: "2017/10/02 11:00:00",
            size: "sm"
        });
    } else if ($(window).width() <= 1024) {
        $("#defaultCountdown").countdowntimer({
            dateAndTime: "2017/10/02 11:00:00",
            size: "md"
        });
    } else {
        $("#defaultCountdown").countdowntimer({
            dateAndTime: "2017/10/02 11:00:00",
            size: "xl"
        });
    }



    $( "#button" ).on( "click", (function(e) {
        e.preventDefault();

        var data = new FormData();

        var inputFields = $('#contactForm').serializeArray();

        for (i = 0; i < inputFields.length; i++) {
            console.log(inputFields[i]);
            if (inputFields[i]['value'].length > 0)
                data.append(inputFields[i]['name'], inputFields[i]['value']);
        }
        $.ajax({
            type: 'POST',
            url: 'mailer.php',
            data: data,
            contentType: false,
            processData: false,
            async: true,
            cache: false,
            success: function (response) {
                console.log(response);
                // $('#cmsg').fadeOut();
                // $('#cmsg').empty();
                // $('#cmsg').append(response);
                // $('#cmsg').fadeIn(response);

            },
            error: function (err) {
                //openNotif("error", "Something went wrong. Please check all your accommodation details if they are valid and try saving it again.");
            }
        });

    }));

    /* });*/

    $("#readMore").on('click', function(){
        $("#counter").html('<iframe style="width:100%; height:100%;" src="https://e.issuu.com/embed.html#31808445/55468058" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen></iframe>');
    });
});