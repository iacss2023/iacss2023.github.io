<template>
  <div>
    <div class="view-container">
      <div class="view-title">Getting Venue</div>
      <div class="view-main">
        <div class="view-section">
          <div class="view-text">
            <p style="text-align: center;margin-top: 0">4-1-1 Nukuikita-machi, Koganei-shi, Tokyo, JAPAN 184-8501</p>
          </div>
          <img src="@/assets/2025/gakugei/campus_1.jpg" class="venue_photo">
        </div>
        <div class="view-section">
          <div class="view-section-title small">How to get to Tokyo Gakugei University</div>
          <div class="view-text">
            <p>Entrance by automobile is restricted. Please use public transport.</p>
          </div>
          <div class="view-supplemental map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.9553150400219!2d139.49242436368874!3d35.706015854163745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e5cba1968733%3A0x390bb29c845b6775!2sTokyo%20Gakugei%20University!5e0!3m2!1sen!2sus!4v1736621183543!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="view-text">
            <img class="travel-map" src="../../../assets/2025/gakugei/map.gif">
            <img class="travel-map" src="../../../assets/2025/gakugei/accessmap_en.png">
          </div>
          <div class="view-text">
            <el-tabs v-model="activeTab" class="demo-tabs">
              <el-tab-pane label="Plane" name="plane">
                <p>There are two airports in Tokyo: Narita Airport and Haneda Airport.</p>
                <p>You can choose the appropriate route to Tokyo Gakugei University according to the airport you arrive at.</p>
                <hr class="hr-block-wrapper">
                <div class="view-section">
                  <ul>
                    <li><strong>Narita Airport → Tokyo Gakugei University</strong></li>
                  </ul>
                  <ol>
                    <li><p>Take JR (Japan Railways) Narita Express from "Narita International Airport" to "Tokyo" station → Change to JR Chuo Line and get off at "Musashikoganei" station → Take the Keio bus bound for KODAIRA Danchi (No.5) to "Gakugeidai Seimon" bus stop.</p></li>
                    <li><p>Take the Airport Limousine Bus bound for "Kichijoji" station from Narita International Airport → At "Kichijoji", go onto JR Chuo line and get off at "Musashikoganei" station → From the north exit of Musashikoangei station, take the Keio bus bound for KODAIRA Danchi (No.5) to "Gakugeidai Seimon" bus stop.</p></li>
                  </ol>
                </div>
                <div class="view-section">
                  <ul>
                    <li><strong>Haneda (Tokyo International) Airport → Tokyo Gakugei University</strong></li>
                  </ul>
                  <ol>
                    <li><p>Take Tokyo Monorail from "Tokyo International Airport" to JR "Hamamatsucho" station → Change to JR Yamanote Line and get off at "Tokyo" station. Change to JR Chuo Line and get off at "Musashiokganei" station → Take the Keio bus bound for KODAIRA Danchi (No.5) to "Gakugeidai Seimon" bus stop.</p></li>
                    <li><p>Take the Airport Limousine Bus bound for "Musashikoganei Station south exit" from Haneda (Tokyo International) Airport → From the north exit of Musashikoganei station, take the Keio bus bound for KODAIRA Danchi (No.5) to "Gakugeidai Seimon" bus stop. </p></li>
                  </ol>
                </div>
              </el-tab-pane>
              <el-tab-pane label="Train" name="train">
                <p>You may pass through two train stations during your journey: JR Musashi-Koganei Station, and JR Kokubunji Station.</p>
                <p>You can choose the appropriate bus to reach Tokyo Gakugei University according to the train stations.</p>
                <hr class="hr-block-wrapper">
                <div class="view-section">
                  <ul>
                    <li><strong>JR Musashi-Koganei Station (North Exit) → Tokyo Gakugei University</strong>
                      <br>
                      <p>Approx. 25 mins on foot from the station</p>
                    </li>
                  </ul>
                  <ol>
                    <li><p>Bus stop No.5: from North Exit of JR Musashikoganei Station by Keio Bus from bus stop No.5 → Take a bus bound for KODAIRA Danchi or North Exit of Kokubunji station → After approx. 10 mins, get off at Gakugeidai Seimon by Keio Bus. </p></li>
                    <li><p>Bus stop No.6: from North Exit of JR Musashikoganei Station → take a bus on the CHUDAI-JUNKAN line → After approx. 10 minutes, get off at Gakugeisho-mae. </p></li>
                  </ol>
                </div>
                <div class="view-section">
                  <ul>
                    <li><strong>JR Kokubunji Station (North Exit) → Tokyo Gakugei University</strong>
                      <br>
                      <p>Approx. 20 mins on foot from the station</p>
                    </li>
                  </ul>
                  <ol>
                    <li><p>Bus stop No.2: from North Exit of JR Kokubunji Station by Gintetsu Bus bound for South Exit of KODAIRA Station → After approx. 10 mins, get off at Gakugei Daigaku.</p></li>
                    <li><p>Bus stop No.5: from North Exit of JR Kokubunji Sation by Keio Bus bound for North Exit of Musashikoganei Station → After approx. 10 mins, get off at Gakugeidai Seimon bus stop.</p></li>
                  </ol>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Campus</div>
          <div class="view-text">
            <p>You can check out the main buildings of the campus in the maps below.</p>
            <iframe id="mapen"
                    src="/TGU_map.pdf"
                    width="600" height="800" frameborder="0"></iframe>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VenueView',
  data () {
    return {
      activeTab: 'plane'
    }
  }
}
</script>

<style scoped>
.venue_photo{
  max-width: 960px;
}
.travel-map, .map{
  width: 960px;
}
iframe{
  width: 960px;
}
</style>
