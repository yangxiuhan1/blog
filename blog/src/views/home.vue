<template>
    <div class="loginPage">
        <div :class="['bgc' , bgi , 'animated fadeIn']"></div>
        <div class="wrap">
            <div class="title">
                <h1 class="title-txt">ASH's Paradox</h1>
                <span class="title-ps">Did U Ever Feel The Pain?</span>
                <span class="title-ps">In The Morning Rain</span>    
            </div>
            <div class="navigator">
                <div :class="['navigator-title' , {'navigator-highLight': k === highLight} ]" v-for="(v,k) in navigatorArr" :key="k" @click="navigateClick(v,k)">{{v.name}}</div>
            </div>
            <div class="content">
                <c-home-content></c-home-content>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigatorArr: [
                { name: 'ASH', bgiStyle: "bgi1" },
                { name: 'Flange', bgiStyle: "bgi2" },
                { name: 'Montage', bgiStyle: "bgi3" },
                { name: 'Paranoid', bgiStyle: "bgi4" }
            ],
            bgi: 'bgi1',
            highLight: '',
        }
    },
    methods: {
        test() {
            console.log('test')
        },
        show() {
            document.querySelector('.bgc').style.display = 'block'
        },
        close() {
            document.querySelector('.bgc').style.display = 'none'
        },
        navigateClick (v,k) {
            this.bgi = v.bgiStyle
            this.highLight = ''
            this.highLight = k
            document.querySelector('.bgc').style.display = 'none'
            setTimeout(() => {
                document.querySelector('.bgc').style.display = 'block'
            }, 1);
        }
    },
    components: {
        'c-home-content' : () => import('./components/home-content')
    }

}
</script>
<style>
    @import './../common/css/common.less';
    @import './../assets/iconfont/iconfont.svg';
</style>
<style lang="less" scope>
    .loginPage {
        .bgc {
            position: fixed;
            height: 100%;
            width: 100%;
            z-index: 0;
            background-size: cover;
        }
        .bgi1 {
            background-image: url('./../assets/image/home.jpg');
        }
        .bgi2 {
            background-image: url('./../assets/image/2.jpg');
        }
        .bgi3 {
            background-image: url('./../assets/image/3.jpg');
        }
        .wrap {
            .title {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                .title-txt {
                    color: #D75455;
                    font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;
                    font-weight: lighter;
                    background-repeat: no-repeat;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    font-size: 40px;
                }
                .title-ps {
                    color: #D75455;
                    font-size: 12px;
                }
            }
            .navigator {
                margin-top: 20px;
                width: 100%;
                display: flex;
                justify-content: space-around;
                .navigator-title {
                    font-size: 14px;
                    &:hover {
                        font-weight: bold;
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
                .navigator-highLight {
                    font-weight: bold;
                }
            }
            .content {
                margin-top: 80px;
                // border: 1px solid skyblue;
                width: 100%;
                height: 500px;
            }
        }
    }
</style>