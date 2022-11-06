<template>
  <div id="page-header">
    <div class="entry-header">
    </div>
    <div id="navBar">
      <div id="nav" class="clearfix">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="navHandleSelect"
          active-text-color="#FF8508"
          text-color="black"
          background-color="#fff"
        >
<!--          <li style="flex-grow: 1;"></li>-->
          <template v-for="parNav in navs">
            <template v-if="parNav.children && parNav.children.length != 0">
              <el-sub-menu
                :index="parNav.parentNav.index"
                :key="'submenu' + parNav.parentNav.index"
              >
                <template v-slot:title>{{ parNav.parentNav.name }}</template>
                <template
                  v-for="navChild in parNav.children"
                  :key="'childNav' + navChild.navName"
                >
                  <el-menu-item :route="navChild.url" :index="navChild.index">{{
                      navChild.name
                    }}</el-menu-item>
                </template>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item
                :index="parNav.parentNav.index"
                :key="'submenu' + parNav.parentNav"
              >{{ parNav.parentNav.name }}</el-menu-item
              >
            </template>
          </template>
        </el-menu>
      </div>
    </div>
  </div>
  <div id="page-content" style="padding: 40px">
    <div id="main" class="clearfix" style="position:relative;">
      <div class="sidebar-left-wrap" style="position:static; width: 192px;height: 436px;
      display: block;vertical-align: baseline;float:left;">
        <div class="sidebar-left is_stuck" style="position: sticky; top: 0; width: 192px; padding-right: 32px">
          <template v-for="supporter in supporterImgs" :key="supporter.name">
            <div class="bard-widget widget_media_image">
              <a :href="supporter.hrefUrl">
                <img :src="supporter.url" style="max-width: 100%; height: auto" alt
                     loading="lazy" sizes="(max-width:300px) 100vw, 300px">
              </a>
            </div>
          </template>
        </div>
      </div>
      <div class="main-container">
        <router-view />
      </div>
      <div class="sidebar-right-wrap" >
        <div class="sidebar-right is_stuck" style="position: static; width: 192px; padding-left: 32px">
          <template v-for="sponsor in sponsors" :key="sponsor.name">
            <div class="bard-widget widget_media_image">
              <a :href="sponsor.hrefUrl">
                <img :src="sponsor.url" style="max-width: 100%;height: auto" alt
                loading="lazy" sizes="(max-width:300px) 100vw, 300px">
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <div id="page-footer">©️ IACSS 2023</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import * as process from 'process'

export default defineComponent({
  name: 'App',
  data () {
    return {
      activeIndex: '',
      navs: [
        {
          parentNav: { index: '/', name: 'Home' }
        },
        {
          parentNav: { index: 'venueNav', name: 'Venue' },
          children: [
            // { navName: "index", url: "/" },
            { index: 'venue', name: 'Venue' },
            {
              index: 'venueHangzhou',
              name: 'The City of Hangzhou'
            },
            { index: 'zju', name: 'Zhejiang University' },
            { index: 'coe', name: 'College of Education' },
            { index: 'dss', name: 'Department of Sports Science' },
            {
              index: 'conferencehistory',
              name: 'History'
            }
          ]
        },
        {
          parentNav: { index: 'travelNav', name: 'Travel' },
          children: [
            {
              index: 'travelhangzhou',
              name: 'Getting Hangzhou'
            },
            {
              index: 'accommodation',
              name: 'Accommodation'
            }
          ]
        },
        {
          parentNav: {
            index: 'submissionNav',
            name: 'Submission and Registration'
          },
          children: [
            {
              index: 'datedeadline',
              name: 'Date and Deadlines'
            },
            {
              index: 'submission',
              name: 'Abstract Submission'
            },
            {
              index: 'registration',
              name: 'Registration Information'
            },
            {
              index: 'presentation',
              name: 'Presentation Information'
            },
            {
              index: 'award',
              name: 'Award'
            }
          ]
        },
        {
          parentNav: {
            index: 'programNav',
            name: 'Program'
          },
          children: [
            {
              index: 'program',
              name: 'Program'
            },
            {
              index: 'conferencenews',
              name: 'Conference News'
            },
            {
              index: 'conferencethemes',
              name: 'Conference Themes'
            },
            {
              index: 'committees',
              name: 'Committees'
            },
            {
              index: 'keynote',
              name: 'Keynote Speaker'
            }
          ]
        },
        {
          parentNav: {
            index: 'sponsoring',
            name: 'Sponsoring'
          }
        },
        {
          parentNav: { index: 'contact', name: 'Contact Us' }
        }
      ],
      publicPath: process.env.BASE_URL,
      supporterImgs: [
        { name: 'conference', url: require('@/assets/iacss_logo_klein.gif'), hrefUrl: '' }
      ],
      sponsors: [
        { name: 'iacss2023', url: require('@/assets/logo.png'), hrefUrl: '' }
      ]
    }
  },
  methods: {
    navHandleSelect (key: string) {
      console.log(key)
      sessionStorage.setItem('currentPath', key)
      this.$router.push(key)
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

.note{
  color: #a4a4a4;
  font-style: italic;
  font-size: 14px;
}

//修改默认样式
.el-tabs__item.is-active, .el-tabs__item:hover{
  color: #ff9f3d!important;
}
.el-tabs__active-bar{
  background-color: #ff9f3d!important;
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
    width: 960px;
    margin: 0 auto;

    img {
      width: 960px;
      height: auto;
    }
  }

  .copyright-text {
    text-align: right;
    font-size: 14px;
    color: #9d9d9d;
  }

  .view-section-title {
    text-align: left;
    margin-bottom: 12px;
    font-family: Montserrat;
    font-weight: 500;
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
  background-image: url("@/assets/zju/zju2.png");
  background-size: cover;
  background-position: center center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navBar{
  width: 100%;
  //border-bottom: 1px solid;
  text-align: center;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  #nav {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 86px;
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
