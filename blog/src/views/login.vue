<template>
    <div class="loginPage">
        <div class="bgc"></div>
        <div class="wrap">
            <div class="title">
                <h1 class="title-txt">ASH's Paradox</h1>
                <span class="title-ps">Did U Ever Feel The Pain</span>
                <span class="title-ps">In The Morning Rain</span>    
            </div>
            <!-- <div>
                <input type="text" @click="test" @blur="test" placeholder="123"/>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        test() {
            console.log('test')
        }
    }
}
</script>
<style>
    @import './../common/css/common.less';
</style>
<style lang="less" scope>
    .loginPage {
        .bgc {
            background-image: url('./../assets/image/login-bgi.jpg');
            position: fixed;
            height: 100%;
            width: 100%;
            z-index: 0;
            background-size: cover;
        }
        .wrap {
            .title {
                .title-txt {
                    color: #D75455;
                    font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;
                    font-weight: lighter;
                    background-repeat: no-repeat;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                }
                .title-ps {
                    // font-size: 30px;
                }
            }
        }
    }
</style>