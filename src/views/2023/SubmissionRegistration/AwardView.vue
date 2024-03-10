<template>
  <div>
    <div class="view-container">
      <div class="view-title">DARTFISH-IACSS Young Scientist Awards</div>
      <div class="view-main">
        <div>
          <img id="award_sponsor" src="../../../assets/sponsors/dartfish.png">
        </div>
        <div class="view-text award">
          <p>
            In association with Dartfish and the Conference Organizers,
            we are pleased to announce 3~5 X Dartfish-IACSS Young Scientist Awards with <b>Dartfish software licence</b>
            (888 Euros market valued for one year) or with worth 150 Euros each alongside a <b>conference registration fee discount (first award worth 100%, second worth 50% and third worth 25%)</b>
          </p>
          <p>
            To apply please submit the below to:
            <a href="zhang_hui@zju.edu.cn">zhang_hui@zju.edu.cn</a>
            and
            <a href="moon-seok.chung@dartfish.com">moon-seok.chung@dartfish.com</a>
          </p>
          <p>
            1) A one-page document evidencing why you should be awarded the Dartfish-IACSS Young Scientist Award<br>
            2) To date, C.V.<br>
            3) A copy of your abstract (the abstract must <router-link to="/2023/submission">also be submitted using the conference process</router-link>)<br>
            4) Evidence of student status (University stamped letter)<br>
          </p>
          <p>
            The deadline is <del>30 May 2023</del> <b>20 June 2023</b>. You must have submitted your abstract using the main submission process <router-link to="/2023、submission">here</router-link> to be eligible to receive the award.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AwardView'
}
</script>

<style scoped>
#award_sponsor{
  height: 80px;
}
</style>
