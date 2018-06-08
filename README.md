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

* The number of clicks should increment when the cat picture is clicked.

**Inspiration**

* When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.

* The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.

![Cute Cat for Inspiration](https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454)

Thanks to [jetske](https://www.flickr.com/photos/jetske) for the photo.

**Resources**

In case you need a refresher on events and event listeners, here are some links.

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