"use strict";
var HLP =(function(){
	/*
		ifBrowser 0.0.3
		a function which returns specified data depending on a user's browser
		written by Plyushch Gregory, 2012
		is free to use for everyone in condition of saving the author's name

		using example:
		HLP.whatBrowser({"firefox":"firefox","ie":"explorer","chrome safari":"webkit","opera":"opera"})
		passing object:
		{'browser name [browser version]':'string to return by function', ...}	
	*/
	var browser = function(obj) {
		var none = obj["none"] || "none";
		function cBrowser() {
			var ua = navigator.userAgent;
			var bName = function () {
				if (ua.search(/MSIE/) > -1) return "ie";
				if (ua.search(/Firefox/) > -1) return "firefox";
				if (ua.search(/Opera/) > -1) return "opera";
				if (ua.search(/Chrome/) > -1) return "chrome";
				if (ua.search(/Safari/) > -1) return "safari";
				if (ua.search(/Konqueror/) > -1) return "konqueror";
				if (ua.search(/Iceweasel/) > -1) return "iceweasel";
				if (ua.search(/SeaMonkey/) > -1) return "seamonkey";}();
			var version = function (bName) {
				switch (bName) {
					case "ie" : return (ua.split("MSIE ")[1]).split(";")[0];break;
					case "firefox" : return ua.split("Firefox/")[1];break;
					case "opera" : return ua.split("Version/")[1];break;
					case "chrome" : return (ua.split("Chrome/")[1]).split(" ")[0];break;
					case "safari" : return (ua.split("Version/")[1]).split(" ")[0];break;
					case "konqueror" : return (ua.split("KHTML/")[1]).split(" ")[0];break;
					case "iceweasel" : return (ua.split("Iceweasel/")[1]).split(" ")[0];break;
					case "seamonkey" : return ua.split("SeaMonkey/")[1];break;
				}}(bName);
			return [bName,bName + version.split(".")[0],bName + version];
		}
		var current_browser = cBrowser();
		for (var key in obj) {
			var trg = key.toLowerCase();
			if (trg.indexOf(current_browser[2]) > -1) return obj[key];
			else if (trg.indexOf(current_browser[1]) > -1) return obj[key];
			else {
				var nsymbol = trg.charAt(trg.indexOf(current_browser[0])+current_browser[0].length);
				if (trg.indexOf(current_browser[0]) > -1 && (nsymbol == " " || nsymbol == "")) return obj[key];
			}
		}
		return none;
        },
        /*	how to use

            HLP.whatDevice.any() // returns true, if it is mobile browser
            HLP.whatDevice.iOS() // returns true, if this is iPhone or iPad

             you can use : .Android .BlackBerry .iOS .Opera .Windows .any
        */
        mobileDetection = {
            Android:function () {
                return navigator.userAgent.match(/Android/i) || false;
            },
            BlackBerry:function () {
                return navigator.userAgent.match(/BlackBerry/i)  || false;
            },
            iOS:function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)  || false;
            },
            Opera:function () {
                return navigator.userAgent.match(/Opera Mini|Opera Mobi/i)  || false;
            },
            Windows:function () {
                return navigator.userAgent.match(/IEMobile/i)  || false;
            },
            any:function () {
                return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            }
        },
        inlineStyle = function(element, styleName){
            var styles = element.getAttribute('style'),
                value;
            styles && styles.split(";").forEach(function (e) {
                var style = e.split(":");
                if (style[0].replace(/^\s+|\s+$/g, '') === styleName) {
                    value = style[1];
                }
            });
            return value;

        };
	return {
		whatBrowser: browser,
		whatDevice: mobileDetection,
        inlineStyle:inlineStyle
	}
}());