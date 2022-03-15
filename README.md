 # Tech assignment - Network speed
<div align="center"><a href="########">Problem</a></div>
<h2 align="left">Write a program that solves the most suitable (with highest non-zero speed) network station for a device at a given point (x, y).</h2>

<h3 align="left">This problem can be solved in 2-dimensional space. Network stations have reach and speed that depends on the distance to the station.</h3>

<h3 align="left">A network station’s speed can be calculated as follows:</h3>
<h3 align="center" font-weight="bold">speed = (reach - device's distance from network station)^2
     if distance > reach, speed = 0</h3>

<h3 align="left">Network stations are located at points (x, y) and have reach r:</h3>


<table align="center">
  <tr>
    <th>x</th>
    <th>y</th>
    <th>reach</th>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>9</td>
  </tr>
  <tr>
    <td>20</td>
    <td>20</td>
    <td>6</td>
  </tr>
  <tr>
    <td>10</td>
    <td>0</td>
    <td>12</td>
  </tr>
  <tr>
    <td>5</td>
    <td>5</td>
    <td>13</td>
  </tr>
  <tr>
    <td>99</td>
    <td>25</td>
    <td>2</td>
  </tr>
  </table>

<h3 align="left">Print out the most suitable network station and the network speed from devices (x, y):</h3>
<p align="center">(0, 0), (100, 100), (15, 10), (18, 18), (13, 13) and (25, 99)</p>

<h3 align="left">Program should output the solution to these two cases:</h3>

<ul>
<li align="center">Best station found, output station location and speed</li>
<li align="center">No station within reach found, output error message</li>
</ul>

<h3 align="left">It can be in the form of:</h3>
<p align="center" font-style="italic">“Best network station for point x,y is x,y with speed z”
</p>
<p align="center" font-style="italic">“No network station within reach for point x,y”</p>




