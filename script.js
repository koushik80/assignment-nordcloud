var x1 = new Array(0, 100, 15, 18, 13, 25);
var y1 = new Array(0, 100, 10, 18, 13, 99);

var x2 = new Array(0, 20, 10, 5, 99);
var y2 = new Array(0, 20, 0, 5, 25);

var reach = new Array(9, 6, 12, 13, 2);

for (i = 0; i < x1.length; i++) {

var speed = [];

var distance = [];

var sumcheck = 0;

for (j = 0; j < x2.length; j++) {

distance[j] = Math.sqrt((x1[i]-x2[j]) ** 2 + (y1[i]-y2[j]) ** 2);

if (reach[j] > distance[j]) {

speed[j] = (reach[j]-distance[j]) ** 2;
}
else{
speed[j] = 0;
}

sumcheck += speed[j];
}


if (sumcheck>0){

    m = Math.max.apply(Math,speed);
    var index = speed.indexOf(m);
    document.write("Best network station for point (" + x1[i] + "," + y1[i]+ ") is (" + x2[index] + "," + y2[index]+ ") with speed " + speed[index]+" <br/>");
    }
    else {
        document.write("No network station within reach for point (" + x1[i] + "," + y1[i]+ ") <br/>");
    }

}
