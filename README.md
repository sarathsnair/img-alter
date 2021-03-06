# img-alter
[![Build Status](https://travis-ci.org/sarathsnair/img-alter.svg?branch=master)](https://travis-ci.org/sarathsnair/img-alter)
#### A Javascript module to fill 'ALT' attribute of all images in a web page using [Microsoft Vision API](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api).
![sample gif file](https://raw.githubusercontent.com/sarathsnair/img-alter/master/images/sample.gif)

## Installation and Usage
### 1)Get free Microsoft Vision API Key from [here.](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api)
Microsoft Vision uses deep learning to analyse an image. 
### 2)Install via `npm` or `bower`
With [npm](https://www.npmjs.com/) :

> npm install img-alter --save

With [bower](https://bower.io) :

> bower install img-alter --save

### 3) Add `img-alter.js` or `img-alter.min.js` to html file. 
 `<script src="img-alter.js" type="text/javascript"></script>` 
### 4) Invoke API
Once the page load completes, Invoke

> `ImageAlter.fillImageAltTags({apiKey:"xxxxxxxxxxxxx"})`

This will replace alternative attribute of all images in a webpage with its caption. Replace `xxxxxxxxxxxxx` with your own API Key.


## Sample Images with Captions

![bill clinton](https://raw.githubusercontent.com/sarathsnair/img-alter/master/images/bill_clinton.jpg)

Bill Clinton in a suit and tie


![Laptop](https://raw.githubusercontent.com/sarathsnair/img-alter/master/images/laptop.jpg)

a laptop computer


![Fireworks](https://raw.githubusercontent.com/sarathsnair/img-alter/master/images/fireworks.jpg)

a fireworks in the dark


![Pizza](https://raw.githubusercontent.com/sarathsnair/img-alter/master/images/pizza.jpg)

a close up of a pizza on a wooden table


![Plane](https://raw.githubusercontent.com/sarathsnair/img-alter/master/images/jet_plane.jpg)

a fighter jet flying in the sky


![Woman](https://raw.githubusercontent.com/sarathsnair/img-alter/master/images/woman.jpg)

a woman talking on a cell phone

## Having Trouble
If you are having trouble using this library, please open a [New Issue](https://github.com/sarathsnair/img-alter/issues/new)

## Love this project? 
Just give it a star(⭐️) and spread the word.
