    // MIXEDCHART
        var options = {
            series: [{
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
          }, {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          }, {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
          }],
            chart: {
            height: 350,
            type: 'line',
            stacked: false,
          },
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
          },
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          },
          
          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: 'light',
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100]
            }
          },
          labels: ['01/01/2020', '02/01/2020', '03/01/2020', '04/01/2020', '05/01/2020', '06/01/2020', '07/01/2020',
            '08/01/2020', '09/01/2020', '10/01/2020', '11/01/2020'
          ],
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            title: {
              text: 'Points',
            },
            min: 0
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
                }
                return y;
          
              }
            }
          }
          };
  
          var chart = new ApexCharts(document.querySelector(".mixedchart"), options);
          chart.render();
        //   PIECHART
        var options = {
            series: [44, 55, 13, 43],
            chart: {
            // width: 300,
            height: 300,
            type: 'pie',
          },
          labels: ['America', 'Asia', 'Europe', 'Africa'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                // width: 200\
                width:350
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
          };
  
          var chart = new ApexCharts(document.querySelector(".piechart"), options);
          chart.render();
        //   BARCHART
        
        var options = {
            series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
          }],
            chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
          };
  
          var chart = new ApexCharts(document.querySelector(".barchart"), options);
          chart.render();
        //   RADARCHART
        var options = {
            series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
          }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
          }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
          }],
            chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            }
          },
          stroke: {
            width: 2
          },
          fill: {
            opacity: 0.1
          },
          markers: {
            size: 0
          },
          xaxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016']
          }
          };
  
          var chart = new ApexCharts(document.querySelector(".radarchart"), options);
          chart.render();
        