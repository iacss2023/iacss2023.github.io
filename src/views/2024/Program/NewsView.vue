<template>
  <div>
    <div class="view-container">
      <div class="view-title">Workshop News</div>
      <div class="view-main">
        <div class="view-section">
          <div class="view-section-title small">IACSS Workshop Notification</div>
          <p>Dear Colleagues and Friends,</p>
          <p>After discussions among the organizing committee, here are the details regarding applications, conference fees, and hotel reservations for the IACSS Workshop 2024:</p>
          <p>(1) Application Deadline: The deadline for applying to participate in the IACSS Workshop 2024 is <strong>June 30th</strong>.</p>
          <p>(2) Conference Fee: The participation fee is 150 euros. Please wait for further instructions regarding the payment process.</p>
          <p>(3) Hotel Recommendation: We recommend the Best Western Plus Hôtel Monopole Métropole. If you need to make a reservation, please contact claude.karcher@creps-strasbourg.sports.gouv.fr via email.</p>
          <p>We look forward to seeing you in Strasbourg in July!</p>
          <p>The Organizing Committee</p>
          <p>May 22, 2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsView'
}
</script>

<style scoped>
ul{
  list-style-type: none;
}
ul li{
  margin: 4px 0;
}
.link_text{
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}
</style>
