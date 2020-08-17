export default function getData () {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLine: {
                lineStyle:{
                    type:'dashed',
                    color: '#ccc'
                }
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
                fontSize: 11,
                color: '#000'
            }
        },
        yAxis: {
            type: 'category',
            data: ['07-31', '08-01', '08-02', '08-03', '08-04', '08-05', '08-06'],
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
            axisLabel: {
                fontSize: 11
            },
            scale: true
        },
        series: [
            {
                type: 'bar',
                data: [0.1, 0.3, 0.25, 0.4, 0.22, 0.34, 0.12],
                itemStyle: {
                    color: '#CFAA9E'
                },
            }
        ]
    }
}
  