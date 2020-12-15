var studentList =[
    {
        name:'Sonu',
        rollno:'7',
        phone:'7719099462',
        department:'IT',
        hobbies:['sports','music','dance','swimming','reading'],
        },
        {
            name:'monu',
            rollno:'6',
            phone:'7789675431',
            department:'CSE',
            hobbies:['sports','music','dance','swimming','reading'],
     },
     {
        name:'tonu',
        rollno:'4',
        phone:'7789675467',
        department:'ESE',
        hobbies:['sports','music','dance','swimming','reading'],
     },

     {
        name:'bobby',
        rollno:'2',
        phone:'7789675890',
        department:'EEE',
        hobbies:['sports','music','dance','swimming','reading'],
     },
     {
        name:'sam',
        rollno:'9',
        phone:'7789675099',
        department:'Mechanical',
        hobbies:['sports','music','dance','swimming','reading'],
     }]
     
        
    
        
    studentList.forEach(student=>{
    for(const key in student){
        var stud= student[key];
        if(stud instanceof Array){
        for(const i in stud)
         console.log('hobbies:' +stud[i]);
        }else
          console.log(stud);
    }
    });   
    