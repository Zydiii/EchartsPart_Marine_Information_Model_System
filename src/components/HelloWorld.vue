<template>
  <div class="hello">
    <!-- 图标，用于显示效果，到时候换成海图上的采集器 -->
    <div class="icons">
      <li v-for="(item, i) in icons" :key="`item-${i}`">
        <MapIcon v-bind:iconInfo="item"/>
      </li>
    </div>

    <Button @click="addChart" icon="ios-download-outline" type="primary" shape="circle"></Button>
    <Button @click="deleteChart" icon="ios-download-outline" type="primary" shape="circle"></Button>


    <div class="bodycard">
          <Row :gutter="16">
            <i-col v-for="num in i" :key="`item-${num}`" span="12">
              <!-- 叶绿素 -->
              <Card style="height:300px; background-color: #fff" v-show="true">
                <Divider orientation="left">
                  <img style="height:50px;" src="../assets/icons/chlorophyll.png" />
                </Divider>
                <div style="height:220px; ">
                  <ChartPolygonalLine
                    style="width: 600px; height: 230px; margin: auto "
                    :data="data1.chlorophyllData"
                  />
                </div>
              </Card>
            </i-col>

          </Row>
              <br />
          
          
          <br />
        </div>
    

    <!-- <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card>
          <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card>
          <chart-bar style="height: 300px;" :value="barData" text="每周用户活跃量"/>
        </Card>
      </i-col>
    </Row>
    <Row>
      <Card>
        <example style="height: 310px;"/>
      </Card>
    </Row> -->
  </div>
</template>

<script>
// import ChartBar from './charts/bar.vue'
// import ChartPie from './charts/pie.vue'
// import Example from './charts/example.vue'
import MapIcon from './icon/mapIcon.vue'

import ChartPolygonalLine from "./charts/polygonalLine.vue";

export default {
  name: 'HelloWorld',
  methods: {
            addChart () {
                this.i++;
                console.log(this.i);
            },
            deleteChart () {
                this.i--;
                console.log(this.i);
            }
        },
  components: {
    // ChartBar,
    // ChartPie,
    // Example,
    ChartPolygonalLine,
    MapIcon
  },
  data() {
    return {
      i: 0,
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      },
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      modal1: false,
      icons: [
        {type: '气象采集器', modelType: '浮标', id: 'FS-A21005', location: 'N:40.232° E:123.4585°', date: '2020.07.08', company: '上海交通大学'},
        {type: '生物采集器', modelType: '浮标', id: 'FS-P32470', location: 'N:40.232° E:123.4585°', date: '2020.07.10', company: '上海交通大学'},
        {type: '水文采集器', modelType: '剖面浮标', id: 'PFS-H87320', location: 'N:40.232° E:123.4585°', date: '2020.07.01', company: '上海交通大学'},
        {type: '走航系统', modelType: '实时观测', id: 'PFS-H87620', location: 'N:40.232° E:123.4585°', date: '2020.07.01', company: '上海交通大学'}
      
      ],
      value: '',
      data1: {
        oxygenData: {
          seriesData: {
            xdata: [
              "07-31",
              "08-01",
              "08-02",
              "08-03",
              "08-04",
              "08-05",
              "08-06",
            ],
            ydata: [4.74, 4.8, 4.82, 4.88, 4.7, 4.74, 4.72],
          },
          colorData: {
            areaColor: "rgba(253,214,146, 0.8)",
            lineColor: "#FFBC42",
          },
          unitData: " mg/L",
        },
        chlorophyllData: {
          seriesData: {
            xdata: [
              "07-31",
              "08-01",
              "08-02",
              "08-03",
              "08-04",
              "08-05",
              "08-06",
            ],
            ydata: [2.16, 2.11, 2.2, 2.2, 2.23, 2.19, 2.16],
          },
          colorData: {
            areaColor: "rgba(143, 188, 148, 0.8)",
            lineColor: "#8FBC94",
          },
          unitData: " μg/L",
        },
      },
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
