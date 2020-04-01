import { Sprite } from "spritejs";
export function Tv(patientRoom) {
  const tv = new Sprite();
  tv.attr({
    pos: [-1, 70],
    fillColor: '#263b68',
    width: 8,
    height: 72,
    border: {
      width: 1,
      color: '#526e9c',
    },
  });
  patientRoom.append(tv);
}
