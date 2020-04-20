export function updateCharPosition(position, key) {
  let { bottom, left } = position;

  switch(key) {
    case "w":
      bottom += 10;
      break;
    case "a":
      left -= 10;
      break;
    case "s":
      bottom -= 10;
      break;
    case "d":
      left += 10;
      break;
    default:
  }

  return { bottom, left };
}
