<template>
  <div>
    <div class="view-container">
      <div class="view-title">赞助</div>
      <div class="view-main">
        <div id="sponsoring-container">
          <div id="content-main">
            <p style="font-weight: bold">
              本次会议的目的是将科学家和学者聚集在一起，就研究和发展现状进行交流。请感兴趣的科学家就体育运动中的表现诊断、数据分析和计算机科学等各个学科领域的当前进展进行探讨。
            </p>
            <p>
              科学成就总是与设计和销售产品的使用齐头并进。这就是为什么科学从工业技术投入中受益，公司从创新科学和知识中受益，而这些知识又可以整合到公司的产品中。
            </p>
            <p style="font-weight: bold">
              如果贵公司设计的产品符合我们的会议主题，我们希望邀请您参加。在此次赞助的范围内，我们将为您提供以下服务：
            </p>
            <div id="sponsor-type-container">
              <el-row :gutter="20">
                <el-col :span="8" class="scope-container">
                  <div class="scope-content">
                    <el-icon style="font-size: 60px" color="#186faf">
                      <ChromeFilled/>
                    </el-icon>
                    <h3 style="color: #186faf">赞助套餐</h3>
                    <p class="center is-bold">媒体外观:</p>
                    <p class="center">通过在会议网站上的活动文件夹上展示您的徽标。</p>
                    <p class="center is-bold">广告:</p>
                    <p class="center">分发贵公司的广告材料。</p>
                    <p class="center is-bold">价格:</p>
                    <p class="center">暂未公布</p>
                  </div>
                </el-col>
                <el-col :span="8" class="scope-container">
                  <div class="scope-content">
                    <el-icon style="font-size: 60px" color="#f0b429">
                      <Medal/>
                    </el-icon>
                    <h3 style="color: #f0b429">合作伙伴套餐</h3>
                    <p class="center is-bold">媒体外观:</p>
                    <p class="center">通过在会议网站上的活动文件夹上展示您的徽标。.</p>
                    <p class="center is-bold">广告:</p>
                    <p class="center">分发贵公司的广告材料。</p>
                    <p class="center is-bold">展台:</p>
                    <p class="center">在浙江大学教育学院大厅或小型礼堂与会议参与者直接接触。</p>
                    <p class="center is-bold">价格:</p>
                    <p class="center">暂未公布</p>
                  </div>
                </el-col>
                <el-col :span="8" class="scope-container">
                  <div class="scope-content">
                    <el-icon style="font-size: 60px" color="#d64545">
                      <UserFilled/>
                    </el-icon>
                    <h3 style="color: #d64545">个人套餐</h3>
                    <p class="center">当然，我们愿意讨论并提供个人赞助套餐。根据您的意愿，我们还可以满足特定的要求，如主旨发言人赞助、会议赞助或产品演示。要进行个人赞助套餐，请直接通过电子邮件联系我们赞助团队。</p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SponsoringViewCn'
}
</script>

<style lang="scss" scoped>
#sponsoring-container{
  width: 100%;
  background-color: #e8e8e8;
  padding: 20px 0;
  #content-main{
    width: 800px;
    margin: 0 auto;
  }
  #sponsor-type-container{
    background-color: white;
    .scope-container{
      background-color: white;
      padding: 10px;
    }
    .scope-content{
      padding: 20px 10px;
      background-color: #f3f3f3;
    }
    .center{
      text-align: center;
    }
    .is-bold{
      font-weight: bold;
    }
  }
}
</style>
