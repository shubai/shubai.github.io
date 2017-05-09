/**
 * Created by Administrator on 2017/5/2 0002.
 */
window.onload = initMenu;

function initMenu() {
    var theUL = document.getElementById("navigation1").getElementsByTagName("ul")[0];
    var theULChilds = theUL.childNodes;

    for (var i = 0; i < theULChilds.length; i++) {
        if (theULChilds[i].tagName == "LI") {
            var theLINode = theULChilds[i];
            if (theLINode.getElementsByTagName("ul").length > 0) {
                setMouseActions(theLINode);
                theLINode.firstChild.className = "downMenu";
            }
        }
    }
}



function setMouseActions(node) {
    node.onmouseover = function() {
        this.getElementsByTagName("ul")[0].style.display = "block";
    };

    node.onmouseout = function() {
        this.getElementsByTagName("ul")[0].style.display = "none";
    };
}