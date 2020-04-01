import { Group, Sprite, Label } from "spritejs";
import { door } from "./door";
// import { arrow } from "./arrow";
export function medicalPersonnelArea(medicalStaffArea, obj) {
  /*========= 护士站 =========== */
  const nursingStation = new Group();
  nursingStation.attr({
    pos: [0, 0],
    width: 355,
    height: 252,
  });
  medicalStaffArea.append(nursingStation);
  const nursingStationLabel = new Label("护士站");
  nursingStationLabel.attr({
    pos: [120, 100],
    fillColor: '#495466',
    font: '17px "微软雅黑"',
    padding: [0, 30]
  });
  nursingStation.append(nursingStationLabel);
  // 医疗室和配药室
  const treatmentPharmacyRoom = new Sprite();
  treatmentPharmacyRoom.attr({
    pos: [0, 79],
    width: 360,
    height: 8,
    bgcolor: '#1C2641',
    border: {
      width: 1,
      color: '#264476'
    },
  });
  nursingStation.append(treatmentPharmacyRoom);
  door(nursingStation, {
    coordinate: [30, 63], // 门坐标 [30, 23]
    doorRotate: 0 // 旋转角度 0 or 90
  });
  const treatment = new Label("医疗室");
  treatment.attr({
    pos: [60, 18],
    fillColor: '#495466',
    font: '17px "微软雅黑"',
    lineHeight: 60,
    padding: [0, 30]
  });
  const pharmacyLabel = new Label("配药室");
  pharmacyLabel.attr({
    pos: [190, 18],
    fillColor: '#495466',
    font: '17px "微软雅黑"',
    lineHeight: 60,
    padding: [0, 30]
  });
  // 医疗室和配药室隔墙
  const treatmentPharmacyWall = new Sprite();
  treatmentPharmacyWall.attr({
    pos: [177, 0],
    size: [2,55],
    border: {
      width: 1,
      color: '#264476'
    },
  });

  nursingStation.append(treatment, pharmacyLabel, treatmentPharmacyWall);
  // 前台
  const reception = new Group();
  reception.attr({
    pos: [110, 182],
    width: 242,
    height: 66,
    bgcolor: '#162544',
    border: {
      width: 2,
      color: '#2a4478',
    },
  });
  nursingStation.append(reception);
  const computer = new Sprite();
  computer.attr({
    pos: [29, 10],
    width: 49,
    height: 24,
    bgcolor: '#162544',
    border: {
      width: 2,
      color: '#264476'
    },
  });
  reception.append(computer);
  const keyboard = new Sprite();
  keyboard.attr({
    pos: [26, 45],
    width: 59,
    height: 8,
    bgcolor: '#162544',
    border: {
      width: 2,
      color: '#264476'
    },
  });
  reception.append(keyboard);

  /*========= 通道区域 =========== */
  const passagewayArea = new Group();
  passagewayArea.attr({
    pos: [0, 0],
    width: 355,
    height: 252,
  });
  medicalStaffArea.append(passagewayArea);
  const gate = new Group();
  gate.attr({
    pos: [0, 32],
    width: 200,
    height: 220,
    bgcolor: "#162544"
  });
  passagewayArea.append(gate);
  const gateLeft = new Sprite();
  gateLeft.attr({
    pos: [0, 0],
    width: 97,
    height: 135,
    bgcolor: "#37578c",
    boxSizing: "border-box",
    border: {
      width: 1,
      color: '#526e9c'
    },
  });
  // arrow(gate);
  const gateLeftHandle = new Sprite();
  gateLeftHandle.attr({
    pos: [86, 0],
    width: 10,
    height: 135,
    opacity: 0.7,
    fillColor: '#45649a',
    boxSizing: "border-box",
    border: {
      width: 2,
      color: '#888'
    },
  });
  const gateRight = new Sprite();
  gateRight.attr({
    pos: [103, 0],
    width: 97,
    height: 135,
    bgcolor: "#37578c",
    boxSizing: "border-box",
    border: {
      width: 1,
      color: '#526e9c'
    },
  });
  const gateRightHandle = new Sprite();
  gateRightHandle.attr({
    pos: [103, 0],
    strokeColor: "#999",
    lineCap: "square",
    width: 10,
    height: 135,
    opacity: 0.7,
    fillColor: '#45649a',
    boxSizing: "border-box",
    border: {
      width: 2,
      color: '#888'
    },
  });
  const stairs = new Sprite();
  stairs.attr({
    pos: [0, 135],
    width: 200,
    height: 85,
    bgcolor: "#37578c",
    boxSizing: "border-box",
    border: {
      width: 1,
      color: '#888'
    },
  });
  const stairsLabel = new Label("疏散通道");
  stairsLabel.attr({
    pos: [37, 145],
    fillColor: '#999',
    font: '17px "微软雅黑"',
    lineHeight: 60,
    padding: [0, 30]
  });
  gate.append(gateLeft, gateLeftHandle, gateRight, gateRightHandle, stairs, stairsLabel);
  const doctorOffice = new Group();
  doctorOffice.attr({
    pos: [200, 0],
    width: 155,
    height: 252,
    bgcolor: "#162544"
  });
  passagewayArea.append(doctorOffice);
  const docterOfficeWallLeft = new Sprite();    
  docterOfficeWallLeft.attr({
    pos: [0, 0],
    width: 10,
    height: 252,
    bgcolor: '#1C2641',
    border: {
      width: 1,
      color: '#264476'
    },
  });
  const docterOfficeWallTop = new Sprite();
  docterOfficeWallTop.attr({
    pos: [0, 0],
    width: 155,
    height: 8,
    bgcolor: '#1C2641',
    border: {
      width: 1,
      color: '#264476'
    },
  });
  const docterOfficeLabel = new Label("医生办");
  docterOfficeLabel.attr({
    pos: [30, 100],
    fillColor: '#495466',
    font: '17px "微软雅黑"',
    lineHeight: 60,
    padding: [0, 30]
  });
  doctorOffice.append(docterOfficeWallLeft, docterOfficeWallTop, docterOfficeLabel);
  door(doctorOffice, {
    coordinate: [45, 25], // 门坐标 [30, 23]
    doorRotate: 90 // 旋转角度 0 or 90
  });
}
