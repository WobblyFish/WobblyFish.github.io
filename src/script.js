document.getElementById("js_error").style.display = "none";
var menu_stat = false;

var load_overlay = document.getElementById("load_overlay");
var load_overlay_anim = document.getElementById("load_overlay_anim");
var load_overlay_text = document.getElementById("load_overlay_text");
var hdr_img_hr = document.getElementById("Head_Img_HR");

function pg_fload() {
	setTimeout(function () {
		hdr_img_hr.style.animation = "3s hr_expand 1";
		hdr_img_hr.style.width = "940px";
		hdr_img_hr.style.left = "calc(50% - 470px)";

		load_overlay.style.animation = "1s finished_loading 1";
		load_overlay_anim.style.animation = "1s finished_loading 1";
		load_overlay_text.style.animation = "1s finished_loading 1";
		setTimeout(function () {
			load_overlay.style.display = "none";
			load_overlay_anim.style.display = "none";
			load_overlay_text.style.display = "none";
		}, 990);
	}, 1000);
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