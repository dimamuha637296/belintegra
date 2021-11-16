$(document).ready(function () {

    if ($(".owl-carousel-main-slider").length > 0) {
        $(".owl-carousel-main-slider").owlCarousel({
            items: 1,
            loop: true,
            // nav:true,
            navText: ['', ''],
            responsive: {
                0: {
                    nav: false
                },
                992: {
                    nav: true
                }
            }
        });
    }

    if ($(".owl-carousel-partners-slider").length > 0) {
        $(".owl-carousel-partners-slider").owlCarousel({
            /*items:9,*/
            autoplay: true,
            autoplayTimeout: scrollDelayPartners,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 80,
                },
                575: {
                    items: 4,
                    stagePadding: 80,
                },
                1280: {
                    items: 9,
                    stagePadding: 0,
                }
            },
            loop: true,
            /*nav:true*/
        });
    }

    if ($(".owl-carousel-banner-slider").length > 0) {
        $(".owl-carousel-banner-slider").owlCarousel({
            /*items:9,*/
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 40,
                },
                575: {
                    items: 2,
                    stagePadding: 40,
                },
                1280: {
                    items: 3,
                    stagePadding: 40,
                }
            },
            loop: true,
            /*nav:true*/
        });
    }

    if ($(".owl-carousel-catalog-menu-slider").length > 0) {
        $(".owl-carousel-catalog-menu-slider").owlCarousel({
            loop: true,
            responsive: {
                0: {
                    items: 6,
                },
                1200: {
                    items: 9,
                }
            },
            //nav:true
        });
    }

    if ($(".owl-carousel-company_digits-slider").length > 0) {
        $(".owl-carousel-company_digits-slider").owlCarousel({
            /*items:9,*/
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 40,
                },
                575: {
                    items: 2,
                    stagePadding: 40,
                },
                1280: {
                    items: 3,
                    stagePadding: 40,
                }
            },
            loop: true,
            /*nav:true*/
        });
    }

    if ($(".owl-carousel-company_adv-slider").length > 0) {
        $(".owl-carousel-company_adv-slider").owlCarousel({
            /*items:9,*/
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 40,
                },
                575: {
                    items: 2,
                    stagePadding: 40,
                },
                1280: {
                    items: 3,
                    stagePadding: 40,
                }
            },
            loop: true,
            /*nav:true*/
        });
    }

    !function () {
        'use strict';

        function popupGallery () {
            var gallery = $('.popup-gallery');
            if (!gallery.length) {
                return false;
            }
            var galleryLinks = gallery.find('.owl-item:not(.cloned) a');
            galleryLinks.magnificPopup({
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                closeOnContentClick: false,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                    tCounter: '<span class="mfp-counter">%curr% / %total%</span>',
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function () {
                        return false;
                    }
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function(element) {
                        return element.find('img');
                    }
                }
            });
        }

        //https://github.com/kenwheeler/slick/
        function initSlider() {
            if ($(".owl-portfolio_item-slider").length > 0) {
                $(".owl-portfolio_item-slider").owlCarousel({
                    /*items:9,*/
                    responsive: {
                        0: {
                            items: 1,
                            stagePadding: 30,
                        },
                        768: {
                            items: 1,
                            stagePadding: 80,
                        },
                        992: {
                            items: 1,
                            stagePadding: 200,
                        }
                    },
                    loop: true,
                    /*nav:true*/
                });
            }
        }

        $(function () {
            initSlider();
            popupGallery();
        });
    }();

    if ($(".owl-mp2-slider").length > 0) {
        $(".owl-mp2-slider").owlCarousel({
            /*items:9,*/
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 1,
                    stagePadding: 0,
                },
                768: {
                    items: 1,
                    stagePadding: 80,
                    dots: false
                },
                992: {
                    items: 1,
                    stagePadding: 100,
                    dots: false
                }
            },
            loop: true,
            autoplay: true,
            autoplayTimeout: scrollDelayPortfolio
        });
    }

    if ($(".owl-carousel-device-slider").length > 0) {
        $(".owl-carousel-device-slider").owlCarousel({
            responsive: {
                0: {
                    stagePadding: 25,
                },
                575: {
                    stagePadding: 35,
                },
                1280: {
                    stagePadding: 35,
                }
            },
            items: 1,
            dots: true,
            loop: true,
            margin: 10,
        });
    }

    $(document).on("mouseenter", ".top_main_menu a", function () {
        if ($(this).hasClass("active")) return;
        $(".top_main_menu a").removeClass("active");
        $(this).addClass("active");
        var target = $(this).data("target");
        if ($(".top_submenu_wrapper .top_" + target).length > 0) {
            $(".top_submenu_wrapper").stop().fadeIn();
            $(".top_submenu_wrapper .top_submenu").stop().fadeOut(50);
            $(".top_submenu_wrapper .top_" + target).stop().fadeIn();
        } else {
            $(".top_submenu_wrapper .top_submenu").stop().fadeOut(50);
            $(".top_submenu_wrapper").stop().fadeOut();
        }
    })
    $(document).on("mouseleave", ".top_menu", function () {
        $(".top_main_menu a").removeClass("active");
        $(".top_submenu_wrapper .top_submenu").stop().fadeOut(50);
        $(".top_submenu_wrapper").stop().fadeOut(50);
    })

    $(document).on("mouseenter", ".submenu_main_items a", function (e) {
        if ($(this).hasClass("active")) return;
        var target = $(this).data("target");
        $(".submenu_main_items a").removeClass("active");
        $(this).addClass("active");
        $(".submenu_inner_items .submenu_inner_item").stop().hide();
        $(".submenu_inner_items .submenu_inner_item" + target).stop().fadeIn(200);
    })

    $(document).on("click", ".mob_main_menu>ul>li.with_subs>a", function (e) {
        e.preventDefault();
        $(this).parents(".with_subs").toggleClass("active");
    })

    $(document).on("click", ".js-tab-switcher", function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) return;
        $(this).parents(".js_tab_menu").find(".js-tab-switcher").removeClass("active");
        $(this).addClass("active");
        var tabWrapper = $(this).data("tabWrapper");
        var tab = $(this).data("tab");
        if (tab == 'category_tab2') {
            $(".catalog_category_wrapper").addClass("catalog_category_model_list_active");
        } else {
            $(".catalog_category_wrapper").removeClass("catalog_category_model_list_active");
        }
        $("." + tabWrapper + " .js_tab").removeClass("active");
        $("." + tabWrapper + " .js_tab").fadeOut();
        $("." + tabWrapper + " .js_tab." + tab).fadeIn();
        /*console.log("hide - " + "." + tabWrapper + " .js_tab");
        console.log("show - " + "." + tabWrapper + " .js_tab." + tab);*/
    })

    $(document).on("click", ".mp_catalog_menu_main_mob .menu_item", function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).next(".mp_catalog_tab").hide().removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).next(".mp_catalog_tab").show().addClass("active");
        }
    })

    $(document).on("click", ".js-tab-switcher-mob", function (e) {
        e.preventDefault();
        $(this).parents(".js_tab").toggleClass("active");
    })

    $(document).on("click", ".catalog_switcher_item", function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) return;
        var target = $(this).data("target");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".catalog_list_wrapper").stop().hide();
        $(".catalog_list_wrapper." + target).stop().fadeIn(350);
    })

    $(document).on("click", ".filter_wrapper .filter_block .filter_block_title", function (e) {
        e.preventDefault();
        $(this).parents(".filter_block").toggleClass("active");
    })
    $(document).on("click", ".close_btn", function (e) {
        e.preventDefault();
        $(this).parents(".close_btn_target").removeClass("active");
    })

    $(document).on("click", ".mob_top_menu", function (e) {
        e.preventDefault();
        $(".mob_top_menu_wrapper").toggleClass("active");
    })

    $(document).on("click", ".mob_catalog_selector .mob_catalog_selected", function (e) {
        e.preventDefault();
        $(".mob_catalog_categories_menu").toggleClass("active");
    })

    $(document).on("click", ".mob_filter_selector", function (e) {
        e.preventDefault();
        $(".filter_wrapper").toggleClass("active");
    })

    $(document).on("click", ".show_full a", function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).closest(".model_list").find("table").addClass("unactive");
        } else {
            $(this).addClass("active");
            $(this).closest(".model_list").find("table").removeClass("unactive");
        }
    })

    $(document).on("click", ".aside_menu>ul>li>a .pic", function (e) {
        e.preventDefault();
        var li = $(this).parents("li");
        if (li.hasClass("active")) {
            li.find("ul").stop().slideUp(150, function () {
                li.removeClass("active");
            });
        } else {
            li.find("ul").stop().slideDown(150, function () {
                li.addClass("active");
            });
        }
    })

    $(document).on("click", ".password_eye", function (e) {
        e.preventDefault();
        var field = $(this).parents(".form_field").find("input");
        field.attr('type') == 'password' ? field.attr('type', 'text') : field.attr('type', 'password');
    })

    $(document).on("click", ".add_model_btn a", function (e) {
        e.preventDefault();
        var html = $("#model_row_empty").html();
        $("#model_row_empty").parents(".lk_reg_step5_table_inner").append('<div class="model_row">' + html + '</div>');
        var rows = $("#model_row_empty").parents(".lk_reg_step5_table_inner").find(".model_row:not(.model_row_empty)").length;
        $(".lk_reg_step_model_count span.count").html(rows);
        $("#model_row_empty").parents(".lk_reg_step5_table_inner").find(".model_row:last .jq-selectbox__select").remove();
        $("#model_row_empty").parents(".lk_reg_step5_table_inner").find(".model_row:last .jq-selectbox__dropdown").remove();
        $("select.styler").styler();
        //see steps.js
        steps.checkRequired();
    })

    $(document).on("click", ".create_model_btn a", function (e) {
        e.preventDefault();
        $(this).parent('.create_model_btn').addClass('active');
        var html = $("#model_row_empty2").html();
        $("#model_row_empty2").parents(".lk_reg_step5_table_inner").append('<div class="model_row model_row2">' + html + '</div>');
        var rows = $("#model_row_empty2").parents(".lk_reg_step5_table_inner").find(".model_row:not(.model_row_empty)").length;
        $(".lk_reg_step_model_count span.count").html(rows);
        $("#model_row_empty2").parents(".lk_reg_step5_table_inner").find(".model_row:last .jq-selectbox__select").remove();
        $("#model_row_empty2").parents(".lk_reg_step5_table_inner").find(".model_row:last .jq-selectbox__dropdown").remove();
        $("select.styler").styler();
        //see steps.js
        steps.checkRequired();
    })

    $(document).on("click", ".lk_reg_step_delete_row", function (e) {
        e.preventDefault();
        $(this).parents(".model_row").remove();
        var rows = $("#model_row_empty").parents(".lk_reg_step5_table_inner").find(".model_row:not(.model_row_empty)").length;
        $(".lk_reg_step_model_count span.count").html(rows);
        //see steps.js
        steps.checkRequired();
        if (rows < 1) {
            //если не осталось ни одной строки - делаем неактивной кнопку "продолжить"
            steps.setUnActiveNext();
        }
    })

    $(document).on("click", ".lk_obj_list_search_wrapper .selector_wrapper .switch_filter", function (e) {
        e.preventDefault();
        $(this).parents(".selector_wrapper").toggleClass("active");
    })

    $(document).on("click", ".top_phone .top_phone_icon", function (e) {
        e.preventDefault();
        $(this).closest(".top_phone").toggleClass("active");
        if ($(this).closest(".top_phone").hasClass("active")) {
            $(".top_phones_wrapper").stop().fadeIn(300);
        } else {
            $(".top_phones_wrapper").stop().fadeOut(300);
        }
    })

    $(document).on("click", ".model_list table thead td .icon", function (e) {
        var td = $(this).closest("td");
        if (td.hasClass('active')) {
            td.removeClass('active');
        } else {
            td.siblings('td').removeClass("active");
            td.addClass("active");
        }
    })

    $(document).on("click", ".chat_block .chat_button_close", function (e) {
        e.preventDefault();
        $(this).parents(".chat_block").toggleClass("active");
    })
    $(document).on("click", ".chat_block .show_chat", function (e) {
        e.preventDefault();
        $(this).parents(".chat_block").toggleClass("active");
    })

    $(document).on("click", ".scroll_btn", function (e) {
        e.preventDefault();
        if ($(this).data("scroll") == 'top') {
            $("html,body").animate({'scrollTop': 0}, 250);
        } else {
            $("html,body").animate({'scrollTop': $("footer").offset().top}, 250);
        }
    })

    $(document).on("click", ".js-go-click", function (e) {
        if ($(e.target).closest("a").length == 0) {//нажали не на ссылку
            location.href = $(this).data("url");
        }
    })

    if ($(".datepicker").length > 0) {
        $(".datepicker").datepicker({
            dateFormat: 'dd.mm.yy'
        });
    }

    $("form.submitter").on("submit", function (e) {
        e.preventDefault();
        var a = $(this);
        var fd = a.serialize();
        /*console.log(fd);*/
        $.ajax({
            url: "ajax.php",
            data: fd,
            type: "POST",
            cache: false,
            dataType: 'json',
            beforeSend: function () {
                $("#" + a.data("target")).css({'opacity': '0.5'});
            },
            success: function (msg) {
                var result = msg.output || '';
                $("#" + a.data("target")).html(result);
                $("#" + a.data("target")).animate({'opacity': '1'}, 150);
            }
        })
    });

    $(window).on("scroll", function () {
        var h = $(window).height();
        var s = $("html,body").scrollTop();
        /*console.log(s + ' ' + h * 1)*/
        if (s > h * 1) {
            $(".scroll_block").stop().fadeIn(200);
        } else {
            $(".scroll_block").stop().fadeOut(200);
        }
    })

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    !function () {
        'use strict';

        var oWindow = $(window);

        function setMainPadding() {
            var header = $('.header');
            var main = $('.outer-bg');
            if (!header.length) {
                return false;
            }
            var position = header.css('position');
            var headerHeight = header.outerHeight();
            if (position === 'fixed') {
                main.css({
                    'padding-top': headerHeight
                });
            } else {
                main.css({
                    'padding-top': ''
                });
            }
        }

        var hamburgerDesctop = {
            init: function () {
                var header = $('.header');
                var hamburger = '.header .top_hamburger';
                var menu = 'header .top_menu_wrapper';

                $(window).off('scroll.hamburgerDesctop').on('scroll.hamburgerDesctop', function () {
                    if ((header.hasClass('header--scroll')) && (!$(menu).hasClass('active'))) {
                        $(menu).stop().fadeOut(300);
                    }
                    if (!header.hasClass('header--scroll')) {
                        $(hamburger).removeClass('active');
                        $(menu).removeClass('active').stop().fadeIn(300);
                    }
                });

                $(document).on("click", hamburger, function (e) {
                    e.preventDefault();
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        $(menu).removeClass('active').stop().fadeOut(300);
                    } else {
                        $(this).addClass('active');
                        $(menu).addClass('active').stop().fadeIn(300);
                    }
                })
            }
        }

        var scrollHeader = {
            init: function () {
                var header = $('.header');
                if (!header.length) {
                    return false;
                }

                $(window).off('scroll.scrollHeader').on('scroll.scrollHeader', function () {
                    var headerHeight = header.outerHeight();
                    var headerPosition = header.offset().top;
                    if (headerPosition > headerHeight) {
                        header.addClass('header--scroll');
                        setMainPadding();
                    } else {
                        header.removeClass('header--scroll');
                        setMainPadding();
                    }
                });
            }
        };

        $(function () {
            setMainPadding();
            scrollHeader.init();
            hamburgerDesctop.init();
        });

        oWindow.on('load', function () {
            setMainPadding();
        });

        oWindow.on('resize', function () {
            setMainPadding();
        });
    }();

    $(function () {
        if ($(".tablesorter").length > 0 && $.fn.tablesorter) {
            $(".tablesorter").tablesorter().bind('tablesorter-ready', function (e, table) {
                if ($("select.styler").length > 0) {
                    $("select.styler").styler({
                        onSelectClosed: function () {
                            if ($(this).closest('.tablesorter').length > 0) {
                                if ($(this).hasClass('changed')) {
                                    $(this).closest('.select-wrap').css('display', 'table');
                                    $(this).closest('.tablesorter-header-inner').css('display', 'inline-block');
                                } else {
                                    $(this).closest('.select-wrap').css('display', 'inline-block');
                                    $(this).closest('.tablesorter-header-inner').css('display', 'flex');
                                }
                            }
                        }
                    });
                }
            });
        } else {
            if ($("select.styler").length > 0) {
                $("select.styler").styler();
            }
        }
    });

    if ($(".jsCustomScrollbar").length && $.fn.mCustomScrollbar) {
        $(".jsCustomScrollbar.jsCustomScrollbar-x").mCustomScrollbar({
            axis: "x",
            theme: "dark"
        });
    }

    $(function () {
        if ($('.jsCounterUp').length) {
            var options = {
                useEasing: true,
                useGrouping: true,
                separator: ' ',
                decimal: '.',
                prefix: '',
                suffix: ''
            };
            $('.jsCounterUp').each(function() {
                var num = $(this).text();
                var counts = new CountUp(this, 0, num, 0, 4, options);
                counts.start();
            });
        }
    });

    !function () {
        'use strict';

        function hideSearch(search, searchField, timeout) {
            search.removeClass('active');
            searchField.trigger('blur');
            $('body').css('overflow', 'auto');

            if(timeout !== undefined) {
                clearTimeout(timeout);
            }
        }

        function initSearch() {
            var search = $('.search-head-5');
            if (!search.length) {
                return false;
            }
            search.each(function () {
                var self = $(this);
                var backdrop = self.find('.backdrop');
                var searchField = self.find('.field');
                var openSearchBtn = self.find('.btn-open');
                var closeSearchBtn = self.find('.btn-close');
                if (!backdrop.length || !searchField.length || !openSearchBtn.length || !closeSearchBtn.length) {
                    return false;
                }
                var timeout;
                openSearchBtn.off('click.search').on('click.search', function () {
                    $('body').css('overflow', 'hidden');
                    self.addClass('active');
                    if ($('html').hasClass('ie') === true) {
                        timeout = setTimeout(function () {
                            searchField.trigger('focus');
                        }, 800);
                    } else {
                        searchField.trigger('focus');
                    }
                });
                closeSearchBtn.off('click.search').on('click.search', function () {
                    hideSearch(self, searchField, timeout);
                });
                backdrop.off('click.search').on('click.search', function () {
                    hideSearch(self, searchField, timeout);
                });
                $(window).on('resize', function () {
                    hideSearch(self, searchField, timeout);
                });
            });
        }

        $(function () {
            initSearch();
        });
    }();

})