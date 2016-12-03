# img-alter
A Javascript module to fill 'ALT' attribute of all images in an HTML file using [Microsoft Vision API](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api). This can be used to recognize an image content using screen readers.

**Installation**
With [npm](https://www.npmjs.com/) :

> npm install img-alter

With [bower](https://bower.io) :

> bower install img-alter

**Usage**
 1. Install the package either using npm or bower
 2. Add the script in html file. 
 `<script src="bower_components/img-alter/img-alter.js" type="text/javascript"></script>` 
 3. Subscribe for Microsoft Vision Cognitive Services and get apiKey from [here](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api)
 4. Invoke `ImageAlter.fillImageAltTags({apiKey:"xxxxxxxxxxxxx"})` once the page loading complete. Replace `xxxxxxxxxxxxx` with your own API Key from step 3.
