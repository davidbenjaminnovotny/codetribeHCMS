<template>
    <div class="HamMenu">
        <div class="header">

        </div>
        <h1 id="menuTitle">CodeTribe</h1>
        <div class="menu_container">
            <div class="menu_row">
                <h1>menu<span style="color:#ff0066;">/.</span></h1>
                <div class="menu_link_container">
                    <div class="menu_link_container_link">

                        <h3>Learn</h3>
                    </div>
                    <div class="menu_link_container_link">
                        <h3>Partners</h3>
                    </div>
                    <div class="menu_link_container_link">
                        <h3>Schools</h3>
                    </div>
                    <div class="menu_link_container_link">
                        <h3>Curriculum</h3>
                    </div>
                </div>
            </div>
            <div class="menu_row">
                <h1>curriculum<span style="color:#ff0066;">/.</span></h1>
                <div class="menu_link_container">
                    <div class="menu_link_container_link">
                        <h3>Learn</h3>
                    </div>
                    <div class="menu_link_container_link">
                        <h3>Partners</h3>
                    </div>
                    <div class="menu_link_container_link">
                        <h3>Schools</h3>
                    </div>
                    <div class="menu_link_container_link">
                        <h3>Curriculum</h3>
                    </div>
                </div>

        </div>


    </div>
    </div>
</template>

<script>

    import {TweenMax, TimelineLite} from "gsap"
    import { Bus } from "../../main"
    export default {
        name: "HamMenu",
        mounted(){
            this.loadIn()
        },
        methods:{
            loadIn(){
                var tl = new TimelineLite();
                tl.staggerFrom(".menu_row h1", 1, {
                    opacity:0,
                    stagger: 0.01 // 0.1 seconds between when each ".box" element starts animating
                })
                tl.staggerFrom(".menu_link_container_link", .05, { delay:-1,
                    y: 30,
                    opacity:0,
                    stagger: 0.05 // 0.1 seconds between when each ".box" element starts animating
                })
                tl.from("#menuTitle", 1.5,{
                    delay:-1.3,
                    opacity:0
                })
            }

        }
    }
</script>

<style scoped lang="scss">
    .HamMenu{
        z-index:0 !important;
        width:100vw;
        height:100vh;
        background-color: #2c3e50;
        background-image: url("../../assets/img/slidePages/bg-pattern-zz50.png");
        display:flex;
        flex-direction:column;
        position:fixed;
        left:0%;
        top:0%;
    }
    #menuTitle {

        font-family: "Raleway", serif;

        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #2AF2ED;
        color: rgba(0, 0, 0, 0);
        transform: rotate(-90deg);
        font-size: 8vw;
        position: fixed;
        top: 40vh;
        left: -13vw;
    }
    .header{
        width:100%;
        height:10vh;
        display:flex;
        justify-content:space-between;
        align-items:center;
        overflow:visible;
        color:white;

        & button{
            margin-right: 4.2%;
            margin-top:2%;
            background:none;
            border:none;

            & i{
                font-size:4vw;
                color:white;
            }
        }
    }

    .menu_container{
        padding:2vw;
        box-sizing: border-box;
        width:75vw;
        left:15%;
        position:relative;
        height:85vh;
        overflow:visible;
        display:flex;
        flex-direction:column;
        justify-content:space-between;


        & .menu_row{
            overflow:visible;

            & h1{
                font-family: "Raleway", serif;
               color:white;
                font-size:3vw;
                width:100%;
                text-align: left;
            }
            & .menu_link_container{
                margin-top:3vh;
                overflow:visible;
                width:100%;
                height:auto;
                display:flex;
                justify-content:space-around;
            }

            & .menu_link_container_link{
                cursor:pointer;
                background:yellow;
                background-size:cover;
                width:14vw;
                height:13vw;
                border:2px solid #2AF2ED;
                transition:.2s;

                & h3{
                    position:relative;
                    top:70%;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: #ff0066;
                    color:rgba(0,0,0,0);
                    font-size:2.3vw;
                    width:100%;

                }
            }
            & .menu_link_container_link:hover{
                transform:scale(1.05) !important;
                transition:.2s;

            }
        }
    }
    @media only screen and (max-width: 450px) {
        #menuTitle {
            font-family: "Raleway", serif;
            display:none;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #2AF2ED;
            color: rgba(0, 0, 0, 0);
            transform: rotate(0deg);
            font-size: 8vw;
            position: fixed;
            top: 5.5vh;
            left: 5vw;

        }
        .header{
            width:100%;
            height:10vh;
            display:flex;
            justify-content:space-between;
            align-items:center;
            overflow:visible;
            color:white;

            & button{
                margin-right: 4.2%;
                margin-top:2%;
                background:none;
                border:none;

                & i{
                    font-size:4vw;
                    color:white;
                }
            }
        }

        .menu_container{
            padding:2vw;
            box-sizing: border-box;
            width:90vw;
            left:5%;
            top:5%;
            position:relative;

            height:80vh;
            overflow:visible;
            display:flex;
            flex-direction:column;
            justify-content:center;


            & .menu_row{
                overflow:visible;

                & h1{
                    font-family: "Raleway", serif;
                    color:white;
                    font-size:10vw;
                    width:100%;
                    text-align: left;
                }
                & .menu_link_container{
                    margin-top:3vh;
                    overflow:visible;
                    width:100%;
                    height:30vh;
                    flex-wrap:wrap;
                    display:flex;
                    flex-direction:row;
                    justify-content:space-around;


                & .menu_link_container_link{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    cursor:pointer;
                    background:yellow;
                    background-size:cover;
                    border:4px solid #2AF2ED;
                    width:40%;
                    height:20vw;
                    transition:.2s;

                    & h3{
                        position:relative;
                        top:0%;
                        -webkit-text-stroke-width: 1px;
                        text-align:center;
                        -webkit-text-stroke-color: rgba(0,0,0,0);
                        color:white;
                        font-size:5vw;
                        width:100%;

                    }
                }
                & .menu_link_container_link:hover{
                    transform:scale(1.05) !important;
                    transition:.2s;

                }
            }
            }
        }
    }

</style>
