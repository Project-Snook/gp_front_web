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
          <b-col md="12">
            <img class="img_col_discord" src="~@/assets/discord_icon.png" />
            <img class="img_col_1" src="~@/assets/whatsapp_group_icon.png" />
            <img class="img_col_1" src="~@/assets/face_group_icon.png" />
            <img class="img_col_1" src="~@/assets/facebook_icon.png" />
            <img class="img_col_1" src="~@/assets/instagram_icon.png" />
            <img class="img_col_1" src="~@/assets/twitter_icon.png" />
            <img class="img_col_1" src="~@/assets/youtube_icon.png" />
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
.footer {
  height: 200px !important;
  width: 100%;
}
</style>
