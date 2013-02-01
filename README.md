# jQuery-slolder

A really simple jquery lol slider.

Example and Documentation can be found in [Slolder Github page](http://lpelos.github.com/slolder)

## Requirements

JQuery v1.6+

## Installing

Installing? Ain't nobody has time fo that. Just download the damn thing and add 
it to your HTML with something like this:

```html
<script src="jquery-slolder.js"></script>
```

## Markup

There must be a container with all the wannabe slides within it, preferably 
a unordered list, just for the sake of the best pratices, but any other valid 
structure should work too, in case you're a hipster and don't like to follow 
the patterns. For instance:

```html
<ul class="foo">
   <li>Slide 1</li>
   <li>Slide 2</li>
   <li>Slide 3</li>
</ul>
```

## Style

The slides container must have a established height. For instance:

```css
.foo { height: 300px } 
```

## It's Alive!

To slolder it up, call the slolder jquery method on the container and behold 
the magic happening. Like this:

```javascript
$(".foo").slolder();
```

## Options

### interval
Time between each transition, in miliseconds. Default: 5000

```javascript
$(".foo").slolder({
   interval: 2000
});
```

### transitionTime
Time taken by each transition animation, in miliseconds. Default: 1000

```javascript
$(".foo").slolder({
   transitionTime: 500
});
```

### transitionFunction
Animation function that takes place in each transition. Accespts a string and a function. Default: "fadeDown"

#### string
By now, the only two string accepted are: "fadeDown" or "slideUp"

```javascript
$(".foo").slolder({
   transitionFunction: "slideUp"
});
```

#### function
The function must receive ```slide``` as and argument, which will be the receiver of the animation, and ```return``` its result, otherwise it won't work. For instance:

```javascript
$(".foo").slolder({
   transitionFunction: function(slide){
      return slide.animate({
         height: "0",
         marginLeft: "-2000px",
         opacity: "0"
      }, 500)
   }
});
```

### All together

```javascript
$(".foo").slolder({
   interval: 3000,
   transitionTime: 600,
   transitionFunction: "slideUp"
});
```
