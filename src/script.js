if (document.URL.substring(0, document.URL.indexOf("://")) != "https") {
	alert("Not secure!");
}

var actvHdrM = 0;
var mClkThisMOver = false;

var pageArr = [
	"videos",
	"docs",
	"contact",
];

function hdrMover(b) {
	if (b) {
		mClkThisMOver = false;
		document.getElementById("hdr").style.animation = "0.25s openHdr 1";
		document.getElementById("hdr").style.width = "160px";
		for (var i = 0; i < pageArr.length; i++) {
			document.getElementById("page_" + pageArr[i]).style.animation = "0.25s openHdrBlur 1";
			document.getElementById("page_" + pageArr[i]).style.filter = "blur(10px)";
		}
	}
	else {
		document.getElementById("hdr").style.animation = "0.25s closeHdr 1";
		document.getElementById("hdr").style.width = "70px";
		for (var i = 0; i < pageArr.length; i++) {
			if (!(actvHdrM == i && mClkThisMOver)) {
				document.getElementById("page_" + pageArr[i]).style.animation = "0.25s closeHdrBlur 1";
				document.getElementById("page_" + pageArr[i]).style.filter = "blur(0px)";
			}
		}
	}
}

function hdrSwt(n) {
	if (actvHdrM != n) {
		document.getElementById("page_" + pageArr[actvHdrM]).style.animation = "0.5s exitPage 1";
		document.getElementById("page_" + pageArr[actvHdrM]).style.left = "-100%";
		document.getElementById("page_" + pageArr[actvHdrM]).style.filter = "blur(0px)";
		document.getElementById("hdr").style.animation = "0.25s closeHdr 1";
		document.getElementById("hdr").style.width = "70px";

		document.getElementById("hdrActive").style.animation = "0.5s hdrSwt_" + actvHdrM + "_" + n + " 1";
		document.getElementById("hdrActive").style.top = (110 + (n * 70)) + "px";
		actvHdrM = n;
		mClkThisMOver = true;

		document.getElementById("page_" + pageArr[n]).style.animation = "0.75s enterPage 1";
		document.getElementById("page_" + pageArr[n]).style.left = "70px";
		document.getElementById("page_" + pageArr[n]).style.filter = "blur(0px)";
	}
}
