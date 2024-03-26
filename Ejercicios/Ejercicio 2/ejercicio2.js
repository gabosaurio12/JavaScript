function nombreResolucion(ancho,alto){
	if (ancho < 1280 || alto < 719){
		return false;
	} else	if (ancho > 7679 && alto > 4319){
		return "8K";
		
	} else if (ancho > 3839 && alto > 2159){
		return "4K";
		
	} else if (ancho > 2559 && alto > 1439){
		return "WQHD";
	
	} else	if (ancho > 1919 && alto > 1079){
		return "FHD";

	} else	return "HD";
}

let nombre = nombreResolucion(1280,720);
console.log(nombre);