<template>
  <div>
    <div class="view-container">
      <div class="view-title">摘要提交</div>
      <div class="view-main">
        <p>摘要仅通过EasyChair平台提交。作者必须使用现有的EasyChair帐户或创建新帐户。如何创建EasyChair帐户的信息，请点击<a href="https://easychair.org/help/account_creation?a=">此处</a>。</p>
        <div class="view-section">
          <div class="view-section-title small">步骤一</div>
          <ul>
            <li><p>登入/创建您的EasyChair帐户</p></li>
            <li><p>一旦有了账户，请使用此链接访问大会</p></li>
            <li><p>单击“提交新论文”</p></li>
            <li><p>填写摘要表格并按下面的“提交”按钮（只接受在线摘要提交）</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title small">步骤二</div>
          <ul>
            <li><p>预览并确认要提交的摘要</p></li>
            <li><p>在2023年6月15日之前您将会收到被接受的电子邮件</p></li>
            <li><p>支付会议注册费，大会将不考虑未支付注册费的摘要</p></li>
            <li><p>如果需要，支付注册费时编辑您个人的详细信息</p></li>
            <li><p>检查您的注册状态，尤其是在重要会议日期和截止日期。</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title small">摘要格式</div>
          <ul>
            <li><p>提交摘要时，请遵循以下格式说明。</p></li>
            <li><p>摘要必须通过作者帐户上传到EasyChair平台。</p></li>
            <li><p>摘要限制为500字（不包括摘要标题、作者姓名、地址和参考文献），Times New Roman字体，大小为12，单行间距。可在此处下载摘要<a href="src/assets/IJCSS_template_2012_AB.doc" download="IJCSS_template_2012_AB.doc">模板</a>。</p></li>
            <li><p>“数据将被呈现和讨论”之类的声明是不可接受的。</p></li>
            <li><p>摘要最好包含原始数据。系统综述/荟萃分析的摘要也是可以接受的。</p></li>
            <li><p>将通过电子邮件通知您提交的摘要接收确认。</p></li>
          </ul>
          <p>仅在支付注册费后您才完成了注册。欢迎作者在论文被接受后进行付款。所有被接受的摘要都将编入《摘要集》，并在会议期间发给作者。然而，被接受摘要的部分作者可能进一步被邀请提交一个简短的论文版本（4页），以供在我们的会议论文集中发表，它会是著名的Springer会议论文集系列《智能系统和计算进展》的一卷。因此，有兴趣将其提交的简短论文发表在《会议论文集》上的作者，都必须在摘要提交过程中在EasyChair平台中选择“考虑论文集”选项。作者还可能被邀请将其论文的完整版本提交给《国际体育计算机科学杂志》（IJCSS）。提交完整版本的论文将经过正常提交、同行评审和自由访问等过程，但论文出版是收费。</p>
          <p class="note">(注：只有被接受的摘要才会考虑出版，之后会提示您提交论文简短或完整版本).</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmissionViewCn'
}
</script>

<style scoped>
.view-section ul p{
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
