// Task 1 - https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR0SNApzz2GCz-cLVz-Aro6t4gDBR3SZVvP64zvNwmOFlisdHkCZpCLKekY

function circleCircumference(circle) {
  const circumference = circle.radius * 2 * Math.PI;
  return circumference;
}
