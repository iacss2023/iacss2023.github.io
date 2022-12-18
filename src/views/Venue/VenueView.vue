<template>
  <div>
    <div class="view-container">
      <div class="view-title">ZHEJIANG UNIVERSITY</div>
      <div class="view-main">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/g33F1bHM4JE" title="An Overview of Zhejiang University" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="view-text">
          <p style="text-align: center">College of Education, Zijingang Campus, Zhejiang University, 866 Yuhangtang Road, Hangzhou, Zhejiang Province, P.R. China</p>
        </div>
        <div class="view-supplemental map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.486074667353!2d120.08431081603472!3d30.308689012994048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344b62e59347d573%3A0xc71a5f36936f81a0!2z5rWZ5rGf5aSn5a2m!5e0!3m2!1szh-CN!2ssg!4v1667565914759!5m2!1szh-CN!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
