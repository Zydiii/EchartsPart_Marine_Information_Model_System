export default function getData () {
    var legendName = ["0-5 m/s","5-10 m/s","10-15 m/s","15-20 m/s","20-25 m/s","25-30 m/s"]
    return {
        color:["#18697C","#539F62","#8DBA9B","#C4B040","#E27039","#BC3843"],
        angleAxis: {
          type: 'category',
          data: [
            {value: '0'},
            {value: '10'},  {value: '20'},  {value: '30'},  {value: '40'},  {value: '50'},
            {value: '60'},
            {value: '70'},  {value: '80'},  {value: '90'},  {value: '100'},  {value: '110'},
            {value: '120'},
            {value: '130'},  {value: '140'},  {value: '150'},  {value: '160'},  {value: '170'},
            {value: '180'},
            {value: '190'},  {value: '200'},  {value: '210'},  {value: '220'},  {value: '230'},
            {value: '240'},
            {value: '250'},  {value: '260'},  {value: '270'},  {value: '280'},  {value: '290'},
            {value: '300'},
            {value: '310'},  {value: '320'},  {value: '330'},  {value: '340'},  {value: '350'},
          ],
          boundaryGap:false,//标签和数据点都会在两个刻度之间的带(band)中间
          axisTick: {
            show: false//是否显示坐标轴刻度
          },
          splitLine: {
            show:true,
          },
          axisLabel:{
            show:true,
            interval:0,//坐标轴刻度标签的显示间隔，在类目轴中有效
            formatter: '{value}°',
            color: '#000',
            fontSize: 10
          },
          axisLine: {
            show: true,
                lineStyle:{
                    color: '#ccc'
                }
          },
    },
    radiusAxis: {
      min:0,
      max:40,
      axisLabel: {
          show: false,
      },
      axisTick: {
        show: false//是否显示坐标轴刻度
      },
      axisLine:{
        show:false,//是否显示坐标轴轴线
      },
      splitLine: {
        show:false,
        lineStyle:{
          // color:"black"
        },
      },
    },
    polar: {
    },
    series: [{
      barCategoryGap:0,
      type: 'bar',
      data: [1, 2, 3, 4,
        2,3,4,6,
        1, 6, 3, 4,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,6,
        1, 3, 3, 4,
        2,3,4,6,
        2,7,4,5,
        1, 2, 3, 1,
        2,3,2,6,
        1, 2, 3, 1,],
      coordinateSystem: 'polar',
      name: legendName[0],
      stack: 'a',
      itemStyle: {
        borderColor:'#ccc',
        borderWidth:0.01,
      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [7, 2, 3, 2,
        2,3,4,6,
        1, 2, 3, 2,
        2,3,4,6,
        1, 2, 3, 5,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,1,
        2,3,4,1,
        1, 2, 2, 4,
        2,3,5,1,
        1, 2, 3, 1,],
      coordinateSystem: 'polar',
      name: legendName[1],
      stack: 'a',
      itemStyle: {
        borderColor:'#ccc',
        borderWidth:0.01,
      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [5, 2, 5, 4,
        2,3,1,7,
        1, 3, 3, 4,
        2,4,1,5,
        5, 2, 7, 9,
        2,1,3,6,
        3, 2, 3, 4,
        2,3,4,6,
        1,1,4,6,
        9, 1, 7, 7,
        1,8,9,3,
        1, 2, 3, 1,],
      coordinateSystem: 'polar',
      name: legendName[2],
      stack: 'a',
      itemStyle: {
        borderColor:'#ccc',
        borderWidth:0.01,
      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [1, 2, 1, 2,
        2,3,4,6,
        1, 2, 3, 2,
        2,3,4,6,
        1, 2, 3, 5,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,1,
        2,3,4,1,
        1, 2, 2, 4,
        1, 2, 3, 1,
        2,3,5,1,],
      coordinateSystem: 'polar',
      name: legendName[3],
      stack: 'a',
      itemStyle: {
        borderColor:'#ccc',
        borderWidth:0.01,
      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [10, 2, 13, 4,
        2,3,4,6,
        1, 2, 3, 4,
        1, 2, 3, 1,
        2,3,4,2,
        1, 2, 3, 4,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,6,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,1,],
      coordinateSystem: 'polar',
      name: legendName[4],
      stack: 'a',
      itemStyle: {
        borderColor:'#ccc',
        borderWidth:0.01,
      }
    }, {
      barCategoryGap:0,
      type: 'bar',

      data: [10, 2, 13, 2,
        2,3,4,6,
        1, 2, 3, 2,
        1, 2, 3, 1,
        2,3,4,6,
        1, 2, 3, 5,
        2,3,4,6,
        1, 2, 3, 4,
        2,3,4,1,
        2,3,4,1,
        1, 2, 2, 4,
        2,3,5,1,],
      coordinateSystem: 'polar',
      name: legendName[5],
      stack: 'a',
      itemStyle: {
        borderColor:'#ccc',
        borderWidth:0.01,
      }
    }, 
    ],
    legend: {
      show: true,
      data: legendName,
    }

    }
}
  