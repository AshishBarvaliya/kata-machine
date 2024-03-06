let dict = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    visited: boolean[][],
    path: Point[],
): boolean {
    // base cases
    if (
        curr.x < 0 ||
        curr.x > maze[0].length ||
        curr.y < 0 ||
        curr.y > maze.length
    ) {
        return false;
    }

    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    if (visited[curr.y][curr.x]) {
        return false;
    }

    // pre
    visited[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for (let i = 0; i < dict.length; i++) {
        if (
            walk(
                maze,
                wall,
                { x: curr.x + dict[i][0], y: curr.y + dict[i][1] },
                end,
                visited,
                path,
            )
        ) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const visited: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        visited.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, visited, path);

    return path;
}

