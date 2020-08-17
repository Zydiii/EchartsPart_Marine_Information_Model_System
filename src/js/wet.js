export default function getData () {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis: {
            position: 'top',
            type: 'category',
            boundaryGap: false,
            data: ['07-31', '08-01', '08-02', '08-03', '08-04', '08-05', '08-06'],
            axisLine: {
                onZero: false,
                "show": false
            },
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dashed'
                }
            },
            "axisTick":{       //x轴刻度线
                "show":true,
                lineStyle:{
                    type:'dashed',
                    color: '#ccc'
                }
            },
            axisLabel: {
                fontSize: 11
            }
        },
        yAxis: {
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dashed'
                }
            },
            "axisTick":{       //y轴刻度线
                "show":false
            },
            "axisLine":{       //y轴
                "show":false
            },
            type: 'value',
            axisLabel: {
                formatter: '{value} %',
                fontSize: 11
            },
            scale: true
        },
        dataZoom: [
            {   // 这个dataZoom组件，也控制x轴。
                type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                start: 0,      // 左边在 10% 的位置。
                end: 100         // 右边在 60% 的位置。
            }
        ],
        series: [{
            data: [66, 77, 61, 61, 87, 96, 88],
            type: 'line',
            lineStyle: {
                normal: {
                    color: '#63587E'
                }
            },
            itemStyle : {  
                normal : {  
                    color:'#63587E',
                    //label : {show: true}
                }  
            },
            areaStyle: {
                color: '#66557B'
            },
            smooth: 'true'
        }]
    }
  }
  