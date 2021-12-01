PROGRAM Compres;
CONST
PASW="";//="71234567";
GLOBAL
MODO;
BEGIN
	mode_set(640,480,32);
	WRITE(0,320,240,4,"C=COMPRIMIR || D=DESCOMPRIMIR");
	REPEAT
	IF(KEYDOWN(_D));MODO=TRUE;BREAK;END
	FRAME;
	UNTIL(KEYDOWN(_C));
	
	CHDIR("../Penguin-PUSH");
	frame;
	//DIRECTORIO ACTUAL
	//CARPETAS
	
	CHDIR("GAME");
	FPG_COMPRES();frame;
	
	/*MAP_COMPRES();frame;
	CHDIR("..");
	
	CHDIR("MENU");
	FPG_COMPRES();frame;
	
	MAP_COMPRES();frame;
	CHDIR("..");
	
	CHDIR("PENGUIN");
	FPG_COMPRES();frame;
	CHDIR("..");
	*/
	exit("Listo:"+ITOA(MODO),0);
END

FUNCTION FPG_COMPRES();
PRIVATE
I;
BEGIN
	x=320;y=240;
	graph=2;
	
	GET_DIRINFO("*.FPG",_normal);
	
	IF(MODO);
		REPEAT
		FILE=FPG_LOAD(dirinfo.name[i],PASW);
		frame;
		FPG_SAVE(FILE,dirinfo.name[i]);FPG_UNLOAD(FILE);i++;
		UNTIL(i==dirinfo.files);
	ELSE
		REPEAT
		FILE=FPG_LOAD(dirinfo.name[i]);
		frame;
		FPG_SAVE(FILE,dirinfo.name[i],TRUE,PASW);FPG_UNLOAD(FILE);i++;
		UNTIL(i==dirinfo.files);
	END
END

FUNCTION MAP_COMPRES();
PRIVATE
I;
BEGIN
	x=320;y=240;
	GET_DIRINFO("*.MAP",_normal);
	
	IF(MODO);
		REPEAT
		GRAPH=MAP_LOAD(dirinfo.name[i],PASW);
		frame;
		MAP_SAVE(0,GRAPH,dirinfo.name[i]);MAP_UNLOAD(GRAPH);i++;
		UNTIL(i==dirinfo.files);
	ELSE
		REPEAT
		GRAPH=MAP_LOAD(dirinfo.name[i]);
		frame;
		MAP_SAVE(0,GRAPH,dirinfo.name[i],TRUE,PASW);MAP_UNLOAD(GRAPH);i++;
		UNTIL(i==dirinfo.files);
	END
END
