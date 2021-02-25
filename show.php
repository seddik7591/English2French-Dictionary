<?php
include('connexionMysql.inc.php');

	if(isset($_POST['lien']) && !empty($_POST['lien']))
	{
		$lien=mysql_real_escape_string(htmlentities($_POST['lien']));
		$resultat=mysql_query("SELECT *  FROM enfr WHERE en='$lien' ");
		
		$row=mysql_num_rows($resultat);
		if($row==true)
		{
			while($rows=mysql_fetch_assoc($resultat))
			{
			
			echo"<p><strong>".$rows['en']."</strong><b>:</b><strong>".$rows['fr']."</strong></p>";
			}
		}
		
	}


?>