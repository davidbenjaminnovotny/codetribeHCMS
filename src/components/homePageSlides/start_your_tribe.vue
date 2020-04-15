<template>
    <div class="start_your_tribe">

        <div class="container">
            <div class="container_header">
                <h2>STEP 1: START YOUR TRIBE.</h2>
                <h1>1 Free Lessons for Tribes</h1>
            </div>

            <div class="bgr" >
                <div class="top">
                    <h1>Hey guys, I<br> found this <br>thing…</h1>
                    <div class="select_box_container">
                        <h3>Choose Your Country!</h3>
                        <div class="select_box">
                            <select>
                            <option selected disabled>Select Country</option>
                            <option v-for="country in this.countries[0]">
                                <p>{{country.name.substring(18,"...")}}</p>
                            </option>
                            </select>
                        </div>
                    </div>



                </div>
                <div class="middle">
                    <div class="middle_inputs" ref="row1">

                    <input type="text" placeholder="Joe Banana">
                    <input type="text" placeholder="Email or Phone">

                </div>
                    <transition name="next">
                    <div class="middle_inputs" ref="row2" v-show="row2">

                        <input type="text" placeholder="Tim Piddlepop">
                        <input type="text" placeholder="Email or Phone">

                    </div>
                    </transition>
                    <transition name="next">
                    <div class="middle_inputs" ref="row3" v-show="row3">

                    <input type="text" placeholder="John Magonga">
                    <input type="text" placeholder="Email or Phone">

                </div>
                    </transition>

                    <a @click="addRow()">{{addRowMsg}}</a>
            </div>
                <div class="bottom">
                    <a>More free lessons if it grows</a>
                    <button style=" font-style: italic;">SHARE</button>
                    <button>SEND</button>
                    <button><strong>Whatever</strong></button>
                </div>
        </div>


    </div>
    </div>
    
</template>

<script>
import axios from "axios"
    export default {
        name: "component_one",
        mounted(){
            this.getCountries()
        },
        data(){
            return{
                snipShow: false,
                row2: false,
                row3: false,
                addRowMsg: "Add more Friends >>",
                countries: []
            }

        },
        methods: {
            showSnip() {
                this.snipShow = true


            },
            hideSnip() {
                this.snipShow = false
            },
            addRow() {
                this.row2 ? this.row3 = true : this.row2 = true
                this.row3 ? this.addRowMsg = "Maximum of 3 friends reached :(" : this.addRowMsg
            },
            async getCountries() {

                if (this.countries.length > 1) {

                } else {
                    try {
                        const req = await axios.get("https://www.restcountries.eu/rest/v2/all")
                        if (req) {
                            this.countries.push(req.data)
                            document.querySelector(".select").click()
                        }

                    } catch (e) {
                        throw new Error(e)
                    }
                }

            },
            clickSelect(){
                document.querySelector("select").click()
            }
        }
    }
</script>

