<template>
  <div>
    <div class="view-container">
      <div class="view-title">Conference History</div>
      <div class="view-main">
        <div class="view-section-title">
          International Symposium on Computer Science in Sport topics:
        </div>
        <div id="history-table">
          <el-row>
            <el-col :span="6">
              <div><img class="congress-logo" :src="require('@/assets/iacss2022.png')"> </div>
            </el-col>
            <el-col :span="18">
              <el-table :data="history" style="width: 100%;">
                <el-table-column prop="year" label="Year" width="100" align="center"/>
                <el-table-column prop="location" label="Location" align="center"/>
                <el-table-column prop="country" label="Country" align="center"/>
                <el-table-column prop="symposiumOrder" label="IACSS International Symposium" align="center"/>
                <el-table-column prop="conferenceOrder" label="IACSS Conference" align="center"/>
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
  name: 'ConferenceHistoryView',
  data () {
    return {
      history: [
        { year: 1997, location: 'Cologne', country: 'Germany', symposiumOrder: 1, conferenceOrder: '' },
        { year: 1999, location: 'Vienna', country: 'Austria', symposiumOrder: 2, conferenceOrder: '' },
        { year: 2001, location: 'Cardiff', country: 'England', symposiumOrder: 3, conferenceOrder: '' },
        { year: 2003, location: 'Barcelona', country: 'Spain', symposiumOrder: 4, conferenceOrder: '' },
        { year: 2005, location: 'Hvar', country: 'Croatia', symposiumOrder: 5, conferenceOrder: '' },
        { year: 2007, location: 'Calgary', country: 'Canada', symposiumOrder: 6, conferenceOrder: '' },
        { year: 2008, location: 'Nanjing', country: 'China', symposiumOrder: '', conferenceOrder: 1 },
        { year: 2009, location: 'Canberra', country: 'Australia', symposiumOrder: 7, conferenceOrder: '' },
        { year: 2011, location: 'Shanghai', country: 'China', symposiumOrder: 8, conferenceOrder: '' },
        { year: 2012, location: 'Liverpool', country: 'England', symposiumOrder: '', conferenceOrder: 2 },
        { year: 2013, location: 'Istanbul', country: 'Turkey', symposiumOrder: 9, conferenceOrder: '' },
        { year: 2014, location: 'Darwin', country: 'Australia', symposiumOrder: '', conferenceOrder: 3 },
        { year: 2015, location: 'Loughborough', country: 'England', symposiumOrder: 10, conferenceOrder: '' },
        { year: 2016, location: 'Brasilia', country: 'Brazil', symposiumOrder: '', conferenceOrder: 4 },
        { year: 2017, location: 'Konstanz', country: 'Germany', symposiumOrder: 11, conferenceOrder: '' },
        { year: 2019, location: 'Moscow', country: 'Russia', symposiumOrder: 12, conferenceOrder: '' },
        { year: 2021, location: 'Vienna', country: 'Austria', symposiumOrder: '', conferenceOrder: 5 },
        { year: 2022, location: 'Vienna', country: 'Austria', symposiumOrder: 13, conferenceOrder: '' },
        { year: 2023, location: 'Hangzhou', country: 'China', symposiumOrder: 14, conferenceOrder: '' }
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
