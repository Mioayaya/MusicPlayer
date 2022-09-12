import levelColor from "../common/level-color";

export function getUserGender(gender) {
  if(gender == 1) {
    return '♂';
  }else if(gender == 2) {
    return '♀';
  }else {
    return '';
  }
}

export function getUserGenderStyle(gender) {
  if(gender == 1) {
    return {backgroundColor:'#5fd4f2'};
  }else if(gender == 2) {
    return {backgroundColor:'#ff758f'};
  }else {
    return {display:'none'};
  }
}

export function getLevelStyle(level) {
  const style = {
    backgroundColor: '#79ecd9'
  }
  level = Number(level);
  switch(level) {
    case 0:  style.backgroundColor = levelColor[0]; break;
    case 1:  style.backgroundColor = levelColor[1]; break;
    case 2:  style.backgroundColor = levelColor[2]; break;
    case 3:  style.backgroundColor = levelColor[3]; break;
    case 4:  style.backgroundColor = levelColor[4]; break;
    case 5:  style.backgroundColor = levelColor[5]; break;
    case 6:  style.backgroundColor = levelColor[6]; break;
    case 7:  style.backgroundColor = levelColor[7]; break;
    case 8:  style.backgroundColor = levelColor[8]; break;
    case 9:  style.backgroundColor = levelColor[9]; break;
    default: break;
  }
  return style;
}