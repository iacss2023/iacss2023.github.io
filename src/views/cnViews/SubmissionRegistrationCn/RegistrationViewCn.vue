<template>
  <div>
    <div class="view-container">
      <div class="view-title">会议注册</div>
      <div class="view-main with-setting">
        <div class="view-section">
          <div class="view-section-title">会议注册费</div>
          <el-table :data="feeInfo" stripe>
            <el-table-column label="">
              <template v-slot="scope"><p>{{scope.row.affair}}</p></template>
            </el-table-column>
            <el-table-column label="早鸟票收费" align="center">
              <template v-slot="scope"><p style="text-align: center;">{{scope.row.earlyBird}}</p></template>
            </el-table-column>
            <el-table-column label="标准收费" align="center">
              <template v-slot="scope"><p style="text-align: center">{{scope.row.standard}}</p></template>
            </el-table-column>
          </el-table>
          <p class="note title" style="margin-top: 10px">*早鸟票注册截止日期：2023年6月30日</p>
          <p class="note">广告参展商：仅允许参展商的展台工作人员。由于展位租金自动包括了每个展位一次完整登记，参展商被允许为每个展位登记一名额外人员，前提是该人员在展位上工作。</p>
        </div>
        <div class="view-section">
          <div class="view-section-title">注册费包括什么？</div>
          <ul>
            <li><p>参加所有学术会议</p></li>
            <li><p>进入商业展览</p></li>
            <li><p>进入海报展览</p></li>
            <li><p>茶歇</p></li>
            <li><p>参加大会安排的观光</p></li>
            <li><p>完整的会议材料</p></li>
            <li><p>会议晚宴邀请</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title">付款</div>
          <ul>
            <li><p>通过银行转账（收到付款后立即通过电子邮件确认注册）</p></li>
            <li><p>通过信用卡（付款在确认书上可见）</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title">取消政策</div>
          <ul>
            <li><p>会议注册费将在2023年6月24日之前根据要求退还，将扣除25%的管理费用。所有退款将在会议结束后发放。在此日期之后，将无法退款。可以随时要求更换与会者，但是，如果更改姓名，将收取30美元的费用。</p></li>
            <li><p>如果会议因任何原因（例如COVID限制）而取消，将确保全额退款。</p></li>
            <li>
              <p>取消和退款申请必须提交给浙江大学活动管理团队：</p>
              <p>电子邮件: 暂未公布</p>
              <p>传真: 暂未公布</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationViewCn',
  data () {
    return {
      feeInfo: [
        { affair: '非会员', earlyBird: '暂未公布', standard: '' },
        { affair: '会员', earlyBird: '', standard: '' },
        { affair: '非学生会员', earlyBird: '', standard: '' },
        { affair: '学生会员', earlyBird: '', standard: '' },
        { affair: '参展商', earlyBird: '', standard: '' },
        { affair: '随同人员', earlyBird: '', standard: '' }
      ]
    }
  }
}
</script>

<style scoped>
.note.title{
  font-size: 16px;
  color: #505050;
  font-weight: 600;
}
</style>
