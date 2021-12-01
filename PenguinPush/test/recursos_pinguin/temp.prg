

Z_TEXT=texts.transform.position.z;//SETEAMOS Z_TEXT <-- TEXT_Z CLASICO
	
function szn(orig);//cordenada x original(0-853) => x escalado
begin
	return((orig*escala)/100);
end
function szny(orig);//cordenada y original(0-480) => x escalado
begin
	return((orig*escalay)/100);
end

function szt(ID_TXTX);//aplica el escalado texto + filtro liniear
begin
	if(escala_on);
		TEXT_LOCK(ID_TXTX);
		TEXT_SET_SCALE(ID_TXTX,escala,escalay);
		if(MODLEG=="MODERN");FILTER_T(ID_TXTX);END//texto de id write
	end
end

function szp(ID_pro);//aplica el escalado proceso + filtro liniear
begin
	if(escala_on);
		ID_pro.scale.x=escala;
		ID_pro.scale.y=escalay;
		if(MODLEG=="MODERN");FILTER_P(ID_pro);end//id proceso variable local
	end
end

function sze(render_entity *entity);//aplica el escalado entidad + filtro liniear
begin
	if(escala_on);
		entity.transform.scale.x=escala;
		entity.transform.scale.y=escalay;
		if(MODLEG=="MODERN");FILTER_E(entity);end//entidad de proceso
	end
end
