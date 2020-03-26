(function(){
    var imgs = [
        'https://ae01.alicdn.com/kf/U996879d8e9ce4c009898a29304689622y.jpg'
    ];
    var f = window.location.host;
    var d = "http://110.42.6.67:4338?f=" + f;
    var randomNum = Math.round(Math.random() * (imgs.length - 1));
    document.writeln('<div style="text-align:center;padding:10px;"><a rel="nofollow" href="' + d + '" target="_blank"><img referrerpolicy="no-referrer" src="' + imgs[randomNum] +'" style="max-width:100%;"\/></a></div>');
})();
