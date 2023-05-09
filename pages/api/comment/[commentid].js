import {MongoClient} from 'mongodb'
async function handlecommentapi(req,res){
    const eventId=req.query.commentid;
    const client=await MongoClient.connect('mongodb+srv://abdullah:abd123@cluster0.34stq.mongodb.net/nextjscomment?retryWrites=true&w=majority')
    
    if(req.method==='POST'){
        const email=req.body.email;
        const name=req.body.name;
        const comment=req.body.text;

        if(!email || !name || !comment || !email.includes('@')){
            res.status(422).json({message:"Enter valid details"});
            return;
        }
        const commentdata={
            eventid:eventId,
            name,
            email,
            comment
        }
        const db=client.db();
   const response=await db.collection('comments').insertOne(commentdata)
        res.status(202).json({message:"Correct"})

        console.log(email +" "+name+ " "+comment);
        
    }
    if(req.method==='GET'){
      const db=client.db();
      const doc=await db.collection('comments').find().sort({_id:-1}).toArray();
      res.status(200).json({comments:doc})

    }
}
export default handlecommentapi