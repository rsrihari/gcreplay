(function($) {
    $.fn.fbAlbum = function(f) {
        var g = this;
        var h = {'limit': 100, 'ulClass': 'thumbnails', 'callback': '', 'title': true};
        if (f) {
            $.extend(h, f)
        }
        var i = "https://graph.facebook.com/" + h.albumID + "/photos?limit=" + h.limit + "&callback=?";
        $.getJSON(i, function(a) {
            var b = [];
            for (var c in a) {
                for (var d in a[c]) {
                    val2 = a[c][d];
                    if (typeof(val2.source) != "undefined") {
                        var e = "";
                        if (h.title && val2.name) {
                            e = val2.name
                        }
                        b.push('<li><a href = "' + val2.source + '" class="thumbnail"><img src="' + val2.picture + '"></a></li>')

                    }
                }
            }
            ;
            $('<ul />', {'class': h.ulClass, html: b.join('')}).appendTo(g);
            if (h.callback) {
                h.callback()
            }
        }
        );
        return this
    }
})(jQuery);

