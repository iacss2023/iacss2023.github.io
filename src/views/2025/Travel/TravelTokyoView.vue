<template>
  <div>
    <div class="view-container">
      <div class="view-title">The City of Tokyo</div>
      <div class="view-main">
        <iframe width="960" height="480" src="https://www.youtube.com/embed/6DQxRQb9dCE" title="The city of Tokyo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="view-text">
          <p>Tokyo, the vibrant capital of Japan, is a bustling metropolis renowned for its seamless blend of tradition and modernity. As the political, economic, and cultural hub of the country, Tokyo offers an unparalleled experience, boasting futuristic skyscrapers, historic temples, and serene gardens. Home to over 14 million residents within the city proper and a population exceeding 37 million in the greater metropolitan area, Tokyo is one of the world's most populous urban regions.</p>
          <p>The city’s neighborhoods, from the neon-lit streets of Shinjuku and the high-tech hub of Akihabara to the historic Asakusa district and fashionable Harajuku, showcase its diversity. Tokyo’s attractions include landmarks like the iconic Tokyo Tower, the serene Meiji Shrine, and the sprawling Imperial Palace. It is also a global leader in technology, cuisine, and design, making it a beacon of innovation and cultural depth.</p>
          <p>Whether exploring its rich history or embracing its cutting-edge lifestyle, Tokyo captivates visitors with its dynamic energy and timeless charm.</p>
        </div>
<!--        <div class="view-image">-->
<!--          <el-carousel :interval="5000" arrow="hover">-->
<!--            <el-carousel-item v-for="item in hangzhou" :key="item">-->
<!--              <img :src="item.img">-->
<!--              <div class="copyright">-->
<!--                <div class="copyright-text">-->
<!--                  © {{item.copyright}}<br>-->
<!--                  {{item.legend}}-->
<!--                </div>-->
<!--              </div>-->
<!--            </el-carousel-item>-->
<!--          </el-carousel>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelTokyoView',
  data () {
    return {
      // hangzhou: [
      //   { img: require('@/assets/xihu_4.jpg'), copyright: 'TravelHK', legend: 'West Lake' }
      // ]
    }
  }
}
</script>

<style scoped></style>
