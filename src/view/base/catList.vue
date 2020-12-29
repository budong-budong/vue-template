<template>
  <div>
    <List item-layout="vertical" style="width:80%;margin-left:100px">
      <ListItem v-for="item in data" :key="item.id">
        <ListItemMeta
          :avatar="item.image.url"
          :title="item.name"
          :description="item.description"
        />
        {{ item.content }}
        <!-- 点赞 收藏 评论 -->
        <template slot="action">
          <li><Icon type="ios-star-outline" /> {{ item.adaptability }}</li>
          <li>
            <Icon type="ios-thumbs-up-outline" /> {{ item.affection_level }}
          </li>
          <li>
            <Icon type="ios-chatbubbles-outline" /> {{ item.energy_level }}
          </li>
        </template>
        <template slot="extra">
          <img :src="item.image.url" style="width: 320px;" />
        </template>
      </ListItem>
    </List>
    <el-pagination
          style="margin-top: 30px;text-align:right;"
          :current-page="page.start"
          :page-sizes="page.sizes"
          :page-size="page.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="page.totalCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
    </el-pagination>
 </div>
</template>

<script>
import {getData} from '../../api/catList'
import _ from "lodash";
import qs from "qs";
export default {
  name: "catList",
  data() {
    return {
      page: {
        start: 1,
        limit: 10,
        sizes: [10, 20, 30, 40],
        totalCount: 0
      },
      image: {},
      imageUrl: "",
      data: []
    };
  },
  methods: {
    initDta(){
        getData().then(response => {
          this.data = response.data;
        })
        .catch(error => console.log(error));
    },
    showimg() {
      console.log(this.imgUrl);
    },
    handleSizeChange(val) {
      this.page.limit = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.page.start = val;
      this.getData();
    }
  },
  mounted(){
      this.initDta();
  }
};
</script>

<style lang="less" scoped></style>
