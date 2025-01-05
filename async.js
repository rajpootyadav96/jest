
const fetchData=(shouldFail=false)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(shouldFail){
                reject('error occured')
            }
            else{
                resolve('chocolate')
            }
        }, 1000);
    })
}

module.exports= fetchData;