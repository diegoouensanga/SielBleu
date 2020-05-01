<?php

$objetPdo = new PDO('mysql:host=localhost;dbname=sielbleu_bdd','root','');

$pdoStat = $objetPdo->prepare('SELECT * FROM comptes_rendus');

$executeIsOk = $pdoStat->execute();

$listes = $pdoStat->fetchAll();


foreach ($listes as $liste):
	 $liste['id'];
	 $liste['entreprise'];
	 $liste['date_creation'];
endforeach;

$a =$liste['entreprise'];


echo json_encode(array(
	'companyname' => $a,
	
));

?>



<?php /*

$servername="localhost";    
$username="root";			
$password="";				
$dbname="sielbleu_bdd";				

//Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check connection
if ($conn->connect_error) {
    die("Connection failed :". $conn->connect_error);
}

$sql = "SELECT  id, entreprise, date_creation FROM comptes_rendus ";
$result = $conn->query($sql);
$rows = $result->fetch_assoc();
$a = $rows['entreprise'];


//if ($result->num_rows > 0){
   
    
        //while($row = $result->fetch_assoc()){
            echo json_encode(array(
				'companyname' => ''.$a.'',
				
			));
	//	}
	//}


*/?>