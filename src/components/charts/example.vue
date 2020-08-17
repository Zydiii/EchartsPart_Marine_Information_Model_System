<template>
    <div ref="dom"></div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/libs/tools'
export default {
  name: 'serviceRequests',
  data () {
    return {
      dom: null
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    }
  },
  
  mounted () {
    const option = {
      toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      dataView: {
        readOnly: false
      },
      magicType: {
        type: ["line", "bar"]
      },
      restore: {},
      saveAsImage: {}
    }
  },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        top: '3%',
        left: '1.2%',
        right: '1%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      dataZoom: [
        { // 这个dataZoom组件，也控制x轴。
          type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
          start: 0,      // 左边在 0% 的位置。
        }
      ],
      series: [
        {
          name: '运营商/网络服务',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {
            color: '#2d8cf0'
          } },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '银行/证券',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {
            color: '#10A6FF'
          } },
          data: [257, 358, 278, 234, 290, 330, 310]
        },
        {
          name: '游戏/视频',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {
            color: '#0C17A6'
          } },
          data: [379, 268, 354, 269, 310, 478, 358]
        },
        {
          name: '餐饮/外卖',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {
            color: '#4608A6'
          } },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '快递/电商',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {
            color: '#398DBF'
          } },
          data: [820, 645, 546, 745, 872, 624, 258]
        }
      ]
    }
    this.$nextTick(() => {
      this.dom = echarts.init(this.$refs.dom)
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
