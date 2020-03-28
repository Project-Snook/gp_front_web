<template>
  <b-row>
    <b-col class="toolbar" md="12">
      <b-row>
        <b-col cols="9">
          <b-row>
            <b-col md="1" ><div class="light-on"></div></b-col>
            <b-col md="1" class="title">SNOOK</b-col>
            <b-col md="3" class="sub-title">Dota 2 COACH</b-col>
            <b-row class="primaryLinks">
              <b-col md="2" class="bio">BIO</b-col>
              <b-col md="4" class="menu-btn">DEPOIMENTOS</b-col>
              <b-col md="6" class="menu-btn">ULTIMOS ARTIGOS</b-col>
            </b-row>
          </b-row>
        </b-col>
        <b-col cols="3">
          <b-row>
            <div class="btn-nav">
              LOGIN
              <img class="icon-nav-login" src="@/assets/user.png" />
            </div>
            <div class="btn-nav">
              <img class="icon-nav-car" src="@/assets/car.png" />
              (0)
            </div>
            <div class="icon-btn">
              <img class="icon-nav" src="~@/assets/messengerIcon.png"/>
            </div>
            <div class="icon-btn">
              <img class="icon-nav" src="~@/assets/whatsappIcon.png"/>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<style lang="scss">
@font-face {
  font-family: "FONT_EMUSE";
  src: url("~@/assets/fonts/E-Muse-Bold.otf");
}
@font-face {
  font-family: "FONT_REGULAR";
  src: url("~@/assets/fonts/JosefinSans-Regular.ttf");
}
@font-face {
  font-family: "FONT_THIN";
  src: url("~@/assets/fonts/JosefinSans-Thin.ttf");
}
.toolbar {
  background-color: #214a47;
  border-bottom: 1px solid #0c2320;
  border-top: 1px solid #3b7a72;
  box-shadow: 0px 5px 10px #0c2320;
  height: 40px;
}
.title {
  font-size: 33px;
  font-weight: bold;
  color: aliceblue;
  margin-left: -3.5%;
  margin-top: -0.5%;
  font-family: 'FONT_EMUSE';
}
.sub-title {
  font-size: 25px;
  color: aliceblue;
  margin-left: 5%;
  margin-top: 0.3%;
  font-family: 'FONT_REGULAR';
}
.light-on {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #20d31d;
  margin-top: 15px;
  margin-left: 35px;
  box-shadow: 1px 2px 4px #0c2320;
}
.bio {
  font-size: 25px;
  color: #c1c1c1;
  font-family: 'FONT_THIN';
}
.primaryLinks {
    cursor: url('http://cur.cursors-4u.net/games/gam-4/gam372.cur'), auto !important;
    margin-top:0.4%
}
.menu-btn {
  font-size: 15px;
  margin-top:2%;
  color: #c2c2c2;
  font-family: 'FONT_THIN';
}
.btn-nav {
  background-color: #1c3f3b;
  height: 38px;
  width: 80px;
  margin-top: 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-left: 0.5px solid #0c2320;
  border-top: 1px solid #3b7a72;
  border-right: 0.5px solid #3b7a72;
  color: #c1c1c1;
  font-size: 15px;
  padding-top: 6px;
  cursor: url('http://cur.cursors-4u.net/games/gam-4/gam372.cur'), auto !important;
}
.btn-nav:hover {
  border-left: 1px solid #3b7a72;
  border-bottom: 1px solid #3b7a72;
  border-top: 1px solid #0c2320;
  border-right: 1px solid #0c2320;
  color:white
}
.icon-btn {
  margin-top: 0.8%;
  margin-left: 5%;
}
.icon-nav-login {
  width: 20px;
  margin-top: -3px;
}
.icon-nav-car {
  width: 25px;
}
.icon-nav {
  width: 30px;
}
</style>
