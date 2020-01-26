class sort {

    constructor() {
    }

    quickSort(elements, first, last, log, call) {

        let perno = (els, first, last) => {
            let i = -1; let x = -1; let temp = -1;
            
            let pernoIndex = parseInt((first + last) / 2); // first;
            j = first-1;
            x = els[pernoIndex];
            

            for(i = first; i < last; i++) {
                if (els[i] < x) {
                    j += 1;
                    temp = els[j];
                    els[j] = els[i];
                    els[i] = temp;
                }
                log(els, call);
            }

            els[pernoIndex] = els[j];
            els[j] = x;
            log(els, call);
            return j; 
        }

        let j = -1;
        if ( first < last ) {
            j = perno(elements, first, last);
            this.quickSort(elements, first, j - 1, log, call++);
            this.quickSort(elements, j + 1, last, log, call++);
            log(elements, call, j);
        }

    }

}