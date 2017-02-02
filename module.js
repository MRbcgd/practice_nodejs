//exports 객체 : 모듈을 생성할 때 사용
exports.abs=function(number){
  if(0 < number){
    return number
  } else{
    return -number;
  }
}

exports.circleArea=function(radius){
  return radius*radius*Math.PI
}
