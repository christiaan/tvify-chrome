(function() {
    var zoomBody = function() {
        var body = document.body,
            zoom = 100,
            increment = 25,
            max = 300,
            initialWidth = body.scrollWidth;
            
        while (zoom < max && initialWidth == body.scrollWidth) {
            zoom += increment;
            body.style.zoom = zoom+'%';
        }
        body.style.zoom = (zoom - increment) + '%';
    };
    
    zoomBody();
    setTimeout(zoomBody, 3000);
})();

