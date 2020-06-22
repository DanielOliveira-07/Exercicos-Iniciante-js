var  endereco  =  {
    rua : "Rua dos pinheiros" ,
    número : 1293 ,
    bairro : "Centro" ,
    cidade : "São Paulo" ,
    uf : "SP"
  } ;


function  exibirMensagem ( endereco )  {
    return  (
      "O Usuário mora em"  +
      endereco . cidade  +
      "/"  +
      endereco . uf  +
      ", no bairro"  +
      endereco . bairro  +
      ', na rua "'  +
      endereco . rua  +
      '"com nº'  +
      endereco . numero  +
      "."
    ) ;
  }
  

  console . log ( exibiçãoMensagem ( endereco ) ) ;