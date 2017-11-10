//普通方式预加载
var imgs = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/6.png',
    'img/7.png',
    'img/8.ng',
];

(function($) {

var index = 0,
    len = imgs.length,
    count = 0,
    $process = $('.process');

$.each(imgs, function(i, src) {
    var imgObj = new Image();

    $(imgObj).on('load error', function() {

        $process.html(Math.round((count + 1) / len * 100) + '%');
        if (count >= len - 1) {
            $('.loading').hide();
            document.title = '1/' + len;
        }

        count++;
    });

    imgObj.src = src;
});

$('.btn').on('click', function() {
    if ('prev' === $(this).data('control')) {
        index = Math.max(0, --index);
    } else {
        index = Math.min(len - 1, ++index);
    }
    document.title = (index + 1) + '/' + len;
    $('#img').attr('src', imgs[index]);
});
})(jQuery);