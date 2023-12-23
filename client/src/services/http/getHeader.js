
export function getHeader(token, type){
    if(type === 'file')  {
        if (token != null){
            return { 
                'Authorization': 'my_key '+ token,
                'Content-Type':'multipart/form-data'
            };
        }
        else{
            return { 
                'Authorization': '',
                'Content-Type':'multipart/form-data'
            };
        }  
    }
    else {
        if (token != null){
            return { 
                'Authorization': 'my_key '+ token,
                'Content-Type':'application/json'
            };
        }
        else{
            return { 
                'Authorization': '',
                'Content-Type':'application/json'
            };
        }  
    }
}