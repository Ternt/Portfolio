
// Takes in the dom element that contains text to be split
export default function SplitText(domelement) {
    let dom = document.querySelector(domelement); 
    let letters = dom.textContent.trim().split('');
    console.log(dom.body);

    return {};
}
