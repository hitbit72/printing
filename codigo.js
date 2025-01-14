function doGet(e){
  
  
  // Datos app
  const idapp = e.parameter.idapp || '';
  const anuncio = e.parameter.anuncio || 'anuncio1';
  const tablename = e.parameter.tablename || 'ANUNCIO';
  const imagen = e.parameter.imagen || 'santo.jpg';
  const nombre = e.parameter.nombre || 'NoName';
  const usefoto = e.parameter.usefoto || 'No';
  const tablefoto = e.parameter.tablefoto || 'DIFUNTO';
  const foto = e.parameter.foto || 'foto.jpg';
  const ella = e.parameter.ella || 'difunto';
  const fdia = e.parameter.fdia || '0';
  const fmes = e.parameter.fmes || '0';
  const fany = e.parameter.fany || '1990';
  const edad = e.parameter.edad || '0';
  const mdia = e.parameter.mdia || '0';
  const mmes = e.parameter.mmes || '0';
  const many = e.parameter.many || '1990';
  const mhora = e.parameter.mhora || '0:00';
  const iglesia = e.parameter.iglesia || 'iglesia';
  const tanatorio = e.parameter.tanatorio || 'tanatorio';
  const poblacion = e.parameter.poblacion || 'poblacion';

  const ffecha = fdia + " de " + fmes + " del " + fany;
  const mfecha = mdia + " de " + mmes + " del " + many + " a las " + mhora;
  
  var htmlTemplate = HtmlService.createTemplateFromFile(anuncio);

  htmlTemplate.appid = idapp;
  htmlTemplate.usefoto = usefoto;
  htmlTemplate.tablefoto = tablefoto;
  htmlTemplate.foto = foto;

  htmlTemplate.idapp = idapp;
  htmlTemplate.tablename = tablename;
  htmlTemplate.imagen = imagen;
  htmlTemplate.nombre = nombre;
  htmlTemplate.ffecha = ffecha;
  htmlTemplate.edad = edad;
  htmlTemplate.mfecha = mfecha;
  htmlTemplate.iglesia = iglesia;
  htmlTemplate.ella = ella;
  htmlTemplate.tanatorio = tanatorio;
  htmlTemplate.poblacion = poblacion;
  htmlTemplate.ffecha2 = ffecha;

  return htmlTemplate.evaluate();

}
