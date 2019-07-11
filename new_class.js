class InnerClass {
constructor() {}
/** @param {number} foo */
method(foo) {
if (condition(foo)) {
try {
// Note: this might fail.
something();
} catch (err) {
recover();
}
}
}
}