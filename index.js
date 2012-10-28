
/**
 * Notation:
 * 
 *   - `t` current time in ms
 *   - `b` start value
 *   - `c` distance relative to start value
 *   - `d` duration in ms
 * 
 */

exports.linear = function(t, b, c, d){
  return c * t / d + b;
};

exports.inQuad = function (t, b, c, d) {
  t /= d;
  return c * t * t + b;
};

exports.outQuad = function (t, b, c, d) {
  t /= d;
  return -c * t * (t - 2) + b;
};

exports.inOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

exports.inCube = function(t, b, c, d) {
  t /= d;
  return c*t*t*t + b;
};

exports.outCube = function(t, b, c, d) {
  t /= d;
  t--;
  return c*(t*t*t + 1) + b;
};

exports.inOutCube = function(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
};

exports.inQuart = function(t, b, c, d) {
  t /= d;
  return c * t * t * t * t + b;
};

exports.outQuart = function(t, b, c, d) {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};

exports.inOutQuart = function(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c / 2 * t * t * t * t + b;
  t -= 2;
  return -c / 2 * (t * t * t * t - 2) + b;
};

exports.inQuint = function(t, b, c, d) {
  t /= d;
  return c * t * t * t * t * t + b;
};

exports.outQuint = function(t, b, c, d) {
  t /= d;
  t--;
  return c * (t * t * t * t * t + 1) + b;
};

exports.inOutQuint = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t * t * t + 2) + b;
};

exports.inSine = function(t, b, c, d) {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};

exports.outSine = function(t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

exports.inOutSine = function(t, b, c, d) {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

exports.inExpo = function(t, b, c, d) {
  return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

exports.outExpo = function(t, b, c, d) {
  return c * (-Math.pow(2, -10 * t/d) + 1) + b;
};

exports.inOutExpo = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  t--;
  return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
};

exports.inCirc = function(t, b, c, d) {
  t /= d;
  return -c * (Math.sqrt(1 - t * t) - 1) + b;
};

exports.outCirc = function(t, b, c, d) {
  t /= d;
  t--;
  return c * Math.sqrt(1 - t * t) + b;
};

exports.inOutCirc = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
  t -= 2;
  return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};