

//删除字符左右空白

function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g,'');
}


//删除字符左空白

function ltrim(str){
  return str.replace(/(^\s*)/g,'');
}


//删除字符右空白

function rtrim(str){
  return str.replace((\s*$)/g,'');
}
