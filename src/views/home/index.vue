<template>
  <div class="home page-container">
    <!-- 导航栏 -->
    <div class="nav-bar">
      <div class="logo"></div>
      <van-button
        class="search-btn"
        round
        type="info"
        size="small"
        icon="search"
        >搜索</van-button
      >
    </div>
    <!-- /导航栏 -->

    <!-- 频道列表 -->
    <van-tabs v-model="active">
      <van-icon
        class="wap-nav"
        slot="nav-right"
        name="wap-nav"
        @click="isChannelEditShow = true"
      />
      <van-tab
        v-for="channel in userChannels"
        :title="channel.name"
        :key="channel.id"
      >
        <!-- 文章列表 -->
        <article-list :channel="channel" />
        <!-- /文章列表 -->
      </van-tab>
    </van-tabs>
    <!-- /频道列表 -->
    <!-- 频道编辑弹窗 -->
    <van-popup
      v-model="isChannelEditShow"
      position="bottom"
      closeable
      close-icon-position="top-left"
      :style="{ height: '100%' }"
    >
      <!--这里使用 v-model 绑定了 active 数据
子组件在内部需要声明 value 属性接收使用
子组件需要在内部通过 this.$emit('input', 数据) 修改该数据-->
      <channel-edit
        :user-channels="userChannels"
        v-model="active"
        @close="isChannelEditShow = false"
      />
    </van-popup>
    <!-- /频道编辑弹窗 -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/channel'
import ArticleList from './components/article-list'
import ChannelEdit from './components/channel-edit'
import { getItem } from '@/utils/storage'
export default {
  name: 'HomePage',
  components: {
    ArticleList,
    ChannelEdit
  },
  props: {},
  data () {
    return {
      active: 0, // 控制标签页的激活项
      userChannels: [], // 用户频道列表
      channels: [],
      isChannelEditShow: false // 频道编辑页面显示隐藏
    }
  },
  computed: {

  },
  watch: {},
  created () {
    this.loadUserChannels()
  },
  mounted () {},
  methods: {
    // 简单一句话：优先使用本地的，没有就使用线上的
    async loadUserChannels () {
      // 1. 定义一个变量用来存储频道列表
      let channels = []

      // 2. 获取本地存储的频道列表
      const localUserChannles = getItem('user-channels')

      // 3. 如果本地存储有，就使用本地存储的
      if (localUserChannles) {
        channels = localUserChannles
      } else {
        // 4. 如果本地存储没有，则请求获取接口推荐的频道列表
        const { data } = await getUserChannels()
        channels = data.data.channels
      }

      // 5. 最后，把数据赋值到当前组件中
      this.userChannels = channels
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    width: 100%;
    height: 46px;
    background-color: #3196fa;
    z-index: 1;
    .logo {
      background: url("./logo.png") no-repeat;
      background-size: cover;
      width: 40px;
      height: 45px;
    }
    .search-btn {
      background-color: #5babfb;
      width: 50%;
    }
  }
  .wap-nav {
    position: sticky;
    right: 0;
    display: flex;
    align-items: center;
    background-color: #fff;
    opacity: 0.8;
    font-size: 26px;
  }
}
</style>
