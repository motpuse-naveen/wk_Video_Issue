// Author: Blake Perdue <blake.perdue@ingramcontent.com>, Dave Campbell <dave.campbell@ingramcontent.com>
// Version: 1.4
// Release Notes:
//  1.4 - adjusted to assume asset is a self contained html file and embedded in an iframe
//  1.3 - adjusted to support URLs with varying prefixed protcols
//  1.2 - do not open videos in a browser on unsupported devices
//	1.1 - updated fallback URL to use HTML instead of MP4 to open in all browsers
//  1.0 - first release

document.addEventListener("DOMContentLoaded", function(event) {

	function addEmbeddedHTMLFrame(el) {
		var iframeID = el.getAttribute('data-id');
		
		var iframePath = 'https://phoenix-viewer.thepoint.lww.com/asset/' + iframeID;
		
		var container = el.parentNode;
		var newSpan = document.createElement("span");
		newSpan.setAttribute("style", "width:100%; text-align:left; display:block;");
		newSpan.innerHTML = '<iframe src="' + iframePath + '" style="border:0; width:100%; height:600px; max-width:800px;" />';
		container.replaceChild(newSpan,el);
	}

	function showError(element) {
		if (element && element.parentNode) {
			element.parentNode.innerHTML = '<span style="color:#c00; font-weight:bold;">You need an Internet connection to view this video. Please connect and reload this page.</span>';
		}
	}

	try {
		var videoCollection = document.getElementsByClassName('jwp-video');
		var videos = [];
		
		for(var i = 0; i < videoCollection.length; i++) {
			videos.push(videoCollection[i]);
		}
		
		for(var i = 0; i < videos.length; i++) {
			addEmbeddedHTMLFrame(videos[i]);
		}
			
	} catch(e) {
		// error occured, do nothing
	}
});
