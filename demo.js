function main() {
    const nowDate = new Date()
    console.log("Now date : ", new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(),  parseInt(nowDate.getHours()) +7))
    console.log(" Value : ", nowDate.getDate())
    console.log("function get date :", getBangkokTime())
    return
}

main()


function getBangkokTime(date = new Date()){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(),  parseInt(date.getHours()) +7, date.getMinutes() )
}