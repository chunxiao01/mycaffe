import Vue from "vue"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex)

const state = {
  cartDatas: [],
  goodsTypeDatas: [
    {
      menutypeid: "menutype_001",
      menutypename: "人气TOP",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_008",
      menutypename: "丝绒一周年",
      menutypekey: true,
      menutypekeyname: "青森"
    },
    {
      menutypeid: "menutype_002",
      menutypename: "小黑杯",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_005",
      menutypename: "水果冰萃",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_006",
      menutypename: "生椰家族",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_007",
      menutypename: "厚乳拿铁",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_009",
      menutypename: "经典拿铁",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_010",
      menutypename: "瑞纳冰®",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_011",
      menutypename: "大师咖啡",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_012",
      menutypename: "不喝咖啡",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_013",
      menutypename: "甜品小点",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_014",
      menutypename: "烘焙轻食",
      menutypekey: false,
      menutypekeyname: null
    },
    {
      menutypeid: "menutype_015",
      menutypename: "经典饮品",
      menutypekey: false,
      menutypekeyname: null
    }
  ],
  goodsDatas: [
    {
      goodsGroupId: "menutype_001",
      goodsGroupName: "人气TOP",
      goodsGroupDesc: "喵喵必喝爆款，无限回购",
      goodsGroupTypeType: [
        {
          goodsGroupTypeTypeId: null,
          goodsGroupTypeTypeName: null,
          goodsGroupTypeTypeNumber: null
        }
      ],
      goodsGroupDetailData: [
        {
          goodsid: "goods_001",
          goodspic: require("assets/img/goods/menugoods/cat1.webp"),
          goodssellpic: require("assets/img/sell/goodspic/goods_cat1_m.webp"),
          goodsname: "椰云拿铁",
          goodstips: null,
          goodsdesc: "年度重磅 | 一口吞云，轻盈绵密",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat1_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_002",
          goodspic: require("assets/img/goods/menugoods/cat2.webp"),
          goodsname: "生椰拿铁",
          goodstips: null,
          goodsdesc: "人气 | YYDS,无限回购",
          goodsdescfill: null,
          goodsprice_new: 18,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat2_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_003",
          goodspic: require("assets/img/goods/menugoods/cat3.webp"),
          goodsname: "青森苹果丝绒拿铁",
          goodstips: "新品",
          goodsdesc: "清甜苹果风味，口感圆润丝滑",
          goodsdescfill: "*0卡糖",
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat3_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "0卡糖",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "少甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "少少甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_004",
          goodspic: require("assets/img/goods/menugoods/cat4.webp"),
          goodsname: "厚乳拿铁",
          goodstips: null,
          goodsdesc: "人气 | 喵喵招牌，进入厚乳时代",
          goodsdescfill: null,
          goodsprice_new: 16,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat4_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_005",
          goodspic: require("assets/img/goods/menugoods/cat5.webp"),
          goodsname: "瑰夏 • Dirty",
          goodstips: "SOE",
          goodsdesc: "醇厚坚果前调，奶香余韵绵长",
          goodsdescfill: "*默认去冰",
          goodsprice_new: 20,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat5_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_006",
          goodspic: require("assets/img/goods/menugoods/cat6.webp"),
          goodsname: "丝绒拿铁",
          goodstips: null,
          goodsdesc: "超丝滑 | 年度重磅，丝滑感提升",
          goodsdescfill: "20.99%",
          goodsprice_new: 18,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat6_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐|微甜",
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_007",
          goodspic: require("assets/img/goods/menugoods/cat7.webp"),
          goodsname: "富桂厚乳拿铁",
          goodstips: null,
          goodsdesc: "三分桂香扑鼻，七分醇厚香甜",
          goodsdescfill: "*0卡糖",
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat7_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_008",
          goodspic: require("assets/img/goods/menugoods/cat8.webp"),
          goodsname: "生椰丝绒拿铁",
          goodstips: null,
          goodsdesc: "双爆款 | 一口椰香一口丝滑",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat8_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐|微甜",
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      goodsGroupId: "menutype_008",
      goodsGroupName: "丝绒一周年",
      goodsGroupDesc: "秋意浓，喝丝绒",
      goodsGroupTypeType: [
        {
          goodsGroupTypeTypeId: null,
          goodsGroupTypeTypeName: null,
          goodsGroupTypeTypeNumber: null
        }
      ],
      goodsGroupDetailData: [
        {
          goodsid: "goods_003",
          goodspic: require("assets/img/goods/menugoods/cat3.webp"),
          goodsname: "青森苹果丝绒拿铁",
          goodstips: "新品",
          goodsdesc: "清甜苹果风味，口感圆润丝滑",
          goodsdescfill: "*0卡糖",
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat3_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "0卡糖",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "少甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "少少甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_006",
          goodspic: require("assets/img/goods/menugoods/cat6.webp"),
          goodsname: "丝绒拿铁",
          goodstips: null,
          goodsdesc: "超丝滑 | 年度重磅，丝滑感提升",
          goodsdescfill: "20.99%",
          goodsprice_new: 18,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat6_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐|微甜",
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_004",
          goodspic: require("assets/img/goods/menugoods/cat4.webp"),
          goodsname: "冰丝绒拿铁",
          goodstips: null,
          goodsdesc: "冰的刚刚好，一口丝滑滑滑",
          goodsdescfill: null,
          goodsprice_new: 18,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat4_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_001",
          goodspic: require("assets/img/goods/menugoods/cat1.webp"),
          goodsname: "冰生椰丝绒拿铁",
          goodstips: null,
          goodsdesc: "椰香清甜，冰润更丝滑",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat1_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_008",
          goodspic: require("assets/img/goods/menugoods/cat8.webp"),
          goodsname: "生椰丝绒拿铁",
          goodstips: null,
          goodsdesc: "双爆款 | 一口椰香一口丝滑",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat8_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐|微甜",
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_002",
          goodspic: require("assets/img/goods/menugoods/cat2.webp"),
          goodsname: "冲绳黑糖丝绒拿铁",
          goodstips: null,
          goodsdesc: "老爆款升级，口感更丝滑",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat2_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "0卡糖",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "少甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "少少甜",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_005",
          goodspic: require("assets/img/goods/menugoods/cat5.webp"),
          goodsname: "香草丝绒拿铁",
          goodstips: null,
          goodsdesc: "丝滑香甜，源自马达加斯加香草",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat2_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "0卡糖",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准甜",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "少甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "少少甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      goodsGroupId: "menutype_002",
      goodsGroupName: "小黑杯",
      goodsGroupDesc: "SOE单一产品地精品咖啡豆，SCA80+精品级认证，味觉升级",
      goodsGroupTypeType: [
        {
          goodsGroupTypeTypeId: "menutype_002_type_001",
          goodsGroupTypeTypeName: "瑰夏",
          goodsGroupTypeTypeNumber: 5
        },
        {
          goodsGroupTypeTypeId: "menutype_002_type_002",
          goodsGroupTypeTypeName: "耶加雪菲",
          goodsGroupTypeTypeNumber: 5
        }
      ],
      goodsGroupDetailData: [
        {
          goodsid: "goods_001",
          goodspic: require("assets/img/goods/menugoods/cat1.webp"),
          goodsname: "瑰夏 • Dirty",
          goodstips: null,
          goodsdesc: "醇厚坚果前调，奶香余韵绵长",
          goodsdescfill: "*默认去冰",
          goodsprice_new: 22,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat1_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_002",
          goodspic: require("assets/img/goods/menugoods/cat2.webp"),
          goodsname: "瑰夏 • 生椰Dirty",
          goodstips: null,
          goodsdesc: "浓郁夏威夷果风味，清甜椰香尾韵",
          goodsdescfill: null,
          goodsprice_new: 22,
          goodsprice_old: 35,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat2_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_003",
          goodspic: require("assets/img/goods/menugoods/cat3.webp"),
          goodsname: "瑰夏 • 美式",
          goodstips: null,
          goodsdesc: "饱满坚果香气，回味悠长",
          goodsdescfill: null,
          goodsprice_new: 18,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat3_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },

        {
          goodsid: "goods_004",
          goodspic: require("assets/img/goods/menugoods/cat4.webp"),
          goodsname: "瑰夏 • 拿铁",
          goodstips: null,
          goodsdesc: "甄选SCA84精品级咖啡豆",
          goodsdescfill: null,
          goodsprice_new: 20,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat4_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_005",
          goodspic: require("assets/img/goods/menugoods/cat5.webp"),
          goodsname: "瑰夏 • 澳瑞白",
          goodstips: null,
          goodsdesc: "绵密奶泡注入，口感圆润饱满",
          goodsdescfill: null,
          goodsprice_new: 22,
          goodsprice_old: 35,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat5_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_006",
          goodspic: require("assets/img/goods/menugoods/cat6.webp"),
          goodsname: "耶加 • Dirty",
          goodstips: null,
          goodsdesc: "大口喝，前三口最奇妙",
          goodsdescfill: "*默认去冰",
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat6_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_007",
          goodspic: require("assets/img/goods/menugoods/cat7.webp"),
          goodsname: "耶加 • 生椰Dirty",
          goodstips: null,
          goodsdesc: "明亮柑橘前调，浓郁椰香尾韵",
          goodsdescfill: "*默认去冰",
          goodsprice_new: 21,
          goodsprice_old: 35,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat7_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_008",
          goodspic: require("assets/img/goods/menugoods/cat8.webp"),
          goodsname: "耶加雪菲 • 澳瑞白",
          goodstips: null,
          goodsdesc: "人气爆款 | 甄选IIAC铂金豆",
          goodsdescfill: null,
          goodsprice_new: 21,
          goodsprice_old: 26,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_009",
          goodspic: require("assets/img/goods/menugoods/cat1.webp"),
          goodsname: "耶加雪菲 • 美式",
          goodstips: null,
          goodsdesc: "明亮柑橘调，尽享纯粹风味",
          goodsdescfill: null,
          goodsprice_new: 17,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_010",
          goodspic: require("assets/img/goods/menugoods/cat2.webp"),
          goodsname: "耶加雪菲 • 拿铁",
          goodstips: null,
          goodsdesc: "醇厚坚果前调，奶香余韵绵长",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null
        }
      ]
    },
    {
      goodsGroupId: "menutype_005",
      goodsGroupName: "水果冰萃",
      goodsGroupDesc: "SOE精品埃塞豆与水果风味清爽碰撞，Let's Chill",
      goodsGroupTypeType: [
        {
          goodsGroupTypeTypeId: null,
          goodsGroupTypeTypeName: null,
          goodsGroupTypeTypeNumber: null
        }
      ],
      goodsGroupDetailData: [
        {
          goodsid: "goods_001",
          goodspic: require("assets/img/goods/menugoods/cat1.webp"),
          goodsname: "葡萄冰萃咖啡",
          goodstips: null,
          goodsdesc: "个性特调 | 奶咖控谨慎尝新",
          goodsdescfill: "回归榜人气TOP3",
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_002",
          goodspic: require("assets/img/goods/menugoods/cat2.webp"),
          goodsname: "火烈鸟冰萃咖啡",
          goodstips: null,
          goodsdesc: "0脂 | 粉柠特调，搅一搅更好喝",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_003",
          goodspic: require("assets/img/goods/menugoods/cat3.webp"),
          goodsname: "闪光橙橙冰萃咖啡",
          goodstips: null,
          goodsdesc: "0脂 | 含NFC非浓缩还原橙汁",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null
        }
      ]
    },
    {
      goodsGroupId: "menutype_006",
      goodsGroupName: "生椰家族",
      goodsGroupDesc: "《新周刊》2021中国生活趋势榜 国民风味",
      goodsGroupTypeType: [
        {
          goodsGroupTypeTypeId: null,
          goodsGroupTypeTypeName: null,
          goodsGroupTypeTypeNumber: null
        }
      ],
      goodsGroupDetailData: [
        {
          goodsid: "goods_001",
          goodspic: require("assets/img/goods/menugoods/cat1.webp"),
          goodsname: "生椰拿铁",
          goodstips: null,
          goodsdesc: "人气 | YYDS,无限回购",
          goodsdescfill: "回归榜人气TOP3",
          goodsprice_new: 18,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat1_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_002",
          goodspic: require("assets/img/goods/menugoods/cat2.webp"),
          goodsname: "椰云拿铁",
          goodstips: null,
          goodsdesc: "年度重磅 | 一口吞云，轻盈绵密",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat2_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_003",
          goodspic: require("assets/img/goods/menugoods/cat3.webp"),
          goodsname: "生椰丝绒拿铁",
          goodstips: null,
          goodsdesc: "双爆款 | 一口椰香一口丝滑",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat3_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐|微甜",
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_004",
          goodspic: require("assets/img/goods/menugoods/cat4.webp"),
          goodsname: "蓝天白云拿铁",
          goodstips: null,
          goodsdesc: "0乳糖 | 绵密椰云™，一口很治愈",
          goodsdescfill: null,
          goodsprice_new: 21,
          goodsprice_old: 35,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_006",
          goodspic: require("assets/img/goods/menugoods/cat6.webp"),
          goodsname: "耶加 • Dirty",
          goodstips: null,
          goodsdesc: "大口喝，前三口最奇妙",
          goodsdescfill: "*默认去冰",
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat6_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_005",
          goodspic: require("assets/img/goods/menugoods/cat5.webp"),
          goodsname: "生椰爱摩卡",
          goodstips: null,
          goodsdesc: "经典 | 清甜椰香恋上浓醇可可",
          goodsdescfill: null,
          goodsprice_new: 21,
          goodsprice_old: 35,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_007",
          goodspic: require("assets/img/goods/menugoods/cat7.webp"),
          goodsname: "抹茶好喝椰",
          goodstips: null,
          goodsdesc: "0乳糖 | 抹茶控人气首选",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_008",
          goodspic: require("assets/img/goods/menugoods/cat8.webp"),
          goodsname: "陨石生椰拿铁",
          goodstips: null,
          goodsdesc: "0乳糖 | 人气陨石拿铁 • 生椰版",
          goodsdescfill: null,
          goodsprice_new: 20,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat8_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "少甜",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "少少甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_009",
          goodspic: require("assets/img/goods/menugoods/cat1.webp"),
          goodsname: "芒果好喝椰",
          goodstips: null,
          goodsdesc: "香甜芒果香气邂逅清甜椰浆",
          goodsdescfill: null,
          goodsprice_new: 21,
          goodsprice_old: 35,
          goodsSelected: false,
          goodspieces: null
        }
      ]
    },
    {
      goodsGroupId: "menutype_007",
      goodsGroupName: "厚乳拿铁",
      goodsGroupDesc:
        "精选厚牛乳注入醇厚新口感，2020 EDGE Awards年度新消费产品",
      goodsGroupTypeType: [
        {
          goodsGroupTypeTypeId: null,
          goodsGroupTypeTypeName: null,
          goodsGroupTypeTypeNumber: null
        }
      ],
      goodsGroupDetailData: [
        {
          goodsid: "goods_004",
          goodspic: require("assets/img/goods/menugoods/cat4.webp"),
          goodsname: "厚乳拿铁",
          goodstips: "二周年",
          goodsdesc: "人气 | 喵喵招牌，进入厚乳时代",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat4_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "不另外加糖",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_002",
          goodspic: require("assets/img/goods/menugoods/cat2.webp"),
          goodsname: "冰厚乳拿铁",
          goodstips: null,
          goodsdesc: "奶味浓醇出众，冰爽一夏",
          goodsdescfill: null,
          goodsprice_new: 16,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_001",
          goodspic: require("assets/img/goods/menugoods/cat1.webp"),
          goodsname: "偷偷想你茉莉鸳鸯",
          goodstips: null,
          goodsdesc: "超清爽 | 现泡茉莉花茶，清新纯润",
          goodsdescfill: null,
          goodsprice_new: 18,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_003",
          goodspic: require("assets/img/goods/menugoods/cat3.webp"),
          goodsname: "海盐芝士茉莉鸳鸯",
          goodstips: null,
          goodsdesc: "海盐芝士版 • 偷偷想你茉莉鸳鸯",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_007",
          goodspic: require("assets/img/goods/menugoods/cat7.webp"),
          goodsname: "海盐芝士厚乳拿铁",
          goodstips: null,
          goodsdesc: "人气 | 暖咖必选，经典芝士奶盖",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_006",
          goodspic: require("assets/img/goods/menugoods/cat6.webp"),
          goodsname: "新鸳鸯红茶拿铁",
          goodstips: null,
          goodsdesc: "中国港式经典x冷翠厚牛乳",
          goodsdescfill: null,
          goodsprice_new: 18,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_005",
          goodspic: require("assets/img/goods/menugoods/cat5.webp"),
          goodsname: "陨石厚乳拿铁",
          goodstips: null,
          goodsdesc: "Q弹陨石入醇厚奶香",
          goodsdescfill: null,
          goodsprice_new: 19,
          goodsprice_old: 32,
          goodsSelected: false,
          goodspieces: null
        }
      ]
    },
    {
      goodsGroupId: "menutype_009",
      goodsGroupName: "经典拿铁",
      goodsGroupDesc: null,
      goodsGroupTypeType: [
        {
          goodsGroupTypeTypeId: null,
          goodsGroupTypeTypeName: null,
          goodsGroupTypeTypeNumber: null
        }
      ],
      goodsGroupDetailData: [
        {
          goodsid: "goods_001",
          goodspic: require("assets/img/goods/menugoods/cat1.webp"),
          goodsname: "拿铁",
          goodstips: null,
          goodsdesc: "意式浓缩与牛奶的经典混合",
          goodsdescfill: null,
          goodsprice_new: 15,
          goodsprice_old: 26,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat1_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "无需加糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "半份糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "单份糖",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_002",
          goodspic: require("assets/img/goods/menugoods/cat2.webp"),
          goodsname: "陨石拿铁",
          goodstips: null,
          goodsdesc: "人气 | 真的不含陨石成分",
          goodsdescfill: null,
          goodsprice_new: 17,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null,
          goodssellinfo: {
            goodssellpic: [
              require("assets/img/sell/goodspic/goods_cat2_m.webp")
            ],
            goodssellinfopic: [
              require("assets/img/sell/goodsinfopic/goodsinfo.webp")
            ],
            goodsselltype: [
              {
                goodsselltypeId: "goodsselltype_01",
                goodsselltypeName: "杯型",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_01_01",
                    goodsselltypeDetailName: "大杯",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_02",
                goodsselltypeName: "温度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_02_01",
                    goodsselltypeDetailName: "冰",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_02_02",
                    goodsselltypeDetailName: "热",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_03",
                goodsselltypeName: "糖度",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_03_01",
                    goodsselltypeDetailName: "标准甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_02",
                    goodsselltypeDetailName: "少甜",
                    goodsselltypeDetailMark: "推荐",
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_03_03",
                    goodsselltypeDetailName: "少少甜",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              },
              {
                goodsselltypeId: "goodsselltype_04",
                goodsselltypeName: "奶油",
                goodsselltypeDetails: [
                  {
                    goodsselltypeDetailId: "goodsselltype_04_01",
                    goodsselltypeDetailName: "无奶油",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: true
                  },
                  {
                    goodsselltypeDetailId: "goodsselltype_04_02",
                    goodsselltypeDetailName: "加奶油3元",
                    goodsselltypeDetailMark: null,
                    goodsselltypeDetailSelect: false
                  }
                ]
              }
            ]
          }
        },
        {
          goodsid: "goods_003",
          goodspic: require("assets/img/goods/menugoods/cat3.webp"),
          goodsname: "焦糖拿铁",
          goodstips: null,
          goodsdesc: "浓郁焦糖香气，萦绕唇齿舌间",
          goodsdescfill: null,
          goodsprice_new: 17,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_004",
          goodspic: require("assets/img/goods/menugoods/cat4.webp"),
          goodsname: "冲绳黑糖拿铁",
          goodstips: null,
          goodsdesc: "黑糖与咖啡的美妙融合",
          goodsdescfill: null,
          goodsprice_new: 17,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null
        },
        {
          goodsid: "goods_005",
          goodspic: require("assets/img/goods/menugoods/cat5.webp"),
          goodsname: "香草拿铁",
          goodstips: null,
          goodsdesc: "经典香甜口感，一口治愈味蕾",
          goodsdescfill: null,
          goodsprice_new: 17,
          goodsprice_old: 29,
          goodsSelected: false,
          goodspieces: null
        }
      ]
    }
  ]
}

const VuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
  plugins: [VuexLocal.plugin]
})

export default store
