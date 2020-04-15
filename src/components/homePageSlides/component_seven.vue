<template>
    <div class="component_seven">

            <div class="background_rectangle" >

            </div>

        <div class="slide_content">

                <div class="slide_content_text" >

                    <h1>Build your Tribe.</h1>
                    <h3>
                        1.Text your Besties.
                        <br>
                        <span>Invite at least 2, so that it’s the minimum size (3). </span>
                        <br>
                        2. Build websites.
                        <br>
                        <span>Check each other’s work.</span>
                        <br>
                        3. Share it & grow your Tribe.
                        <br>
                        <span>Become an Elite Tribe by training 5 new members.</span>
                        <br>
                        4. Organize cool events.
                        <br>
                        <span>Have fun together at coding parties or home-hackathons.</span>
                        <br>

                    </h3>


                </div>

                <div class="slide_content_media" >

                    <img src="../../assets/img/slidePages/slideSeven.jpg" class="slide_content_media_image" alt="A CodeTribe student hard at work!">
                    <div class="customBorder">
                        <div class="customBorder_left"></div>
                        <div class="customBorder_right"></div>
                    </div>
                </div>
            <div class="slide_content_navigationBar">
                <button><router-link to="/">Learn more about Tribes!</router-link></button>

                <button><router-link to="/"><strong>Invite Besties</strong></router-link></button>
                <button><router-link to="/"><strong>Start Coding</strong></router-link></button>
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
    .component_seven{
        height:110vh;
        width:100vw;
        overflow:visible;
    }
    .background_rectangle{
        background:#2AF2ED;
        left:10%;
         }
    .slide_content{

        flex-wrap:wrap;
        & .slide_content_media{
            display:flex;
            flex-direction:column;

            & .slide_content_media_image{
                width:90%;
            }
            & .customBorder{
                width:90%;
                height:2vh;
                background:blue;
                display:flex;

                & .customBorder_left{
                    width:70%;
                    background:red;
                    height:100%;
                }
                & .customBorder_right{
                    width:30%;
                    background:yellow;
                    height:100%;
                }
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
              font-size:1.8vw;
                & span{
                    line-height:2vw;
                    font-size:1.1vw;
                }
            }
            & p{
            }
        }
        & .slide_content_navigationBar {

            button:nth-child(1){
                background:none;
                border:none;

                & a{
                    color:#ff0066;
                }

            }
            button:nth-child(2){
                background:none;
                border:4px solid #ff0066;
                & a{
                    color:#ff0066;
                }

            }
            button:nth-child(3){
                background:none;
                border:4px solid #2AF2ED;

                & a{
                    color:#2AF2ED;
                }

            }
        }

    }
    @media only screen and (max-width: 450px) {
        .component_seven{
            height:150vh;
        }
        .background_rectangle{
        background:#2AF2ED;
            left:10%;
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
                    font-size:6vw !important;
                    & span{
                        font-size:4vw !important;

                    }
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
            & .slide_content_navigationBar{
                margin:0 auto;
                order:3;
                width:100%;
                flex-wrap: wrap;
                & button {
                    width:40%;
                    & a {
                    }
                }
                & button:nth-child(2), button:nth-child(3){
                    & a{
                        text-decoration: none;
                    }
                }
                & button:nth-child(1){
                    order:3;
                    width:100%;
                    margin-top:3vh;
                    & a{
                    }
                }
                & button:nth-child(2){
                    width:48%;
                    order:1;
                    & a{
                    }
                }
                & button:nth-child(3){
                    width:48%;
                    order:2;
                    & a{
                    }
                }
                & button:hover{
                }
            }
        }
    }



</style>
