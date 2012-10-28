
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

## Example

```js
var ease = require('ease');
var requestAnimationFrame = require('raf');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

animate();

var stop = false;
function animate() {
  if (stop) return;
  requestAnimationFrame(animate);
  draw();
}

var startx = 20;
var x = startx;
var destx = 700;
var y = 400 / 2;
var duration = 1000;
var start = Date.now();

function draw() {
  var now = Date.now();
  if (now - start >= duration) stop = true;
  x = ease.inOutCirc(now - start, startx, destx - x, duration) | 0;
  canvas.width = canvas.width;
  ctx.fillStyle = 'red';
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
}
```

# License

  MIT
