<template>
  <div ref="dom" class="charts chart-pie"></div>
</template>

<script>
import echarts from "echarts";
import tdTheme from "./theme.json";
import { on, off } from "@/libs/tools";
echarts.registerTheme("tdTheme", tdTheme);
export default {
  name: "ChartPie",
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
      // let legend = this.value.map(_ => _.name)
      let unit = this.data.unitData
      let legendName = this.data.legendNameData
      let colorData = this.data.colorData
      let angleAxisData = this.data.angleAxisData
      let yData = this.data.seriesData
      let polarData = this.data.polarData
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
        color: colorData,
        angleAxis: {
          type: "category",
          data: angleAxisData,
          boundaryGap: false, //标签和数据点都会在两个刻度之间的带(band)中间
          axisTick: {
            show: false, //是否显示坐标轴刻度
          },
          splitLine: {
            show: true,
          },
          axisLabel: {
            show: true,
            interval: 0, //坐标轴刻度标签的显示间隔，在类目轴中有效
            formatter: "{value}"+unit,
            color: "#fff",
            fontSize: 9,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#ccc",
            },
          },
        },
        radiusAxis: {
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false, //是否显示坐标轴刻度
          },
          axisLine: {
            show: false, //是否显示坐标轴轴线
          },
          splitLine: {
            show: false,
            lineStyle: {
              // color:"black"
            },
          },
        },
        polar: polarData,
        series: [
          {
          
            barCategoryGap: 0,
            type: "bar",
            data: yData[0],
            coordinateSystem: "polar",
            name: legendName[0],
            stack: "a",
            itemStyle: {
              borderColor: "#ccc",
              borderWidth: 0.01,
            },
          },
          {
            barCategoryGap: 0,
            type: "bar",
            data: yData[1],
            coordinateSystem: "polar",
            name: legendName[1],
            stack: "a",
            itemStyle: {
              borderColor: "#ccc",
              borderWidth: 0.01,
            },
          },
          {
            barCategoryGap: 0,
            type: "bar",
            data: yData[2],
            coordinateSystem: "polar",
            name: legendName[2],
            stack: "a",
            itemStyle: {
              borderColor: "#ccc",
              borderWidth: 0.01,
            },
          },
          {
            barCategoryGap: 0,
            type: "bar",
            data: yData[3],
            coordinateSystem: "polar",
            name: legendName[3],
            stack: "a",
            itemStyle: {
              borderColor: "#ccc",
              borderWidth: 0.01,
            },
          },
          {
            barCategoryGap: 0,
            type: "bar",
            data: yData[4],
            coordinateSystem: "polar",
            name: legendName[4],
            stack: "a",
            itemStyle: {
              borderColor: "#ccc",
              borderWidth: 0.01,
            },
          },
          {
            barCategoryGap: 0,
            type: "bar",
            data: yData[5],
            coordinateSystem: "polar",
            name: legendName[5],
            stack: "a",
            itemStyle: {
              borderColor: "#ccc",
              borderWidth: 0.01,
            },
          },
        ],
        legend: {
          show: true,
          data: legendName,
          x : 'center',
          y: "bottom",
          padding: [0, 0, 10, 0],
          textStyle:{//图例文字的样式
            color:'#fff',
            fontSize:11
          },
        },
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
