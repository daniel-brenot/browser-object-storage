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
/**
 * Sets a value in local storage as a base 64 encoded messagepact value.
 * Messagepact is used to preserve js object types such as Dates.
 * Messagepact also stores data in a compact format, saving local space.
 */
export declare function setValue(key: string, value: any): any;
/**
 * Gets a value in local storage as a js object
 * Messagepact is used to preserve js object types such as Dates.
 */
export declare function getValue(key: string): any;
