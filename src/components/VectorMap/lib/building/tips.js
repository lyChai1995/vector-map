/**
 功能：提示
 参数：
 1、mounted 当前模块挂载对象
 2、tipsItem 参数，用于控制位置
 */
import { Group, Label, Path } from "spritejs";
export function tips(mounted, tipsItem) {
  // 提示
  const tips = new Group();
  tips.attr({
    pos: tipsItem.tipCoordinate,
    size: [110, 35],
    zIndex: 98
  });
  mounted.append(tips);
  // 提示内容
  const message = new Label(tipsItem.message);
  message.attr({
    pos: [0, 0],
    width: 110,
    height: 20,
    lineHeight: 20,
    borderRadius: 3,
    font: '13px "宋体"',
    textAlign: "center",
    bgcolor: "#fff",
    strokeColor: '#000',
    fontweight: 100,
    lineBreak: 'normal',
  });
  // 三角形
  const triangle = new Path();
  const d = "M71.675 962l-9.675-900 890.325 900z";
  triangle.attr({
    anchor: 0.5,
    pos: [60, 20],
    size: [8, 8],
    path: { d, trim: true },
    fillColor: '#fff',
    bgcolor: '#fff',
    rotate: 135,
  });
  tips.append(triangle,message);
}
