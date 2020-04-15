<template>
  <div class="layout">
    <navv/>
    <slot/>
    <ft id="desktopFooter"/>
    <mobile_footer id="mobile_footer"/>
  </div>
</template>
<static-query>
  query {
  metadata {
  siteName
  }
  }
</static-query>
<script>
  import navv from "~/components/navigation/generic_visitor_nav"
  import ft from "~/components/navigation/ft"
  import mobile_footer from "~/components/navigation/mobile_footer"
  export default {
    name: "eader",
    components:{
      navv,
      ft,
      mobile_footer
    }
  }

</script>
<style>
  body {
    margin:0;
    width:100vw;
    padding:0;
  }

  .layout {

  }

  #mobile_footer{
    display:none;
  }
  #desktopFooter{
    display:flex;
  }



  @media only screen and (max-width: 450px) {
    #mobile_footer{
      display:flex;
    }
    #desktopFooter{
      display:none !important;
    }

  }

</style>
