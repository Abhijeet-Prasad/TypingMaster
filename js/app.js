const Paragraphs = [
    "Mental health is crucial and integrates a component of health. Mental health includes an individual’s psychological, emotional and social well-being. Proper mental health results in the proper mental functioning that result in being productive in activities, healthy and fulfilling relationships with other people and having the ability to cope and adapt to adversity. Proper mental health is essential in every stage of life – from childhood and teenage to adulthood. Throughout a lifetime, an individual can experience mental health issue at any point. This affects not only their mood and behavior but also changes their way of thinking, of looking at life and facing challenges. For a long time, mental health has been defined as the absence of mental illnesses such as anxiety and depression. Mental illness typically refers to all the diagnosable mental disorders - health conditions that are characterized by alterations in mood, thinking and behavior associated with impaired functioning or distress.",

    "Having a healthy lifestyle is all about choosing to live your life in the healthiest way possible. There are a few things you have to do to start living your life in this way, i.e. the healthy way. This means doing some amount of exercise daily, such as jogging, yoga, playing sports, etc. Adding to this, you must also have a balanced and nutritional diet with all the food groups. It would be best if you were taking the right amount of proteins, carbohydrates, vitamins, minerals, and fats to help you have a proper diet. Grouped with these two essential aspects (diet and exercise), a healthy person also maintains the same sleep cycle, which should consist of around 7- 8 hours of sleep. However, we must remember that a healthy lifestyle not only refers to our physical and mental health. Maintaining a balanced diet, exercising daily, and sleeping well are essential parts of a healthy lifestyle. But feeling happy is also a big part of a healthy lifestyle. When a person does not feel happy or good about themselves, they are not entirely healthy. Thus we must do our best to think positively so that we can feel happy rather than sad.",

    "Self-confidence is a state of mind where someone pushes their boundaries and encourages belief from the very beginning, and this comes from a place of selflove. You ought to love yourself to gain that freedom from doubting your actions. Self Confidence is the key to success, or we can say it the first step towards success. If a person possesses self-confidence, then he/she has inevitably won half the battle. We see people in school, workplaces and public sectors who have achieved success be more initiative, more forward and active, and more confident with their decisions, making them stand out from the crowd. But when it comes to a person who cannot trust themselves or believe in themselves, success is a hard gain for them. They become more vulnerable to criticism and failure. They also find it super hard to get back on their feet and carry on. Everyone who has self-confidence gets to enjoy various perks that come along with that state of mind. One of them being is finding the magnitude of a difficult job lesser than it is. It helps you face your failure and own up to it in a positive light. It helps you rise multiple times to believe that you will excel and improve in your next attempt.",

    "Bitcoin is an electronic currency created back in January 2009. It is known to be decentralized electronic cash that does not rely on banks. It is possible to send from one user to another on the bitcoin blockchain network with the necessity for mediators. It is primarily used for sending or receiving cash through the internet even to the strangers.It has been created by an individual known as Satoshi Nakamoto. Besides, the bitcoins are typically handled without specific rules by the central government, unlike dollars and euros. It is not owned by a country, individual, or a group. Therefore, it reduces the chances of corruption and inflation. Bitcoin is continuously increasing in popularity across the world. The crucial difference between actual cash and bitcoin is that it can be utilised without the need for internet access. It is very tough to identify the address of the users until they connect a bitcoin address to their name. The users are not tracked by bitcoin usually, although the addresses where the money is stored are continuously tracked. There are two vital parts of every address, for instance, private and public. Nowadays, the usage of bitcoin is increasing across the world. Many individuals use it to receive or send money with the use of the internet. Besides, it also allows exchanging the cash without revealing the original identity connected to it.",
    "We believe that an empowered woman can change a lot in the society. Unlike other Women Empowerment programs, we believe that Money as an energy is one of the most powerful empowerment tools. We believe in practical steps to create income for women, who are capable and intelligent and willing to work, however due to various reasons are unable to do it today. The reasons could be varied for various women, some women could be deprived of these opportunities because their men don't want them to work, the others may be restricted due to family pressures or peer pressures. It is time to let go of all pressures and work towards becoming empowered with regular income coming your way. It is amazing that from an early age, women start to learn about some of the finest human qualities like compassion, self awareness, sacrifice, service, devotion by observing their own mothers, grandmothers and other women in their lives. For many centuries, the role of woman was to be the nurturing institution for her children, to be the solid foundation for her spouse, and to be the soldier fighting against the world? sufferings. Then came the times when Women got to the space of equality in the work place, achieving their own dreams, and becoming equal financial contributors within their households. Now I believe it is time for them to lead the way forward this New Year, let focus on Women Empowerment in Business share with as many women as you think you would like to I am taking the pledge this new year to work on a business model that is going to empower 3000 women of India to lead the way in their own special way. The exact boundary between primary and secondary education also varies from country to country and even within them, but is generally around the seventh to the tenth year of schooling. Secondary education occurs mainly during the teenage years."
]


