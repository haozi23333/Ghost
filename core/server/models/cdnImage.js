/**
 * Created by haozi on 5/2/2017.
 */
var config = require('../config')
module.exports = function () {
    return [
        {
            type: 'lang',
            filter: function (text) {
                var imageMarkdownRegex = /^(?:\{(.*?)\})?!(?:\[([^\n\]]*)\])(?:\(([^\n\]]*)\))?$/gim
                return text.replace(imageMarkdownRegex, function (match, key, alt, src) {
                    if (src) {
                        if (src.indexOf(".pdf") === src.length-4){
                            return '<object data="' + src + '" type="application/pdf" width="100%" height="100%">' + alt + '</object>';
                        }

                        return '<img src="' + src.replace(/\?.*/, "") + config.cdn.imageParam + '" alt="' + alt + '" />';
                    }
                    return '';
                });
            }
        },
        {
            type: 'lang',
            /**
             * checkbox的滋瓷
             * @param text
             */
            filter: function (text) {
                var checkBoxRegex = /(?:\n|\s{2,})\-\s\[(X?)\]\s(.+)/igm
                return text.replace(checkBoxRegex, function(str, isCheck, value, index){
                    return "<input disabled value='" + value +"' type='checkbox' " + (isCheck ? "checked" : "") + "/>"
                })
            }
        }
    ]
}


