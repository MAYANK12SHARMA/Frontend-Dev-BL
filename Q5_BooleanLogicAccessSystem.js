var isDoorLocked = true;
var isWindowClosed = true;
var isAlarmOn = true;
var isOwnerInside = true;

var isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("Security Check 1:");
console.log("Door Locked: " + isDoorLocked);
console.log("Window Closed: " + isWindowClosed);
console.log("Alarm On: " + isAlarmOn);
console.log("Owner Inside: " + isOwnerInside);
console.log("Status: " + (isSecure ? "Secure" : "Unsafe"));

console.log("\n--- Test Case 2 ---");
isDoorLocked = false;
isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log("Door Locked: " + isDoorLocked);
console.log("Status: " + (isSecure ? "Secure" : "Unsafe"));

console.log("\n--- Test Case 3 ---");
isDoorLocked = true;
isAlarmOn = false;
isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log("Alarm On: " + isAlarmOn);
console.log("Status: " + (isSecure ? "Secure" : "Unsafe"));
