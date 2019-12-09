import axios from 'axios';


const url = "http://192.168.1.76:3001/post";
  
export default async function(key, d){
    var obj = {
        key:key,
        data:d
    };
    
    
    //all from Henry's api
    var r = await axios.post(url, obj);
    var json = JSON.parse(r.data.body);
    if(json.status){
        return json.data;
    }else{
        console.log(json);
    }
}