document.getElementById("js_error").style.display = "none";
var menu_stat = false;

var load_overlay = document.getElementById("load_overlay");
var hdr_img_hr = document.getElementById("Head_Img_HR");

function pg_fload() {
	load_overlay.style.animation = "1s finished_loading 1";
	hdr_img_hr.style.animation = "3s hr_expand 1";
	setTimeout(function() {
		load_overlay.style.display = "none";
		hdr_img_hr.style.width = "940px";
		hdr_img_hr.style.left = "calc(50% - 470px)";
	}, 990);
}

function toggle_menu() {
	menu_stat = !menu_stat;
	if (menu_stat) {
		document.getElementById("hdr_ul").style.display = "block";
	}
	else {
		document.getElementById("hdr_ul").style.display = "none";
	}
}