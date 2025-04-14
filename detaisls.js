const productimagediv=document.querySelector("#productimagediv")
const productimage=document.querySelectorAll("#productimage")
const left=document.querySelector('.left')
const right=document.querySelector('.right')
let widths=window.innerWidth


productimage.forEach((item,index)=>{
    item.style.position="absolute"
    item.style.left=`${index*widths}px`


})
const get=productimage[productimage.length-1].style.left
// let rightclick=productimage.length
// let clicked=0
// let leftclick=productimage.length
let leftclick=0
let rightclick=0
left.onclick=()=>{
   
    
    // if(leftclick>=productimage.length){
    //     leftclick=productimage.length
    //     return
    // }
   const prod=Array.of(productimage)
   console.log(prod)
   const get=productimage[productimage.length-1].style.left
   console.log(productimage[productimage.length-1])
   let max=get.indexOf("p")
   let abs=Number(get.substr(0,max))

    if(leftclick < productimage.length-1 || abs!=0){
        leftclick+=1

    productimage.forEach((item,index)=>{
      

        item.style.position="absolute"
        item.style.top="0px"

        // getting the absolute value
        const get=item.style.left
        let max=get.indexOf("p")
        let abs=Number(get.substr(0,max))
        

        // apply it on the image to position it
        item.style.left=`${abs-window.innerWidth}px`
        item.style.transition="0.5s"

    
    })
    }

console.log(leftclick)

}

right.onclick=()=>{
    rightclick+=1
    if(leftclick<=0){
        return
        
    }
    // if(leftclick>0){
    //     leftclick-=1
    //     rightclick+=1
    // }
    if(leftclick>0){
        leftclick-=1


        productimage.forEach((item,index)=>{
    
            item.style.position="absolute"
            item.style.top="0px"
    
            // getting the absolute value
            const get=item.style.left
            let max=get.indexOf("p")
            let abs=Number(get.substr(0,max))
            
    
            // apply it on the image to position it
            item.style.left=`${abs+window.innerWidth}px`
            item.style.transition="0.5s"

        
        })
    }
console.log(leftclick,"right")

}
