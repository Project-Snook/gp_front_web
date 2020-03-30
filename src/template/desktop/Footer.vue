<template>
  <b-container fluid>
    <b-row>
      <b-col md="1"></b-col>
      <b-col md="2">
        <img class="logo" src="~@/assets/logo_bottom.png" />
      </b-col>
      <b-col md="9">
        <b-row>
          <b-col md="12">
            <img class="img_col_1" src="~@/assets/discord_icon.png" />
            <img class="img_col_1" src="~@/assets/whatsapp_group_icon.png" />
            <img class="img_col_1" src="~@/assets/face_group_icon.png" />
            <img class="img_col_1" src="~@/assets/facebook_icon.png" />
            <img class="img_col_1" src="~@/assets/instagram_icon.png" />
            <img class="img_col_1" src="~@/assets/twitter_icon.png" />
            <img class="img_col_1" src="~@/assets/youtube_icon.png" />
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <img class="img_col_2" src="~@/assets/contact_icon.png" />
            <img class="img_col_2" src="~@/assets/mail_icon.png" />
            <img class="img_col_2" src="~@/assets/home_icon.png" />
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
.logo{
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.img_col_1 {
  width: 35px;
  margin-left: 20px;
  float: left;
  margin-top: 3px;
}
.img_col_2 {
  width: 35px;
  margin-left: 20px;
  float: left;
  margin-top: 5px;
}
.footer {
  height: 200px !important;
  width: 100%;
}
</style>
