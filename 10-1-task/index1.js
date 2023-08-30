function printNamesInReverseOrder(namesArray) {
    console.log("Number of names:", namesArray.length);

    for (let i = namesArray.length - 1; i >= 0; i--) {
        console.log(namesArray[i]);
    }
}

let names = ['Aish', 'ahmed', 'Hassan', 'Fatima', 'jama', 'asma'];
printNamesInReverseOrder(names);
