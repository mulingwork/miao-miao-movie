<template>
    <div class="profile">
        <Header>
            <template v-slot:title>
                <li>我的喵喵</li>
            </template>
        </Header>
        <div class="login-info">
            <span>用户名</span>
            <input type="text">
            <span>密码</span>
            <input type="password">
            <button>登陆</button>
        </div>
        <div class="other">
            <span>立即注册</span>
            <span>找回密码</span>
        </div>
    </div>
</template>


<script>
import Header from '@/components/common/Header/Header'

export default {
    components: {
        Header
    }
}
</script>


<style lang="less" scoped>
@color: #f0f0f0;
@themeColor: #f25744;
@bgColor: rgba(242, 87, 68, .1);


.profile{
    padding: 2.25rem 0;
}
.login-info{
    margin-top: .5rem;
    span{
        color: @themeColor;
        font-size: .8rem;
        padding-left: .5rem;
    }
    input{
        width: 98vw;
        padding-left: 2vw;
        background-color: @bgColor;
        margin: .5rem 0;
        border: none;
        outline: none;
        line-height: 2rem;
        font-size: .7rem;
    }
    button{
        width: 90vw;
        margin: .5rem auto;
        line-height: 2.25rem;
        display: block;
        border: none;
        outline: none;
        background-color: @themeColor;
        font-size: 1rem;
        color: @color;
        border-radius: .3rem;
    }
}
.other{
    display: flex;
    justify-content: space-around;
    font-size: .7rem;
    color: @themeColor;
}
</style>