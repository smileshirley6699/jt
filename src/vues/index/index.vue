<template>
    <div>
        <div class="header">
            <ul class="header-nav">
                <li><a class="header-link" href="http://localhost:8080">j-tools</a></li>
            </ul>
        </div>
        <div class="left-menu">
            <ul>
                <li><router-link to="/components/text" >text</router-link></li>
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
        border-bottom: 2px solid #428bca;
    }
    .content {
        min-height: 450px;
        padding: 10px;
    }
    .header-link {
        padding: 15px;
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
    }
    .left-menu a {
        font-size: 14px;
        text-decoration: none;
        color: #428bca;
        padding: 10px;
        line-height: 20px;
        display: block;
    }
    .content {
        position: relative;
        left: 280px;
    }
</style>