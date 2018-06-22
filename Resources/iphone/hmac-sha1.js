;(function (root, factory, undef) {
	if (typeof exports === "object") {
		module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
	} else if (typeof define === "function" && define.amd) {
		define(["./core", "./sha1", "./hmac"], factory);
	} else {
		factory(root.CryptoJS);
	}
})(this, function (CryptoJS) {

	return CryptoJS.HmacSHA1;
});