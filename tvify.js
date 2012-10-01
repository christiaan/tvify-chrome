(function() {
	var zoomBody = function() {
		var body = document.body,
			zoom = 100,
			increment = 25,
			max = 300,
			initialWidth = body.scrollWidth;
			
		if (body.style && body.style.zoom) {
			zoom = body.style.zoom;
		}


		while (zoom < max && initialWidth == body.scrollWidth) {
			// console.log(body.scrollWidth, body.clientWidth, zoom);
			zoom += increment;
			body.style.zoom = zoom+'%';
		}
		// console.log(body.scrollWidth, body.clientWidth, zoom);
		body.style.zoom = (zoom - increment) + '%';
	};
	
	zoomBody();
	setTimeout(zoomBody, 3000);
})();

