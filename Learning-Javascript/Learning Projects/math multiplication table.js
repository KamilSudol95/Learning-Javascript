let blankArray = [];

outer:
    for (let i = 0; i <= 10; i++) {
        let temp = [];
        inner:
            for (let j = 0; j <= 10; j++) {
                temp.push(i * j);
            }
        blankArray.push(temp);
    }

console.table(blankArray);