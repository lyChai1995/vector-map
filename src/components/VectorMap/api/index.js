export function getVectorMap(url, params) {

  return {
    status: "success",
    payload: {
      id: 22,
      title: "医院楼层地图",               // "<地图简要说明>"
      createAt: "2019/11/23",              // <地图创建的时间>
      updateAt: "2019/11/25",              // <地图更新的时间>
      styles: {
        canvas: {
          resolution: {
            width: 200,
            height: 300
          },
          viewport: [500, 500],        //地图可见视图
          center: [0.5, 0.5],          // 默认中心点
          zoom: 1                      // 默认缩放级别
        },
        widget: {
          default: {},                 // 默认样式
          disabled: {},                // 禁用时
          hover: {},                   // 鼠标移过时
          selected: {},                // 选择时
          focus: {},                   // 被聚焦时 
        }
      },
      zones: {
        name: "",                        // 区域名称，必须在地图中唯一，如果没有指定，则自动生成一个
        default: true,                   // 加载时默认显示的区域
        title: "一层",
        styles: {
          center: [0.5, 0.5],          // 默认中心点
          zoom: 1,                     // 默认缩放级别
        },
        behavior: {                      // 图元形为
          moveable: false,             // 是否允许移动图元
          removeable: false,           // 是否允许删除图元
          hoverable: false,            // 当鼠标移上时应用hover样式
          cursor: '',                  // 声明鼠标移上时的指针
        },
        mapping: {                       // 额外的映射规则，用来将绑定的资源和设备属性映射到图元的外观上                      

        },
        layers: [                        // 定义图层,用来将一些图元合并在一个图层，如将所有摄像机
          {
            name: "图层名称",
            title: "友好名称",
            zIndex: 0
          }
        ],
        widgets: [                       // 该楼层显示的所有图元库
          {
            id: "",                  // 每个图元均必须具有唯一的pk值,可以使用nanoid生成
            type: "room",            // 图元类型名称
            visible: true,           // 是否显示，默认true
            name: "",                // 可选，图元名称
            layer: "",
            resource: "",            // 绑定的资源，<资源名称>/<资源id>，如user/12233
            device: "",              // 该图元绑定的资源id
            tips: "",                // 图元提示信息
            href: "",                // 点击图元时触发click并传入
            styles: {
              default: {},         // 默认样式
              hover: {},           // 鼠标移过时
              disabled: {},        // 禁用时
              selected: {},        // 选择时
              focus: {},
            },
            // 可选变换,包括translate,rotate,scale,skew
            transforms: {

            },
            filter: {

            },
            // 定义图元的动画，图元绘制后进行动画                     
            animate: {

            },
            behavior: {                                       // 图元形为
              moveable: false,                              // 是否允许移动
              removeable: false,                            // 是否允许删除
              hoverable: false,                             // 当鼠标移上时应用hover样式
              cursor: '',                                   // 声明鼠标移上时的指针
            },
            label: {                                          // 该图元绑定的文本标签
              visible: true,                                // 是否显示，默认true
              anchor: [0.5, 0.5],                            // 文本锚点，如果没空则默认使用所在shape的锚点
              align: "left|center|right",                   // 水平对齐
              valign: "top|middle|bottom",                  // 垂直对齐
              offsetX: 0,
              offsetY: 0,
              styles: {}                                    // 标签属性用来构建label
            }
            ,
            data: {},                                         // 存储在dataset上的额外数据，一般是业务数据  
          }
        ]
      },
      rooms: [
        {
          roomNO: "201",
          door: {
            coordinate: [30, 224], // 门坐标 [30, 23]
            doorRotate: 0 // 旋转角度 0 or 90
          },
          wallY: 240, // 墙的Y坐标  0 or 240
          beds: [
            // 床
            {
              bedNO: "01",
              bedX: 91, // 床X坐标
              bedY: 10, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 90, // 床头柜Y坐标
              warning: false,
              avatar: "my.png",
              focusCoordinate: [160, 65],
              message: "我要上厕所",
              source: "005238116810"
            },
            {
              bedNO: "02",
              bedX: 91,
              bedY: 123,
              bedsideCupboardX: 190,
              bedsideCupboardY: 204,
              warning: false,
              avatar: "tom.png",
              focusCoordinate: [160, 183],
              message: "我很难受",
              source: "f246838a82cf"
            }
          ]
        },
        {
          roomNO: "202",
          door: {
            coordinate: [30, 224], // 门坐标 [30, 23]
            doorRotate: 0 // 旋转角度 0 or 90
          },
          wallY: 240, // 墙的Y坐标  0 or 240
          beds: [
            // 床  
            {
              bedNO: "03",
              bedX: 91, // 床X坐标
              bedY: 10, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 90, // 床头柜Y坐标
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [395, 65],
              message: "",
              source: "8eb119840327"
            },
            {
              bedNO: "04",
              bedX: 91,
              bedY: 123,
              bedsideCupboardX: 190,
              bedsideCupboardY: 204,
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [395, 183],
              message: "",
              source: "005238116813"
            }
          ]
        },
        {
          roomNO: "203",
          door: {
            coordinate: [30, 224], // 门坐标 [30, 23]
            doorRotate: 0 // 旋转角度 0 or 90
          },
          wallY: 240, // 墙的Y坐标  0 or 240
          beds: [
            // 床  
            {
              bedNO: "05",
              bedX: 91, // 床X坐标
              bedY: 10, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 90, // 床头柜Y坐标
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [630, 65],
              message: "",
              source: "005238116814"
            },
            {
              bedNO: "06",
              bedX: 91,
              bedY: 123,
              bedsideCupboardX: 190,
              bedsideCupboardY: 204,
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [630, 183],
              message: "",
              source: "005238116815"
            }
          ]
        },
        {
          roomNO: "204",
          door: {
            coordinate: [30, 224], // 门坐标 [30, 23]
            doorRotate: 0 // 旋转角度 0 or 90
          },
          wallY: 240, // 墙的Y坐标  0 or 240
          beds: [
            // 床
            {
              bedNO: "07",
              bedX: 91, // 床X坐标
              bedY: 10, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 90, // 床头柜Y坐标
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [865, 65],
              message: "",
              source: "005238116816"
            },
            {
              bedNO: "08",
              bedX: 91,
              bedY: 123,
              bedsideCupboardX: 190,
              bedsideCupboardY: 204,
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [865, 183],
              message: "",
              source: "005238116817"
            }
          ]
        },
        {
          roomNO: "205",
          door: {
            coordinate: [30, 224], // 门坐标 [30, 23]
            doorRotate: 0 // 旋转角度 0 or 90
          },
          wallY: 240, // 墙的Y坐标  0 or 240
          beds: [
            // 床
            {
              bedNO: "09",
              bedX: 91, // 床X坐标
              bedY: 10, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 90, // 床头柜Y坐标
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [1100, 65],
              message: "",
              source: "005238116818"
            },
            {
              bedNO: "10",
              bedX: 91,
              bedY: 123,
              bedsideCupboardX: 190,
              bedsideCupboardY: 204,
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [1100, 183],
              message: "",
              source: "005238116819"
            }
          ]
        },

        // 下排
        {
          roomNO: "206",
          door: {
            coordinate: [30, 25], // 门坐标 [30, 23]
            doorRotate: 90 // 旋转角度 0 or 90
          },
          wallY: 0, // 墙的Y坐标  0 or 240
          beds: [
            // 床
            {
              bedNO: "11",
              bedX: 91, // 床X坐标
              bedY: 20, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 100, // 床头柜Y坐标
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [160, 480],
              message: "",
              source: "005238116820"
            },
            {
              bedNO: "12",
              bedX: 91,
              bedY: 133,
              bedsideCupboardX: 190,
              bedsideCupboardY: 214,
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [160, 595],
              message: "",
              source: "005238116821"
            }
          ]
        },
        {
          roomNO: "207",
          door: {
            coordinate: [30, 25], // 门坐标 [30, 23]
            doorRotate: 90 // 旋转角度 0 or 90
          },
          wallY: 0, // 墙的Y坐标  0 or 240   
          beds: [
            // 床
            {
              bedNO: "13",
              bedX: 91, // 床X坐标
              bedY: 20, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 100, // 床头柜Y坐标
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [395, 480],
              message: "",
              source: "005238116822"
            },
            {
              bedNO: "14",
              bedX: 91,
              bedY: 133,
              bedsideCupboardX: 190,
              bedsideCupboardY: 214,
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [395, 595],
              message: "",
              source: "005238116823"
            }
          ]
        },
        {
          roomNO: "208",
          door: {
            coordinate: [30, 25], // 门坐标 [30, 23]
            doorRotate: 90 // 旋转角度 0 or 90
          },
          wallY: 0, // 墙的Y坐标  0 or 240
          beds: [
            // 床
            {
              bedNO: "15",
              bedX: 91, // 床X坐标
              bedY: 20, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 100, // 床头柜Y坐标
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [630, 480],
              message: "",
              source: "005238116824"
            },
            {
              bedNO: "16",
              bedX: 91,
              bedY: 133,
              bedsideCupboardX: 190,
              bedsideCupboardY: 214,
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [630, 595],
              message: "",
              source: "005238116825"
            }
          ]
        },
        {
          roomNO: "209",
          door: {
            coordinate: [30, 25], // 门坐标 [30, 23]
            doorRotate: 90 // 旋转角度 0 or 90
          },
          wallY: 0, // 墙的Y坐标  0 or 240
          beds: [
            // 床
            {
              bedNO: "17",
              bedX: 91, // 床X坐标
              bedY: 20, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 100, // 床头柜Y坐标
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [865, 480],
              message: "",
              source: "005238116826"
            },
            {
              bedNO: "18",
              bedX: 91,
              bedY: 133,
              bedsideCupboardX: 190,
              bedsideCupboardY: 214,
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [865, 595],
              message: "",
              source: "005238116827"
            }
          ]
        },
        {
          roomNO: "210",
          door: {
            coordinate: [30, 25], // 门坐标 [30, 23]
            doorRotate: 90 // 旋转角度 0 or 90
          },
          wallY: 0, // 墙的Y坐标  0 or 240
          beds: [
            // 床
            {
              bedNO: "19",
              bedX: 91, // 床X坐标
              bedY: 20, // 床Y坐标
              bedsideCupboardX: 190, // 床头柜X坐标
              bedsideCupboardY: 100, // 床头柜Y坐标
              warning: false,
              avatar: "xiaomei.jpg",
              focusCoordinate: [1100, 480],
              message: "",
              source: "005238116828"
            },
            {
              bedNO: "20",
              bedX: 91,
              bedY: 133,
              bedsideCupboardX: 190,
              bedsideCupboardY: 214,
              warning: false,
              avatar: "caihua.png",
              focusCoordinate: [1100, 595],
              message: "",
              source: "005238116829"
            }
          ]
        }
      ]
    },
    eventData: {
      equipmentCoordinate: {
        "01": [160, 65],
        "02": [160, 183],
        "03": [395, 65],
        "04": [395, 183],
        "05": [630, 65],
        "06": [630, 183],
        "07": [865, 65],
        "08": [865, 183],
        "09": [1100, 65],
        "10": [1100, 183],
        "11": [160, 480],
        "12": [160, 595],
        "13": [395, 480],
        "14": [395, 595],
        "15": [630, 480],
        "16": [630, 595],
        "17": [865, 480],
        "18": [865, 595],
        "19": [1100, 480],
        "20": [1100, 595],
      }

    }
  }
}
