
# ease

  Easing functions (for canvas etc)

  - linear
  - inQuad
  - outQuad
  - inOutQuad
  - inCube
  - outCube
  - inOutCube
  - inQuart
  - outQuart
  - inOutQuart
  - inQuint
  - outQuint
  - inOutQuint
  - inSine
  - outSine
  - inOutSine
  - inExpo
  - outExpo
  - inOutExpo
  - inCirc
  - outCirc
  - inOutCirc
  - inBack
  - outBack
  - inOutBack
  - inBounce
  - outBounce
  - inOutBounce
  - inElastic
  - outElastic
  - inOutElastic

## Aliases

  - in-quad
  - out-quad
  - in-out-quad
  - in-cube
  - out-cube
  - in-out-cube
  - in-quart
  - out-quart
  - in-out-quart
  - in-quint
  - out-quint
  - in-out-quint
  - in-sine
  - out-sine
  - in-out-sine
  - in-expo
  - out-expo
  - in-out-expo
  - in-circ
  - out-circ
  - in-out-circ
  - in-back
  - out-back
  - in-out-back
  - in-bounce
  - out-bounce
  - in-out-bounce
  - in-elastic
  - out-elastic
  - in-out-elastic

## Example

```js
var ease = require('ease');
var requestAnimationFrame = require('raf');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var stop = false;
function animate() {
  if (stop) return;
  requestAnimationFrame(animate);
  draw();
}

var startx = 20;
var x = startx;
var destx = 300;
var y = 400 / 2;
var duration = 1000;
var start = Date.now();
var end = start + duration;

function draw() {
  var now = Date.now();
  if (now - start >= duration) stop = true;
  var p = (now - start) / duration;
  val = ease.inOutBounce(p);
  x = startx + (destx - startx) * val;
  canvas.width = canvas.width;
  ctx.fillStyle = 'red';
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
}

animate();

```

## Special Thanks

These easing functions were originally written by [Robert Penner](http://robertpenner.com/easing/),
and optimized by the [tween.js](https://github.com/sole/tween.js) authors.

## License

The MIT License

Copyright (c) 2010-2012 Tween.js authors.

Easing equations Copyright (c) 2001 Robert Penner http://robertpenner.com/easing/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
