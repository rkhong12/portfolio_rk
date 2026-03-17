<template>
  <section class="about">
    <div class="sec_inner">
      <div class="tit">
        <h2 class="typo_txt"></h2>
      </div>
      <div class="profile_wrap">
        <div class="profile_img">
          <img src="@/assets/images/imogi.png" alt="user's image" />
        </div>
        <div class="profile_txt">
          <p>
            <i class="fas fa-chalkboard-teacher"></i>
            웹 표준·접근성을 기반으로 HTML·CSS 중심의 안정적인 퍼블리싱 경험을
            쌓아왔습니다.
          </p>

          <p>
            <i class="fas fa-laugh-beam"></i>
            화면을 컴포넌트 단위로 구조화해 일관성과 유지보수성을 높이는 방식을
            지향합니다.
          </p>

          <p>
            <i class="fas fa-shopping-cart"></i>
            아모레퍼시픽·나이키·바닐라코 등 대형 이커머스와 금융권·자사 솔루션
            등 다양한 웹 구축 프로젝트를 경험했습니다.
          </p>

          <p>
            <i class="fas fa-mobile-alt"></i>
            Vue 기반 모바일 쇼핑몰 신규 제작에도 참여하며 Vue 환경의 UI 개발
            경험을 보유하고 있습니다.
          </p>

          <p>
            <i class="fas fa-piggy-bank"></i>
            이후 카카오톡 웹뷰, Veeva CLM, 제약 분야 웹 페이지 등 다양한 디지털
            콘텐츠 퍼블리싱을 수행했습니다.
          </p>

          <p>
            <i class="fas fa-layer-group"></i>
            팀 내 공통 소스 신규 구축 경험이 있으며, Vue 스터디를 통해 관리자
            화면 UI 개발까지 직접 진행했습니다.
          </p>

          <p>
            <i class="fas fa-graduation-cap"></i>
            <span>
              프론트엔드 역량 강화를 위해 회사를 떠나 6개월간 React·Java 기반
              국비 과정을 이수했으며,<br />
              <strong>과정 전체 1등으로 수료</strong>했습니다.
            </span>
          </p>

          <div class="btn_wrap">
            <a
              href="https://jungle-skateboard-a25.notion.site/75e61e8ffc3d4b42bb2b21a29190d3d8"
              target="_blank"
              class="btn_txt type4"
              ><span>경력기술서 보기 ></span></a
            >
          </div>
        </div>
      </div>

      <div class="info_wrap">
        <div class="info_items">
          <p>CAREER</p>
          <dl>
            <dt>2022. 07 ~ 2025. 05 <span>2년 11개월</span></dt>
            <dd><em>이노부스트</em> IT팀</dd>
            <dt>2021. 09 ~ 2022. 06 <span>10개월</span></dt>
            <dd><em>블랙홀릭</em> R&D</dd>
            <dt>2020. 12 ~ 2021. 08 <span>9개월 </span></dt>
            <dd><em>소리자바</em> 인공지능R&D</dd>
            <dt>2016. 01 ~ 2020. 03 <span>4년 3개월</span></dt>
            <dd><em>아이뱅크(디지털웍스)</em> 디지털개발사업부</dd>
          </dl>
        </div>
        <div class="info_items">
          <p>EDUCATION</p>
          <dl>
            <dt>2025. 05 ~ 2025. 11</dt>
            <dd>
              <em>미래를 디자인하는 UI/UX 스마트콘텐츠 응용 개발 과정A</em>
              코리아IT 신촌점
              <span class="dis_b"
                >교육과정 종합 1등 수료(전체 1위)를 통해<br />
                기술 학습 능력과 프로젝트 성과를 검증 받음
              </span>
            </dd>
            <dt>2019. 06 ~ 2019. 07</dt>
            <dd>
              <em>프론트앤드 개발자 과정 </em>오라클자바교육학원
              <span class="dis_b"
                >React.js, Angular.js, Vue.js 기초적인 이론 수업</span
              >
            </dd>
            <dt>2015. 07 ~ 2015. 12</dt>
            <dd><em>UX/UI기반 웹퍼블리셔 </em>한국디지털기업협회</dd>
            <dt>2012. 03 ~ 2016. 02</dt>
            <dd><em>안동대학교 </em>멀티미디어공학</dd>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data: function () {
    return {
      typoTxt: "안녕하세요. 홍려경입니다 :)",
      index: 0,
    };
  },
  mounted: function () {
    this.typo();
  },
  methods: {
    typo: function () {
      setInterval(this.typing, 200);
    },
    sleep: function (delay) {
      let start = new Date().getTime();
      while (new Date().getTime() < start + delay);
    },
    typing: function () {
      let text = document.querySelector(".typo_txt");
      text.textContent += this.typoTxt[this.index++];
      if (this.index > this.typoTxt.length) {
        text.textContent = "";
        this.index = 0;
        this.sleep(3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sec_inner {
  text-align: center;
}
.profile_wrap {
  margin-top: 50px;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
}
.profile_img {
  width: 25%;
}
.tit {
  text-align: center;
}
.typo_txt {
  display: inline;
  border-right: 0.2em solid #222;
  animation: cursor 0.3s ease infinite;
}
.dis_b {
  font-size: 12px;
  line-height: 16px;
  color: #666565;
}
@keyframes cursor {
  0% {
    border-right: 1px solid #fff;
  }
  50% {
    border-right: 1px solid #222;
  }
  100% {
    border-right: 1px solid #fff;
  }
}
.info_items {
  margin: 1% 0;
  padding: 3%;
  flex-basis: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: RGB(13 13 13 / 15%) 0px 1px 5px;
}
.info_items p {
  font-size: 20px;
  font-weight: 600;
}
.profile_txt {
  text-align: left;
}
.profile_txt p {
  margin-top: 15px;
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.fas {
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info_wrap {
  margin-top: 5%;
  padding: 0 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.info_wrap dl {
  margin-top: 10px;
}
.info_wrap dt {
  color: #a1a1a1;
  font-size: 14px;
}
.info_wrap dt span {
  color: #282828;
  font-weight: 500;
}
.info_wrap dt:not(:first-child) {
  margin-top: 8px;
}
.info_wrap dd {
  color: #333;
  font-size: 14px;
}
.info_wrap dd em {
  font-weight: bold;
  font-size: 16px;
}
.btn_wrap {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.btn_txt {
  display: inline-block;
  position: relative;
  margin-right: 5px;
  text-align: center;
  vertical-align: middle;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: #a1a1a1;
  font-weight: bold;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
}
.btn_txt:after {
  background: #a1a1a1;
}
.btn_txt + .btn_txt {
  margin-left: 20px;
}
@media (max-width: 640px) {
  .profile_wrap {
    margin-top: 0;
  }
  .info_wrap {
    margin-top: 10%;
  }
  .info_wrap .info_items {
    padding: 7% 2%;
  }
  .info_items:not(:first-child) {
    margin-top: 5%;
  }
  .profile_img {
    display: none;
  }
  .profile_txt {
    margin-top: 50px;
  }
  .profile_wrap > p {
    width: 100%;
  }
  .info_wrap dt,
  .info_wrap dd {
    font-size: 12px;
  }
  .info_wrap dd em {
    font-size: 14px;
  }
}
@media all and (min-width: 1280px) {
  .profile_txt p {
    font-size: 16px;
  }
  .info_wrap {
    flex-wrap: nowrap;
  }
  .info_wrap .info_items {
    margin: 0;
    flex-basis: 49%;
  }
  .btn_txt {
    font-size: 18px;
    line-height: 24px;
  }
  .btn_txt:hover {
    color: #222;
  }
  .btn_txt:after {
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 1px;
    background: #000;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
    transition: -webkit-transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
    transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
  .btn_txt:hover:after {
    background: #222;
  }
  .btn_txt.type4:hover:after {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}
</style>
