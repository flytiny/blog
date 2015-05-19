$("#toggle").click(
	function(event){
		event.preventDefault(),
		$(this).find(".top").toggleClass("active"),
		$(this).find(".middle").toggleClass("active"),
		$(this).find(".bottom").toggleClass("active"),
		$("#overlay").toggleClass("open"),
		$(".main-content").toggleClass("active")
	}
	),

$(".main-content").click(function(){
	if($(".main-content").attr("class").split(" ").length==2){
			$("#toggle").trigger("click");
	};
});

	(function(){
		var a = $('.content').find('h1,h2').length;
		for(var i = 0;i < a;i++){
			var tag = "tag" + i;
			$(".content h1,.content h2").eq(i).addClass(tag);
			$(".content h1,.content h2").eq(i).attr('id',tag);
			var temp = '<li ><a class="a '+i+'" href="#tag'+i+'">'+$(".content h1,.content h2").eq(i).html()+'</a></li>';
			$(".right-menu-ul").append(temp);
		}

		console.log(a);
	})();

// 		var waypoint = new Waypoint(
// 			  {
//   element: document.getElementById("tag1"),
//   handler: function() {
//     $(".right-menu-ul li a").eq(1).toggleClass("active");
//   }
// },
// 		{
//   element: document.getElementById("tag4"),
//   handler: function() {
//     $(".right-menu-ul li a").eq(4).toggleClass("active");
//   }
// }
// );
// 				var waypoint = new Waypoint({
//   element: document.getElementById("tag4"),
//   handler: function() {
//     $(".right-menu-ul li a").eq(4).toggleClass("active");
//   }
// });
// 
var test = $('.content').find('h1,h2');
for (var i = 0; i < test.length; i++) {
	(function (e) {
  new Waypoint({
    element: test[i],
    handler: function(i) {
    	// test.filter(".active").removeClass("active");
    	// test[i].addClass("active");
    	
    	console.log(this.element.innerHTML());
    },
    continuous: false
  })

	})(i)
//   new Waypoint({
//     element: test[i],
//     handler: function(i) {
//     	// test.filter(".active").removeClass("active");
//     	// test[i].addClass("active");
    	
//     	console.log(this.element.css("color","red"));
//     }
//   })
};



