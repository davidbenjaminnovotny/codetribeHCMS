<template>
    <div>
        <footer class="footer">
            <div class="top">

                <img src="../../assets/img/core/footerLogo.png">
                <div>
                <h3>I'm bored.</h3>
                <h3>Stuff</h3>
                <h3>Us</h3>
                </div>
            </div>
            <div class="middle">
                <div class="middle_one">
                    <p>Easy-to-use vocational coding for teens, High Schools & community programs –
                        Synthisizing fast-recall, sharing, quizzes & team projects into practical skills.
                    </p>
                    <p>An immature, EdTechcompany focused on fun, shared experiences for teens.
                    </p>

                </div>
                <div class="middle_two">
                    <div class="link"><router-link to="/">Gallery</router-link><div class="questionMark" v-on:mouseenter="showInfo('Other people’s stuff.',$event)" v-on:mouseleave="closeInfo()">?</div></div>
                    <div class="link"><router-link to="/">Can I join the party?</router-link><div class="questionMark" v-on:mouseenter="showInfo('10 mins of awesome JS.',$event)" v-on:mouseleave="closeInfo()">?</div></div>
                    <div class="link"><router-link to="/">5 Min Website</router-link><div class="questionMark" v-on:mouseenter="showInfo('The best way to start.',$event)" v-on:mouseleave="closeInfo()">?</div></div>
                    <div class="link"><router-link to="/">Start Your Tribe</router-link><div class="questionMark" v-on:mouseenter="showInfo('Build with Friends.',$event)" v-on:mouseleave="closeInfo()">?</div></div>
                    <div class="link"><router-link to="/">Start Coding</router-link><div class="questionMark" v-on:mouseenter="showInfo('There\'s never a better time than now',$event)" v-on:mouseleave="closeInfo()">?</div></div>
                    <div class="link"><router-link to="/">Projects Overview</router-link></div>
                    <div class="link"><router-link to="/">Social IMPACT – CodeJIKA.com</router-link></div>
                    <div class="link"><router-link to="/">Represent</router-link></div>

                </div>
                <div class="middle_three">
                    <div class="link"><router-link to="/">School Signup</router-link></div>
                    <div class="link"><router-link to="/">The Curric</router-link></div>
                    <div class="link"><router-link to="/">Mobile Features</router-link></div>
                    <div class="link"><router-link to="/">USP | The difference</router-link></div>
                    <div class="link"><router-link to="/">Partners | Resellers</router-link></div>
                    <div class="link"><router-link to="/">Media Pack</router-link></div>
                    <div class="link"><router-link to="/">Invest</router-link></div>
                    <div class="link"><router-link to="/">Translate</router-link></div>
                    <div class="link"><router-link to="/">Blog-ish-ness</router-link></div>

                </div>
                <div class="middle_four">
                    <div class="link"><router-link to="/">About</router-link><div class="questionMark" v-on:mouseenter="showInfo('Like,.. Who, why, what & when. What?',$event)" v-on:mouseleave="closeInfo()">?</div></div>
                    <div class="link"><router-link to="/">Cool Peeps</router-link><div class="questionMark" v-on:mouseenter="showInfo('The Team',$event)" v-on:mouseleave="closeInfo()">?</div></div>
                    <div class="link"><router-link to="/">Hiring</router-link></div>
                    <div class="link social_links">
                        <a href="" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="" target="_blank"><i class="fab fa-google"></i></a>
                        <a href="" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="" target="_blank"><i class="fab fa-medium"></i></a>


                    </div>
                    <div class="link selectLink">

                        <div class="select_box">
                            <select name="slct" id="slct">
                                <option selected disabled>Country | Language</option>
                                <option v-for="country in this.countries[0]">
                                    <p>{{country.name.substring(11, "...")}} | {{country.languages[0].name}}</p>
                                </option>

                            </select>
                        </div>
                    </div>


                </div>

            </div>

            <div class="bottom">
                <div class="left">
                    <h1>CODETRIBE.COM</h1>
                </div>
                <div class="right">
                    <h3>77 Water Street, New York City 10051</h3>
                    <p>© Copyright {{currentYear}} Ultimate Growth
                    </p>
                </div>
            </div>
            <div class="wedge">
                <h3><a>HOW WE'RE CHANGING THE WORLD</a> - Check out our partner: <a href="www.codejika.com" target="_blank">CodeJIKA.com</a></h3>
            </div>
        </footer>
        <transition name="next">
            <div class="infoWindow" v-show="boxShow" >
                {{infoMessage}}
                <div class="infoWindow_arrow"></div>
            </div>
        </transition>

    </div>
