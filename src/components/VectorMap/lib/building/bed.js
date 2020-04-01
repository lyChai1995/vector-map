import { Sprite, Group, Path, Label } from "spritejs";
import { warning } from "./warning";
import { tips } from "./tips";
export function bed(patientRoom, bedItem) {
  // 床区域
  const bedAreas = new Group();
  bedAreas.attr({
    pos: [bedItem.bedX, bedItem.bedY],
    width: 130,
    height: 75,
    zIndex: 97,
  });
  patientRoom.append(bedAreas);
  // 床
  const bed = new Sprite();
  bed.attr({
    pos: [1, 7],
    width: 121,
    height: 60,
    bgcolor: '#274778',
    boxSizing: "border-box",
    border: {
      width: 1,
      color: '#526e9c',
    },
  });
  bedAreas.append(bed);
  // 被子
  const quilt = new Sprite();
  quilt.attr({
    pos: [4, 11],
    bgcolor: '#2F528F',
    boxSizing: "border-box",
    width: 89,
    height: 52,
    border: {
      width: 1,
      color: '#526e9c',
    },
  });
  bedAreas.append(quilt);
  //被子折角
  const triangle = new Path();
  const d = "M71.675 962l-9.675-900 890.325 900z";
  triangle.attr({
    anchor: 0.5,
    pos: [85, 56],
    size: [12, 13],
    path: { d, trim: true },
    fillColor: '#2a4a7e',
    bgcolor: '#37578c',
    rotate: 90,
    border: {
      width: 1,
      color: '#526e9c',
    },
  });
  bedAreas.append(triangle);
  // 枕头
  const pillow = new Sprite();
  pillow.attr({
    pos: [96, 19],
    fillColor: '#37578c',
    size: [21, 36],
    borderRadius: 3,
    border: {
      width: 1,
      color: '#526e9c',
    },
  });
  bedAreas.append(pillow);
  // 床头    
  const bedside = new Sprite();
  bedside.attr({
    pos: [121, 0],
    fillColor: '#263b68',
    size: [7, 73],
    border: {
      width: 1,
      color: '#3e5784',
    },
  });
  bedAreas.append(bedside);
  // 床号 
  const bedNumber = new Label(`${bedItem.bedNO}床`);
  bedNumber.attr({
    pos: [0, 0],
    fillColor: '#999',
    font: '15px "宋体"',
    lineHeight: 60,
    padding: [0, 30]
  });
  bedAreas.append(bedNumber);
  // 病人头像 
  let avatarPath = `src/components/VectorMap/img/avatar/${bedItem.avatar}`;
  const patientAvatar = new Sprite(avatarPath);
  patientAvatar.attr({
    pos: [76, 20],
    size: [40, 40],
    borderRadius: 20,
    bgcolor: "#fff",
    zIndex: 100,
  })
  bedAreas.append(patientAvatar);
  // 警报
  if (bedItem.warning) {
    warning(bedAreas, {
      waringPos: [51, 4]
    })
  }
}
