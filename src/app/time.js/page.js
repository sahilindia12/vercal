import React from 'react'

export default function page() {

    console.log('first')

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1; // Months are zero-based
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);
  return (
    <div>

<h2>time get</h2>

        {
            month
        }
    </div>
  )
}
