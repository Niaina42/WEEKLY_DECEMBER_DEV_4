
const generateDate= (date) => {
    let month_name = ['Jan','Feb','Mar','Apr','Mai','June','Jul','Aoug','Sept','Oct','Nov','Dec']

    let day = new Date(date).getDate()
    let year = new Date(date).getFullYear()
    let month = new Date(date).getMonth()

    return day + "-" + month_name[month] + "-" + year
}

const fromatDate =(date)=>{
    if(date == null)  return ''
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) 
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;

    return [year, month, day].join('-');
}

export {
    generateDate,
    fromatDate
}