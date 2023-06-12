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

// Microtiming Leader 1
var INTERP_BASE_MICROTIMING = "microtiming/leader-annotations/";

var INTERP_BASE_VA_MICRO_DP = "microtiming/leader-annotations/VA-VN1-DP";
var INTERP_BASE_VC_MICRO_DP = "microtiming/leader-annotations/VC-VN1-DP";
var INTERP_BASE_VN1_MICRO_DP = "microtiming/leader-annotations/VN1-VN1-DP";
var INTERP_BASE_VN2_MICRO_DP = "microtiming/leader-annotations/VN2-VN1-DP";

var INTERP_BASE_VA_MICRO_NR = "microtiming/leader-annotations/VA-VN1-NR";
var INTERP_BASE_VC_MICRO_NR = "microtiming/leader-annotations/VC-VN1-NR";
var INTERP_BASE_VN1_MICRO_NR = "microtiming/leader-annotations/VN1-VN1-NR";
var INTERP_BASE_VN2_MICRO_NR = "microtiming/leader-annotations/VN2-VN1-NR";

var INTERP_BASE_VA_MICRO_SP = "microtiming/leader-annotations/VA-VN1-SP";
var INTERP_BASE_VC_MICRO_SP = "microtiming/leader-annotations/VC-VN1-SP";
var INTERP_BASE_VN1_MICRO_SP = "microtiming/leader-annotations/VN1-VN1-SP";
var INTERP_BASE_VN2_MICRO_SP = "microtiming/leader-annotations/VN2-VN1-SP";


// Microtiming Leader 2
var INTERP_BASE_VA_MICRO_VN2_DP = "microtiming/leader-annotations/VA-VN2-DP";
var INTERP_BASE_VC_MICRO_VN2_DP = "microtiming/leader-annotations/VC-VN2-DP";
var INTERP_BASE_VN1_MICRO_VN2_DP = "microtiming/leader-annotations/VN1-VN2-DP";
var INTERP_BASE_VN2_MICRO_VN2_DP = "microtiming/leader-annotations/VN2-VN2-DP";

var INTERP_BASE_VA_MICRO_VN2_NR = "microtiming/leader-annotations/VA-VN2-NR";
var INTERP_BASE_VC_MICRO_VN2_NR = "microtiming/leader-annotations/VC-VN2-NR";
var INTERP_BASE_VN1_MICRO_VN2_NR = "microtiming/leader-annotations/VN1-VN2-NR";
var INTERP_BASE_VN2_MICRO_VN2_NR = "microtiming/leader-annotations/VN2-VN2-NR";

var INTERP_BASE_VA_MICRO_VN2_SP = "microtiming/leader-annotations/VA-VN2-SP";
var INTERP_BASE_VC_MICRO_VN2_SP = "microtiming/leader-annotations/VC-VN2-SP";
var INTERP_BASE_VN1_MICRO_VN2_SP = "microtiming/leader-annotations/VN1-VN2-SP";
var INTERP_BASE_VN2_MICRO_VN2_SP = "microtiming/leader-annotations/VN2-VN2-SP";

var NUM_INTERP_FRAMES_MICROTIMING = 12;

var interp_images_microtiming = [];
function preloadInterpolationImages_Microtiming() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_MICROTIMING + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_microtiming[i] = new Image();
    interp_images_microtiming[i].src = path;
  }
}

function setInterpolationImage_Microtiming(i) {
  var image_microtiming = interp_images_microtiming[i];
  image_microtiming.ondragstart = function() { return false; };
  image_microtiming.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image_microtiming);
}


// 
// 
// DP VN1 leader
// 
// 


var interp_images_va_vn1_dp = [];
function preloadInterpolationImagesVA_VN1_DP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VA_MICRO_DP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_va_vn1_dp[i] = new Image();
    interp_images_va_vn1_dp[i].src = path;
  }
}

function setInterpolationImageVA_VN1_DP(i) {
  var image_va = interp_images_va_vn1_dp[i];
  image_va.ondragstart = function() { return false; };
  image_va.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-va-vn1-dp').empty().append(image_va);
}

