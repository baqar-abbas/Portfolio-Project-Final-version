const projectCards = [
  {
    card: 1,
    name: 'Tonic',
    name2: 'Tonic',
    image: 'image1.png',
    image2: 'image1modal.png',
    description: `A daily selection of privately personalized reads; no accounts or
                            sign-ups required.`,
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['CANOPY', 'Back End Dev', '2015'],
  },
  {
    card: 2,
    name: 'Multi-Post Stories',
    name2: 'Multi-Post Stories',
    image: 'image2.png"',
    image2: 'multiproject.png',
    description: `Experimental content creation feature that allows users to add to
                            an existing story over the course of a day without spamming their
                            friends.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
  },
  {
    card: 3,
    name: 'Tonic',
    name2: 'Facebook 360',
    image: 'image3.png',
    image2: 'facebookproject.png',
    description: ` Exploring the future of media in Facebook's first Virtual Reality
                            app; a place to discover and enjoy 360 photos and videos on Gear
                            VR.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['FACEBOOK', 'Full Sta ck Dev', '2015'],
  },
  {
    card: 4,
    name: 'Multi-Post Stories',
    name2: 'Uber Navigation',
    image: 'image4.png',
    image2: 'uberproject.png',
    description: `  A smart assistant to make driving more safe, efficient, and fun by
                            unlocking your most expensive computer: your car.`,
    technologies: ['html', 'css', 'javascript'],
    specifics: ['CANOPY', 'Back End Dev', '2015'],
    specifics2: ['UBER', 'Lead Developer', '2018'],
  },
];

const selectdiv = document.getElementById('demo');
const selectdivmob = document.getElementById('demo-mobile');
const page = document.querySelector('#demo');
const pagemob = document.querySelector('#demo-mobile');
const background = document.querySelector('.popupbackground');
const backgroundmobile = document.querySelector('.popupbackgroundmobile');
const closemodal = document.querySelector('.crossmodal');

function dynamic(n) {
  if (n === 1) {
    selectdiv.innerHTML = ` <h2 class="modalheading">  ${projectCards[0].name}  </h2> <a  href="javascript:;" onclick="popupclose()"><img class="crossmodal" src="cross.png" alt="cross"></a>
    <p class="specificpara">${projectCards[0].specifics[0]} <img class="dot" src="dot.png" alt="dot"> 
    <span class="popp13 col">${projectCards[0].specifics[1]}</span> <img class="dot" src="dot.png" alt="dot"> 
    <span class="popp13 col">${projectCards[0].specifics[2]}</span> </p>
    <img src="image1modal.png" alt="Nature" width="100%" height="350px" > 
    <p class = "paragrap">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum 
    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and 
     typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type
      and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
       industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
       <ul class="techlistmodal">
       <li><span class="htcjmodal">${projectCards[0].technologies[0]} </span> </li>
       <li><span class="htcjmodal">${projectCards[0].technologies[1]} </span></li>
       <li><span class="htcjmodal">${projectCards[0].technologies[2]}</span></li>
   </ul>   
   <ul class="techlistmodal2">
       <li><span class="htcjmodal">${projectCards[0].technologies[3]} </span> </li>
       <li><span class="htcjmodal">${projectCards[0].technologies[4]} </span></li>
       <li><span class="htcjmodal">${projectCards[0].technologies[5]}</span></li>
   </ul>     
   <br>
   <span><a class="abouts" href="https://baqar-abbas.github.io/Portfolio-Project-Final-version/" target="_blank">See Live<img class="seeliveicon1" src="seeliveicon.png"></a> </span> 
   <span><a class="abouts" href="https://github.com/baqar-abbas/Portfolio-Project-Final-version/tree/add-popup-Modal" target="_blank">See Source<img class="gitbuttonicon1" src="gitbutton.png"></a> </span> 
   `;

    page.style.display = 'block';
    background.style.display = 'block';
  } else if (n === 2) {
    selectdivmob.innerHTML = `<h2 class="popheading modalheading2">${projectCards[0].name2}</h2> <a href="javascript:;" onclick="popupclose()"><img class="crossmobile" src="cross1.png" alt="cross2" height="35px" width="35px"></a>
     <p class="popp13 mobilep">${projectCards[0].specifics2[0]} <img class="dot" src="dot.png" alt="dot"> 
                          <span class="popp13 col">${projectCards[0].specifics2[1]}</span> <img class="dot" src="dot.png" alt="dot"> 
                           <span class="popp13 col">${projectCards[0].specifics2[2]}</span></p> 
                           <img src="image1.png" alt="MobileImage" height="220px" width="311px">
                           <p class="popp15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                           standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essent</p> <ul class="techlist">
                            <li><span class="htcj">${projectCards[0].technologies[0]}</span> </li>
                            <li><span class="htcj">${projectCards[0].technologies[1]}</span></li>
                            <li><span class="htcj">${projectCards[0].technologies[2]}</span></li>
                        </ul>
                        <span><a class="abouts paddingt" href="https://baqar-abbas.github.io/Portfolio-Project-Final-version/" target="_blank">See Live<img class="seeliveicon2" src="seeliveicon.png"></a> </span> 
                        <span><a class="abouts paddingt" href="https://github.com/baqar-abbas/Portfolio-Project-Final-version/tree/add-popup-Modal" target="_blank">See Source<img class="gitbuttonicon2" src="gitbutton.png"></a> </span>`;
    pagemob.style.display = 'block';
  }
  pagemob.style.display = 'block';
  backgroundmobile.style.display = 'block';
}

const popup = document.querySelector('.btn-popup');

popup.addEventListener('click', dynamic);

const popupclose = (event) => {
  page.style.display = 'none';
  pagemob.style.display = 'none';
  background.style.display = 'none';
  backgroundmobile.style.display = 'none';
  event.preventDefault();
};

closemodal.addEventListener('click', popupclose);