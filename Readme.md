Lazyload 文档
====================
插件说明：
-
支持`移动端` 、`PC端`，引入 `<Zepto.js> `或`<jQuery.js> `即可。
DOM结构
-
	<img  class="load-img" data-img='images/1.jpg'>
	<img  class="load-img" data-img='images/2.jpg'>
	<img  class="load-img" data-img='images/3.jpg'>
	<img  class="load-img" data-img='images/4.jpg'>
	<img  class="load-img" data-img='images/5.jpg'>
	<img  class="load-img" data-img='images/6.jpg'>
	<img  class="load-img" data-img='images/7.jpg'>
	<img  class="load-img" data-img='images/8.jpg'>

JS调用
-
	$('[data-img]').Lazyload({
		in:function($self){
			var url = $self.data('img');
			$self.attr({
				src: url
			}).addClass('show');
		}
	});
	
参数配置
-

    in:  function(){},   //进入可视区域
    out:  function(){}   //不在可视区域
