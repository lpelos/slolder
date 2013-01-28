# jQuery-slolder

A really simple jquery lol slider.

## Requirements

JQuery, any version should do, really (at least works fine with jQuery v1.7.2).

## Installing

There is no need for installing. Just download the damn thing and add 
it to your HTML with something like this:
	
	<script src="jquery-slolder.js"></script>

## Markup

There must be a container with all the wannabe slides within it, preferably 
a unordered list, just for the sake of the best pratices, but any other valid 
structure should work too, in case you're a hipster and don't like to follow 
the patterns. For instance:

	<ul class="foo">
	   <li>Slide 1</li>
	   <li>Slide 2</li>
	   <li>Slide 3</li>
	</ul>

## It's Alive!

To slolder it up, call the slolder jquery method on the container and behold 
the magic happening. Like this:

	$(".foo").slolder();
	
## Options

You can choose your own interval between transitions and the time each transition 
effect takes with something like this:

	$(".foo").slolder({
	   interval: 2000, 	// default: 5000
	   transitionTime: 500 	// default: 1000
	});