var interp_images_vc_vn1_dp = [];
function preloadInterpolationImagesVC_VN1_DP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VC_MICRO_DP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vc_vn1_dp[i] = new Image();
    interp_images_vc_vn1_dp[i].src = path;
  }
}

function setInterpolationImageVC_VN1_DP(i) {
  var image_vc = interp_images_vc_vn1_dp[i];
  image_vc.ondragstart = function() { return false; };
  image_vc.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vc-vn1-dp').empty().append(image_vc);
}

var interp_images_vn1_vn1_dp = [];
function preloadInterpolationImagesVN1_VN1_DP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN1_MICRO_DP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn1_vn1_dp[i] = new Image();
    interp_images_vn1_vn1_dp[i].src = path;
  }
}

function setInterpolationImageVN1_VN1_DP(i) {
  var image_vn1 = interp_images_vn1_vn1_dp[i];
  image_vn1.ondragstart = function() { return false; };
  image_vn1.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn1-vn1-dp').empty().append(image_vn1);
}

var interp_images_vn2_vn1_dp = [];
function preloadInterpolationImagesVN2_VN1_DP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN2_MICRO_DP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn2_vn1_dp[i] = new Image();
    interp_images_vn2_vn1_dp[i].src = path;
  }
}

function setInterpolationImageVN2_VN1_DP(i) {
  var image_vn2 = interp_images_vn2_vn1_dp[i];
  image_vn2.ondragstart = function() { return false; };
  image_vn2.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn2-vn1-dp').empty().append(image_vn2);
}


// 
// 
// NR VN1 leader
// 
// 


var interp_images_va_vn1_nr = [];
function preloadInterpolationImagesVA_VN1_NR() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VA_MICRO_NR + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_va_vn1_nr[i] = new Image();
    interp_images_va_vn1_nr[i].src = path;
  }
}

function setInterpolationImageVA_VN1_NR(i) {
  var image_va = interp_images_va_vn1_nr[i];
  image_va.ondragstart = function() { return false; };
  image_va.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-va-vn1-nr').empty().append(image_va);
}

var interp_images_vc_vn1_nr = [];
function preloadInterpolationImagesVC_VN1_NR() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VC_MICRO_NR + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vc_vn1_nr[i] = new Image();
    interp_images_vc_vn1_nr[i].src = path;
  }
}

function setInterpolationImageVC_VN1_NR(i) {
  var image_vc = interp_images_vc_vn1_nr[i];
  image_vc.ondragstart = function() { return false; };
  image_vc.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vc-vn1-nr').empty().append(image_vc);
}

var interp_images_vn1_vn1_nr = [];
function preloadInterpolationImagesVN1_VN1_NR() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN1_MICRO_NR + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn1_vn1_nr[i] = new Image();
    interp_images_vn1_vn1_nr[i].src = path;
  }
}

function setInterpolationImageVN1_VN1_NR(i) {
  var image_vn1 = interp_images_vn1_vn1_nr[i];
  image_vn1.ondragstart = function() { return false; };
  image_vn1.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn1-vn1-nr').empty().append(image_vn1);
}

var interp_images_vn2_vn1_nr = [];
function preloadInterpolationImagesVN2_VN1_NR() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN2_MICRO_NR + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn2_vn1_nr[i] = new Image();
    interp_images_vn2_vn1_nr[i].src = path;
  }
}

function setInterpolationImageVN2_VN1_NR(i) {
  var image_vn2 = interp_images_vn2_vn1_nr[i];
  image_vn2.ondragstart = function() { return false; };
  image_vn2.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn2-vn1-nr').empty().append(image_vn2);
}


// 
// SP VN1 leader
// 

var interp_images_va_vn1_sp = [];
function preloadInterpolationImagesVA_VN1_SP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VA_MICRO_SP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_va_vn1_sp[i] = new Image();
    interp_images_va_vn1_sp[i].src = path;
  }
}

function setInterpolationImageVA_VN1_SP(i) {
  var image_va = interp_images_va_vn1_sp[i];
  image_va.ondragstart = function() { return false; };
  image_va.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-va-vn1-sp').empty().append(image_va);
}

