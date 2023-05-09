import {MongoClient} from 'mongodb'
async function handlenewsletter(req,res){
if(req.method==='POST'){
    const emailinput=req.body.email;

    if(!emailinput || !emailinput.includes('@')){
        res.status(422).json({message:"Invalid email"})
        return ;
    }
    const client=await MongoClient.connect('mongodb+srv://abdullah:abd123@cluster0.34stq.mongodb.net/nextjsdata?retryWrites=true&w=majority')
    
        const db=client.db()
       await db.collection('emails').insertOne({email:emailinput})
   client.close();
console.log(emailinput);
res.status(201).json({message:"Signed Up!"})
}
}
export default handlenewsletter;