<!--
   
   矢量地图组件

    <vectormap
        ref="vmap"
        :mapping="mapping"
    ></vectormap>
    
    export default {
        data(){
            return {
                // 将设备或资源的属性映射到图元的外观的映射规则
                // 如果没有指定，则会使用默认的映射规则
                mapping:{                                              
                    <资源或设备名称>   : {                                    // 例如：devices/hshost
                        online : {
                            true  : { bgColor:"red"},
                            false : { bgColor:(value)=>'blue'} }
                        },
                        <属性名称>    : {                                       
                            <value1> : {color: "red",bgColor: ""},        
                            <value2> : {color: "blue",rotate: "{value}"},
                            <value3> : {frames:[定义动画],...动画options}
                            "*"      : {color: "blue",rotate: "{value}"},
                            "<正则表达式>": {color: "blue",rotate: "{value}"},
                            ">1"     : {color: "blue",rotate: "{value}"}, 
                            "= 1"    : {color       : "blue",rotate  : "{value}"}, 
                            "<1"     : {color: "blue",rotate: "{value}",scale: function(value){.....return <...>}}, 
                        },
                    },
                    <资源或设备名称>:function(pk,name,value){
                        return {}
                    }
                }, 
            }
        }
        created(){
            eventbus.on("message",vmap.onVoerkaMessage)
        },
        methods:{
        }
    }

    1. 概念

        - 图形库
          vectormap组件具有一些预定义的图形库，每个图元对应一个文件。位于lib文件夹中。
          考虑到图形库可能会很大，因此所有图元应采用异步加载方式。
        - 图元
          在spritejs中所有的图元均名为shape，在vectormap中为了便于与voerka平台对应，进行了一定的扩展。
          * 一类是基础图元，代码从`sprite-extend-shapes`扩展，一般用来绘制基础的图形，如线条、箭头等。
          * 一类是widget，其本质是spritejs中的group，vectormap组件为widget赋予了更高级的特性，如文本标签、动画涟漪等
        - 地图分区
          将一个地图分成多个区，如医院可以划分成多个病区，大楼可以划分为多个楼层。
          地图同时仅仅显示一个区
        - 图层
          每个区可以划分为1-N个图层，
          



    2. 地图定义数据如下：

    {
        id                             : "<地图唯一标识，必须是全局唯一的>",
        title                          : "<地图简要说明>",
        createAt                       : <地图创建的时间>,
        updateAt                       : <地图更新的时间>,
        // 定义整个画布的样式
        styles                          : {                                     // 默认的图元样式
            canvas:{                
                resolution                     : {
                    width : <宽度>,
                    height: <高度>,
                },
                viewport                       : {                                   //地图可见视图
                    x1: <>,
                    y1: <>,
                    x2: <>,           
                    y2: <>
                },     
                center                         : [x,y]                                  // 默认中心点
                zoom                           : 1,                                     // 默认缩放级别                                                    // 定义整个画布的样式
            },
            widget:{
                default : {},                                                    // 默认样式
                disabled: {},                                                    // 禁用时
                hover   : {}或[动画],                                             // 鼠标移过时
                selected: {}或[动画],                                             // 选择时
                focus   : {}或[动画]                                              // 被聚焦时 
            }
        },
        // 地图允许分成多个区，一次只显示一个区域        
        zones                         : [                          
            {
                name                   : "",                        // 区域名称，必须在地图中唯一，如果没有指定，则自动生成一个
                default                : true,                      // 加载时默认显示的区域
                title                  : "一层",
                styles                 : {
                    center                 : [x,y]                               // 默认中心点
                    zoom                   : 1,                                  // 默认缩放级别
                    ....
                },
                behavior       :{                                       // 图元形为
                    moveable       : false,                             // 是否允许移动图元
                    removeable     : false,                             // 是否允许删除图元
                    hoverable      : false,                             // 当鼠标移上时应用hover样式
                    cursor         : '',                                // 声明鼠标移上时的指针
                },
                mapping                : {                              // 额外的映射规则，用来将绑定的资源和设备属性映射到图元的外观上                      
                            ...
                },
                // 定义图层,用来将一些图元合并在一个图层，如将所有摄像机
                layers:[
                    {
                        name:"图层名称",
                        title:"友好名称",
                        zIndex:0
                    }
                ],
                widgets                : [                                       // 该楼层显示的所有图元库
                    {
                        id             : "",                                     // 每个图元均必须具有唯一的pk值,可以使用nanoid生成
                        type           : "room",                                 // 图元类型名称
                        visible: true,                                           // 是否显示，默认true
                        name           : "",                                     // 可选，图元名称
                        layer          : "",
                        resource       : "",                                     // 绑定的资源，<资源名称>/<资源id>，如user/12233
                        device         : "",                                     // 该图元绑定的资源id
                        tips           : "",                                     // 图元提示信息
                        href           : "",                                     // 点击图元时触发click并传入
                        // 可选，图元属性和个性化属性样式
                        // 一般不需要指定，而是使用全局样式
                        styles          : {                                     
                            default : {},                                        // 默认样式
                            hover   : {},                                        // 鼠标移过时
                            disabled: {},                                        // 禁用时
                            selected: {},                                        // 选择时
                            focus   : {},
                            ....                                                 // 当图元绑定到资源或设备属性时，允许扩展其他样式
                        },      
                        // 可选变换,包括translate,rotate,scale,skew
                        transforms     : {                                      

                        },  
                        filter         :{

                        },    
                        // 定义图元的动画，图元绘制后进行动画                     
                        animate        : {                                      

                        },      
                        behavior       :{                                       // 图元形为
                            moveable       : false,                             // 是否允许移动
                            removeable     : false,                             // 是否允许删除
                            hoverable      : false,                             // 当鼠标移上时应用hover样式
                            cursor         : '',                                // 声明鼠标移上时的指针
                        },
                        label         :                                         // 该图元绑定的文本标签
                            {
                                visible: true,                                  // 是否显示，默认true
                                anchor : [x,y],                                 // 文本锚点，如果没空则默认使用所在shape的锚点
                                align  : "left|center|right",                   // 水平对齐
                                valign : "top|middle|bottom",                   // 垂直对齐
                                offsetX: 0,
                                offsetY: 0,                                
                                styles : {}                                     // 标签属性用来构建label
                            }
                        ,
                        data           : {},                                    // 存储在dataset上的额外数据，一般是业务数据              
                    },
                    {
                        type           : "group",
                        ....,                                                   // 组也具有所有普通shape的属性
                        children       : [                                       // 组成员
                            {...},
                            {...}
                        ]
                    },
                ]
            }     
        ]
    }
     
    3. 实例方法：

        - focus(<widgetId>,[zoom]) 
        聚焦指定shape

        - center(<widgetId>,[zoom])
        使指定的图形居中显示

        - go(<floorIndex>)
        切换到指定楼层

        - refresh()
        刷新地图

    4. 图元属性映射
        
        图元属性(如边框，颜色等)映射用来实现资源/设备的属性或状态值来映射到图元呈现不同的外观属性。

        比如在地图上有一个图元<灯>，当灯的开启状态，当打开时要属性显示`黄色`背景，关掉时显示`灰色`背景.
       
        实现原理如下：
        在地图中 resources，devices中记录了地图所引用到的设备和资源集合，
        - 当地图加载完成后，异步加载这些设备和资源的属性数据，然后遍历所有shape的mapping，
        接着执行这些映射规则，将资源和属性的数据转换映射到图元的外观上，从而实现从资源/设备到图元的映射
        - 从总线中订阅设备的事件/告警事件，当接收到事件时，对图元行为进行变更，如发光，涟漪动画等。
        - 侦听资源变更事件，当接收到事件时，对图元行为进行变更





    7. 事件

        - selectchange 图元选择集改变时
        - click  单击图元时
        - dblclick 双击图元时
        - tips 显示图元提示，当在图元上停留2秒后触发，一般用来显示图元的弹出提示

    7. 支持的图元库

        组件支持一系列图元库

        - 基础图形库 : 使用https://github.com/spritejs/sprite-extend-shapes
        - 图表库 : 使用https://www.spritejs.com/q-charts/#/home
        - Voerka扩展库
            设备device:显示设备图标或图形，能同步实现图形与设备状态或事件的联动更新
            资源resource:显示资源图标或图形            
            通用Svg：显示通用SVG图元，可以显示项目中的任何svg图片
              v-retry-loading="!isLoadMapDataSuccess"
