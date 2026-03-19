import express, { Request, Response } from "express"

const app = express()
app.use(express.json())

/* CREATE A POST ROUTE */
app.post('/users' , async(req : Request, res : Response) =>{
const body   = req.body
console.log( "Body is here ----->", body)
})

/* CREATE A GET API  */
app.get('/' ,(req : Request, res : Response) =>{
res.status(200).json({
message: "This is the root route",
path: req.path
})
})

app.listen(5000, () =>{
    console.log("server running on port on 5000")
})