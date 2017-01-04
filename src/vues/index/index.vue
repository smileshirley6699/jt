<template>
    <div>
        <div class="header">
            <ul class="header-nav">
                <li><a class="header-link" href="http://localhost:8080">j-tools</a></li>
            </ul>
        </div>
        <div class="left-menu">
            <ul>
                <li><router-link to="/components/text" >输入框</router-link></li>
                <li><router-link to="/components/radio" >radio</router-link></li>
                <li><router-link to="/components/checkbox" >checkbox</router-link></li>
                <li><router-link to="/components/select" >select</router-link></li>
                <li><router-link to="/components/button" >button</router-link></li>
                <li><router-link to="/components/switch" >switch</router-link></li>
                <li><router-link to="/components/tab" >tab</router-link></li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="footer">
            <span>Copyright &copy; 2016-2017</span>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
<style>
    .header-nav{
        width: 960px;
        margin: 0 auto;
        left: 0;
        right: 0;
    }
    .header {
        border-bottom: 1px solid #eaeefb;
    }
    .content {
        min-height: 450px;
        padding: 30px;
    }
    .header-link {
        padding: 20px;
        line-height: 20px;
        display: block;
        position: relative;
        font-size: 24px;
        text-decoration: none;
        color: #428bca;
    }
    .left-menu {
        position: fixed;
        width: 260px;
        top: 70px;
        text-align: right;
        z-index: 1;
    }
    .left-menu:after {
        position: absolute;
        content: "";
        border-right: 1px solid #eaeefb;
        top: 0;
        bottom: 0px;
    }
    .left-menu a {
        font-size: 14px;
        text-decoration: none;
        color: #5e6d82;
        padding: 10px 50px 10px 10px;
        line-height: 20px;
        display: block;
    }
    .left-menu a:hover, .left-menu a:active, .router-link-active{
        color: #20a0ff !important;
    }
    .content {
        position: relative;
        padding-left: 280px;
    }
    .footer {
        height: 100px;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        border-top: 1px solid #eaeefb;
    }
    .footer span{
        position: relative;
        top: 40px;
    }
</style>