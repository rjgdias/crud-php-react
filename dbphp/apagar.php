<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

include_once 'conexao.php';

$response = "";
$id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);

$query_produto = "DELETE FROM produtos WHERE id=:id LIMIT 1";
$delete_produto = $conn -> prepare($query_produto);
$delete_produto -> bindParam(':id', $id, PDO::PARAM_INT);

if($delete_produto->execute()){
    $response = [
        "erro" => false,
        "mensagem" => "Produto apagado com sucesso. $id"
    ];
}else{
    $response = [
        "erro" => true,
        "mensagem" => "Houve um erro e o produto não foi apagado. $id"
    ];
}

http_response_code(200);
echo json_encode($response);