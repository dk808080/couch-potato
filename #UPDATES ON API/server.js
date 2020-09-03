const express=require('express');

const fs=require('fs');

const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
  res.send("this is the homepage!!");
})


const diwali=  JSON.parse(
    fs.readFileSync('../json-app/src/data/festival/diwali-data.json')
);
app.get('/api/festival/diwali',(req,res)=>{
    res.status(200).json({
        status:'sucess',
        data:{
            diwali:diwali
        }
    });
})
app.post('/api/festival/diwali',(req,res)=>{
  console.log(req.body);
  res.send('Done!');
})

const rakhi= JSON.parse(
fs.readFileSync('../json-app/src/data/festival/rakhi-data.json')
);
app.get('/api/festival/rakhi',(req,res)=>{
  res.status(200).json({
    status:'sucess',
    data:{
      rakhi:rakhi
    }
  })
})

const beverages= JSON.parse(
  fs.readFileSync('../json-app/src/data/food/beverages-data.json')
  );
app.get('/api/food/beverages',(req,res)=>{
  res.status(200).json({
  status:'sucess',
  data:{
      beverages:beverages
    }
  })
})

const dairy= JSON.parse(
  fs.readFileSync('../json-app/src/data/food/dairy-data.json')
);
app.get('/api/food/dairy',(req,res)=>{
  res.status(200).json({
   status:'sucess',
   data:{
     dairy
   } 
  })
})

const fruits= JSON.parse(
  fs.readFileSync('../json-app/src/data/food/fruits-data.json')
);
app.get('/api/food/fruits',(req,res)=>{
  res.status(200).json({
    status:'sucess',
    data:{
      fruits
    }
  })
})

const vegetables= JSON.parse(
  fs.readFileSync('../json-app/src/data/food/vegetables-data.json')
);
app.get('/api/food/vegetables',(req,res)=>{
  res.status(200).json({
    status:'sucess',
    data:{
      vegetables
    }
  })
})

const oil=JSON.parse(
  fs.readFileSync('../json-app/src/data/grocery/edibleoils-data.json')
);
app.get('/api/grocery/oil',(req,res)=>{
  res.status(200).json({
    status:'sucess',
    data:{
      oil
    }
  })
})

const flour=JSON.parse(
  fs.readFileSync('../json-app/src/data/grocery/flours-data.json')
);
app.get('/api/grocery/flour',(req,res)=>{
  res.status(200).json({
    status:'sucess',
    data:{
         flour
    }
  })
})

const grains=JSON.parse(
  fs.readFileSync('../json-app/src/data/grocery/grains-data.json')
);
app.get('/api/grocery/grains',(req,res)=>{
  res.status(200).json({
    status:'sucess',
    data:{
         grains
    }
  })
})

const spices=JSON.parse(
  fs.readFileSync('../json-app/src/data/grocery/spices-data.json')
);
app.get('/api/grocery/spices',(req,res)=>{
  res.status(200).json({
    status:'sucess',
    data:{
         spices
    }
  })
})


const winter= JSON.parse(
 fs.readFileSync('../json-app/src/data/winter-special/winter-data.json')
);
app.get('/api/winter-special',(req,res)=>{
  res.status(200).json({
      status:'sucess',
      data : {
        winterSpecial: winter
      }
  });
})

const allProducts= JSON.parse(
  fs.readFileSync('../json-app/src/data/allproducts-data.json')
);
app.get('/api/allProducts',(req,res)=>{
  res.status(200).json({
    status:'sucess',
    data:{
      allProducts
    }
  })
})

app.listen('5000',function(){
    console.log('server up and about on port 5000');
})