const lines = document.querySelector('.lines'),
      resetBtn = document.getElementById("reset"),
      time_text = document.querySelector(".clock .info b"),
      wpm_text = document.querySelector(".wpm .info b"),
      mistakes_text = document.querySelector(".typing-error .info b"),
      accuracy_text = document.querySelector(".accuracy .info b");

    //   cpm_Span = document.querySelector(".cpm span");

let timer, charIndex = mistakes = 0;
let timeLeft = 60;
let  isTyping = false;

// add event linstner to typinf-text to check what key user has pressed.
document.addEventListener('keydown', typing)
resetBtn.addEventListener("click", reset);


function randomPara(){
    var index = Math.floor(Math.random() * Paragraphs.length),
    letters = ""
    lines.innerHTML = ""
    Paragraphs[index].split("").forEach(char => {
        if(char==" "){
            letters += `<span class="letter">${char}</span>`
            lines.innerHTML += `<p class="word">
                                        ${letters}
                                    </p>`;
            letters = ""
        }
        else{
            letters += `<span class="letter">${char}</span>`
        }
    });

    document.querySelector(".letter").classList.add('active')

    charIndex = 0;
    mistakes = 0;
}

function typing(e){
    const characters = lines.querySelectorAll("span");
    // let typedChar = inputText.value.split("")[charIndex];
    
    if(((charIndex <= characters.length - 1) || e.key == " ") && timeLeft > 0){

        if(!isTyping){
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
    
        if(e.key == 'Backspace'){
            if(charIndex > 0){
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect")){
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct","incorrect");

                if(characters[charIndex].getBoundingClientRect().top < 280){
                    let topMargin = parseInt(lines.style.marginTop || "0px");
                    if(topMargin < 0){
                        lines.style.marginTop = (topMargin + 40) + "px";
                    }
                }
            }
        }
        else if (e.key == " " && characters[charIndex].innerText == ""){
            charIndex++;
        }
        else if(e.key !== "Shift"){
            if(characters[charIndex].innerText === e.key){
                characters[charIndex].classList.add("correct");
            }
            else{
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
    
        characters.forEach(char => char.classList.remove("active"));
        characters[charIndex].classList.add("active");

        if(charIndex - mistakes != 0){
            wpm_text.innerText = Math.round((((charIndex-mistakes)/5)/(60-timeLeft))*60)
            mistakes_text.innerText = mistakes
            accuracy_text.innerText = ((charIndex-mistakes)/(charIndex)*100).toFixed(2)
        }

        else{
            wpm_text.innerText = 0
            mistakes_text.innerText = 0
            accuracy_text.innerText = 0
        }

        if(characters[charIndex].getBoundingClientRect().top > 450){
            let topMargin = parseInt(lines.style.marginTop || "0px");
            lines.style.marginTop = (topMargin - 40) + "px";
        }
    }
}

function initTimer(){
    if(timeLeft > 0){
        timeLeft--;
        time_text.innerText = timeLeft;
    }
    else{
        // inputText.readOnly = true
    }
}

function reset(){
    randomPara();
    timeLeft = 60;
    clearInterval(timer);
    time_text.innerText = 60;
    wpm_text.innerText = 0;
    mistakes_text.innerText = 0;
    accuracy_text.innerText = 0;
}

randomPara();