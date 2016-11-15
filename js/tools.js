function createList(obj)
{
    console.log('{');
    
    var prop = Object.keys(obj);
    var msg = "";
    
    for(var i = 0; i < prop.length; i++)
    {
        msg += "\t" + prop[i] + ": {}";
        
//        if(Object.prototype.toString.call(obj[prop[i]]) === "[object Object]")
//        {
//            
//        }
        
        
        if( i < prop.length - 1 )
            msg += ",\n";
    }
    console.log(msg);
    
    console.log('}');
    
}