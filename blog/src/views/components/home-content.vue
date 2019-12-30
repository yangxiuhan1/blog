<template>
    <div class="home-content">
        <div v-for="(v,k) in arr" :key="k">
            <div v-if="k % 2 === 0" class="main-content">
                <div class="picture">
                    <img src="./../../assets/image/test-pic.jpg" alt="">
                </div>
                <div class="article">
                    <div class="date">
                        二月 26日,2019
                    </div>
                    <div class="txt">
                         <div class="title">
                             <!-- {{}} -->
                        </div>
                         <div class="txt-content"></div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div v-else class="main-content">
                <div class="article">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="picture">
                    <img src="./../../assets/image/test-pic.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            arr: [
                {1: 123},
                {1: 123},
                {1: 123},
                {1: 123},
                {1: 123},
                {1: 123},
                {1: 123},
                {1: 123},
                {1: 123},
                {1: 123},
                {1: 123}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .home-content {
        .main-content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 550px;
            padding: 0 400px;
            margin-top: 40px;

            .picture {
                width:780px;
                height: 550px;
                border: 1px solid orange;

            img {
                    width: 100%;
                    height: 100%;
                }
            }
            .article {
                width: 600px;
                height: 500px;
                background-color: #fff;
                font-size: 12px;
            }
        }

    }
</style>
