<template>
    <div class="component_ten">

            <div class="background_rectangle" >

            </div>

        <div class="slide_content">
            <div class="slide_content_media" >
                <img src="../../assets/img/slidePages/SlideTen.png">
                <div class="slide_content_text_bar" style="width:40%; margin:0 auto; height:2vh; background:red; margin-top:6vh;"></div>
            </div>
                <div class="slide_content_text" >
                    <p>MEMBERSHIP OPTIONS:</p>
                    <h1>How much?</h1>

                    <div class="priceTable">
                       <div class="optionLeft">
                           <div class="optionLeft_top">
                               <h4><span style="color:red;">FREE</span><br> Version</h4>
                           </div>
                           <div class="optionLeft_bottom">
                               <h4><span style="color:blue;">PREMIUM</span><br> Version</h4>
                           </div>
                       </div>
                        <div class="optionBorder"></div>
                            <div class="optionRight">
                                <div class="optionRight_top">
                                    <h4>TRIBES ONLY</h4>
                                    <p>Invite 2 friends to start your Tribe and get access.</p>
                                </div>
                                <div class="optionRight_bottom">
                                    <h4>$29.- PER MONTH</h4>
                                    <p>Includes all lessons, 3 licenses & full support.</p>
                                </div>
                            </div>
                        </div>


                    </div>


            <div class="slide_content_navigationBar">
                <button><router-link to="/"><strong>GET FREE NOW</strong></router-link></button>
                <button><router-link to="/"><strong>GO PREMIUM</strong></router-link></button>
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

    .component_ten{
        height:110vh;
        width:100vw;
        overflow:visible;
        background-image:linear-gradient(rgba(255,255,255,0.8)), url("../../assets/img/core/layerbg4.png");
        background-size:cover;

    }
    .background_rectangle{
        background:yellow;
        left:30%;
    }
    .slide_content{
        flex-wrap:wrap;
        & .slide_content_media{
            order:1;
            width:40%;
            & img{
                width:80%;
            }
            }
        & .slide_content_text{
            order:2;
            width:50%;
            & h1{
                & span{
                }
            }
            & h2{
            }
            & h3{
                & span{
                }
            }
            & p{
            }
            .priceTable{
                width:100%;
                height:40vh;
                margin-top:5vh;
                display:flex;
                justify-content:space-around;
                flex-direction: row;
                overflow:visible;

                & .optionBorder{
                    height:90%;
                    width:.2vw;
                    background:black;
                }
                h4{
                    font-size:1.8vw;
                }
                p{
                    font-size:1.4vw !important;
                }
                & div{
                    width:50%;

                    & div{
                        height:50%;
                        width:100%;
                    }

                }
                & .optionLeft{
                    text-align: center;
                    width:30%;

                }

            }
        }
        .slide_content_navigationBar{

                justify-content:flex-end;
            & button{
                & a{
                    text-decoration: none;
                }
            }
            & button:nth-child(1){
                    background:none;
                margin-right:1vw;
                border:4px solid #ff0066;
                & a{
                   color: #ff0066;
                }
            }
            & button:nth-child(2){

                background:none;
                border:4px solid blue;
                & a{
                    color: blue;
                }
            } & button:hover{

            }
        }
    }
    @media only screen and (max-width: 450px) {
        .component_ten {
            height: 120vh;
            width: 100vw;
            margin-top: -10vh;
            overflow: hidden;
        }
        .background_rectangle {
            background: yellow;
           left:6%;
        }
        .slide_content {
            & .slide_content_media {
                display:none;
                width: 100%;
                order: 1;
                right:0;

                & .slide_content_media_image {
                }
            }

            & .slide_content_text {

                & h1 {
                    & span {
                    }
                }

                & h2 {
                }

                & h3 {
                }

                & button {
                    & a {
                    }
                }

                & button:hover {
                }

                & p {
                    display: block;
                    font-size:3.5vw;
                }

                .priceTable {
                    height: 40vh;
                    width: 100%;
                    margin: 0 auto;
                    margin-top:4vh;
                    & .optionLeft{
                        & h4{
                            font-size:5vw;
                        }

                    }
                    & .optionRight{
                        width:60%;
                        & h4{
                            font-size:5vw;
                        }
                        P{
                            font-size:4vw !important;
                            display:block;
                        }
                        .optionRight_top{

                        }
                        .optionRight_bottom{

                        }
                    }

                }


        }
            & .slide_content_navigationBar {
                order: 3;
                margin-top:-3vh;
                justify-content: space-around;


                & button {

                    overflow: visible;

                    & a {

                    }
                }
                & button:nth-child(1){
                    margin-bottom:1vh;
                }
            }

        }
    }




</style>
