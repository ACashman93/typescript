"use strict";
// The three stages of a promise
// Start mowing -> Pending status
// Complete mowing process -> Resolved
// Did not complete the mowing process -> Reject status
let performUpload = function (imgStatus) {
    // calling a new Promise gives a new instance of Promise
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 2000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then((res) => {
    upload = res;
    return performUpload('compressing...');
})
    .then((res) => {
    compress = res;
    return performUpload('transferring...');
})
    .then((res) => {
    transfer = res;
    return performUpload('compressing...');
});
//# sourceMappingURL=031_promises.js.map