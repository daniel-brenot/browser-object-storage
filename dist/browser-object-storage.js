"use strict";
/**
 * This module  provides the ability to store complex javascript objects
 * in the windows local storage. This module uses messagepack to compress
 * the data into a compressed and type safe object, and then encodes the data
 * in base 64 before storing in local storage. The process in similar in reverse.
 *
 * As long as this notice (including author name and details) is included and
 * UNALTERED, this code is licensed under the GNU General Public License version 3:
 * http://www.gnu.org/licenses/gpl.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** Module imports */
var msgpack_lite_1 = require("msgpack-lite");
/**
 * Encodes a uint8 to a base64 string to allow it to be stored locally
 */
function toBase64(u8) {
    return btoa(String.fromCharCode.apply(null, u8));
}
/**
 * Decodes a base64 encoded string to a Uint8Array
 */
function fromBase64(str) {
    return new Uint8Array(atob(str).split('').map(function (c) { return c.charCodeAt(0); }));
}
/**
 * Sets a value in local storage as a base 64 encoded messagepact value.
 * Messagepact is used to preserve js object types such as Dates.
 * Messagepact also stores data in a compact format, saving local space.
 */
function setValue(key, value) {
    window.localStorage.setItem(key, toBase64(msgpack_lite_1.encode(value || {})));
}
exports.setValue = setValue;
/**
 * Gets a value in local storage as a js object
 * Messagepact is used to preserve js object types such as Dates.
 */
function getValue(key) {
    if (!window.localStorage.getItem(key))
        return {};
    return msgpack_lite_1.decode(fromBase64(window.localStorage.getItem(key) || ''));
}
exports.getValue = getValue;
