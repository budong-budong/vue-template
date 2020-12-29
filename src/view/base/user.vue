<template>
  <div>
     <Button type="primary" size="small" style="margin-left:2px" @click="add"
          >新增</Button
        >
    <Table ref="selection" style="margin-top:10px" width="100%" border :columns="columns" :data="data">
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-left:2px"
          @click="show(row)"
          >查看</Button
        >
        <Button
          type="primary"
          size="small"
          style="margin-left:2px"
          @click="edit(row)"
          >编辑</Button
        >
       
        <Button
          type="error"
          size="small"
          style="margin-left:2px"
          @click="del(index)"
          >删除</Button
        >
      </template>
    </Table>
    <Modal
      @on-ok="onOk"
      @on-cancel="onCancel"
      :title="title"
      :value="showModal"
      width="50%"
    >
      <Form
        ref="formValidate"
        :model="formItem"
        :rules="ruleValidate"
        :label-width="50"
        label-position="right"
      >
        <Row>
          <i-col span="12">
            <FormItem label="姓名" prop="name">
              <Input
                :disabled="disabled"
                v-model="formItem.name"
                size="small"
                placeholder="请输入姓名"
              ></Input>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="年龄" prop="age">
              <Input
                :disabled="disabled"
                v-model="formItem.age"
                size="small"
                placeholder="请输入年龄"
              ></Input>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="地址" prop="address">
              <Input
                :disabled="disabled"
                v-model="formItem.address"
                size="small"
                placeholder="请输入地址"
              ></Input>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="省份" prop="province">
              <Input
                :disabled="disabled"
                v-model="formItem.province"
                size="small"
                placeholder="请输入省份"
              ></Input>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="城市" prop="city">
              <Input
                :disabled="disabled"
                v-model="formItem.city"
                size="small"
                placeholder="请输入城市"
              ></Input>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="邮编" prop="zip">
              <Input
                :disabled="disabled"
                v-model="formItem.zip"
                size="small"
                placeholder="请输入邮编"
              ></Input>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="电话" prop="tel">
              <Input
                :disabled="disabled"
                v-model="formItem.tel"
                size="small"
                placeholder="请输入电话"
              ></Input>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="性别" prop="sex">
              <Input
                :disabled="disabled"
                v-model="formItem.sex"
                size="small"
                placeholder="请输入电话"
              ></Input>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12">
            <FormItem label="学校" prop="school">
              <Input
                :disabled="disabled"
                v-model="formItem.school"
                size="small"
                placeholder="请输入学校"
              ></Input>
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="班级" prop="classname">
              <Input
                :disabled="disabled"
                v-model="formItem.classname"
                size="small"
                placeholder="请输入班级"
              ></Input>
            </FormItem>
          </i-col>
        </Row>
      </Form>
      <div slot="footer">
        <Button size="small" type="primary" @click="onOk">确认</Button>
        <Button size="small" type="warning" @click="onCancel">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  name: "user",
  data() {
    return {
      index: 5,
      disabled: false,
      formItem: {},
      selected: "",
      selectedList: [],
      title: "新增",
      showModal: false,
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name",
          width: 150,
          align: "center"
        },
        {
          title: "Age",
          key: "age",
          width: 100,
          align: "center"
        },
        {
          title: "Province",
          key: "province",
          width: 100,
          align: "center"
        },
        {
          title: "City",
          key: "city",
          width: 100,
          align: "center"
        },
        {
          title: "Address",
          key: "address",
          width: 200,
          align: "center"
        },
        {
          title: "Postcode",
          key: "zip",
          width: 120,
          align: "center"
        },
        {
          title: 'tel',
          key: 'tel',
          width: 120,
          align: "center"
        },
        {
          title: "sex",
          key: "sex",
          width: 120,
          align: "center"
        },
        {
          title: "school",
          key: "school",
          width: 120,
          align: "center"
        },
        {
          title: "classname",
          key: "classname",
          width: 120,
          align: "center"
        },
        {
          title: "操作",
          slot: "action",
          fixed: "right",
          width: 240,
          align: "center"
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          age: 24,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        }
      ],
      ruleValidate: {
        name: [{ required: true, message: "姓名必填" }],
        age: [{ required: true, message: "年龄必填" }],
        address: [{ required: true, message: "地址必填" }],
        province: [{ required: true, message: "省份必填" }],
        city: [{ required: true, message: "城市必填" }],
        zip: [{ required: true, message: "邮编必填" }],
        tel: [{ required: true, message: "电话必填" }]
      }
    };
  },
  methods: {
    //   查看
    show(row) {
      this.showModal = true;
      this.disabled = true;
      this.formItem = _.cloneDeep(row);
      this.title = "查看";
    },
    // 编辑
    edit(row) {
      this.showModal = true;
      this.disabled = false;
      this.formItem = _.cloneDeep(row);
      this.title = "编辑";
    },
    // 删除  根据当前数据下标删除
    del(index) {
      this.data.splice(index, 1);
    },
    onOk() {
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          if (this.title === "新增") {
            this.save();
            this.showModal = false;  //正常情况下 关闭弹窗应该写在接口调用成功之后执行的事件里
          } else if (this.title === "编辑") {
            this.update();
          } else if (this.title === "查看") {
            this.show();
            this.showModal = false;
          }
        }
      });
      this.disabled = false;
    },
    onCancel() {
      this.showModal = false;
      this.disabled = false;
    },
    // 新增
    add() {
      this.showModal = true;
      this.title = "新增";
    },
    // 新增 保存
    save() {
      this.index++;
      this.showModal = true;
      this.data.push({
        name: this.formItem.name,
        age: this.formItem.age,
        address: this.formItem.address,
        province: this.formItem.province,
        city: this.formItem.city,
        zip: this.formItem.zip,
        tel: this.formItem.tel,
        sex: this.formItem.sex,
        school: this.formItem.school,
        classname: this.formItem.classname
      });
    },
    // 编辑 更新  待完善
    update(index) {
      this.showModal = true;
    }
  }
};
</script>
