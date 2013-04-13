(function($) {
    $.fn.fbAlbum = function(f) {
        var g = this;
        var h = {'limit': 100, 'divClass': '', 'callback': '', 'title': true};
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
                        console.log('ajay');
                        b.push('<div class="span2 thumbnail" style="height: 100px;"><a href = "' + val2.source + '"><center><img style="height: 100px;" src="' + val2.picture + '"></a></center></div>')

                    }
                }
            }
            ;
            $('<div />', {'class': h.divClass, html: b.join('')}).appendTo(g);
            if (h.callback) {
                h.callback()
            }
        }
        );
        return this
    }
})(jQuery);

