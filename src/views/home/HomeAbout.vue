<template>
  <div class="about-us">
    <h5 class="tit-wrap com-b-a">关于我们</h5>
    <p class="desc">闲置转让、快充 、赚钱、省钱</p>
    <div class="container">
      <div class="con">
        <p>
          闲赚侠（www.xianzhuanxia.com）是国内规模最大的卡券交易平台，业务有卡券交易、虚拟产品充值、平台任务。
          一直以来用心为用户服务，所涉及的产品过百种，覆盖市面上绝大多数卡券及产品，类型包括但不限于：话费充值卡、加油卡、游戏点卡、商超购物卡、美食出行卡、影音视频卡等。
        </p>
        <p>
          闲赚侠竭诚为个人及企业提供一站式的卡券交易和虚拟充值等服务，帮您实现快速将闲置卡券资源价值最大化，以及可以用低价格实现快充省钱等等，让您买卡和卖卡都无忧。
        </p>
        <p>更多有趣、有价值、能省钱、能赚钱的功能等待您的体验~</p>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss">
.about-us {
  background: url(https://www.xianzhuanxia.com/_nuxt/img/about-us.20f917a.png) no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  height: 460px;
  padding-top: 42px;
  width: 100%;

  .con p {
    color: #333;
    font-family: PingFang SC-Regular, PingFang SC;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 20px;
  }

  .desc {
    color: #888;
    font-family: PingFang SC-Regular, PingFang SC;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-top: -28px;
    text-align: center;
  }

  .tit-wrap {
    box-sizing: border-box;
    color: #333;
    font-family: PingFang SC-Medium, PingFang SC;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 34px;
    margin-top: 56px;
    overflow: hidden;
    padding: 0 16px;
    position: relative;
    text-align: center;

    &:before {
      margin-left: -98px;
      transform: rotate(180deg);
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAUCAYAAAAeLWrqAAAAAXNSR0IArs4c6QAAAsFJREFUWEftmM1LVGEUh59z7x2tsOyDINMiKyUwxJwpXRlGQglBYDcjqGgTEUmbVi6s/yFa9A8Elhs3LVq5iGjhx8L8ABWnTUQJan7M6J2ZE97xY2zmOloK6swLl1nMec97zsPvfc/hCFu0dJD9TBPAYkIq6NmiY7aNW9mKSLSL28BTYJ/rX/kgAVq24qzt4nNDIHXIPkqOVYGKD3W6pfj9j8REtJMClJcY+JMSVB5KgN7tkvhmx7EukKqPfIxO1iJGNYjhBiFEIdomp1oHVBG6uIXQtKzCvyNVmiXAx81OYLv4SwtSRxpKMHLrgUNJQQtj/HzbjkULyoU1k8pUkNpn55FnXiNmnE8JKBYVQr1lhPuPIexJq4xMA6kLl3bYrsS06kBSA3LG8gn11BCdKUBnv6eFGC84mXO1dcTOxzQbUOOkpwrDX8uYC14CteIVOQsyXjIWl76zTQLWE0SOpFZYVJjquE5kqmjV/1mQi7V3CWTQLkZ9Dzyv6dzgaWYHrya3NRtXpHbxGuE+ggIOSsT9TfetZWck7F/LThLsYus81yFCLg4Le5c+E4ccHM7iiBBbUeRQ4xks854nyFBPOeFv1ZsCsnsxgaWkdhXITr+PwyXPECMvJczI2AGmP9ko5v9ebe3hDXDXLUG7TZFu3Ri+cwKhDsOj2MwFCwn1XUadFdjZN3L1G5moMh22/Z7tj4Z9zHZVM//rnFussiC9QbrqTNeQz40WEeqvITb5O9tHJrQ/XjB0pLEUw6gHOZhcaGamGW/PBW4mtlIpfWVSQ+4Jc2FoEZy4AmbVqqHFfLRNSlsHtJMqhGag0FOdWZAraNwxmmlVYCSP0fQze/HRhOHOIpNXjOdykY51PQM70Cjt9GejOekX/Ph4ARxf3quEyeGGlDO+UX87xX7TQbqFKq7OxxjUooxj8Eoq6dwpUP4lzj+nAZcklFFnlAAAAABJRU5ErkJggg==) no-repeat;
      background-size: 100% 100%;
      content: "";
      height: 20px;
      position: absolute;
      top: 10px;
      width: 82px;
    }

    &:after {
      margin-left: 16px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAUCAYAAAAeLWrqAAAAAXNSR0IArs4c6QAAAsFJREFUWEftmM1LVGEUh59z7x2tsOyDINMiKyUwxJwpXRlGQglBYDcjqGgTEUmbVi6s/yFa9A8Elhs3LVq5iGjhx8L8ABWnTUQJan7M6J2ZE97xY2zmOloK6swLl1nMec97zsPvfc/hCFu0dJD9TBPAYkIq6NmiY7aNW9mKSLSL28BTYJ/rX/kgAVq24qzt4nNDIHXIPkqOVYGKD3W6pfj9j8REtJMClJcY+JMSVB5KgN7tkvhmx7EukKqPfIxO1iJGNYjhBiFEIdomp1oHVBG6uIXQtKzCvyNVmiXAx81OYLv4SwtSRxpKMHLrgUNJQQtj/HzbjkULyoU1k8pUkNpn55FnXiNmnE8JKBYVQr1lhPuPIexJq4xMA6kLl3bYrsS06kBSA3LG8gn11BCdKUBnv6eFGC84mXO1dcTOxzQbUOOkpwrDX8uYC14CteIVOQsyXjIWl76zTQLWE0SOpFZYVJjquE5kqmjV/1mQi7V3CWTQLkZ9Dzyv6dzgaWYHrya3NRtXpHbxGuE+ggIOSsT9TfetZWck7F/LThLsYus81yFCLg4Le5c+E4ccHM7iiBBbUeRQ4xks854nyFBPOeFv1ZsCsnsxgaWkdhXITr+PwyXPECMvJczI2AGmP9ko5v9ebe3hDXDXLUG7TZFu3Ri+cwKhDsOj2MwFCwn1XUadFdjZN3L1G5moMh22/Z7tj4Z9zHZVM//rnFussiC9QbrqTNeQz40WEeqvITb5O9tHJrQ/XjB0pLEUw6gHOZhcaGamGW/PBW4mtlIpfWVSQ+4Jc2FoEZy4AmbVqqHFfLRNSlsHtJMqhGag0FOdWZAraNwxmmlVYCSP0fQze/HRhOHOIpNXjOdykY51PQM70Cjt9GejOekX/Ph4ARxf3quEyeGGlDO+UX87xX7TQbqFKq7OxxjUooxj8Eoq6dwpUP4lzj+nAZcklFFnlAAAAABJRU5ErkJggg==) no-repeat;
      background-size: 100% 100%;
      content: "";
      height: 20px;
      position: absolute;
      top: 10px;
      width: 82px;
    }
  }
}
</style>