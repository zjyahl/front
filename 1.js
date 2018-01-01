
/*
<script src="script.js"></script>
<script async src="script.js"></script> out-of-order
<script defer src="myscript.js"></script> order before DOMContentLoaded
*/

document.getElementById("");
document.getElementsByTagName("img");
document.getElementsByName("name");

//css
node.querySelector("");
node.querySelectorAll("");

node.getElementByClassName();

node.childNodes[0];
node.nextSibling;
node.previousSibling;
node.firstChild;
node.lastChild;
node.parentNode;

node.childElementCount;
node.firstElementChild;
node.lastElementChild;
node.previousElementSibling;
node.nextElementSibling;

if (node.nodeType == 1) {
    console.log("this is an element", node.Name);
    node.Value == null;
    node.tagName.toLowerCase();
    node.id;
    node.title;
    node.lang;
    node.className;
    node.getAttribute("class");
    node.setAttribute("title", "dd");
    node.removeAttribute("");
    var attr = document.createAttribute("align");
    attr.value = "left";
    element.setAttrubuteNode(attr);

}


txtNode.nodeType == 3;
txtNode.nodeName == '#text';
txtNode.nodeValue = 'dd';
document.createTexNode('hello');
txtNode.appendData('');
txtNode.deleteData(offset, count);
element.normalize();

newNode = node.appendChild(newNode);
newNode = node.insertBefore(newNode, null);
replaceNode = node.replaceChild(newNode, replaceNode);
removeNode = node.removeChild(removeNode);
deepList = node.cloneNode(true);

node.innerHTML;
node.outerHTML;
node.insertAdjacentHTML("", "");



//html
document.documentElement;
document.chileNodes[0];
node = document.firstChild;

document.body;
document.doctype;
document.title;
document.URL;
document.domain;
document.referrer;
document.anchors;
document.images;
document.links;
document.forms

document.write("");
document.writeln("");

document.activeElement;
document.hasFocus;
document.readState == "complate" || "loading";
document.head;
document.charset = "UTF-8";





node.style.backgroundColor;
node.style.cssText = "width:25px;"
document.defaultView.getComputedStyle(node, null).backgroundColor;


var link = document.getElementsByTagName("link")[0];
var sheet = link.sheet || link.styleSheet;
document.styleSheets[0];
sheet.href;
var rules = sheet.cssRules || sheet.rules;
var rule = rules[0];
rule.selectorText; // div.box
rule.style.cssText;
rule.style.backgroundColor;






node.offsetHeight;
node.offsetWidth;
node.offsetTop;
node.offsetLeft;
node.clientHeight;
node.clientWidth;
node.scrollHeight;
node.scrollWidth;
node.scrollLeft;
node.scrollTop;

function (event) {
    event.currentTarget === this;
    event.target === this;//?
    event.type;
    event.preventDefault();//cancelable === true
    event.stopPropagation();
    event.eventPhase;// 1 2 3
}

parent.window.parentMethod();
var iframe = document.getElementById('iframe');
var data = '';
 
iframe.onload = function() {
    iframe.onload = function(){
        data = iframe.contentWindow.name;
    }
    iframe.src = 'about:blank';
};

typeof undefined === "undefined";
typeof 12 === "number";
typeof "12" === "string";
typeof true === "boolean";
typeof {q:12} === "object";
typeof function() {} === "function";

number.toFixed(0);
number.toPrecision(1);
42..toPrecision(1);
a | 0;
void a;
+"-0";
Number("-0");
JSON.parse("-0");

~42 == -(42+1);