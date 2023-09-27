function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    let ogColor = image[sr][sc];

    if (color !== ogColor) dfs(sr, sc, color, ogColor);

    function dfs(r, c, color, ogColor) {
        if (image[r][c] === ogColor) {
            image[r][c] = color;
            if (r >= 1) dfs(r - 1, c, color, ogColor);
            if (c >= 1) dfs(r, c-1, color, ogColor);
            if (c < image[0].length - 1) dfs(r, c+1, color, ogColor);
            if (r < image.length - 1) dfs(r+1, c, color, ogColor);
        } 
    }
    return image;
};