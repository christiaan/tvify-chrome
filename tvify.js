(function() {
    var body = document.body,
        initialWidth = body.scrollWidth,
        disabled = false;

    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.toggle) {
            disabled = !disabled;
            zoomBody();
        }
    });

    var zoomBody = function() {
        if (disabled) {
            body.style.zoom = '100%';
            return;
        }
        var zoom = 100,
            increment = 25,
            max = 300;
            
        while (zoom < max && initialWidth == body.scrollWidth) {
            zoom += increment;
            body.style.zoom = zoom+'%';
        }
        body.style.zoom = (zoom - increment) + '%';
    };
    
    zoomBody();
    setTimeout(zoomBody, 3000);
})();

