const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://varshini04:Varshini%4004@cluster0.9dfehqu.mongodb.net/grabneatmern?retryWrites=true&w=majority&appName=Cluster0'
//const mongoURI='mongodb://varshini04:Varshini@04@ac-lih2s1n-shard-00-00.9dfehqu.mongodb.net:27017,ac-lih2s1n-shard-00-01.9dfehqu.mongodb.net:27017,ac-lih2s1n-shard-00-02.9dfehqu.mongodb.net:27017/?ssl=true&replicaSet=atlas-9nh7su-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
//const mongoURI="mongodb://varshini04:Varshini%404@ac-lih2s1n-shard-00-00.9dfehqu.mongodb.net:27017,ac-lih2s1n-shard-00-01.9dfehqu.mongodb.net:27017,ac-lih2s1n-shard-00-02.9dfehqu.mongodb.net:27017/grabneatmern?ssl=true&replicaSet=atlas-9nh7su-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
mongoose.set('strictQuery', true);
const mongoDB = async () => {
        try{
        await mongoose.connect(mongoURI).then(() => console.log("connected")).catch((e) => console.log(e));
        const fetched_data=await mongoose.connection.db.collection("food_items");
        const data=await fetched_data.find({}).toArray();
        global.food_items=data;
            const foodCategory=await mongoose.connection.db.collection("foodCategory");
           const catData=await foodCategory.find({}).toArray();
               global.foodCategory=catData;
        }
        catch(err)
        {
            console.log(err);
        }
               //console.log(global.food_items)
        
        
            
            // if(err)  console.log(err);
            // else{
            //    global.food_items=data;
            //    //console.log(global.food_items)
            // }
        };


module.exports = mongoDB;

