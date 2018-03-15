"use strict";
// The three stages of a promise
// Start mowing -> Pending status
// Complete mowing process -> Resolved

// Did not complete the mowing process -> Reject status



let performUpload = function(imgStatus : string) : Promise<{imgStatus : string}> {
  // calling a new Promise gives a new instance of Promise
  return new Promise((resolve) => {
    console.log(`Status: ${imgStatus}`);
    setTimeout(() => {
      resolve({ imgStatus: imgStatus });
    }, 2000);
  });
}


// Created variable so that we could assign stages to the Promise
var upload;
var compress;
var transfer;

performUpload('uploading...')
// then key word is what shold I do next (essentially)
.then((res) => {
  // res could be anything. it is common convention though
  upload = res;
  return performUpload('compressing...')
})
.then((res) => {
  compress = res;
  return performUpload('transferring...')
})
.then((res) => {
  transfer = res;
  return performUpload('compressing...')
})