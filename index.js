const moment = require("moment");


const HOUR = 60*60*1000;

let time = moment()
let current_utc = time.format("Z").slice(0,3);
let miliseconds;

console.log(time.format(`[Time of you with ${time.format("Z")}]: dddd, MMMM Do YYYY, hh:mm:ss a`))

for (let utc = -7; utc <= 7 && utc != current_utc; utc++){
    miliseconds = moment(Date.now() + HOUR * (utc - current_utc));
    console.log(miliseconds.format(`[Time of ${utc + ":00"}: ] dddd, MMMM Do YYYY, hh:mm:ss a`))
}
