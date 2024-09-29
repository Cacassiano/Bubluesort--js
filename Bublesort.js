/*function Bublesort(){
    let nums, tamanho, indice, troca,bbb
    bbb = 0
    indice = 0
    nums = [32, 2, 88, 11, 19, 66, 5, 25, 43, 54, 77]
    tamanho = nums.length
    for (let i = tamanho*tamanho; i>0; i--){   
            if (nums[indice] > nums[indice + 1]){
                [nums[indice] , nums[indice + 1]] = [nums[indice + 1] , nums[indice]]
                    indice++
                    troca = 0
            } else if (troca < tamanho){
                indice --
                troca ++
            }else if(troca > 2){
                indice++     
            }else{
                break
            }
            bbb++
    }
console.log(nums) 
console.log(bbb)
}*/

function Bublesort(){
    let nums, tamanho, troca,bbb
    bbb = 0
    nums = [32, 2, 88, 11, 19, 66, 5, 25, 43, 54, 77]
    tamanho = nums.length
    for (let i = tamanho; i>0; i--){   
        for (j = 0; j < tamanho-1; j++){
            troca = false
            if (nums[j] > nums[j + 1]){
                [nums[j] , nums[j + 1]] = [nums[j + 1] , nums[j]]
                    troca = true
            }
            bbb++
        }
        if (troca == false){
            break
        }    
    }

console.log(nums) 
console.log(bbb)
}
Bublesort();