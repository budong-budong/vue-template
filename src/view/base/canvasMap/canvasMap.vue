<template>
  <div>
    <canvas id="canvas" width="700" height="550"></canvas>
    <img :src="img" id="lamp" />
  </div>
</template>

<script>
import img from '../../../assets/images/img/1.png'
import nodeList from '../../../libs/simulationNodeData'
import _ from 'lodash'
export default {
  name: 'canvasMap',
  data() {
    return {
      nodeList: [],
      interval: 10,
      img: '',
    }
  },
  methods: {
    // 构建地图数据
    drawCanvas(data) {
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext('2d')
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          let body = {
            x: data[i].lx,
            y: data[i].ly,
            z: data[i].lz,
            type: data[i].nodeType,
            fullFlage: data[i].fullFlage,
          }
          this.drawImage(body, ctx, 'map')
        }
      }
    },
    drawImage(data, ctx, val) {
      let type = data.type
      var startX = data['x'] + 1
      var startY = data['y'] + 1
      if (val === 'map') {
        switch (type) {
          case '0':
            this.drawStroage(ctx, startX, startY)
            break
          case '10':
            this.drawWork(ctx, startX, startY)

            break
          case '11':
            this.drawWork(ctx, startX, startY)
            break
          case '12':
            this.drawWork(ctx, startX, startY)
            break
          case '2':
            this.drawWork(ctx, startX, startY)
            break
          case '31':
            this.drawWork(ctx, startX, startY)
            break
          case '32':
            this.drawWork(ctx, startX, startY)
            break
          default:
            console.log('错误类型' + type)
            break
        }
      }
    },
    // // 正方形
    // drawWork(ctx, startX, startY) {
    //   ctx.beginPath();
    //   ctx.strokeStyle = 'white';
    //   ctx.lineWidth = 1;
    //   ctx.rect(startX*20, startY*20, this.interval, this.interval);
    //   ctx.stroke();
    //   ctx.fillStyle = 'skyblue';
    //   ctx.fill();
    //   ctx.closePath()
    // },

    drawWork(ctx, startX, startY) {
      ctx.beginPath()
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 1
      ctx.rect(startX * 20, startY * 20, this.interval * 2, this.interval * 2)
      // 线性渐变
      // let my_gradient = ctx.createLinearGradient(0, 0, 0, 170)
      // my_gradient.addColorStop(0, 'black')
      // my_gradient.addColorStop(1, 'white')
      // ctx.stroke()
      // ctx.fillStyle = my_gradient
    },
    drawStroage(ctx, startX, startY) {
      ctx.beginPath()
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 1
      ctx.rect(startX * 20, startY * 20, this.interval * 2, this.interval * 2)
      ctx.stroke()
      ctx.fillStyle = 'skyblue'
      ctx.fill()
      ctx.closePath()
    },

    initData() {
      this.nodeList = nodeList
      this.img = img
      if (this.nodeList.length > 0) {
        this.drawCanvas(_.cloneDeep(this.nodeList))
      }
    },
  },
  mounted() {
    this.initData()
    this.drawImage()
  },
}
</script>

<style lang="less" scoped>
</style>