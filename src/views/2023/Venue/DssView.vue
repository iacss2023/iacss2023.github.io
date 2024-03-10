<template>
  <div>
    <div class="view-container">
      <div class="view-title">Department of Sports Science</div>
      <div class="view-main">
        <div class="view-text">
          <div class="view-section">
            <p id="dss_1">The Department of Sports Science was founded in 1952. It is one of the earliest departments of sports science in China. The Department has made great progress in talent cultivation, scientific research, discipline construction, and sports training for more than 70 years. It has a postdoctoral research station and has the right to confer doctoral degrees and master’s degrees in Sports Science. The Department has three undergraduate programs (Sports Training, Physical Education, Martial Arts and Traditional National Sports). In addition, it will also set up the undergraduate program of Intelligent Sports Engineering. There are 32 teachers in the Department of Sports Science, including 12 professors, 9 associate professors and 5 ZJU 100 Young Professors.</p>
          </div>
          <div class="view-section">
            <el-row :gutter="10">
              <el-col :span="8">
                <div id="dss_carousel_2">
                  <el-carousel :interval="5000" arrow="hover" indicator-position="none">
                    <el-carousel-item v-for="item in player" :key="item">
                      <img :src="item.img" class="carouselImg">
                      <div class="copyright">
                        <span class="copyright-text">
                          {{item.legend}}
                        </span>
                      </div>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </el-col>
              <el-col :span="16">
                <p>The Department has good teaching, training, competition facilities and scientific laboratories. A large number of outstanding athletes, such as XIE Zhenye, JIANG Yuyuan, BAO Yuqing, MAO Yaqi, WANG Di, etc. have studied here, and have made great achievements in domestic and international competitions such as the Olympic Games, World Championships, World University Games, National Games, and National Championships. A number of students have won the National "Sports Medal of Honor".</p>
              </el-col>
            </el-row>
          </div>
          <div class="view-section">
            <el-row :gutter="10">
              <el-col :span="15">
                <p>The Department has established high-level research centers, including the Center for Sports Modernization and Development, the National Sports Industry Research Base of the General Administration of Sport of China, the Institute of Sports Science and Technology, the Institute of Sports Data Analytics, and the Research Center of Sports Industry and Physical Activity & Health. In recent years, the faculty members of the Department have undertaken more than 40 important projects at the national, provincial and ministerial levels. Nearly 700 papers have been published in academic journals at home and abroad, including more than 150 papers that have been published in top-class journals. Meanwhile, the faculty members have won approximately 10 provincial and above level scientific research and teaching awards.</p>
              </el-col>
              <el-col :span="9">
                <div id="dss_carousel_1">
                  <el-carousel :interval="5000" arrow="hover" indicator-position="none">
                    <el-carousel-item v-for="item in dss" :key="item">
                      <img :src="item.img" class="carouselImg">
                      <div class="copyright">
                        <span class="copyright-text">
                          {{item.legend}}
                        </span>
                      </div>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DssView',
  data () {
    return {
      dss: [
        { img: require('@/assets/dss/sipah_1.png'), copyright: '', legend: 'Achievements of the Research Center of Sports Industry and Physical Activity & Health' },
        { img: require('@/assets/dss/sipah_2.png'), copyright: '', legend: 'Achievements of the Research Center of Sports Industry and Physical Activity & Health' },
        { img: require('@/assets/dss/isda_1.png'), copyright: '', legend: 'Achievements of the Institute of Sports Data Analytics' },
        { img: require('@/assets/dss/isda_2.png'), copyright: '', legend: 'Achievements of the Institute of Sports Data Analytics' },
        { img: require('@/assets/dss/isda_3.png'), copyright: '', legend: 'Achievements of the Institute of Sports Data Analytics' },
        { img: require('@/assets/dss/isst_1.png'), copyright: '', legend: 'Achievements of the Institute of Sports Science and Technology' },
        { img: require('@/assets/dss/isst_2.png'), copyright: '', legend: 'Achievements of the Institute of Sports Science and Technology' },
        { img: require('@/assets/dss/isst_3.png'), copyright: '', legend: 'Achievements of the Institute of Sports Science and Technology' }
      ],
      player: [
        { img: require('@/assets/dss/xzy.jpg'), copyright: '', legend: 'XIE Zhenye' },
        { img: require('@/assets/dss/gcc.jpeg'), legend: 'GUAN Chenchen' },
        { img: require('@/assets/dss/jyy.jpg'), legend: 'Jiang Yuyuan' },
        { img: require('@/assets/dss/wqf.jpg'), legend: 'WU Qingfeng' },
        { img: require('@/assets/dss/myq.jpg'), legend: 'Mao Yaqi' },
        { img: require('@/assets/dss/wd.jpg'), legend: 'WANG Di' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
//.dssCarousel{
//  width: 300px;
//  height: auto;
//}
.el-carousel__container{
  width: 200px;
  height: auto!important;
}
.copyright-text{
  background-color: black;
  opacity: 0.7;
}
</style>
