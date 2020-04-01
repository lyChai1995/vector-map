import { Sprite }  from "spritejs";
export function bedsideCupboard(patientRoom, obj) {
  // 床头柜
  const bedsideCupboard = new Sprite();
  bedsideCupboard.attr({
    pos: [obj.bedsideCupboardX, obj.bedsideCupboardY],
    size: [25,25],
    bgcolor: '#274778',
    border: {
      width: 1,
      color: '#526e9c',
    },
  });
  patientRoom.append(bedsideCupboard);
}
