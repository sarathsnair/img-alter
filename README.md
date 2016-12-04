# img-alter
A Javascript module to fill 'ALT' attribute of all images in a web page using [Microsoft Vision API](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api).

## Installation

With [npm](https://www.npmjs.com/) :

> npm install img-alter

With [bower](https://bower.io) :

> bower install img-alter

## Usage
 1. Get free Microsoft Vision API Key from [here.](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api) 
 2. Install `img-alter` either using `npm` or `bower`
 3. Add `img-alter.js` script in html file. 
 `<script src="bower_components/img-alter/img-alter.js" type="text/javascript"></script>` 
 4. Invoke `ImageAlter.fillImageAltTags({apiKey:"xxxxxxxxxxxxx"})` once the page loading complete. Replace `xxxxxxxxxxxxx` with your own API Key.


## Sample Images with Captions

![bill clinton](https://github.com/sarathsnair/img-alter/blob/master/images/bill_clinton.jpg)

Bill Clinton in a suit and tie


![Laptop](https://github.com/sarathsnair/img-alter/blob/master/images/laptop.jpg)

a laptop computer


![Fireworks](https://github.com/sarathsnair/img-alter/blob/master/images/fireworks.jpg)

a fireworks in the dark


![Pizza](https://github.com/sarathsnair/img-alter/blob/master/images/pizza.jpg)

a close up of a pizza on a wooden table


![Plane](https://github.com/sarathsnair/img-alter/blob/master/images/jet_plane.jpg)

a fighter jet flying in the sky


![Woman](https://github.com/sarathsnair/img-alter/blob/master/images/woman.jpg)

a woman talking on a cell phone
