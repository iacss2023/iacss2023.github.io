<template>
  <div>
    <div class="view-container">
      <div class="view-title">浙大教育学院</div>
      <div class="view-main">
        <div class="view-image">
          <el-carousel :interval="5000" arrow="hover">
            <el-carousel-item v-for="item in jyxy" :key="item">
              <img :src="item.img">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="view-text">
          <p>教育学院由1897年成立的求是学院和育英学院提供的相关课程发展而来。目前，学院在教育领域拥有120多年的传统，专注于学术研究、教学和社区服务。其使命是在教育、体育科学和心理学领域培养具有国际视野、创新精神和综合能力的未来领导者。学院提供学位和非学位课程、与政府和国际组织合作的正规和非正规培训课程以及自筹资金的课程，以便为终身学习社会中的专业发展提供各种途径。</p>
          <p>学院由教育学系、体育学系、课程与学习科学系、教育领导与政策研究所和军事理论教研室组成。学院现有103名职员，865名学生（包括本科生549名，硕士生137名和博士生179名）和非全日制学生700名。学院还建立了十几个研究中心，使其在全国许多研究领域处于领先地位。</p>
          <p>学院非常重视国际交流与合作，与世界各地的国际组织和大学建立了密切的关系。目前，学院拥有五个国际科研与合作平台，与美国、英国、意大利、德国、匈牙利、丹麦、爱尔兰、俄罗斯、澳大利亚、日本、韩国、泰国等国家的近30所大学和研究机构建立了密切的学术伙伴关系。通过在创新研究、教学和推广计划方面的不懈努力，学院旨在打造成一所国际化、以研究为导向的教育学院。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoeViewCn',
  data () {
    return {
      jyxy: [
        { img: require('@/assets/jyxy/jyxy_2.jpg') },
        { img: require('@/assets/jyxy/jyxy_5.png') },
        { img: require('@/assets/jyxy/jyxy_8.jpg') },
        { img: require('@/assets/jyxy/jyxy_9.jpg') },
        { img: require('@/assets/jyxy/jyxy_10.jpg') },
        { img: require('@/assets/jyxy/jyxy_11.jpg') },
        { img: require('@/assets/jyxy/jyxy_12.jpg') }
      ]
    }
  }
}
</script>

<style scoped></style>
