<?php 
include'assets/php/koneksi.php';
$user->cekLog();
$data=$keranjang->getAllData();
$jumlahKeranjang=$keranjang->getKeranjangCount();
$no=1;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Mikamerah Tutorial</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <script src="assets/js/vendor/jquery-slim.min.js"></script>
    <script src="assets/js/vendor/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand text-danger" href="<?=$base_url?>index.php">Mikamerah</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link active" href="cart.php">Keranjang (<?=$jumlahKeranjang?>)</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pembayaran</a>
            </li>    
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-light" href="profile.php"><?=$_SESSION['uname']?></a>
            </li>
            <li class="nav-item">
                <form action="aksi.php" method="post">
                    <input class="btn btn-warning btn-sm my-1" type="submit" name="logout" value="logout">
                </form>
            </li> 
        </ul>
    </div>
</nav>

<div class="container py-5 full-height">
    <h2>Tabel Keranjang</h2>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Jumlah</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
            <?php
            $total=0;
            foreach((array) $data as $d){
                $item=$produk->getDataById($d['id_barang']);
                $subtotal=$d['jumlah']*$item['harga'];
            ?>
                <tr>
                    <td><?=$no?>.</td>
                    <td><?=$item['nama']?></td>
                    <td><?=$produk->getRupiahFormat($item['harga'])?></td>
                    <td><?=$d['jumlah']?></td>
                    <td><?=$produk->getRupiahFormat($subtotal)?></td>
                    <td>
                        <form action="aksi.php" class="text-right" method="post">
                            <input type="hidden" name="id" value="<?=$d['id']?>">
                            <input type="submit" name="delKeranjang" class="btn btn-danger mx-1" value="Hapus">
                        </form>
                    </td>
                </tr>
            <?php
            $total+=$subtotal;
            $no++; 
            } 
            ?>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan='2'>Total Yang Harus Dibayar:</td>
                    <td colspan='3'><?=$produk->getRupiahFormat($total)?></td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>

<div class="text-center py-3 bg-secondary text-light">
    <p>&copy; 2019 <a class="text-light" href="https://safriansah.blogspot.com/">Mikamerah Blog</a></p>
</div>

</body>
</html>