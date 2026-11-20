import Fastfy from "fastify";

const app = Fastfy({logger: true});

app.get("/", async()=>{
    return {message: "Hello World"};
})

const start = async ()=>{
    try{
        await app.listen({
            port: 3000
        });
        console.log("Server is running on port 3000");
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

start();