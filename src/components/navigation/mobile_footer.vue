<template>
    <div id="mobile_footer">
        <footer class="footer">
            <div class="top">
                <img src="../../assets/img/core/footerLogo.png">
            </div>
            <div class="middle">
                <div class="row">
                    <h3>Bored?</h3>
                    <div class="middle_border"></div>
                    <div class="middle_link_container">
                        <router-link to="/">Gallery</router-link>
                        <router-link to="/">Join the Party</router-link>
                        <router-link to="/">5 Min Website</router-link>
                        <router-link to="/">Start Your Tribe</router-link>
                        <router-link to="/">Start Coding</router-link>
                        <router-link to="/">Projects</router-link>
                        <router-link to="/">Social IMPACT</router-link>
                        <router-link to="/">Represent</router-link>
                    </div>
                </div>
                <div class="row">
                    <h3>Stuff</h3>
                    <div class="middle_border"></div>
                    <div class="middle_link_container">
                        <router-link to="/">School Signup</router-link>
                        <router-link to="/">The Curric</router-link>
                        <router-link to="/">Mobile Features</router-link>
                        <router-link to="/">USP</router-link>
                        <router-link to="/">Partners</router-link>
                        <router-link to="/">Media Pack</router-link>
                        <router-link to="/">Invest</router-link>
                        <router-link to="/">Translate</router-link>
                    </div>
                </div>
                <div class="row">
                    <h3>Us</h3>
                    <div class="middle_border"></div>
                    <div class="middle_link_container">
                        <router-link to="/">About</router-link>
                        <router-link to="/">Cool Peeps</router-link>
                        <router-link to="/">Hiring</router-link>

                    </div>
                    <div class="link social_links">
                        <a href="" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="" target="_blank"><i class="fab fa-google"></i></a>
                        <a href="" target="_blank"><i class="fab fa-medium"></i></a>
                        <a href="" target="_blank"><i class="fab fa-linkedin"></i></a>


                    </div>


                </div>

            </div>
            <div class="bottom">
                <h1>CODETRIBE.com</h1>
                <h4>77 Water Street, New York City 10051</h4>
                <p>© Copyright {{currentYear}} Ultimate Growth</p>
            </div>
            <div class="wedge">
                <h3><a>HOW WE'RE CHANGING THE WORLD</a> - Check out our partner: <a href="www.codejika.com" target="_blank">CodeJIKA.com</a></h3>
            </div>
        </footer>
    </div>
</template>

<script>
        export default {
            name: "mobile_footer",
            mounted(){
                this.getYear()
            },
            data(){
                return{
                    boxShow:false,
                    infoMessage: "",
                    currentYear: ""


                }
            },
            methods:{
                showInfo: function (msg, e) {
                    if (!this.boxShow) {
                        this.boxShow = true
                        let box = document.querySelector(".infoWindow");
                        let cont = document.querySelector(".middle")
                        let arrow = document.querySelector(".infoWindow_arrow")
                        console.log(e.target.getBoundingClientRect().top)
                        console.log(this.boxShow)
                        if (e.clientX > cont.offsetWidth / 2) {
                            box.style.left = e.target.getBoundingClientRect().left  + "px";
                            box.style.top = e.target.getBoundingClientRect().top - 25 + "px";
                            arrow.style.left = e.target.getBoundingClientRect().left;
                            arrow.style.top = e.target.getBoundingClientRect().top;
                        } else {
                            box.style.left = e.target.getBoundingClientRect().left - 10 + "px";
                            box.style.top = e.target.getBoundingClientRect().top - 25 + "px";
                            arrow.style.left = e.target.getBoundingClientRect().left;
                            arrow.style.top = e.target.getBoundingClientRect().top;
                        }

                    } else {
                        this.boxShow = false
                    }

                    this.infoMessage = msg

                },
                closeInfo(){
                    this.boxShow = false
                },
                getYear(){
                    this.currentYear = new Date().getFullYear()
                }
            }
    }
</script>

<style scoped lang="scss">
#mobile_footer{
    height:90vh;

}
    footer{

        height:90vh;
        width:100vw;
        display:flex;
        flex-direction:column;
    }

    .top{
        height:15%;
        width:100%;
        background:yellow;
        & img{
            width:40%;
        }
    }
    .middle{
        height:60%;
        overflow:visible ;

        & .row{
            height:33%;
            display:flex;
            justify-content:space-around;
            align-items:center;
            overflow:visible;

            & h3{
                transform:rotate(-90deg);
                width:30%;
                text-align:center;
                height:33%;

            }
        }
        & .middle_border{
            width:.5vw !important;
            background:black;
            height:70%;
        }
& .row:nth-child(3) .middle_link_container{
    width:30%;
}
        & .middle_link_container{
            display:flex;
            width:100%;
            flex-wrap:wrap;
            text-align:left;
            margin-left:3vw;


            & a{
                padding:5px;
                width:45%;
                color:black;
                text-decoration: none;
            }
        }
        & .social_links{
                overflow:visible;
            width:70%;
            & a{
                font-size:2.5em;
                padding:15px;
                color:#E01958;
                overflow:visible;
                text-decoration: none;
            }
        }
    }
    .bottom{
        font-family: "Raleway", serif;
        display:flex;
        flex-direction:column;
        justify-content: center;
        height:15%;
        width:100%;
        background:#2AF2ED;
        & h1{
            font-size:5vw;
        }
    }
.wedge{
    width:100%;
    background:#404040;
    font-size:3vw;
    height:10%;
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
</style>
