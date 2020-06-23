
 var  usuarios = [
    {
      nome: "Daniel" ,
      habilidades: [ "Javascript" ,  "ReactJS" ,  "Redux" ]
    } ,
    {
      nome: "Diego" ,
      habilidades: [ "VueJS" ,  "Ruby on Rails" ,  "Elixir" ]
    }
  ] ;
  

função  exibirHabilidades( usuarios )  {
    for  ( usuario  of  usuarios )  {
      console.log (
        "O"  +
          usuario.nome  +
          "Possui como Habilidades:"  +
          usuario.habilidades.junção ( "," )
      ) ;
    }
  }
  
 
  exibições( usuarios );