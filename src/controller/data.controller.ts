
import express, {Request, Response} from 'express';



export async function getall(req: Request, res: Response) {
    try {
    //   const user = await createUser(req.body);

    console.log("hereeeeeeeeeeeeeee")

    return res.status(200).send({
        message: " here in get all"
    })
} catch (e) {
console.log(e) 
return res.status(500).send(e);
}
  }
  
  
