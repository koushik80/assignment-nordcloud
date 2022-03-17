const solution = (x, y) => {
    const network_stations = [
        [0, 0, 9],
        [20, 20, 6],
        [10, 0, 12],
        [5, 5, 13],
        [99, 25, 2],
    ];
    var solution_coordinates = [];
    var speed = 0;
    for (let point of network_stations) {
        var distance = Math.pow(Math.pow(x - point[0], 2) + Math.pow(y - point[1], 2), 0.5);
        if (distance > point[2]) {
            continue;
        }
        var temp_speed = Math.pow(point[2] - distance, 2);
        if (temp_speed > speed) {
            speed = temp_speed;
            solution_coordinates = [point[0], point[1]];
        }
    }
    if (solution_coordinates.length == 0) {
        console.log("No network station within reach for point", x, ",", y);
    } else {
        console.log(
            "Best network station for point", x, ",", y, "is",
             solution_coordinates[0], ",", solution_coordinates[1], "with speed", speed.toPrecision(4));
    }
};

solution(0, 0);
solution(100, 100);
solution(15, 10);
solution(18, 18);
solution(13, 13);
solution(25, 99);
