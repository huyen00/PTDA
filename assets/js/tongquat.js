var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
    //   backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: yValues
    }]
  },
  
});

var xValues = [50,60,70,80,130,140,150];
var yValues = [7,8,8,9,14,14,15];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
    //   backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: yValues
    }]
  },
  
});
var xValues = [50,60,70,80,90,100,110,120];
var yValues = [7,8,8,9,9,9,10,11];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
    //   backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: yValues
    }]
  },
  
});

var xValues = [90,100,110,120,130,140,150];
var yValues = [9,9,10,11,14,14,15];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
    //   backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: yValues
    }]
  },
  
});