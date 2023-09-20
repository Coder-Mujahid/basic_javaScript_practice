var Day=['sunday','tuesday',"thursday"]

Day.forEach(item => {
    switch (item){
        case 'saturday':
            console.log("saturday is not class day");
            break;
        case 'sunday':
            console.log("sunday is class day");
            break;
        case 'monday':
            console.log("monday is not class day");
            break;
        case 'tuesday':
            console.log("tuesday is class day");
            break;
        case 'wednesday':
            console.log("wednesday is not class day");
            break;
        case 'thursday':
            console.log("thursday is class day");
            break;
        case 'firday':
            console.log("firday is not class day");
            break;
        default:
            console.log("not a day");
    }
  });
  
  
  
  
  
  