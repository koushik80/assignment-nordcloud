var htmlStr = "";
const solution = (x, y, odd) => {
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
    var distance = Math.pow(
      Math.pow(x - point[0], 2) + Math.pow(y - point[1], 2),
      0.5
    );
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
    if(!odd){
      htmlStr += `<div id="row1"> <div> <p>Point</p> </div> <div><p>[${x},${y}]</p></div><div><p>No network station within reach found</p></div><div> </div><div> </div><div> </div></div>`;

    }else{

      htmlStr += `<div id="row"> <div> <p>Point</p> </div> <div><p>[${x},${y}]</p></div><div><p>No network station within reach found</p></div><div> </div><div> </div><div> </div></div>`;
    }
    console.log("No network station within reach for point", x, ",", y);
  } else {
    if(!odd){
      htmlStr += `<div id="row1"> <div> <p>Point</p> </div> <div><p>[${x},${y}]</p></div><div><p>Best Network at</p></div><div> <p>[${
        solution_coordinates[0]
      },${
        solution_coordinates[1]
      }]</p></div><div>  <p>speed:</p></div><div>  <p>${speed.toPrecision(
        4
      )}</p></div></div>`;
    }else{
      htmlStr += `<div id="row"> <div> <p>Point</p> </div> <div><p>[${x},${y}]</p></div><div><p>Best Network at</p></div><div> <p>[${
        solution_coordinates[0]
      },${
        solution_coordinates[1]
      }]</p></div><div>  <p>speed:</p></div><div>  <p>${speed.toPrecision(
        4
      )}</p></div></div>`;
    }
    console.log(
      "Best network station for point",
      x,
      ",",
      y,
      "is",
      solution_coordinates[0],
      ",",
      solution_coordinates[1],
      "with speed",
      speed.toPrecision(4)
    );
  }
};

solution(0, 0, true);
solution(100, 100, false);
solution(15, 10, true);
solution(18, 18, false);
solution(13, 13, true);
solution(25, 99, false);

const table = document.getElementById("table");
table.innerHTML = htmlStr;
// table.innerHTML=`<div id="row"> <div> <p>Point</p> </div> <div><p>[0,0]</p></div><div><p>Best Network at</p></div><div> <p>[5,5]</p></div><div>  <p>speed:</p></div><div>  <p>35.15</p></div></div>`
