<template>
  <div>
    <div class="view-container">
      <div class="view-title">Getting to Strasbourg</div>
      <div class="view-main">
        <div class="view-text">
          <el-tabs v-model="activeTab" class="demo-tabs">
            <el-tab-pane label="Car" name="car">
              <p>highway A4/A35, direction Strasbourg Gare. Carpark slots are available on site.</p>
            </el-tab-pane>
            <el-tab-pane label="Plane" name="plane">
              <p>There are two airports in Strasbourg: Strasbourg Airport and Basel Euro Airport</p>
              <hr class="hr-block-wrapper">
              <div class="view-section">
                <ol>
                  <li><p>Strasbourg Airport: direct train from the airport to the main train station in the city center, 20 min</p></li>
                  <li><p>Basel Euro Airport: direct train to Strasbourg main train station, 1:10 hour</p></li>
                </ol>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Train" name="train">
              <p>The train station of Strasbourg is the Strasbourg main train station. You can get to the venue by public transport.</p>
              <hr class="hr-block-wrapper">
              <div class="view-section">
                <ul>
                  <li><p>Tram line F from "Faubourg National" → "Comtes" → walk to the venue (8-10 minutes walk)</p></li>
                </ul>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21115.620434948367!2d7.703192399610722!3d48.58203311291575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x4796c835fe89953d%3A0xd7ff8f182cd69da0!2sGare%20de%20Strasbourg%2C%20Place%20de%20la%20Gare%2C%20Strasbourg%2C%20France!3m2!1d48.58528!2d7.73422!4m5!1s0x4796c9d6c0221b9f%3A0x2449bfb2a960061b!2sCREPS%20de%20Strasbourg%2C%204%20All.%20du%20Sommerhof%2C%2067200%20Strasbourg%2C%20France!3m2!1d48.575599999999994!2d7.7111553!5e0!3m2!1szh-CN!2sus!4v1711525206206!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelStrasbourgView',
  data () {
    return {
      activeTab: 'car'
    }
  }
}
</script>

<style scoped>
</style>
