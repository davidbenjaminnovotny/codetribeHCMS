<template>
    <div class="component_nine">

            <div class="background_rectangle" >

            </div>

        <div class="slide_content">

                <div class="slide_content_text" >

                    <h1>How long would it take?</h1>
                    <div class="slide_content_text_bar" style=""></div>

                </div>

                <div class="slide_content_media" >
                    <div class="tg">
                        <div class="tgleft">
                            <h2>TIME:</h2>
                            <h3>5 Mins</h3>
                            <h3>+ 1 Hr 20</h3>
                            <h3>+ 2 Hr 25</h3>
                            <h3>+ 1 Hr 50</h3>
                        </div>
                        <div class="tgborder"></div>
                        <div class="tgright">
                            <h2>VIBES:</h2>
                            <h3>My First <strong>Program</strong> | 5-Min-Web</h3>
                            <h3>Your colorful <strong>Landing</strong> Page.</h3>
                            <h3>Web <strong>CV</strong> for your Future self.</h3>
                            <div>
                                <h3>Your <strong>Business</strong> Idea Website.<br>
                                   </h3>
                                <span>*With order form & JS price calc.</span>
                            </div>



                        </div>
                    </div>
                </div>
            <div class="slide_content_navigationBar">
                <div class="btnLeft">
                <button><router-link to="/">Syllabus</router-link></button>
                <button><router-link to="/">Lesson Plan</router-link></button>
                </div>
                <div class="btnRight">
                <button><router-link to="/"><strong>MY FIRST PROGRAM</strong></router-link></button>
                <button><router-link to="/"><strong>5-MIN-WEB</strong></router-link></button>
                </div>
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

    .component_nine{
        height:110vh;
        width:100vw;
        overflow:visible;

    }
    .background_rectangle{
        background:#2AF2ED;
        position:relative;
        left:10%;
    }
    .slide_content{
        flex-wrap:wrap;
        & .slide_content_media{
            width:60%;
            display:flex;
            flex-direction:column;
            background:#E01958;
            height:70%;
            & .tg{
                display:flex;
                justify-content:space-around;
                align-items:center;
                text-align: left;
                height:100%;
                color:white;

                & h2{
                    font-size:2vw;
                }
                & h3{
                    font-size:1.5vw;
                    font-family: "Raleway", sans-serif;
                    font-weight:300;
                }
                & .tgleft{
                   display:flex;

                    height:80%;
                    flex-direction:column;
                    justify-content:space-around;
                }
                & .tgborder{
                    width:.2vw;
                    height:80%;
                    background:Black;
                }
                & .tgright{
                    height:80%;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    overflow:visible;
                    & h3{
                    }
                    & span{
                        color:#2c3e50;
                        font-size:1vw;
                    }
                    & div{


                        height:3vh;
                        overflow:visible;
                    }
                }
            }

            }


        & .slide_content_text{
            width:40%;
            margin-top:15vh;
            & h1{
                & span{
                }
            }
            & .slide_content_text_bar{
                width:50%;
                margin:0 auto;
                height:2vh;
                background:black;
                margin-top:6vh;
            }
            & h2{
            }
            & h3{
                & span{
                }
            }
            & p{
            }
        }
        & .slide_content_navigationBar{
            margin-top:5vh;
            justify-content:space-between;

            & .btnLeft{
                width:30%;
                display:flex;
                justify-content:space-around;
                overflow:visible;


                & button{
                    width:50%;
                    background:none;
                    border:none;


                    & a{
                        text-decoration: none;
                        font-family:"Raleway",sans-serif;
                        font-weight:300;
                        color:red;
                    }
                }
            }
            & .btnRight{
                width:60%;
                display:flex;
                justify-content:space-around;
                overflow:visible;

                & button{
                    background:none;
                    width:45%;
                    & a{
                        text-decoration: none;
                        font-family:"Raleway",sans-serif;
                        font-weight:300;
                    }
                }
                & button:nth-child(1){
                    border:4px solid red;
                    & a{
                        color:red;
                    }

                }
                & button:nth-child(2){
                    border:4px solid #2AF2ED;

                    & a{
                        color:#2AF2ED;
                    }

                }
            }

        }
    }
    @media only screen and (max-width: 450px) {
        .component_nine{
           height:100vh;
            width:100vw;
            overflow:hidden;
        }
        .background_rectangle{
            background:#2AF2ED;
            left:10%;
        }
        .slide_content{

            margin-top:-15vh;
            & .slide_content_media{

                overflow:visible;
                width:90vw;
                right:0;
                height:30vh;
                & .tg{
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    text-align: left;
                    height:100%;
                    width:80%;
                    margin: 0 auto;

                    color:white;
                    & h2{
                        font-size:5vw;
                    }
                    & h3{
                        font-size:3.5vw;
                        font-family: "Raleway", sans-serif;
                        font-weight:300;
                    }
                    & .tgleft{
                        display:flex;

                        height:80%;
                        flex-direction:column;
                        justify-content:space-around;
                    }
                    & .tgborder{
                        width:.2vw;
                        height:80%;
                        background:Black;
                    }
                    & .tgright{
                        height:80%;
                        display:flex;
                        flex-direction:column;
                        justify-content:space-around;
                        overflow:visible;
                        & h3{
                        }
                        & span{
                            color:#2c3e50;
                            font-size:2vw;
                        }
                        & div{
                            margin-bottom:-1vh;
                            height:3vh;
                            overflow:visible;
                        }
                    }
                }

            }
            & .slide_content_text{
               order:1;
                & h1{

                }
                 & .slide_content_text_bar {
             display:none;
            }
                & h2{
                }
                & h3{
                    font-size:1.7em;
                    line-height: 7vw;
                }
                & button{
                    & a{
                        font-size: 6vw;
                    }
                }
                & button:hover{
                }
                & p{
                }
            }

            & .slide_content_navigationBar{

              .btnLeft{
                  order:2;
                  flex-direction:row;
                  width:60vw;
                  & button{
                        width:100%;
                      & a{
                          width:100%;
                      }

                  }

              }
                .btnRight{
                    order:1;
                    justify-content:space-around;
                    height:17vh;
                }

            }

        }
    }



</style>
