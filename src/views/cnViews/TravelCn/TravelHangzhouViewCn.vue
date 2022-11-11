<template>
  <div>
    <div class="view-container">
      <div class="view-title">抵达杭州</div>
      <div class="view-main">
        <div class="view-text">
          <el-tabs v-model="activeTab" class="demo-tabs">
            <el-tab-pane label="飞机" name="plane">
              <p>杭州的机场为萧山国际机场，离杭州市区较远，约27公里，萧山国际机场开通了国内各地以及国外各地的航班。</p>
              <hr class="hr-block-wrapper">
              <div class="view-section">
                <ul>
                  <li><strong>杭州萧山国际机场→浙江大学紫金港校区</strong></li>
                </ul>
                <ol>
                  <li>地铁：19号线→沈塘桥站，换2号线→虾龙圩站→步行1.5公里</li>
                  <li>出租车：43公里</li>
                </ol>
              </div>
            </el-tab-pane>
            <el-tab-pane label="火车" name="train">
              <p>杭州有两个火车站，即杭州火车东站与杭州火车站（城站）。</p>
              <hr class="hr-block-wrapper">
              <div class="view-section">
                <ul>
                  <li><strong>杭州火车东站→浙江大学紫金港校区</strong></li>
                </ul>
                <ol>
                  <li><p>地铁：1号线→凤起路站，换2号线→三坝站→虾龙圩站→步行1.5公里</p></li>
                  <li><p>公交车：93路（火车东站）→浙大紫金港校区（下客站）</p></li>
                  <li><p>出租车：约16.5公里</p></li>
                </ol>
              </div>
              <div class="view-section">
                <ul>
                  <li><strong>杭州火车站（城站）-浙江大学紫金港校区</strong></li>
                </ul>
                <ol>
                  <li><p>地铁：5号线→建国北路站，换2号线→虾龙圩站→步行1.5公里</p></li>
                  <li><p>公交车：90路（城站）→市儿童医院，换74路→浙大紫金港校区（下客站）</p></li>
                  <li><p>出租车：约14.5公里</p></li>
                </ol>
              </div>
            </el-tab-pane>
            <el-tab-pane label="汽车" name="bus">
              <p>杭州主要有4个长途汽车站，分别是客运中心、西站、南站、北站。</p>
              <hr class="hr-block-wrapper">
              <div class="view-section">
                <ul>
                  <li><strong>杭州汽车客运中心→浙江大学紫金港校区</strong></li>
                </ul>
                <ol>
                  <li><p>地铁：1号线→凤起路站，换2号线→虾龙圩站→步行1.5公里</p></li>
                  <li><p>公交车：284路（九堡五区站）→花园西村站，换74路→浙大紫金港校区（下客站）</p></li>
                  <li><p>出租车：24公里</p></li>
                </ol>
              </div>
              <div class="view-section">
                <ul>
                  <li><strong>杭州汽车西站→浙江大学紫金港校区</strong></li>
                </ul>
                <ol>
                  <li><p>地铁：3号线→武林门站，换2号线→虾龙圩站→步行1.5公里</p></li>
                  <li><p>公交车：89路（天目山古墩路口站）→章桥头站</p></li>
                  <li><p>出租车：9公里</p></li>
                </ol>
              </div>
              <div class="view-section">
                <ul>
                  <li><strong>杭州汽车南站→浙江大学紫金港校区</strong></li>
                </ul>
                <ol>
                  <li><p>地铁：1号线（婺江路站）→凤起路站，换2号线→虾龙圩站→步行1.5公里</p></li>
                  <li><p>出租车：24公里</p></li>
                </ol>
              </div>
              <div class="view-section">
                <ul>
                  <li><strong>杭州汽车北站→浙江大学紫金港校区</strong></li>
                </ul>
                <ol>
                  <li><p>地铁：10号线（花园岗站）→和睦站，换5号线→三坝站，换2号线→虾龙圩→步行1.5公里</p></li>
                  <li><p>公交车：129路/93路（地铁和睦站E口站）→浙大紫金港区站</p></li>
                  <li><p>出租车：9公里</p></li>
                </ol>
              </div>
            </el-tab-pane>
            <el-tab-pane label="自驾" name="car">
              <div class="view-section">
                <ul>
                  <li><strong>上海-嘉兴-杭州：173公里</strong></li>
                  <li><strong>南京-湖州-杭州：280公里</strong></li>
                  <li><strong>苏州-嘉兴-杭州：160公里</strong></li>
                  <li><strong>合肥-芜湖-杭州：430公里</strong></li>
                  <li><strong>宁波-绍兴-杭州：155公里</strong></li>
                  <li><strong>温州-杭州：295公里</strong></li>
                  <li><strong>金华-杭州：176公里</strong></li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelHangzhouViewCn',
  data () {
    return {
      activeTab: 'plane'
    }
  }
}
</script>

<style scoped>
</style>
