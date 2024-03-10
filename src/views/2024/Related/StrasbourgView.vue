<template>
  <div>
    <div class="view-container">
      <div class="view-title">Strasbourg</div>
      <div class="view-main">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/oVUHwIuGE8g?si=VOW8tc7H5zfrdYwE" title="Strasbourg, Alsace, France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="view-text">
          <p>Strasbourg, a city in northeastern France, is the capital of the Grand Est region and the Bas-Rhin department (department 67). It is also the seventh largest city in France and the largest border city. Situated on the west bank of the Rhine River, it faces the state of Baden-Württemberg in Germany to the east, and the Vosges Mountains to the west. Although located away from the coastline, Strasbourg is still influenced by the North Atlantic Drift, resulting in a mild oceanic climate that is atypical for its latitude.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrasbourgView'
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
