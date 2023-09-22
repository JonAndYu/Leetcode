function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    let [x1, y1, x2, y2] = rec1;
    let [x3,y3,x4,y4] = rec2;
    return !(x1 >= x4 || // The rec1 is right of rec2
             x3 >= x2 || // The rec2 is right of rec1
             y3 >= y2 || // The rec2 is above rec1
             y1 >= y4    // The rec1 is above rec2  
            );
};