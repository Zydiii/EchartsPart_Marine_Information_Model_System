<template>
  <div class="mapIcon">
    <Button type="text" shape="circle" @click="showInfo" class="button">
      <Icon type="ios-pin" size="30" />
    </Button>

    <!-- 气象采集器 -->
    <Modal v-model="show0" width="1300" class-name="infoModal" footer-hide>
      <p slot="close">
        <img style="height:35px;" src="../../assets/icons/chacha.svg" />
      </p>
      <div class="body">
        <p class="title">
          <span>
            <br />
            {{name}}
            <br />
          </span>
        </p>

        <div class="bodycard">
          <Row :gutter="16">
            <i-col span="12">
              <!-- 温度 -->
              <Row>
                <Card style="height:200px; background-color: #6E7783">
                  <Divider orientation="left">
                    <img style="height:50px;" src="../../assets/icons/temper.png" />
                  </Divider>
                  <div style="height:200px; ">
                    <ChartPolygonalLine
                      style="width: 600px; height: 130px; margin: auto "
                      :data="data0.temperData"
                    />
                  </div>
                </Card>
              </Row>
              <br />
              <!-- 压强 -->
              <Row>
                <Card style="height:200px; background-color: #6E7783">
                  <Divider orientation="left">
                    <img style="height:50px;" src="../../assets/icons/press.png" />
                  </Divider>
                  <div style="height:200px; ">
                    <ChartPolygonalLine
                      style="width: 600px; height: 130px; margin: auto "
                      :data="data0.pressData"
                    />
                  </div>
                </Card>
              </Row>
              <br />
              <!-- 雨量 -->
              <Row>
                <Card style="height:200px; background-color: #6E7783">
                  <Divider orientation="left">
                    <img style="height:50px;" src="../../assets/icons/rain.png" />
                  </Divider>
                  <div style="height:200px; ">
                    <ChartPolygonalLine
                      style="width: 600px; height: 130px; margin: auto "
                      :data="data0.rainData"
                    />
                  </div>
                </Card>
              </Row>
              <br />
            </i-col>
            <i-col span="12">
              <!-- 风向、风速 -->
              <Row :gutter="10">
                <i-col span="24">
                  <Card style="height:419.7px; background-color: #6E7783">
                    <Divider orientation="left">
                      <img style="height:50px;" src="../../assets/icons/wind.png" />
                    </Divider>
                    <div style="height:200px; ">
                      <ChartRose
                        style="width: 600px; height: 350px; margin: auto "
                        :data="data0.windData"
                      />
                    </div>
                  </Card>
                </i-col>
              </Row>
              <br />
              <!-- 湿度 -->
              <Row>
                <Card style="height:200px; background-color: #6E7783">
                  <Divider orientation="left">
                    <img style="height:50px;" src="../../assets/icons/wet.png" />
                  </Divider>
                  <div style="height:200px; ">
                    <ChartPolygonalLine
                      style="width: 600px; height: 130px; margin: auto "
                      :data="data0.wetData"
                    />
                  </div>
                </Card>
              </Row>
              <br />
            </i-col>
          </Row>
        </div>
      </div>
    </Modal>
    <!-- 生物采集器 -->
    <Modal v-model="show1" width="1300" class-name="infoModal" footer-hide>
      <p slot="close">
        <img style="height:35px;" src="../../assets/icons/chacha.svg" />
      </p>
      <div class="body">
        <p class="title">
          <span>
            <br />
            {{name}}
            <br />
          </span>
        </p>

        <div class="bodycard">
          <Row :gutter="16">
            <i-col span="12">
              <!-- 叶绿素 -->
              <Card style="height:300px; background-color: #6E7783">
                <Divider orientation="left">
                  <img style="height:50px;" src="../../assets/icons/chlorophyll.png" />
                </Divider>
                <div style="height:220px; ">
                  <ChartPolygonalLine
                    style="width: 600px; height: 230px; margin: auto "
                    :data="data1.chlorophyllData"
                  />
                </div>
              </Card>
            </i-col>
            <i-col span="12">
              <!-- 氧气含量 -->
              <Card style="height:300px; background-color: #6E7783">
                <Divider orientation="left">
                  <img style="height:50px;" src="../../assets/icons/oxygen.png" />
                </Divider>
                <div style="height:220px; ">
                  <ChartPolygonalLine
                    style="width: 600px; height: 230px; margin: auto "
                    :data="data1.oxygenData"
                  />
                </div>
              </Card>
            </i-col>
          </Row>
          <br />
        </div>
      </div>
    </Modal>
    <!-- 水文采集器 -->
    <Modal v-model="show2" width="1300" class-name="infoModal" footer-hide>
      <p slot="close">
        <img style="height:35px;" src="../../assets/icons/chacha.svg" />
      </p>
      <div class="body">
        <p class="title">
          <span>
            <br />
            {{name}}
            <br />
          </span>
        </p>

        <div class="bodycard">
          <Row :gutter="16">
            <i-col span="12">
              <!-- 温度 -->
              <Row>
                <Card style="height:200px; background-color: #6E7783">
                  <Divider orientation="left">
                    <img style="height:50px;" src="../../assets/icons/temper.png" />
                  </Divider>
                  <div style="height:200px; ">
                    <ChartPolygonalLine
                      style="width: 600px; height: 130px; margin: auto "
                      :data="data2.temperData"
                    />
                  </div>
                </Card>
              </Row>
              <br />
              <!-- 盐度 -->
              <Row>
                <Card style="height:200px; background-color: #6E7783">
                  <Divider orientation="left">
                    <img style="height:50px;" src="../../assets/icons/salt.png" />
                  </Divider>
                  <div style="height:200px; ">
                    <ChartPolygonalLine
                      style="width: 600px; height: 130px; margin: auto "
                      :data="data2.saltData"
                    />
                  </div>
                </Card>
              </Row>
              <br />
            </i-col>
            <i-col span="12">
              <Row :gutter="10">
                <!-- 流向、流速 -->
                <i-col span="12">
                  <Card style="height:419.7px; background-color: #6E7783">
                    <Divider orientation="left">
                      <img style="height:50px;" src="../../assets/icons/current.png" />
                    </Divider>
                    <div style="height:500px; margin-left: -10px;">
                      <ChartRose style="width: 290px; height: 350px; margin: auto " :data="data2.currentData" />
                    </div>
                  </Card>
                </i-col>
                <!-- 深度 -->
                <i-col span="12">
                  <Card style="height:419.7px; background-color: #6E7783">
                    <Divider orientation="left">
                      <img style="height:50px;" src="../../assets/icons/depth.png" />
                    </Divider>
                    <div style="height:500px; margin-left: -10px;">
                      <ChartXBar style="width: 290px; height: 350px; margin: auto " :data="data2.depthData" />
                    </div>
                  </Card>
                </i-col>
              </Row>
              <br />
            </i-col>
          </Row>
          <Row :gutter="10">
              <!-- 溶解氧 -->
              <i-col span="8">
                  <Card style="height:200px; background-color: #6E7783">
                  <Divider orientation="left">
                    <img style="height:50px;" src="../../assets/icons/dissolvedOxygen.png" />
                  </Divider>
                  <div style="height:200px; ">
                    <ChartPolygonalLine
                      style="width: 380px; height: 130px; margin: auto "
                      :data="data2.dissolvedOxygenData"
                    />
                  </div>
                </Card>
              </i-col>
              <!-- COD -->
              <i-col span="8">
                  <Card style="height:200px; background-color: #6E7783">
                  <Divider orientation="left">
                    <img style="height:50px;" src="../../assets/icons/cod.png" />
                  </Divider>
                  <div style="height:200px; ">
                    <ChartPolygonalLine
                      style="width: 380px; height: 130px; margin: auto "
                      :data="data2.codData"
                    />
                  </div>
                </Card>
              </i-col>
              <!-- 浊度 -->
              <i-col span="8">
                  <Card style="height:200px; background-color: #6E7783">
                  <Divider orientation="left">
                    <img style="height:50px;" src="../../assets/icons/turbidity.png" />
                  </Divider>
                  <div style="height:200px; ">
                    <ChartPolygonalLine
                      style="width: 380px; height: 130px; margin: auto "
                      :data="data2.turbidityData"
                    />
                  </div>
                </Card>
              </i-col>
          </Row>
          <br/>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import ChartPolygonalLine from "../charts/polygonalLine.vue";
