/**
 功能：报警
 参数：
 1、mounted 当前模块挂载对象
 2、warningItem 参数，用于控制位置
 */
import { Sprite, Group } from "spritejs";
export function warning(mounted, warningItem) {
  // 警报
  const warning = new Group();
  warning.attr({
    pos: warningItem.waringPos,
    size: [90,80],
    zIndex: 99
  });
  mounted.append(warning);
  const circle1 = new Sprite();
  circle1.attr({
    anchor: 0.5,
    pos: [45, 35],
    size: [65, 65],
    bgcolor: "#838476",
    borderRadius: 35,
    strokeColor: '#e4d4a0',
    border: {
      width: 1,
      color: '#e4d4a0',
    },
  });
  const circle2 = new Sprite();
  circle2.attr({
    anchor: 0.5,
    pos: [45, 35],
    size: [40, 40],
    bgcolor: "#a1a365",
    borderRadius: 25,
    strokeColor: '#e4d4a0',
    border: {
      width: 1,
      color: '#e4d4a0',
    },
  });
  warning.append(circle1, circle2);
  circle1.animate([
    { scale: [0.7, 0.7], opacity: 0 },
    { scale: [0.8, 0.8], opacity: 1 },
    { scale: [1, 1], opacity: 0.5 },
    { scale: [1.3, 1.3], opacity: 0 },
  ], {
    duration: 1000,
    iterations: Infinity,
  }).finished;
  circle2.animate([
    { scale: [1, 1], opacity: 0.5 },
    { scale: [1.1, 1.1], opacity: 1 },
    { scale: [1.3, 1.3], opacity: 0.5 },
    { scale: [1.5, 1.5], opacity: 0 },
  ], {
    duration: 1000,
    iterations: Infinity,
  });
}
