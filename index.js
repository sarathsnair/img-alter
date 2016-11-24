(function () {
    var ImageAlter = {
        fetchImageAltTags: function () {
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
            var obj = {
                "url": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/first-family/42_bill_clinton.jpg"
            };
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                headers: {
                    "Ocp-Apim-Subscription-Key": "e819d57ca4064af4ada5ae1cc4ff0628",
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(obj),
                success: function (data) {
                    console.log(data);
                },
                error: function (error) {
                    console.log(error);
                },
            });

        }
    }
    window.ImageAlter = ImageAlter;
})();