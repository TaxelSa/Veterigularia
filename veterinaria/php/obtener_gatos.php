<?php
// Permitir acceso desde Angular (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// 🔧 CONFIGURA estos valores según tu base de datos
$host = 'localhost';
$dbname = 'mascota';
$user = 'root';
$pass = '';

try {
    // ✅ Crea la conexión PDO correctamente
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // ✅ Usa la conexión para consultar
    $stmt = $pdo->query("SELECT num, nombre, raza FROM gato");
    $gatos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // ✅ Devuelve los datos como JSON
    echo json_encode($gatos);

} catch (PDOException $e) {
    // ⚠️ Error al conectar o consultar
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
