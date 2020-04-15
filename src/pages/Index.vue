<template>
  <Layout>

    <component_one />
    <component_two />
    <component_three />
    <component_four />
    <component_five />

    <component_option_display />
    <!-- start a tribe component missing -->
    <component_six />
    <!-- component seven missing -->
    <component_eight />
    <component_nine />
    <component_ten />
  </Layout>
</template>

<script>

  // ~ is an alias to /src
  import component_one from "~/components/homePageSlides/component_one"
  import component_two from "~/components/homePageSlides/component_two"
  import component_three from "~/components/homePageSlides/component_three"
  import component_four from "~/components/homePageSlides/component_four"
  import component_five from "~/components/homePageSlides/component_five"
  import component_six from "~/components/homePageSlides/component_six"
  import component_seven from "~/components/homePageSlides/component_seven"
  import component_eight from "~/components/homePageSlides/component_eight"
  import component_nine from "~/components/homePageSlides/component_nine"
  import component_ten from "~/components/homePageSlides/component_ten"
  import start_your_tribe from "~/components/homePageSlides/start_your_tribe"
  import component_option_display from "~/components/homePageSlides/component_option_display"
  export default {
    name: 'Home',
    metaInfo: {
      title: 'Hello, world!'
    },
    components: {
      component_one,
      component_two,
      component_three,
      component_four,
      component_option_display,
      component_five,
      component_six,
      component_seven,
      component_eight,
      component_nine,
      component_ten,
      start_your_tribe,
    },
    methods: {
    }
  }

</script>

<style>
  .home{
    width:100vw;
    background:white;

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
