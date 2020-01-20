$(document).ready(function () {
    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();

    AOS.init();


    if($(window).width() < 992) {
        $('.login-user').addClass('btn-user');
        $('.btn-user').click(function(){
            $('.bg__site').addClass('active');
            $('.user-nav').addClass('active');
            $('body').css('overflow','hidden');
        });
    }
});

function header_bg(){
    var scrollHeight = $(document).scrollTop();
    if(scrollHeight > 80)
        $('.site__header').addClass('active');
    else
        $('.site__header').removeClass('active');
}

header_bg();

$(document).scroll(function(){
    header_bg();
});

$('.registration-btn').click(function(){
    $('.login-wrapper').removeClass('active');
    $('.reg-wrapper').addClass('active');
});

function menuSort(){
    $('.menu_link').click(function(){
        $(this).addClass('active');
        $(this).closest('.menu').find('.menu_link').not(this).removeClass('active');
    });
}

function mainSlider() {
    var swiper = new Swiper('.main-slider-lg', {
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.main-slider-lg .swiper-pagination',
            clickable: true,
        },
    });
}
function grid1(){
    var swiper1 = new Swiper('.grid1-cont', {
        speed: 500,
        pagination: {
            el: '.grid1-cont .swiper-pagination',
            clickable: true,
        },
    });
}
function grid2(){
    var swiper2 = new Swiper('.grid2-cont', {
        speed: 500,
        pagination: {
            el: '.grid2-cont .swiper-pagination',
            clickable: true,
        },
    });
}

function rating(){
    $(".rating .fa-star").click(function(){
        $(this).addClass("checked"),
        $(this).prevAll(".fa-star").addClass("checked"),
        $(this).nextAll(".fa-star").removeClass("checked")
    })
}

function mapBlock(){
    $('.map-btn').click(function (){
        $('.map-block').addClass('active');
    });
}

