<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
import echarts from "echarts";
import tdTheme from "./theme.json";
import { on, off } from "../../libs/tools";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "PolygonalLine",
  props: {
    data: Object,
  },
  data() {
    return {
      dom: null,
    };
  },
  methods: {
    resize() {
      this.dom.resize();
    },
  },
  mounted() {
    this.$nextTick(() => {
      let xAxisData = this.data.seriesData.xdata;
      let seriesData = this.data.seriesData.ydata;
      let itemColor = this.data.colorData.itemColor;
      let unit = this.data.unitData;
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
            crossStyle: {
              color: "#67809f",
            },
          },
        },
        grid: {
          top: "3%",
          left: "3%",
          right: "10%",
          bottom: "1%",
          containLabel: true,
        },
        xAxis: {
            type: 'value',
            axisLine: {
                lineStyle:{
                    type:'dashed',
                    color: '#67809f'
                }
            },
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dashed',
                    color: "#67809f", // 颜色
                }
            },
            "axisTick":{       //x轴刻度线
                "show":true,
                lineStyle:{
                    type:'dashed',
                    color: '#67809f'
                }
            },
            axisLabel: {
                fontSize: 12,
                color: '#67809f',
                formatter: "{value}" + unit,
            }
        },
        yAxis: {
            type: 'category',
            data: xAxisData,
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dashed',
                    color: "#67809f", // 颜色
                }
            },
            "axisTick":{       //y轴刻度线
                "show":false
            },
            "axisLine":{       //y轴
                "show":false
            },
            axisLabel: {
                fontSize: 12,
                color: "#67809f"
            },
            scale: true
        },
        series: [
            {
                type: 'bar',
                data: seriesData,
                itemStyle: {
                    color: itemColor
                },
            }
        ]
      };
      this.dom = echarts.init(this.$refs.dom, "tdTheme");
      this.dom.setOption(option);
      on(window, "resize", this.resize);
    });
  },
  beforeDestroy() {
    off(window, "resize", this.resize);
  },
};
</script>
