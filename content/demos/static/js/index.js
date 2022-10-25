window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "onset-annotation-of-string-ensembles/all";

// all participants
var INTERP_BASE_VA = "onset-annotation-of-string-ensembles/all/VA";
var INTERP_BASE_VC = "onset-annotation-of-string-ensembles/all/VC";
var INTERP_BASE_VN1 = "onset-annotation-of-string-ensembles/all/VN1";
var INTERP_BASE_VN2 = "onset-annotation-of-string-ensembles/all/VN2";

// 16 participants
var INTERP_BASE_16VA = "onset-annotation-of-string-ensembles/16_participants/VA";
var INTERP_BASE_16VC = "onset-annotation-of-string-ensembles/16_participants/VC";
var INTERP_BASE_16VN1 = "onset-annotation-of-string-ensembles/16_participants/VN1";
var INTERP_BASE_16VN2 = "onset-annotation-of-string-ensembles/16_participants/VN2";

var NUM_INTERP_FRAMES = 11;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

var interp_images_va = [];
function preloadInterpolationImagesVA() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE_VA + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images_va[i] = new Image();
    interp_images_va[i].src = path;
  }
}

var interp_images_vc = [];
function preloadInterpolationImagesVC() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE_VC + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images_vc[i] = new Image();
    interp_images_vc[i].src = path;
  }
}

var interp_images_vn1 = [];
function preloadInterpolationImagesVN1() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE_VN1 + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images_vn1[i] = new Image();
    interp_images_vn1[i].src = path;
  }
}

var interp_images_vn2 = [];
function preloadInterpolationImagesVN2() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE_VN2 + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images_vn2[i] = new Image();
    interp_images_vn2[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

function setInterpolationImageVA(i) {
  var image_va = interp_images_va[i];
  image_va.ondragstart = function() { return false; };
  image_va.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-va').empty().append(image_va);
}

function setInterpolationImageVC(i) {
  var image = interp_images_vc[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vc').empty().append(image);
}

function setInterpolationImageVN1(i) {
  var image = interp_images_vn1[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn1').empty().append(image);
}

function setInterpolationImageVN2(i) {
  var image = interp_images_vn2[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn2').empty().append(image);
}

// Load 16 participants

var interp_images_16va = [];
function preloadInterpolationImages16VA() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE_16VA + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images_16va[i] = new Image();
    interp_images_16va[i].src = path;
  }
}

var interp_images_16vc = [];
function preloadInterpolationImages16VC() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE_16VC + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images_16vc[i] = new Image();
    interp_images_16vc[i].src = path;
  }
}

var interp_images_16vn1 = [];
function preloadInterpolationImages16VN1() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE_16VN1 + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images_16vn1[i] = new Image();
    interp_images_16vn1[i].src = path;
  }
}

var interp_images_16vn2 = [];
function preloadInterpolationImages16VN2() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE_16VN2 + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images_16vn2[i] = new Image();
    interp_images_16vn2[i].src = path;
  }
}

function setInterpolationImage16VA(i) {
  var image = interp_images_16va[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-va-16').empty().append(image);
}

function setInterpolationImage16VC(i) {
  var image = interp_images_16vc[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vc-16').empty().append(image);
}

function setInterpolationImage16VN1(i) {
  var image = interp_images_16vn1[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn1-16').empty().append(image);
}

function setInterpolationImage16VN2(i) {
  var image = interp_images_16vn2[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn2-16').empty().append(image);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/

    preloadInterpolationImages();
    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    // all participants
    preloadInterpolationImagesVA();
    preloadInterpolationImagesVC();
    preloadInterpolationImagesVN1();
    preloadInterpolationImagesVN2();

    // Viola
    $('#interpolation-slider-va').on('input', function(event) {
      setInterpolationImageVA(this.value);
    });
    setInterpolationImageVA(0);
    $('#interpolation-slider-va').prop('max', NUM_INTERP_FRAMES - 1);
    // Cello
    $('#interpolation-slider-vc').on('input', function(event) {
      setInterpolationImageVC(this.value);
    });
    setInterpolationImageVC(0);
    $('#interpolation-slider-vc').prop('max', NUM_INTERP_FRAMES - 1);
    // First Violin
    $('#interpolation-slider-vn1').on('input', function(event) {
      setInterpolationImageVN1(this.value);
    });
    setInterpolationImageVN1(0);
    $('#interpolation-slider-vn1').prop('max', NUM_INTERP_FRAMES - 1);
    // Second Violin
    $('#interpolation-slider-vn2').on('input', function(event) {
      setInterpolationImageVN2(this.value);
    });
    setInterpolationImageVN2(0);
    $('#interpolation-slider-vn2').prop('max', NUM_INTERP_FRAMES - 1);

    // 16 participants
    preloadInterpolationImages16VA();
    preloadInterpolationImages16VC();
    preloadInterpolationImages16VN1();
    preloadInterpolationImages16VN2();
    
    // Viola
    $('#interpolation-slider-va-16').on('input', function(event) {
      setInterpolationImage16VA(this.value);
    });
    setInterpolationImage16VA(0);
    $('#interpolation-slider-va-16').prop('max', NUM_INTERP_FRAMES - 1);
    // Cello
    $('#interpolation-slider-vc-16').on('input', function(event) {
      setInterpolationImage16VC(this.value);
    });
    setInterpolationImage16VC(0);
    $('#interpolation-slider-vc-16').prop('max', NUM_INTERP_FRAMES - 1);
    // First Violin
    $('#interpolation-slider-vn1-16').on('input', function(event) {
      setInterpolationImage16VN1(this.value);
    });
    setInterpolationImage16VN1(0);
    $('#interpolation-slider-vn1-16').prop('max', NUM_INTERP_FRAMES - 1);
    // Second Violin
    $('#interpolation-slider-vn2-16').on('input', function(event) {
      setInterpolationImage16VN2(this.value);
    });
    setInterpolationImage16VN2(0);
    $('#interpolation-slider-vn2-16').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
