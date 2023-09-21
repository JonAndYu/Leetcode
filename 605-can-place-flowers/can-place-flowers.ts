function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // Base Case:
    if (n === 0) return true;
    if (flowerbed.length === 1) return !(flowerbed[0] === n);
    if (flowerbed.length === 2) return flowerbed[0] + flowerbed[1] === 0 && n === 1;

    const len = flowerbed.length;
    let possible = 0;
    let i = 0;

    while (i < len) {
        if (flowerbed[i] === 0) {
            if ((i === 0 && (i < len - 1 && flowerbed[i+1] === 0)) || flowerbed[i - 1] === 0 && (i < len - 1 && flowerbed[i+1] === 0) ||
            (i === len - 1 && flowerbed[i] === 0)) {
                // Current position is a zero, and previous position is also zero or it's the beginning
                possible++;
                i += 2;  // Skip next position (avoid adjacent flowers)
            } else {
                i += 1;  // Move to the next position
            }
        } else {
            i += 2;  // Skip the next position if the current is a flower
        }
    }

    return possible >= n;
    

};

/*
    1 0 0 0 0 0 0 1
    0 1 2 3 4 5 6 7
    7 - 1
    math expression=Math.floor(n / 2) for the number of zeros.

    1 zero 0 options
    2 zeros 0 options

    3 zeros 1 option
    4 zeros 1 option

    5 zeros 2 options
    6 zeros 2 options

    7 zeros 3 options
    8 zeros 3 options

    9 zeros 4 options


*/