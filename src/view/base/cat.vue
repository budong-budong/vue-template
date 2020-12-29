<template>
  <div></div>
</template>

<script>
import { getCatFact } from "../../api/catList";
export default {
  name: "cat",
  data() {
    return {
      data: []
    };
  },
  methods: {
    initDta() {
      getCatFact()
        .then(response => {
          this.data = response.data;
        })
        .catch(error => console.log(error));
    }
  },
  mounted(){
      this.initDta()
  }
};
</script>

<style lang="less" scoped></style>
