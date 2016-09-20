/**
 * 
 * @authors H君
 * @date    2016-09-20 15:41:37
 * @version 1.0
 */

!function($,window) {

	"use strict";

	var Lazyload=function(element, options){

		this.options = options;
		this.$element = $(element);
		this.clientHeight = $(window).height();
		this.init(this.$element);

	}

	Lazyload.prototype.init = function($element){

		var _self = this;
	    	
        //默认执行一次
        setTimeout(function(){
            _self.load($element);
        },0);

        //绑定滚动事件
        $(window).scroll(function () {
		  setTimeout(function(){
            	_self.load($element);
            },0);
		});
	}

	Lazyload.prototype.load = function($element){

		var _self = this;

		$element.each(function(){

            var $self = $(this);
            var offset_top = $(this).offset().top;

            //计算出已划过的高度
            var scroll_height = _self.clientHeight + $(document).scrollTop();

            //判断是否在可视内区域
            if(offset_top <= scroll_height){
                _self.options.in($self)
            }else{
            	_self.options.out($self)
            }

        });

	}

	$.fn.Lazyload = function(option) {

		//默认参数
		var element = this;
		var options = $.extend($.fn.Lazyload.defaults, option);

		return this.each(function () {
           new Lazyload(this, options);
		})
		
	}

	$.fn.Lazyload.defaults={
		in  : function() {},
		out : function() {}
	}


	
}(window.jQuery || window.Zepto,window);