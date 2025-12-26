const { Buffer } = require("node:buffer");

// const buf1 = Buffer.alloc(10, 22);
// console.log(buf1);

// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);

// const buf2 = Buffer.from("hemen");
// console.log(buf2);

// const buf4 = Buffer.alloc(10);
// buf4.write("hemen");
// console.log(buf4.toString());

// const buf = Buffer.from("Node");
// console.log(buf.toString());
// buf[0] = 101;
// console.log(buf.toString());

// const buf = Buffer.from("Hello There!!");
// console.log(buf.toString());
// console.log(buf.toString("utf-8", 0, 3));

const buf1 = Buffer.from("Hello There!!");
const buf2 = Buffer.from(" Henil");
const mergedBuffer = Buffer.concat([buf1, buf2]);
console.log(mergedBuffer.toString());
console.log(mergedBuffer.length);
