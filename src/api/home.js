import http from '@/api/http.js'

export function getSellCard(query) {
  return Promise.resolve({
    code: 0,
    msg: '操作成功',
    result: [
      {
        id: 100017,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/5604b281f9f84248b4256b49966e17e2.png',
        maxDiscount: 100,
        minDiscount: 97.9,
        name: '中国电信',
        price: null,
        state: 1
      },
      {
        id: 100039,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/e229d8827226492e92b156d455386e17.png',
        maxDiscount: 100,
        minDiscount: 93.33,
        name: '中国移动',
        price: null,
        state: 1
      },
      {
        id: 100020,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/e72c62cb474b4fd59b315643df4590ea.png',
        maxDiscount: 99.3,
        minDiscount: 10,
        name: '中国联通',
        price: null,
        state: 1
      },
      {
        id: 100170,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230530/8be5f1becfeb4e0caca9558b5b9aaf52.png',
        maxDiscount: 95.43,
        minDiscount: 95.36,
        name: '乐付天宏卡',
        price: null,
        state: 1
      },
      {
        id: 100041,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/e1331388df8c46649a4e6ffd98ad54aa.png',
        maxDiscount: 99.5,
        minDiscount: 79,
        name: '沃尔玛',
        price: null,
        state: 1
      },
      {
        id: 100184,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230927/6a5f46a06c69487d8b4da628b6b41998.png',
        maxDiscount: 50,
        minDiscount: 26,
        name: '京东会员',
        price: null,
        state: 1
      },
      {
        id: 100010,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/4a1035477824436a931c0911a1d5c6e7.png',
        maxDiscount: 97,
        minDiscount: 92.5,
        name: '京东E卡',
        price: null,
        state: 1
      },
      {
        id: 100045,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/cc28ac4277be47ba8b339b071c1b7e78.png',
        maxDiscount: 93.1,
        minDiscount: 40,
        name: '永辉超市',
        price: null,
        state: 1
      },
      {
        id: 100121,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/de40176917144ea29652636b7248c709.png',
        maxDiscount: 99.5,
        minDiscount: 6.25,
        name: '奈雪的茶',
        price: null,
        state: 1
      },
      {
        id: 100059,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/f9be707e122b490b846c5e9d0b4603b4.png',
        maxDiscount: 99.5,
        minDiscount: 88.25,
        name: '携程',
        price: null,
        state: 1
      },
      {
        id: 100033,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/0944d8247c0e4c0aa9da4c13416a3b7d.png',
        maxDiscount: 99.5,
        minDiscount: 94,
        name: '万商卡',
        price: null,
        state: 1
      },
      {
        id: 100162,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230324/ac2869f33c2e40e0ae69b45980553d64.png',
        maxDiscount: 99.5,
        minDiscount: 95,
        name: '百联ok卡',
        price: null,
        state: 1
      },
      {
        id: 100009,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/0400cfa8bfe64187b40844ad9a4c1ef8.png',
        maxDiscount: 99.5,
        minDiscount: 20,
        name: '家乐福',
        price: null,
        state: 1
      },
      {
        id: 100171,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230529/d3826bd55b904b19a9b8a06dde4ca58d.png',
        maxDiscount: 92.6,
        minDiscount: 92.5,
        name: '智汇天宏卡',
        price: null,
        state: 1
      },
      {
        id: 100188,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20231025/641ac4c9af8948d9b0054d42f5ae76e7.png',
        maxDiscount: 95.4,
        minDiscount: 95.4,
        name: '如意宏卡',
        price: null,
        state: 1
      },
      {
        id: 100165,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230530/9051d0022f9744fbb41f9086bd02e47e.png',
        maxDiscount: 85.6,
        minDiscount: 52.67,
        name: '天宏一卡通',
        price: null,
        state: 1
      }
    ]
  })
  return http({
    url: '/api/index/hot/sellCard',
    method: 'get',
    params: query
  })
}

