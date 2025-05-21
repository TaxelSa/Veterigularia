<?php
// Permitir peticiones desde otros orígenes (Angular)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// 🔧 Configura tu conexión (ajusta estos datos)
$host = 'localhost';
$dbname = 'mascota'; // tu base de datos
$user = 'root';          // usuario (en XAMPP suele ser root)
$pass = '';              // contraseña (en XAMPP suele estar vacía)

try {
    // ✅ Crear conexión PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // ✅ Verifica que venga el parámetro `num`
    if (!isset($_GET['num'])) {
        http_response_code(400);
        echo json_encode(["error" => "Falta el parámetro 'num'"]);
        exit;
    }

    $num = $_GET['num'];

    // ✅ Consulta segura con `prepare`
    $stmt = $pdo->prepare("SELECT * FROM gato WHERE num = ?");
    $stmt->execute([$num]);
    $gato = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($gato) {
        echo json_encode($gato);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "Gato no encontrado"]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
