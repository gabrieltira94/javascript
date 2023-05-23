/**
 * Falsy - a value that is considered false when encountered in a Boolean context
 * 
 * Falsy values: false, 0, -0, 0n, "", null, undefined, and NaN
 */
if (false)
  console.log('You cannot see this message.');

if (null)
  console.log('You cannot see this message.');

if (undefined)
  console.log('You cannot see this message.');

if (0)
  console.log('You cannot see this message.');

if (-0)
  console.log('You cannot see this message.');

if (0n)
  console.log('You cannot see this message.');

if (NaN)
  console.log('You cannot see this message.');

if ("")
  console.log('You cannot see this message.');


/**
 * Truthy - a value that is considered true when encountered in a Boolean context
 */

if (true)
  console.log('Message for "true" value.');

if ({})
  console.log('Message for "{}" value.');

if ([])
  console.log('Message for "[]" value.');

if (42)
  console.log('Message for "42" value.');

if ("0")
  console.log('Message for ""0"" value.');

if ("false")
  console.log('Message for ""false"" value.');

if (new Date())
  console.log('Message for "new Date()" value.');

if (-42)
  console.log('Message for "-42" value.');

if (12n)
  console.log('Message for "12n" value.');

if (3.14)
  console.log('Message for "3.14" value.');

if (-3.14)
  console.log('Message for "-3.14" value.');

if (Infinity)
  console.log('Message for "Infinity" value.');

if (-Infinity)
  console.log('Message for "-Infinity" value.\n');


/**
 * Operator: !! (double bang)
 * Similar to Boolean casting
 * 
 * Evaluates the truthy or falsy context of a value
 */
const obj = {};
const doSomething = () => console.log('Message for "!!" example');

if (!!obj.myString)
  doSomething();

// than it is to write 
if (typeof obj.myString !== 'undefined' && obj.myString !== null && obj.myString !== '')
  doSomething();