-->
<template>
  <div
    class="vectormap"
    :id="mapId"
  
    on-loading-retry="getMapData"
    :class="{
      design: design
    }"
  ></div>
</template>
  
<script>
import { Scene, Sprite, Group, Label } from "spritejs";
// import { enforceDict } from "../../utils";
import $ from 'jquery'
import {nanoid} from "nanoid";
import fastq from "fastq";
import jsonPath from "jsonpath";
import { getMap } from "./api";
import { uniq, difference } from "ramda";
import { getVectorMap } from "./api";
// import alarmMixin from "@/mixins/alarmMsg.mixin";
import DomSize from "wd-domsize-monitor";
// import eventbus, { NewDeviceEvent, NewDeviceAlarm } from "@/eventbus";
import { normalizeMap } from "./utils";
import { room } from "./lib/building/room";
import { medicalPersonnelArea } from "./lib/building/medicalStaffArea";

// // 地图工作模式
// const VectorMapMode = enforceDict({
//   Initial: 0, // 初始模式：地图还没有加载
//   Default: 1, // 默认模式：正常浏览模式
//   Edit: 2, // 编辑模式：此时可以删除、移动地图上的目标(设备或资源)
//   Add: 3, // 添加模式：允许在地图上添加目标，当目标添加完成后，自动返回默认模式
//   Select: 4, // 选择模式：当选择框选，圆选等按钮时，选择完成后，自动返回默认模式
//   Tracking: 5, // 跟踪模式：跟踪某个目标时，该目标居中显示，目标不动地图动
//   Draw: 6 // 绘制模式：即开始在地图上绘制，如画线
// });

