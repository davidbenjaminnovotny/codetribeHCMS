<template>
    <div>
    <footer class="footer">
        <div class="footer__logo-box">
            <img class="footer__logo" src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Android-512.png" alt="">
        </div>
        <div class="row">
            <div class="col">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Contact Us</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Privacy Policy</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div class="col">
                <div class="footer__copyright">
                    Built my <a href="#" class="footer__link">Edwin Torres</a> for this example. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni possimus officiis quo voluptas dolorum architecto, voluptatibus numquam incidunt deleniti reiciendis corrupti doloremque illo aliquid totam consequatur blanditiis ducimus et cum.
                </div>
            </div>
        </div>
    </footer>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .footer {
        border: 1px solid gray;
        padding: 1rem;
        height: 30vh;
        width: 100vw;
        color: white;
        background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.8),
                rgba(0, 0, 0, 0.8)
        );
    }

    .footer__logo-box {
        display: block;
        padding: 2rem;
        text-align: center;
    }

    .footer__logo {
        width: 8vw;
    }

    .footer__navigation,
    .footer__copyright {
        width: 80%;
        border-top: 1px solid #999;
        padding: 1.5rem 0;
        display: inline-block;
        margin: auto;
        text-align:left;
    }

    .footer__list {
        list-style: none;
    }

    .footer__item {
        display: inline-block;
    }

    .footer__item:not(:last-child) {
        margin-right: 1rem;
    }

    .footer__link {
        color: #eee;
        text-decoration: none;
        display: inline-block;
        text-transform: uppercase;
        font-size: 0.8rem;
    }

    .footer__link:active,
    .footer__link:hover {
        color: #11dd76;
        box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.5);
        transform: scale(1.2) translateY(-0.08rem);
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .col {
        font-weight: 300;
        width: 50%;
        text-align:center;
    }

</style>
