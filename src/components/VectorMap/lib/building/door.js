/**
参数定位：
  door: {
    coordinate: [30, 25], // 门坐标 [30, 23]
    doorRotate: 90 // 旋转角度 0 or 90
  },
 */
import { Sprite, Group }from "spritejs";
export function door(patientRoom, doorItem) {
  // 病房门
  const doorGroup = new Group();
  doorGroup.attr({
    pos: doorItem.coordinate,
    width: 66,
    height: 50,
    anchor: 0.5,
    rotate: doorItem.doorRotate
  });
  patientRoom.append(doorGroup);
  const doorColumn = new Sprite();
  doorColumn.attr({
    pos: [10, 0],
    strokeColor: "#526a97",
    lineCap: "square",
    width: 7,
    height: 50,
    bgcolor: '#37578c'
  });
  doorGroup.append(doorColumn);
  const doorRow = new Sprite();
  doorRow.attr({
    pos: [15, 42],
    strokeColor: "#526a97",
    lineCap: "square",
    width: 46,
    height: 8,
    bgcolor: '#37578c'
  });
  doorGroup.append(doorRow);
  // 圆弧 未找到虚线圆弧，用四分之一圆暂代
  const ring = new Sprite();
  ring.attr({
    pos: [10, 50],
    anchor: 0.5,
    size: [100, 100],
    borderRadius: 100,
    border: {
      style: [5, 8],
      width: 2,
      color: '#37578c',
    },

  });
  doorGroup.append(ring);
}