</template>

<script>

    import axios from "axios"
    export default {
        name: "ft",
        mounted() {
            this.getYear()
            this.getCountries()
        },
        data() {
            return {
                boxShow: false,
                infoMessage: "",
                currentYear: "",
                countries: [],


            }
        },
        methods: {
            showInfo: function (msg, e) {
                if (!this.boxShow) {
                    this.boxShow = true
                    let box = document.querySelector(".infoWindow");
                    let cont = document.querySelector(".middle")
                    let arrow = document.querySelector(".infoWindow_arrow")
                    console.log(e.target.getBoundingClientRect().top)
                    console.log(this.boxShow)
                    if (e.clientX > cont.offsetWidth / 2) {
                        box.style.left = e.target.getBoundingClientRect().left + 30 + "px";
                        box.style.top = e.target.getBoundingClientRect().top + 6 + "px";
                        arrow.style.left = e.target.getBoundingClientRect().left;
                        arrow.style.top = e.target.getBoundingClientRect().top;
                    } else {
                        box.style.left = e.target.getBoundingClientRect().left + 30 + "px";
                        box.style.top = e.target.getBoundingClientRect().top + 6 +"px";
                        arrow.style.left = e.target.getBoundingClientRect().left;
                        arrow.style.top = e.target.getBoundingClientRect().top;
                    }
                } else {
                    this.boxShow = false
                }
                this.infoMessage = msg
            },
            closeInfo() {
                this.boxShow = false
            },
            getYear() {
                this.currentYear = new Date().getFullYear()
            },
            async getCountries() {

                if (this.countries.length > 1) {
                } else {


                    try {
                        const req = await axios.get("https://www.restcountries.eu/rest/v2/all")
                        if (req) {
                            this.countries.push(req.data)

                        }

                    } catch (e) {
                        throw new Error(e)
                    }
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .footer {

        height:90vh;
        overflow:visible;
        width: 100vw;



    }
    .top{
        height:18%;
        width:100%;
        background:yellow;
        display:flex;


        align-items:center;

        & img{
            margin-right:9vw;
            margin-left:3vw;
            width:15vw;
        }
        & div{

            font-family:"Raleway", serif;
        display:flex;
        justify-content:flex-start;
        width:91%;
            & h3{
                text-align:left;
                font-size:1.8vw;
                width:100%;
            }
          }
        & img{
            margin-top:-5vh;
        }


    }
    .middle{
        height:50%;
        width:100%;
        display:flex;
        overflow:visible;
        font-family:"Raleway", serif;



        & div{
            display:flex;
            flex-direction:column;
            justify-content:space-evenly;
            align-items:center;
            width:25%;
            height:100%;

            text-align:left;
            & div{
                width:100%;
                height:100%;
                text-align:left;

                & a{
                    text-align: left;
                    font-size:1.2vw;
                }
            }
        }
        & .middle_one{


            p{
                font-family: "Raleway", serif;
                font-weight:400;
                width:70%;
                font-size:1.1vw;
                color:rgba(0,0,0,0.5);
            }
        }

        & .middle_two{

            justify-content:space-around !important;
            overflow:visible;
            & .link{
                height:10%;
                display:flex;
                justify-content:flex-start;
                flex-direction:row;
                overflow:visible;


                & a{

                    text-decoration: none;
                    color:rgba(0,0,0,0.5);

                    transition:.2s;
                }
                & a:hover{
                    transform:scale(1.05);
                    color:rgba(0,0,0,1);
                    transition:.2s;
                }


            }
        }
        .middle_three{
            justify-content:space-around !important;
            overflow:visible;
            & .link{
                height:10%;
                display:flex;
                justify-content:flex-start;
                flex-direction:row;
                overflow:visible;


                & a{

                    text-decoration: none;
                    color:rgba(0,0,0,0.5);

                    transition:.2s;
                }
                & a:hover{
                    transform:scale(1.05);
                    color:rgba(0,0,0,1);
                    transition:.2s;

                }


            }
        }
        & .middle_four{
            justify-content:flex-start !important;
            overflow:visible;
            & .link{
                height:10%;
                display:flex;
                justify-content:flex-start;
                flex-direction:row;
                overflow:visible;


                & a{

                    text-decoration: none;
                    color:rgba(0,0,0,0.5);

                    transition:.2s;
                }
                & a:hover{
                    transform:scale(1.05);
                    color:rgba(0,0,0,1);
                    transition:.2s;

                }


            }
            .social_links{
                margin-top:3vh;
                margin-bottom:3vh;
                height:40%;
                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-wrap:wrap;

                & a{
                    width:33%;
                    & i{
                       font-size:3vw;
                        color:#E01958;
                    }
                }
            }

            .selectLink{
                width:100%;
                display:flex;
                justify-content:flex-start;

            }
            .select_box{
                margin-top:2vh;
                width: 20vw;
                overflow: hidden;
                border: 4px solid #2AF2ED;
                background:white;
                position: relative;

            }
            .select_box:after{
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid #2AF2ED;
                position: absolute;
                top: 40%;
                right: 5px;
                content: "";
                z-index: 98;
            }
            .select_box select{

                width: 100%;
                padding:.5vw;
                border: 0;
                height:7vh;
                appearance: none;
                position: relative;
                z-index: 99;
                background: none;
                font-size:1.2vw;
            }
            select:focus{
                outline:none;

            }
            select option{
                font-size:1.2vw;
            }
            select:focus > .select_box:after{
                border-top: 6px solid white;
            }



        }
    }
    .bottom{
        font-family: "Raleway", serif;
        height:18%;
        width:100%;
        background:#2AF2ED;
        display:flex;
        justify-content:space-between;
        align-items:center;
       
        & .right{
        margin-right:4.2vw;
            text-align:left;
            font-size:1vw;
    }

        & .left{
            margin-left:3.8vw;
            font-size:.7vw;

        }
    }
    .wedge{
        width:100%;
        background:#404040;
        font-size:1vw;
        height:14%;
        font-family: "Raleway", serif;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;

        & a{
            cursor:pointer;
            text-decoration: none;
            color:white;
        }
    }

    .questionMark{
        border-radius:50%;
        cursor:pointer;
        border:2px solid #2AF2ED;
        box-shadow: -1px 7px 19px -4px rgba(0,0,0,0.06);
         background:yellow;
        font-size:1.2vw;
        height:3vh !important;
        overflow:visible;
        width:3vh !important;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-left:2vw;
        transition:.2s;
    }
    .questionMark:hover{
        transition:.2s;
        transform:scale(1.05);
    }

    .infoWindow{
        width:auto;
        height:auto;
       position:fixed;
        z-index:100;
      color:#E01958;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:.8vw;
        border-radius:5px;
        overflow:visible;

        & .infoWindow_arrow{

        }

    }
    .next-enter {
        opacity: 0;
        transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0);
    }

    .next-enter-to { transform: scale3d(1, 1, 1); }
    .next-enter-active,
    .next-leave-active { transition: 0.05s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
    .next-leave { transform: scale3d(1, 1, 1); }

    .next-leave-to {
        opacity: 0;
        transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0);
    }


</style>
