//面向对象方法
(function($) {
function PreLoad(imgs, options) {
    this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;

    this.opts = $.extend(PreLoad.DEFAULTS, options);

    this._unoredered();
}

PreLoad.DEFAULTS = {
    each: null, //加载每一张执行
    all: null //加载所有执行
};

PreLoad.prototype._unoredered = function() {

    var imgs = this.imgs,
        opts = this.opts,
        count = 0,
        len = imgs.length;

    $.each(imgs, function(i, src) {
        if (typeof src != 'string') return;
        var imgObj = new Image();

        $(imgObj).on('load error', function() {

            opts.each && opts.each(count);
            if (count >= len - 1) {
                opts.all && opts.all();
            }

            count++;
        });

        imgObj.src = src;
    });
};

//做成jq插件
$.extend({
    preload: function(imgs, opts) {
        new PreLoad(imgs, opts);
    }
});
})(jQuery);