<style scoped lang="scss">

    .start_your_tribe{
       height:140vh;
        width:100vw;
        overflow:visible;
        transition:.2s;
    }

    h1{
        font-family: "Raleway", serif;
        line-height:10vh;
        overflow:visible;
        margin-bottom:10vh;
    }
    .bgr {
        transition:.2s;
        overflow:visible !important;
        width: 70vw;
        max-height: 120vh;
        background: #2AF2ED;
        display:flex;
        flex-direction:column;
        justify-content:center;

        position: relative;
        left: 20%;

        top: 20%;
        z-index: 1;

        & .top {
            display: flex;
            text-align: left;
            justify-content: space-between;
            align-items: flex-start;
            overflow:visible;

            & h1 {
                font-size: 3.5em;
                font-family: "Raleway", serif;
                padding: 1vw;
            }
            .select_box_container{
                position: relative;
                display:flex;
                flex-direction:column;


                top:40%;
                left:-15%;
            }
            .select_box{
                margin-top:2vh;
                width: 25vw;
                overflow: hidden;
                border: 4px solid blue;
                background:white;
                position: relative;

            }
            .select_box:after{
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid blue;
                position: absolute;
                top: 40%;
                right: 5px;
                content: "";
                z-index: 98;
            }
            .select_box select{
                font-size:1.2em;
                width: 100%;
                padding:.5vw;
                border: 0;
                height:7vh;
                appearance: none;
                position: relative;
                z-index: 99;
                background: none;
            }
            select:focus{
                outline:none;
                background:blue;
                color:white;
            }
            select option{
                font-size:1.2em;
            }
            select:focus > .select_box:after{
                border-top: 6px solid white;
            }


        }

        .middle {

            input::placeholder {
                color:#2AF2ED;
            }

            input:focus::placeholder {
                color:white;
            }


            .middle_inputs {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                width: 70%;
                margin: 0 auto;
                margin-bottom:3vh;

                input {
                    background: red;
                    color: #2AF2ED;
                    padding: .5vw;
                    border: 2px solid white;
                    height: 5vh;
                    font-size: 1.6em;
                    transition: .2s;
                }

                input:focus {
                    transition: .2s;
                    outline: none;
                    background: blue;
                    color: white;
                }

                input:nth-child(1) {
                    width: 30%;
                }

                input:nth-child(2) {
                    width: 50%;
                }


            }

            a {
                text-align: left;
                width:100%;

                color: white;
                font-size: 1.3em;
                margin-top: 3vh;
            }
        }
        .bottom{
            display:flex;
            justify-content:space-between;
            align-items:center;
            width:105%;
            margin-top:5vh;
            margin-bottom:5vh;
            margin-left:-6vw;
            overflow:visible;

            & button{
                width:13vw;
                padding:1vw;
                font-size:1.3em;
                cursor:pointer;

            }

            & button:hover{
                transform:scale(1.03);
                transition:.2s;
            }
           a{
                background:rgba(0,0,0,0);
                color:#ff0066;
               font-size:1.3em;
            }
            button:nth-child(2){
                background:rgba(0,0,0,0);
                border:4px solid white;
                color:white;

            }
           button:nth-child(3){
               background:rgba(0,0,0,0);
               border:4px solid white;
               color:white;
               text-decoration:underline;
            }
            button:nth-child(4){
                background:rgba(0,0,0,0);
                border:4px solid blue;
                color:blue;
                text-decoration:underline;
            }

        }
    }

    .container{


        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:flex-start;
        height:100vh;
        overflow:visible;
        width:100vw;



        & .container_header{
            overflow:visible;
            text-align: left;
            position:relative;
            top:23vh;
            left:5vw;
            z-index:12;

            & h1{
                color:#E01958;
                font-size:3.5em;
                z-index:12;
            }



        }

    }

    @media only screen and (max-width: 450px) {
        .start_your_tribe {
            height:auto;
            width: 100vw;
            overflow: hidden;
            margin-top:10vh;



        }

        .container{
            height:100%;
            display:flex;
            justify-content:center;
            flex-direction:column;


            & .container_header{
                order:1;
                overflow:visible;
                position:static;
                width:100%;
                margin:0 auto;
                text-align:center;
                left:5vw;
                z-index:12;

                    & h1{
                        color:#E01958;
                        font-size:3.5em;

                        z-index:12;
                    }




            }

            &  .bgr {
                order:2;
                flex-direction:column;
                width: 90vw;
                margin-bottom:10vh;
                height:100%;
                align-items:center;
                position: relative;
                left:5vw;

                z-index: 10;

                & .top{
                    flex-direction: column;
                    text-align: center;

                    & select {

                        -webkit-appearance: none;
                        -moz-appearance: none;
                        -ms-appearance: none;
                        appearance: none;
                        outline: 0;
                        height:8vh;
                        overflow:visible;
                        background: #2AF2ED;
                        box-shadow: none;
                        border: 2px solid blue;


                    }
                    .select {
                        position: relative;
                        display: flex;
                        width: 100%;
                        height: 8vh;
                        color: white;
                        font-size: 1.4em;
                        line-height: 3;
                        background: #2c3e50;
                        border-radius: .25em;
                        right: 0vw;
                        top: 0;
                        margin-top:5vh;


                    }

                }
                .middle {
                    margin-top:5vh;
                    overflow:visible;

                    .middle_inputs {

                        justify-content: space-around;
                        flex-direction: column;
                        flex-wrap:nowrap;
                        width: 100%;
                        margin: 0 auto;
                        margin-bottom:3vh;

                        input {
                            background: red;
                            color: #2AF2ED;
                            padding: .5vw;
                            height: 5vh;
                            font-size: 1.6em;
                            transition: .2s;
                            margin: 0 auto;
                        }

                        input:focus {
                            transition: .2s;
                            outline: none;
                            background: blue;
                            color: white;
                        }

                        input:nth-child(1) {
                            width: 90%;
                        }

                        input:nth-child(2) {
                            width: 90%;
                        }


                    }

                    a {
                        text-align: left;
                        width:100%;

                        color: white;
                        font-size: 1.3em;
                        margin-top: 3vh;
                    }
                }

                & .bottom{
                    flex-direction:row;
                    flex-wrap:wrap;
                    width:80%;
                    height:auto;
                    margin-left:0;
                    & button{
                        height:8vh;
                    }

                    & a{

                        width:100%;
                        display:none;
                    }

                    & button:nth-child(2){
                        width:35%;
                        flex:1;
                    }
                    & button:nth-child(3){
                        width:35%;
                        margin-left:2vh;
                        flex:2;
                    }
                    & button:nth-child(4){
                        margin-top:2vh;
                        width:100%;


                    }
                }

            }

        }

    }
    .next-enter {
        opacity: 0;
        transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0);
    }

    .next-enter-to { transform: scale3d(1, 1, 1); }
    .next-enter-active,
    .next-leave-active { transition: 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
    .next-leave { transform: scale3d(1, 1, 1); }

    .next-leave-to {
        opacity: 0;
        transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0);
    }




</style>
