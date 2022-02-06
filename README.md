# Vue Animations
This package contains some JavaScript & CSS assets for fading elements in on scroll.


## Installation
NPM:
```
npm install vollborn/vue-animations
```

Yarn:
```
yarn add vollborn/vue-animations
```


## Usage
To use the scroll animations, you need to import the package to your project beforehand.
```js
import VueAnimations from 'vue-animations';
```

Then you need to add two classes to your element.
<br/>The first class should be *vue-animations*, and the second class the desired effect you want.

```html
<div class="vue-animations fade-in">
  Hello World!
</div>
```

### Effects

Currently available effect classes:
- fade-in
- fade-from-left
- fade-from-right
- size-fade-in
- draw-to-right

The classes *.fade-from-left* and *.fade-from-right* automatically change to *.fade-in* at 600px screen width for better mobile support.

### Element list

The element list is automatically updated on every scroll event. You can disable this to improve performance.
```js
VueAnimations.setAutomaticElementListReload(false);
```

If disabled, the list needs to updated manually, otherwise the animations *will not* work.
You can do that with the reloadElements function:
```js
VueAnimations.reloadElements()
```

For the best possible performance the list should be updated on every component mount, that implements any animations.


## More Effects
You can simply create your own effects by attaching the class *.vue-animations* to your element.
<br />If it is visible on screen, the class *.applied* will be added.
