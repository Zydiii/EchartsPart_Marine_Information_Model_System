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
      let areaColor = this.data.colorData.areaColor;
      let lineColor = this.data.colorData.lineColor;
      let unit = this.data.unitData;
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        grid: {
          top: "1%",
          left: "6%",
          right: "5%",
          bottom: "6%",
          containLabel: true,
        },
        xAxis: {
          position: "top",
          type: "category",
          boundaryGap: false,
          data: xAxisData,
          axisLine: {
            onZero: false,
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
          axisTick: {
            //x轴刻度线
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#fff",
            },
          },
          axisLabel: {
            fontSize: 12,
            color: "#fff",
          },
        },
        yAxis: {
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
          axisTick: {
            //y轴刻度线
            show: false,
          },
          axisLine: {
            //y轴
            show: false,
          },
          type: "value",
          axisLabel: {
            formatter: "{value}" + unit,
            fontSize: 12,
            color: "#fff",
          },
          scale: true,
        },
        dataZoom: [
          {
            // 这个dataZoom组件，也控制x轴。
            type: "inside", // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            start: 0, // 左边在 10% 的位置。
            end: 100, // 右边在 60% 的位置。
          },
        ],
        series: [
          {
            data: seriesData,
            type: "line",
            lineStyle: {
              normal: {
                color: lineColor,
              },
            },
            itemStyle: {
              normal: {
                color: lineColor,
                //label : {show: true}
              },
            },
            areaStyle: {
              color: areaColor,
            },
            smooth: "true",
          },
        ],
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
