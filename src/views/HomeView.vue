<template>
  <div class="home">
    <div class="post-container">
      <div class="post-main" style="margin-bottom: 100px">
        <div id="congress-info" class="kt-row-layout-inner kt-row-has-bg">
          <div class="post-row-layout-overlay"></div>
          <div class="post-center">
            <div class="post-content">
              <div id="congress-name">
                <h2 class="congress-title text-white">14th International Symposium on Computer Science in Sport
                  <br>
                  IACSS 2023
                </h2>
                <h5 class="congress-time text-white">September 27-30</h5>
                <h3 class="congress-location text-white">Hangzhou, China</h3>
                <div class="event-button-group">
                  <el-button size="large" color="#FF9F3D" @click="$router.push('conferencenews')">News & Update</el-button>
                  <el-button size="large" color="#FF8508" @click="$router.push('datedeadline')">Dates & Deadlines</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="post-bottom-decoration">
            <svg style="fill:#ffffff" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path d="M1000,0l-500,98l-500,-98l0,100l1000,0l0,-100Z" style="opacity:0.4"></path>
              <path d="M1000,20l-500,78l-500,-78l0,80l1000,0l0,-80Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <hr class="hr-block-wrapper">
      <div id="page-affairs" style="display: block;clear: both;margin: 10px auto">
        <div style="position:relative;">
          <div class="affairs-group">
            <el-row class="clearfix" :gutter="30">
              <el-col :span="8">
                <div class="affair-item">
                  <div class="affair-header">
                    <div class="affair-icon" style="background-color: #ff9f3d;border-color: #ff9f3d">
                      <a>
                        <el-icon color="white" class="icon-center" @click="$router.push('contact')">
                          <Message />
                        </el-icon>
                      </a>
                    </div>
                    <div class="affair-title">Contact</div>
                  </div>
                  <div class="affair-detail">
                    <p class="detail-text">
                      The Support-Team is happy to answer any and all questions regarding registration, abstract submissions and more.
                      If you are interested in supporting the conference, we will be happy to discuss your proposal.
                    </p>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="affair-item">
                  <div class="affair-header">
                    <div class="affair-icon" style="background-color: #fcb983;border-color: #fcb983">
                      <a>
                        <el-icon color="white" class="icon-center" @click="$router.push('submission')">
                          <Download />
                        </el-icon>
                      </a>
                    </div>
                    <div class="affair-title">Abstract Submission</div>
                  </div>
                  <div class="affair-detail">
                    <p class="detail-text">
                      All information regarding the abstract submission can be found here.
                    </p>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="affair-item">
                  <div class="affair-header">
                    <div class="affair-icon" style="background-color: #723000;border-color: #723000">
                      <a>
                        <el-icon color="white" class="icon-center" @click="$router.push('registration')">
                          <Edit />
                        </el-icon>
                      </a>
                    </div>
                    <div class="affair-title">Registration</div>
                  </div>
                  <div class="affair-detail">
                    <p class="detail-text">
                      To register for the Conference please visit out Registration page.
                      All information regarding the registration fees,
                      our cancellation policy and the link to the registration-mask is readily available.
                    </p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="affair-decoration">
            <svg style="fill:#eeeeee" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path d="M1000,100c0,0 -270.987,-98 -500,-98c-229.013,0 -500,98 -500,98l1000,0Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <hr class="hr-block-wrapper">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>

<style lang="scss" scoped>
.text-white{
  color: white;
}
#congress-info{
  background-image: url("@/assets/zju/zju_7.jpg");
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  .post-row-layout-overlay{
    opacity: 0.46;
    background-color: #2c3e50;
    mix-blend-mode: lighten;
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    filter: opacity(100%);
  }
  &.kt-row-layout-inner{
    position: relative;
    border: 0 solid transparent;
  }
  .post-center{
    max-width: 960px;
    padding-top: 80px;
    padding-bottom: 100px;
    margin: 0 auto;
    .post-content{
      margin-right: 0;
      position: relative;
      flex: 1;
      #congress-name{
        height: 100%;
        transition: all 0.3s ease;
        .congress-title{
          margin-bottom: 12px;
          text-align: center;
          font-size: 42px;
          font-weight: 600;
        }
        .congress-time{
          font-size: 2em;
          font-weight: 300;
          font-family: Montserrat;
          margin-top: 120px;
          margin-bottom: 12px;
        }
        .congress-location{
          font-size: 2.3em;
          line-height: 1.3em;
          font-weight: 600;
          font-family: Montserrat;
          margin: 12px 0;
        }
        .event-button-group{
          width: 100%;
          text-align: center;
        }
      }
    }
  }
  .post-bottom-decoration{
    position: absolute;
    height: 100px;
    bottom: -1px;
    left: 0;
    overflow: hidden;
    right: 0;
    z-index: 1;
  }
}

#page-affairs{
  //background-color: #dddddd;
  width: 100%;
  padding: 10px 0;
  .affairs-group{
    padding: 50px 0;
    max-width: 1120px;
    margin: 0 auto;
    z-index: 10;
    position: relative;
    .affair-item{
      padding: 10px 25px;
      background-color: white;
      .affair-header{
        margin: 5px 0;
        .affair-icon{
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          padding: 20px;
          border: 3px;
          border-radius: 5%;
          .icon-center{
            font-size: 84px;
          }
        }
        .affair-title{
          font-size: 20px;
          text-align: center;
          line-height: 30px;
          font-weight: 600;
          font-family: Montserrat;
          margin: 15px 0;
        }
      }
      .affair-detail{
        padding: 5px 10px;
        margin-top: 5px;
        background-color: white;
        text-align: center;
        .detail-text{
          margin-bottom: 15px;
        }
      }
    }

  }
  .affair-decoration{
    height: 246px;
    position: absolute;
    bottom: -1px;
    left: 0;
    overflow: hidden;
    right: 0;
    z-index: 1;
    svg{
      width: 113%;
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      display: block;
    }
  }
}
</style>
