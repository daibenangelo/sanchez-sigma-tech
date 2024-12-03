function createAlarms(startTime) {
  let time = startTime.split(":");
  let hour = time[0];
  let min = time[1];
  let timers = [];

  for (let i = 0; i < 10; i++) {
    timers.push(hour + ":" + min);
    console.log(timers);

    if (min == "45") {
      min = "00";
      hour = Number(hour) + 1 + "";
      if (hour.length == 1) {
        hour = "0" + hour;
      }
    } else {
      min = Number(min) + 15 + "";
    }
  }

  return timers;
}

// Driver code - DO NOT MODIFY BELOW
// Run node script.js in the terminal.
// Each test case should log passed.
const test1Result = [
  "09:00",
  "09:15",
  "09:30",
  "09:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
];
createAlarms("09:00")?.every((alarm, index) => alarm === test1Result[index])
  ? console.log("Test 1 passed")
  : console.log("Test 1 failed");
const test2Result = [
  "00:00",
  "00:15",
  "00:30",
  "00:45",
  "01:00",
  "01:15",
  "01:30",
  "01:45",
  "02:00",
  "02:15",
];
createAlarms("00:00")?.every((alarm, index) => alarm === test2Result[index])
  ? console.log("Test 2 passed")
  : console.log("Test 2 failed");
const test3Result = [
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
  "17:00",
  "17:15",
];
createAlarms("15:00")?.every((alarm, index) => alarm === test3Result[index])
  ? console.log("Test 3 passed")
  : console.log("Test 3 failed");
