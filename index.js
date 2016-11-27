(function($) {
    var ImageAlter = {
        fetchImageAltTags: function() {
            var apikey = "e819d57ca4064af4ada5ae1cc4ff0628";
            var url = "https://api.projectoxford.ai/vision/v1.0/describe";
            /*var request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.setRequestHeader('Access-Control-Allow-Origin','*');
            request.send({
                "url": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/first-family/42_bill_clinton.jpg"
            });
            
            request.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status >= 200 && this.status < 400) {
                        console.log("Success");
                        var resp = this.responseText;
                    } else {
                        console.log("Error");
                    }
                }

            }*/

            var getImageURL = function() {
                var arr = [];
                var imgs = document.getElementsByTagName('img');
                for (var i = 0; i < imgs.length; i++) {
                    arr.push(imgs[i].src);
                }
                return arr;
            };
            var images = $('img');
            var imageurls = getImageURL();
            for (var i = 0; i < imageurls.length; i++) {
                (function(i) {
                    var obj = {
                        "url": imageurls[i]
                    }
                    $.ajax({
                        url: url,
                        type: "POST",
                        dataType: "json",
                        headers: {
                            "Ocp-Apim-Subscription-Key": apikey,
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify(obj),
                        success: function(data) {
                            console.log("URL = " + obj.url);
                            console.log(data.description.captions[0].text);
                        },
                        error: function(error) {
                            console.log(error);
                        },
                    });
                })(i);
            }
        }
    }
    window.ImageAlter = ImageAlter;
})(jQuery);