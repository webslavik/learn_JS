var ChartCanvas = {};

ChartCanvas.drow = function(canvas, arr, width, height, color) {
  if(typeof(canvas) == 'string') {
    canvas = document.getElementById(canvas);
  }

  canvas.width = width;
  canvas.height = height;
  var context = canvas.getContext('2d');

  var max = Number.NEGATIVE_INFINITY;
  for(var i = 0; i < arr.length; i++) {
    if(max < arr[i]) max = arr[i];
  }

  var scale = height / max;
  var barWidth = Math.floor(width / arr.length);

  for(var i = 0; i < arr.length; i++) {
    var barHeight = arr[i] * scale;
    var x = barWidth * i;
    var y = height - barHeight;

    context.fillStyle = color;
    context.fillRect(x, y, barWidth - 2, barHeight);
  }
}
