console.log(Math.PI);                                       /* Print the value of PI. */

console.log(Math.max(56,9,9.80,67,8.8,9.213));              /* Print the max value. */

console.log(Math.min(60,71,3.85,2));                        /* Print the min value. */

console.log(Math.round(1.2));                               /* If the value after the decimal part will be <5 then round it up and print previous closer integer. */

console.log(Math.round(1.6));                               /* If the value after the decimal part will be >5 then round it up and print next closer integer. */

console.log(Math.floor(4.95));                              /* It will be previous closer integer. */

console.log(Math.ceil(6.1));                                /* It will be nect closer integer. */

console.log(Math.abs(-4.75));                               /* It will remove the -ve part/symbol only. */

console.log(Math.random());                                 /* This will generate a random number. */

console.log(Math.sqrt(5));                                  /* It gives the square root of the number. */

console.log(Math.pow(2,10));                                /* It will give the power. */

let curr_Date = new Date();                                 /* Give the date. */
console.log(curr_Date);

let date = new Date('June 20 2026 07:18');                  /* We can use the customize date also. */
console.log(date);

console.log(date.getDay());

console.log(date.setFullYear(2001));