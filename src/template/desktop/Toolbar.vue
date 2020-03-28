<template>
  <b-row>
    <b-col class="toolbar" md="12">
      <b-row>
        <b-col cols="9">
          <b-row>
            <div class="light-on"></div>
            <div class="title">SNOOK</div>
            <div class="sub-title">Dota 2 COACH</div>
            <div class="bio">BIO</div>
            <div class="menu-btn">DEPOIMENTOS</div>
            <div class="menu-btn">ULTIMOS ARTIGOS</div>
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
.toolbar {
  background-color: #2b5651;
  border-bottom: 1px solid #0c2320;
  border-top: 1px solid #3b7a72;
  box-shadow: 0px 5px 10px #0c2320;
  height: 40px;
}
.title {
  font-size: 33px;
  font-weight: bold;
  color: aliceblue;
  margin-left: 15px;
  margin-top: -8px;
}
.sub-title {
  font-size: 25px;
  color: aliceblue;
  margin-left: 13px;
  margin-top: -2px;
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
  margin-top: -2px;
  margin-left: 20px;
  color: #c1c1c1;
}
.menu-btn {
  font-size: 15px;
  margin-top: 7px;
  margin-left: 20px;
  color: #c2c2c2;
}
.btn-nav {
  background-color: #1c3f3b;
  height: 40px;
  width: 80px;
  margin-top: -2px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-left: 2px solid #0c2320;
  border-bottom: 2px solid #0c2320;
  border-top: 2px solid #3b7a72;
  border-right: 2px solid #3b7a72;
  color: #c1c1c1;
  font-size: 15px;
  padding-top: 6px;
}
.btn-nav:hover {
  border-left: 1px solid #3b7a72;
  border-bottom: 1px solid #3b7a72;
  border-top: 1px solid #0c2320;
  border-right: 1px solid #0c2320;
}
.icon-btn {
  margin-top: 5px;
  margin-left: 20px;
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
