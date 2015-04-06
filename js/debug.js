/*
 * all the basic debug functions
 */
function log(x) {
	console.log(x);
}
function out(x) {
	document.write(x);
}
/* local storage */
/* TODO- need test */
function lset(key, value) {
	localStorage.key = value;
}
function lget(key) {
	return localStorage.key;
}
function ldelete(key) {
	localStorage.removeItem(key);
}
function lclear() {
	localStorage.clear();
}
