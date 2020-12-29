<template>
  <div>
    <el-row :gutter="20">
      <el-button type="primary" size="small" @click="add">新增</el-button>
      <el-button type="warning" size="small" @click="del">删除</el-button>
    </el-row>
    <el-row :gutter="20" style="margin-top:10px;">
      <el-table :data="tableData" height="520" size="small" border stripe style="width: 100%">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="edit">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100"
        layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </el-row>
    <el-dialog title="新增" :visible.sync="show" width="50%">
      <el-form :model="form">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="姓名" size="small" :label-width="formLabelWidth">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地址" size="small" :label-width="formLabelWidth">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="创建日期" :label-width="formLabelWidth">
              <el-date-picker v-model="form.date" style="width:100%" type="date" placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="warning" size="small" @click="onCancel">取 消</el-button>
        <el-button type="primary" size="small" @click="onOk">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'work-index',
  data () {
    return {
      value1: [],
      data: [],
      show: false,
      dialogFormVisible: false,
      form: {
        name: '',
        address: '',
        date: '', 
      },
      name:'',
      address:'',
      formLabelWidth: '80px',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      currentPage: 5,
    }
  },
  methods: {
    add () {
      this.show = true
      this.form = {}
    },
    del () { },
    edit () { },
    handleClick () { },
    onCancel () {
      this.show = false
    },
    onOk () {
      this.show = false
      let bdoy = {
          name:this.name,
          address:this.address
      }
      this.form.push(body) 
      console.log(this.form);        
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style lang="less" scoped>
</style>