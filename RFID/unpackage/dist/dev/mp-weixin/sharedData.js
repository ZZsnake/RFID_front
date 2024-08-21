"use strict";
let isEnabled = false;
function toggleStatus() {
  isEnabled = !isEnabled;
}
function getStatus() {
  return isEnabled;
}
const sharedData = {
  toggleStatus,
  getStatus
};
exports.sharedData = sharedData;
