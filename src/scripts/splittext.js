
// Takes in the dom element that contains text to be split
export default function SplitText(domelement) {

    const rootelement = document.querySelector(domelement); 

    // split element into words
    let letters = rootelement.textContent.trim().split(''); 

    SplitTextToDivs(rootelement, letters);

    return rootelement.childNodes[0];
}

// build the divs to be inserted to innerHTML 
// of parent element 
function SplitTextToDivs(rootelement, array) { 
    let splittextdiv = document.createElement('div');
    splittextdiv.style.width = 'fit-content';
    splittextdiv.setAttribute('id', 'i' + 1);

    // nest div elements
    for (let i = 0 ; i < array.length ; ++i) {
        let div = document.createElement('div');
        splittextdiv.appendChild(div);
        div.setAttribute('id', 'c' + [i + 1]);
        div.classList.add('char');

        // some required styles
        div.style.display = 'inline-block';
        div.insertAdjacentText('beforeend', array[i]);

    }

    // remove beginning text element
    rootelement.removeChild(rootelement.childNodes[0]);
    rootelement.appendChild(splittextdiv);
}
