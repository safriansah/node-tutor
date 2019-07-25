const request=require('request');
const apiBaseUrl="http://localhost:8000/api/";

exports.register=function(req, res){
    console.log
    res.render('register', {
        'alert': req.session.alert
    });
};

exports.submitRegister=async function(req, res){
    const pass=req.body.pswd,
        conf=req.body.copswd;
    let data;
    if(pass!=conf){
        data={
            'message': 'Confirmasi password tidak valid',
            'type': 'warning'
        };
    }
    else{
        const dataObj={
            'username': req.body.uname,
            'password': req.body.pswd,
            'email': req.body.email,
            'tgl_lahir': req.body.tgll,
            'gender': req.body.jeka,
            'alamat': req.body.alamat,
            'kota': req.body.kota,
            'telp': req.body.telp,
            'paypal_id': req.body.paypal
        };
        const option={
            url: apiBaseUrl+'user',
            form: dataObj
        }
        data=await postData(option);
    }
    req.session.alert=data;
    res.redirect('register');
}

function postData(option){
    return new Promise(resolve => {
        request.post(option, function(error, response, body){
            if(error) return console.dir(error);
            const result=JSON.parse(body);
            const data={
                'message': result.message,
                'type': 'success'
            };
            console.log(body.message);
            resolve(data);
        })
    })
}

function getData(data){
    return new Promise(resolve => {
        request.get(apiBaseUrl+data, function (error, response, body){
            if(error) return console.dir(error);
            //console.log(JSON.parse(body));
            resolve(JSON.parse(body));
        });    
    })
}

exports.index=async function(req, res){
    //console.log('tes');
    let produk=await getData('produk');
    let kategori=await getData('kategori');
    res.render('index', {
        name: "safriansah",
        produk: produk,
        kategori: kategori
    });
}