function hotSlider() {
    var swiper = new Swiper('.hotSlider', {
        slidesPerView: 5,
        spaceBetween: 60,
        navigation: {
            nextEl: '.hot-slide .swiper-button-next',
            prevEl: '.hot-slide .swiper-button-prev',
        },
        breakpoints: {
            1799: {
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
        }
    });
}

function newsSlider() {
    var swiper = new Swiper('.newsslider', {
        slidesPerView: 5,
        spaceBetween: 60,
        navigation: {
            nextEl: '.news-slide .swiper-button-next',
            prevEl: '.news-slide .swiper-button-prev',
        },
        breakpoints: {
            1799: {
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
        }
    });
}

function saleSlider() {
    var swiper = new Swiper('.saleslider', {
        slidesPerView: 5,
        spaceBetween: 60,
        navigation: {
            nextEl: '.sale-slide .swiper-button-next',
            prevEl: '.sale-slide .swiper-button-prev',
        },
        breakpoints: {
            1799: {
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
        }
    });
}

function bestselerSlider() {
    var swiper = new Swiper('.bestsellerslider', {
        slidesPerView: 5,
        spaceBetween: 40,
        navigation: {
            nextEl: '.bestseller-slide .swiper-button-next',
            prevEl: '.bestseller-slide .swiper-button-prev',
        },
        breakpoints: {
            1799: {
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
        }
    });
}

function recommendedSlider() {
    var swiper = new Swiper('.recommendedslider', {
        slidesPerView: 5,
        spaceBetween: 60,
        navigation: {
            nextEl: '.recommended-slide .swiper-button-next',
            prevEl: '.recommended-slide .swiper-button-prev',
        },
        breakpoints: {
            1799: {
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
        }
    });
}

function blogSlider() {
    var swiper = new Swiper('.blog-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.blogSlider .swiper-button-next',
            prevEl: '.blogSlider .swiper-button-prev',
        },
        breakpoints: {
            1499: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            },
        }
    });
}

function brandsSlider() {
    var swiper = new Swiper('.brands-slider', {
        autoplay: {
            delay: 1000,
        },
        speed: 700,
        slidesPerView: 6,
        navigation: {
            nextEl: '.brands .swiper-button-next',
            prevEl: '.brands .swiper-button-prev',
        },
        breakpoints: {
            991: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });
}

function commentSlider() {
    var swiper = new Swiper('.comment-slider', {
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 4,
        // spaceBetween: 60,
        navigation: {
            nextEl: '.comments .swiper-button-next',
            prevEl: '.comments .swiper-button-prev',
        },
        breakpoints: {
            1499: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            420: {
                slidesPerView: 1,
            },
        }
    });
}

function option(){
    $('.heart').click(function(){
        $(this).toggleClass('active');
    });

    $('.cart').click(function(){
        $(this).addClass('active');
        var count = $(this).find('.num').html();
        count++;
        $(this).find('.num').html(count);
    })
}

function navigation(){
    $('.xs-hdr_btn.btn-search').click(function(){
        $('.bg__site').addClass('active');
        $('.search-nav').addClass('active');
        $('body').css('overflow','hidden');
    });
    $('.btn-user').click(function(){
        $('.bg__site').addClass('active');
        $('.user-nav').addClass('active');
        $('body').css('overflow','hidden');
    });
    $('.burger-btn').click(function(){
        $('.bg__site').addClass('active');
        $('.burger-nav').addClass('active');
        $('body').css('overflow','hidden');
    });
    $('.burger-close').click(function(){
        $('.bg__site').removeClass('active');
        $('.burger-nav').removeClass('active');
        $('.user-nav').removeClass('active');
        $('.filter-block').removeClass('active');
        $('body').css('overflow','auto');
    });
    $('.bg__site').click(function(){
        $('.bg__site').removeClass('active');
        $('.search-nav').removeClass('active');
        $('.burger-nav').removeClass('active');
        $('.user-nav').removeClass('active');
        $('.filter-block').removeClass('active');
        $('body').css('overflow','auto');
    });
    $('.burgermenu-title').click(function(){
        $(this).closest('.menu-item').toggleClass('active');
    });
}
navigation();

function qtyProduct(){
    // products quantity
    var sum = 0;
    $('.plus').click(function(){
        var qty = $(this).next().find('input').val();
        qty++;
        $(this).next().find('input').val(qty);
        $(this).closest('.slider-btm').find('.cart-animation span').html(qty);
    });
    $('.min').click(function(){
        var qty = $(this).prev().find('input').val();
        if(qty==1)
            return;
        qty--;
        $(this).prev().find('input').val(qty);
        $(this).closest('.slider-btm').find('.cart-animation span').html(qty);
    });
}
qtyProduct();


$('.modal-content .close').click(function(){
    $('.bg__site').removeClass('active');
});

function choosePhoto(){
    $('.upload-file').click(function(){
        $('.hidden-inp').click();
    })
}

//filter products
function filter(){
    //filter
    $('.filter-title').click(function(){
        $( event.target ).closest( ".filter" ).toggleClass( "active" );
    });
    $('.filter-btn').click(function(){
        $('.filters-block').addClass('active-filter');
        $('body').css('overflow','hidden');
    });
    $('.filter-close').click(function(){
        $('.filters-block').removeClass('active-filter');
        $('body').css('overflow','auto');
    });



    // //more filter-dropdown
    // var counter = 0;
    // $('.more-filter').click(function(){
    //     counter++;
    //     if (counter = 1){
    //         $(this).text("დახურვა");
    //         // return;
    //     }
    //     counter--;
    //     console.log(counter);
    //     $(this).closest('.filter').find('.filter-menu').toggleClass('active');
    // });

    //more filter-dropdown
    $('.more-filter').click(function(){
        var open = $(this).attr('isOpen');
        if (open == 'no'){
            $(this).attr('isOpen', 'yes');
            $(this).closest('.filter').find('.filter-menu').addClass('active');
            $(this).text("დახურვა");
        }
        else{
            $(this).attr('isOpen', 'no');
            $(this).closest('.filter').find('.filter-menu').removeClass('active');
            $(this).text("მეტის ნახვა");
        }
    });

}


//price range

function priceRange(){
    var prev_min_price = $("#min_value").val();
    var prev_max_price = $("#max_value").val();
    var min_price = $("#min_value").val();;
    var max_price = $("#max_value").val();

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ prev_min_price, prev_max_price ],
        slide: function( event, ui ) {
            $( "#min_value" ).val( ui.values[ 0 ]);
            $( "#max_value" ).val( ui.values[ 1 ]);
            min_price = $("#min_value").val();
            max_price = $("#max_value").val();
        }
    });
    var maxValues = $('#slider-range').slider("option", "max");
    var minValues = $('#slider-range').slider("option", "min");

    $( "#min_value" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#max_value" ).val( $( "#slider-range" ).slider( "values", 1 ) );

    $( "#min_value" ).change(function() {
        if ( $(this).val() < minValues ){
            $(this).val(minValues);
        }
        $( "#slider-range" ).slider( "values", 0, $(this).val() );
    });
    $( "#max_value" ).change(function() {
        if ( $(this).val() > maxValues ){
            $(this).val(maxValues);
        }
        $( "#slider-range" ).slider( "values", 1, $(this).val() );
    });

}

function filterNavigation(){
    $('.filter-btn').click(function(){
        $('.bg__site').addClass('active');
        $('.filter-block').addClass('active');
        $('body').css('overflow','hidden');
    })
}

function orderNavigation(){
    $('.history-btn').click(function(){
       $('.orders-history').addClass('active');
        $('.history-btn').addClass('active');
        $('.orders').removeClass('active');
       $('.order-btn').removeClass('active');
    });
    $('.order-btn').click(function(){
        $('.orders-history').removeClass('active');
        $('.history-btn').removeClass('active');
        $('.orders').addClass('active');
        $('.order-btn').addClass('active');
    });
}


function checkoutBuy(){
    $('.buy-btn').click(function(){
        $('.checkout-buy').addClass('active');
        $('.checkout-first .shopping-bottom').attr('style','display:none !important');
    });

    if($(window).width() <= 767) {
        $('.buy-btn').click(function(){
            $('.checkout-buy').addClass('active');
            $('.checkout-first').hide();
            $('.top_buy, span').addClass('active');
            $('.top_buy, span').addClass('show');
            $('.top_cart').removeClass('active');
            $('.checkout-first .shopping-bottom').attr('style','display:flex !important');
        });
        $('.top_cart').click(function(){
            $('.top_buy').removeClass('active');
            $('.checkout-buy').removeClass('active');
            $('.checkout-first').show();
            $(this).addClass('active');
        });
        $('.top_buy').click(function(){
            $(this).addClass('active');
            $('.checkout-buy').addClass('active');
            $('.checkout-first').hide();
            $('.top_cart').removeClass('active');
        });
    }
}

function votephoto(){
    $('.upload-photo').click(function(){
        $('.order-inp').click();
    })
}

function shopsMap(){
    $('.shops-item .top').click(function(){
        $(this).closest('.shops-item').toggleClass('active').siblings().removeClass('active');
    })
}

function brandSlider() {
    var swiper = new Swiper('.brand-slider', {
        speed: 800,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.brand-slider .swiper-pagination',
            clickable: true,
        },
    });
}

