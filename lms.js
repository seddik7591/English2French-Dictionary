$(document).ready(function(){

	$('#search').keyup(function(){//keyup za3ma lakan tappa 7aja

		var search=$(this).val();
		
		search=$.trim(search);//trim ykhawi ga3 les espace de début
	
		$('#resultat').text(search);//kol 7aja naktebha tetaficha direct fi search
		
		if(search=="")//si le chemps n'est pas vide
		{
		$('#feedback').hide();
		}
		if(search!=="")//si le chemps n'est pas vide
		{
			$('#feedback').empty();
			$('#feedback').show();
			$('#loader').show();
			$.post('post.php',{search:search},function(data){
			
			$('#resultat').html(data).show();//html psq ghadi nerslo les <li> bah mayafichihomch
			$('#loader').hide();
			
				$('a').click(function(){
				
					var lien=$(this).text();
					
					$('#loader').show();
					
					$('#search').attr('value',lien);
					
					$.post('show.php',{lien:lien},function(data){
					
					$('#feedback').html(data);
					$('#loader').hide();
					$('#resultat').hide();
					
					});
				
				});
			});
		
		}
		
	});

});