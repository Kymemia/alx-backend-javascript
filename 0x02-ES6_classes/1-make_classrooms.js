/* eslint-disable import/extensions */
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const i = new ClassRoom(19);
  const j = new ClassRoom(20);
  const k = new ClassRoom(34);

  return [i, j, k];
}
