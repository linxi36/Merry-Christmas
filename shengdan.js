function bindEvent(){
    $('.boxBottom').on('click',function(){
    	$('.box').addClass('shake');
    	$('audio')[0].play();
    	setTimeout(function(){
          $('.box').removeClass('shake');
          $('.box').addClass('fly');
          $('.wrapper').addClass('show');
          init();
    	},1000);
    })
}
bindEvent();

function random(low,high){
	return low +Math.floor(Math.random()*(high-low));
}
function init(){
	for(var i =0;i<200;i++){
		$('.wrapper').append(createSnow());
	}
}
function createSnow(){
	var p =Math.random()>0.5?1:2;
	var snow =$('<div class="snow"><img src="./img/snow'+ p +'.png"</div>');
	snow.css({
		'left':random(0,1500)+"px",
		'animationDelay':random(0,5)+'s',
		'animationDuration':random(4,10)+'s',
	});
	return snow;
}