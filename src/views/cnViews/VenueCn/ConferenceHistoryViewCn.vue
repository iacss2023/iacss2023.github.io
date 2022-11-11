<template>
  <div>
    <div class="view-container">
      <div class="view-title">历届会议</div>
      <div class="view-main">
        <div class="view-section-title">
          国际体育计算机科学大会:
        </div>
        <div id="history-table">
          <el-row>
            <el-col :span="6">
              <div><img class="congress-logo" :src="require('@/assets/iacss2022.png')"> </div>
            </el-col>
            <el-col :span="18">
              <el-table :data="history" style="width: 100%;">
                <el-table-column prop="year" label="年份" width="100" align="center"/>
                <el-table-column prop="location" label="地点" align="center"/>
                <el-table-column prop="country" label="国家" align="center"/>
                <el-table-column prop="symposiumOrder" label="国际会议IACSS" align="center"/>
                <el-table-column prop="conferenceOrder" label="IACSS会议" align="center"/>
              </el-table>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConferenceHistoryViewCn',
  data () {
    return {
      history: [
        { year: 1997, location: '科隆', country: '德国', symposiumOrder: 1, conferenceOrder: '' },
        { year: 1999, location: '维也纳', country: '奥地利', symposiumOrder: 2, conferenceOrder: '' },
        { year: 2001, location: '加地夫', country: '英国', symposiumOrder: 3, conferenceOrder: '' },
        { year: 2003, location: '巴塞罗那', country: '西班牙', symposiumOrder: 4, conferenceOrder: '' },
        { year: 2005, location: '赫瓦尔', country: '克罗地亚', symposiumOrder: 5, conferenceOrder: '' },
        { year: 2007, location: '卡尔加里', country: '加拿大', symposiumOrder: 6, conferenceOrder: '' },
        { year: 2008, location: '南京', country: '中国', symposiumOrder: '', conferenceOrder: 1 },
        { year: 2009, location: '堪培拉', country: '澳大利亚', symposiumOrder: 7, conferenceOrder: '' },
        { year: 2011, location: '上海', country: '中国', symposiumOrder: 8, conferenceOrder: '' },
        { year: 2012, location: '利物浦', country: '英国', symposiumOrder: '', conferenceOrder: 2 },
        { year: 2013, location: '伊斯坦布尔', country: '土耳其', symposiumOrder: 9, conferenceOrder: '' },
        { year: 2014, location: '达尔文', country: '澳大利亚', symposiumOrder: '', conferenceOrder: 3 },
        { year: 2015, location: '拉夫堡', country: '英国', symposiumOrder: 10, conferenceOrder: '' },
        { year: 2016, location: '巴西利亚', country: '巴西', symposiumOrder: '', conferenceOrder: 4 },
        { year: 2017, location: '康斯坦茨', country: '德国', symposiumOrder: 11, conferenceOrder: '' },
        { year: 2019, location: '莫斯科', country: '俄罗斯', symposiumOrder: 12, conferenceOrder: '' },
        { year: 2021, location: '维也纳', country: '奥地利', symposiumOrder: '', conferenceOrder: 5 },
        { year: 2022, location: '维也纳', country: '奥地利', symposiumOrder: 13, conferenceOrder: '' },
        { year: 2023, location: '杭州', country: '中国', symposiumOrder: 14, conferenceOrder: '' }
      ]
    }
  }
}
</script>

<style scoped>
.congress-logo{
  /*width: 100%;*/
  width: 160px;
  height: 160px;
  position: absolute;
  top: 50%;
  margin-top: -80px;
  margin-left: -80px;
}
#history-table{
  .el-table .el-table__cell{
    text-align: center!important;
  }
}
</style>
