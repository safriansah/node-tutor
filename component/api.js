const response=require('../res');
const connection=require('../conn');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

exports.kategori=function(req, res){
    const query="select * from tb_produk_kategori";
    connection.query(query, function(error, rows, fields){
        if(error) console.log(error);
        else response.ok(rows, res);
    });
};

exports.user=function(req, res){
    const query="select * from tb_user";
    connection.query(query, function(error, rows, fields){
        if(error) response.bad(error.sqlMessage, res);
        else response.ok(rows, res);
    });
};

exports.userShow=function(req, res){
    const query="select * from tb_user where id='"+req.params.id+"'";
    connection.query(query, function(error, rows, fields){
        if(error) response.bad(error.sqlMessage, res);
        else response.ok(rows, res);
    });
}

exports.upload=function(req, res){
    if(!req.files) return response.bad('tidak ada file', res);
    let sampleFile=req.files.sampleFile;
    let newName='tes.jpg';
    let dir='public/upload/';
    sampleFile.mv(dir+newName, function(error){
        if(error) return response.bad(error, res);
        return response.ok("berhasil gan "+sampleFile.name, res);
    });
}

exports.addUser=function(req, res){
    const username=req.body.username,
        password=bcrypt.hashSync(req.body.password, salt), 
        email=req.body.email,
        tgl_lahir=req.body.tgl_lahir,
        gender=req.body.gender,
        alamat=req.body.alamat,
        kota=req.body.kota,
        telp=req.body.telp,
        paypal_id=req.body.paypal_id;
    const query="insert into tb_user(username, password, email, tgl_lahir, gender, alamat, kota, telp, paypal_id) values ('"+username+"', '"+password+"', '"+email+"', '"+tgl_lahir+"', '"+gender+"', '"+alamat+"', '"+kota+"', '"+telp+"', '"+paypal_id+"')";
    connection.query(query, function(error, results, fields){
        if(error) response.bad(error.sqlMessage, res);
        else response.ok(results, res);
    })    
}

exports.produk=function(req, res){
    const query="select a.*, b.nama as kategori from tb_produk a, tb_produk_kategori b where a.id_kategori=b.id";
    connection.query(query, function(error, rows, fields){
        if(error) console.log(error);
        else response.ok(rows, res);
    });
};

exports.keranjang=function(req, res){
    const query="select a.id, b.nama, b.harga, b.keterangan, c.nama as kategori, a.jumlah from tb_keranjang a,tb_produk b, tb_produk_kategori c where a.id_barang=b.id and b.id_kategori=c.id";
    connection.query(query, function(error, rows, fields){
        if(error) console.log(error);
        else response.ok(rows, res);
    });
}

exports.addKeranjang=function(req, res){
    const id_user='1',
        id_barang=req.body.id_barang,
        jumlah=req.body.jumlah;
    const query='insert into tb_keranjang(id_user, id_barang, jumlah) values ( ?, ?, ? )';
    connection.query(query, [ id_user, id_barang, jumlah ], function(error, rows, fields){
        if(error) console.log(error);
        else response.ok("berhasil menambah data", res);
    });
};

exports.updateKeranjang=function(req, res){
    const id=req.body.id,
        id_barang=req.body.id_barang,
        jumlah=req.body.jumlah;
    const query='update tb_keranjang set jumlah=?, id_barang=? where id=?';
    connection.query(query, [ jumlah, id_barang, id ], function(error, rows, fields){
        if(error) console.log(error);
        else response.ok("berhasil update data", res);
    });
};

exports.deleteKeranjang=function(req, res){
    const id=req.body.id;
    const query='delete from tb_keranjang where id=?';
    connection.query(query, [ id ], function(error, rows, fields){
        if(error) console.log(error);
        else response.ok("berhasil delete data", res);
    });
};