# Project Requirements for Cat Clicker
**Visuals**

* The application should display a picture of a cat and a number of clicks.
* The specifics of the layout do not matter, so style it however you'd like.

**Interaction**

* The number of clicks should increment when the cat picture is clicked.

**Inspiration**

![Cute Cat for Inspiration](https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426)

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
