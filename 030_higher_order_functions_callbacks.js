var dbQuery = function () {
    setTimeout(function () {
        console.log('Query Results');
    }, 0000);
};
function loadPage(q) {
    console.log("Header");
    q();
    console.log("Sidebar");
    console.log("Footer");
}
loadPage(dbQuery);
//# sourceMappingURL=030_higher_order_functions_callbacks.js.map