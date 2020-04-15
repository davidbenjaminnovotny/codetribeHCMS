<template>
    <div ref="compTwo" class="component_two bg-wave">

            <div class="background_rectangle">

            </div>

        <div class="slide_content">

            <div class="slide_content_media">

                <img src="../../assets/img/slidePages/slide2.png" class="slide_content_media_image" alt="The CodeTribe learning platform.">

            </div>
                <div class="slide_content_text">
                    <p>NO DRAG-AND-DROP:</p>
                    <h1>Real-world coding anywhere.</h1>
                    <h3>On your phone, laptop, or even offline.
                        It just works for you.
                        <br/>
                    </h3>
                    <a ref="noteStatus" id="noteStatus" style="" @click="showNote()">MORE <i class='fas fa-chevron-down'></i></a>
                    <transition name="fade">
                    <div class="extraNote" v-if="note">
                        <p>A world-first, full-feature mobile web app (nothing to install) that allows learners to add code and keep learning complex projects anywhere. </p>
                    </div>
                    </transition>
                        
                    <button><router-link to="/">TRY IT NOW</router-link></button>

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
            showNote(){

                this.note = !this.note
                if (/Mobi/.test(navigator.userAgent)) {
                    // mobile!
                    if(this.note){
                        this.$refs.noteStatus.innerHTML = "LESS <i class='fas fa-chevron-up'></i>"
                        this.$refs.compTwo.style.height = "140vh";
                    }else{
                        this.$refs.noteStatus.innerHTML = "MORE <i class='fas fa-chevron-down'></i>"
                        this.$refs.compTwo.style.height = "130vh";
                    }
                }else{
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

    .component_two{
        transition:.2s;
        height:100vh;
        width:100vw;
        overflow:hidden;
        background: #fff;
        background-image:linear-gradient(rgba(255,255,255,0.8)), url("../../assets/img/core/layerbg4.png");
        background-size:cover;
    }
    .bg-wave {


    }
    .background_rectangle{
        background:#f4f40e;
       left:30%;
    }
    .slide_content{
        margin:0 auto;
        width:80%;
    }
        .slide_content_media{


            & .slide_content_media_image{
              width:80%;
            }
        }
        .slide_content_text {

            width:60%;
            & h1 {
                color: limegreen;
                & span {
                    height: 100%;
                    overflow: visible;
                }
            }
            & h2 {
            }
            & h3 {
            }
            & p {
                width:100%;
                text-align: left;
                color:black;
            }
            & button {
                background: none;
                border: 4px solid limegreen;
                transition:.2s;
                & a {
                    color: limegreen;
                    font-weight: bold;
                    & span:nth-child(1) {
                    }
                }
            }
            & button:hover {
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
                margin-bottom:2vh;
                width:78%;
                & p{
                    width:100%;
                    font-size:1.3vw !important;
                    color:#2c3e50;
                    text-align: left;
                    font-family:"Raleway", serif;
                }
            }
        }

    @media only screen and (max-width: 450px) {
        .component_two{
            height:130vh;
            width:100vw;
        }

        .background_rectangle{
            background:yellow;
            position:relative;
            left:4%;
        }
        .slide_content{

        .slide_content_media{
            margin:0 auto;
            width:70%;
        }
        
        & .slide_content_media_image{
            width:100% !important;
        }
       & .slide_content_text{
                & h1 {
                    & span {
                    }
                    & h2 {
                    }
                    & h5 {
                    }
                    & button {

                    }
                    & button:hover {
                    }
                    & p {
                    }
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
                    color:#2c3e50;
                    text-align: left;
                    z-index:30;
                    font-family:"Georgia", serif;
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
