;$(function(){

	AOS.init({
		once: false,
		//startEvent: 'load',
		offset: 100,
		disable: function() {
			//var maxWidth = 1024;
			//return window.innerWidth < maxWidth;
		}
	});
	
	$('.dim_pop01').on('click', function() {
		$('.modal-wrapper01').toggleClass('open');
		return false;
	});
	$('.dim_pop02').on('click', function() {
		$('.modal-wrapper02').toggleClass('open');
		return false;
	});
	$('.dim_pop03').on('click', function() {
		$('.modal-wrapper03').toggleClass('open');
		return false;
	});

	$(window).scroll(function () {
		var st = $(this).scrollTop()
		if (st >= 1) {
			$('#header').addClass('scroll')
		} else {
			$('#header').removeClass('scroll')
		}
	})
	
	$(window).resize(function(){
		$("#header .menu_box .dep2_wrap").css("height", "auto");
	});
	
	$("#header .menu_box .dep1").hover(function(){
		if($(window).width() > 1024) {
			$("#header .menu_box .dep2_wrap").stop().slideUp("300");
			$(this).children(".dep2_wrap").stop().slideDown("300");
		}
	}, function(){
		if($(window).width() > 1024) {
			$("#header .menu_box .dep2_wrap").stop().slideUp("300");
		}
	});
	
	var st1, st2;
	$("#header .menu_btn").click(function(){
		$(this).toggleClass("on");
		if($(this).hasClass("on")) {
			$("#header").addClass("on");
			clearTimeout(st2);
			$("#header .menu_box").show();
			st1 = setTimeout(function(){
				$("#header .menu_box").addClass("on");
			}, 10);
		}else {
			$("#header").removeClass("on");
			clearTimeout(st1);
			$("#header .menu_box").removeClass("on");
			st2 = setTimeout(function(){
				$("#header .menu_box").hide();
				$("#header .menu_box .dep1 > a").removeClass("on");
				$("#header .menu_box .dep2_wrap").stop().slideUp();
			}, 300);
		}
	});



	$("#header .menu_box .dep1.arrow > a").click(function() {
		if( $(window).width() < 1024 ) {
			if ($("#header .menu_box .dep1 ul").hasClass("dep2_wrap")) {
				if( $(this).hasClass('on') ){
					$('#header .menu_box .dep1 > a').removeClass('on');
					$('#header .menu_box .dep2_wrap').stop().slideUp();
				}else{
					$('#header .menu_box .dep1 > a').removeClass('on');
					$('#header .menu_box .dep2_wrap').stop().slideUp();
					$(this).addClass('on');
					$(this).next().stop().slideDown();
				}
			}
		}
	})
});


// $.ajax({
//     url: '/api/newscategory/$namelist',
//     method: 'GET'
// }).done(function (d) {
//     var sHtml = '';
//     sHtml += '<li class="m_show"><a href="/insight"  data-nosnippet="data-nosnippet">전체보기</a></li>';
//     $.each(d.result.categoryList, function () {
//         sHtml += '<li><a href="/insight/detail_list/' + this.Id + '"  data-nosnippet="data-nosnippet">' + this.Name + '</a></li>';
//     });
//     sHtml += '<li><a href="/inquiry/newsletter" data-nosnippet="data-nosnippet">NEWSLETTER</a></li>';
//     $(sHtml).appendTo('#newsMenu');
// }).fail(function (jqXHR, textStatus, errorThrown) {
//     $('#newsMenu').hide();
// });

