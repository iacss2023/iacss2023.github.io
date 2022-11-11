<template>
  <div>
    <div class="view-container">
      <div class="view-title">住宿</div>
      <div class="view-main">
<!--        <div class="view-text">-->
<!--          <p>Here you can find some options for accommodation in Hangzhou. Please note that these are suggestions of a third party vendor`s service. Any activity, including purchase made, on the third party service shall be governed by such third party vendor`s terms and conditions.</p>-->
<!--        </div>-->
<!--        <hr class="hr-block-wrapper">-->
        <div class="description-list">
          <template v-for="hotel in hotelInfo" :key="hotel.name">
            <div class="list-item view-section">
              <div class="view-section-title small">{{hotel.name}}</div>
              <el-row :gutter="10" align="middle">
                <el-col :span="4">房间</el-col>
                <el-col :span="10">
                  <ul>
                    <li v-for="spec in hotel.specification" :key="spec.type">{{spec.type}}:{{spec.price}}</li>
                  </ul>
                </el-col>
                <el-col :span="4">电话</el-col>
                <el-col :span="6">{{hotel.tel}}</el-col>
                <el-col :span="4">地址</el-col>
                <el-col :span="20">{{hotel.location}}</el-col>
              </el-row>
            </div>
          </template>
        </div>
<!--        <hr class="hr-block-wrapper">-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccommodationViewCn',
  data () {
    return {
      hotelInfo: [
        { name: '圆正启真酒店', location: '杭州市西湖区余杭塘路866号', specification: [{ type: '双人间', price: '价格待定' }, { type: '单人间', price: '价格待定' }], tel: '+86 0571-88982888' },
        { name: '紫金港国际饭店', location: '杭州市西湖区申花路796号', specification: [{ type: '双人间', price: '价格待定' }, { type: '单人间', price: '价格待定' }], tel: '+86 0571-89731046' },
        { name: '维也纳智好酒店（杭州紫金港店）', location: '杭州市西湖区申花路800号', specification: [{ type: '双人间', price: '价格待定' }, { type: '单人间', price: '价格待定' }], tel: '+86 0571-89731046' },
        { name: '汉庭酒店（浙大紫金港店）', location: '杭州市西湖区紫荆花北路188号', specification: [{ type: '双人间', price: '价格待定' }, { type: '单人间', price: '价格待定' }], tel: '+86 0571-28056999' },
        { name: '丽呈東谷酒店（杭州西溪龙湖天街店）', location: '杭州市西湖区余杭塘路968号', specification: [{ type: '双人间', price: '价格待定' }, { type: '单人间', price: '价格待定' }], tel: '+86 0571-28322322' },
        { name: '帕町顿国际酒店公寓（西溪龙湖天街店）', location: '杭州市西湖区蒋村街道西溪龙湖天街3栋2单元323室', specification: [{ type: '双人间', price: '价格待定' }, { type: '单人间', price: '价格待定' }], tel: '+86 13396715436' }

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.description-list{
  //background-color: #eeeeee;
  //padding: 20px 5px;
  width: 100%;
  .list-item{
    background-color: white;
    margin: 10px 0;
    font-size: 15px;
    letter-spacing: 0px;
    line-height: 25px;
    //font-family: Montserrat;
    //font-weight: ;
  }
}
</style>
