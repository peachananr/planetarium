#Planetarium by Pete R.
A jQuery plugin that will let you construct an interactive planet and build the Universe on your website.
Created by [Pete R.](http://www.thepetedesign.com), Founder of [Travelistly](http://www.travelistly.com) and [BucketListly](http://www.bucketlistly.com)

License: [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US)



## Demo
[View demo](http://peachananr.github.io/planetarium/demo/planetarium_demo.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari on both desktop and smartphones have been tested. Not tested on IE.

## Basic Usage
This plugin will enable you the ability to create and shape planets, and construct the universe you want to live in.. for your website. :)

To do this, you will have to include the latest jQuery library together with `jquery.planetarium.js` and `planetarium.css` into your document's `<head>`. You can also use our earth, jupiter or saturn textures available inside the demo folder. 
  
Once everything is added correctly into your project's directory, let's begin creating planets with this HTML markup:

````html
<body>
  ..
  <div class="earth planet"></div>
  ..
</body>

````

And all you have to do is call the Planetarium function as shown below and your planet will sprung up to life. No need to wait 4.6 billion years for the earth to form. :)

````javascript
 $(".planet").planetarium({
   autospin: "1000ms",                                  // You can define the speed of which your planet spin here. This option accepts the second or milliseconds in forms of "1s" and "1000ms" respectively. The default value is 1000ms.
   angle: "20deg",                                      // You can define the degree in which your planet will be tilted. Make sure you end the value with deg. The default value is 20deg.
   glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)", // You can define the glow and shadow of your planet here. This option accepts normal box-shadow styles. The default value is as shown. The first part, "rgba(255, 255, 255, 0.34902) 0px 0px 50px", is the glow effect and the second part, "inset 33px 20px 50px rgba(0,0,0,0.5)", is the shadow.
   pattern: "img/texture-earth.jpg",                    // You can define your custom planet's pattern here. The option accepts image path. Equal size with the pattern-earth.jpg provided is recommended. The default value is "img/texture-earth.jpg".
   size: "100x100",                                     // You can define the width and height of your planets here in a format of "(width)x(height)". The default value is 100x100.
   float: true,                                         // You can toggle the floating animation here. Set it to false to disable it. The default value is true.
   space: "body",                                       // You can define the container's selector to be used as the Space here. The default value is "body".
   ring: false,                                         // You can toggle the ring of your planet here. To enable the ring, set this to true. The default value is false.
   ringColor: "#fff",                                   // You can set the ring's color here. The option accepts HEX color code. The default value is "#fff".
   ringAngle: "20deg"                                   // You can define the angle of the ring here. Make sure you end the value with deg like this: "180deg". The default option is "20deg".
 });
````

## HTML Markups
The problem with using options above is all your planets will look the same. To specify each of your planet's style, you can utilize the HTML markup I've provided:

### data-ptr-autospin
Individually assign a planet with its own autospin option:

````html
  <div class="earth planet" data-ptr-autospin="4000ms"></div>
````

### data-ptr-angle
Individually assign a planet with its own angle option:

````html
  <div class="earth planet" data-ptr-angle="60deg"></div>
````

### data-ptr-glow
Individually assign a planet with its own glow and shadow options:

````html
  <div class="earth planet" data-ptr-glow="0 0 50px #fff"></div>
````
### data-ptr-size
Individually assign a planet with its own width and height options:

````html
  <div class="earth planet" data-ptr-size="500x500"></div>
````
### data-ptr-float
Individually assign a planet with its own float option options:

````html
  <div class="earth planet" data-ptr-float="false"></div>
````
### data-ptr-ring
Individually assign a planet with its own ring option:

````html
  <div class="earth planet" data-ptr-ring="true"></div>
````
### data-ptr-ringcolor
Individually assign a planet with its own ring's color option:

````html
  <div class="earth planet" data-ptr-ringcolor="#fff"></div>
````

### data-ptr-ringangle
Individually assign a planet with its own ring's angle option:

````html
  <div class="earth planet" data-ptr-ringangle="30deg"></div>
````

Now you will have create a micro solar system right in front of you, no science required. :)


If you want to see more of my plugins, visit [The Pete Design](http://www.thepetedesign.com/#design), or follow me on [Twitter](http://www.twitter.com/peachananr) and [Github](http://www.github.com/peachananr).

## Other Resources
- Tutorial (Coming Soon)
