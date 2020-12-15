var mobileList =[
{
    model:'S9',
    brand:'samsung',
    color:'red',
    price:'12000',
    accessories:['charger','headphones'],
    features:{
        ram:'4gb',
        processor:'octa9.9ghz'
    }
    },
    {
    model:'note7',
    brand:'redmi',
    color:'black',
    price:'19000',
    accessories:['charger','headphones'],
    features:{
            ram:'2gb',
            processor:'octa9.98ghz' 
    }
    
    
}]
    
mobileList.forEach(mobile=>{
for(const key in mobile){
    var mob= mobile[key];
    if(mob instanceof Array){
    for(const i in mob)
     console.log('accessories:' +mob[i]);
    }else
      console.log(mob);
}
});   

  


            
    
        