function giftCard(){
    $('.select-btn').click(function(){
       $(this).addClass('active').siblings('.select-btn').removeClass('active');
    });
}

function slick(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 3,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows:true,
        prevArrow: '<i class="fa fa-angle-left prev1"></i>',
        nextArrow: '<i class="fa fa-angle-right next1"></i>',
    });

}

function searchDrop(){
    $('.search-menu .dropdown-item').click(function(){
        var catText = $(this).html();
        $(this).closest('.dropdown').find('span').html(catText);
    })
}

function prodSize(){
    $('.sizes-item').click(function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    })
}

function moreProd(){
    $('.menu_desc .see-more').click(function(){
        $(this).hide();
        $(this).closest('.menu_desc').find('.more-block').addClass('active');
    });
    $('.close-btn').click(function(){
        $('.see-more').show();
        $(this).closest('.more-block').removeClass('active');
    });
}

//product

function likeSlider() {
    var swiper = new Swiper('.like-container', {
        slidesPerView: 5,
        spaceBetween: 60,
        navigation: {
            nextEl: '.like-prod_content .swiper-button-next',
            prevEl: '.like-prod_content .swiper-button-prev',
        },
        breakpoints: {
            1799: {
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
        }
    });
}

function others() {
    var swiper = new Swiper('.others-container', {
        slidesPerView: 5,
        spaceBetween: 60,
        navigation: {
            nextEl: '.others-cont .swiper-button-next',
            prevEl: '.others-cont .swiper-button-prev',
        },
        breakpoints: {
            1799: {
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
        }
    });
}


function onPasswordEyeClick() {
    $('.password-eye').click(function () {
        var passInput = $(this).closest('div').find('.password-eye-input');
        var isHidden = passInput.attr('type');
        if (isHidden == 'password'){
            passInput.attr('type','text');
        }else{
            passInput.attr('type','password');
        }
    });
}

onPasswordEyeClick();

function saleBanner(){
    $('.close-sale').click(function(){
       $(this).closest('.checkout-saleBAnner').css('display', 'none !important');
    });
}

