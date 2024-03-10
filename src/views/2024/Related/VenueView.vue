<template>
  <div>
    <div class="view-container">
      <div class="view-title">Venue</div>
      <div class="view-main">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/ZPihEOKdXI8?si=w-xxICETjdLMNLr9" title="Présentation CREPS de Strasbourg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="view-text">
          <p style="text-align: center">CREPS de Strasbourg, 4 All. du Sommerhof, 67200 Strasbourg, France</p>
        </div>
        <div class="view-supplemental map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.78847568992!2d7.708575012453868!3d48.57559997117551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c9d6c0221b9f%3A0x2449bfb2a960061b!2sCreps%20De%20Strasbourg!5e0!3m2!1szh-CN!2s!4v1710089932019!5m2!1szh-CN!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VenueView'
}
</script>

<style scoped>
.map{
  max-width: 1080px;
  margin: 0 auto;
}
iframe{
  width: 1080px;
}
</style>
