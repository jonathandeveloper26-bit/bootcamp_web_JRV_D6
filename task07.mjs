export function objectsDeeplyEqual(cmp1, cmp2) {
    if (typeof cmp1 != typeof cmp2) {
        return false
    }
    
    if (cmp1 == cmp2) {
        return true;
    }

    if ((typeof cmp1 == "object") && (typeof cmp2 == "object")) {
        if ((cmp1 != cmp2) && (cmp1 == null || cmp2 == null)) {
            return false
        }
        for (const key in cmp1) {
            if (key in cmp2) {
                if(objectsDeeplyEqual(cmp1[key], cmp2[key])) {
                    continue;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        if (Object.keys(cmp1).length == Object.keys(cmp2).length) {
            return true;
        }
        else {
            return false;
        }
    }

    else {
        return false
    } 
    return true;
}