# Vue Animations
This package contains some JavaScript & CSS assets for fading elements in on scroll.


## Installation
NPM:
```shell
npm install vollborn/vue-animations
```

Yarn:
```shell
yarn add vollborn/vue-animations
```


## Usage
To use the scroll animations, you need to import the package to your project beforehand.
```js
// Import the package
import VueAnimations from 'vue-animations';

// Registering the component
Vue.component('VueAnimation', VueAnimations.VueAnimation);
```

Using the following component you can apply your desired effect.

```html
<VueAnimation type="fade-in">
    Hello World!
</VueAnimation>
```

You can also apply delay to your animation. The maximum amount of delay is currently set to **5**.

```html
<VueAnimation type="fade-in" delay="1">
  Hello World!
</VueAnimation>
```

## Effects

Currently available effect types:
- fade-in
- fade-from-left
- fade-from-right
- size-fade-in
- draw-to-right

The types *.fade-from-left* and *.fade-from-right* automatically change to *.fade-in* at 600px screen width for better mobile support.


## More Effects
You can simply create your own effects by attaching the class *.vue-animations* to your element.
<br />If it is visible on screen, the class *.applied* will be added.

An example:
```css
.vue-animations.fade-in {
    opacity: 0;
    transition: 0.3s ease-in;
}

.vue-animations.applied.fade-in {
    opacity: 1;
}
```