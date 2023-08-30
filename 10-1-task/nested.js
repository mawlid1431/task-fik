const ages = [
    [34, 23, 21, 12],
    [100, 11, 24, 15, 40, 41, 70, 50]
];

for (let i = 0; i < ages.length; i++) {
    for (let j = 0; j < ages[i].length; j++) {
        if (ages[i][j] >= 20 && ages[i][j] <= 40) {
            console.log(ages[i][j]);
        }
    }
}
