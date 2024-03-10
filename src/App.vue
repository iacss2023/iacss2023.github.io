<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import * as process from 'process'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
*, *:before, *:after{
  box-sizing: inherit;
  outline: 0!important;
}
.hr-block-wrapper{
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
  //background-color: #e8e8e8;
  height: 4px;
  margin: 30px 0;
  color: #dddddd;
}

.widget_title{
  border: 1px solid #ebebeb;
  border-top: 1px solid #030303;
  padding: 10px 0;
  font-size: 12px;
  font-family: Montserrat;
  //line-height: 32px;
  text-transform: uppercase;
}
.widget_media_image{
  margin-bottom: 20px;
}
.sponsor-text{
  font-family: Montserrat;
  font-size: 12px;
  //border: 1px solid #ebebeb;
  padding: 8px 16px;
  background-color: #f4faff;
  border-radius: 4px;
  border-bottom: 3px solid #50bfff;
  margin: 20px 0;
}

.note{
  color: #a4a4a4;
  font-style: italic;
  font-size: 14px;
}

.icon-center{
  cursor: pointer;
}
.el-carousel__container{
  height: 400px!important;
  .el-carousel__item{
    text-align: center;
    .carouselImg{
      height: 100%;
    }
  }
}

.crossline .el-form-item__label{
  line-height: unset;
}

.view-container {
  .view-title {
    font-size: 22px;
    line-height: 34px;
    letter-spacing: 0.5px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-family: Montserrat;
  }

  .view-text p {
    text-align: left;
  }

  .view-image {
    height: 400px;
    margin: 0 auto;

    img {
      height: 400px;
      width: auto;
    }
  }
  .copyright {
    //width: 400px;
    margin: 0 auto;
    margin-top: -40px;
    .copyright-text {
      text-align: center;
      font-size: 14px;
      color: #9d9d9d;
      display: block;
      width: fit-content;
      margin: 0 auto;
      padding: 10px 20px;
      //margin-top: -20px;
    }
  }
  .view-section-title {
    text-align: left;
    margin-bottom: 12px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 18px;
    &.small{
      font-size: 16px;
    }
  }

  .view-section {
    text-align: left;
    border-bottom: 2px solid #d9d9d9;
    padding: 10px 0;
  }

  .view-section:last-child {
    border-bottom: none;
  }

  ul {
    margin: 0;
    //font-size: 15px;
    //letter-spacing: 0px;
    //line-height: 25px;
  }

  .el-menu-item{
    font-family: 'Open Sans';
    font-weight: 600;
  }

  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background-color: #fffaf3 !important;
  }
  .view-main{
    p{
      text-align: left;
    }
    &.with-setting p{
      margin: 5px 0;
    }
  }
}
.entry-header{
  height: 450px;
  background-image: url("@/assets/zju/zju_bacground.jpg");
  background-size: cover;
  background-position: center center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606060;
}

#navBar{
  width: 100%;
  //border-bottom: 1px solid;
  text-align: center;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  #nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 60px;
    box-sizing: border-box;
    .homeNav {
    }
  }
  .el-menu--horizontal{
    border-bottom: none;
  }
}

#main{
  .main-container{
    float: left;
    margin: 0 auto;
    overflow: hidden;
    width: calc(100% - 384px);
  }
  .sidebar-right-wrap{
    position: static;
    width: 192px;
    display: block;
    vertical-align: baseline;
    float: right;
  }

}

#page-footer{
  margin-top: 1em;
  border-top: 1px #ddd solid;
  width: 100%;
  padding: 1em 0 0 0;
  line-height: 2em;
  color: #888;
  font-size: 83%;
  font-family:'Trebuchet MS', Verdana, Helvetica, Arial, sans-serif ;
}

.clearfix:after{
  clear: both;
}
.clearfix:before, .clearfix:after{
  content: "";
  display: table;
  table-layout: fixed;
}

</style>
