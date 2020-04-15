<template>
    <div ref="compFour" class="component_four">

            <div class="background_rectangle" >

            </div>

        <div class="slide_content">

            <div class="slide_content_media">

                <img src="../../assets/img/slidePages/slideFour.png" class="slide_content_media_image" alt="A screenshot from CodeTribes coding curriculum." >
                <p>CONTENT EXAMPLE: What's a DIV - Project 2</p>
            </div>

                <div class="slide_content_text" >
                    <p>METHODOLOGY OF KNOWLEDGE ACQUISITION:</p>
                    <h1>Say “Yes” to silly.</h1>
                    <h3>Learn smarter & <mark>faster</mark> because it’s simpler.
                    </h3>
                    <a ref="noteStatus" id="noteStatus" style="" @click="showNote()">MORE <i class='fas fa-chevron-down'></i></a>
                    <transition name="fade">
                        <div class="extraNote" v-if="note">
                            <p>Sequential, micro-coding-challenges simplify mastering Frontend Web  Development  projects. </p>
                        </div>
                    </transition>
                    <button><router-link to="/">GET STARTED!~</router-link></button>


                </div>


        </div>


    </div>

</template>

<script>
    export default {
        name: "component_two",
        data(){
            return{
                note:false
            }
        },
        methods:{
            showNote() {
                this.note = !this.note
                if (/Mobi/.test(navigator.userAgent)) {
                    if (this.note) {
                        this.$refs.noteStatus.innerHTML = "LESS <i class='fas fa-chevron-up'></i>"
                        this.$refs.compFour.style.height = "115vh";
                    } else {
                        this.$refs.noteStatus.innerHTML = "MORE <i class='fas fa-chevron-down'></i>"
                        this.$refs.compFour.style.height = "105vh";
                    }}else{
                        if(this.note){
                            this.$refs.noteStatus.innerHTML = "LESS <i class='fas fa-chevron-up'></i>"
                        }else{
                            this.$refs.noteStatus.innerHTML = "MORE <i class='fas fa-chevron-down'></i>"
                        }
                    }

                }
            }


    }
</script>

<style scoped lang="scss">

    .component_four{
        height:100vh;
        width:100vw;
        overflow:hidden;
        transition:.2s;
        background-image:linear-gradient(rgba(255,255,255,0.8)), url("../../assets/img/core/layerbg4.png");
        background-size:cover;

    }
    .background_rectangle{
        background: #2AF2ED;
        left:30%;
    }
    .slide_content{
        width:80%;
        & .slide_content_media{

            & p{
                font-family:"Raleway", sans-serif;
                font-weight:300;
                font-size: 1vw;
                text-align:center;
            }
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
            & p {
            }
            
            & button{
                background: red;
                border: 5px solid #f4f40e;
                & a{
                    color:white;
                    & span:nth-child(1){
                    }
                }
            }
            & button:hover{
            }

        }
        #noteStatus{
            width:6vw;
            display:flex;
            align-items:center;
            justify-content:space-around;
            font-family:'Raleway',serif;
            cursor:pointer;
            font-weight:800;
        }
        & .extraNote{
            width:80%;
            margin-bottom:2vh;
            & p{
                font-size:1.3vw !important;
                color:#2c3e50;
                text-align: left;
                font-family:"Raleway", serif;

            }
        }
    }
    @media only screen and (max-width: 450px) {
        .component_four{
            height:105vh;
            width:100vw;
            overflow:visible;
        }
        .background_rectangle{
            background:#2AF2ED;
            left:4%;
        }
        .slide_content{
            & .slide_content_media{
                & .slide_content_media_image{
                        width:80vw;
                    object-fit: cover;

                }
            }
            & .slide_content_text{
                margin-top:5vh;
                & h1{
                    overflow:visible;
                    & span{
                    }
                }
                & h2{
                }
                & h5{
                }
                & button {
                    & a {
                    }
                }
                & button:hover{
                }
                & p{
                }
            }
            #noteStatus{
                width:30%;
                display:flex;
                align-items:center;
                justify-content:space-around;
                font-family:'Raleway',serif;
                cursor:pointer;
                font-size:5vw;
                font-weight:800;
                margin-bottom:2vh;
            }
            & .extraNote{

                width:90%;
                height:10vh;
                margin-bottom:5vh;

                & p{
                    font-size:3.5vw !important;
                    display:block;
                    text-align: left;
                    z-index:30;
                    font-family:"Raleway", serif;
                }
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        transition:0.01s;
    }


</style>