var interp_images_vc_vn1_sp = [];
function preloadInterpolationImagesVC_VN1_SP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VC_MICRO_SP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vc_vn1_sp[i] = new Image();
    interp_images_vc_vn1_sp[i].src = path;
  }
}

function setInterpolationImageVC_VN1_SP(i) {
  var image_vc = interp_images_vc_vn1_sp[i];
  image_vc.ondragstart = function() { return false; };
  image_vc.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vc-vn1-sp').empty().append(image_vc);
}

var interp_images_vn1_vn1_sp = [];
function preloadInterpolationImagesVN1_VN1_SP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN1_MICRO_SP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn1_vn1_sp[i] = new Image();
    interp_images_vn1_vn1_sp[i].src = path;
  }
}

function setInterpolationImageVN1_VN1_SP(i) {
  var image_vn1 = interp_images_vn1_vn1_sp[i];
  image_vn1.ondragstart = function() { return false; };
  image_vn1.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn1-vn1-sp').empty().append(image_vn1);
}

var interp_images_vn2_vn1_sp = [];
function preloadInterpolationImagesVN2_VN1_SP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN2_MICRO_SP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn2_vn1_sp[i] = new Image();
    interp_images_vn2_vn1_sp[i].src = path;
  }
}

function setInterpolationImageVN2_VN1_SP(i) {
  var image_vn2 = interp_images_vn2_vn1_sp[i];
  image_vn2.ondragstart = function() { return false; };
  image_vn2.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn2-vn1-sp').empty().append(image_vn2);
}







// 
// DP VN2 leader
// 
var interp_images_va_vn2_dp = [];
function preloadInterpolationImagesVA_VN2_DP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VA_MICRO_VN2_DP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_va_vn2_dp[i] = new Image();
    interp_images_va_vn2_dp[i].src = path;
  }
}

function setInterpolationImageVA_VN2_DP(i) {
  var image_va = interp_images_va_vn2_dp[i];
  image_va.ondragstart = function() { return false; };
  image_va.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-va-vn2-dp').empty().append(image_va);
}

var interp_images_vc_vn2_dp = [];
function preloadInterpolationImagesVC_VN2_DP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VC_MICRO_VN2_DP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vc_vn2_dp[i] = new Image();
    interp_images_vc_vn2_dp[i].src = path;
  }
}

function setInterpolationImageVC_VN2_DP(i) {
  var image_vc = interp_images_vc_vn2_dp[i];
  image_vc.ondragstart = function() { return false; };
  image_vc.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vc-vn2-dp').empty().append(image_vc);
}

var interp_images_vn1_vn2_dp = [];
function preloadInterpolationImagesVN1_VN2_DP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN1_MICRO_VN2_DP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn1_vn2_dp[i] = new Image();
    interp_images_vn1_vn2_dp[i].src = path;
  }
}

function setInterpolationImageVN1_VN2_DP(i) {
  var image_vn1 = interp_images_vn1_vn2_dp[i];
  image_vn1.ondragstart = function() { return false; };
  image_vn1.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn1-vn2-dp').empty().append(image_vn1);
}

var interp_images_vn2_vn2_dp = [];
function preloadInterpolationImagesVN2_VN2_DP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN2_MICRO_VN2_DP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn2_vn2_dp[i] = new Image();
    interp_images_vn2_vn2_dp[i].src = path;
  }
}

function setInterpolationImageVN2_VN2_DP(i) {
  var image_vn2 = interp_images_vn2_vn2_dp[i];
  image_vn2.ondragstart = function() { return false; };
  image_vn2.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn2-vn2-dp').empty().append(image_vn2);
}



// 
// NR VN2 leader
// 
var interp_images_va_vn2_nr = [];
function preloadInterpolationImagesVA_VN2_NR() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VA_MICRO_VN2_NR + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_va_vn2_nr[i] = new Image();
    interp_images_va_vn2_nr[i].src = path;
  }
}

function setInterpolationImageVA_VN2_NR(i) {
  var image_va = interp_images_va_vn2_nr[i];
  image_va.ondragstart = function() { return false; };
  image_va.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-va-vn2-nr').empty().append(image_va);
}

