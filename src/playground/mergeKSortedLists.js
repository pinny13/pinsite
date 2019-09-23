var mergeKLists = function(lists) {
    const mapOfAllNodes = new Map();
    for (let i = 0; i < lists.length; i++){
        const list = lists[i];
        
        for (let j = 0; j < list.length; j++){
            const val = list[j];
            let valueFromMap = mapOfAllNodes.get(val);
            if (!valueFromMap){
                mapOfAllNodes.set(val, 1);
            } else {
                mapOfAllNodes.set(val, valueFromMap+1);
            }
        }
    }
    
    const keys = Array.from(mapOfAllNodes.keys()).sort();
    const result = Array();
    
    for(let i=0; i<keys.length; i++){
        const key = keys[i];
        let numOfValues = mapOfAllNodes.get(key);
        for (let j=0; j<numOfValues; j++){
            result.push(key);
        }
    }
    
    return result
};

const e = document.getElementById("ml1");
e.innerHTML = mergeKLists([[1,4,5],[1,3,4],[2,6]])