var steps = {
	start:function(){
		this.setTotal();
		this.setActive(1);
		this.bindBtns();
		this.bindChanges();
		//this.checkRequired();
	},
	setTotal: function(){
		$("#step_counter_total").html($(".lk_reg_step").length);
	},
	setActive: function(step) {
		if (step <= $(".lk_reg_step").length) {
			$("#step_counter_current").html(step);
			$(".step_counter_wrapper .step_counter").css({'width':(parseInt(step, 10) / parseInt($(".lk_reg_step").length, 10)) * 100 + '%'});
			$(".lk_reg_step_btns a.next_step").data("nextStep", (step + 1));
			this.changeStep(step);
		} else {
			this.postProcess();
		}
	},
	bindBtns: function() {
		var self = this;
		$(document).on("click", ".lk_reg_step_btns a.next_step", function(e){
			e.preventDefault();
			if(!$(this).hasClass("active")) {
				self.scrollToActive();
				return;
			}
			var nextStep = parseInt($(".lk_reg_step_btns a.next_step").data("nextStep"), 10) || 2;
			var prevStep = (nextStep - 2) || 1;
			self.setActive(nextStep)
		})
		$(document).on("click", ".lk_reg_step_btns a.back", function(e){
			e.preventDefault();
			var nextStep = parseInt($(".lk_reg_step_btns a.next_step").data("nextStep"), 10) || 2;
			var prevStep = (nextStep - 2) || 1;
			self.setActive(prevStep)
		})
	},
	bindChanges : function() {
		var self = this;
		$(document).on("change keyup keypress", ".lk_reg_step.active input.required, .lk_reg_step.active select.required", function(e){
			if ($(this).val() != '') {
				$(this).removeClass("invalid");
				self.checkRequired();
			}
		})
	},
	changeStep: function(step) {
		var self = this;
		if(!$(".lk_reg_step" + step).hasClass("active")) {
			$(".lk_reg_step").stop().fadeOut(50, function(){
				$(".lk_reg_step").removeClass("active");
				$(".lk_reg_step" + step).stop().fadeIn(150, function(){
					$(".lk_reg_step" + step).addClass("active");
					self.checkRequired();
					if (step > 1) {
						//открываем кнопку "назад"
						self.showBackBtn();
						//и мотаем к верху шага
						self.scrollToActive();
					} else {
						self.hideBackBtn();
					}
					if (step > 2) {
						//меняем класс ползунка, чтобы стал белый текст
						$(".step_counter_wrapper .step_counter_info").addClass("more_half");
					} else {
						$(".step_counter_wrapper .step_counter_info").removeClass("more_half");
					}
					if (step == 5) {
						self.setUnActiveNext();
					}
					if (step ==2) {
						self.bindMap();
					}
				});
			});
		} else {
			return;
		}
	},
	checkRequired: function() {
		var self = this;
		var s = $(document).find(".lk_reg_step.active");
		if (s.length == 1) {
			var fields = s.find("input.required, select.required");
			if (fields.length > 0) {
				var err = '';
				fields.each(function(){
					if($(this).val() == '' && $(this).parents(".do_not_check").length == 0) {
						$(this).addClass("invalid");
						err = 'error';
					}
				})
				if (err == '') {
					self.setActiveNext();
				} else {
					self.setUnActiveNext();
				}
			} else {
				//нет обязательных полей, сразу делаем активной кнопку "вперед"
				self.setActiveNext();
			}
		}
	},
	setActiveNext: function() {
		$(".lk_reg_step_btns a.next_step").addClass("active");
	},
	setUnActiveNext: function() {
		$(".lk_reg_step_btns a.next_step").removeClass("active");
	},
	showBackBtn: function() {
		$(".lk_reg_step_btns a.back").removeClass("d-none");
	},
	hideBackBtn: function() {
		$(".lk_reg_step_btns a.back").addClass("d-none");
	},
	scrollToActive: function() {
		var a = $(document).find("h1");
		if (a.length == 1) {
			$("html,document").animate({scrollTop:a.offset().top - 100}, 150);
		}
		
	},
	bindMap: function() {
		var self = this;
		$(document).on("click", ".steps_search_btn", function(e){
			var inp = $(this).closest('.form_field').find("input[name='obj_address']");

			if(inp.val() != '') {
				$("#reg_step_map").show();
				$("#reg_step_map #ymap").html('');
				initMap('53.914929,27.570913');
			} else {
				$("#reg_step_map #ymap").html('');
				$("#reg_step_map").hide();
			}
		});
	},
	postProcess: function() {
		alert('это последний был шаг. дальше отправка данных');
	}
}

$(document).ready(function(){
	steps.start();
})