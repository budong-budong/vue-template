<template>
  <div class="main">
      <div id="main1" class="box1">
      </div>
      <div id="main2" class="box2"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "echarts",
  data() {
    return {};
  },
  methods: {
    initData() {
      let myChart = echarts.init(document.getElementById('main1'));
      let option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      myChart.setOption(option)
    },
    initData2(){
         let myChart2 = echarts.init(document.getElementById('main2'));
         let option2 = {
             type:'pie',
             data:[
                 {name:'A',value:1212},
                 {name:'B',value:2323},
                 {name:'C',value:1919}
             ]
         }
         myChart2.setOption(option2)
    }
  },
  mounted() {
    this.initData();
    this.initData2()
  }
};
</script>

<style lang="less" scoped>
.main{
    width: 100%;
    height: 100%;
    // display: flex;
    // flex-wrap: wrap;
    // align-items: flex-start;
    .box1{
        width: 500px;
        height: 400px;
    }
    .box2{
        width: 500px;
        height: 400px;
        margin-left: 500px;
    }
}
</style>
