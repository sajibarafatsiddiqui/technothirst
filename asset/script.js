const hamburger = document.querySelector(".mobile_menu");

hamburger.addEventListener("click", () => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const links = document.getElementsByClassName("nav_link")[0];
  
  const home = document.getElementsByClassName("grid-wrapper")[0];
  console.log(home)
  const divContainer = document.createElement("div");
  const linksChilds = Array.from(links.children);
  const property = {
    color: "#fff",
    fontSize: "32px",
    fontFamily: '"Lato", sans-serif',
    fontWeight: "bold",
    lineHeight: "44px",
    textDecoration: "none",
  };

  divContainer.style.backgroundColor = "rgba(39,42,49,0.7)";
  img.src = "statics/images/Toolbar.png";
  img.style.float = "right";
  img.style.marginRight = "1rem";
  img.addEventListener("mouseover", () => {
    img.style.cursor = "pointer";
  });
  links.style.display = "block";
  links.style.clear = "both";
  divContainer.style.zIndex = "999";
  divContainer.style.position = "fixed";
  divContainer.style.top = "0";
  divContainer.style.height = "130vh";
  divContainer.style.width = "100vw";
  div.style.marginTop = "40px";
  links.style.listStyle = "none";
  img.addEventListener("click", () => {
    divContainer.style.display = "none";
  });

  div.appendChild(img);
  div.appendChild(links);
  divContainer.append(div);
  home.appendChild(divContainer);

  for (let i = 0; i < linksChilds.length; i += 1) {
    const eltChildren = linksChilds[i].children;
    eltChildren[0].addEventListener("click", () => {
      divContainer.style.display = "none";
    });
    linksChilds[i].style.marginBottom = "20px";
    Object.assign(eltChildren[0].style, property);
  }
});



const speakers = [
   {
        img : "statics/images/speaker_01.png",
        name : "Andy Jassy",
        profession: "CEO,Amazon",
        description: "Andy Jassy is President and CEO of Amazon.com and also serves on the Board of Directors. He founded and led Amazon Web Services (AWS) from its inception and served as its CEO from April 2016 until July 2021."        
    },
    {
        img : "statics/images/speaker_02.png",
        name : "Peter Kern",
        profession: "CEO,Expedia",
        description: "Peter Kern is the Vice Chairman and Chief Executive Officer of Expedia Group. Mr. Kern has been a director of Expedia Group since completion of the IAC/Expedia Group Spin-Off and has served as Vice Chairman of Expedia Group since June 2018."        
    },
   {
        img : "statics/images/speaker_03.png",
        name : "Tekedra N. Mawakana",
        profession: "Co-CEO,Waymo",
        description: "Tekedra N. Mawakana is the co-CEO of Waymo, an autonomous driving technology company with a mission to make it safe and easy for people and things to get where they’re going."        
    },
   {
        img : "statics/images/speaker_04.png",
        name : "Michelle Bailhe",
        profession: "Partner,Sequoia Capital",
        description: "Michelle is a Partner at Sequoia investing in crypto, software and internet. She works with companies including FTX, Fireblocks and Pilot. Prior to Sequoia, Michelle worked at Hellman & Friedman, Google, and McKinsey & Company."        
    },
   {
        img : "statics/images/speaker_05.png",
        name : "Jennifer Bisceglie",
        profession: "CEO,Interos",
        description: "Jennifer Bisceglie is the founder and CEO of Interos, the dynamic supply chain risk management and operational resilience company.Jennifer and Interos have disrupted the traditional supply chain risk management discipline, bringing 24x7 real-time visibility into every supplier at every tier and at every location around the world."        
    },
    {
        img : "statics/images/speaker_06.png",
        name : "Michael Miebach",
        profession: "CEO,Mastercard",
        description: "Michael Miebach is chief executive officer of Mastercard and a member of the company’s board of directors.He is leading the company into a more digital world where Mastercard powers economies and empowers people by harnessing innovation and the continued application of new technologies."        
    }
]

const featureSpeakersWrap = document.createElement('div');
featureSpeakersWrap.className = "feature_speakers_wrap";
const featuresWrap= document.getElementsByClassName('features_wrap')[0];
featuresWrap.insertAdjacentElement("afterend",featureSpeakersWrap);

const featureSpeakers = document.createElement('section');
featureSpeakers.className =  "feature_speaker";
const propFeatureSpeakers = {
    textAlign: 'center',
    paddingTop: '7rem',
    color: 'rgb(39, 42, 50)',
    height: 'auto',
}
Object.assign(featureSpeakers.style,propFeatureSpeakers);
featureSpeakersWrap.appendChild(featureSpeakers);

