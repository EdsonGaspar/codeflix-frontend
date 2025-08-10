export const getSettings= (): Promise<{theme:string, lang:string}>=>{
    return new Promise((resolve)=>{
       setTimeout(()=>{
         resolve({
            theme:'light',
            lang:'en',
        })}, 5000)
       })
    }
