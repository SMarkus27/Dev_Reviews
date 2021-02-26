const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Ann Rose",
      job: "the boss",
      img:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
      text:
        "Disrupt glossier gastropub deep v vice franzen hell. Sriracha literally flexitarian irony, vape marfa unicorn. Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown ",
    },
    {
        id: 5,
        name: "bill anderson",
        job: "frontend developer",
        img:
          "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
];

// select items
const img = document.querySelector('.img-author');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const info = document.querySelector('.info');

// select buttons
const nextPerson = document.querySelector('.next-btn');
const prevPerson = document.querySelector('.preview-btn');
const randomPerson = document.querySelector('.btn-random');

let initial = 0;


window.addEventListener('load',function(){
    showPerson(initial);
})


//show the next person
nextPerson.addEventListener('click',function(){

    if(initial < reviews.length -1){
        initial ++;
    }
    else{
        initial = 0;
    }
    showPerson(initial);        
});

// show the prev person

prevPerson.addEventListener('click',function(){

    initial --;
    if (initial < 0){
        initial = reviews.length -1;
    }
    showPerson(initial);

});


//show random person
randomPerson.addEventListener('click',function(){

    initial = Math.floor(Math.random()*reviews.length)
    showPerson(initial);
});

function showPerson(initial){
    const person = reviews[initial];
    img.src = person.img;
    author.textContent = person.name;
    job.textContent = person.job;
    info.textContent = person.text;

}