const title = document.createElement('h2');
title.innerHTML ="Featured Speakers";
title.className = 'normal';
const propTitle = {
    fontSize: '1.5rem',
    display: 'block',
    fontWeight: 'normal'
}

Object.assign(title.style,propTitle)
featureSpeakers.appendChild(title);

const bar = document.createElement('div');
bar.className = 'guide_bar';
propBar = {
    width: '4.5rem',
    height: '1rem',
    borderBottom: '1px solid rgb(239, 81, 60)',
    margin: '0px auto 54px'
};
Object.assign(bar.style,propBar);
featureSpeakers.appendChild(bar);



const speakersList = document.createElement('div');
speakersList.className ='speakers_list';
propSpeakersList ={
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        marginBottom: '20px',
        marginTop: '50px',
        flexWrap: 'wrap'

}


featureSpeakers.appendChild(speakersList);

speakers.forEach((spk,i)=> {
// let hide="";
// if (i>1 ) {
//     hide = 'hide-speaker';
// }

let speaker = "speaker".concat(i);
speaker = document.createElement('div');
speaker.className ='speaker';
propSpeaker = {
    display: 'grid',
    gridTemplateColumns: '35% 65%',
    gap: '10px',
    gridTemplateRows: '5% 20% 75%',
    gridTemplateAreas: "'img name''img profession''img description'",
    height: '40vh',
    padding: '1.5rem',
   
};

Object.assign(speaker.style,propSpeaker);
const speakerImage = document.createElement('div');
speakerImage.classname ="speaker_image";
const img = document.createElement("img");
const propSpeakerImage = {
    gridArea: 'img',
    display: 'block'
}
Object.assign(speakerImage.style,propSpeakerImage)

speakerImage.appendChild(img);
speaker.appendChild(speakerImage);

const speakerName = document.createElement('h2');
speakerName.className ="speaker_name";
propSpeakerName = {
    fontSize: '1.2rem',
    textAlign: 'left',
    gridArea: 'name'
}
Object.assign(speakerName.style,propSpeakerName);
speaker.appendChild(speakerName);

const speakerProfession = document.createElement('h3');
speakerProfession.className="speaker_profession";
propSpeakerProfession ={
        fontSize: '1rem',
        color: 'rgb(255, 79, 56)',
        textAlign: 'left',
        gridArea: 'profession',
        
        
}
Object.assign(speakerProfession.style,propSpeakerProfession);
speaker.appendChild(speakerProfession);

const speakerDescription = document.createElement('p');
speakerDescription.className='speaker_desc';
propSpeakerDescription ={
    fontSize: '0.8rem',
    textAlign: 'left',
    gridArea: 'description',
    alignSelf:'strech'
}
Object.assign(speakerDescription.style,propSpeakerDescription)
speaker.appendChild(speakerDescription)
speakersList.append(speaker);
speaker.childNodes[0].childNodes[0].setAttribute('src',spk.img);
speaker.childNodes[0].childNodes[0].setAttribute('alt',spk.name);
Object.assign(speaker.childNodes[0].childNodes[0].style,{objectFit:'cover',maxWidth:'100%',maxHeight:'35vh'});
speaker.childNodes[1].innerHTML = spk.name;
speaker.childNodes[2].innerHTML = spk.profession;
speaker.childNodes[3].innerHTML = spk.description;

})

const mediaQuery = window.matchMedia("(min-width: 768px)");
const hideElt = document.querySelectorAll('.speaker:nth-child(n+3)')
function handleTabletChange(e) {
  if (e.matches) {
    Object.assign(speakersList.style,propSpeakersList)
    for (let i = 0; i < hideElt.length; i++) {
      hideElt[i].style.display = "grid";
    }

  } else {
    speakersList.removeAttribute('style')
    for (let i = 0; i < hideElt.length; i++) {
        hideElt[i].style.display = "none";
      }
    const btnContainer = document.createElement("div");
    btnContainer.className = "more";
    const propBtnContainer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        padding: '40px 50px',
        

    }
    const btn = document.createElement("button");
    btn.className ="btn";
    propButton ={
      width: '80vw',
      height:'3rem',
      background:'#fff',
      marginBottom:"4rem"
    }
    btnContainer.append(btn)
    btn.innerHTML="<span>MORE</span><i class='fa fa-chevron-down'></i> "
    Object.assign(btn.style,propButton)
    speakersList.append(btn)
  }
}
handleTabletChange(mediaQuery)
mediaQuery.addEventListener('change', handleTabletChange)
// mediaQuery.addListener(handleTabletChange);
if ('addEventListener' in mediaQuery) {
  mediaQuery.addEventListener('change', handleTabletChange)
 } else if ('addListener' in mediaQuery) {
  mediaQuery.addListener(handleTabletChange)
 }