const front=require('../component/index');
const api=require('../component/api');

module.exports=function(app){
    app.route('/').get(front.index);
    app.route('/register').get(front.register);
    app.route('/register').post(front.submitRegister);
    app.route('/api/produk').get(api.produk);
    app.route('/api/kategori').get(api.kategori);
    app.route('/api/user').post(api.addUser);
    app.route('/api/user').get(api.user);
    app.route('/api/user/:id').get(api.userShow);
    app.route('/api/upload').post(api.upload);
}