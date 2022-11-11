<template>
  <div>
    <div class="view-container">
      <div class="view-title">会议主题</div>
      <div class="view-main with-setting">
        <div class="view-section" style="border-bottom: none">
          <div class="view-section-title">国际体育计算机科学国际研讨会主题:</div>
          <ul>
            <template v-for="item in themes.iscss" :key="item"><li><p>{{item}}</p></li></template>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title small">特殊应用示例:</div>
          <ul>
            <template v-for="item in themes.iscssApplications" :key="item"><li><p>{{item}}</p></li></template>
          </ul>
        </div>
        <div class="view-section" style="border-bottom: none">
          <div class="view-section-title">体育与运动科学主题:</div>
          <ul>
            <template v-for="item in themes.exercise" :key="item"><li><p>{{item}}</p></li></template>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title small">特殊应用示例:</div>
          <ul>
            <template v-for="item in themes.exerciseApplications" :key="item"><li><p>{{item}}</p></li></template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConferenceThemesViewCn',
  data () {
    return {
      themes: {
        iscss: [
          '建模与仿真', '数据分析', '图像处理', '多媒体', '虚拟现实',
          '可视化和可视分析', '人机交互', '计算机视觉', '大数据',
          '物联网', '机器人', '信息系统', '机器学习与数据挖掘'
        ],
        iscssApplications: [
          '反馈系统', '预测建模', '决策支持', '数字竞技', '网络分析',
          '复杂系统分析', '序列分析', '传感器融合'
        ],
        exercise: [
          '生物力学', '运动控制与学习', '运动生理学与运动医学',
          '运动表现分析', '训练、指导和反馈', '运动心理学',
          '休闲和康复', '体育管理'
        ],
        exerciseApplications: [
          '适应与训练建模', '运动表现与疲劳建模',
          '最佳运动表现策略优化', '衰老与运动', '辅助技术',
          '健身游戏', '选材与发展'
        ]
      }
    }
  }
}
</script>

<style scoped></style>
