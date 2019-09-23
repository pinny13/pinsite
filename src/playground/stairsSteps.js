let stairsSteps = 0;
let numOfWays = 0;

function getNumOfWays(id, steps) {
    const elem = document.getElementById('stairs' + id);
    stairsSteps = steps;
    numOfWays = 0;
    getSteps(0);
    elem.innerHTML = numOfWays; 
}

function getNumOfWays2(id, steps) {
    const elem = document.getElementById('stairs' + id);
    stairsSteps = steps;
    numOfWays = 0;
    getSteps2(0, [1,3,5]);
    elem.innerHTML = numOfWays; 
}

    function getSteps(currentStep) {
    if (stairsSteps === 0) {
        numOfWays=1;
        return;
    }

    if (currentStep === stairsSteps){
        ++numOfWays;
        return;
    }

    if (currentStep > stairsSteps){
        return;
    }

    getSteps(currentStep+1);
    getSteps(currentStep+2);
}

function getSteps2(currentStep, stepSizes){
    if (currentStep === stairsSteps){
        ++numOfWays;
        return;
    }

    if (currentStep > stairsSteps){
        return;
    }

    stepSizes.forEach(i=>getSteps2(currentStep+i, stepSizes));
}

///////////////////
getNumOfWays("1", 2);
getNumOfWays("2", 4);
getNumOfWays("3", 7);

getNumOfWays2("4", 2);
getNumOfWays2("5", 4);
getNumOfWays2("6", 7);