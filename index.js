// Code your solution here
function findMatching(value,string){
  return value.filter(word => word.toLowerCase()
  ===string.toLowerCase())
}

function fuzzyMatch(array,string){
return array.filter(word =>  word.substring(0,2) === string.substring(0,2) )
}

function matchName(array,string){
  const result = array.filter(word => word.name === string)
  return result
}


