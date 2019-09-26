<template>
  <div class="contain">
    <nav>
      <span @click="jump"> </span>
      <div class="middle-title">演出详情</div>
    </nav>
    <header
      style="background-image: url(' https://img.piaoniu.com/poster/ea0ac895d62d9f1bd6d2e958ff4d7060eb7ab844.jpg?imageView2/2/w/240/h/240')"
    >
      <div class="cover"></div>
      <div class="header-main">
        <div class="poster">
          <img
            src="https://img.piaoniu.com/poster/ea0ac895d62d9f1bd6d2e958ff4d7060eb7ab844.jpg?imageView2/2/w/240/h/240"
            alt
          />
        </div>
        <div class="top">
          <div class="title">陕西大剧院首度全球联合制作 威尔第歌剧《弄臣》</div>
          <div class="stars-score" @click="jumpstars">
            <span>10.0</span>
            <span>
              <img src="http://dn-piaoniu-static.qbox.me/pc/ui/img/star-full.04f7ab77.png" alt />
              <img src="http://dn-piaoniu-static.qbox.me/pc/ui/img/star-full.04f7ab77.png" alt />
              <img src="http://dn-piaoniu-static.qbox.me/pc/ui/img/star-full.04f7ab77.png" alt />
              <img src="http://dn-piaoniu-static.qbox.me/pc/ui/img/star-full.04f7ab77.png" alt />
              <img src="http://dn-piaoniu-static.qbox.me/pc/ui/img/star-full.04f7ab77.png" alt />
            </span>
          </div>
          <div class="right">
            <div class="price-info">
              <span>239</span> 元起
            </div>
            <div class="buy-num">已有206人购买</div>
          </div>
        </div>
      </div>
      <div class="concern-comment">
        <div class="concern" @click="jumpwatch">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAAppJREFUSA3Nlk2IjWEUx+/MhGTufNgo2WjKisQCU7KYBQtZ+EjKjIRiNFMTC5nNLFgMiVIWiiUTKzaUnVIsLCQuG4kFWfgsM2S4fv/XOa97n3mfe++Md8qp333Ocz7+5973vl+FQmDlcnkFnIUn8Am+wlM4A4uC8nRLrgtOwWNQ3xcowXlYmRaGDskWkPgkxOwziYGM3mPEv8WaiP+Ec9BS1UugCcbA7TJON7RBJ6yHKyAB2QkXwB9NIn8+rrNsgcXQCmvgIrhdw2ny3gKbAcvo8OxME4FDbhtMWO0e1q3mf2ftDcrTLbntoKMlG0wSOEXwYF9aHXGo3Qeyj/Am8TIOf9hOXa/ValZRv7bfAg9Z/x6GsLNiT13l33KnIhV1pQ2aITuswTcSl18S7QoS1M+DgzAI7UE6uqXWj9ZNDX4NsnXRjpwSmpFMYqYG+8nSkZN+VIZZHTZ4opmqcassRjvyS7SaVDK4ZJvu/PSjSmstU9KhHrKffz9anlOCOXdt1lEN1t3pgwU25zRjigz6PTZD13FnUoBzxII6w3M/ydBcAC9sxnD6rQjoAfHAErquG7qRpAJ1HPSumvYj1jlV5QSWwFsrGK1K/sMGveOm+Z61K1OKhC5wf7yNZBZNI4jWfpD9gJ6arRTshl8gm/FwevvAH6P9NYd6koa9FU3THk7vIfAvP+S6Da006jE2CbJLMLdeIzXNcBrcpryt1NNI8nTvAL+X38Ov9c7VTv4WyPSfHmhoSKwIAZ1w70Cm63x1WEtsGTwHmW4QG8OaGe0RWgp665SNwy4Xwt8EehuRvYTlnstlRVB3nzFwu4BzEvzMvY2/MJdhWSKI661DL3duGjwCesTOrjFkFTyDV7BhdqcF6gycD21B+P/f/gatkZ1laeTSrAAAAABJRU5ErkJggg=="
            alt
          />
          <span>想看</span>
        </div>
        <div class="comment" @click="jumpcomment">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAWBJREFUSA3tlr1OAkEUhcHAAygkavhp6Qy1vQUvxwOQWKKJD2DNE0AUCimsiFsYY2iM5fidZTbhL+wgXCCBk3yZmZ2798wdZslkMsg5V4ZHiMBKyi2PsjyzvvNC/0IPdqBvPG5UbRukZ4hXY2Gu3N6DxrVl/KEeqlgYTueUR+yEp7baaTKLpoOs+onfmZVBWt6TcdoObW3+8Laa09eAkacxX+qm8/qOYy1JLNNEo23NJwn3ttWrKjbZ6qTi0z/X/BkyG+/tcB2ncaQfkmO+k4uAPzSRtrrjBy3MLa8+KqzlvTqqtARfEKImQUtvKjxXnveAJPIqxQugo4vYA4Rcb++JmzmUjC/hDVZJdzt5TEx96akNL9zBD0hPkNdLtAXog9SD89Rk6waQ9BbGIOk6fA1dDdAAiuvmDI4neR0+QfqdNG5IexWc5L+BmNRAZtIrmH0NC2vELAdVmDloC4GH9uAPVr2hcd5RxioAAAAASUVORK5CYII="
            alt
          />
          <span>评论</span>
        </div>
      </div>
    </header>
    <div class="header-bottom">
      <div class="time-range">2019.09.25 - 09.29</div>
      <div class="venue">
        <div class="inner">
          <div class="name">陕西大剧院 歌剧厅</div>
        </div>
        <div class="icon">
          <img
            src="https://static.piaoniu.com/nuxt-static/img/icon-park2.c5fced0.png"
            alt
            style="width:20px;height:24px;"
          />
        </div>
      </div>
      <div class="ticket-info">
        <div class="text">购票须知</div>
        <div class="arr-right" style="color:#ccc;">></div>
      </div>
      <div class="service-info">
        <div class="text">平台保障</div>
        <div class="service-item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACnElEQVRIS72W0UsUURTGv3N3dnsLTactKSTSkAyjqJmIiKDHoCgQKowIctdapR5868U/wIdCzV0NhJLoKSmo6C16kFyjJcsSEkKRoJ1tfYmondl7YmabZdZ2dRay+3rPfL97vnvuOUNYZX3TL2/LQ5wiiBPM3AZGvRNOyBDRDEM+CUA+qpu6s1RJhsptGPu6GxCy+sB8iQGFgQ8A3oL4ixPP1ABgLwG7CbBANIac0qemBgv7nvUXwDjQeZIFjQMUJOIhNpX45je358sdJL3/ahMFrS5migFskuQO9fXo44qAjBbtkYybIEoGlcDZ2smhhdUsdPeWD8caTSv/AMyaIFyvTyYG3L1iBs7JSUyA8FDNhjpofuCXH3E3hpt6NhibcuNgnCGWp91MHIDtOQdzc4CYVbPBY9WKl0LMF4BsJTPUYt9JAaB3jTDzhaCptNSm/NlSKbuCXdYcEd1Tp+IRsktRcuAziG+pUyO91djiFBTaA4ZeczH0Q5moeTe8XDhwpB9M1wTld1Baj8TANAgr0FypWipBbfGMVneXIc8x85Hw9OikHWtXF5T8JxB3U1qLPiNgu5pM7Knm9F5xIUSs/lV82Pu9oUXfg2jRBiwx8DKcTJz3C1hL3Nb5qkXvE3CU0gejP1nwYNjjv6F17mKIG3kz17s1NWZ4wX7EHYAe6SdJ3WUBaT3aDMY0CIv5XO64C/ErXgqoYFHmUEyX0nruQrakvmfdCy3n+Up7ixYZetdTydwYTiZaVwZ5IWD6CMh2P+J/7mBWEC2sWaZFCHijX/GSMvXz0LL6lTaTeWc4GZ/wU2klD62kVShKi98O6rtV/Jdm50DWs1276a7rwHEh6zoyi5AVQ5+AWQnMeIe+ANoYaK166Hur41/8tvwG+pnapsUnZS8AAAAASUVORK5CYII="
            alt
          />
          <span></span>
          <span>无票赔付</span>
        </div>
        <div class="service-item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACnElEQVRIS72W0UsUURTGv3N3dnsLTactKSTSkAyjqJmIiKDHoCgQKowIctdapR5868U/wIdCzV0NhJLoKSmo6C16kFyjJcsSEkKRoJ1tfYmondl7YmabZdZ2dRay+3rPfL97vnvuOUNYZX3TL2/LQ5wiiBPM3AZGvRNOyBDRDEM+CUA+qpu6s1RJhsptGPu6GxCy+sB8iQGFgQ8A3oL4ixPP1ABgLwG7CbBANIac0qemBgv7nvUXwDjQeZIFjQMUJOIhNpX45je358sdJL3/ahMFrS5migFskuQO9fXo44qAjBbtkYybIEoGlcDZ2smhhdUsdPeWD8caTSv/AMyaIFyvTyYG3L1iBs7JSUyA8FDNhjpofuCXH3E3hpt6NhibcuNgnCGWp91MHIDtOQdzc4CYVbPBY9WKl0LMF4BsJTPUYt9JAaB3jTDzhaCptNSm/NlSKbuCXdYcEd1Tp+IRsktRcuAziG+pUyO91djiFBTaA4ZeczH0Q5moeTe8XDhwpB9M1wTld1Baj8TANAgr0FypWipBbfGMVneXIc8x85Hw9OikHWtXF5T8JxB3U1qLPiNgu5pM7Knm9F5xIUSs/lV82Pu9oUXfg2jRBiwx8DKcTJz3C1hL3Nb5qkXvE3CU0gejP1nwYNjjv6F17mKIG3kz17s1NWZ4wX7EHYAe6SdJ3WUBaT3aDMY0CIv5XO64C/ErXgqoYFHmUEyX0nruQrakvmfdCy3n+Up7ixYZetdTydwYTiZaVwZ5IWD6CMh2P+J/7mBWEC2sWaZFCHijX/GSMvXz0LL6lTaTeWc4GZ/wU2klD62kVShKi98O6rtV/Jdm50DWs1276a7rwHEh6zoyi5AVQ5+AWQnMeIe+ANoYaK166Hur41/8tvwG+pnapsUnZS8AAAAASUVORK5CYII="
            alt
          />
          <span></span>
          <span>出票保真</span>
        </div>
        <div class="service-item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACnElEQVRIS72W0UsUURTGv3N3dnsLTactKSTSkAyjqJmIiKDHoCgQKowIctdapR5868U/wIdCzV0NhJLoKSmo6C16kFyjJcsSEkKRoJ1tfYmondl7YmabZdZ2dRay+3rPfL97vnvuOUNYZX3TL2/LQ5wiiBPM3AZGvRNOyBDRDEM+CUA+qpu6s1RJhsptGPu6GxCy+sB8iQGFgQ8A3oL4ixPP1ABgLwG7CbBANIac0qemBgv7nvUXwDjQeZIFjQMUJOIhNpX45je358sdJL3/ahMFrS5migFskuQO9fXo44qAjBbtkYybIEoGlcDZ2smhhdUsdPeWD8caTSv/AMyaIFyvTyYG3L1iBs7JSUyA8FDNhjpofuCXH3E3hpt6NhibcuNgnCGWp91MHIDtOQdzc4CYVbPBY9WKl0LMF4BsJTPUYt9JAaB3jTDzhaCptNSm/NlSKbuCXdYcEd1Tp+IRsktRcuAziG+pUyO91djiFBTaA4ZeczH0Q5moeTe8XDhwpB9M1wTld1Baj8TANAgr0FypWipBbfGMVneXIc8x85Hw9OikHWtXF5T8JxB3U1qLPiNgu5pM7Knm9F5xIUSs/lV82Pu9oUXfg2jRBiwx8DKcTJz3C1hL3Nb5qkXvE3CU0gejP1nwYNjjv6F17mKIG3kz17s1NWZ4wX7EHYAe6SdJ3WUBaT3aDMY0CIv5XO64C/ErXgqoYFHmUEyX0nruQrakvmfdCy3n+Up7ixYZetdTydwYTiZaVwZ5IWD6CMh2P+J/7mBWEC2sWaZFCHijX/GSMvXz0LL6lTaTeWc4GZ/wU2klD62kVShKi98O6rtV/Jdm50DWs1276a7rwHEh6zoyi5AVQ5+AWQnMeIe+ANoYaK166Hur41/8tvwG+pnapsUnZS8AAAAASUVORK5CYII="
            alt
          />
          <span></span>
          <span>配送保障</span>
        </div>
        <div class="service-icon" style="color:#ccc">></div>
      </div>
    </div>
    <div style="background:#ccc;width:100%;height:10px;"></div>
    <div class="section">
      <div class="section-title">
        演出简介
      </div>
      <div class="content">
        <div :class="flag?'innee':'inner'" >
          <div class="cont">
            <p style="letter-spacing: 1px; margin: 0em 0.5em; text-align: justify; line-height: 1.75em;">
              <img src="https://img.piaoniu.com/content/92d0880f24ab7e3aeb636ddbe9f203e195e8af6c.jpg" alt="" style="width: 345px !important; height: 536.55px !important;">
            </p>
          </div>
          <p>12321312321312741741278418412786123816381236127361827363816317831283182316382367826481467818417412841283`127831283812361278312312481264781284218414184182831231231284184218421841248214128421842183812128678</p>
        </div>
        <div :class="flag?'morr':'more'" @click="flag=!flag">
          <div class="shadow"></div>
          <div class="text">
            展开更多 <img src="https://static.piaoniu.com/nuxt-static/img/blueArrowDown.9e945aa.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div style="background:#ccc;width:100%;height:10px;"></div>
    <div class="detail-comment-container section">
      <div class="detail-comment-header section-title">
        <div class="text">所有评论(1)</div>
        <div class="show-all-comment" >全部评论 1条</div>
      </div>
    </div>
    <div style="background:#ccc;width:100%;height:10px;"></div>

    <div class="related-activity section">
      <div class="section-title">相关演出</div>
      <div class="content" v-for="(item, index) in array.vocal" :key="index">
        <li class="activity">
          <div class="main-top">
            <div class="poster-left">
              <img :src="item.showPic" alt="">
            </div>
            <div class="poster-right">
              <div class="title-line"> 
                <div class="title">{{item.showName}}</div>
                <div class="time-address">
                  <span class="time">{{item.startTime}}</span><span>|</span><span class="address">{{item.place.placeName}}</span>
                </div>
                <div class="np-rank">暂无评分</div>
                <div class="price-wrap">
                  <div>
                    <span class="price">{{item.fares}}</span>
                    <span class="qi">元起</span>
                  </div>
                </div>
                <div class="promotion-info">
                  <div class="light-spot">“一曲风靡全球金曲“阿根廷，别为我哭泣””</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
    <div class="hd">
      票牛服务保障
    </div>
    <div class="foot">
      <div class="foot-item">
        <img src="https://static.piaoniu.com/nuxt-static/img/icon-zhenpiao2.6bf8fbd.png" alt="" class="icon1">
        <span class="text">无票赔付</span>
      </div>
      <div class="foot-item">
        <img src="https://static.piaoniu.com/nuxt-static/img/icon-danbao2.2e56eee.png" alt="" class="icon1">
        <span class="text">出票保真</span>
      </div>
      <div class="foot-item">
        <img src="https://static.piaoniu.com/nuxt-static/img/icon-youpiao2.0df1e5e.png" alt="" class="icon1">
        <span class="text">配送保障</span>
      </div>
    </div>
    <div class="help">
      <div class="service">
        <div class="icon">

        </div>
        <div class="text">
          客服
        </div>
      </div>
      <div class="btn">
        直接购票
      </div>
    </div>
    <div style="height:300px;"></div>

    
  </div>
</template>

<script>
import "../../styles/details.css";
import ajax from "../../api/api-home"
export default {
  data() {
    return {
      flag:false,
      array:[]
    };
  },
  created() {
    console.log(this.$route.params);
    // ajax.Details({ cityId: "1" }).then(res => {
  //     console.log(res)
  //     this.array=res,
  //     console.log(this.array)
  // })
  },
  methods: {
    jump() {
      console.log(1);
    },
    jumpcomment() {
      console.log(1);
    },
    jumpstars() {
      console.log(1);
    },
    jumpwatch() {
      console.log(1);
    }   
  }
}
</script>

<style scoped>
</style>