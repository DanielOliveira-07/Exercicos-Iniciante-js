  var  anosEstudo  =  7 ;

função  experiencia ( anos )  {
    if  ( anos <= 1 )  {
      retornar  "Iniciante" ;
    }  senão  se  ( anos <= 3 )  {
      retornar  "Intermediário" ;
    }  senão  se  ( anos <= 6 )  {
      retornar  "Avançado" ;
    }  mais  {
      retornar  "Mestre Jedi" ;
    }
  }
  
  console . log ( experiência ( anosEstudo ) ) ;