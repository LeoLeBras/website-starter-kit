/*
 * Select a DOM element
 *
 * @params {array} elements
 * @return {array}
 */
export function select(...elements) {
    return elements.map(element => document.querySelector(element));
};



/*
 * Stylize elements
 *
 * @params {object} styles
 * @return {this}
 */
export function css(styles) {
    this.map(element => {
        for(let key in styles) {
            element.style[key] = styles[key];
        }
    });
    return this;
}



/*
 * Change text content of elements
 *
 * @params {string} text
 * @return {this}
 */
export function text(text) {
    this.map(element => {
        element.innerHTML = text;
    });
    return this;
}
