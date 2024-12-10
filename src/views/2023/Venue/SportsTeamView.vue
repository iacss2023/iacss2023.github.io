<template>
  <div>
    <div class="view-container">
      <div class="view-title">Sports Big Data Innovation Team</div>
      <div class="view-main">
        <div class="view-image">
          <el-carousel :interval="5000" arrow="hover" indicator-position="none">
            <el-carousel-item v-for="item in bdit" :key="item">
              <img :src="item.img">
              <div class="copyright">
                <div class="copyright-text">
                  {{item.legend}}
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="view-text">
          <p>
            The Sports Big Data Innovation Team was founded in 2016 by Professors Yingcai Wu and Hui Zhang. The team has comprehensively promoted the cross-fertilization of disciplines, established an innovative ecosystem integrating disciplines, talents, and scientific research, and jointly enrolled more than 10 Ph.D. students in the direction of Sports Artificial Intelligence. The team has actively promoted international cooperation, planned sports science, and technology innovation with a global perspective, and jointly organized and participated in international academic exchanges and cooperation activities. Professor Hui Zhang holds the position of President of IACSS, the highest academic organization in the field of artificial intelligence in sports, and Professor Yingcai Wu has the director position.
          </p>
          <p>
            The team's research covers table tennis, badminton, and soccer and has also reached cooperation with several sports associations to provide them with big data platform services. The cross-team has jointly broken through several key AI sports-related technologies, developed several big data analysis systems, and has now published 20 AI+sports papers in top international conferences and journals (including IEEE VIS, ACM SIGKDD, ACM SIGCHI, etc.), winning 3 Best Paper Nomination Awards and 1 Best Paper Award.
          </p>
          <p>
            The team conducts interdisciplinary research around computational kinesiology. With competitive sports as the primary research object, computational kinesiology deeply integrates computer science, technology, and kinesiology. It uses artificial intelligence, big data, human-computer interaction, visualization, and statistical analysis as the primary means to collect, manage, mine, analyze, and visualize competitive sports data and support in-depth applications such as simulation and prediction. Based on professional knowledge such as competitive sports science, explore the fundamental laws and complex connections between sports training, competitive ability, and competition performance, and improve athletes' scientific training level and competitive ability performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SportsTeamView',
  data () {
    return {
      bdit: [
        { img: require('@/assets/2023/tydsjcxtd/bdit_1.png'), copyright: '', legend: 'Team International Exchange and Cooperation' },
        { img: require('@/assets/2023/tydsjcxtd/bdit_2.jpg'), copyright: '', legend: 'Team International Exchange and Cooperation' },
        { img: require('@/assets/2023/tydsjcxtd/bdit_3.jpg'), copyright: '', legend: 'Team International Exchange and Cooperation' },
        { img: require('@/assets/2023/tydsjcxtd/bdit_4.png'), copyright: '', legend: 'Team International Exchange and Cooperation' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