import ChartRose from "../charts/rose.vue";
import ChartXBar from "../charts/xbar.vue"

export default {
  components: {
    ChartPolygonalLine,
    ChartRose,
    ChartXBar
  },
  props: {
    iconInfo: Object,
  },
  methods: {
    showInfo() {
      if (this.modalType == 0) this.show0 = true;
      else if (this.modalType == 1) this.show1 = true;
      else if (this.modalType == 2) this.show2 = true;
    },
  },
  data() {
    return {
      type: "",
      modelType: "",
      id: "",
      location: "",
      date: "",
      company: "",
      name: "",
      modalType: 0,
      show0: false,
      show1: false,
      show2: false,
      data0: {
        temperData: {
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
            ydata: [27.3, 28.2, 26.9, 27.5, 27.4, 28.2, 29.2],
          },
          colorData: {
            areaColor: "rgba(60, 108, 71, 0.8)",
            lineColor: "#519B60",
          },
          unitData: "℃",
        },
        pressData: {
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
            ydata: [1.004, 1.003, 1.003, 1.003, 1.002, 1.005, 1.009],
          },
          colorData: {
            areaColor: "rgba(113, 97, 39, 0.8)",
            lineColor: "#B5A538",
          },
          unitData: " Bar",
        },
        rainData: {
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
            ydata: [27, 15, 30, 25, 26, 18, 22],
          },
          colorData: {
            areaColor: "rgba(16,90,111, 0.8)",
            lineColor: "#1D7790",
          },
          unitData: " mm",
        },
        wetData: {
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
            ydata: [66, 77, 61, 61, 87, 96, 88],
          },
          colorData: {
            areaColor: "rgba(102,85,123, 0.8)",
            lineColor: "#63587E",
          },
          unitData: " %",
        },
        windData: {
          polarData: {
            center: ["50%", "47%"],
          },
          angleAxisData: [
            { value: "0" },
            { value: "10" },
            { value: "20" },
            { value: "30" },
            { value: "40" },
            { value: "50" },
            { value: "60" },
            { value: "70" },
            { value: "80" },
            { value: "90" },
            { value: "100" },
            { value: "110" },
            { value: "120" },
            { value: "130" },
            { value: "140" },
            { value: "150" },
            { value: "160" },
            { value: "170" },
            { value: "180" },
            { value: "190" },
            { value: "200" },
            { value: "210" },
            { value: "220" },
            { value: "230" },
            { value: "240" },
            { value: "250" },
            { value: "260" },
            { value: "270" },
            { value: "280" },
            { value: "290" },
            { value: "300" },
            { value: "310" },
            { value: "320" },
            { value: "330" },
            { value: "340" },
            { value: "350" },
          ],
          seriesData: [
            [
              0,
              1,
              5,
              2,
              0,
              0,
              0,
              2,
              1,
              1,
              4,
              0,
              2,
              7,
              2,
              3,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              4,
              1,
              3,
              3,
              4,
              2,
              3,
              4,
              6,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              0,
              1,
              2,
              3,
              1,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              1,
              1,
              4,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              3,
              3,
              4,
              2,
              3,
              0,
              4,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              6,
              1,
              2,
              3,
              1,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              3,
              1,
              5,
              3,
              4,
              2,
              3,
              4,
              2,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              3,
              3,
              4,
              2,
              3,
              4,
              6,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              6,
              1,
              2,
              3,
              1,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              0,
              1,
              0,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              4,
              1,
              3,
              3,
              4,
              2,
              3,
              4,
              6,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              4,
              1,
              2,
              3,
              1,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              2,
              1,
              6,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              3,
              3,
              4,
              2,
              3,
              4,
              6,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              0,
              1,
              2,
              3,
              1,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              6,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              3,
              3,
              4,
              2,
              3,
              4,
              6,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              2,
              1,
              2,
              3,
              1,
            ],
          ],
          colorData: [
            "#18697C",
            "#539F62",
            "#8DBA9B",
            "#C4B040",
            "#E27039",
            "#BC3843",
          ],
          unitData: " °",
          legendNameData: [
            "0-5 m/s",
            "5-10 m/s",
            "10-15 m/s",
            "15-20 m/s",
            "20-25 m/s",
            "25-30 m/s",
          ],
        },
      },
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
      data2: {
        temperData: {
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
            ydata: [7.3, 8.2, 9.9, 8.5, 9.4, 8.2, 9.2],
          },
          colorData: {
            areaColor: "rgba(236, 115, 87, 0.8)",
            lineColor: "#DE6449",
          },
          unitData: "℃",
        },
        saltData: {
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
            ydata: [3.55, 3.56, 3.60, 3.51, 3.55, 3.56, 3.57],
          },
          colorData: {
            areaColor: "rgba(212, 153, 185, 0.8)",
            lineColor: "#D499B9",
          },
          unitData: " %",
        },
        currentData: {
          polarData: {
            center: ['50%', '40%'],
            radius: ['0%', '79%'],
          },
          angleAxisData: [
            { value: "0" },
            { value: "10" },
            { value: "20" },
            { value: "30" },
            { value: "40" },
            { value: "50" },
            { value: "60" },
            { value: "70" },
            { value: "80" },
            { value: "90" },
            { value: "100" },
            { value: "110" },
            { value: "120" },
            { value: "130" },
            { value: "140" },
            { value: "150" },
            { value: "160" },
            { value: "170" },
            { value: "180" },
            { value: "190" },
            { value: "200" },
            { value: "210" },
            { value: "220" },
            { value: "230" },
            { value: "240" },
            { value: "250" },
            { value: "260" },
            { value: "270" },
            { value: "280" },
            { value: "290" },
            { value: "300" },
            { value: "310" },
            { value: "320" },
            { value: "330" },
            { value: "340" },
            { value: "350" },
          ],
          seriesData: [
            [
              0,
              1,
              0,
              2,
              0,
              0,
              0,
              2,
              1,
              1,
              4,
              0,
              2,
              0,
              2,
              3,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              4,
              1,
              3,
              3,
              4,
              2,
              0,
              4,
              6,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              0,
              1,
              2,
              3,
              5,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              1,
              1,
              4,
              3,
              0,
              2,
              3,
              4,
              6,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              3,
              3,
              6,
              2,
              3,
              0,
              4,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              2,
              1,
              2,
              3,
              1,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              3,
              1,
              5,
              3,
              1,
              2,
              3,
              4,
              2,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              3,
              3,
              4,
              2,
              3,
              4,
              6,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              0,
              1,
              2,
              3,
              1,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              0,
              1,
              0,
              3,
              4,
              2,
              3,
              4,
              0,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              4,
              1,
              3,
              3,
              4,
              2,
              3,
              4,
              0,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              0,
              1,
              2,
              3,
              1,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              2,
              1,
              6,
              3,
              4,
              2,
              3,
              4,
              0,
              1,
              2,
              3,
              0,
              2,
              3,
              4,
              6,
              1,
              3,
              3,
              4,
              2,
              3,
              4,
              6,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              0,
              1,
              2,
              3,
              1,
            ],
            [
              0,
              2,
              3,
              4,
              2,
              3,
              4,
              0,
              1,
              0,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              2,
              3,
              4,
              2,
              3,
              4,
              6,
              1,
              3,
              3,
              4,
              2,
              3,
              4,
              0,
              2,
              0,
              4,
              5,
              1,
              2,
              3,
              1,
              2,
              3,
              2,
              2,
              1,
              2,
              0,
              1,
            ],
          ],
          colorData: [
            "#18697C",
            "#539F62",
            "#8DBA9B",
            "#C4B040",
            "#E27039",
            "#BC3843",
          ],
          unitData: " °",
          legendNameData: [
            "0-5 m/s",
            "5-10 m/s",
            "10-15 m/s",
            "15-20 m/s",
            "20-25 m/s",
            "25-30 m/s",
          ],
        },
        depthData: {
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
            ydata: [0.1, 0.3, 0.25, 0.4, 0.22, 0.34, 0.12],
          },
          colorData: {
            itemColor: "rgba(144, 85, 162, 0.5)",
          },
          unitData: " km",
        },
        dissolvedOxygenData: {
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
            ydata: [2.54, 2.50, 2.52, 2.48, 2.50, 2.54, 2.52],
          },
          colorData: {
            areaColor: "rgba(163, 218, 255, 0.8)",
            lineColor: "#4ea1d3",
          },
          unitData: " mg/L",
        },
        codData: {
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
            ydata: [38, 44, 42, 35, 36, 38, 36],
          },
          colorData: {
            areaColor: "rgba(254, 200, 201, 0.8)",
            lineColor: "#fd999a",
          },
          unitData: " mg/L",
        },
        turbidityData: {
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
            ydata: [50, 48, 48, 50, 56, 54, 54],
          },
          colorData: {
            areaColor: "rgba(121, 189, 154, 0.8)",
            lineColor: "#a8dba8",
          },
          unitData: " NTU",
        }
      },
    };
  },
  mounted() {
    this.$nextTick(function () {
      (this.type = this.iconInfo.type),
        (this.modelType = this.iconInfo.modelType),
        (this.id = this.iconInfo.id),
        (this.location = this.iconInfo.location),
        (this.date = this.iconInfo.date),
        (this.company = this.iconInfo.company),
        (this.name =
          "采集器大类: " +
          this.type +
          " 采集器型号种类: " +
          this.modelType +
          " 浮标编号: " +
          this.id +
          " 当前位置信息: " +
          this.location +
          " 投放日期: " +
          this.date +
          " 归属单位: " +
          this.company);
      if (this.type == "气象采集器") this.modalType = 0;
      else if (this.type == "生物采集器") this.modalType = 1;
      else if (this.type == "水文采集器") this.modalType = 2;
    });
  },
};
</script>

<style lang="less">
button {
  box-shadow: none !important;
}
.infoModal {
  .ivu-modal-content {
    top: 0;
    background-color: rgba(241, 107, 111, 0.8);
    .ivu-modal-close {
      top: -17px;
      right: -15px;
    }
  }
  .ivu-divider-horizontal.ivu-divider-with-text-center,
  .ivu-divider-horizontal.ivu-divider-with-text-left,
  .ivu-divider-horizontal.ivu-divider-with-text-right {
    margin: 0px;
    top: -18px;
    margin-bottom: -25px;
  }
  .ivu-divider-horizontal.ivu-divider-with-text-left .ivu-divider-inner-text,
  .ivu-divider-horizontal.ivu-divider-with-text-right .ivu-divider-inner-text {
    padding: 0px;
    margin-top: 8px;
  }
  .ivu-modal-header-inner {
    color: #fff;
    margin: auto;
  }
  .body {
    background-color: rgba(47, 79, 79, 0.8);
    .title {
      color: #fff;
      text-align: center;
      font-size: 16px;
      height: 65px;
      margin-top: 2.5px;
    }
    .bodycard {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>