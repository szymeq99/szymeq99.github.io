document.addEventListener('DOMContentLoaded', () => {

    const scroller = new Scroller('#root');
    
    document.addEventListener('mousewheel', scroller.listenScroll);
    document.addEventListener('keydown',e => {
        switch (e.keyCode) {
            case 40:
                return scroller.scroll(1);
                break;
        
             case 38:
                 return scroller.scroll(-1);
             break;


            default:
                return;
        }
    }
    )
})