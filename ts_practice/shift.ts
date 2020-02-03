interface IShift {
    start: string;
    end: string;
  }
  
  const usershifts: IShift[] = [
      {
          start: '0600',
          end: '1000'
      },
      {
          start: '1600',
          end: '2000'
      }
  ];
  
  const globalShiftList:IShift[] =[
      {
          start: '0000',
          end: '2359'
      },
      {
          start: '0600',
          end: '1800'
      },
      {
          start: '0000',
          end: '1200'
      },
      {
          start: '0600',
          end: '1200'
      },
      {
          start: '1800',
          end: '2359'
      },
      {
          start: '0000',
          end: '0600'
      },
      {
          start: '1200',
          end: '2359'
      },
      {
          start: '1200',
          end: '1800'
      }
  ];


  globalShiftList.map(shift => {
    if (shift.start>= usershifts[0].end && shift.start <= usershifts[0].start){
        usershifts.push(shift);
    }

    if (shift.start>= usershifts[1].end || shift.start>= "0000" && shift.start <= usershifts[0].start){
        if (shift.end<= usershifts[0].start ){
            usershifts.push(shift);
        }
    }
    
    return usershifts
  
    
});


console.log(usershifts);
