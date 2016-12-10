(function () {
    "use strict";

    var ImageAlter = {
        fillImageAltTags: function (obj) {
            if (typeof obj === null || !obj.apiKey) {
                console.warn("img-alter needs Microsoft Vision API Key to work properly.");
                return -1;
            }
            var apikey = obj.apiKey;
            var url = "https://api.projectoxford.ai/vision/v1.0/describe";
            var getImageURL = function () {
                var arr = [];
                var imgs = document.getElementsByTagName('img');
                for (var i = 0; i < imgs.length; i++) {
                    arr.push(imgs[i].src);
                }
                return arr;
            };

            var setAltTags = function (image, altTagString) {
                image.setAttribute('alt', altTagString);
            };
            var images = document.getElementsByTagName("img");
            var imageurls = getImageURL();
            var arr = [];
            for (var i = 0; i < imageurls.length; i++) {
                (function (i) {
                    var obj = {
                        "url": imageurls[i]
                    }
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.open("POST", url, true);
                    xmlhttp.setRequestHeader("Content-type", "application/json");
                    xmlhttp.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with');
                    xmlhttp.setRequestHeader("Ocp-Apim-Subscription-Key", apikey);
                    xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
                            //console.log(xmlhttp.responseText);
                            setAltTags(images[i], JSON.parse(xmlhttp.responseText).description.captions[0].text);
                        } else if (xmlhttp.status == 400) {
                            console.log("image-alter : ther is an error");
                        } else {
                            console.log("image-alter : Something other than 200 is returned");
                        }
                    };
                    xmlhttp.send(JSON.stringify(obj));

                })(i);
            }
        }
    }
    window.ImageAlter = ImageAlter;
})();