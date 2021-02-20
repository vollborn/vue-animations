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
import 'vue-animations';
```

Then you need to add two classes to your element.
<br/>The first class should be *vue-animations*, and the second class the desired effect you want.

```html
<div class="vue-animations fade-in">
  Hello World!
</div>
```

Currently available effect classes:
- fade-in
- fade-from-left
- fade-from-right
- size-fade-in
- draw-to-right

The classes *.fade-from-left* and *.fade-from-right* automatically change to *.fade-in* at 800px screen width for better mobile support.


## More Effects
You can simply create your own effects by attaching the class *.vue-animations* to your element.
<br />If it is visible on screen, the class *.applied* will be added.