export default {
  name: "vectorMap",
  // mixins: [alarmMixin],
  props: {
    design: { type: Boolean, default: false }, // 地图设计模式
    url: { type: String }, // url地址，根据此地图id从远端加载地图数据
    source: { type: Object, default: () => ({}) }, // 地图数据，如果提供url，则优先使用url数据
    zoom: { type: Number, default: 1 }, // 地图缩放级别
    center: { type: Array, default: () => [] }, // 地图显示中心点
    zone: { type: Number, default: 0 }, // 默认显示的场景
    theme: { type: String, default: "#152543" }, // 地图主题颜色
    selected: { type: Array, default: () => [] }, // 已选择的
    multiple: { type: Boolean, default: false }, // 是否支持多选
    removeable: { type: Boolean, default: false } // 是否支持移动
  },
  data() {
    return {
      mode: 0, // 工作模式
      mapId: "vector-map-" + nanoid(), // 保存地图数据
      _spriteScene: null,
      vectorMapData: {}, // 数据
      focusQueue: fastq(this.onHandleFocus, 1), // 焦点目标队列，{resType,}
      inpatientWardGroup: "", //病房区域挂载对象
      zonesMounting: "", // 挂载对象
      scaleMultiple: [1, 1], //缩放比例
      clickCoordinate: [], // 点击坐标
      preClickCoordinate: [], // 前面一次点击坐标
      preSize: [0, 0], // 前一次尺寸
      startPos: [0, 0], // 原坐标，用于坐标累加
      equipmentCoordinate: {}, // 设备坐标
      setTimeHandel: "", // 取消
      isOperate: false, // 是否正在操作
      triggeredAlarms: [], // 已经触发告警
      triggeredEvents: [], // 已经触发事件

      isLoadMapDataSuccess: false // 是否加载地图数据成功
    };
  },
  created() {
    this.getMapData();
  },
  mounted() {},
  destroyed() {
    if (this.isLoadMapDataSuccess) {
      this.unsubscribeMessages();
      DomSize.remove(document.querySelector(".vectormap"));
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 获取地图数据
    async getMapData() {
      
      try {
        const { status, payload, eventData } = await getVectorMap();
        if (status === "success") {
          this.vectorMapData = normalizeMap(payload);
          this.equipmentCoordinate = eventData.equipmentCoordinate;
          this.isLoadMapDataSuccess = true;
          this.createSence();
          this.setMapListeners();
        } else {
          throw new Error("获取矢量地图返回status不等于success");
        }
      } catch (event) {
        logger.error("矢量地图获取数据错误：" + event);
      }
    },
    // 设置地图事件
    setMapListeners() {
      this.subscribeMessages(); // 订阅Voerka消息，以便能对告警和事件作出响应
      this.setSrollListener();
      DomSize.bind(document.querySelector(".vectormap"), () =>
        this._spriteScene.updateViewport().updateResolution()
      );
    },
    // 根据鼠标滚动来设置地图缩放
    setSrollListener() {
      let vectorMapDom = document.querySelector(".vectormap");
      // 监听和取消鼠标滚动事件
      vectorMapDom.onmouseenter = () =>
        window.addEventListener("mousewheel", this.listenMouseWheel, false);
      vectorMapDom.onmouseout = () =>
        window.removeEventListener("mousewheel", this.listenMouseWheel, false);
    },
    /**
     * 新建地图
     */
    newMap() {},
    /**
     * 收集依赖的所有资源清单
     */
    _collectResources() {},
    /**
     * 收集依赖的所有设备清单
     */
    _collectDevices() {},
    /**
     * 收集依赖的图元
     */
    _collectWidgetTypes() {},
    /**
     * 刷新地图
     *
     * 1. 重新加载地图数据
     * 2. 重新构建sprite
     *
     */
    refresh() {},
    /**
     * 获取默认的地图区域
     */
    getDefaultZone() {},
    /**
     * 将地图Post保存到服务器
     */
    save(url) {},
    _buildVectorMap() {},

    async _loadWidgets() {
      let widgetTypes = uniq(this._collectWidgetTypes());
      // 加载依赖图元库
    },
    /**
     * 拖拽
     */
    onDraggable(draggableObj) {
      let _this = this;
      draggableObj
        .on("mousedown", evt => {
          this.isOperate = true;
          clearTimeout(this.setTimeHandel);
          this.clickCoordinate[0] = evt.x;
          this.clickCoordinate[1] = evt.y;
          this.startPos = draggableObj.attr("pos");
          draggableObj.off("mousemove", onMouseMove);
          draggableObj.setMouseCapture();
          draggableObj.on("mousemove", onMouseMove);
          evt.stopDispatch();
        })
        .on("mouseup", evt => {
          draggableObj.off("mousemove", onMouseMove);
          draggableObj.releaseMouseCapture();
          this.onFreeOperete();
        });
      function onMouseMove(evt) {
        // 公式： 当前坐标 + （鼠标移动的距离 - 鼠标点击的距离）
        let finalX = _this.startPos[0] + evt.x - _this.clickCoordinate[0];
        let finalY = _this.startPos[1] + evt.y - _this.clickCoordinate[1];
        // 宽高缩放比一致，所以可以取其中一位
        let scale = draggableObj.attr("scale")[0];
        if (scale !== 1) {
          let outerSize = draggableObj.outerSize;
          let centerPos = _this.getCeterLayoutPos();
          let maxX = centerPos[0] + 100;
          let minX = -outerSize[0] * (scale - 1) - 100;
          let maxY = centerPos[1] + 100;
          let minY = -outerSize[1] * (scale - 1) - 100;
          if (
            finalX <= maxX &&
            finalX >= minX &&
            finalY <= maxY &&
            finalY >= minY
          )
            draggableObj.attr({
              pos: [finalX, finalY]
            });
        }
      }
    },
    /**
     * 创建场景
     */
    async createSence() {
      this._spriteScene = new Scene(`#${this.mapId}`, {
        viewport: ["auto", "auto"], // this.vectorMapData.styles.canvas.viewport
        resolution: [100, 100], // 分辨率要根据布局的大小决定,已做处理，可以随便设
        stickExtend: true,
        stickMode: "top"
        // displayRatio: "1vw", // 设置实际创建的Canvas宽度不会超过viewport宽度的1倍
        // maxDisplayRatio: 1 // 设置最大Canvas宽度不超过实际resolution宽度
      });
      let layer = this._spriteScene.layer();
      this._layout(layer);
    },
    // 更新画布的分辨率
    updateSenceResolution(resolution) {
      this._spriteScene.resolution = resolution;
    },
    // 获取布局的居中位置
    getCeterLayoutPos() {
      let outerSize = this.zonesMounting.outerSize;
      let canvasHeight = $(`#${this.mapId} canvas`).attr("height");
      let canvasWidth = $(`#${this.mapId} canvas`).attr("width");
      let x = outerSize[0];
      let y = outerSize[1];
      let posX = 0;
      let posY = 0;
      if (x > y) {
        posY = (canvasHeight - y) / 2;
      } else if (x < y) {
        posX = (canvasWidth - x) / 2;
      }
      return [posX, posY];
    },
    // 让布局居中
    centerLayoutPos() {
      this.zonesMounting.attr({
        pos: this.getCeterLayoutPos()
      });
    },
    /**
     * 布局
     */
    _layout(layer) {
      const zoneGroup = new Group();
      zoneGroup.attr({
        display: "flex",
        justifyContent: "space-between",
        width: 1540,
        height: 600,
        bgcolor: "#162544",
        pos: [0, 0],
        anchor: 0, // 不可以随便修改！！否则样式会出问题
        border: {
          width: 1,
          color: "#264476"
        }
      });
      layer.append(zoneGroup);
      this.zonesMounting = zoneGroup;
      this.updateSenceResolution(zoneGroup.outerSize);
      this.centerLayoutPos();
      // 测试事件 正式接入成功后 可删除
      const clickmy = new Label("触发");
      clickmy.attr({
        pos: [20, 0],
        size: [35, 20],
        bgcolor: "#f00"
      });
      layer.append(clickmy);
      let testI = 10;
      clickmy.on("click", event => {
        let _this = this;
        this.$store.commit("devicealarms/ADD_ALARM", {
          code: 4001,
          createdAt: "2019-10-18T11:17:15.573Z",
          handleTime: null,
          level: 5,
          location: "Object",
          message: "防水分机报警" + testI,
          original: true,
          receiveTime: "2019-10-18T11:17:15.571Z",
          remarks: "",
          result: 0,
          source: "0052381168" + testI,
          sourceDetail: "林世敬的分机000238116819",
          sourceIP: "",
          status: 2,
          tid: "39827697328128",
          triggerTime: "2019-10-18T11:17:15.571Z",
          type: "alarm",
          updatedAt: "2019-11-06T09:48:42.501Z",
          id: "17077e9bff0b0f6d0dda6596e0a3ad28"
        });
        let kk = {
          id: "EmTh086kiG4Kz7H9",
          code: 2000,
          handleTime: "2019-12-11T08:06:13.358Z",
          handler: "admin",
          level: 2,
          location: "Object (empty)",
          message: "门口灯闪烁" + testI,
          original: true,
          params: "Object (empty)",
          parents: "Array[0]",
          receiveTime: "2019-12-11T06:06:13.358Z",
          remarks: "",
          result: 0,
          source: "0052381168" + testI,
          sourceDetail: "床分机100000000068",
          status: 2,
          tid: "40",
          triggerTime: "2019-12-11T06:06:13.358Z",
          type: "event",
          workOrderId: 26
        };
        this.onHandleEvents(kk);
        testI++;
        if (30 === testI) {
          testI = 10;
        }
      });
      // 病人房间区
      const patientRoomAreaGroup = new Group();
      this.inpatientWardGroup = patientRoomAreaGroup;
      patientRoomAreaGroup.attr({
        display: "flex",
        alignContent: "space-between",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        width: 1185,
        height: 600
      });
      zoneGroup.append(patientRoomAreaGroup);
      // 房间
      this.vectorMapData.rooms.forEach(item => {
        room(patientRoomAreaGroup, item);
      });
      // 医务人员工作区
      const medicalStaffArea = new Group();
      medicalStaffArea.attr({
        display: "flex",
        alignContent: "space-between",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        width: 355,
        height: 600
      });
      zoneGroup.append(medicalStaffArea);
      medicalPersonnelArea(medicalStaffArea);
      // 拖拽
      this.onDraggable(zoneGroup);
    },
    /**
     * 触发警告
     *
     */
    triggerAlarm(alarmInfo) {
      let _this = this;
      jsonPath.apply(
        this.vectorMapData,
        `$..beds[?(@.source === "${alarmInfo.source}")]`,
        bedItem => {
          bedItem.warning = true;
          // 聚焦坐标
          _this.focusCoordinate = bedItem.focusCoordinate;
          // 告警队列
          if (!_this.triggeredAlarms.includes(alarmInfo.source)) {
            _this.triggeredAlarms.push(alarmInfo.source);
          }
          return bedItem;
        }
      );
      this.redraw();
      this.focus();
    },
    createWidget(widget, layer) {
      let widgetClass = spritejs[widget.type];
      let s1 = new widgetClass();
      layer.add(s1);
    },
    // 告警取消
    removeAlarm(id) {
      jsonPath.apply(
        this.vectorMapData,
        `$..beds[?(@.source === "${id}")]`,
        bedItem => {
          bedItem.warning = false;
          return bedItem;
        }
      );
    },
    /**
     * 刷新地图数据:重新从服务器加载地图
     */
    refresh() {},
    // 重绘
    redraw() {
      this.inpatientWardGroup.clear();
      this.vectorMapData.rooms.forEach(item => {
        room(this.inpatientWardGroup, item);
      });
    },
    // 聚焦
    async focus() {
      let scale = this.zonesMounting.attr("scale")[0];
      // 放大聚焦
      if (scale === 1) {
        this.zonesMounting.attr({
          scale: [3, 3]
        });
        scale = 3;
      }
      // 获取画布中心点
      let outerSize = this.zonesMounting.outerSize;
      let x = outerSize[0];
      let y = outerSize[1];
      let center = Math.max(x, y);
      // 计算聚焦坐标
      let focusCoordinate = this.focusCoordinate;
      let focusX = center / 2 - focusCoordinate[0] * scale;
      let focusY = center / 2 - focusCoordinate[1] * scale;
      this.zonesMounting.transition(0.4, "linear").attr({
        pos: [focusX, focusY]
      });
    },
    // 监听鼠标滑动轮
    listenMouseWheel(event) {
      this.isOperate = true;
      clearTimeout(this.setTimeHandel);
      // this.onAnchor();
      this.onScale(event);
      this.onFreeOperete();
      // 判断图像是否超出了界面,超出则控制
      let scale = this.zonesMounting.attr("scale")[0];
      if (scale === 1) return this.centerLayoutPos();
      // 设置40的间隔
      let canvasHeight = $(`#${this.mapId} canvas`).attr("height") - 40;
      let canvasWidth = $(`#${this.mapId} canvas`).attr("width") - 40;
      let outerSize = this.zonesMounting.outerSize;
      let pos = this.zonesMounting.attr("pos");
      let posX = pos[0];
      let posY = pos[1];
      let layoutRight = posX + outerSize[0] * scale;
      if (layoutRight < canvasWidth) {
        posX += canvasWidth - layoutRight;
      }
      let layoutBottm = posY + outerSize[1] * scale;
      if (layoutBottm < canvasHeight) {
        posY += canvasHeight - layoutBottm;
      }
      this.zonesMounting.attr({
        pos: [posX, posY]
      });
    },
    // 30秒未操作继续执行队列聚焦
    onFreeOperete() {
      let _this = this;
      this.setTimeHandel = setTimeout(function() {
        _this.isOperate = false;
      }, 2000);
    },
    // 重新定锚点
    onAnchor() {
      // 操作对象
      let zoneGroup = this.zonesMounting;
      // 当前点击坐标
      let clickCoordinateX = this.clickCoordinate[0];
      let clickCoordinateY = this.clickCoordinate[1];
      // 当前坐标若发生变化，重新定位锚点
      let anchorFlag =
        this.preClickCoordinate[0] !== clickCoordinateX ||
        this.preClickCoordinate[1] !== clickCoordinateY;
      if (anchorFlag) {
        // 计算公式： 当前坐标 - 图纸原点坐标 + 上一次的尺寸（重新定位锚点会改变坐标原点）* 放大倍数（ * this.scaleMultiple）
        let distanceX = clickCoordinateX - this.startPos[0] + this.preSize[0];
        let distanceY = clickCoordinateY - this.startPos[1] + this.preSize[1];
        let zoomSize = zoneGroup.attr("size");
        //计算锚点比例
        let anchorX = distanceX / zoomSize[0];
        let anchorY = distanceY / zoomSize[1];
        zoneGroup.attr({
          anchor: [anchorX, anchorY],
          pos: [clickCoordinateX, clickCoordinateY]
        });
        // 将当前值赋值给preSize和preClickCoordinate，为下一轮计算做准备
        this.preSize[0] = distanceX;
        this.preSize[1] = distanceY;
        this.preClickCoordinate[0] = clickCoordinateX;
        this.preClickCoordinate[1] = clickCoordinateY;
      }
    },
    /**
     * 处理告警目标的聚焦
     *
     */
    onHandleFocus(target, callback) {
      const FOCUS_EXPIRED = 60000000000000000000000;
      const TRIGGER_TIME = Date.parse(new Date("2019-11-21T17:05:00"));
      const IS_EXPIRED = Date.parse(new Date()) - FOCUS_EXPIRED > TRIGGER_TIME;
      // 如果仓库的告警被消除则不聚焦
      if (
        !this.deviceAlarms[target.source] ||
        this.deviceAlarms[target.source].filter(alarm => {
          alarm.id === target.id;
        }).length === 0
      ) {
        // TODO:测试不做处理
        // return callback();
      }
      if (!IS_EXPIRED) {
        if (!this.isOperate) {
          // 执行聚焦操作
          this.triggerAlarm(target);
        } else {
          this.focusQueue.unshift(target);
        }
        setTimeout(() => {
          callback();
        }, 2000);
      } else {
        callback();
      }
    },
    // 缩放
    onScale(event) {
      let zoneGroup = this.zonesMounting;
      let currentScale = zoneGroup.attr("scale");
      /*
        2020.3.30 柴梁园 修改滚轮逻辑 跟百度地图同步 修改为向上滚动放大 向下滚动缩小
        修改前 let scaleMultiple = currentScale[0] + event.deltaY / 1000;
      */

      let scaleMultiple = currentScale[0] + -event.deltaY / 1000;
      if (scaleMultiple >= 1 && scaleMultiple < 3.5) {
        zoneGroup.attr({
          scale: scaleMultiple
        });
        this.scaleMultiple = scaleMultiple;
      }
    },
    /** 订阅Voerka消息，以便能对告警和事件作出响应 */
    subscribeMessages() {
      // eventbus.on(NewDeviceEvent, this.onHandleEvents);
      // eventbus.on(NewDeviceAlarm, this.onVoerkaMessage);
    },
    unsubscribeMessages() {
      // eventbus.on(NewDeviceEvent, this.onHandleEvents);
      // eventbus.on(NewDeviceAlarm, this.onVoerkaMessage);
    },
    // 事件处理
    onHandleEvents(event) {
      let _this = this;
      let disappearTimeout;
      clearTimeout(disappearTimeout);
      // 触发提示
      _this.vectorMapData.rooms.forEach(room => {
        room.beds.forEach(bed => {
          if (bed.source === event.source) {
            bed.message = event.message;
          }
        });
      });
      _this.redraw();
      // 5秒取消提示
      disappearTimeout = setTimeout(function() {
        jsonPath.apply(
          _this.vectorMapData,
          `$..beds[?(@.source === "${event.source}")]`,
          bedItem => {
            bedItem.message = "";
            return bedItem;
          }
        );
        _this.redraw();
      }, 5000);
    },
    /**
     * voerka消息处理，
     */
    onVoerkaMessage(message) {
      // 添加到聚焦队列
      // if ("f246838a82cf" === event.source)
      this.focusQueue.push(message);
    }
  }
};
</script>
<style  lang="scss">
.vectormap {
  position: relative;
  width: 100%;
  height: 100%;
  canvas {
    background: #162544;
  }
}
</style>
