<template>
  <div id="page-header">
    <div class="entry-header-25">
    </div>
    <div id="navBar">
      <div id="nav" class="clearfix" :style="language==='en'?'max-width:1200px':'max-width: 900px'">
        <el-menu v-if="language==='en'"
                 :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="navHandleSelect"
                 active-text-color="#ffaaab"
                 text-color="black"
                 background-color="#fff"
        >
          <template v-for="parNav in navs">
            <template v-if="parNav.children && parNav.children.length != 0">
              <el-sub-menu
                :index="parNav.parentNav.index"
                :key="'submenu' + parNav.parentNav.index"
                style="font-family: 'Open Sans'; font-weight: 600; letter-spacing: 1px"
              >
                <template v-slot:title>{{ parNav.parentNav.name }}</template>
                <template
                  v-for="navChild in parNav.children"
                  :key="'childNav' + navChild.navName"
                >
                  <el-menu-item
                    :route="navChild.index"
                    :index="navChild.index"
                    style="font-family: 'Open Sans'; font-weight: 400; letter-spacing: 1px"
                  >{{
                      navChild.name
                    }}</el-menu-item>
                </template>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item
                :index="parNav.parentNav.index"
                :key="'submenu' + parNav.parentNav"
                style="font-family: 'Open Sans'; font-weight: 600; letter-spacing: 1px"
              >{{ parNav.parentNav.name }}</el-menu-item
              >
            </template>
          </template>
        </el-menu>
      </div>
      <!--      <el-button v-if="language==='en'" style="float: right; margin-top: -58px; line-height: 58px;margin-right: 100px; font-family: 'Open Sans'" link @click="toCn">CN</el-button>-->
      <!--      <el-button v-else style="float: right; margin-top: -58px; line-height: 58px;margin-right: 100px; font-family: 'Open Sans'" link @click="toEn">EN</el-button>-->
    </div>
  </div>
  <div id="page-content" style="padding: 40px">
    <div id="main" class="clearfix" style="position:relative;">
      <div class="sidebar-left-wrap" style="position:static; width: 192px;height: 436px;
      display: block;vertical-align: baseline;float:left;">
        <div class="sidebar-left is_stuck" style="position: sticky; top: 0; width: 192px; padding-right: 32px">
          <h4 class="widget_title">supported by</h4>
          <template v-for="supporter in supporterImgs" :key="supporter.name">
            <div v-if="supporter.url" class="bard-widget widget_media_image">
              <a :href="supporter.hrefUrl">
                <img :src="supporter.url" style="max-width: 100%; height: auto" alt
                     loading="lazy" sizes="(max-width:300px) 100vw, 300px">
              </a>
            </div>
            <div v-else class="bard-widget sponsor-text page-container .tip">
              <span>{{supporter.name}}</span>
            </div>
          </template>
        </div>
      </div>
      <div class="main-container">
        <router-view />
      </div>
      <div class="sidebar-right-wrap" >
        <div class="sidebar-right is_stuck" style="position: static; width: 192px; padding-left: 32px">
          <h4 class="widget_title">sponsored by</h4>
          <template v-for="sponsor in sponsors" :key="sponsor.name">
            <div class="bard-widget widget_media_image" v-if="sponsor.url">
              <a :href="sponsor.hrefUrl" target="_blank">
                <img :src="sponsor.url" style="max-width: 100%;height: auto" alt
                     loading="lazy" sizes="(max-width:300px) 100vw, 300px">
              </a>
            </div>
            <div v-else class="bard-widget sponsor-text">
              <span>{{sponsor.name}}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <div id="page-footer">©️ IACSS 2025</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import * as process from 'process'

