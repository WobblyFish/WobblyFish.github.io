if (document.URL.substring(0, document.URL.indexOf("://")) != "https") {
	window.location.replace("https://" + document.URL.substring(document.URL.indexOf("://") + 3));
}

var actvHdrM = 0;
var mClkThisMOver = false;

var pageArr = [
	"Videos",
	"Docs",
	"Contact",
];

var vHdrInsS = "<img src=\"/src/Finnimations_Icon.svg\" draggable=\"false\"><div id=\"hdrActive\"></div><ul onmouseover=\"hdrMover(true)\" onmouseout=\"hdrMover(false)\">";
for (var i = 0; i < pageArr.length; i++) {
	vHdrInsS += "<li onclick=\"hdrSwt(" + i + ")\" class=\"hdrPgLi\" style=\"background-image:url(\'/src/" + pageArr[i].toLowerCase() + ".svg\');\">" + pageArr[i] + "</li>";
}
vHdrInsS += "</ul>";
document.getElementById("hdr").innerHTML = vHdrInsS;

if (screen.availWidth < 1000) {
	document.getElementById("hdrActive").style.width = "calc(" + (100 / pageArr.length) + "vw - " + (56 / pageArr.length) + "px)";
	for (var i = 0; i < document.getElementsByClassName("hdrPgLi").length; i++) {
		document.getElementsByClassName("hdrPgLi")[i].style.width = "calc(" + (100 / pageArr.length) + "vw - " + (56 / pageArr.length) + "px);";
	}
}

function hdrMover(b) {
	if (screen.availWidth >= 1000) {
		if (b) {
			mClkThisMOver = false;
			document.getElementById("hdr").style.animation = "0.25s openHdr 1";
			document.getElementById("hdr").style.width = "160px";
		}
		else {
			document.getElementById("hdr").style.animation = "0.25s closeHdr 1";
			document.getElementById("hdr").style.width = "70px";
		}
	}
}

function hdrSwt(n) {
	if (actvHdrM != n) {
		if (screen.availWidth >= 1000) { // Desktop
			document.getElementById("page_" + pageArr[actvHdrM].toLowerCase()).style.animation = "0.5s exitPage 1";
			document.getElementById("page_" + pageArr[actvHdrM].toLowerCase()).style.left = "-100%";
			document.getElementById("hdr").style.animation = "0.25s closeHdr 1";
			document.getElementById("hdr").style.width = "70px";

			document.getElementById("hdrActive").style.animation = "0.5s hdrSwt_" + actvHdrM + "_" + n + " 1";
			document.getElementById("hdrActive").style.top = (110 + (n * 70)) + "px";

			document.getElementById("page_" + pageArr[n].toLowerCase()).style.animation = "0.75s enterPage 1";
			document.getElementById("page_" + pageArr[n].toLowerCase()).style.left = "70px";
		}
		else { // Mobile
			document.getElementById("page_" + pageArr[actvHdrM].toLowerCase()).style.animation = "0.5s m_exitPage 1";
			document.getElementById("page_" + pageArr[actvHdrM].toLowerCase()).style.left = "-100%";

			document.getElementById("hdrActive").style.animation = "0.5s m_hdrSwt_" + actvHdrM + "_" + n + " 1";
			document.getElementById("hdrActive").style.left = "calc(" + (n * (100 / pageArr.length)) + "vw - " + (54 - (n * (56 / pageArr.length))) + "px)";

			document.getElementById("page_" + pageArr[n].toLowerCase()).style.animation = "0.5s m_enterPage 1";
			document.getElementById("page_" + pageArr[n].toLowerCase()).style.left = "0px";
		}
		actvHdrM = n;
		mClkThisMOver = true;
	}
}

function close_welcome_notification() {
	document.getElementById("page_coverall").style.display = "none";
}
