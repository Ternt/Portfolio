import SplitText from "./scripts/splittext.js";
import "./styles/main.css";
import "./styles/home.css";

let welcometext = SplitText("#text-animation");

function AnimateText(textdiv) {
    let children = textdiv.childNodes;
    let animation_delay = 0;
    let animation_duration = 1500;
    let avg_animation_time = animation_duration / children.length;
    let multiplier = 0.9;

    for (let i = 0 ; i < children.length ; ++i) {
        let child = children[i];
        child.style["animation-delay"] = animation_delay + (i * avg_animation_time * multiplier) + "ms";
    }
}

let text = document.querySelector("#text-animation");
let char_class = document.querySelectorAll(".char");
AnimateText(welcometext);
text.onmouseover = function() {
    for (let i = 0 ; i < char_class.length ; ++i) {
        char_class[i].style["animation-name"] = "move-text";
        char_class[i].style["animation-timing-function"] = "cubic-bezier(.33,.08,.66,.91)";
        char_class[i].style["animation-iteration-count"] = "infinite";
        char_class[i].style["animation-duration"] = "1.5s";
    }
}


text.onmouseleave = function() {
    for (let i = 0 ; i < char_class.length ; ++i) {
        char_class[i].style["animation-name"] = null;
        char_class[i].style["animation-timing-function"] = null;
        char_class[i].style["animation-iteration-count"] = null;
        char_class[i].style["animation-duration"] = null;
    }
}
