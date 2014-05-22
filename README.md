JMiniThumbPager
===========

Ultra simple JQuery based Thumbnail Pager. No CSS required. No fancy effects.

###How to use it?

Step 1: Put your images inside a list: 

```html
    <div class="slider">
        <ul>
            <li><img class="slider-image" src="img/pattern_1.png"></li>
            <li><img class="slider-image"  src="img/pattern_2.png"></li>
            <li><img class="slider-image" src="img/pattern_3.png"></li>
        </ul>
    </div>
```
Step 2: Call JMiniThumbPager():

```javascript
	$(".slider").JMiniThumbPager({
        prev: "&#60;",
        next: "&#62;",
    });  
```

Step 3: That's all! You're ready to go! :)
