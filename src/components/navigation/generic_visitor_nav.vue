<template>
    <div class="generic_visitor_nav"  :class="{ 'scrollNav': scrollNav }">

        <nav>
        <div class="brand-logo">
                <router-link to="/"><img src="../../assets/img/core/codeTribeLogo.png" alt="Code Jika Logo" :class="{ 'scrollNavImg': scrollNav }"></router-link>

        </div>

            <div class="mobile_nav_trigger">
                <li @click="toggleMenu()" class="hbgmenu">
                <a>
                    <i ref="open" class="fas fa-bars openMen"></i>
                    <i ref="close" class="fas fa-times closeMen"></i>
                </a>
            </li>
            </div>
            <ul>
                <li class="navLink"><router-link to="/" ><strong>Projects</strong></router-link></li>
                <li class="navLink" v-on:mouseenter="showSpan1 = true"  v-on:mouseleave="showSpan1 = false"><router-link to="/" ><strong>Got 5 Mins?</strong></router-link><span v-show="showSpan1">Then build your first program!</span></li>
                <li class="navLink" v-on:mouseenter="showSpan2 = true" v-on:mouseleave="showSpan2 = false"><router-link to="/Teachers" ><strong>Start a Tribe</strong></router-link><span v-show="showSpan2">It's the only way to have fun!</span></li>
                <li @click="toggleMenu()" class="navLink hbgmenu">
                    <a>
                        <i ref="open" class="fas fa-bars openMen"></i>
                        <i ref="close" class="fas fa-times closeMen"></i>
                    </a>
                </li>

            </ul>


        </nav>
        <transition name="next">
            <HamMenu id="HamMenu" ref="HamMenu"  v-if="showMenu" v-on:toggleMenu="showMenu = !showMenu"/>
        </transition>
    </div>

</template>

<script>
import {TimelineLite} from "gsap"
import HamMenu from "@/components/navigation/HamMenu"
    export default {
        name: "generic_visitor_nav",
        components:{
            HamMenu
        },
        data(){
            return{
                scrollNav: false,
                showSpan1: false,
                showSpan2: false,
                showMenu: false,


            }
        },
        created(){

        },
        mounted () {
            document.addEventListener("scroll", this.handleScroll)
        },
        destroyed () {
            document.removeEventListener('scroll', () => this.handleScroll);
        },
        methods: {
            handleScroll (e) {
                let nav = document.querySelector(".generic_visitor_nav")
                if(window.pageYOffset > 70){
                    this.scrollNav = true
                }else if(window.pageYOffset < 70){
                    this.scrollNav = false
                }
            },
            toggleMenu () {
               this.showMenu = !this.showMenu
                this.HamAni()


            },
            HamAni(){
                if(this.showMenu) {
                    let tl = new TimelineLite()
                    tl.
                    to(".openMen", .2, {opacity:0})
                    tl.to(".openMen", .02, {display:"none"})
                    tl.to(".closeMen", .02, {display:"block"})
                    tl.to(".closeMen", .02, {transform:"scale(1.3)"})
                }else{
                    let tl = new TimelineLite()
                    tl.to(".closeMen", .02, {transform:"scale(.1)"})
                    tl.to(".closeMen", .02, {display:"none"})
                    tl.to(".openMen", .02, {display:"block"})
                    tl.to(".openMen", .2, {opacity:1})

                }

            }
        }
    }
</script>

<style scoped lang="scss">

    .generic_visitor_nav {
        height:16vh;
        width:100%;
        position:fixed;
        background:white;
        z-index:50;
        transition:.2s;
        overflow:visible !important;
        & nav{
            display:flex;
            justify-content: space-between;
            align-items: center;
            width:auto;
            height:100%;
            overflow:visible;
            & .brand-logo {
                width:30%;
                display:flex;
                align-items:center;
                justify-content: center;
                & img{
                    width:90%;
                    margin-top:1vh;
                    transition:.2s;
                }
            }
            .mobile_nav_trigger {
              display:none;
                & img{
                    width:35%;
                }
            }
            & ul{
                width:40vw;
                margin-left:6vw;
                height:100%;
                display:flex;
                justify-content:space-around;
                align-items:center;
                list-style:none;
                overflow:visible;
                & .hbgmenu{
                    z-index:100;
                    height:10vh;
                    width:10vw;
                    cursor:pointer;
                }
                & .hbgmenu a {
                    display:flex;
                    i{
                        font-size:3vw;
                        color:#2AF2ED;
                    }
                    .openMen{
                        opacity:1;
                    }
                   .closeMen{
                        display:none;
                        transform:scale(.1);
                    }
                }
                & li{
                    font-family:"Raleway", serif;
                    width:33%;
                    border-radius: 5px;
                    overflow:visible;
                    & a{
                        font-size:1.5vw;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        text-decoration:none;
                        width:100%;
                        height:100%;
                    }
                    & span{
                        position:absolute;
                        font-size:.9vw;
                        top:10vh;
                        margin-left:-3vw;
                        opacity: 1;
                        width:7vw;

                        text-align:left;
                        color:#E01958;
                        animation:shuttle .3s;
                    }

                }
                & .navLink{
                    & a{
                        color:#2B2724;
                    }
                }

                & .navLink a:hover{
                    transition:.2s;
                    transform:scale(1.05);
                }
            }
        }
    }
    @keyframes shuttle {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    .scrollNav{
        height:10vh !important;
        transition:.2s;
        -webkit-box-shadow: -1px 7px 19px -4px rgba(0,0,0,0.06);
        -moz-box-shadow: -1px 7px 19px -4px rgba(0,0,0,0.06);
        box-shadow: -1px 7px 19px -4px rgba(0,0,0,0.06);
        overflow:hidden;

    }
    .scrollNavImg{
        width:50% !important;
        transition:.2s;
    }

    @media only screen and (max-width: 450px) {
        .generic_visitor_nav {
            & nav{
               display:flex;
                justify-content:space-between;
                & .brand-logo {
                    width:60%;

                    & img{
                        width:90%;
                        margin-top:1vh;
                        transition:.2s;

                    }
                }
                & .hbgmenu{
                    z-index:100;

                    display:flex;
                    justify-content:center;
                    align-items:center;
                    list-style: none;
                }
                & .hbgmenu a {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:10vw;


                    i{
                        font-size:8vw;
                        color:#2AF2ED;
                    }
                    .openMen{
                        opacity:1;

                    }
                    .closeMen{
                        display:none;
                        transform:scale(.1);

                    }


                }

                .mobile_nav_trigger {
                    width: 20%;
                    color:#E01958;
                    font-size:6vw;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    & img{
                        width:35%;
                    }
                }

                & ul{
                    display:none;

                }
            }
        }

    }
    .next-enter-active, .next-leave-active {
        transition: opacity .2s;
    }
    .next-enter, .next-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>
