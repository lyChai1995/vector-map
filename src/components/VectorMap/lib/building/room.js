import { Sprite, Group, Label } from "spritejs";
import { bed } from "./bed";
import { Tv } from "./tv";
import { door } from "./door";
import { tips } from "./tips";
import { bedsideCupboard } from "./bedsideCupboard";
export function room(patientRoomAreaGroup, roomItem) {
  // 房间
  const patientRoom = new Group();
  patientRoom.attr({
    anchor: 0.5,
    pos: [92, 10],
    width: 234,
    height: 250,
    border: {
      width: 1,
      color: '#2a4478',
    },
  });
  patientRoomAreaGroup.append(patientRoom);
  // 病房墙
  const wallRight = new Sprite();
  wallRight.attr({
    pos: [228, 0],
    width: 8,
    height: 260,
    bgcolor: '#1c2641',
    border: {
      width: 1,
      color: '#2a4478',
    },
  });
  const wallDoor = new Sprite();
  wallDoor.attr({
    pos: [0, roomItem.wallY], // Y is 0 or 240
    width: 235,
    height: 8,
    bgcolor: '#1c2641',
    border: {
      width: 1,
      color: '#2a4478',
    },
  });
  // 病房号
  const roomNumber = new Label(roomItem.roomNO);
  roomNumber.attr({
    pos: [0, 80],
    fillColor: '#999',
    font: '15px "微软雅黑"',
    lineHeight: 60,
    padding: [0, 20]
  });
  patientRoom.append(wallRight, wallDoor, roomNumber);

  roomItem.beds.forEach((item) => {
    bed(patientRoom, item);  // 床
    // 病床提示
    if (item.message.length > 0) {
      tips(patientRoom, {
        tipCoordinate: [item.bedX + 25, item.bedY - 7],
        message: item.message,
      });
    }
    bedsideCupboard(patientRoom, item); // 床头柜
  })
  // 门
  door(patientRoom, roomItem.door);
  // 电视 
  Tv(patientRoom);
}