var interp_images_vc_vn2_nr = [];
function preloadInterpolationImagesVC_VN2_NR() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VC_MICRO_VN2_NR + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vc_vn2_nr[i] = new Image();
    interp_images_vc_vn2_nr[i].src = path;
  }
}

function setInterpolationImageVC_VN2_NR(i) {
  var image_vc = interp_images_vc_vn2_nr[i];
  image_vc.ondragstart = function() { return false; };
  image_vc.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vc-vn2-nr').empty().append(image_vc);
}

var interp_images_vn1_vn2_nr = [];
function preloadInterpolationImagesVN1_VN2_NR() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN1_MICRO_VN2_NR + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn1_vn2_nr[i] = new Image();
    interp_images_vn1_vn2_nr[i].src = path;
  }
}

function setInterpolationImageVN1_VN2_NR(i) {
  var image_vn1 = interp_images_vn1_vn2_nr[i];
  image_vn1.ondragstart = function() { return false; };
  image_vn1.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn1-vn2-nr').empty().append(image_vn1);
}

var interp_images_vn2_vn2_nr = [];
function preloadInterpolationImagesVN2_VN2_NR() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN2_MICRO_VN2_NR + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn2_vn2_nr[i] = new Image();
    interp_images_vn2_vn2_nr[i].src = path;
  }
}

function setInterpolationImageVN2_VN2_NR(i) {
  var image_vn2 = interp_images_vn2_vn2_nr[i];
  image_vn2.ondragstart = function() { return false; };
  image_vn2.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn2-vn2-nr').empty().append(image_vn2);
}


// 
// SP VN2 leader
// 

var interp_images_va_vn2_sp = [];
function preloadInterpolationImagesVA_VN2_SP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VA_MICRO_VN2_SP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_va_vn2_sp[i] = new Image();
    interp_images_va_vn2_sp[i].src = path;
  }
}

function setInterpolationImageVA_VN2_SP(i) {
  var image_va = interp_images_va_vn2_sp[i];
  image_va.ondragstart = function() { return false; };
  image_va.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-va-vn2-sp').empty().append(image_va);
}

var interp_images_vc_vn2_sp = [];
function preloadInterpolationImagesVC_VN2_SP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VC_MICRO_VN2_SP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vc_vn2_sp[i] = new Image();
    interp_images_vc_vn2_sp[i].src = path;
  }
}

function setInterpolationImageVC_VN2_SP(i) {
  var image_vc = interp_images_vc_vn2_sp[i];
  image_vc.ondragstart = function() { return false; };
  image_vc.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vc-vn2-sp').empty().append(image_vc);
}

var interp_images_vn1_vn2_sp = [];
function preloadInterpolationImagesVN1_VN2_SP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN1_MICRO_VN2_SP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn1_vn2_sp[i] = new Image();
    interp_images_vn1_vn2_sp[i].src = path;
  }
}

function setInterpolationImageVN1_VN2_SP(i) {
  var image_vn1 = interp_images_vn1_vn2_sp[i];
  image_vn1.ondragstart = function() { return false; };
  image_vn1.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn1-vn2-sp').empty().append(image_vn1);
}

var interp_images_vn2_vn2_sp = [];
function preloadInterpolationImagesVN2_VN2_SP() {
  for (var i = 0; i < NUM_INTERP_FRAMES_MICROTIMING; i++) {
    var path = INTERP_BASE_VN2_MICRO_VN2_SP + '/' + String(i).padStart(6, '0') + '.png';
    interp_images_vn2_vn2_sp[i] = new Image();
    interp_images_vn2_vn2_sp[i].src = path;
  }
}

function setInterpolationImageVN2_VN2_SP(i) {
  var image_vn2 = interp_images_vn2_vn2_sp[i];
  image_vn2.ondragstart = function() { return false; };
  image_vn2.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-vn2-vn2-sp').empty().append(image_vn2);
}


