<?php
header('Content-Type: application/json');
include 'db_connection.php';

if (isset($_GET['num'])) {
    $num = $_GET['num'];

    try {
        $stmt = $pdo->prepare("SELECT dueño, sintomas, padecimiento FROM gato WHERE num = ?");
        $stmt->execute([$num]);
        $detalle = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($detalle) {
            echo json_encode($detalle);
        } else {
            echo json_encode(['error' => 'Gato no encontrado']);
        }
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Parámetro num faltante']);
}
