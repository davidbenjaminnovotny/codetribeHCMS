<template>
    <div class="option_display">

        <div class="option_display_container">

            <div class="option_display_container_option">
                <div class="background-square">

                </div>
                <div class="option_display_container_option_image" id="image_estrange">
                    <img src="../../assets/img/core/bone.png" class="option_display_container_option_image_image" alt="Simplicity Dog Bones CodeTribe">
                </div>
                <h1 class="option_display_container_option_header">
                  Afraid? Don't Be.
                </h1>

                <h3 class="option_display_container_option_description">
                    We make things simple...<br><br> Because even super smart people learn faster when it’s explained right.</h3>
                <router-link to="/">WHAT...</router-link>

            </div>

            <div class="option_display_container_option">
                <div class="option_display_container_option_image" >
                    <img src="../../assets/img/core/code.png" class="option_display_container_option_image_image" alt="Simplicity Learn Coding CodeTribe" >
                </div>

                <h1 class="option_display_container_option_header">
                    Host anywhere.
                </h1>
                <h3 class="option_display_container_option_description">
                    You can host your websites on any server.<br><br>We'll show you domains too.<br><br> That’s awesome.
                </h3>
                <router-link to="/">WILL YOU...</router-link>
            </div>

            <div class="option_display_container_option">
                <div class="option_display_container_option_image">
                    <img src="../../assets/img/core/emoji.jpg" class="option_display_container_option_image_image" alt="Simplicity CodeTribe Emoji">
                </div>

                <h1 class="option_display_container_option_header">
                    Easy does it…
                </h1>
                <h3 class="option_display_container_option_description">
                    We even make it fun.<br><br> 80% of people that start with 1 hour right away get through the whole course.
                </h3>
                <router-link to="/">CREATE?</router-link>
            </div>


        </div>
        <div class="option_display_link">
                <h2>Top 5 things that make us different from other coding programs.
                </h2>
            <router-link to="/">Read More...</router-link>
        </div>


    </div>
</template>

<script>
    export default {
        name: "component_option_display",

    }
</script>

<style scoped lang="scss">

    .background-square{
        width:20vw;
        left:13%;
        margin-top:3%;
        height:50vh;
        background:yellow;
        z-index:1;
        position:absolute;
    }
    .option_display{

        width:100vw;
        height:100vh;
        overflow:visible;


       & a{
            font-family: 'Raleway', sans-serif;
            background: red;
            display:flex;
            justify-content:center;
            align-items:center;
            text-decoration: none;
            border: 5px solid #f4f40e;
            height:8vh;
            width:17vw;
            margin:0 auto;
            z-index:10;
            border-radius: 0px;
            cursor:pointer !important;
            transition:.2s;

        }
        a:hover{
            transform:scale(1.05);
            transition:.2s;
        }
        .option_display_container_option{
            & a{
                background:red;
                color:white;
                font-family:"Raleway", sans-serif;
            }
        }
        & .option_display_container{
            display:flex;
            width:80%;
            overflow:visible;
            margin: 0 auto;
            margin-top:10vh;
            justify-content:space-around;
            align-items:center;

            & .option_display_container_option{
                width:20%;
                height:80vh;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                align-items:stretch;
                padding:2vw;
                overflow:visible;



                & .option_display_container_option_image{
                    width:90%;
                    overflow:visible;
                    z-index:2;

                    & .option_display_container_option_image_image{
                    width:72%;

                    }

                }
                & #image_estrange{
                    background:#2AF2ED !important;
                    border-radius:50%;
                    width:10.5vw;
                    margin: 0 auto;
                    height:10.5vw;
                    & .option_display_container_option_image_image{
                        width:100%;
                    }

                }

                & .option_display_container_option_header{
                    z-index:2;
                    text-align: left;
                    overflow:visible;
                    font-size:3.5vw;

                }
                & .option_display_container_option_description{
                    text-align: left;
                    z-index:2;
                    height:30%;
                    overflow:visible;
                    font-family: Georgia, 'Times New Roman', Times, sans-serif;
                    font-size:1.3vw;
                    width:90%;
                }



            }

        }

        .option_display_link{
            width:70%;
            height:10vh;
            background:#6AD5C7;
            margin:0 auto;
            display:none;
            justify-content:space-around;
            align-items:center;
            color:white;

            & h2{
                font-size:1.5vw;
            }
            & a{
                color:white;
                transition:.2s;
                font-size: 1.7vw;
            }
            & a:hover{
                transform:scale(1.05);
                transition:.2s;
            }
        }

    }
    @media only screen and (max-width: 450px) {
            .background-square{
                display:none;
            }
        .option_display{
            margin-top:35vh;
            height:auto;


            & .option_display_container{

                display:flex;
                flex-direction:column;
                width:80%;
                margin: 0 auto;
                margin-top:10vh;
                justify-content:center;
                align-items:center;

                & .option_display_container_option{
                    width:90%;
                    height:70vh;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    align-items:stretch;
                    padding:2vw;
                    overflow:visible;
                    margin-bottom:15vh;



                    & .option_display_container_option_image{
                        width:90%;
                        overflow:visible;

                        & .option_display_container_option_image_image{
                            width:72%;
                        }

                    }
                    & #image_estrange{
                        background:#2AF2ED !important;
                        border-radius:50%;
                        width:47vw;
                        margin: 0 auto;
                        height:47vw;
                        & .option_display_container_option_image_image{
                            width:100%;
                        }

                    }

                    & .option_display_container_option_header{
                        text-align:center;
                        overflow:visible;
                        font-size:8vw;
                        margin-top:3vh;


                    }
                    & .option_display_container_option_description{
                        text-align: center;
                        overflow:visible;
                        font-size:5vw;
                        margin-top:2vh;
                        height:40%;
                    }
                    & a{
                        padding:3vw 2vw 3vw 2vw;
                        width:90%;
                        height:3vh;
                        margin:0 auto;
                        font-size: 4vw;




                    }


                }

            }

            .option_display_link{
                width:100%;
                height:40vh;
                background:#2AF2ED;
                margin:0 auto;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;
                color:white;

                & h2{
                    width:90%;
                    font-size:8vw;
                }
                & a{
                    color:#2c3e50;
                  background:none;
                    border:none;
                    width:40vw;
                    font-size:7vw
                }

            }

        }

    }


</style>
