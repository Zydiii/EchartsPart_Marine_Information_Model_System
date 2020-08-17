export default function getData () {
    return {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['8/1', '8/2', '8/3', '8/4', '8/5', '8/6', '8/7']
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [
            {   // 这个dataZoom组件，也控制x轴。
                type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                start: 0,      // 左边在 10% 的位置。
                end: 100         // 右边在 60% 的位置。
            }
        ],
        series: [{
            data: [20, 25, 23, 30, 21, 19, 26],
            type: 'line',
            areaStyle: {}
        }]
    }
  }
  