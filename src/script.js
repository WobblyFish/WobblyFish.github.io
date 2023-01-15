if (document.URL.substr(0, 7) == "http://") {
	var wndNewURL = "https://" + document.URL.substr(7);
	window.open(wndNewURL, "_self");
}

var videoService_videoTags = [
	["TEST", "Newt Wagon",
		[					// Playable source videos (BELOW)
			["wagon.mp4", "video/mp4"],
		], [					// Downloadable videos (BELOW)
			["MP4", "Wagon.mp4"],
			["MP4", "Wagon.mp4"],
			["MP4", "Wagon.mp4"],
			["MP4", "Wagon.mp4"],
			["MP4", "Wagon.mp4"],
			["MP4", "Wagon.mp4"],
			["MP4", "Wagon.mp4"],
			["MP4", "Wagon.mp4"],
			["MP4", "Wagon.mp4"],
			["MP4", "Wagon.mp4"],
		]
	],
];

document.getElementById("js_error").style.display = "none";
var menu_stat = false;
var videoService_refRate = 100;
var videoService_isDraggingPin = false;

var load_overlay = document.getElementById("load_overlay");
var load_overlay_anim = document.getElementById("load_overlay_anim");
var load_overlay_text = document.getElementById("load_overlay_text");

function prepVidTime(vTmStr) {
	var vTmRNum = Math.round(Number(vTmStr));
	if (vTmRNum < 10) {
		return "0:0" + vTmRNum;
	}
	else if (vTmRNum < 60) {
		return "0:" + vTmRNum;
	}
}

function pg_fload(nm) {
	if (nm == "videoService") {
		var vidServIntvlFctn = function() {
			document.getElementById("videoService_VDur").innerText = prepVidTime(document.getElementById('videoService_Video').currentTime) + " / " + prepVidTime(document.getElementById('videoService_Video').duration);
			var vidProgWPct = ((document.getElementById('videoService_Video').currentTime / document.getElementById('videoService_Video').duration) * 90);
			document.getElementById("videoService_VProg").style.width = vidProgWPct + "%";
			if (window.innerWidth > 1000) { document.getElementById("videoService_VProgPin").style.left = "calc(" + (vidProgWPct + 5) + "% - 7px)"; }
			else { document.getElementById("videoService_VProgPin").style.left = "calc(" + (vidProgWPct + 5) + "% - 17px)"; }
			document.getElementById("videoService_VDur").style.left = "calc(" + (vidProgWPct + 5) + "% - " + (document.getElementById("videoService_VDur").getBoundingClientRect().width / 2) + "px)";
			if (document.getElementById("videoService_Video").currentTime == document.getElementById('videoService_Video').duration) {
				document.getElementById("videoService_Play").style.display = "block";
				document.getElementById("videoService_Dimmer").style.background = "rgba(0,0,0,0.5)";
				if (!videoService_isDraggingPin) {
					document.getElementById("videoService_Play").style.backgroundImage = "url('/src/replay.svg')";
					videoService_refRate = 100;
				}
			}
			else if (!videoService_isDraggingPin) {
				document.getElementById("videoService_Play").style.backgroundImage = "url('/src/play.svg')";
			}
			setTimeout(vidServIntvlFctn, videoService_refRate);
		}
		setTimeout(vidServIntvlFctn, videoService_refRate);
		if (window.location.href.indexOf("#") > 0) {
			var vHashStr = window.location.href.substr(window.location.href.indexOf("#") + 1).toUpperCase();
			var vHashLoc = -1;
			for (var i = 0; i < videoService_videoTags.length; i++) {
				if (vHashStr == videoService_videoTags[i][0]) {
					vHashLoc = i;
					break;
				}
			}
			if (vHashLoc >= 0) {
				document.getElementById("videoService_DldMenu").innerHTML = "<h3>Download</h3>";
				for (var r = 0; r < videoService_videoTags[i][3].length; r++) {
					document.getElementById("videoService_DldMenu").innerHTML += "<li><a href=\"" + videoService_videoTags[i][3][r][1] + "\" target=\"_blank\" download>" + videoService_videoTags[i][3][r][0] + "</a></li>";
				}
				document.getElementsByTagName("title")[0].innerText = videoService_videoTags[i][1] + " (Video) | Newtimations";
				document.getElementById("videoService_Video").innerHTML = "";
				for (var c = 0; c < videoService_videoTags[i][2].length; c++) {
					document.getElementById("videoService_Video").innerHTML += "<source src=\"" + videoService_videoTags[i][2][c][0] + "\" type=\"" + videoService_videoTags[i][2][c][1] + "\" />";
				}
				document.getElementById("videoService_Video").innerHTML += "Your browser does not support the video tag.";
			}
		}
	}
	setTimeout(function () {
		if (nm == "main") {
			var hdr_img_hr = document.getElementById("Head_Img_HR");
			hdr_img_hr.style.animation = "3s hr_expand 1";
			hdr_img_hr.style.width = "940px";
			hdr_img_hr.style.left = "calc(50% - 470px)";
		}

		load_overlay.style.animation = "1s finished_loading 1";
		load_overlay_anim.style.animation = "1s finished_loading 1";
		load_overlay_text.style.animation = "1s finished_loading 1";
		load_overlay.style.opacity = "0";
		load_overlay_anim.style.opacity = "0";
		load_overlay_text.style.opacity = "0";
		setTimeout(function () {
			load_overlay.style.display = "none";
			load_overlay_anim.style.display = "none";
			load_overlay_text.style.display = "none";
		}, 980);
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

function videoServicePlay(b) {
	document.getElementById("videoService_Play").style.backgroundImage = "url('/src/play.svg')";
	if (b) {
		document.getElementById("videoService_Video").play();
		document.getElementById("videoService_Play").style.display = "none";
		document.getElementById("videoService_Dimmer").style.background = "rgba(0,0,0,0)";
		videoService_refRate = 17;
	}
	else {
		document.getElementById("videoService_Video").pause();
		document.getElementById("videoService_Play").style.display = "block";
		document.getElementById("videoService_Dimmer").style.background = "rgba(0,0,0,0.5)";
		videoService_refRate = 100;
	}
}

function vProgPinDrag(b) {
	videoService_isDraggingPin = b;
	if (videoService_isDraggingPin) { videoService_refRate = 17; }
	else { videoService_refRate = 100; }
}

function videoService_MouseMove(event) {
	if (videoService_isDraggingPin) {
		var vidSvc_Video = document.getElementById("videoService_Video")
		vidSvc_Video.currentTime = Math.min(Math.max(0, ((event.clientX / window.innerWidth) * 1.1) - 0.05) * vidSvc_Video.duration, vidSvc_Video.duration);
	}
}

function videoServiceDownloadMenu(b) {
	if (b) {
		videoServicePlay(false);
		document.getElementById("videoService_DldDimmer").style.display = "block";
		document.getElementById("videoService_DldMenu").style.display = "block";
		document.getElementById("videoService_DldMenu").style.top = "calc(50% - " + (document.getElementById("videoService_DldMenu").offsetHeight / 2) + "px)";
	}
	else {
		document.getElementById("videoService_DldDimmer").style.display = "none";
		document.getElementById("videoService_DldMenu").style.display = "none";
	}
}
