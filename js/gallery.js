
//grab elements
var displayBar = document.querySelector('figure.displayBar');
var thumbBar = document.querySelector('ul.thumbBarImgs');


//thumbnail images list
var imgList = [
	{'src' : 'images/flowers-pink-small.jpg'},
	{'src' : 'images/flowers-purple-small.jpg'},
	{'src' : 'images/flowers-red-small.jpg'},
	{'src' : 'images/flowers-white-small.jpg'},
	{'src' : 'images/flowers-yellow-small.jpg'}
	];

// Setup the thumbnail bar
for(var i = 0; i < imgList.length; i++) {
	var newLi = document.createElement('li');
	var newImage = document.createElement('img');
	newImage.setAttribute('src', imgList[i].src);
	newImage.index = i;
	newImage.className = 'thumbnail';
	newLi.appendChild(newImage);
	thumbBar.appendChild(newLi);
}

// Call and display the first image to display bar
var slideIndex = 0;
currentSlide(slideIndex);

// Thumbnail clickable to change the image on display bar
thumbBar.onclick = function (event) {
	if(event.target && event.target.nodeName === 'IMG') {
		currentSlide(event.target.index);
	}
};

// Display an image to display bar
function displayImage(img) {
displayBar.querySelector('img').setAttribute('src', img.getAttribute('src').replace('small', 'large'));
}


// set and show the slide by the current slide index
function currentSlide(n) {
	showSlide(slideIndex = n);
}

// Setting the thumbnail selection and display bar
function showSlide(n) {
	var thumbImgs = document.querySelectorAll('img.thumbnail');
	if (n >= thumbImgs.length) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = thumbImgs.length - 1;
	}

	// outlineClearing();
	thumbImgs[slideIndex].className += ' active';
	displayImage(thumbImgs[slideIndex]);
}