// 
// 
// 

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

    preloadInterpolationImages_Microtiming();
    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage_Microtiming(this.value);
    });
    setInterpolationImage_Microtiming(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);


    
    // microtiming
    
    // 
    // LEADER 1
    // 
    preloadInterpolationImagesVA_VN1_DP();
    preloadInterpolationImagesVC_VN1_DP();
    preloadInterpolationImagesVN1_VN1_DP();
    preloadInterpolationImagesVN2_VN1_DP();

    preloadInterpolationImagesVA_VN1_NR();
    preloadInterpolationImagesVC_VN1_NR();
    preloadInterpolationImagesVN1_VN1_NR();
    preloadInterpolationImagesVN2_VN1_NR();

    preloadInterpolationImagesVA_VN1_SP();
    preloadInterpolationImagesVC_VN1_SP();
    preloadInterpolationImagesVN1_VN1_SP();
    preloadInterpolationImagesVN2_VN1_SP();


    // 
    // DEADPAN
    // 
    
    // Viola
    $('#interpolation-slider-va-vn1-dp').on('input', function(event) {
      setInterpolationImageVA_VN1_DP(this.value);
    });  
    setInterpolationImageVA_VN1_DP(0);
    $('#interpolation-slider-va-vn1-dp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Cello
    $('#interpolation-slider-vc-vn1-dp').on('input', function(event) {
      setInterpolationImageVC_VN1_DP(this.value);
    });  
    setInterpolationImageVC_VN1_DP(0);
    $('#interpolation-slider-vc-vn1-dp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // First violin
    $('#interpolation-slider-vn1-vn1-dp').on('input', function(event) {
      setInterpolationImageVN1_VN1_DP(this.value);
    });  
    setInterpolationImageVN1_VN1_DP(0);
    $('#interpolation-slider-vn1-vn1-dp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Second violin
    $('#interpolation-slider-vn2-vn1-dp').on('input', function(event) {
      setInterpolationImageVN2_VN1_DP(this.value);
    });  
    setInterpolationImageVN2_VN1_DP(0);
    $('#interpolation-slider-vn2-vn1-dp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    

    // 
    // NORMAL
    // 
    $('#interpolation-slider-va-vn1-nr').on('input', function(event) {
      setInterpolationImageVA_VN1_NR(this.value);
    });  
    setInterpolationImageVA_VN1_NR(0);
    $('#interpolation-slider-va-vn1-nr').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Cello
    $('#interpolation-slider-vc-vn1-nr').on('input', function(event) {
      setInterpolationImageVC_VN1_NR(this.value);
    });  
    setInterpolationImageVC_VN1_NR(0);
    $('#interpolation-slider-vc-vn1-nr').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // First violin
    $('#interpolation-slider-vn1-vn1-nr').on('input', function(event) {
      setInterpolationImageVN1_VN1_NR(this.value);
    });  
    setInterpolationImageVN1_VN1_NR(0);
    $('#interpolation-slider-vn1-vn1-nr').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Second violin
    $('#interpolation-slider-vn2-vn1-nr').on('input', function(event) {
      setInterpolationImageVN2_VN1_NR(this.value);
    });  
    setInterpolationImageVN2_VN1_NR(0);
    $('#interpolation-slider-vn2-vn1-nr').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    


    // 
    // SPEED
    // 
    $('#interpolation-slider-va-vn1-sp').on('input', function(event) {
      setInterpolationImageVA_VN1_SP(this.value);
    });  
    setInterpolationImageVA_VN1_SP(0);
    $('#interpolation-slider-va-vn1-sp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Cello
    $('#interpolation-slider-vc-vn1-sp').on('input', function(event) {
      setInterpolationImageVC_VN1_SP(this.value);
    });  
    setInterpolationImageVC_VN1_SP(0);
    $('#interpolation-slider-vc-vn1-sp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // First violin
    $('#interpolation-slider-vn1-vn1-sp').on('input', function(event) {
      setInterpolationImageVN1_VN1_SP(this.value);
    });  
    setInterpolationImageVN1_VN1_SP(0);
    $('#interpolation-slider-vn1-vn1-sp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Second violin
    $('#interpolation-slider-vn2-vn1-sp').on('input', function(event) {
      setInterpolationImageVN2_VN1_SP(this.value);
    });  
    setInterpolationImageVN2_VN1_SP(0);
    $('#interpolation-slider-vn2-vn1-sp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    



    // 
    // LEADER 2
    // 
    preloadInterpolationImagesVA_VN2_DP();
    preloadInterpolationImagesVC_VN2_DP();
    preloadInterpolationImagesVN1_VN2_DP();
    preloadInterpolationImagesVN2_VN2_DP();

    preloadInterpolationImagesVA_VN2_NR();
    preloadInterpolationImagesVC_VN2_NR();
    preloadInterpolationImagesVN1_VN2_NR();
    preloadInterpolationImagesVN2_VN2_NR();

    preloadInterpolationImagesVA_VN2_SP();
    preloadInterpolationImagesVC_VN2_SP();
    preloadInterpolationImagesVN1_VN2_SP();
    preloadInterpolationImagesVN2_VN2_SP();

    // 
    // DEADPAN
    // 
    
    // Viola
    $('#interpolation-slider-va-vn2-dp').on('input', function(event) {
      setInterpolationImageVA_VN2_DP(this.value);
    });  
    setInterpolationImageVA_VN2_DP(0);
    $('#interpolation-slider-va-vn2-dp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Cello
    $('#interpolation-slider-vc-vn2-dp').on('input', function(event) {
      setInterpolationImageVC_VN2_DP(this.value);
    });  
    setInterpolationImageVC_VN2_DP(0);
    $('#interpolation-slider-vc-vn2-dp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // First violin
    $('#interpolation-slider-vn1-vn2-dp').on('input', function(event) {
      setInterpolationImageVN1_VN2_DP(this.value);
    });  
    setInterpolationImageVN1_VN2_DP(0);
    $('#interpolation-slider-vn1-vn2-dp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Second violin
    $('#interpolation-slider-vn2-vn2-dp').on('input', function(event) {
      setInterpolationImageVN2_VN2_DP(this.value);
    });  
    setInterpolationImageVN2_VN2_DP(0);
    $('#interpolation-slider-vn2-vn2-dp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    

    // 
    // NORMAL
    // 
    $('#interpolation-slider-va-vn2-nr').on('input', function(event) {
      setInterpolationImageVA_VN2_NR(this.value);
    });  
    setInterpolationImageVA_VN2_NR(0);
    $('#interpolation-slider-va-vn2-nr').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Cello
    $('#interpolation-slider-vc-vn2-nr').on('input', function(event) {
      setInterpolationImageVC_VN2_NR(this.value);
    });  
    setInterpolationImageVC_VN2_NR(0);
    $('#interpolation-slider-vc-vn2-nr').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // First violin
    $('#interpolation-slider-vn1-vn2-nr').on('input', function(event) {
      setInterpolationImageVN1_VN2_NR(this.value);
    });  
    setInterpolationImageVN1_VN2_NR(0);
    $('#interpolation-slider-vn1-vn2-nr').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Second violin
    $('#interpolation-slider-vn2-vn2-nr').on('input', function(event) {
      setInterpolationImageVN2_VN2_NR(this.value);
    });  
    setInterpolationImageVN2_VN2_NR(0);
    $('#interpolation-slider-vn2-vn2-nr').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    


    // 
    // SPEED
    // 
    $('#interpolation-slider-va-vn2-sp').on('input', function(event) {
      setInterpolationImageVA_VN2_SP(this.value);
    });  
    setInterpolationImageVA_VN2_SP(0);
    $('#interpolation-slider-va-vn2-sp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Cello
    $('#interpolation-slider-vc-vn2-sp').on('input', function(event) {
      setInterpolationImageVC_VN2_SP(this.value);
    });  
    setInterpolationImageVC_VN2_SP(0);
    $('#interpolation-slider-vc-vn2-sp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // First violin
    $('#interpolation-slider-vn1-vn2-sp').on('input', function(event) {
      setInterpolationImageVN1_VN2_SP(this.value);
    });  
    setInterpolationImageVN1_VN2_SP(0);
    $('#interpolation-slider-vn1-vn2-sp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    
    // Second violin
    $('#interpolation-slider-vn2-vn2-sp').on('input', function(event) {
      setInterpolationImageVN2_VN2_SP(this.value);
    });  
    setInterpolationImageVN2_VN2_SP(0);
    $('#interpolation-slider-vn2-vn2-sp').prop('max', NUM_INTERP_FRAMES_MICROTIMING - 1);    









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
