$("#toggle").click(
		function(event) {
			event.preventDefault(),
				$(this).find(".top").toggleClass("active"),
				$(this).find(".middle").toggleClass("active"),
				$(this).find(".bottom").toggleClass("active"),
				$("#overlay").toggleClass("open"),
				$(".main-content").toggleClass("active"),
				$(".right-menu").toggleClass("active")
		}
	),

	$(".main-content").click(function() {
		if ($(".main-content").attr("class").split(" ").length == 2) {
			$("#toggle").trigger("click");
		};
	});
(function() {
	var getEle = $('.content').find('h1,h2');
	var a = getEle.length;
	for (var i = 0; i < a;) {
		var tag = "tag" + i;
		getEle.eq(i).addClass(tag);
		getEle.eq(i).attr('id', tag);
		var temp = '<li ><a class="a' + i + '" href="#tag' + i + '">' + getEle.eq(i).html() + '</a>   <ul class="nav">';
		i = i + 1;
		while ((i < a) && (getEle.eq(i).is('h2'))) {
			var tag = "tag" + i;
			getEle.eq(i).addClass(tag);
			getEle.eq(i).attr('id', tag);
			temp += '<li> <a class = "a' + i + ' sub" href = "#tag' + i + '" > ' + getEle.eq(i).html() + ' </a> </li>';
			i++;
		}
		temp += '</ul></li>';
		$(".right-menu-ul").append(temp);
	}
	$('.content').find('h1,h2').each(function() {
		new Waypoint({
			element: this,
			handler: function(direction) {
				var num = '.a' + $(this.element).attr("class").charAt(3);
				$('.right-menu-ul a').removeClass('active');
				$('.right-menu-ul ul').removeClass('active');
				$('.right-menu-ul li ul li').removeClass('active');
				if ($(num).hasClass("sub")) {
					$(num).parent().parent().addClass("active");
				}
				$(num).addClass("active");
				$(num).siblings("ul").addClass("active");

			},
			continuous: false
		})
	})

})();

var totalList = $(".menu-li");
var input = $('.search');
input.bind('keyup', sendKeyWord);
function sendKeyWord(e) {
	dealData($.trim(input.val()));
}
function dealData(text) {
	for (var i = 0; i < totalList.length; i++) {
		if (totalList.eq(i).text().toLowerCase().indexOf(text.toLowerCase()) < 0) {
			totalList.eq(i).hide();
		} else {
			totalList.eq(i).show();
		}
	}
}

var scroll = function(event,scroller){
    var k = event.wheelDelta? event.wheelDelta:-event.detail*10;
    scroller.scrollTop = scroller.scrollTop - k;
    return false;
};