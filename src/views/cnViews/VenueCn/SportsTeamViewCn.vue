<template>
  <div>
    <div class="view-container">
      <div class="view-title">体育大数据创新团队</div>
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
            体育大数据创新团队由巫英才教授和张辉教授于2016年创建，团队全面推进学科交叉融合，建立了学科、人才、科研一体化的创新生态系统，联合招收了10余名体育人工智能方向的博士生。团队积极推动国际合作，以全球视野谋划体育科技创新，共同组织和参与了国际学术交流与合作活动。张辉教授在体育人工智能领域最高学术机构组织IACSS担任主席职务，巫英才教授担任理事职务。
          </p>
          <p>
            团队的研究内容涵盖乒乓球、羽毛球、足球等项目，也和多家体育协会达成了合作，为他们提供大数据平台服务。交叉团队共同突破了多项人工智能体育相关的关键技术，研发了多个大数据分析系统，现已在国际顶级会议和期刊上发表20篇人工智能+体育论文（包括IEEE VIS、ACM SIGKDD、ACM SIGCHI等），获得3项最佳论文提名奖，1项最佳论文奖。
          </p>
          <p>
            团队围绕着计算体育学开展学科交叉的研究。计算体育学以竞技体育为主要研究对象，深度融合计算机科学与技术和体育学，以人工智能、大数据、人机交互、可视化、统计分析等为主要手段，对竞技体育数据进行采集、管理、挖掘、分析、可视化，支持模拟和预测等深度应用。在竞技体育科学等专业知识的基础上，探索运动训练、竞技能力和比赛成绩间的基本规律和复杂联系，提高运动员科学训练水平和竞技能力表现。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SportsTeamViewCn',
  data () {
    return {
      bdit: [
        { img: require('@/assets/tydsjcxtd/bdit_1.png'), copyright: '', legend: 'Team International Exchange and Cooperation' },
        { img: require('@/assets/tydsjcxtd/bdit_2.jpg'), copyright: '', legend: 'Team International Exchange and Cooperation' },
        { img: require('@/assets/tydsjcxtd/bdit_3.jpg'), copyright: '', legend: 'Team International Exchange and Cooperation' },
        { img: require('@/assets/tydsjcxtd/bdit_4.png'), copyright: '', legend: 'Team International Exchange and Cooperation' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
