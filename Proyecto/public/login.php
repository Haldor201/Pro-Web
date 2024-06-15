<?php
session_start();

// Configuración de la base de datos
$host = 'localhost';
$dbname = 'levelup';
$username = 'root';
$password = '';

// Conectar a la base de datos
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Obtener los datos del formulario
$usuario = $_POST['txtusuario'];
$contraseña = $_POST['txtpassword'];

// Buscar el usuario en la base de datos
$stmt = $conn->prepare("SELECT * FROM users WHERE username = :username AND password = :password");
$stmt->bindParam(':username', $usuario);
$stmt->bindParam(':password', $contraseña);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    // Si el usuario es encontrado, iniciar sesión
    $_SESSION['usuario'] = $usuario;
    header("Location: pagina.html");
    exit();
} else {
    // Si no, mostrar un mensaje de error
    echo "Usuario o contraseña incorrectos";
}
?>
