<template>
    <div class="component_three">

        <div class="background_rectangle" >

        </div>

        <div class="slide_content">

            <div class="slide_content_text" >

                <p>FOR SUCH A TIME</p>
                <h1>The world needs you!</h1>
                <h3>Code empowers you to create.
                
                <br>What's your <mark>purpose</mark>?
                    
                </h3>
                <button><router-link to="/">...START NOW!</router-link></button>


            </div>

            <div class="slide_content_media" >

                <img src="../../assets/img/slidePages/SlideThree.jpg" class="slide_content_media_image" alt="CodeTribe student learning to code!">

            </div>

        </div>


    </div>

</template>

<script>

    export default {
        name: "component_one",
        data(){
            return{
                snipShow: false,
            }

        },
        methods:{
            showSnip(){
                this.snipShow = true


            },
            hideSnip(){
                this.snipShow = false
            }
        }

    }
</script>

<style scoped lang="scss">

    .component_three{
        height:100vh;
        width:100vw;
        overflow:hidden;
    }
    .background_rectangle{
        background:#FF0066;
        left:10%;
    }
    .slide_content{
        & .slide_content_media{
            & .slide_content_media_image{
            }
        }
        & .slide_content_text{
            & h1{
            }
            & h2{
            }
            & h3{

            }
            & button{
                background: none;
                border: 5px solid #2AF2ED;
                color: #2AF2ED;
                overflow:visible;
                & a{
                    color: #2AF2ED;
                }
            }
            & button:hover{
            }
        }
    }


    @media only screen and (max-width: 450px) {
        .component_three{
            height:100vh;
            width:100vw;
            overflow:visible;
        }
        .background_rectangle{
            background:#FF0066;
            left:10%;
        }
        .slide_content{



            & .slide_content_media{
                & .slide_content_media_image{
                }
            }
            & .slide_content_text{
                & p {
                    }
                & h1{
                }
                & h2{
                }
                & h3{
                }
                & button{

                    & a{

                    }
                }
                & button:hover{
                }

            }

        }

    }



</style>