export function getBuyCard(query) {
  return Promise.resolve({
    code: 0,
    msg: '操作成功',
    result: [
      {
        id: 100041,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/e1331388df8c46649a4e6ffd98ad54aa.png',
        maxDiscount: 100,
        minDiscount: 92,
        name: '沃尔玛',
        price: null,
        state: 1
      },
      {
        id: 100184,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230927/6a5f46a06c69487d8b4da628b6b41998.png',
        maxDiscount: 100,
        minDiscount: 30,
        name: '京东会员',
        price: null,
        state: 1
      },
      {
        id: 100010,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/4a1035477824436a931c0911a1d5c6e7.png',
        maxDiscount: 100,
        minDiscount: 97.5,
        name: '京东E卡',
        price: null,
        state: 1
      },
      {
        id: 100045,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/cc28ac4277be47ba8b339b071c1b7e78.png',
        maxDiscount: 100,
        minDiscount: 90,
        name: '永辉超市',
        price: null,
        state: 1
      },
      {
        id: 100121,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/de40176917144ea29652636b7248c709.png',
        maxDiscount: 100,
        minDiscount: 56,
        name: '奈雪的茶',
        price: null,
        state: 1
      },
      {
        id: 100059,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/f9be707e122b490b846c5e9d0b4603b4.png',
        maxDiscount: 100,
        minDiscount: 97.2,
        name: '携程',
        price: null,
        state: 1
      },
      {
        id: 100033,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/0944d8247c0e4c0aa9da4c13416a3b7d.png',
        maxDiscount: null,
        minDiscount: null,
        name: '万商卡',
        price: null,
        state: 1
      },
      {
        id: 100162,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230324/ac2869f33c2e40e0ae69b45980553d64.png',
        maxDiscount: null,
        minDiscount: null,
        name: '百联ok卡',
        price: null,
        state: 1
      },
      {
        id: 100009,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/0400cfa8bfe64187b40844ad9a4c1ef8.png',
        maxDiscount: 100,
        minDiscount: 81.5,
        name: '家乐福',
        price: null,
        state: 1
      },
      {
        id: 100024,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/19ba0388a4a84645b7bee85aa31a0560.png',
        maxDiscount: 100,
        minDiscount: 95,
        name: '中国石化',
        price: null,
        state: 1
      },
      {
        id: 100015,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/476a214e7068466bbb78485ae506620d.png',
        maxDiscount: 100,
        minDiscount: 92,
        name: 'Q币一卡通',
        price: null,
        state: 1
      },
      {
        id: 100027,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/33a3e2b02d8841299b133a1665b2dacc.png',
        maxDiscount: 100,
        minDiscount: 91.7,
        name: '天虹超市卡',
        price: null,
        state: 1
      },
      {
        id: 100032,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/b86ffd139f9240b080fa22301010f9c5.png',
        maxDiscount: 100,
        minDiscount: 96.2,
        name: '万里通',
        price: null,
        state: 1
      },
      {
        id: 100019,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/99ce5609b879400f93d598e932afa5af.png',
        maxDiscount: 100,
        minDiscount: 90,
        name: '朴朴超市',
        price: null,
        state: 1
      },
      {
        id: 100161,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230919/b3b1a4d050374e78ad1c1a7a894aebbc.png',
        maxDiscount: 100,
        minDiscount: 97,
        name: '飞银通彩虹卡',
        price: null,
        state: 1
      },
      {
        id: 100026,
        logo: 'https://oss.xianzhuanxia.com/product/buysell/20230311/761d644b1d5d486b924ea382f0096d3d.png',
        maxDiscount: 100,
        minDiscount: 95,
        name: '网易一卡通',
        price: null,
        state: 1
      }
    ]
  })
  return http({
    url: '/api/index/hot/buyCard',
    method: 'get',
    params: query
  })
}

export function getHotQuickCard(query) {
  return Promise.resolve({
    code: 0,
    msg: '操作成功',
    result: [
      {
        id: 100063,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230322/019623281ec2466f8592f3a271e8262d.png',
        maxDiscount: 101.2,
        minDiscount: 101.2,
        name: '抖音币',
        price: null,
        state: 1
      },
      {
        id: 100064,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230322/23230afa5641420d8a2a434509bf0451.png',
        maxDiscount: 209.21,
        minDiscount: 98.47,
        name: '快手币',
        price: null,
        state: 1
      },
      {
        id: 100021,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230316/54c714b354e442839643e4ca08ceb454.png',
        maxDiscount: 71.78,
        minDiscount: 42,
        name: '爱奇艺',
        price: null,
        state: 1
      },
      {
        id: 100022,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230316/d41c859a50114c0f903c57e9ab25eeb0.png',
        maxDiscount: 79,
        minDiscount: 65.01,
        name: '哔哩哔哩',
        price: null,
        state: 1
      },
      {
        id: 100033,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230526/024c7fa1600a4bb2b614f8a03a156249.png',
        maxDiscount: 94,
        minDiscount: 70.5,
        name: '咪咕阅读',
        price: null,
        state: 1
      },
      {
        id: 100046,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230316/f8e96cc1b6ef43c49dbda4b04e00ed00.png',
        maxDiscount: 71,
        minDiscount: 69.29,
        name: 'keep会员',
        price: null,
        state: 1
      },
      {
        id: 100051,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230316/a84369b97a8f4f748087c41d9f869cd3.png',
        maxDiscount: 73,
        minDiscount: 62,
        name: '饿了么',
        price: null,
        state: 1
      },
      {
        id: 100020,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230316/f1b06f7b102145898722d8a48924fb85.png',
        maxDiscount: 80.22,
        minDiscount: 41.01,
        name: '优酷视频',
        price: null,
        state: 1
      },
      {
        id: 100031,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230316/d713d2d48180403c81ccf5da0fb8d4c2.png',
        maxDiscount: 70,
        minDiscount: 43,
        name: '喜马拉雅',
        price: null,
        state: 1
      },
      {
        id: 100035,
        logo: 'https://oss.xianzhuanxia.com/product/fastcharge/20230316/61f15d360ab2457cafa888eae0754fa4.png',
        maxDiscount: 72.07,
        minDiscount: 72.01,
        name: '酷我音乐',
        price: null,
        state: 1
      }
    ]
  })
  return http({
    url: '/api/index/hot/quick',
    method: 'get',
    params: query
  })
}

