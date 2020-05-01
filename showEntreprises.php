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
