<template>
  <div>
    <div class="view-container">
      <div class="view-title">体育学系</div>
      <div class="view-main">
        <div class="view-text">
          <div class="view-section">
            <p>体育学系成立于1952年，是中国最早的体育系之一。60多年来，该系在人才培养、科研、学科建设和体育训练方面取得了长足进步。它有一个博士后研究站和体育科学一级学科的博士学位和硕士学位授予权，并开设了3个本科专业（运动训练、体育教育、武术和民族传统体育）。另外，还将开设智能体育工程本科专业。体育学系现有教师32名，其中教授12名、副教授9名百人计划研究员5名。</p>
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
                <p>该系拥有良好的教学、训练和比赛场馆、科学实验室。谢震业、江钰源、鲍语晴、毛亚琪、王地等一大批优秀运动员在这里学习，在奥运会、世锦赛、世界大学生运动会、全运会、全国锦标赛等国内外比赛中取得了巨大成就。一批学生获得了国家“体育荣誉奖章”。</p>
              </el-col>
            </el-row>
          </div>
          <div class="view-section">
            <el-row :gutter="10">
              <el-col :span="15">
                <p>该部门建立了包括体育现代化与发展中心、国家体育总局体育产业研究基地、体育科学技术研究所、体育数据分析研究所和体育产业与体育活动与健康研究中心在内的高水平研究中心。近年来，该系的教员在国家、省和部级承担了40多个重要项目。在国内外学术期刊上发表论文近700篇，其中在顶级期刊上发表的论文超过150篇。同时，教师们还获得了约10项省级及以上科研和教学奖项。</p>
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
  name: 'DssViewCn',
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
        { img: require('@/assets/dss/jyy.jpg'), legend: 'JIANG Yuyuan' },
        { img: require('@/assets/dss/wqf.jpg'), legend: 'WU Qingfeng' },
        { img: require('@/assets/dss/myq.jpg'), legend: 'MAO Yaqi' },
        { img: require('@/assets/dss/wd.jpg'), legend: 'WANG Di' }
      ]
    }
  }
}
</script>

<style scoped></style>
