# Project Requirements for Cat Clicker Premium
**Visuals**

* The application should display
  * a list of at least 5 cats, listed by name

  * an area to display the selected cat

* In the cat display area, the following should be displayed

  * the cat's name

  * a picture of the cat

  * text showing the number of clicks

* The specifics of the layout do not matter, so style it however you'd like.

**Interaction**

* When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.

* The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.

**Resources**

Check out the earlier reading node on [how to deal with event listeners and closures](https://classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/271165859175461/lessons/3417188540/concepts/34803486710923). You likely will need it to get the click events for your cat list to work.

* Use the model view controller  (if you can)

**Inspiration**

![Cute Cat for Inspiration](https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640)

Thanks to [jetske](https://www.flickr.com/photos/jetske) for the photo.

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