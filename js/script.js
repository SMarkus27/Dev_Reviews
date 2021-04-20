const reviews = [
    {
      id: 1,
      language: "Python",
      creator: "Guido van Rossum",
      img:
        "./img/python.jpeg",
      text:
        "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.",
        
    },
    {
      id: 2,
      language: "JavaScript",
      creator: "Brendan Eich",
      img:
        "./img/js.png",
      text:
        "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web",
    },
    {
      id: 3,
      language: "C++",
      creator: "Bjarne Stroustrup",
      img:
        "./img/c++.png",
      text:
        "C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares, sendo bastante usada também na academia por seu grande desempenho e base de utilizadores.",
    },
    {
      id: 4,
      language: "C#",
      creator: "Microsoft",
      img:
        "./img/csharp.png",
      text:
        "C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente Java",
    },
    {
        id: 5,
        language: "CSS",
        creator: "World Wide Web Consortium",
        img:
          "./img/css.jpeg",
        text:
          "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos. ",
    },
    {
      id: 6,
      language: "HTML",
      creator: "W3C & WHATWG",
      img:
        "./img/html.jpeg",
      text:
        'HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.',
    },
    {
      id: 7,
      language: "Java",
      creator: "Sun Microsystems",
      img:
        "./img/java.png",
      text:
        "Java é o ambiente computacional, ou plataforma, criada pela empresa estadunidense Sun Microsystems, e vendida para a Oracle depois de alguns anos. A plataforma permite desenvolver programas utilizando a linguagem de programação Java.",
    },
    {
      id: 8,
      language: "PHP",
      creator: "Rasmus Lerdorf",
      img:
        "./img/php.png",
      text:
        "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.",
    },
    {
      id: 9,
      language: "Elixir",
      creator: "José Valim",
      img:
        "./img/elixir.jpeg",
      text:
        "Elixir é uma linguagem de programação funcional, concorrente, de propósito geral que executa na máquina virtual Erlang (BEAM). Elixir compila em cima de Erlang para fornecer aplicações distribuídas, em tempo real suave, tolerante a falhas, non-stop, mas também a estende para suportar metaprogramação com macros e polimorfismo via protocolos.",
    },
    {
      id: 10,
      language: "GO",
      creator: "Robert Griesemer, Rob Pike, Ken Thompson",
      img:
        "./img/go.png",
      text:
        "Go é uma linguagem de programação criada pela Google e lançada em código livre em novembro de 2009. É uma linguagem compilada e focada em produtividade e programação concorrente, baseada em trabalhos feitos no sistema operacional chamado Inferno.",
    },
    {
      id: 11,
      language: "Ruby",
      creator: "Yukihiro Matsumoto",
      img:
        "./img/ruby.jpeg",
      text:
        "Ruby é uma linguagem de programação interpretada multiparadigma, de tipagem dinâmica e forte, com gerenciamento de memória automático, originalmente planejada e desenvolvida no Japão em 1995, por Yukihiro 'Matz' Matsumoto, para ser usada como linguagem de script.",
    },
    {
      id: 12,
      language: "Rust",
      creator: "Graydon Hoare",
      img:
        "./img/rust.png",
      text:
        'Rust é uma linguagem de programação multiparadigma compilada desenvolvida pela Mozilla Research. É projetada para ser "segura, concorrente e prática", mas diferente de outras linguagens seguras, Rust não usa coletor de lixo. Possui suporte nativo ao WebAssembly.',
    },
];

// select items
const img = document.querySelector('.img-language');
const language = document.querySelector('.language');
const creator = document.querySelector('.creator');
const info = document.querySelector('.info');

// select buttons
const nextLanguage = document.querySelector('.next-btn');
const prevLanguage = document.querySelector('.preview-btn');
const randomLanguage = document.querySelector('.btn-random');

let initial = 0;


window.addEventListener('load',function(){
    showLanguage(initial);
})


//show the next language
nextLanguage.addEventListener('click',function(){

    if(initial < reviews.length -1){
        initial ++;
    }
    else{
        initial = 0;
    }
    showLanguage(initial);        
});

// show the prev language

prevLanguage.addEventListener('click',function(){

    initial --;
    if (initial < 0){
        initial = reviews.length -1;
    }
    showLanguage(initial);

});


//show random person
randomLanguage.addEventListener('click',function(){

    initial = Math.floor(Math.random()*reviews.length)
    showLanguage(initial);
});

function showLanguage(initial){
    const item = reviews[initial];
    img.src = item.img;
    language.textContent = item.language;
    creator.textContent = item.creator;
    info.textContent = item.text;

}

