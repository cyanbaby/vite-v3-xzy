<template>
  <div class="hover-menu">
    <ul class="left-block fl">
      <li @mouseenter="handleMouseEnterLi" class="classify-item active">
        <RouterLink to="/buy/100.html">
          <div class="main-desc clear"><i title="" class="icon fl icon1"></i>
            <p class="tit fl">卡券直销</p>
          </div>
          <p class="sub-desc">运动出行 / 游戏点卡 / 音乐读书</p>
        </RouterLink>
        <div class="sub-classify-pad">
          <div class="sub-classify-wrap">
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="运动出行" class="title one-line-esplise">运动出行</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow">
              </div>
              <div class="right fl">
                <RouterLink to="/buy/100008_100057.html" class="super-name">同程旅行</RouterLink>
                <RouterLink to="/buy/100008_100037.html" class="super-name">e充电</RouterLink>
                <RouterLink to="/buy/100008_100040.html" class="super-name">Keep</RouterLink>
                <RouterLink to="/buy/100008_100042.html" class="super-name">滴滴</RouterLink>
                <RouterLink to="/buy/100008_100044.html" class="super-name">高德地图</RouterLink>
                <RouterLink to="/buy/100008_100047.html" class="super-name">哈啰出行</RouterLink>
                <RouterLink to="/buy/100008_100048.html" class="super-name">青桔单车</RouterLink>
                <RouterLink to="/buy/100008_100049.html" class="super-name">神州专车</RouterLink>
                <RouterLink to="/buy/100008_100051.html" class="super-name">盛世大联</RouterLink>
                <RouterLink to="/buy/100008_100054.html" class="super-name">首汽约车</RouterLink>
                <RouterLink to="/buy/100008_100059.html" class="super-name">携程</RouterLink>
                <RouterLink to="/buy/100008_100062.html" class="super-name">曹操专车</RouterLink>
                <RouterLink to="/buy/100008_100064.html" class="super-name">亚朵酒店</RouterLink>
                <RouterLink to="/buy/100008_100159.html" class="super-name">同城旅游卡</RouterLink>
                <RouterLink to="/buy/100008_100160.html" class="super-name">京东会员</RouterLink>

              </div>
            </div>

            <div class="sub-classify clear">
              <div class="fl left">
                <span title="游戏点卡" class="title one-line-esplise">游戏点卡</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/buy/100007_100012.html" class="super-name">QQ</RouterLink>
                <RouterLink to="/buy/100007_100015.html" class="super-name">Q币一卡通</RouterLink>
                <RouterLink to="/buy/100007_100008.html" class="super-name">完美一卡通</RouterLink>
                <RouterLink to="/buy/100007_100022.html" class="super-name">奇游电竞加速器</RouterLink>
                <RouterLink to="/buy/100007_100026.html" class="super-name">网易一卡通</RouterLink>
                <RouterLink to="/buy/100007_100182.html" class="super-name">搜狐一卡通</RouterLink>
                <RouterLink to="/buy/100007_100013.html" class="super-name">QQ超级会员</RouterLink>
                <RouterLink to="/buy/100007_100018.html" class="super-name">雷神</RouterLink>
                <RouterLink to="/buy/100007_100028.html" class="super-name">小米</RouterLink>
                <RouterLink to="/buy/100007_100029.html" class="super-name">英雄联盟</RouterLink>
                <RouterLink to="/buy/100007_100030.html" class="super-name">征途/巨人一卡通</RouterLink>
                <RouterLink to="/buy/100007_100031.html" class="super-name">中国地区苹果充值卡</RouterLink>
              </div>
            </div>

            <div class="sub-classify clear">
              <div class="fl left">
                <span title="音乐读书" class="title one-line-esplise">音乐读书</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/buy/100006_100113.html" class="super-name">QQ黄钻</RouterLink>
                <RouterLink to="/buy/100006_100118.html" class="super-name">QQ音乐</RouterLink>
                <RouterLink to="/buy/100006_100120.html" class="super-name">QQ阅读</RouterLink>
                <RouterLink to="/buy/100006_100125.html" class="super-name">wps</RouterLink>
                <RouterLink to="/buy/100006_100129.html" class="super-name">百度贴吧</RouterLink>
                <RouterLink to="/buy/100006_100131.html" class="super-name">百度文库</RouterLink>
                <RouterLink to="/buy/100006_100133.html" class="super-name">财新通</RouterLink>
                <RouterLink to="/buy/100006_100136.html" class="super-name">京东读书</RouterLink>
                <RouterLink to="/buy/100006_100137.html" class="super-name">凯叔讲故事</RouterLink>
                <RouterLink to="/buy/100006_100138.html" class="super-name">酷狗</RouterLink>
                <RouterLink to="/buy/100006_100140.html" class="super-name">酷我音乐</RouterLink>
                <RouterLink to="/buy/100006_100141.html" class="super-name">懒人听书</RouterLink>
                <RouterLink to="/buy/100006_100143.html" class="super-name">咪咕音乐</RouterLink>
                <RouterLink to="/buy/100006_100144.html" class="super-name">七猫小说</RouterLink>
                <RouterLink to="/buy/100006_100146.html" class="super-name">起点读书</RouterLink>
                <RouterLink to="/buy/100006_100148.html" class="super-name">蜻蜓FM</RouterLink>
                <RouterLink to="/buy/100006_100149.html" class="super-name">全民K歌</RouterLink>
                <RouterLink to="/buy/100006_100150.html" class="super-name">网易云黑胶会员VIP</RouterLink>
                <RouterLink to="/buy/100006_100151.html" class="super-name">网易云音乐</RouterLink>
                <RouterLink to="/buy/100006_100152.html" class="super-name">喜马拉雅</RouterLink>
                <RouterLink to="/buy/100006_100153.html" class="super-name">新浪微博</RouterLink>
                <RouterLink to="/buy/100006_100154.html" class="super-name">云听</RouterLink>
                <RouterLink to="/buy/100006_100155.html" class="super-name">掌阅</RouterLink>
                <RouterLink to="/buy/100006_100156.html" class="super-name">知乎</RouterLink>
                <RouterLink to="/buy/100006_100157.html" class="super-name">贝乐虎</RouterLink>
                <RouterLink to="/buy/100006_100158.html" class="super-name">作业帮</RouterLink>
              </div>
            </div>

            <div class="sub-classify clear">
              <div class="fl left">
                <span title="甜品饮品" class="title one-line-esplise">甜品饮品</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/buy/100005_100142.html" class="super-name">星巴克</RouterLink>
                <RouterLink to="/buy/100005_100052.html" class="super-name">80℃</RouterLink>
                <RouterLink to="/buy/100005_100056.html" class="super-name">CoCo</RouterLink>
                <RouterLink to="/buy/100005_100068.html" class="super-name">COSTA</RouterLink>
                <RouterLink to="/buy/100005_100071.html" class="super-name">DQ</RouterLink>
                <RouterLink to="/buy/100005_100077.html" class="super-name">Tims咖啡</RouterLink>
                <RouterLink to="/buy/100005_100080.html" class="super-name">巴黎贝甜</RouterLink>
                <RouterLink to="/buy/100005_100083.html" class="super-name">茶百道</RouterLink>
                <RouterLink to="/buy/100005_100086.html" class="super-name">茶颜悦色</RouterLink>
                <RouterLink to="/buy/100005_100089.html" class="super-name">歌帝梵</RouterLink>
                <RouterLink to="/buy/100005_100094.html" class="super-name">哈根达斯</RouterLink>
                <RouterLink to="/buy/100005_100101.html" class="super-name">沪上阿姨</RouterLink>
                <RouterLink to="/buy/100005_100105.html" class="super-name">乐乐茶</RouterLink>
                <RouterLink to="/buy/100005_100121.html" class="super-name">奈雪的茶</RouterLink>
                <RouterLink to="/buy/100005_100128.html" class="super-name">瑞幸咖啡</RouterLink>
                <RouterLink to="/buy/100005_100132.html" class="super-name">书亦烧仙草</RouterLink>
                <RouterLink to="/buy/100005_100135.html" class="super-name">太平洋</RouterLink>
                <RouterLink to="/buy/100005_100139.html" class="super-name">喜茶</RouterLink>
                <RouterLink to="/buy/100005_100145.html" class="super-name">一鸣真鲜奶</RouterLink>
                <RouterLink to="/buy/100005_100147.html" class="super-name">元祖食品</RouterLink>

              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="生活服务" class="title one-line-esplise">生活服务</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/buy/100004_100050.html" class="super-name">京东会员</RouterLink>
                <RouterLink to="/buy/100004_100053.html" class="super-name">便利蜂</RouterLink>
                <RouterLink to="/buy/100004_100055.html" class="super-name">叮咚买菜</RouterLink>
                <RouterLink to="/buy/100004_100058.html" class="super-name">饿了么</RouterLink>
                <RouterLink to="/buy/100004_100061.html" class="super-name">京东快递</RouterLink>
                <RouterLink to="/buy/100004_100065.html" class="super-name">美团</RouterLink>
                <RouterLink to="/buy/100004_100066.html" class="super-name">美团外卖</RouterLink>
                <RouterLink to="/buy/100004_100069.html" class="super-name">女人花</RouterLink>
                <RouterLink to="/buy/100004_100072.html" class="super-name">盛大洗车</RouterLink>
                <RouterLink to="/buy/100004_100074.html" class="super-name">顺丰快递</RouterLink>
                <RouterLink to="/buy/100004_100076.html" class="super-name">途虎洗车</RouterLink>
                <RouterLink to="/buy/100004_100079.html" class="super-name">支付宝</RouterLink>
                <RouterLink to="/buy/100004_100082.html" class="super-name">爱企查</RouterLink>
                <RouterLink to="/buy/100004_100084.html" class="super-name">云缴费</RouterLink>
                <RouterLink to="/buy/100004_100085.html" class="super-name">车点点</RouterLink>
                <RouterLink to="/buy/100004_100091.html" class="super-name">天眼查</RouterLink>
                <RouterLink to="/buy/100004_100092.html" class="super-name">货拉拉</RouterLink>

              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="美食生鲜" class="title one-line-esplise">美食生鲜</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100003_100088.html" class="super-name">盒马鲜生</RouterLink>
                <RouterLink to="/sell/100003_100063.html" class="super-name">肯德基</RouterLink>
                <RouterLink to="/sell/100003_100070.html" class="super-name">必胜客</RouterLink>
                <RouterLink to="/sell/100003_100073.html" class="super-name">凑凑火锅</RouterLink>
                <RouterLink to="/sell/100003_100075.html" class="super-name">达美乐比萨</RouterLink>
                <RouterLink to="/sell/100003_100078.html" class="super-name">呷哺呷哺 </RouterLink>
                <RouterLink to="/sell/100003_100087.html" class="super-name">汉堡王</RouterLink>
                <RouterLink to="/sell/100003_100093.html" class="super-name">来伊份</RouterLink>
                <RouterLink to="/sell/100003_100095.html" class="super-name">麦当劳</RouterLink>
                <RouterLink to="/sell/100003_100096.html" class="super-name">美运通</RouterLink>
                <RouterLink to="/sell/100003_100103.html" class="super-name">味多美</RouterLink>
                <RouterLink to="/sell/100003_100106.html" class="super-name">鲜丰水果</RouterLink>
                <RouterLink to="/sell/100003_100108.html" class="super-name">百果园</RouterLink>

              </div>
            </div>

            <div class="sub-classify clear">
              <div class="fl left">
                <span title="影视下载" class="title one-line-esplise">影视下载</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100002_100097.html" class="super-name">1905电影网</RouterLink>
                <RouterLink to="/sell/100002_100099.html" class="super-name">E票电影</RouterLink>
                <RouterLink to="/sell/100002_100104.html" class="super-name">百度网盘</RouterLink>
                <RouterLink to="/sell/100002_100109.html" class="super-name">欢银电影</RouterLink>
                <RouterLink to="/sell/100002_100110.html" class="super-name">卢米埃</RouterLink>
                <RouterLink to="/sell/100002_100111.html" class="super-name">卖座网</RouterLink>
                <RouterLink to="/sell/100002_100112.html" class="super-name">芒果TV</RouterLink>
                <RouterLink to="/sell/100002_100114.html" class="super-name">猫眼电影</RouterLink>
                <RouterLink to="/sell/100002_100115.html" class="super-name">咪咕阅读</RouterLink>
                <RouterLink to="/sell/100002_100116.html" class="super-name">搜狐视频</RouterLink>
                <RouterLink to="/sell/100002_100119.html" class="super-name">腾讯视频</RouterLink>
                <RouterLink to="/sell/100002_100122.html" class="super-name">腾讯体育</RouterLink>
                <RouterLink to="/sell/100002_100123.html" class="super-name">万达影院</RouterLink>
                <RouterLink to="/sell/100002_100124.html" class="super-name">西瓜视频</RouterLink>
                <RouterLink to="/sell/100002_100126.html" class="super-name">幸福蓝海</RouterLink>
                <RouterLink to="/sell/100002_100127.html" class="super-name">迅雷</RouterLink>
                <RouterLink to="/sell/100002_100130.html" class="super-name">优酷视频</RouterLink>
                <RouterLink to="/sell/100002_100134.html" class="super-name">中影票务通</RouterLink>

              </div>
            </div>

            <div class="sub-classify clear">
              <div class="fl left">
                <span title="商超购物" class="title one-line-esplise">商超购物</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100001_100041.html" class="super-name">沃尔玛</RouterLink>
                <RouterLink to="/sell/100001_100010.html" class="super-name">京东E卡</RouterLink>
                <RouterLink to="/sell/100001_100184.html" class="super-name">京东会员</RouterLink>
                <RouterLink to="/sell/100001_100045.html" class="super-name">永辉超市</RouterLink>
                <RouterLink to="/sell/100001_100033.html" class="super-name">万商卡</RouterLink>
                <RouterLink to="/sell/100001_100162.html" class="super-name">百联ok卡</RouterLink>
                <RouterLink to="/sell/100001_100009.html" class="super-name">家乐福</RouterLink>
                <RouterLink to="/sell/100001_100027.html" class="super-name">天虹超市卡</RouterLink>
                <RouterLink to="/sell/100001_100034.html" class="super-name">网易严选</RouterLink>
                <RouterLink to="/sell/100001_100181.html" class="super-name">大润发购物卡</RouterLink>
                <RouterLink to="/sell/100001_100183.html" class="super-name">山东一卡通</RouterLink>
                <RouterLink to="/sell/100001_100000.html" class="super-name">天猫超市卡</RouterLink>

              </div>
            </div>

            <div class="sub-classify clear">
              <div class="fl left">
                <span title="话费油卡" class="title one-line-esplise">话费油卡</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100000_100017.html" class="super-name">中国电信</RouterLink>
                <RouterLink to="/sell/100000_100039.html" class="super-name">中国移动</RouterLink>
                <RouterLink to="/sell/100000_100020.html" class="super-name">中国联通</RouterLink>
                <RouterLink to="/sell/100000_100024.html" class="super-name">中国石化</RouterLink>

              </div>
            </div>
          </div>
        </div>
      </li>

      <li @mouseenter="handleMouseEnterLi" class="classify-item">
        <RouterLink to="/sell/100.html" class="block">
          <div class="main-desc clear">
            <i title="" class="icon fl icon2"></i>
            <p class="tit fl">卡券回收</p>
          </div>
          <p class="sub-desc">运动出行 / 游戏点卡 / 音乐读书</p>
        </RouterLink>
        <div class="sub-classify-pad">
          <div class="sub-classify-wrap">
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="运动出行" class="title one-line-esplise">运动出行</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100008_100059.html" class="super-name">携程</RouterLink>
                <RouterLink to="/sell/100008_100057.html" class="super-name">同程旅行</RouterLink>
                <RouterLink to="/sell/100008_100037.html" class="super-name">e充电</RouterLink>
                <RouterLink to="/sell/100008_100040.html" class="super-name">Keep</RouterLink>
                <RouterLink to="/sell/100008_100042.html" class="super-name">滴滴</RouterLink>
                <RouterLink to="/sell/100008_100044.html" class="super-name">高德地图</RouterLink>
                <RouterLink to="/sell/100008_100047.html" class="super-name">哈啰出行</RouterLink>
                <RouterLink to="/sell/100008_100048.html" class="super-name">青桔单车</RouterLink>
                <RouterLink to="/sell/100008_100049.html" class="super-name">神州专车</RouterLink>
                <RouterLink to="/sell/100008_100051.html" class="super-name">盛世大联</RouterLink>
                <RouterLink to="/sell/100008_100054.html" class="super-name">首汽约车</RouterLink>
                <RouterLink to="/sell/100008_100062.html" class="super-name">曹操专车</RouterLink>
                <RouterLink to="/sell/100008_100064.html" class="super-name">亚朵酒店</RouterLink>
                <RouterLink to="/sell/100008_100159.html" class="super-name">同城旅游卡</RouterLink>
                <RouterLink to="/sell/100008_100160.html" class="super-name">京东会员</RouterLink>
              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="游戏点卡" class="title one-line-esplise">游戏点卡</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100007_100170.html" class="super-name">乐付天宏卡</RouterLink>
                <RouterLink to="/sell/100007_100171.html" class="super-name">智汇天宏卡</RouterLink>
                <RouterLink to="/sell/100007_100165.html" class="super-name">天宏一卡通</RouterLink>
                <RouterLink to="/sell/100007_100166.html" class="super-name">天宏畅付卡</RouterLink>
                <RouterLink to="/sell/100007_100167.html" class="super-name">天宏易充卡</RouterLink>
                <RouterLink to="/sell/100007_100188.html" class="super-name">如意宏卡</RouterLink>
                <RouterLink to="/sell/100007_100012.html" class="super-name">QQ</RouterLink>
                <RouterLink to="/sell/100007_100015.html" class="super-name">Q币一卡通</RouterLink>
                <RouterLink to="/sell/100007_100187.html" class="super-name">骏卡长虹卡</RouterLink>
                <RouterLink to="/sell/100007_100008.html" class="super-name">完美一卡通</RouterLink>
                <RouterLink to="/sell/100007_100026.html" class="super-name">网易一卡通</RouterLink>
                <RouterLink to="/sell/100007_100030.html" class="super-name">征途/巨人一卡通</RouterLink>
                <RouterLink to="/sell/100007_100031.html" class="super-name">中国地区苹果充值卡</RouterLink>
                <RouterLink to="/sell/100007_100176.html" class="super-name">玲珑宏卡</RouterLink>
                <RouterLink to="/sell/100007_100182.html" class="super-name">搜狐一卡通</RouterLink>
                <RouterLink to="/sell/100007_100185.html" class="super-name">连兑卡</RouterLink>
                <RouterLink to="/sell/100007_100013.html" class="super-name">QQ超级会员</RouterLink>
                <RouterLink to="/sell/100007_100186.html" class="super-name">汇元E福卡</RouterLink>
                <RouterLink to="/sell/100007_100189.html" class="super-name">汇元盛游卡</RouterLink>
              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="音乐读书" class="title one-line-esplise">音乐读书</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100006_100113.html" class="super-name">QQ黄钻</RouterLink>
                <RouterLink to="/sell/100006_100118.html" class="super-name">QQ音乐</RouterLink>
                <RouterLink to="/sell/100006_100120.html" class="super-name">QQ阅读</RouterLink>
                <RouterLink to="/sell/100006_100125.html" class="super-name">wps</RouterLink>
                <RouterLink to="/sell/100006_100129.html" class="super-name">百度贴吧</RouterLink>
                <RouterLink to="/sell/100006_100131.html" class="super-name">百度文库</RouterLink>
                <RouterLink to="/sell/100006_100133.html" class="super-name">财新通</RouterLink>
                <RouterLink to="/sell/100006_100136.html" class="super-name">京东读书</RouterLink>
                <RouterLink to="/sell/100006_100137.html" class="super-name">凯叔讲故事</RouterLink>
                <RouterLink to="/sell/100006_100138.html" class="super-name">酷狗</RouterLink>
                <RouterLink to="/sell/100006_100140.html" class="super-name">酷我音乐</RouterLink>
                <RouterLink to="/sell/100006_100141.html" class="super-name">懒人听书</RouterLink>
                <RouterLink to="/sell/100006_100143.html" class="super-name">咪咕音乐</RouterLink>
                <RouterLink to="/sell/100006_100144.html" class="super-name">七猫小说</RouterLink>
                <RouterLink to="/sell/100006_100146.html" class="super-name">起点读书</RouterLink>
                <RouterLink to="/sell/100006_100148.html" class="super-name">蜻蜓FM</RouterLink>
                <RouterLink to="/sell/100006_100149.html" class="super-name">全民K歌</RouterLink>
                <RouterLink to="/sell/100006_100150.html" class="super-name">网易云黑胶会员VIP</RouterLink>
                <RouterLink to="/sell/100006_100151.html" class="super-name">网易云音乐</RouterLink>
                <RouterLink to="/sell/100006_100152.html" class="super-name">喜马拉雅</RouterLink>
                <RouterLink to="/sell/100006_100153.html" class="super-name">新浪微博</RouterLink>
                <RouterLink to="/sell/100006_100154.html" class="super-name">云听</RouterLink>
                <RouterLink to="/sell/100006_100155.html" class="super-name">掌阅</RouterLink>
                <RouterLink to="/sell/100006_100156.html" class="super-name">知乎</RouterLink>
                <RouterLink to="/sell/100006_100157.html" class="super-name">贝乐虎</RouterLink>
                <RouterLink to="/sell/100006_100158.html" class="super-name">作业帮</RouterLink>
              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="甜品饮品" class="title one-line-esplise">甜品饮品</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100005_100121.html" class="super-name">奈雪的茶</RouterLink>
                <RouterLink to="/sell/100005_100128.html" class="super-name">瑞幸咖啡</RouterLink>
                <RouterLink to="/sell/100005_100139.html" class="super-name">喜茶</RouterLink>
                <RouterLink to="/sell/100005_100052.html" class="super-name">80℃</RouterLink>
                <RouterLink to="/sell/100005_100056.html" class="super-name">CoCo</RouterLink>
                <RouterLink to="/sell/100005_100068.html" class="super-name">COSTA</RouterLink>
                <RouterLink to="/sell/100005_100071.html" class="super-name">DQ</RouterLink>
                <RouterLink to="/sell/100005_100077.html" class="super-name">Tims咖啡</RouterLink>
                <RouterLink to="/sell/100005_100080.html" class="super-name">巴黎贝甜</RouterLink>
                <RouterLink to="/sell/100005_100083.html" class="super-name">茶百道</RouterLink>
                <RouterLink to="/sell/100005_100089.html" class="super-name">歌帝梵</RouterLink>
                <RouterLink to="/sell/100005_100094.html" class="super-name">哈根达斯</RouterLink>
                <RouterLink to="/sell/100005_100101.html" class="super-name">沪上阿姨</RouterLink>
                <RouterLink to="/sell/100005_100105.html" class="super-name">乐乐茶</RouterLink>
                <RouterLink to="/sell/100005_100132.html" class="super-name">书亦烧仙草</RouterLink>
                <RouterLink to="/sell/100005_100135.html" class="super-name">太平洋</RouterLink>
                <RouterLink to="/sell/100005_100145.html" class="super-name">一鸣真鲜奶</RouterLink>
                <RouterLink to="/sell/100005_100147.html" class="super-name">元祖食品</RouterLink>
              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="生活服务" class="title one-line-esplise">生活服务</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100004_100050.html" class="super-name">京东会员</RouterLink>
                <RouterLink to="/sell/100004_100053.html" class="super-name">便利蜂</RouterLink>
                <RouterLink to="/sell/100004_100055.html" class="super-name">叮咚买菜</RouterLink>
                <RouterLink to="/sell/100004_100058.html" class="super-name">饿了么</RouterLink>
                <RouterLink to="/sell/100004_100061.html" class="super-name">京东快递</RouterLink>
                <RouterLink to="/sell/100004_100065.html" class="super-name">美团</RouterLink>
                <RouterLink to="/sell/100004_100066.html" class="super-name">美团外卖</RouterLink>
                <RouterLink to="/sell/100004_100069.html" class="super-name">女人花</RouterLink>
                <RouterLink to="/sell/100004_100074.html" class="super-name">顺丰快递</RouterLink>
                <RouterLink to="/sell/100004_100076.html" class="super-name">途虎洗车</RouterLink>
                <RouterLink to="/sell/100004_100079.html" class="super-name">支付宝</RouterLink>
                <RouterLink to="/sell/100004_100082.html" class="super-name">爱企查</RouterLink>
                <RouterLink to="/sell/100004_100084.html" class="super-name">云缴费</RouterLink>
                <RouterLink to="/sell/100004_100085.html" class="super-name">车点点</RouterLink>
                <RouterLink to="/sell/100004_100091.html" class="super-name">天眼查</RouterLink>
                <RouterLink to="/sell/100004_100092.html" class="super-name">货拉拉</RouterLink>
              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="美食生鲜" class="title one-line-esplise">美食生鲜</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100003_100088.html" class="super-name">盒马鲜生</RouterLink>
                <RouterLink to="/sell/100003_100063.html" class="super-name">肯德基</RouterLink>
                <RouterLink to="/sell/100003_100070.html" class="super-name">必胜客</RouterLink>
                <RouterLink to="/sell/100003_100073.html" class="super-name">凑凑火锅</RouterLink>
                <RouterLink to="/sell/100003_100075.html" class="super-name">达美乐比萨</RouterLink>
                <RouterLink to="/sell/100003_100078.html" class="super-name">呷哺呷哺
                </RouterLink>
                <RouterLink to="/sell/100003_100087.html" class="super-name">汉堡王</RouterLink>
                <RouterLink to="/sell/100003_100093.html" class="super-name">来伊份</RouterLink>
                <RouterLink to="/sell/100003_100095.html" class="super-name">麦当劳</RouterLink>
                <RouterLink to="/sell/100003_100096.html" class="super-name">美运通</RouterLink>
                <RouterLink to="/sell/100003_100103.html" class="super-name">味多美</RouterLink>
                <RouterLink to="/sell/100003_100106.html" class="super-name">鲜丰水果</RouterLink>
                <RouterLink to="/sell/100003_100108.html" class="super-name">百果园</RouterLink>
              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="影视下载" class="title one-line-esplise">影视下载</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100002_100097.html" class="super-name">1905电影网</RouterLink>
                <RouterLink to="/sell/100002_100099.html" class="super-name">E票电影</RouterLink>
                <RouterLink to="/sell/100002_100104.html" class="super-name">百度网盘</RouterLink>
                <RouterLink to="/sell/100002_100109.html" class="super-name">欢银电影</RouterLink>
                <RouterLink to="/sell/100002_100110.html" class="super-name">卢米埃</RouterLink>
                <RouterLink to="/sell/100002_100111.html" class="super-name">卖座网</RouterLink>
                <RouterLink to="/sell/100002_100112.html" class="super-name">芒果TV</RouterLink>
                <RouterLink to="/sell/100002_100114.html" class="super-name">猫眼电影</RouterLink>
                <RouterLink to="/sell/100002_100115.html" class="super-name">咪咕阅读</RouterLink>
                <RouterLink to="/sell/100002_100116.html" class="super-name">搜狐视频</RouterLink>
                <RouterLink to="/sell/100002_100119.html" class="super-name">腾讯视频</RouterLink>
                <RouterLink to="/sell/100002_100122.html" class="super-name">腾讯体育</RouterLink>
                <RouterLink to="/sell/100002_100123.html" class="super-name">万达影院</RouterLink>
                <RouterLink to="/sell/100002_100124.html" class="super-name">西瓜视频</RouterLink>
                <RouterLink to="/sell/100002_100126.html" class="super-name">幸福蓝海</RouterLink>
                <RouterLink to="/sell/100002_100127.html" class="super-name">迅雷</RouterLink>
                <RouterLink to="/sell/100002_100130.html" class="super-name">优酷视频</RouterLink>
                <RouterLink to="/sell/100002_100134.html" class="super-name">中影票务通</RouterLink>
              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="商超购物" class="title one-line-esplise">商超购物</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100001_100041.html" class="super-name">沃尔玛</RouterLink>
                <RouterLink to="/sell/100001_100010.html" class="super-name">京东E卡</RouterLink>
                <RouterLink to="/sell/100001_100184.html" class="super-name">京东会员</RouterLink>
                <RouterLink to="/sell/100001_100045.html" class="super-name">永辉超市</RouterLink>
                <RouterLink to="/sell/100001_100033.html" class="super-name">万商卡</RouterLink>
                <RouterLink to="/sell/100001_100162.html" class="super-name">百联ok卡</RouterLink>
                <RouterLink to="/sell/100001_100009.html" class="super-name">家乐福</RouterLink>
                <RouterLink to="/sell/100001_100027.html" class="super-name">天虹超市卡</RouterLink>
                <RouterLink to="/sell/100001_100034.html" class="super-name">网易严选</RouterLink>
                <RouterLink to="/sell/100001_100181.html" class="super-name">大润发购物卡</RouterLink>
                <RouterLink to="/sell/100001_100183.html" class="super-name">山东一卡通</RouterLink>
                <RouterLink to="/sell/100001_100000.html" class="super-name">天猫超市卡</RouterLink>
              </div>
            </div>
            <div class="sub-classify clear">
              <div class="fl left">
                <span title="话费油卡" class="title one-line-esplise">话费油卡</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAAXNSR0IArs4c6QAAAF1JREFUKFN10N0JgDAMBGDTjY5M4xo6Rx1DlxFuoyAJWGqIfbwvf1QAbCSPJT1R1dvMzowBXpxRAKyttT2jeFBhQIV/0KtRneSVl0foo+dzRzjAzD5hgJ/6ts+/8gD9TlH+NAdcrgAAAABJRU5ErkJggg=="
                  alt="" title="" class="right-arrow" />
              </div>
              <div class="right fl">
                <RouterLink to="/sell/100000_100017.html" class="super-name">中国电信</RouterLink>
                <RouterLink to="/sell/100000_100039.html" class="super-name">中国移动</RouterLink>
                <RouterLink to="/sell/100000_100020.html" class="super-name">中国联通</RouterLink>
                <RouterLink to="/sell/100000_100024.html" class="super-name">中国石化</RouterLink>
              </div>
            </div>
          </div>
        </div>

      </li>

      <li @mouseenter="handleMouseEnterLi" class="classify-item">
        <RouterLink to="/discounts/100.html" class="block">
          <div class="main-desc clear">
            <i title="" class="icon fl icon3"></i>
            <p class="tit fl">官方快充</p>
          </div>
          <p class="sub-desc">话费充值 / 影视会员 / 音频读书</p>
        </RouterLink>
      </li>

      <li @mouseenter="handleMouseEnterLi" class="classify-item">
        <RouterLink to="/cardrecharge/11.html" class="block">
          <div class="main-desc clear">
            <i title="" class="icon fl icon4"></i>
            <p class="tit fl">卡券直充</p>
          </div>
          <p class="sub-desc">话费卡 / 加油卡 / 电商账号</p>
        </RouterLink>
      </li>

      <li @mouseenter="handleMouseEnterLi" class="classify-item">
        <RouterLink to="/chargesending/100.html" class="block">
          <div class="main-desc clear">
            <i title="" class="icon fl icon5"></i>
            <p class="tit fl">代充放单</p>
          </div>
          <p class="sub-desc">其它会员 / 外卖餐饮 / 音频读书</p>
        </RouterLink>
      </li>

      <li @mouseenter="handleMouseEnterLi" class="classify-item">
        <RouterLink to="/chargerecive/100.html" class="block">
          <div class="main-desc clear">
            <i title="" class="icon fl icon6"></i>
            <p class="tit fl">代充接单</p>
          </div>
          <p class="sub-desc">其它会员 / 外卖餐饮 / 音频读书</p>
        </RouterLink>
      </li>

      <li @mouseenter="handleMouseEnterLi" class="classify-item">
        <RouterLink to="/tasksending" class="block">
          <div class="main-desc clear">
            <i title="" class="icon fl icon7"></i>
            <p class="tit fl">平台任务-放单</p>
          </div>
          <p class="sub-desc">话费任务</p>
        </RouterLink>
      </li>

    </ul>
  </div>
