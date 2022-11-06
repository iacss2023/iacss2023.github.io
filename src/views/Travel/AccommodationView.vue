<template>
  <div>
    <div class="view-container">
      <div class="view-title">Accommodation</div>
      <div class="view-main">
        <div class="view-text">
          <p>Here you can find some options for accommodation in Hangzhou. Please note that these are suggestions of a third party vendor`s service. Any activity, including purchase made, on the third party service shall be governed by such third party vendor`s terms and conditions.</p>
        </div>
        <hr class="hr-block-wrapper">
        <div class="description-list">
          <template v-for="hotel in hotelInfo" :key="hotel.name">
            <div class="list-item view-section">
              <div class="view-section-title small">{{hotel.name}}</div>
              <el-row :gutter="10" align="middle">
                <el-col :span="4">Specification</el-col>
                <el-col :span="10">
                  <ul>
                    <li v-for="spec in hotel.specification" :key="spec.type">{{spec.type}}:{{spec.price}}</li>
                  </ul>
                </el-col>
                <el-col :span="4">Tel</el-col>
                <el-col :span="6">{{hotel.tel}}</el-col>
                <el-col :span="4">Address</el-col>
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
  name: 'AccommodationView',
  data () {
    return {
      hotelInfo: [
        { name: 'Yuanzheng Qizhen Hotel', location: 'No. 866, Yuhangtang Road, Hangzhou, Zhejiang, China (Inside Zijingang Campus, ZJU)', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-88982888' },
        { name: 'Zijingang International Hotel', location: 'No. 796, Shenhua Road, Xihu District, Hangzhou, Zhejiang, China', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-89731046' },
        { name: 'Vienna Classic Hotel (Hangzhou Zijinggang)', location: 'No. 800, Shenhua Road, Xihu District, Hangzhou', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-89731046' },
        { name: 'Hanting Express (Hangzhou Zhejiang University Zijinggang)', location: 'No. 188, Zijinghua North Road, Xihu District, Hangzhou, Zhejiang, China', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-28056999' },
        { name: 'Rezen Dong Hotel (Hangzhou Xixi Longhu Paradise walk)', location: 'No.968 Yuhangtang Road, Xihu District, Hangzhou, Zhejiang, China', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 0571-28322322' },
        { name: 'Padington International Hotel apatment (Hangzhou Xixi Longhu Paradise walk)', location: 'Room 323, unit 2, building 3, West Xitian Street, Longhu, Jiangcun Street, Xihu District, Hangzhou, Zhejiang, China', specification: [{ type: 'Double Room', price: '***' }, { type: 'Single Room', price: '***' }], tel: '+86 13396715436' }

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
