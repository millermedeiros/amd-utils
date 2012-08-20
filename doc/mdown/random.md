# amd-utils / random #

Pseudo-random generators.



## choice(...items):*

Returns a random element from the supplied arguments or from an array if single
argument is an array.

### Example:

```js
choice(1, 2, 3, 4, 5); // 3

var arr = ['lorem', 'ipsum', 'dolor'];
choice(arr); // 'dolor'
```



## guid():String

Generates as best a guid that JavaScript can generate, see [Globally Unique Identifier](http://en.wikipedia.org/wiki/Globally_unique_identifier)

### Example:

```js
guid();      // 830e9f50-ac7f-f369-a14f-ed0e62b2fa0b
guid();      // 5de3d09b-e79c-1727-d32b-48c49228d508
```



## rand([min], [max]):Number

Gets a random number inside range or snap to min/max values.

### Arguments:

 1. `[min]` (Number)         : Minimum value. Defaults to `number/MIN_INT`.
 2. `[max]` (Number)         : Maximum value. Defaults to `number/MAX_INT`.


### Example:

```js
rand();      // 448740433.55274725
rand();      // -31797596.097682
rand(0, 10); // 7.369723
rand(0, 10); // 5.987042
```



## randBit():Number

Returns a random "bit" (0 or 1). Useful for addition/subtraction.

It's slightly faster than `choice(0, 1)` since implementation is simpler (not
that it will make a huge difference in most cases).

See: [`choice()`](#choice)

### Example:

```js
randBit(); // 1
randBit(); // 0

//same effect as
choice(0, 1);
```



## randHex([size]):String

Returns a random hexadecimal string.

The default `size` is `6`.

### Example:

```js
randHex();   // "dd8575"
randHex();   // "e6baeb"
randHex(2);  // "a2"
randHex(30); // "effd7e2ad9a4a3067e30525fab983a"
```



## randInt([min], [max]):Number

Gets a random integer inside range or snap to min/max values.

### Arguments:

 1. `[min]` (Number)         : Minimum value. Defaults to `number/MIN_INT`.
 2. `[max]` (Number)         : Maximum value. Defaults to `number/MAX_INT`.


### Example:

```js
randInt();      // 448740433
randInt();      // -31797596
randInt(0, 10); // 7
randInt(0, 10); // 5
```



## randSign():Number

Returns a random "sign" (-1 or 1). Useful for multiplications.

It's slightly faster than `choice(-1, 1)` since implementation is simpler (not
that it will make a huge difference in most cases).

See: [`choice()`](#choice)

### Example:

```js
randSign(); // -1
randSign(); // 1

//same effect as
choice(-1, 1);
```
