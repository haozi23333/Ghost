/**
 * Created by haozi on 5/2/2017.
 */
var config = require('../config')
module.exports = function () {
    return [
        {
            type: 'lang',
            filter: function (text) {
                imageMarkdownRegex = /^(?:\{(.*?)\})?!(?:\[([^\n\]]*)\])(?:\(([^\n\]]*)\))?$/gim
                return text.replace(imageMarkdownRegex, function (match, key, alt, src) {
                    if (src) {
                        if (src.indexOf(".pdf") === src.length-4){
                            return '<object data="' + src + '" type="application/pdf" width="100%" height="100%">' + alt + '</object>';
                        }
                        return '<img src="' + src + config.cdn.imageParam + '" alt="' + alt + '" />';
                    }
                    return '';
                });
            }
        }
    ]
}