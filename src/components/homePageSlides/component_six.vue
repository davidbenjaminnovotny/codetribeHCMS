<template>
    <div class="component_six">

            <div class="background_rectangle" >

            </div>

        <div class="slide_content">

            <div class="slide_content_media">

                <img src="../../assets/img/slidePages/SlideSix.jpg" class="slide_content_media_image" alt="Jessica Balba, an indie musician.">
                <div class="slide_content_media_imageDesc">
                    <h3>
                        Jessica <br> Balba
                    </h3>
                    <p>My Heart is like a<br> Pumpkin</p>
                </div>


            </div>

                <div class="slide_content_text">
                    <h1>Help sell Jess' album.</h1>
                    <div class="customBorder">
                        <div class="customBorder_left"></div>
                        <div class="customBorder_right"></div>
                    </div>
                    <h3>Jess wants to release her first album, but Spotify won't allow it on the platform.<br><br>
                    She needs a launch website.<br><br>
                        Can you help her?
                    </h3>



                </div>


            <div class="slide_content_navigationBar">
                <button><router-link to="/"><strong>Start Project 1</strong></router-link></button>
                <button><router-link to="/">Build Jessica A Launch Site</router-link></button>
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

    .component_six{
        height:100vh;
        width:100vw;
        overflow:hidden;
    }
    .background_rectangle{
        background:#2AF2ED;
        left:30%;
    }
    .slide_content{
        flex-wrap:wrap;
        overflow:visible;

        & .slide_content_media{
        width:50%;
            height:80%;
            & .slide_content_media_image{
                    width:90%;
            }
            & .slide_content_media_imageDesc{
                text-align: left;
                position:relative;
                bottom:27vh;
                left:7vw;
                & h3{
                    font-size:3vw;
                    color:white;
                }
                & p{
                    color:#6AD5C7;
                    font-size:2vw;
                }
            }
        }

        & .slide_content_text{
            width:50%;
            & h1{
                & span{
                }
            }
            & h2{
            }
            & h3{
            }
            & .customBorder{
                width:100%;
                height:2vh;
                position:relative;
                left:20vw;
                background:none;
                display:flex;
                & .customBorder_left{
                    width:0%;
                    background:none;
                    height:100%;
                }
                & .customBorder_right{
                    width:60%;
                    background:darkblue;
                    height:100%;
                }
            }
        }
        & .slide_content_navigationBar{

            & button {
                & a {
                }
            }

            & button:nth-child(1){
                border:4px solid #2AF2ED;
                background:none;

                & a{
                    color:#2AF2ED;
                }
            }
            & button:nth-child(2){
                background:none;
                border:none;
                & a{
                    color:#ff0066;
                }
            }
            & button:hover{
            }
        }
    }
    @media only screen and (max-width: 450px) {
        .component_six{
            height:145vh;
            width:100vw;
            overflow:visible;
        }
        .background_rectangle{
            background:#2AF2ED;
            left:4%;
        }
        .slide_content{

            & .slide_content_media{
                width:100%;
                height:45vh;
                & .slide_content_media_image{
                    width:100%;
                }
                & .slide_content_media_imageDesc{
                    text-align: left;
                    position:relative;
                    bottom:20vh;
                    left:5vw;
                    & h3{
                        font-size:9vw;
                        color:white;
                    }
                    & p{
                        color:#6AD5C7;
                        font-size:5vw;
                    }
                }
            }
            & .customBorder{
                display:none !important;
            }
            .slide_content_navigationBar{
            margin-top:-1vh;
                button{

                }
                & button:nth-child(2){

                    & a{
                    }
                }
                & button:nth-child(1){
                    & a{
                    }
                }


            }

            & .slide_content_text{
                margin-top:5vh;
                & h1 {
                    & span {
                    }
                }
                & h2{
                }
                & h5{
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
