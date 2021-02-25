<?php
include('connexionMysql.inc.php');

	if(isset($_POST['search']) && !empty($_POST['search']))
	{
		$search=mysql_real_escape_string(htmlentities($_POST['search']));
		$query=mysql_query("SELECT *  FROM enfr WHERE en LIKE  '".$search."%' ");
		
		while($en=mysql_fetch_assoc($query))
		{
		
		echo"<li><a href='#'>".$en['en']."</a></li>";
		}
		
	}


?>