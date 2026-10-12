export function objectsDeeplyEqual(cmp1, cmp2) {
    if (typeof cmp1 != typeof cmp2) {
        return false
    }
    
    if (cmp1 == cmp2) {
        return true;
    }

    if ((typeof cmp1 == "object") && (typeof cmp2 == "object")) {
        for (const key in cmp1) {
            if (key in cmp2) {
                return objectsDeeplyEqual(cmp1[key], cmp2[key]);
            }
            else {
                return false;
            }
        }
        for (const key in cmp2) {
            if (key in cmp1) {
                return objectsDeeplyEqual(cmp1[key], cmp2[key])
            }
            else {
                return false;
            }
        }
    }

    else {
        return false
    } 
}