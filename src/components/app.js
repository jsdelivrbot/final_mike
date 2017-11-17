import React, { Component } from 'react';
import Sidebar from './sidebar';
var Highcharts = require('react-highcharts');
var ReactHighcharts = require('react-highcharts');
var Highlight = require('react-highlight');
var HighchartsMore = require('highcharts-more');
HighchartsMore(ReactHighcharts.Highcharts);
import Header from './header';

export default class App extends Component {
  render() {
  	 const data = {
          labels: [
            'Red',
            'Green',
            'Yellow'
          ],
          datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
          }]
        };
        var config2 = {
          chart: {
        type: 'area'
    },
    title: {
        text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
        text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
            'thebulletin.metapress.com</a>'
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
            1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
            27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
            26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
            22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
            10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
    } ]
        }
        var config = {
  chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 114.0, 76.0, 135.6, 118.5, 116.4, 94.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }]
    };
    var config3 = {
      chart: {
        type: 'spline'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Wind speed (m/s)'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        
    },
    tooltip: {
        valueSuffix: ' m/s'
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 3600000, // one hour
            pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
        }
    },
    series: [{
        
        data: [0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

    }, {
        
        data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }};

    var config4 = {
       chart: {
        type: 'solidgauge',
        marginTop: 50
    },

    title: {
        text: 'Activity',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: 200 - labelWidth / 2,
                y: 180
            };
        }
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Move',
        data: [{
            color: 'rgba(240,248,255)',
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }]
    }]

    }

    var config5 = {chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares January, 2015 to May, 2015'
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
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'IE',
            y: 56.33
        }, {
            name: 'Chrome',
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: 'Firefox',
            y: 10.38
        }, {
            name: 'Safari',
            y: 4.77
        }, {
            name: 'Opera',
            y: 0.91
        }, {
            name: 'Other',
            y: 0.2
        }]
    }]};

    var config6 = {
    series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 16.4, 29.2, 44.0, 76.0, 35.6, 48.5, 66.4, 94.1, 95.6, 54.4],
        showInLegend: false
    }]
    };
    return (
      <div className="page-container">
		   <Sidebar />
		     <div className="page-content">
             <Header />
		   	     <div className="col-xs-12">
		   	    	<ul className="breadcrumb">
                    <li>Home</li>                    
                    <li className="active">Dashboard</li>
                	</ul>
                	<div className="page-content-wrap">
                	   <div className="row">
                        <div className="col-md-4">
                            
                            <div className="widget col-md-12 dashboard-notice1" style={{backgroundColor: "#2ecc71"}}>
                                <div  id="owl-example" className="col-md-12 " >
                                    <div className="col-md-6">                                    
                                        <div className="widget-title"><i className="fa fa-tasks"></i> Campaigns</div>
                                        <div className="widget-int">85</div> 
                                    </div>
                                    <div className="col-md-6">                                    
                                        <div className="widget-title"><i className="fa fa-tasks"></i> Campaigns</div>                             
                                        <div className="widget-int">96</div>
                                    </div>
                                </div>

                                                                                      
                            </div> 
                            <div className="widget col-md-12 dashboard-notice1" style={{backgroundColor: "#3498db"}}>
                                <div  id="owl-example" className="col-md-12 " >
                                    <div className="col-md-6">                                    
                                        <div className="widget-title"><i className="fa fa-tasks"></i> Campaigns</div>
                                        <div className="widget-int">85</div> 
                                    </div>
                                    <div className="col-md-6">                                    
                                        <div className="widget-title"><i className="fa fa-tasks"></i> Campaigns</div>                             
                                        <div className="widget-int">96</div>
                                    </div>
                                </div>
                                
                                                                                      
                            </div>  
                            <div className="widget col-md-12 dashboard-notice1" style={{backgroundColor: "#1abc9c"}}>
                                <div  id="owl-example" className="col-md-12 " >
                                    <div className="col-md-6">                                    
                                        <div className="widget-title"><i className="fa fa-tasks"></i> Campaigns</div>
                                        <div className="widget-int">85</div> 
                                    </div>
                                    <div className="col-md-6">                                    
                                        <div className="widget-title"><i className="fa fa-tasks"></i> Campaigns</div>                             
                                        <div className="widget-int">96</div>
                                    </div>
                                </div>
                                
                                                                                      
                            </div>          
                            
                        </div>
                        <div className="col-md-8">
                            
                            <div className="widget dashboard-notice2">
                                <ReactHighcharts config = {config}></ReactHighcharts>                                                       
                            </div>         
                            
                        </div>
                        
                        
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                         <div className="panel panel-default">
                             
                                
                                <div className="panel-body">                                    
                                    <ReactHighcharts config = {config2}></ReactHighcharts>
                                </div>
                         </div>
                      </div>
                    </div>
                    <div className="row">
                         <div className="panel panel-default col-sm-12">
                                                                  
                            <div className="row panel-body">
                                    <div className="col-sm-6 widget">
                                      <ReactHighcharts config = {config3}></ReactHighcharts>
                                    </div>
                                
                       
                                <div className="col-sm-6 widget">                                    
                                    
                                      <ReactHighcharts config = {config5}></ReactHighcharts>
                                   
                                </div>
                          </div>      
                         
                      </div>
                      </div>


                   <div className="row">
                      <div className="col-md-12">         
                      <div className="col-sm-8">   
                                
                          <ReactHighcharts config = {config6}></ReactHighcharts>
                      </div>

                      </div>
                    </div>



                   </div>
		   	     </div>
		   	 </div>

          </div>
    );
  }
}
