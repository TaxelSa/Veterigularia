<?php
header('Content-Type: application/json');
include 'db_connection.php'; // Asegúrate de tener este archivo con tu conexión PDO

try {
    $stmt = $pdo->query("SELECT num, nombre, raza FROM gato");
    $gatos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($gatos);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
