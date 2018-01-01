'use strict';

function convertToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes,0);
    } catch (ex) {
        array = [];
        for (var i =0, len = nodes.length; i<len; i++) {
            array.push(nodes[i]);
        }
    }
}
function matchSelector(element, selector) {
    var match = 
        document.documentElement.matchesSelector ||
        document.documentElement.webkitMatchesSelector || 
        document.documentElement.mozMatchesSelector || 
        document.documentElement.msMatchesSelector ||
        function(selector, element) {
            if (element.tagName === selector.toUpperCase()) return true;
            var elements = document.querySelectorAll(selector),
            length = elements.length;

            while (length--) {
            if (elements[length] === this) return true;
            }

            return false;
        };

    matchSelector = function(element, selector) {
        return match.call(element, selector);
    };
    return matchSelector(element, selector);
}
function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}
function loadScriptStr(code) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTexNode(code));
    } catch (ex) {
        script.text = code;
    }
    document.body.appendChild(script);
}
function lodadStyle(url) {
    var link = document.createElement("link");
    link.ref = "stylesheet";
    link.type "text/css";
    link.href = url;
    var head = document.getElementByTagName("head")[0];
    head.appendChild(link);
}
function lodadStyleStr(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTexNode(css));
    } catch (ex) {
        style.styleSheet.cssText = css;
    }
    var head = document.getElementByTagName("head")[0];
    head.appendChild(style);
}
function insertRule(sheet, selectorTxt, cssTxt, pos) {
    if (sheet.insertRule) {
        sheet.insertRule(selectorTxt + "{" + cssTxt + "}", pos);
    } else if (sheet.addRule) {
        sheet.addRule(selectorTxt, cssTxt, pos);
    }
}
function deleteRule(sheet, index) {
    if (sheet.deleteRule) {
        sheet.deleteRule(index);
    } else if (sheet.removeRule) {
        sheet.removeRule(index);
    }
}
function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        actualLeft +=current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop +=current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
function getViewport() {
    if (document.compatMode == "BackCompat") {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}
function getBoundingClientRect(element) {
    var scrollTop = document.documentElement
}
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    getSelectedText: function (txtElement) {
        if (typeof txtElement.selectionStart == "number") {
            return txtElement.value.substring(txtElement.selectionStart, txtElement.selectionEnd);
        } else if (document.selection) {
            return document.selection.createRange().text;
        }
    },
    selectText: function (txtElement, inxF, inxT) {
        if (txtElement.setSelectionRange) {
            txtElement.setSelectionRange(inxF, inxT);
        } else if (txtElement.createTextRange) {
            var range = txtElement.createTextRange;
            range.collapse(true);
            range.moveStart("character", inxF);
            range.moveEnd("character", inxT - inxF);
            range.select();
        }
        txtElement.focus();
    },
    getClipboardText: function(event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    setClipboardText: function(event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    },
    getSelectedOptions: function(selectBox) {
        var result = [];
        var option = null;
        for (var i = 0, len = selectBox.options.length; i < len; i++) {
            option = selectBox.options[i];
            if (option.selected) {
                result.push(option);
            }
        }
        return result;
    }
};

var AJAX = function() {

    function serialize(dataArr) {
        var result =[];
        for (var i = 0, len = dataArr.length; i < len; i++) {
            result.push(encodeURIComponent(dataArr[i]["key"]) + "=" + encodeURIComponent(dataArr[i]["value"]));
        }
        return result.join("&");
    };

    function createXHR() {
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
                    for (var i, len = versions.length; i < len; i++) {
                        try{
                            var xhr =  new ActiveXObject(versions[i]);
                            return xhr;
                        } catch (ex) {

                        }
                        
                    }

                } else {
                    throw new Error("no XHR Object");
                }
    };

    function initXHR(xhr, callFun) {
        xhr.onreadystatechange = function() {
        var state = xhr.readyState;
        switch(state) {
            case 0: //no open
                break;
            case 1: //open
                break;
            case 2: //send no resp
                break;
            case 3: // resp part
                
                break;
            case 4: //resp all
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    var resp = xhr.responseText;
                    xhr.responseXML == null; //text/xml  application/xml
                    callFun(resp, xhr.status, xhr.getAllResponseHeaders());
                } else {
                    callFun(null, xhr.status);
                }
                break;
            default:
                break;
        }
        };
    };
    

    var getReq = function(urlStr, callFun, header) {
        var xhr = createXHR();
        init(xhr, callFun);
        xhr.open("get", urlStr, true);
        for (var i = 0, len = header.length; i < len; i++) {
            xhr.setRequestHeader(header[i]["key"], header[i]["value"]);
        }
        xhr.send(null);
    };
    var postReq = function(urlStr, data, callFun, header) {
        var xhr = createXHR();
        init(xhr, callFun);
        xhr.open("post", urlStr, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        for (var i = 0, len = header.length; i < len; i++) {
            xhr.setRequestHeader(header[i]["key"], header[i]["value"]);
        }
        xhr.send(serialize(data));
    };
};