export default defineComponent({
  name: 'App',
  data () {
    return {
      language: 'en',
      activeIndex: '',
      navs: [
        {
          parentNav: { index: '/2025', name: 'Home' }
        },
        {
          parentNav: { index: 'venueNav', name: 'Venue' },
          children: [
            // { navName: "index", url: "/" },
            { index: '/2025/venue', name: 'Venue' },
            { index: '/2025/tgu', name: 'Tokyo Gakugei University' },
            {
              index: '/2025/conferencehistory',
              name: 'History'
            }
          ]
        },
        {
          parentNav: { index: '/2025/travelNav', name: 'Travel' },
          children: [
            {
              index: '/2025/traveltokyo',
              name: 'Getting to Tokyo'
            },
            {
              index: '/2025/accommodation',
              name: 'Accommodation'
            }
          ]
        },
        {
          parentNav: {
            index: '/2025/submissionNav',
            name: 'Submission and Registration'
          },
          children: [
            {
              index: '/2025/datedeadline',
              name: 'Dates and Deadlines'
            },
            {
              index: '/2025/submission',
              name: 'Abstract Submission'
            },
            {
              index: '/2025/registration',
              name: 'Registration Information'
            },
            {
              index: '/2025/presentation',
              name: 'Presentation Information'
            }
          ]
        },
        {
          parentNav: {
            index: '/2025/programNav',
            name: 'Program'
          },
          children: [
            {
              index: '/2025/program',
              name: 'Program'
            },
            {
              index: '/2025/conferencenews',
              name: 'Conference News'
            },
            {
              index: '/2025/conferencethemes',
              name: 'Conference Themes'
            },
            {
              index: '/2025/committees',
              name: 'Committees'
            },
            {
              index: '/2025/keynote',
              name: 'Keynote Speaker'
            }
          ]
        },
        {
          parentNav: {
            index: '/2025/sponsoring',
            name: 'Sponsoring'
          }
        },
        {
          parentNav: {
            index: '/2025/contact',
            name: 'Contact Us'
          }
        }
      ],
      publicPath: process.env.BASE_URL,
      supporterImgs: [
        // { name: 'conference', url: require('@/assets/iacss_logo_klein.gif'), hrefUrl: 'https://iacss.org/' },
        // { name: 'zju', url: require('@/assets/logo_zju.png'), hrefUrl: 'https://www.zju.edu.cn/english/' },
        // { name: 'College of Eduction, Zhejiang University', hrefUrl: 'http://www.ced.zju.edu.cn/' },
        // { name: 'Zhejiang University Education Foundation Shen Shanhong Fund' },
        // { name: 'The Fundamental Research Funds for the Central Universities' },
        // { name: 'Digital Sport and Health Laboratory, Zhejiang University' }
      ],
      sponsors: [
        // { name: 'dartfish', url: require('@/assets/sponsors/dartfish.png'), hrefUrl: 'https://www.dartfish.com/' },
        // { name: 'wishare', url: require('@/assets/sponsors/wishare.png'), hrefUrl: 'http://www.xports.cn/' },
        // { name: 'dongsport', url: require('@/assets/sponsors/dongsport.png'), hrefUrl: 'http://www.dongsport.com/' },
        // { name: 'info', url: require('@/assets/sponsors/info.png'), hrefUrl: 'https://www.infoinstruments.cn/' }
      ]
    }
  },
  watch: {
    $route (to) {
      this.updateNav(to.path)
    }
  },
  methods: {
    navHandleSelect (key: string) {
      sessionStorage.setItem('currentPath', key)
      this.$router.push(key)
    },
    toCn () {
      this.language = 'cn'
      this.$router.push('cn')
    },
    toEn () {
      this.language = 'en'
      this.$router.push('/')
    },
    updateNav (path:string) {
      // 判断是是英文还是中文网站
      const pathArray = path.split('/')
      // 中文
      if (pathArray.indexOf('cn') >= 0) {
        this.language = 'cn'
        this.activeIndex = path
        // eslint-disable-next-line brace-style
      }
      // 英文
      else {
        this.language = 'en'
        this.activeIndex = path
        // if (pathArray[1] === '') { this.activeIndex = '' } else { this.activeIndex = pathArray[1] }
      }
    }
  }
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

//修改默认样式
.el-tabs__item.is-active, .el-tabs__item:hover{
  color: #ffaaab!important;
}
.el-tabs__active-bar{
  background-color: #ffaaab!important;
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
.entry-header-25{
  height: 450px;
  background-image: url("@/assets/2025/gakugei/campus_1.jpg");
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
