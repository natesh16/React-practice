const Apirequest=async (url='',opctionalobj=null,errmgs=null)=>{
    try{
        const responce=await fetch(url,opctionalobj)
            if(responce.ok) throw Error("Please Reload The App");
    }catch(err){

    }finally{

    }
}
export default Apirequest;