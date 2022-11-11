<template>
  <div>
    <div class="view-container">
      <div class="view-title">Abstract Submission</div>
      <div class="view-main">
        <div class="view-section-title">Abstract Submission Guidelines</div>
        <p>Abstract submission is through EasyChair platform, exclusively. Authors must use an existing EasyChair account or create a new one. Information on how to create an EasyChair account can be found <a href="https://easychair.org/help/account_creation?a=">here</a>.</p>
        <div class="view-section">
          <div class="view-section-title small">Step 1</div>
          <ul>
            <li><p>Enter/create your EasyChair account</p></li>
            <li><p>Once you have the account, please use this link to get access to the congress.</p></li>
            <li><p>Click “make a new submission”</p></li>
            <li><p>Fill out the abstract form and press the ‘Submit’ button below. (we only accept online abstract submissions)</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Step 2</div>
          <ul>
            <li><p>Preview and confirm the abstract you intend to submit</p></li>
            <li><p>Receive notification of acceptance in your email by 15.06.22</p></li>
            <li><p>Pay your registration fee, abstracts from accounts that have not paid the registration fee will not be considered</p></li>
            <li><p>Edit your personal details if needed</p></li>
            <li><p>Check your registration status, especially during the important conference dates and deadline.</p></li>
          </ul>
        </div>
        <div class="view-section">
          <div class="view-section-title small">Formatting</div>
          <ul>
            <li><p>Please follow the formatting instructions below when submitting an abstract.</p></li>
            <li><p>The abstract must be uploaded to the EasyChair platform through authors account.</p></li>
            <li><p>Abstracts are restricted to 500 words (excluding title of abstract, authors’ names, addresses, and references), in Times New Roman font size 12, single line spaced. A template for the abstract can be downloaded <a href="src/assets/IJCSS_template_2012_AB.doc" download="IJCSS_template_2012_AB.doc">here</a>.</p></li>
            <li><p>Statements like “Data will be presented and discussed” is not acceptable.</p></li>
            <li><p>The abstract should preferably contain original data. However, well-conducted systematic reviews/meta-analyses can be accepted.</p></li>
            <li><p>Receipt confirmation of your abstract submission will be sent by e-mail.</p></li>
          </ul>
          <p>Your registration will only be completed upon payment of your registration fee. Authors are welcomed to proceed with the payment after the acceptance of the paper to be presented in the Conference. All accepted abstracts will be compiled in a Book of Abstracts, which will be sent to authors after the presentation in the Conference Parallel Sessions. However, some authors of accepted abstracts are invited to submit a short version (4 pages) to be considered for publication in our Congress-Proceedings, which will be a volume of the prestigious Springer Proceedings Series Advances in Intelligent Systems and Computing. Thus, any authors interested in having their submission considered for publication as a short-paper in the Congress Proceedings are to select the option “Consideration for the Proceedings.” in the EasyChair platform during the abstract submission process. Authors are also invited to submit the full-version of their papers to the International Journal of Computer Science in Sport (IJCSS). The submission of full-version papers will undergo the normal submission, peer-review and free-access process, and fees must apply.</p>
          <p class="note">(Note: Only Accepted Abstracts will be considered for publication, after which you will be prompted to submit the short or full version of your paper).</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmissionView'
}
</script>

<style scoped>
.view-section ul p{
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
