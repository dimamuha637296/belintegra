$(document).ready(function(){
/*
	if ($(".owl-carousel-product-slider").length > 0) {
		$(".owl-carousel-product-slider").owlCarousel({
			items:2,
			margin: 15,
			responsive:{
				0:{
					items:1,
					stagePadding:80,
				},
				575:{
					items:2,
					stagePadding:80,
				}
			},
			loop:true
		});
	}
*/
	if ($(".owl-carousel-main-slider").length > 0) {
		$(".owl-carousel-main-slider").owlCarousel({
			items:1,
			loop:true,
			// nav:true,
			navText: ['',''],
			responsive : {
				0 : {
					nav: false
				},
				992 : {
					nav: true
				}
			}
		});
	}
	
	if ($(".owl-carousel-partners-slider").length > 0) {
		$(".owl-carousel-partners-slider").owlCarousel({
			/*items:9,*/
			autoplay:true,
    		autoplayTimeout:2000,
			responsive:{
				0:{
					items:1,
					stagePadding:80,
				},
				575:{
					items:4,
					stagePadding:80,
				},
				1280:{
					items:9,
					stagePadding:0,
				}
			},
			loop:true,
			/*nav:true*/
		});
	}
	
	if ($(".owl-carousel-banner-slider").length > 0) {
		$(".owl-carousel-banner-slider").owlCarousel({
			/*items:9,*/
			responsive:{
				0:{
					items:1,
					stagePadding:40,
				},
				575:{
					items:2,
					stagePadding:40,
				},
				1280:{
					items:3,
					stagePadding:40,
				}
			},
			loop:true,
			/*nav:true*/
		});
	}

	
	if ($(".owl-carousel-catalog-menu-slider").length > 0) {
		$(".owl-carousel-catalog-menu-slider").owlCarousel({
			items:9,
			loop:true,
			//nav:true
		});
	}
	
	if ($(".owl-carousel-company_digits-slider").length > 0) {
		$(".owl-carousel-company_digits-slider").owlCarousel({
			/*items:9,*/
			responsive:{
				0:{
					items:1,
					stagePadding:40,
				},
				575:{
					items:2,
					stagePadding:40,
				},
				1280:{
					items:3,
					stagePadding:40,
				}
			},
			loop:true,
			/*nav:true*/
		});
	}
	
	if ($(".owl-carousel-company_adv-slider").length > 0) {
		$(".owl-carousel-company_adv-slider").owlCarousel({
			/*items:9,*/
			responsive:{
				0:{
					items:1,
					stagePadding:40,
				},
				575:{
					items:2,
					stagePadding:40,
				},
				1280:{
					items:3,
					stagePadding:40,
				}
			},
			loop:true,
			/*nav:true*/
		});
	}
	
	if ($(".owl-portfolio_item-slider").length > 0) {
		$(".owl-portfolio_item-slider").owlCarousel({
			/*items:9,*/
			responsive:{
				0:{
					items:1,
					stagePadding:30,
				},
				768:{
					items:1,
					stagePadding:80,
				},
				992:{
					items:1,
					stagePadding:200,
				}
			},
			loop:true,
			/*nav:true*/
		});
	}
	
	if ($(".owl-carousel-mp2-slider").length > 0) {
		$(".owl-carousel-mp2-slider").owlCarousel({
			/*items:9,*/
			autoplay: true,
      		autoplayTimeout: 3000,
			responsive:{
				0:{
					items:1,
					stagePadding:40,
				},
				1280:{
					items:6,
					stagePadding:40,
				}
			},
			onInitialized: function(event) {
				setTimeout(function() {
					var w = $(".owl-carousel-mp2-slider .owl-item:eq(0)").width();
					$(".owl-carousel-mp2-slider .owl-item").css({'width':w + 'px'}).addClass('semiactive');
					$(".owl-carousel-mp2-slider .owl-item:eq(" + (event.item.index + 4) + ")").css({'width':(w * 2.5) + 'px'}).removeClass('semiactive');
					var title = $(".owl-carousel-mp2-slider .owl-item:eq(" + (event.item.index + 4) + ")").find('.title').html();
					$("#mp2-slider_title").html(title);
					setTimeout(function() {
						$(".owl-carousel-mp2-slider .owl-stage").css({'height': $(".owl-carousel-mp2-slider .owl-stage").height() + 'px'});
					}, 1000);
				}, 200);
			},
			onChanged: function(event){
				var w = $(".owl-carousel-mp2-slider .owl-item:eq(" + event.item.index + ")").width();
				$(".owl-carousel-mp2-slider .owl-item").css({'width':w + 'px'}).addClass('semiactive');
				$(".owl-carousel-mp2-slider .owl-item:eq(" + (event.item.index + 4) + ")").css({'width':(w * 2.5) + 'px'}).removeClass('semiactive');
				var title = $(".owl-carousel-mp2-slider .owl-item:eq(" + (event.item.index + 4) + ")").find('.title').html();
				$("#mp2-slider_title").html(title);
			},
			loop:true,

		});
	}
	
	$(document).on("mouseenter", ".top_main_menu a", function(){
		if($(this).hasClass("active")) return;
		$(".top_main_menu a").removeClass("active");
		$(this).addClass("active");
		var target = $(this).data("target");
		if($(".top_submenu_wrapper .top_" + target).length > 0) {
			$(".top_submenu_wrapper").stop().fadeIn();
			$(".top_submenu_wrapper .top_submenu").stop().fadeOut(50);
			$(".top_submenu_wrapper .top_" + target).stop().fadeIn();
		} else {
			$(".top_submenu_wrapper .top_submenu").stop().fadeOut(50);
			$(".top_submenu_wrapper").stop().fadeOut();
		}
	})
	$(document).on("mouseleave", ".top_menu", function(){
		$(".top_main_menu a").removeClass("active");
		$(".top_submenu_wrapper .top_submenu").stop().fadeOut(50);
		$(".top_submenu_wrapper").stop().fadeOut(50);
	})

	$(document).on("mouseenter", ".submenu_main_items a", function(e){
		if($(this).hasClass("active")) return;
		var target = $(this).data("target");
		$(".submenu_main_items a").removeClass("active");
		$(this).addClass("active");
		$(".submenu_inner_items .submenu_inner_item").stop().hide();
		$(".submenu_inner_items .submenu_inner_item" + target).stop().fadeIn(200);
	})

	$(document).on("click", ".mob_main_menu>ul>li.with_subs>a", function(e){
		e.preventDefault();
		$(this).parents(".with_subs").toggleClass("active");
	})

	$(document).on("click", ".js-tab-switcher", function(e){
		e.preventDefault();
		if($(this).hasClass("active")) return;
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
	
	$(document).on("click", ".mp_catalog_menu_main_mob .menu_item", function(e){
		e.preventDefault();
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).next(".mp_catalog_tab").hide().removeClass("active");
		} else {
			$(this).addClass("active");
			$(this).next(".mp_catalog_tab").show().addClass("active");
		}
	})
	
	$(document).on("click", ".js-tab-switcher-mob", function(e){
		e.preventDefault();
		$(this).parents(".js_tab").toggleClass("active");
	})
	
	$(document).on("click", ".catalog_switcher_item", function(e){
		e.preventDefault();
		if($(this).hasClass("active")) return;
		var target = $(this).data("target");
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(".catalog_list_wrapper").stop().hide();
		$(".catalog_list_wrapper." + target).stop().fadeIn(350);
	})
	
	$(document).on("click", ".filter_wrapper .filter_block .filter_block_title", function(e){
		e.preventDefault();
		$(this).parents(".filter_block").toggleClass("active");
	})
	$(document).on("click", ".close_btn", function(e){
		e.preventDefault();
		$(this).parents(".close_btn_target").removeClass("active");
	})
	
	$(document).on("click", ".mob_top_menu", function(e){
		e.preventDefault();
		$(".mob_top_menu_wrapper").toggleClass("active");
	})
	
	$(document).on("click", ".mob_catalog_selector .mob_catalog_selected", function(e){
		e.preventDefault();
		$(".mob_catalog_categories_menu").toggleClass("active");
	})
	
	$(document).on("click", ".mob_filter_selector", function(e){
		e.preventDefault();
		$(".filter_wrapper").toggleClass("active");
	})
	
	$(document).on("click", ".show_full a", function(e){
		e.preventDefault();
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".model_list table").addClass("unactive");
		} else {
			$(this).addClass("active");
			$(".model_list table").removeClass("unactive");
		}
	})
	
	$(document).on("click", ".aside_menu>ul>li>a .pic", function(e){
		e.preventDefault();
		var li = $(this).parents("li");
		if(li.hasClass("active")) {
			li.find("ul").stop().slideUp(150, function(){
				li.removeClass("active");
			});
		} else {
			li.find("ul").stop().slideDown(150, function(){
				li.addClass("active");
			});
		}
	})
	
	$(document).on("click", ".password_eye", function(e){
		e.preventDefault();
		var field = $(this).parents(".form_field").find("input");
		field.attr('type') == 'password' ? field.attr('type', 'text') : field.attr('type', 'password');
	})
	
	$(document).on("click", ".add_model_btn a", function(e){
		e.preventDefault();
		var html = $("#model_row_empty").html();
		$("#model_row_empty").parents("table").append('<tr>' + html + '</tr>');
		var rows = $("#model_row_empty").parents("table").find("tr").length - 1;
		$(".lk_reg_step_model_count span.count").html(rows);
		$("#model_row_empty").parents("table").find("tr:last .jq-selectbox__select").remove();
		$("#model_row_empty").parents("table").find("tr:last .jq-selectbox__dropdown").remove();
		$("select.styler").styler();
		//see steps.js
		steps.checkRequired();
	})
	
	$(document).on("click", ".lk_reg_step_delete_row", function(e){
		e.preventDefault();
		$(this).parents("tr").remove();
		var rows = $("#model_row_empty").parents("table").find("tr").length - 1;
		$(".lk_reg_step_model_count span.count").html(rows);
		//see steps.js
		steps.checkRequired();
		if (rows < 1) {
			//если не осталось ни одной строки - делаем неактивной кнопку "продолжить"
			steps.setUnActiveNext();
		}
	})
	
	$(document).on("click", ".lk_obj_list_search_wrapper .selector_wrapper .switch_filter", function(e){
		e.preventDefault();
		$(this).parents(".selector_wrapper").toggleClass("active");
	})
	
	$(document).on("click", ".top_phone .top_phone_icon", function(e){
		e.preventDefault();
		$(this).parents(".top_phone").toggleClass("active");
		if($(this).parents(".top_phone").hasClass("active")) {
			$(".top_phones_wrapper").stop().fadeIn(300);
		} else {
			$(".top_phones_wrapper").stop().fadeOut(300);
		}
	})
	
	$(document).on("click", ".chat_block .chat_button_close", function(e){
		e.preventDefault();
		$(this).parents(".chat_block").toggleClass("active");
	})
	$(document).on("click", ".chat_block .show_chat", function(e){
		e.preventDefault();
		$(this).parents(".chat_block").toggleClass("active");
	})
	
	$(document).on("click", ".scroll_btn", function(e){
		e.preventDefault();
		if ($(this).data("scroll") == 'top') {
			$("html,body").animate({'scrollTop' : 0}, 250);
		} else {
			$("html,body").animate({'scrollTop' : $("footer").offset().top}, 250);
		}
	})

	$(document).on("click", ".js-go-click", function(e){
		if( $(e.target).closest("a").length == 0) {//нажали не на ссылку
			location.href = $(this).data("url");
		}
	})
	
	
	if($(".datepicker").length > 0) {
		$( ".datepicker" ).datepicker();
	}
	$("select.styler").styler();

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
				$("#" + a.data("target")).css({'opacity':'0.5'});
			},
			success: function (msg) {
				var result = msg.output || '';
				$("#" + a.data("target")).html(result);
				$("#" + a.data("target")).animate({'opacity':'1'}, 150);
			}
		})
	});

	$(window).on("scroll", function(){
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

		function setSimilarSlidesHeight(slider) {
			'use strict';
			var slides = slider.find('.slide');
			if (slides.length > 0) {
				var maxHeight = 0;
				slides.each(function () {
					var slide = $(this);
					slide.css('height', '');
					var slideHeight = slide.outerHeight();
					if (maxHeight < slideHeight) {
						maxHeight = slideHeight;
					}
				});
				slides.css('height', maxHeight);
			}
		}

		function setSlidesHeight(slider) {
			if (typeof setSimilarSlidesHeight === 'function') {
				setSimilarSlidesHeight(slider);
			}
		}

		//https://github.com/kenwheeler/slick/
		function initSlider() {
			var block = $('.sl-products');
			if (!block.length || !$.fn.slick) {
				return false;
			}
			block.each(function () {
				var self = $(this);
				var slider = self.find('.slider');
				var slidesLength = slider.find('.slide').length;
				var pager = self.find('.js-sl-pager');
				var sliderWrap = self.find('.wrap');
				var prev = self.find('.prev');
				var next = self.find('.next');
				sliderWrap.removeClass('inited-not');
				slider.on('setPosition', function () {
					setSlidesHeight(slider);
				});
				slider.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: false, // true - height: auto
					autoplay: false,
					autoplaySpeed: 7000,
					speed: 500,
					arrows: slidesLength > 1,
					dots: slidesLength > 1,
					appendDots: pager,
					dotsClass: 'list-reset', // pager class
					nextArrow: next,
					prevArrow: prev
				});
				sliderWrap.addClass('inited');
			});
		}

		$(function () {
			initSlider();
		});
	}();

})