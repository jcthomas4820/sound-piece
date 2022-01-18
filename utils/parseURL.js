export const parseURL = (url) => {

    let string = url.replace('#', '&')
    const keyValArr = string.split('&') 
    
    const res = {}

    for (let i=1; i<keyValArr.length; i++){
        let keyVal = keyValArr[i]
        let keyValPair = keyVal.split('=')
        let key = keyValPair[0]
        let val = keyValPair[1]
        res[key] = val
    }

    return res

}
