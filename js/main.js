function demo(num) {
    console.log('You clicked demo');
    if (num != 6) {
        $('#demo' + num).popover('show');
    }
    if (num != 1) {
        $('#demo' + (num - 1)).popover('destroy');
    }
}

$("a[data-toggle=tooltip]")
        .tooltip();
$("a[data-toggle=popover]")
        .popover();

var month, refMonth = ["Sep", "Sep", "Sep"];

$(function() {
    $.getJSON('data/gc-data.json', function(data) {
        $.each(data.events, function(i, f) {
            var gc = f.gc;
            var region = document.getElementById(gc + '-content');
            var textPop = f.text;
            var linkPop = f.link;
            var timePop = f.time;
            var milestone = f.milestone;
            month = timePop.substring(3, ' ');

            var newElement = document.createElement('a');
            var blankElement = document.createElement('span');
            blankElement.innerHTML = "&nbsp";
            var breakElement = document.createElement('span');
            breakElement.innerHTML = "<br>";

            var divId = 'data-' + i;
            newElement.setAttribute('id', divId);
            newElement.setAttribute('data-original-title', timePop);
            newElement.setAttribute('data-content', textPop);
            newElement.setAttribute('data-toggle', 'popover');
            newElement.setAttribute('data-trigger', 'hover');
            newElement.setAttribute('href', linkPop);

            if (milestone == "gc")
                newElement.setAttribute('class', 'label label-success');
            else if (milestone == "cup")
                newElement.setAttribute('class', 'label label-inverse');
            else
                newElement.setAttribute('class', 'label label-info');

            newElement.innerHTML = timePop;

            if (gc == "soc-cult")
                var k = 0;
            else if (gc == "sports")
                var k = 1;
            else
                var k = 2;

            if (refMonth[k] == month) {
                region.appendChild(newElement);
                region.appendChild(blankElement);
            }
            else {
                refMonth[k] = month;
                region.appendChild(breakElement);
                region.appendChild(newElement);
                region.appendChild(blankElement);
            }

            $('#' + divId)
                    .popover();

        });
    });
});

$(function() {
    $.getJSON('data/album-data.json', function(data) {
        $.each(data.albums, function(i, f) {
            var gc = f.gc;
            var region = document.getElementById(gc + '-albums');
            var namePop = f.name;
            var newElement = document.createElement('a');
            var newWrapper = document.createElement('p');

            var divId = 'album-' + i;
            newElement.setAttribute('id', divId);
            newElement.setAttribute('href', '#' + gc);
            newElement.innerHTML = namePop;

            newWrapper.appendChild(newElement);
            region.appendChild(newWrapper);

            $('#' + divId).click(function() {
                var region = document.getElementById(gc + '-albums-slot');
                region.innerHTML = '';
                $('#' + gc + '-albums-slot').fbAlbum({
                    'albumID': f.id
                });
            });
        });
    });
});

