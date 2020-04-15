<template>
    <div class="component_five">

            <div class="background_rectangle" >

            </div>

        <div class="slide_content">

                <div class="slide_content_text" >
                    <p>MY FIRST PROGRAM</p>
                    <h1>Can I join the party?</h1>
                    <h3>Your friend Ashley asked you to code a website that will calculate who can come to her party.
                        <br>
                        <br>
                        Will you help her?
                        You’ve got 5 minutes…
                    </h3>
                    <button><router-link to="/">...STARTING NOW!</router-link></button>


                </div>

                <div class="slide_content_media" >

                    <img src="../../assets/img/slidePages/SlideFive.png" class="slide_content_media_image" alt="Learn to party with CodeTribe.">

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

    .component_five{
        height:100vh;
        width:100vw;
        overflow:visible;

    }
    .background_rectangle{
        background:#2AF2ED;
        left:10%;
    }
    .slide_content{
        & .slide_content_media{
            & .slide_content_media_image{
                width:120%;
            }
        }

        & .slide_content_text{
            & h1{
                & span{
                }
            }
            & h2{
            }
            & h3{
                color:black;
            }
            & button{
                background: red;
                border: 5px solid #f4f40e;
                & a{
                    color: white;
                }
            }
            & button:hover{
            }
            & p{
                color:red;
            }
        }

    }

    @media only screen and (max-width: 450px) {
        .component_five{
            height:115vh;
            width:100vw;
            overflow:visible;


        }
        .background_rectangle{
            background:#2AF2ED;
        }
        .slide_content{
            & .slide_content_media{
                & .slide_content_media_image{
                }
            }
            & .slide_content_text{
                     & h1{
                    & span{
                    }
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
                & p{
                }
            }

        }

    }



</style>
