<template>
    <div class="component_eight">

            <div class="background_rectangle" >

            </div>

        <div class="slide_content">
            <div class="slide_content_text" >
                <h1>Run Wild</h1>
                <h2>[with creativity.]</h2>
                <h3>
                    Change colors, shapes, direction, fonts, pages. Add features with snippets of code.
                    Publish your hand-crafted website.
                </h3>
               <router-link to="/">Learn More...</router-link>
                <button><router-link to="/"><strong>5 MIN WEB</strong></router-link></button>
            </div>
            <div class="slide_content_media" >

                <img src="../../assets/img/slidePages/SlideEight.jpg" class="slide_content_media_image" alt="Get creative with CodeTribe.">
                <p>Image from Teen Coloring Books</p>
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

    .component_eight{
        height:100vh;
        width:100vw;
        overflow:hidden;
        background-image:linear-gradient(rgba(255,255,255,0.8)), url("../../assets/img/core/layerbg4.png");
        background-size:cover;
    }
    .background_rectangle{
        background:#E01958;
        left:10%;
    }
    .slide_content{
        & .slide_content_media{

            & .slide_content_media_image{
                width:100%;
            }
        }
        & .slide_content_text{
            & h1{
                & span{
                }
            }
            & h2{
            }
            & h5{
            }
            & a{
                width:100%;
                height:auto;
                font-size: 1.3vw;
                text-align: left;
                color:#2AF2ED;
                transition:.2s;
                text-decoration: none;
            }
            & button{
                margin-top:4vh;
                border:4px solid #2AF2ED;
                background:rgba(0,0,0,0);
                width:20vw;
                height:9vh;


                & a{
                    text-align: left;
                    font-size:1.5vw;
                    color:#2AF2ED;
                    transition:.2s;
                }

            }
            & button:hover{
                transform: scale(1.05);
                transition:.2s;
            }
        }
    }
    @media only screen and (max-width: 450px) {
        .component_eight {
            height: 130vh;
            width: 100vw;
            overflow: hidden;
        }
        .background_rectangle{
            background:#E01958;
            left:4%;
        }
        .slide_content{

            & .slide_content_media{

                & .slide_content_media_image{
                }
            }
            & .slide_content_text{
                margin-top:4vh;
                & h1{
                    & span{
                    }
                }
                & h2{
                }
                & h5{
                }
                & a{
                    font-size:5.5vw;
                    width:90%;
                }
                & button{
                    width:80%;
                    & a{
                        font-size: 4vw;
                    }
                }
                & button:hover{
                }
                & p{
                }
            }

        }

    }

</style>
