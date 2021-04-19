/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version 
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() { 
	//Preloader 
	$('#status').delay(300).fadeOut(); 
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
	validationFun()

})


$(document).ready(function() {
		//animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake");
		});
		
		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});
		
		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		});
		wow.init();
		
		//MagnificPopup
		$('.image-link').magnificPopup({type:'image'});


		// OwlCarousel N1
		$("#owl-demo").owlCarousel({
			autoPlay: 3000,
			items : 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});

		// OwlCarousel N2
		$("#owl-demo-1").owlCarousel({
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		});

		//SmothScroll
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body').animate({scrollTop: targetOffset}, 600);
							return false;
					}
			}
		});
		
		//Subscribe
		new UIMorphingButton( document.querySelector( '.morph-button' ) );
		// for demo purposes only
		[].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) { 
			bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
		} );

});
//判断是否有验证码存在
function validationFun() {
	const getData = getStorage() //获取数据
	if (getData == null) {
        initialize()//初始化
    }
	const url =  window.location.href
	const toggle = ifStorage()
	if(toggle || url.indexOf("validation.html")>1) {
		return
	}
	window.location.replace("./validation.html")
	// const validation = {
	// 	time:new Date().getTime(),
	// 	errorNumber:0,
	// 	isValidation:true
	// }
	// localStorage.setItem("validation",JSON.stringify(storage))
}
//事件监听
function eventFun(event) {
	$('.navbar-collapse').removeClass('collapse in').addClass('collapse')

}
//查询验证存储
function getStorage() {
    const validationObj = sessionStorage.getItem("validationObj")
    return JSON.parse(validationObj)
}
//设置验证存储
function setStorage(obj) {
    sessionStorage.setItem("validationObj",obj)
}
//判断是否已经验证
function ifStorage() {
    const validationObj = getStorage()
    return validationObj &&  validationObj.isValidation //验证结果
}
//初始化数据
function initialize() {
	const initObj = {
		time: null,
		errorNumber: 5,
		isValidation: false
	}
	setStorage(JSON.stringify(initObj))
}