</template>

<script setup>
const handleMouseEnterLi = (event) => {
  const lis = document.querySelectorAll('.left-block li');
  lis.forEach((li) => {
    li.classList.remove('active');
  });
  event.target.classList.add('active');
}

</script>

<style lang="scss">
.hover-menu {
  height: 468px;
  position: relative;
  width: 1200px;
  z-index: 1;

  .left-block {
    background: #fff;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, .12);
    box-sizing: border-box;
    height: auto;
    padding: 12px 0;
    position: relative;
    width: 300px;

    .classify-item {
      border-right: 4px solid transparent;
      cursor: pointer;
      height: 74px;
      // position: relative;

      &:hover {
        background: #fff7e5;
        border-right: 4px solid #ffdb62;
      }

      &:hover .icon1 {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAldJREFUSEvVlstrE1EUxr9v0sZYunCRqgsLEUsy/gFCxRZaXEidaaUgPhZFCi7d6ULQpS6Kbl2KLrrwsahpmtiNVKigrlRU8mjFLLpQE0EwxUg6c2Sm5MlkMhmh0Lucc8/53e+ec88ZYgcXd5CF3QOTFfTgj3oCf8sfOJ3/1emWaspsx83YJZCHtp3kPbVsvF0AeTLQj77wcxAjEMmA5XFq+W9uwDpsMTqCQGC1abNROc6p9TetAZpAVaMHYB22ENmHYOgjUFVmR7lCLX2vEeYI8gh0LBBJxW5AlFuALEPwqFMuHO1ECX2ZOMexVbU7w5KqDjDhC9J0DbhOPT3nDktEw1AChf+HmTPUs/OuMLsWk2oBYNg/UMrY/DnAc4WSF1gCoO4fhnlq6ZlG/7YdRFLqHQiv+YaZxjQnc8+8wRKxs1CUp/5gUsSP8iBn82WPsKgKJZD2BRPzJvXs7VZf10YsS0d/g+iHGBchimsrqgVmpUj9yyenQ7rDkuprgMOAOUEtu+xLZYOTO6xaJCJFWB3ByxJuUE+Pdq9sQY0giNWWftkBKRvUMoNdw+zHbXUT8BQUc53a2lunIBI/fAC9oTFUyi955uv3dqdxv8YHkRD2h9Zqymhc4Onc46b2Fz8yhEDw3XYhoQQxjnEyl+lamSTUMShcqTvKQ2qZ2SZYSr0K4d3atzZlb9ndldkzbq/11g7awRTzMiey95tgi0PDCPRaQ7cHwBaMyqjTwO0Is3NmFckenofIZ2qZJcec2VNeOQnDfMGp3CtfOfNS6d3s2T2/ct2osvb+A1Xy3Bzw8CeHAAAAAElFTkSuQmCC) no-repeat 0 0 !important;
        background-size: 100% 100%
      }


      &:hover .icon2 {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAlNJREFUSEvNlsFrE0EUxr833WhsIhRsQaFgD8FsDj2ICBZyaG5pN1ELXgQPCgYKHtSTCv0DLHovnlQ8CIoUrOtJaMGDQgV7c1IrLIhQioeCYJdmO092Y9Jku8m6zVKc287OvN9+b95+bwgHOOgAWfg/YGzmTgJqBkyZbuqpJAtsZotgnEGqOksFOJ3WByrjV5lhJBPLAI6HpZmML8SmfhWgx2BeAtmXybDWg/YFw8zcHIDpMJD7vg3mTjBLCKdEk2vf/PuDYW/1RTCN/wsM2DoBdTgPIV4217vAmj1GU9Zma4wYYHwJG7aJoeQDENLN4ErNUnlVxg2zILhIE9VqWCb2q8ytOK0luOOdFfCzOUc7t8n4utK7MsYoVC2NPu05QCOBihQXqCyXeoCxDYWJRhBeODUIIT4DNLwHGANsmgz5qBGYXwyl0X9sGUR63DAHG1tH6ZplN2FvsldA4lnMaXTTp077S5kXoeF39gYg7u5xm57SyPwQKXnP9T6eHxlAInmBSvKpZxru86HkTTDdAmHAU9oTrJ6rFTBmQCjV7YyfoF9WGub7F/oBID0OWMDx8CcodZHKqz/qio9895wkorI8wBVsY/dfETUNmnYHENfbqAzXA+8DKIGQ30cakSZDnvVL8co9NfgrzJqiKXPbx6QsBAVlM8fxwczcPMBFAIFNsKNFtX7BTm2Mzq99DLer15lz6Eu895ltqJi2fpaSo/4rQscLDy/o4xCY88o42niHba7QlLT820JvV57ZOmK3KXYDb9rrrXYWGRZNVPfVocrihP0BYvIjKxJ4oQ4AAAAASUVORK5CYII=) no-repeat 0 0 !important;
        background-size: 100% 100%
      }


      &:hover .icon3 {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAZNJREFUSEvllr1PU1EYh5/f7UeqdOLDQMLQoUNNZGcDEha8MJA40JHZgcU/gI5EjRrdNIENAiEMAgskDrCyOVxlkBGII7GN7b0vqRVLA7YNvSWEnvGc9zxPzu985IhbbLpFFx0is9W+JA+755DSrcerAmafNOkdXLBqYrTNzBrSs9ZFfwnGGUUb0rR3VO75J7MvRPmVOQxNVAXl5HpLNbI2SK4gqytbTw+SiO6FL7W3cr+9q41xI5Mirh9tkM3L9XJ3XBbYGA7vQU+AEkGQJaLnmEb/n4jdcGXGPv7vWSKxz4gFUBfwoX70N5WVqWa7WJDFcUZAK0C0TbL8gNyj48tw284sY5oJOUYrABWRX8rixF4iGwSSoN5wZbJXmCr7c5o/oTfegxOJEikm8WNfw5VdplVO5SIo1fhetnJA/tCDCdBHUDnGBu062WIqwaMH+UZTK+Pl/VOiqVrZCz31Xl95iG3r8Q4w3hSkuaISgT+kqe/eNbJUP0q8wRhujlW36if4ObmHmxdVHfIHCSG6uoj7G+M5e8+hHIAzVeIAAAAASUVORK5CYII=) no-repeat 0 0 !important;
        background-size: 100% 100%
      }


      &:hover .icon4 {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAgdJREFUSEvllj9rFFEUxc+ZHY1oY2ERuwWzcQJCkiqxEHbBIskY/4BFREHT6Yew8kOYTgUlFoJKnCSQYrcQjIhEIZAxu8J2prCwUUyYfUdG3V2Tmc3ujMs2mXLevff33rl3zhuihw97yMIBgcnL9gN99yArD8pOLbEYgKYEbN+lW92q12nIqCJsfHfWQJ5JDdmbKK3jmD/KAoJwqQl7lTsP2itdA9ULGRU47Zd2wzznFsAHXYdBs3T9hwlh+grhKcjbAMJ+BpDmQMwAPNF6k+lgq3T9s/KG7gMIgXN0N+7Ic94AHE8GW3DysFjcV0ZpAjLvYVnvsPNzFIeOjIFc3jcnrmdhgrzcCJSZB+lECkjPYOkFpz490fPscV6pftPi6eswvAzyaky8D9au0S1/iIx+/YVenhqAfbgcSTa1EU5vfoxM98LgMKxMo2BjPdjJ8dLnyr/xsXYlb+gLgP5YeagSp/yCFp0ixHwLCbfobpzcuxaBtTwZ8BhQBRaqnPQfacm5CYMswAEANyLQdifT8uAwAisc72jPEIzTLb+NyOjlxgB7NbZntpnhRFP6poN0Mo2/v8yOZGyy/8tBksLSOcjfzQoVZMwFmPD7Yra9vaVykPZl4yPiYJ32LCmzVjvHi5uvdxtxeJ/9cNaALt5n0DqOxtxnf+yqRzd1UnXSxB+Qv6s00iTJ+QXf8+ocqHW8gwAAAABJRU5ErkJggg==) no-repeat 0 0 !important;
        background-size: 100% 100%
      }


      &:hover .icon5 {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAblJREFUSEvtlr9LW1EUxz/fJP7o1kFQsIMZYtLN0bEFXXyWVnBUrLuDQqGDgx06tFRo/wHBwUFwUUw6CXYsdMn4ooMZIlTo0Mm2GnvKi0SjeXl9vgchg3e6w7n3c77nfM/lijYutZFFZ8KskBmB5PPmSlzsyDkshqlQS2W2l+7nV1dKzw6Oa/uznhlMq02Xyl7R/WdDY0cntjs8yIPzqrf3gzfBLJ+bA1aR+sDKcty0fc7tY3rSMnvZF024T62QOwINgVXAFuSUdhrP3IBdlir1DUhdBkWF1Q5XObOMptxyHXgTls8uo8Tb62zqsOxH0EjrvlhRE6Wla2X1SJuX4677wwq5FdCb27Awza/V4aqM0WC/Mb6GhSFGQb0Nyd5FWWhMi8A7lbGdsLqla9bHG4P5IHzcnnm29dz0EvQTbDtQq2kR8fC+Z7fnzAXeA68x/UC29h/LfADvmYs0ZxSRLWL6BPYd8S64Z2yCBqLCYnq/Y+cspi4IUrabnSaR2IrNuPJHdVyTh3v+r/4+KU4fe7AX8YF/N+SUZhvv8f0WWD4zhpKPIgPtotKoyFdZ5MtDHuzMr1zI5APD/gHoouYcm4fYawAAAABJRU5ErkJggg==) no-repeat 0 0 !important;
        background-size: 100% 100%
      }


      &:hover .icon6 {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAklJREFUSEvNlj9IlHEYxz/f9zSPFJIkaGgQOvwzVdBg0HKT5R3RkEVY5IGLg9TSEC0NjQcSOAQN3WAgYZCl5Chk0Ngg+B4FOTRI6dafl+t8n3hfFb3zzvPO4+gZ3/f3/D7P3+/7igaaGsiiAGYvT7TR2vEQo6/GIDwcm9RA9kUp/0LYXPczcEZqBO24WT6p5Oe54nuKYD1fQZ2Hh9mEku5YY2BYRgk39d/CVsGeVi6pYsCtwnPVZmY2raQ7WAlmb7t6cCLLh4OF3rZSCYapHdFeB1hFVJkD1ZaxVs5mReo9jeaBMuDPkJPLEc+DllMY/UhtSrgP6jX6n8jnBmmWYZFhTIG8NSG5yA/k6sMB5OogCmJL/Fq/wNHjd5HzKIQUm9k0v9dTuv7j5+5X1cpVHsudw2nux5Tet60lVqc6WBCxvDGIBhoaLQ2zNdA34Cz4V5XIzmyfqw6GpUCtwESZrFbxN+JE1IE5ixRlVx3MtzgOd0DDGItgq0jXNqfdXOTFcVqO4TsLwMngmZJub22ZhTAbCr95srQG3Ps22z0OurQHtBVA7TDzR5AT9GqrjP49JbJPwnvnu86wEZkPM9qxSSWWb9eWGbyGP6MFA2KWho0FaJpCtBX20r+sRDYIILTCns32vkdc3Gek85j1oXCJyw3J1s02pQH3Zvk9exPrw2l+t1fFd7lsD4KiQxiPS6+AZfjujSq14pWFhbV/3hmlPbq77nsT/bu+FqiDzZyOEWm6gZzzYFHEEvn8K1358rGiXO2rCHV42dCf1H9fug4rgAzNQgAAAABJRU5ErkJggg==) no-repeat 0 0 !important;
        background-size: 100% 100%
      }


      &:hover .icon7 {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAklJREFUSEvNlj9IlHEYxz/PddWRLYFtQUZGCi5BNwRJOjSdaUFEQw5BQ2ODg0GD0g1CLdJyg3AEDg2Gi9fk4ODgEBQUdJbiDQ1SCg5mL6f3fuO9rvPe+3++IT7LC+/v976f53m+398f4xDDDpHF0YEpdfk5uG8t9u1jeQeU7IhwNvKCnc2ndu/ndjMdqluZUt0CjVksPV4Bm+3q4ISt4arfbqUXWobpXecNFH4JtANvwEaBBFIfRsT3Q2kKC8XBjYM9QDiYEhZbnqwF9lWmVNcaWEd+smkBWV/xWf6HWuN72Us2tLpSDVgG89pWiIPC6rS1NgxlMGZAYRR6UpGpWAR5xmnH7H5x/GAwQGxhnAbCVXWQNjDz9N2PA8OasVj5nCMOk4Msyq6aWqwcJwl2lRBx9Pu1xTLrrblRmsFoDia7TYgJpC1gFGyaU1/GrZ+9UmgdN7YomGkE18YKhgJpHnOGS6v8fzCYR0Qwru+nqQxZ54rdyXgV+3f9v3thIfK2z7elUXjLoh1Xw1goWazs31cl7qxembRNW/pMec+rUZW6cB5OPkZ2F6PTP0ef+eFE7WHGqV8Z+g5+gSthzjUU+VSxsGGJXxs3y4+eYJqJFY65E3ljYOeKyey5URtafl+xd5e+8O36jZTaF3cdYxrZSPFVLtdrg18XG8EGgFfFY6Y5YAJ4BEwBG8CzWgdqoDtI4WrwIZ/TzmbU00hzF3toW01XM1cwWKprAGyW3G6vDa4sNWpEMNhcdw+5rFPrZK6rWaPMgo4HqqxV+B/tfxorn2kFdQAAAABJRU5ErkJggg==) no-repeat 0 0 !important;
        background-size: 100% 100%
      }

      .main-desc {
        padding-left: 40px;

        .icon {
          display: inline-block;
          height: 27px;
          margin-right: 4px;
          margin-top: 12px;
          width: 27px;
          background-size: 100% 100%;
        }


        .icon1 {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAmxJREFUSEvVlU9oE1EQxr/ZDTSHHqpU9GChB1HPBaFiCn01ImK7IVJqdmmVgDe96UGwhxz0IHrtUSIYkqpgmo1gwcoTKqgX/6BiUY89KEYUzGGl2YxsSMI2bDbJFgrd486b7/e+N/PmEbbxo21kYefAUikZOjjCx/7Z9D4ZF386nVLTmZN4aATnQdjvJBHzu4Q2UWgnsPBA9u8K4wkBEQBrlgWRnBHf/YBNWPaRjFAIq+7FNnB0VhOvWgVaQI1wR2ATls7LgT4FH6jurKZAuKRPiQU3rA2oK6Bngyya8hoD18FYZmCxUy0848TlL2+okEqJSiPuCcuYclIFioEgm5Ou6pq46QvLFuUgMX5uFcZszxmxaMYX5gRzpnRgg0GBDFi/Ley5OCPK3cCcY5wMCgOQ0TUx585vO0FyprwF4EpQGNt23IhHl7qCZZZWplVFfRgQVrJ+YSiZFFZXsGxRHibG5yAwAuYTmrjRmus7iHMF+ReE/ipDV6rwHUUN4Q1G6dwZ8dFrk/4wU74EMMqMU0ZMLAdx2dUx1tu/1iTMKBHQbGE/KBPWDU2M9e4sL4dZweqmednBHjPWjZgY6hnmJDjThKs4qYT4m3564rWXSLawspcUdZyr9nMjFv3Rbj++NUunZbhvN742nRES+pS47xa7V5AHQsBbp5HAKPMGjhjTYq1nZ7m8HIcK6Uq8q2si6RbKFuRlItxu/GNg3vBoeyfu7ywvB8Jq7a7tq4td0DVxxw3LmHJURe3RDQGo2MCY14PbEVbryLwchoqzNuxPs1r0sWfNzKcRotBx5sozQzvxIlDNtnqvepogOxr2H6NL2xxfeivvAAAAAElFTkSuQmCC) no-repeat 0 0;
        }

        .icon2 {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAmpJREFUSEvNljFoE1EYx//fe1fNEKFIB4WCDg5dOhQRLGTos0uUNDFQghc7GDBQcFAnFTpktOgqxalK20QUCYl0asoVHBSU2DERhIIIHSwEXE69uycXenpNL7kmF4K3vbvvfb/7f++9//cIA3xogCz8H7C19c0zZLIFAs51Uq/GhciXKlEQP/+5isVcThjt4j2Vrb7WRvkQPgA45VdmNS5orbx5g4EtA9jSdaiZlNj1mucJK5S0JRDm/UD29xaY/apGihW7dmX6S+t8b1hZ0wBMHQWm6zg9dMyMcMZfueJruonJTFI03DkCwyTk7M89Wg+N4BEkwk5y+QuL6VlR6ysMEjscMppKXKr7VaJXZfaOU1zJ7bGt4rvzzjJx93pSbAdW9tvAOFOMMJdKAYSznopMCDUptnqGSUAnE5edJPk32ggsfCLC6CFgH2Dz6bh46iR+8lILnww1z+NYv2GGvocTmYzQncT5UmWOiK/0tYx2+UCYSM8c3Mq5nKaMTeCWJNw/5DYBy/i4XsUD2/uWi9rwcYZEOiGe26rscUjBbSlxh4DhptKAMEiJbYJcACi2b2fP6lVkHfNtQjneNdcwKMxzbSQ+cmZdTc1Mf2vCGL6CEO4WFrFgZZnJ/p4Vg0HhhHsE3HSDpUSDCA8lECMg0ksZw2pcXGhVs7/df/hZU7fK7PYhvJIWyprsG+xFWStaQJQkPJtgW4ty/YEJTM7FxXtfu1otb1zkUN62mK2vGHc/q1cx3npFaHvhWSluTClcWfK0og5YSaiQgayaFDtH6tTuINtsyfjXFDvJ0xvYddtZ17BuaucXO9B74x8r1Q0rFMgydAAAAABJRU5ErkJggg==) no-repeat 0 0;
        }

        .icon3 {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAaVJREFUSEvllr8vLFEUxz9n7iQ2sY1QkCgUktc8jUrHoBG/IhExaNQKjT9gtxQEQUWyCrHi5UVkdSS3eK993SskCkpEKbHB3CuWxQa7Gzs2ErecnPl8cr7nzM0IZTxSRhffRLayraNVESYFGkuO15JWyq4N9bT/y7JyYkzu6l8IgyWLsgDLJYYmf8A7uX/0JIvFtPujmaPQRI8gg4mP9nWs58jClrzFe+ps47euVy5/wpYKLAz3e4s5nSV3dAOK47BlCDG/14t/cVmAh2IJ+AncBibwlaMmgLZ3E/loZxb+BpZxV0gZzLQjTiWW5bzRf1R2D7WWAxx8rG0VZAtwP0WWVtSNd3unL+GbKZ0Uy3CoMVpIC2REAfgOzAjUA1GgJlQZMGuUyczn+tw5q6wx1TcOrgQSFeR/2LJn3sNWJoCGgt9lKQvyuCRdwKpIJsb85y1ZIqEjkWquCr2bkT3ML1JUrWVqpN+be3URb6b0vlg6i4EUWXNrr2kaGfQOX8kS27q2ooJ5EVqKhOUruwgI4mN9nXvZom/yDxJCdAVurs82vOCXdWZ3qKiZHNMxwiQAAAAASUVORK5CYII=) no-repeat 0 0;
        }

        .icon4 {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAhtJREFUSEvllk9rE0EYxn/vJmL15MFDvfVQ0YNg66X1IGSqB0GbGBHJNhbNrX4IIdAPYW9R2rhBhDQpQkHs5CBYEf+BB8UcvNmDB29WyO7Ikj/U7abJJqUeOqdlZt7nN/PMzPuucIBNDpDFIYEVnurRoyMsiiEBxIewuGGE2p9tHuRuq622TsfGfF7Hz1zgA3BuCEgw9PPX90zm86rhD3RgxVV9xbJ4sY+gppSLstOq9i+s+vKehVXYb5iHl8smLz+KCvuJUMKw0DrPBsIShgxwstsiB4Vt2kl10anohwgLGJbslLrvVPVrYDoSbLmsE/EYei8bLctcdY28E8PbbZfJ40fMlOfJ+l4xDRc1HzwzP6BY1hNWDAc4u0vA8EwsVjOzqlgo6xO5tPpVWtNZ43ED4VYI8IvnYmfT6uOuq9/uWK7o8bjwLRgsYiYyszOfgv2ltY3zxkhHsD3eMJyeT6n6zvmh6cqp6h/AaBd7anZSKaeqfcv9xx/WtuykOrVrwcGObjsDVhDqxuP7XEo9flLRd8ViDMM4cCeo03NnLUtKoWcWM9P2tZk3QVHn+cYUrmyGnZmIyey0vmNjP7exJdiPjR126G0s9p9BIsEGfdTN1RrqMcx1F1lHGOuV3oaD9VIPjIfCnLJO0CODROQ0jWhwae6meuV//5965pP9Sn1shEXTfKxDVWqB2u9ulXoQi6LGHJK/q6i2RJ3/F2tb5RyHFrbEAAAAAElFTkSuQmCC) no-repeat 0 0;
        }

        .icon5 {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAchJREFUSEvtlrFrU1EUh79z84SOHQQFHdqh0DE4OfpsdfO1hVKaRrHdHSoIHRzM4KBY0H+g0KFJSjs0SbeSch0Fl4xuZqhQwcGx0PSe8mojaXx9vLxIKOKdznDO+c7vnHMvVxjgkQGyuJqw4s5e1njXpro74VrH1fzMw0aSDl2qrFSt3/CMeHOPJr6FNmQei7DanVSVF3CysTA1+X1rd/9Wy2krtKPgf8BKVfsUYVXgOtDMBf5ouWYtcC+m+o+5wPfLNfsVGFHlwIg+mw/uVztjLsCKOzZrMnwGvHOnVLDz2BYnjOVm/GYbeAFWqtmXAq87qjmDbdbse4XsZcoEGvOB/7ytrO3ncEv5YGI9Elbeta9QCt2wJMMPffqCKRwJfEoKU7grMJRWWVJOpF+vbRworL3S4eqHy7IUR+9rZihNDOs4FhV+iqESB1NlWWD4/8y679kXh3trMCvAD4dbi2ujwbzj1zN3dnraRlUaiC6j8kGEQ0XfxMEE2QRupoL1tfe9KvuHYJX6LCaz3a+i3zNzPMhP+/XIV79QsN74HbYVpv8CcCMX+E8680R+C4oVO4lxt1MDnTnoVBSpLHXyhIFX8yuXsPhYt1PnJv0cUeWtOwAAAABJRU5ErkJggg==) no-repeat 0 0;
        }

        .icon6 {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAldJREFUSEvNlj9oU1EUh7/zkpAHLdji4uDg0EEnFRwiuNwiVMG+OFib11ZswKVI0cVBXBwcCyJUEBxaMNYgFUyKKAi+ggqODgWz1cGhQ+3k8Gqbd+TFFpq0LzF/CN713HO+e84953ev0MUlXWRRBXv80uvtt7knkGrlEKr4FuQyafP8IP8q2ELReypwoxVQlY/qJTc9+KY2ThXsRdFbBY61DRNm3WEz3R0YzLuOyf63sDWEJw1LqgwAEzX7msxMWXTTZqQRbGHJOy7Kt/ZgobfyvRFMoU+EvvZhjUjR9ibL2Doo9OwsTMEXZV6hIAElfwvfTnJUhCGgN+OYux1pfVW+lmEkkQhUt6xJhZQIcZSSheZG04OfG8rVPyrIyobP2X6bWwL3gfi+wMrixibZm1fNr722ZuVqW7Y5HcQYEmGm7rUeMDrNwZRFf5PppM2qgB0BW1flhwinBL2ccQYLu/uaggXlIGvFrR6U2QjQmv7GxBJ6OBD5RE12TcEoY4hxHZgEwmChpF3ZAZd8H9OT1ENlkWXgCFByHXOipcxCmMYY33nzZlzH3MkXvYcKFw4AhYw2YOHDKti7ZRThdmbYPAqj5pc+nFSVdzsZ7SaTcx1zraXMFF5v+kzVNMgMqssgeYTevXepWr44lj4fHqCyau/sI3CuTktvB5amLJVUnSapuKuQHxs2buSc5YrvUxbxt8I+Fd/rU2mEZJJxhAcRIzDv/2QqmzV+JCw0zM15tt1X6aTItbHFeqgOzwreQEIYBc7o37lbKcOrCcd8aShXdRWhA8auflL/APbQBSuS8NINAAAAAElFTkSuQmCC) no-repeat 0 0;
        }

        .icon7 {
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAltJREFUSEvNlj9oE2EUwH+vFzGDi5hRsINuLoIZBIv9hm6tNSKh0WYIOAguDh0qOKSYQdBFXDoUghKISP/QgFv1HDp0EFLUQbHYDg4OtWQoeIEkTy6ampyXyz8ofctx9757v+/9/T7hEEUOkcXRgeVX7Ye1Gku3YmbTG4Fs1g6HIzze+8X9u3Gz302EAj3LF2xFSCcmzJzXWH7FHsZimyomETPveoa9Kry9UlV5AkRUeCkwizKvwqgo4WaDIiwoZFAywLQKzpAwPzVhnrYDt3iWX7W3EYb/LnZ3Owo0nl4bvvqKci45abb8gK0wN2z/pC9YUFjbw5QdhEWBkMI9704V1kXYVIiIMnWgD8hhkGeoUhLhBBDyC4squyJEWnT9wrqpsP/WHGmYglOpED0mdNWsWGRRLiJkHIfnqbj50Vs1Kot0CVPlmgiPFEqizNYg97XIXDptKi292fxSnxh9iiozAmn+FJRbXGvlMslmLwOrsReua1ykPmUuH/yn7Dg1LqRipuR+awurhwTqi4JElRBCRGokEbINz/z6zh+m7H8pctIbcz/o0us3Z8rVoTui3EA461nzyflJNJUyTrBnyneBlgR7YU6ZS+EwH93B7dFtWA5jcc/RM1jOlC3cKlTSIpxuylU0MWneezcXNPU7pauhd3sqB8w0PmiFkZvXzXogLLe8Nm5Z1rOmY6YzUJlHuI2yAOwiPGg3+Qe6g7hXg+OnKLpG9hyi7vXgxbJ9/tsHPvsV10CwXMEet2ClSmVk+urYRqcwDARzvRALp93JHJizTjsbVD+QZ73CfwPeHQordqXrbgAAAABJRU5ErkJggg==) no-repeat 0 0;
        }

        .tit {
          color: #666;
          font-family: PingFang SC-Medium, PingFang SC;
          font-size: 18px;
          font-weight: 400;
          margin-top: 14px;
        }
      }

      .sub-desc {
        color: #999;
        font-family: PingFang SC-Regular, PingFang SC;
        font-size: 12px;
        font-weight: 400;
        margin-top: 6px;
        padding-left: 44px;
      }

      .sub-classify-pad {
        display: none;
        height: 400px;
        left: 300px;
        top: 0;
        position: absolute;
        width: 900px;

        .sub-classify-wrap {
          background: #fff;
          box-shadow: 0 0 12px 1px rgba(0, 0, 0, .12);
          box-sizing: border-box;
          min-height: 542px;
          padding: 16px 0 32px;
          width: 100%;

          .sub-classify {
            line-height: 30px;
            padding-top: 16px;

            .left {
              align-items: center;
              box-sizing: border-box;
              display: -webkit-box;
              display: -webkit-flex;
              display: -moz-box;
              display: -ms-flexbox;
              display: flex;
              padding-left: 40px;
              padding-right: 30px;

              .title {
                color: #282828;
                display: inline-block;
                font-family: PingFang SC-Regular, PingFang SC;
                font-size: 16px;
                font-weight: 400;
                text-align: center;
                width: 90px;
              }

              .right-arrow {
                height: 12px;
                margin-left: 7px;
                width: 6px;
              }
            }

            .right {
              box-sizing: border-box;
              overflow: hidden;
              padding-right: 20px;
              width: -webkit-calc(100% - 173px);
              width: calc(100% - 173px);
              word-break: break-all;

              .super-name {
                color: #282828;
                font-family: PingFang SC-Regular, PingFang SC;
                font-size: 14px;
                font-weight: 400;
                padding-right: 22px;

                &:hover {
                  color: var(--link-active);
                }
              }
            }
          }
        }
      }

      &.active .sub-classify-pad {
        display: block;
      }

    }
  }
}
</style>