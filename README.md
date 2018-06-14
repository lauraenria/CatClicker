# Project Requirements for Cat Clicker Premium
**Visuals**

* The application should display
  * a list of cats by name

  * an area to display the selected cat

 * an admin button

 * an admin area with inputs for changing the cat's name, url, and number of clicks (hidden by default)


* In the cat display area, the following should be displayed

  * the cat's name

  * a picture of the cat

  * text showing the number of clicks

* The specifics of the layout do not matter, so style it however you'd like.

**Interaction**

* When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.

* The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.

*  When the admin button is clicked, the admin area should appear with the inputs filled in for the currently-selected cat.

* When the cancel button in the admin area is pressed, the admin area disappears.

* When the save button in the admin area is pressed, the currently-selected cat's values update with the values in the admin area, and the admin area disappears.

**Resources**

Check out the earlier reading node on [how to deal with event listeners and closures](https://classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/271165859175461/lessons/3417188540/concepts/34803486710923). You likely will need it to get the click events for your cat list to work.

* Use the model view controller  (if you can)

**Inspiration**

![Cute Cat for Inspiration](https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480)

Thanks to [Doug](https://www.flickr.com/photos/deerwooduk/579761138) for the photo.

**Resources**

* [Model-View-Controller (MVC) in JavaScript](https://alexatnet.com/model-view-controller-mvc-in-javascript/)

If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with [elem.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener).

```javascript
var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
}, false);
If you're using jQuery, you'll be adding the "click" event listener with [jQuery.click()](http://api.jquery.com/click/).

```

```javascript

$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
});

```

* [Udacity soluction](https://github.com/udacity/ud989-cat-clicker-premium-vanilla/tree/master/js)