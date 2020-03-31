<template>
  <b-container fluid>
    <b-row>
      <b-col md="1">
        <img class="hero" src="~@/assets/hero_footer.png" />
      </b-col>
      <b-col md="2">
        <img class="logo" src="~@/assets/logo_bottom.png" />
      </b-col>
      <b-col md="9">
        <b-row>
          <b-col md="8">
            <img class="img_col_discord" src="~@/assets/discord_icon.png" />
            <img class="img_col_1" src="~@/assets/whatsapp_group_icon.png" />
            <img class="img_col_1" src="~@/assets/face_group_icon.png" />
            <img class="img_col_1" src="~@/assets/facebook_icon.png" />
            <img class="img_col_1" src="~@/assets/instagram_icon.png" />
            <img class="img_col_1" src="~@/assets/twitter_icon.png" />
            <img class="img_col_1" src="~@/assets/youtube_icon.png" />
          </b-col>
          <b-col md="4" class="row">
            <b-input class="input" type="email" placeholder="Cadastre-se para novidades"/>
            <div class="btn"><p>CADASTRAR</p></div>
            <p class="email">E-mail</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <img class="img_col_2" src="~@/assets/contact_icon.png" />
            <p class="contact">(48) 99761-0592</p>
          </b-col>
          <b-col md="3">
            <img class="img_col_2" src="~@/assets/mail_icon.png" />
            <p class="contact">maicon_goetten@hotmail.com</p>
          </b-col>
          <b-col md="4">
            <img class="img_col_2" src="~@/assets/home_icon.png" />
            <p class="contact_end">
              Av. das Lagostas, 5
              <br />Jurerê Internacional, Florianópolis - SC
            </p>
          </b-col>
          <b-col md="2">
            <img class="img_col_logo" src="~@/assets/copyRights_icon.png" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>
<style scoped>
.hero {
  float: left;
  width: 350px;
  margin-left: -200px;
  margin-top: -130px;
}
.logo {
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 50px;
}
.img_col_discord {
  width: 80px;
  float: left;
  margin-left: 20px;
  margin-top: 4px;
}
.img_col_1 {
  width: 35px;
  margin-left: 15px;
  float: left;
  margin-top: 3px;
}
.img_col_2 {
  width: 35px;
  margin-top: 35px;
  float: left;
  margin-left: 10px;
}
.input {
  width: 200px;
  height: 25px;
  font-size: 12px;
  margin-left: -150px;
  margin-top: 8px;
}
.btn {
  background-color: #464646;
  height: 25px;
  width: 80px;
  margin-top: 8px;
  color: #e2dddd;
  font-size: 10px;
}
.btn p{
  margin-top: -2px;
  margin-left: -4px;
}
.email {
  font-size: 12px;
  color: hsl(0, 1%, 57%);
  float: left;
  margin-left: -60px;
  margin-top: 33px;
  position: absolute;
}
.contact {
  float: left;
  font-size: 10px;
  height: 35px;
  margin-top: 45px;
  margin-left: 5px;
  color: rgb(182, 184, 187);
}
.contact_end {
  float: left;
  font-size: 10px;
  height: 35px;
  margin-top: 36px;
  margin-left: 5px;
  color: rgb(182, 184, 187);
  text-align: start;
}
.img_col_logo {
  width: 100px;
  float: left;
  margin-left: -30px;
  margin-top: 30px;
}
.footer {
  height: 200px !important;
  width: 100%;
}
</style>
