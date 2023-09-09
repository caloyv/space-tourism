export function toggle(animClass, refArray) {
    function removeUnderline() { 
        refArray[0].current.classList.remove('active')
        refArray[1].current.classList.remove('active')
        refArray[2].current.classList.remove('active')
        if(refArray.length === 4) {
            refArray[3].current.classList.remove('active')
        }
    }

    switch(animClass){
        case refArray[0].current.className:
            removeUnderline()
            refArray[0].current.classList.add('active')
            break;
        case refArray[1].current.className:
            removeUnderline()
            refArray[1].current.classList.add('active')
            break;
        case refArray[2].current.className:
            removeUnderline()
            refArray[2].current.classList.add('active')
            break;
        case refArray[3].current.className:
            removeUnderline()
            refArray[3].current.classList.add('active')
            break;
        default:
            break;
    }
}