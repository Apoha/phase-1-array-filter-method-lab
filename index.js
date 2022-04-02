// Code your solution here





/** function findMatching(array, name){

   const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

        for (name of array ){
            if(array[name]=== "Bobby"){
                return array[name]
            }
        }
}

filter(findMatching(drivers, "Bobby")) **/




function findMatching(arr, string) {
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

    const matchFound = arr.filter(function (element) {

            return element.toUpperCase() === string.toUpperCase()
    }) 
return matchFound

}




function fuzzyMatch(arr, string){

const matchedFuzzy = arr.filter(function(element){ 

    if(element.toString().startsWith(string)){
        return element}
    else if(element.endsWith(string ==='y') && element.include(string === "mm")){
        return []
    }

})
        return matchedFuzzy 
}






function matchName(arr, string){

    

  function isMatchName(obj){

        if(obj.name === string ){
          return obj}
    }

    const driversReference = arr.filter(isMatchName)
    return driversReference
}
   