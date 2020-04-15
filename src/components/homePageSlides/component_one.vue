<template>
    <div class="component_one">

            <div class="background_rectangle" >

            </div>

        <div class="slide_content">

                <div class="slide_content_text" >
                    <h1>WHOA,<span>…</span>                 
                    </h1>
                    <h1>Ready for awesome?</h1>
                    <h3>Learn to build and host <mark>websites</mark> that you can use anywhere, for anything you like.</h3>
                    <button><router-link to="/"><span class="under"> SUPER</span> <span class="ital"> FREE</span>  CODING</router-link></button>
                    <p>I'M BORED</p>

                </div>

                <div class="slide_content_media">

                    <img src="../../assets/img/slidePages/SlideOne.jpg" class="slide_content_media_image" alt="CodeTribe youth students being engaged with programming.">

                </div>

        </div>


    </div>
    
</template>

<script>

    export default {
        name: "component_one",
        data(){
            return{

            }

        },
        methods:{

        }

    }
</script>

<style scoped lang="scss">

    .component_one{
        height:100vh;
        width:100vw;
        overflow:hidden;


    }
    .background_rectangle{
        background: #2AF2ED;
    }
    .slide_content{
        & .slide_content_media{

            & .slide_content_media_image{
                transform:scale(1.1);
            }
        }

        & .slide_content_text{
            margin-top:10vh;
            width:60vw;
            overflow:visible;
            h1{
                & span{
                }
            }
            & h2{
            }
            & h3{
                & span {
                    color: red;
                }
            }
            & button{
                background: red;
                border: 5px solid #f4f40e;
                margin:0 auto;
                & a{
                    text-decoration:none;
                    color:white;
                }
            }
            & button:hover{
            }
            & p{
                text-align:center;
                margin-top:2vh;
                width: 100%;
                color: black;
            }
        }
    }


    @media only screen and (max-width: 450px) {
        .component_one{
            height:120vh;
            width:100vw;
            overflow:hidden;
        }
        .background_rectangle{
            background:#2AF2ED;
            left:12vw;
        }

        .slide_content{
            & .slide_content_media{
                & .slide_content_media_image{
                    position:relative;
                    width:80% !important;

                }
            }
            & .slide_content_text{
                margin-top:2vh;
                margin-left:2vw;
                & h1{
                   font-size:14vw;
                    & span{
                        height:100%;
                    }
                }
                & h3{
                }
                & h2{
                }
                & h5{


                }
                & p{
                    display:none;
                }
                & button{



                    & a{

                    }
                }

            }

        }

    }


</style>
