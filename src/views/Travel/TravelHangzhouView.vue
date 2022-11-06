<template>
  <div>
    <div class="view-container">
      <div class="view-title">Getting Hangzhou</div>
      <div class="view-main">
        <div class="view-text">
          <el-tabs v-model="activeTab" class="demo-tabs">
            <el-tab-pane label="Plane" name="plane">
              <p>The airport of Hangzhou is Xiaoshan International Airport, which is 27 kilometers away from downtown Hangzhou. Xiaoshan International Airport has opened flights from all over the country and abroad.</p>
              <hr class="hr-block-wrapper">
              <div class="view-section">
                <ol>
                  <li>Metro: Line 19 → Shentangqiao Station, change to Line 2 → Xialongwei Station → 1.5km walk</li>
                  <li> Taxi: 43km</li>
                </ol>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Train" name="train">
              <p>There are two railway stations in Hangzhou: Hangzhou East Railway Station and Hangzhou Railway Station (city station).</p>
              <hr class="hr-block-wrapper">
              <div class="view-section">
                <ul>
                  <li><strong>Hangzhou East Railway Station → Zijingang Campus of Zhejiang University</strong></li>
                </ul>
                <ol>
                  <li><p>Metro: Line 1 → Fengqi Road Station, change to Line 2 → Xialongwei Station → 1.5km walk</p></li>
                  <li><p>Bus: No. 93 (East Railway Station) → Zijingang Campus of Zhejiang University</p></li>
                  <li><p>Taxi: 16.5 km</p></li>
                </ol>
              </div>
              <div class="view-section">
                <ul>
                  <li><strong>Hangzhou Railway Station (city station) → Zijingang Campus of Zhejiang University</strong></li>
                </ul>
                <ol>
                  <li><p>Metro: Line 5 → North Jianguo Road Station, change to Line 2 → Xialongwei Station → 1.5km walk</p></li>
                  <li><p>Bus: No. 90 (urban station) → Municipal Children's Hospital, change to No. 74 → Zhejiang University Zijingang Campus</p></li>
                  <li><p>Taxi: about 14.5km</p></li>
                </ol>
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
  name: 'TravelHangzhouView',
  data () {
    return {
      activeTab: 'plane'
    }
  }
}
</script>

<style scoped>
</style>
