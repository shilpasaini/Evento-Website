function report(period) {
	
	var value =period ;
	if (period=="music")
		{
		document.getElementById("demo").innerHTML = "Best State To Host Music Events: CALIFORNIA";
$(function(){
    $('#left').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Revenue Generated, 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Revenu',
            data: [
                ['CA',   45.0],
                ['TX',   20.0],
                ['NY',    35.0],
               ]
        }]
    });
});


	
	$(function () {
		    $('#right').highcharts({
		        chart: {
		            type: 'column'
		        },
		        title: {
		            text: 'Popularity by State'
		        },
		        subtitle: {
		            text: 'No. of people attended in 2014 '
		        },
		        xAxis: {
		            type: 'category',
		            labels: {
		                rotation: -45,
		                style: {
		                    fontSize: '13px',
		                    fontFamily: 'Verdana, sans-serif'
		                }
		            }
		        },
		        yAxis: {
		            min: 0,
		            title: {
		                text: 'No. of people (thousands)'
		            }
		        },
		        legend: {
		            enabled: false
		        },
		        tooltip: {
		            pointFormat: 'People attended: <b>{point.y:.1f} thousands</b>'
		        },
		        series: [{
		            name: 'Popularity',
		            data: [
		                ['CA', 170.7],
		                ['NY', 120.1],
		                ['TX',99.2],
		                		                
		            ],
		            dataLabels: {
		                enabled: true,
		                rotation: -90,
		                color: '#FFFFFF',
		                align: 'right',
		                format: '{point.y:.1f}', // one decimal
		                y: 10, // 10 pixels down from the top
		                style: {
		                    fontSize: '13px',
		                    fontFamily: 'Verdana, sans-serif'
		                }
		            }
		        }]
		    });
		});
		

		}
	
	else if(period == "art")
		{
		document.getElementById("demo").innerHTML = "Best State To Host art Events: MICHIGAN ";
		
		$(function(){
		    $('#left').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false
		        },
		        title: {
		            text: 'Revenue Generated, 2014'
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            type: 'pie',
		            name: 'Revenu',
		            data: [
		                ['MI',   35.0],
		                ['IN',   25.0],
		                ['PA',   20.0]
		               ]
		        }]
		    });
		});


			
			$(function () {
				    $('#right').highcharts({
				        chart: {
				            type: 'column'
				        },
				        title: {
				            text: 'Popularity by State'
				        },
				        subtitle: {
				            text: 'No. of people attended in 2014 '
				        },
				        xAxis: {
				            type: 'category',
				            labels: {
				                rotation: -45,
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        },
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'No. of people (thousands)'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: 'People attended: <b>{point.y:.1f} thousands</b>'
				        },
				        series: [{
				            name: 'Popularity',
				            data: [
				                ['IN', 90.3],
				                ['MI',160.4],
				                ['PA',80.8]		                
				            ],
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                format: '{point.y:.1f}', // one decimal
				                y: 10, // 10 pixels down from the top
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        }]
				    });
				});

		
		}
	
	else if(period == "beer")
	{
		document.getElementById("demo").innerHTML = "Best State To Host beer Events: OREGON ";
		
		$(function(){
		    $('#left').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false
		        },
		        title: {
		            text: 'Revenue Generated, 2014'
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            type: 'pie',
		            name: 'Revenu',
		            data: [
		                ['CO',   18.0],
		                ['TX',   34.0],
		                ['OR',   48.0],
		                
		                ]
		        
		        }]
		    });
		});


			
			$(function () {
				    $('#right').highcharts({
				        chart: {
				            type: 'column'
				        },
				        title: {
				            text: 'Popularity by State'
				        },
				        subtitle: {
				            text: 'No. of people attended in 2014 '
				        },
				        xAxis: {
				            type: 'category',
				            labels: {
				                rotation: -45,
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        },
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'No. of people (thousands)'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: 'People attended: <b>{point.y:.1f} thousands</b>'
				        },
				        series: [{
				            name: 'Popularity',
				            data: [
									['CO',   123.5],
									['TX',   154.8],
									['OR',   240.9],		                
				            ],
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                format: '{point.y:.1f}', // one decimal
				                y: 10, // 10 pixels down from the top
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        }]
				    });
				});

	
	}
	
	else if (period == "science")
	{
		document.getElementById("demo").innerHTML = "Best State To Host science Events: NEW YORK";
		
		$(function(){
		    $('#left').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false
		        },
		        title: {
		            text: 'Revenue Generated, 2014'
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            type: 'pie',
		            name: 'Revenu',
		            data: [
		                ['NY',   45.0],
		                ['DC',   30.0],
		                ['GA',   25.0],
		                ]
		        
		        }]
		    });
		});


			
			$(function () {
				    $('#right').highcharts({
				        chart: {
				            type: 'column'
				        },
				        title: {
				            text: 'Popularity by State'
				        },
				        subtitle: {
				            text: 'No. of people attended in 2014 '
				        },
				        xAxis: {
				            type: 'category',
				            labels: {
				                rotation: -45,
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        },
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'No. of people (thousands)'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: 'People attended: <b>{point.y:.1f} thousands</b>'
				        },
				        series: [{
				            name: 'Popularity',
				            data: [
									['NY',   175.5],
									['DC',   120.3],
									['GA',   90.4],		                
				            ],
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                format: '{point.y:.1f}', // one decimal
				                y: 10, // 10 pixels down from the top
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        }]
				    });
				});

	
	}
	
	else if (period == "holiday")
	{
		document.getElementById("demo").innerHTML = "Best State To Host holiday Events: Louisiana";
		
		$(function(){
		    $('#left').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false
		        },
		        title: {
		            text: 'Revenue Generated, 2014'
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            type: 'pie',
		            name: 'Revenu',
		            data: [
		                ['LA',   60.0],
		                ['AL',   40.0],
		                ]
		        
		        }]
		    });
		});


			
			$(function () {
				    $('#right').highcharts({
				        chart: {
				            type: 'column'
				        },
				        title: {
				            text: 'Popularity by State'
				        },
				        subtitle: {
				            text: 'No. of people attended in 2014 '
				        },
				        xAxis: {
				            type: 'category',
				            labels: {
				                rotation: -45,
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        },
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'No. of people (thousands)'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: 'People attended: <b>{point.y:.1f} thousands</b>'
				        },
				        series: [{
				            name: 'Popularity',
				            data: [
									['LA',   200.5],
									['AL',   130.3],		                
				            ],
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                format: '{point.y:.1f}', // one decimal
				                y: 10, // 10 pixels down from the top
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        }]
				    });
				});

	
	}

	else if (period == "sport")
	{
		document.getElementById("demo").innerHTML = "Best State To Host sport Events: OHIO";
		
		$(function(){
		    $('#left').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false
		        },
		        title: {
		            text: 'Revenue Generated, 2014'
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            type: 'pie',
		            name: 'Revenu',
		            data: [
		                ['OH',   55.0],
		                ['WV',   25.0],
		                ['TX',   20.0],
		                
		                ]
		        
		        }]
		    });
		});


			
			$(function () {
				    $('#right').highcharts({
				        chart: {
				            type: 'column'
				        },
				        title: {
				            text: 'Popularity by State'
				        },
				        subtitle: {
				            text: 'No. of people attended in 2014 '
				        },
				        xAxis: {
				            type: 'category',
				            labels: {
				                rotation: -45,
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        },
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'No. of people (thousands)'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: 'People attended: <b>{point.y:.1f} thousands</b>'
				        },
				        series: [{
				            name: 'Popularity',
				            data: [
									['OH',   200.0],
									['WV',   125.0],
									['TX',   99.0],											                
				            ],
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                format: '{point.y:.1f}', // one decimal
				                y: 10, // 10 pixels down from the top
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            }
				        }]
				    });
				});

	
	}

	
}