export function getSendChargeCard(query) {
  return Promise.resolve({
    code: 0,
    msg: '操作成功',
    result: [
      {
        groupPlatform: '0',
        id: 100033,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/0996c561fbda4175b9d25423934d1503.png',
        maxDiscount: 26.57,
        minDiscount: 25.25,
        name: '叮咚买菜',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100057,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/a6e82e4c53824ee79bf945bc0a32f382.png',
        maxDiscount: 55.33,
        minDiscount: 40,
        name: '高德地图',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100052,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/e3adafe38e1d4c7e9bb2bf73eaf264be.png',
        maxDiscount: 63,
        minDiscount: 46,
        name: '滴滴',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100044,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/a23e8c472c5d4298bc818298c991cb8b.png',
        maxDiscount: 45.33,
        minDiscount: 17.78,
        name: '新浪微博',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100040,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/b17213075d5b48a584cfa6f2d2fcd949.png',
        maxDiscount: 57,
        minDiscount: 20,
        name: '顺丰',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100039,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/0a2786ec56524d8dae8447b343755303.png',
        maxDiscount: 34,
        minDiscount: 23.81,
        name: '哈喽出行',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100037,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/114163d1d38244d8b8236ac2b0502008.png',
        maxDiscount: 67.37,
        minDiscount: 65.79,
        name: '必胜客',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100036,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/b4af391d4128498e98d2d289e0e1e8d6.png',
        maxDiscount: 67.6,
        minDiscount: 56.67,
        name: '百果园',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100035,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/1b8524d7c285432499aa73b2b4d237d3.png',
        maxDiscount: 26.92,
        minDiscount: 23.08,
        name: '麦当劳',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100034,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/3354e34f6eae47a19c7b352654722a36.png',
        maxDiscount: 30.56,
        minDiscount: 27.78,
        name: '肯德基',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100004,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/65209e4e0d5d48a8b51a8528666f65a0.png',
        maxDiscount: 64.52,
        minDiscount: 8,
        name: '爱奇艺',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100031,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/c4f271f3f27540a0afe778d9e6ce389f.png',
        maxDiscount: 68.5,
        minDiscount: 16.67,
        name: '饿了么',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100029,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/885771a6a06842439448bdf7ee137c8f.png',
        maxDiscount: 73.5,
        minDiscount: 36,
        name: '美团外卖',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100017,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/2ffdce68081843829c9570590202831e.png',
        maxDiscount: 41.67,
        minDiscount: 16.67,
        name: '网易云音乐',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100015,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/889ed9549e534edeae3de7f462f3fa79.png',
        maxDiscount: 35.5,
        minDiscount: 10,
        name: '喜马拉雅',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100014,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/da8987e0e900440e9880b11d1d16f76f.png',
        maxDiscount: 45.33,
        minDiscount: 40,
        name: '迅雷',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100012,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/ffc1ce0e9c124647bae28257a2af7e6e.png',
        maxDiscount: 36.55,
        minDiscount: 17.95,
        name: '咪咕视频',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100011,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230320/a4d75c6b28914a67959d7ea1bd0b02df.png',
        maxDiscount: 29.29,
        minDiscount: 18,
        name: '埋堆堆',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100007,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/62993b22ccab4303b2b36ab5319c1e05.png',
        maxDiscount: 44,
        minDiscount: 25,
        name: '哔哩哔哩',
        platform: '0',
        price: null,
        state: 1
      },
      {
        groupPlatform: '0',
        id: 100005,
        logo: 'https://oss.xianzhuanxia.com/product/surcharge/20230317/3eb9f59fa94f48888cbe31c1a8c666ee.png',
        maxDiscount: 40,
        minDiscount: 13.39,
        name: '优酷视频',
        platform: '0',
        price: null,
        state: 1
      }
    ]
  })
  return http({
    url: '/api/index/hot/sendCharge',
    method: 'get',
    params: query
  })
}
