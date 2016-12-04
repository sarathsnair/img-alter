# img-alter
A Javascript module to fill 'ALT' attribute of all images in a web page using [Microsoft Vision API](https://www.microsoft.com/cognitive-services/en-us/computer-vision-api).

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


**Sample Images with Captions**

![bill clinton](http://www.gannett-cdn.com/-mm-/fef8131c29b275565180e501a489e5973ad71e0c/r=x203&c=200x200/local/-/media/USATODAY/USATODAY/2013/01/09/billclinton-dnc-1_1.jpg)

Bill Clinton in a suit and tie


![Laptop](http://ecx.images-amazon.com/images/I/41+Twb04JvL._AC_SS200_.jpg)

a laptop computer


![Fireworks](https://11111-presscdn-0-2-pagely.netdna-ssl.com/wp-content/uploads/2016/05/fireworks-2-200x200.jpg)

a fireworks in the dark


![Pizza](http://s.hswstatic.com/gif/recipes/easy-personal-pizza-recipe-1.jpg)

a close up of a pizza on a wooden table


![Plane](http://blogs-images.forbes.com/thumbnails/blog_2092/pt_2092_2592_o.jpg?t=1356633506&width=200&height=200)

a fighter jet flying in the sky


![Woman](http://images.freeimages.com/images/premium/large-thumbs/4642/46425206-happy-young-woman-talking-on-mobile-phone.jpg)

a woman talking on a cell phone
