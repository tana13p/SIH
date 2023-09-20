// script.js
document.getElementById('joinCommunity').addEventListener('click', () => {
    // Implement code to join the community.
    alert('Joining Community...');
  });
  
  // Get the button and links element
  const exploreModulesBtn = document.getElementById('exploreModules');
  const moduleLinks = document.getElementById('moduleLinks');
  
  // When the user clicks the button, toggle the visibility of the links
  exploreModulesBtn.addEventListener('click', () => {
    if (moduleLinks.style.display === 'none' || moduleLinks.style.display === '') {
      moduleLinks.style.display = 'block';
    } else {
      moduleLinks.style.display = 'none';
    }
  });
  
  const textElement = document.getElementById('text')
  const optionButtonsElement = document.getElementById('option-buttons')

const backgroundImages = {
    state1: "https://openclipart.org/image/2400px/svg_to_png/285099/publicdomainq-0012299qssiti.png",
    state2: "https://media.istockphoto.com/id/640139010/vector/couple-fighting-in-front-of-child.jpg?s=612x612&w=0&k=20&c=NyGYUpnMnWbvGOjEFdnJdrDTwnUgyYn2-lfWdZXJWZw=",
    state3: "https://thumbs.dreamstime.com/z/parents-argue-divorce-child-suffers-20937420.jpg",
    state4: "https://media.giphy.com/media/3og0IucN5QoYhOhxNC/giphy.gif",
    state5: "https://media1.giphy.com/media/ehhABsd5nh0m4CANvZ/source.gif",
    state6: "https://th.bing.com/th/id/R.145a071edc42e8d7d7d46eeb7f449eb0?rik=qPvE01BQCnkFGA&riu=http%3a%2f%2fwww.marypomerantzadvertising.com%2fwp-content%2fuploads%2fconversation.gif&ehk=3RcB2CrddtmO8UfkmNwLBEvbayrVY5%2b8JTmhRpwyrn0%3d&risl=&pid=ImgRaw&r=0",
    state7: "https://c.tenor.com/P6t7_wr8BpMAAAAj/boy-cute.gif",
    state8: "https://www.careerguide.com/career/wp-content/uploads/2021/02/bh-advisor-dribbble.gif",
    state9: "https://cdn.dribbble.com/users/398490/screenshots/4807672/family-dribbble.gif",
    state10: "https://www.bing.com/images/search?view=detailV2&ccid=d%2bI21YFX&id=729015E607114AB399470C2D5A69BEA84BE434E3&thid=OIP.d-I21YFXRHQUqsCSfMYUwwHaE8&mediaurl=https%3a%2f%2felements-cover-images-0.imgix.net%2fe713deab-8450-4a87-96b6-2846d589571f%3fauto%3dcompress%252Cformat%26fit%3dmax%26w%3d900%26s%3d88478a51ce215f48d637a4a04a936ef2&exph=600&expw=900&q=Drought+Animated&simid=607992109261473417&FORM=IRPRST&ck=A059B8284469BA9A500C700CDA7A6CD3&selectedIndex=7",
    state11: "https://th.bing.com/th/id/R.8763ac3a3b5c2d44f44bd5027693e9cb?rik=QJk88GeXjd5uJQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7ia%2f6qr%2f7ia6qrarT.jpg&ehk=MOg%2bTNa1i5HnOhWQFn%2fLeq%2bh6MREs4vy9vZC5EuJhXU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    state12: "https://www.bing.com/images/search?view=detailV2&ccid=0liOmhIR&id=3B53B12F24BE5201456119B5AB0410A2A35484AB&thid=OIP.0liOmhIRIHR7qnBksHs0zQHaGB&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f3b%2f19%2f9e%2f3b199ecb00645e845369de98adfa9031.jpg&exph=520&expw=640&q=BARF+Vomit&simid=607998693426072548&FORM=IRPRST&ck=73B9E835A0AD0AB11ABAC789D44D77C8&selectedIndex=0",
    state13: "https://th.bing.com/th/id/OIP.XSlEtWv_rfS_hcsOrteIpwHaFc?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    state14: "https://clipground.com/images/polluted-river-clipart.jpg",
    state15: "https://clipground.com/images/angry-villagers-clipart.jpg",
    state16: "https://media.tenor.com/imeprzbRMcgAAAAC/corruption-vote-buying.gif",
    state17: "https://i.pinimg.com/736x/b1/33/2b/b1332bc0c761af3d35acafcccd91250f.jpg",
    state18: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qTGmfjisPjzERriMaEaBNxMjedTizG3Svw&usqp=CAU",
    state19: "https://previews.123rf.com/images/iimages/iimages1311/iimages131100308/23823311-illustration-of-a-village-near-the-river.jpg",
    state20: "https://cdn-icons-png.flaticon.com/512/5046/5046953.png",
    state21: "https://thumbs.dreamstime.com/z/group-caucasian-white-young-senior-people-waiting-queue-hospital-to-get-free-flu-shot-patients-doctor-lobby-106983554.jpg",
    state22: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmWbCpitQT7oahkB5T3YL1QgvdT7JyEXXhA&usqp=CAU",
    state23: "https://i.pinimg.com/564x/ee/1b/57/ee1b57892b7c255195b207cd1931d6cb.jpg",
    state24: "https://thumbs.dreamstime.com/b/kids-immune-protection-system-illustration-child-cartoon-virus-health-bacteria-disease-illness-immunity-isolated-medical-bacterial-157366101.jpg",
    state25: "https://media.tenor.com/k77N35NowmwAAAAC/high-five.gif",
    state26: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGA-gXHYo28KFR-o3K4Fc0hp-RLtwes8MXkw&usqp=CAU",
    state27: "https://media.tenor.com/62dxQnVEppIAAAAM/experiment-scientist.gif",
    state28: "https://forum.easyuni.my/uploads/default/original/2X/f/f026218cbccf6f998bed43d754885a87b97b8eff.gif",
    state29: "https://media0.giphy.com/media/3ohryiYkE0DVwdLAys/giphy.gif",
    state30: "https://clipart-library.com/newhp/30-303094_interview-clipart-mentor-mentor-png.png",
    state31: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5NHF-KilJURKrJ-S2YoZSdWf2cbShGb7y14cXIRHvtqQ2tziCOjACnTbIVA6Qswlp7Q&usqp=CAU",
    state32: "https://cdn3.vectorstock.com/i/1000x1000/37/02/internet-forum-concept-vector-21393702.jpg",
    state33: "https://media.istockphoto.com/id/1219719976/vector/tiny-male-and-female-characters-bring-golden-coins-to-huge-box-with-man-yelling-to-megaphone.jpg?s=612x612&w=0&k=20&c=fCJQnCJWmOfOBJdKURso9fbqd-CclaisqmjSrYb4-Vw=",
    state34: "https://i.pinimg.com/736x/df/37/97/df37975d7bbd04cf03f8c3d8a3c34837.jpg",
    state35: "https://clipart-library.com/img1/1112265.jpg",
    state36: "https://media.istockphoto.com/id/1169987255/vector/group-of-children-cleaning-up-city-park.jpg?s=612x612&w=0&k=20&c=JRsQQT-uhKP8MSWRJrik9sFPXOiPXxammzXHNybWJlI=",
    state37: "https://img.lovepik.com/free-png/20211211/lovepik-clean-up-garbage-png-image_401483734_wh1200.png",
    state38: "https://static.vecteezy.com/system/resources/thumbnails/000/370/167/small/kdxf_x8m7_170608.jpg",
    state40: "https://cdn5.vectorstock.com/i/1000x1000/01/09/little-girl-crying-about-failed-test-vector-20950109.jpg",
    state41: "https://static.vecteezy.com/system/resources/previews/007/925/293/original/happy-success-little-girl-holding-medal-and-gold-cup-surrounded-by-many-thumbs-up-getting-public-approval-positive-feedbacks-appreciation-respect-recognition-honor-and-like-gestures-vector.jpg",
    state42: "https://cdn.imgbin.com/24/6/10/imgbin-human-multitasking-businessperson-management-project-manager-thinking-man-male-in-suit-jacket-holding-mug-and-smartphone-illustration-Wi2byYLFf0dt39Ei82AFRyHG9.jpg",
    state43: "https://media.istockphoto.com/id/1291140660/vector/woman-feels-good-when-she-is-appreciated.jpg?s=612x612&w=0&k=20&c=1q80I3qPH26HpmfhK9wwNmVWpEubAlRZjRXL_I560Aw=",
    state44: "https://clipart-library.com/images/kiKng5MoT.jpg",
    state45: "https://media.istockphoto.com/id/1322672949/vector/illustration-of-a-hungry-boy-zero-hunger-sdgs.jpg?s=612x612&w=0&k=20&c=GZlUbS0t-mOF2ebVHrPhevrK8B8r1lJ2S01X2xHQJVE=",
    state46: "https://cdn.xxl.thumbs.canstockphoto.com/city-hall-building-illustration-a-vector-illustration-of-city-hall-building-clipart-vector_csp54564156.jpg",
    state47: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReA9vY2Pp_r5PSqj9gHsaxnan4K3dSBxz_Gw&usqp=CAU",
    state48: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJR4hRa9WP_0oRAHy5xU2YuZYShWjjndmk_g&usqp=CAU",
    state49: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7bcRDIbkrRM5U1bymgBKS2VcIy0kpeGAHlQ&usqp=CAU",
    state50: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmSJm0_Fon55DHygv4_4_q0FWQuA8waOo3Q&usqp=CAU",
    state51: "https://p7.hiclipart.com/preview/740/516/958/business-organization-management-expert-public-relations-leader.jpg",
    state52: "https://w7.pngwing.com/pngs/93/13/png-transparent-expert-guest-s-hand-head-boy.png",
    state53: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcdig9B6_XkIQSG6SqmTdtJgYd5FWM4Dkfg&usqp=CAU",
    state54: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisbBcHkBVqUWXDawWQVuDelwksIhSGle_3w&usqp=CAU",
    state55: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRMOimoaoaf5gi-J4PDk-z6vqhZl7ql0Wag&usqp=CAU",
    state56: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XWUrFBWU15emTYPhHlozDm90g3GPnSoW2Q&usqp=CAU",
    state57: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLv0J8wyq8LMR29CP2KZrY1QJndKnOMj0eJA&usqp=CAU",
    state58: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHm52MnAy6mYSNiw5H69HqFUaRF8zCBveSw&usqp=CAU",
    state59: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiv3df0J3vPtnwM8hYdyXuKhD7HMjtrjIMA&usqp=CAU",
    state60: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGVzpJk98LpTN0C21WggoZY04OeOPZ8WcXA&usqp=CAU",
    state61: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnvoS1l3XPKSPumhosS5Y4-q-h7pYCaCm0A&usqp=CAU",
    state62: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcHLqo5sE9iz30zy9c5d8l03TGfzdbt5Imw&usqp=CAU",
    state63: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0r_Tbh5R6Iio-b42rFv6AukoUWKHn-KazgQ&usqp=CAU",
    state64: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jF0fgSrbPR2JKSvjc1y8l2lu1B5JSPTmrg&usqp=CAU",
    state65: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-exST79OuONlCKJMJrishbLivomvfYF6oQ&usqp=CAU",
    state66: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8p6-mpwkPLyXPFhIB3aW_IVWJipfLfexqig&usqp=CAU",
    state67: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgXR_A2XfM1DxD6JyNhCQqcByaMUmon83bw&usqp=CAU",
    state68: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18usHq_qhXKcsgC89Ut945IKZw0FkIYCnsg&usqp=CAU",
    state69: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZQOfuPufzquvWUK6lxh0rtKYP0e4YbRaFA&usqp=CAU",
    state70: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrBvKrIdcoX_CjSugrmJ9avtBXv2LNZ56rA&usqp=CAU",
    state71: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sDArAW8XV1rxCdqGD5JFNRgIFxuJ6rwSJA&usqp=CAU",
    state72: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp6wpmQyZsugXwDhDn6BKikvr5hskv20Lxg&usqp=CAU",
    state73: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoeud4L2J4NHXk5bg_O-Qd0G9CDfspB-ScgQ&usqp=CAU",
    state74: "https://images.app.goo.gl/GjSTL9PA2FpxKK1fA",
    state75: "https://images.app.goo.gl/NrNrdJyqCR17QzQ9A",
    state76: "https://images.app.goo.gl/ZiushExPnYj8GvL76",
    state77: "https://images.app.goo.gl/A14PMythvwEiYyKc6",
    state78: "https://images.app.goo.gl/pmn1MwDQuYLfr3TDA",
    state79: "https://images.app.goo.gl/S6MwtpshY3EuD7SX7",
    state80: "https://images.app.goo.gl/ApPvCxQ8kp9jRWjQ9",
    state81: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHqctghAiMuQOWYvvagQl6jOnTplDbu6vwg&usqp=CAU",
    state82: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrhE5cPaDZ_wZGV6rwMq_pVej38UM17XpAg&usqp=CAU",
    
};
function changeBackground(backgroundImage) {
    const gameBackground = document.getElementById('gameBackground');

    console.log(`Changing background to: ${backgroundImage}`);

    if (backgroundImage) {
        gameBackground.style.backgroundImage = `url('${backgroundImage}')`;
    } else {
        // Handle cases where no background image is found for a state
        gameBackground.style.backgroundImage = 'none'; // Set a default background or none
    }
}
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;

    const backgroundImage = backgroundImages[textNode.gameState];
    changeBackground(backgroundImage);

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => {
                selectOption(option);
            });
            optionButtonsElement.appendChild(button);
        }
    });
}

  let state = {}
  
  function startGame() {
    state = {}
    showTextNode(1)
  }
  
  function showTextNodeInternal(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
  
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
  }
  
  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }
  
  function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }
  
  const textNodes = [
    {
      id: 1,
      text: "Play an interactive game to learn about various children's rights!",
      gameState: 'state1',
      options: [
        {
          text: 'Start Game',
          nextText: 2,
        },
      ]
    },
    {
      id: 2,
      text: 'What right would you want to learn about?',
      gameState: 'state5',
      options: [
        {
          text: 'Right to Live Free from Violence, \nExploitation, and Abuse',
          nextText: 3,
        },
        {
          text: 'Right to Clean Water',
          nextText: 12
        },
        {
          text: 'Right to Immunization',
          nextText: 23
        },
        {
          text: 'Right to Equity',
          nextText: 64
        },
        {
          text: 'Right to a Clean Environment',
          nextText: 49
        },
        {
          text: 'Right to Opportunity',
          nextText: 34
        },
        {
          text: 'Right to Nutrition',
          nextText: 79
        },
        {
          text: 'Right to Education',
          nextText: 94
        },
        {
          text: 'Right to Play',
          nextText: 107
        },
        {
          text: 'Right to Voice',
          nextText: 118
        },
        {
          text: 'Right to a Safe Space',
          nextText: 131
        }
      ]
    },
    {
      id: 3,
      text: "You are playing as Maya, a girl who's parents are constantly arguing. \n Maya: I'm scared at home. My parents fight a lot, and it's getting worse.\n Today my father is shouting at my mother angrily over the dinner she made",
      gameState: 'state2',
      options: [
        {
          text: '"Try to console your parents calmly"',
          nextText: 4,
        },
        {
          text: 'Get involved in the fighting and shout at your parents to be quiet"',
          nextText: 5,
        },
      ],
    },
    {
      id: 4,
      text: 'Your parents feel bad and calm down for now, but this pattern still keeps repeating',
      gameState: 'state3',
      options: [
        {
          text: 'You try to calm them down everytime',
          nextText: 6,
        },
        {
          text: '"You seek external help"',
          nextText: 7,
        },
      ],
    },
    {
      id: 5,
      text: 'Your parents get angrier and beat you up',
      gameState: 'state4',
      options: [
        {
          text: 'Restart',
          nextText: 3,
          setState: { gameState: 'state2' }
        },
      ],
    },
    {
      id: 6,
      text: 'Your parents get annoyed and tell you not to interfere',
      gameState: 'state4',
      options: [
        {
          text: 'Restart"',
          nextText: 3,
        },
      ],
    },
  
    {
      id: 7,
      text: 'Choose who you want to get help from',
      gameState: 'state6',
      options: [
        {
          text: 'Friends',
          nextText: 8
        },
        {
          text: 'Relatives',
          nextText: 9
        },
        {
          text: 'School Counsellor',
          nextText: 10
        }
      ]
    },
    {
      id: 8,
      text: 'You tell your friends. They do not know how to help you',
      gameState: 'state7',
      options: [
        {
          text: 'Ask someone else for help',
          nextText: 7
        }
      ]
    },
    {
      id: 9,
      text: 'You ask your relatives for help. They tell your parents, but your parents get mad and tell them to mind their business. ',
      gameState: 'state7',
      options: [
        {
          text: 'Ask someone else for help',
          nextText: 7
        }
      ]
    },
    {
      id: 10,
      text: 'You seek help from your counsellor, a trained professional, who listens to your problems calmly and suggests you to seek professional help.',
      gameState: 'state8',
      options: [
        {
          text: 'Listen to her',
          nextText: 11
        },
      ]
    },
    {
      id: 11,
      text: 'You and your parents attend counselling, and they learn about the importance of providing their kids a violence-free and safe home.',
      gameState: 'state9',
      options: [
        {
          text: 'End',
          nextText: 2
        }
      ]
    },
    {
      id: 12,
      text: "You're playing Aryan, a young child living in a village with limited access to clean water.Your goal is to bring clean water to your community and ensure the well-being of the children.\nYou wake up to another hot and dry day in your village. The community faces a constant struggle to find clean water. What do you want to do?  ",
      gameState: 'state10',
      options: [
        {
          text: "Visit the village well to get water for your family.",
          nextText: 13,
        },
        {
          text: "Talk to your friends about the water issue and decide on a plan.",
          nextText: 14,
        }
      ]
    },
    {
      id: 13,
  
      text: "You go to the village well, but it's almost dry. You fill your bucket with murky water. What will you do next?",
      gameState: 'state11',
      options: [
        {
          text: "Take the water home for your family.",
          nextText: 15,
        },
        {
          text: "Decide to investigate the water source to find a solution.",
          nextText: 14,
        }
      ]
    },
    {
      id: 15,
      text: "You bring the dirty water home, but your family is at risk of waterborne diseases.\nGame Over: Try again?",
      gameState: 'state12',
      options: [
        {
          text: "Restart",
          nextText: 13,
        }
      ]
    },
    {
      id: 14,
      text: "You gather some friends and decide to follow the path of the water source to its origin. You discover a contaminated stream polluting the village's water supply.",
      gameState: 'state13',
      options: [
        {
          text: "Investigate the contaminated stream polluting the village's water supply.",
          nextText: 17,
        }, {
          text: "Find a potential underground spring that could provide clean water.",
          nextText: 18,
        }
      ]
    },
    {
        id: 17,
        gameState: 'state14',
        text: "You and your friends realize that the village's water source has been polluted by nearby industries.",
        options: [
          {
            text: "Organize a village meeting to address the issue.",
            nextText: 19,
          },
          {
            text: "Inform local authorities about the pollution.",
            nextText: 20,
          }
        ]
      },
    {
      id: 19,
      gameState: 'state15',
      text: "You successfully gather the villagers, but disagreements arise, and no effective plan is made. The pollution continues.\nGame Over: The pollution remains, and the village continues to suffer. Try again?",
      options: [
        {
          text: "Restart",
          nextText: 14
        }
      ]
    },
    {
      id: 20,
      gameState: 'state16',
      text: "Local authorities investigate but are bribed by the polluting industries. They turn a blind eye to the issue.\nGame Over: The pollution continues, and the authorities do nothing. Try again?",
      options: [
        {
          text: "Restart",
          nextText: 14
        }
      ]
    },
    {
      id: 18,
      text: "You and your friends discover an underground spring with clean water",
      gameState: 'state17',
      options: [
        {
          text: "Start a community project to dig a well and access the clean water.",
          nextText: 21,
        },
        {
          text: "Seek assistance from a charitable organization to fund the well.",
          nextText: 22,
        }
      ]
    },
    {
      id: 21,
      text: "The community comes together, but the well project collapses due to lack of resources and planning.\nGame Over: The well project fails, and the village remains without clean water. Try again?",
      gameState: 'state18',
      options: [
        {
          text: "Restart",
          nextText: 18
        }
      ]
    },
    {
      id: 22,
      text: "With the help of a charitable organization, you secure the funds needed to dig a well for your village.\nCongratulations! Your determination has paid off, and you've secured clean water for your village. You've won the game.",
      gameState: 'state19',
      options: [
        {
          text: "End",
          nextText: 2,
        }
      ]
    },
    {
      id: 23,
      text: "you play as Maya, a young child living in a village where a vaccination drive is taking place. Your goal is to help ensure all children in the village receive life-saving vaccines and understand the importance of immunization. You wake up to a sunny morning in your village, and you know it's the day of the vaccination drive. What do you want to do?",
      gameState: 'state20',
      options: [
        {
          text: "Head to the village square where the vaccination drive is taking place.",
          nextText: 24,
        },
        {
          text: "Talk to your friends and encourage them to come with you to get vaccinated.",
          nextText: 25,
        },
        {
            text: "Ignore the vaccination drive.",
            nextText: 144,
          }
      ]
    },
    {
      id: 24,
      text: "You arrive at the village square, where a mobile clinic is set up. The nurse is administering vaccines to children.",
      gameState: 'state21',
      options: [
        {
          text: "Join the line to get your vaccine.",
          nextText: 26
        },
        {
          text: "Approach the nurse to ask about the importance of vaccines.",
          nextText: 27
        },
        {
            text: "Ignore the vaccination drive and go home.",
            nextText: 144,
          }
      ]
    },
    {
      id: 26,
      text: "You wait in line and get vaccinated, protecting yourself from preventable diseases.\nCongratulations! You've taken the first step to ensure your health. You've won the game.",
      gameState: 'state22',
      options: [
        {
        text: "End",
        nextText: 2
      }
    ]
    },
    {
      id: 27,
      text: 'Maya: "Hi, why are vaccines important?"\nNurse: "Vaccines help protect you from serious diseases. They make your immune system strong."',
      gameState: 'state23',
      options: [
        {
          text: "Ask the nurse how vaccines work.",
          nextText: 28
        },
        {
          text: "Offer to help the nurse by spreading awareness in the village.",
          nextText: 31
        },
        {
            text: "Ignore the nurse and go home.",
            nextText: 144,
          }
      ]
    },
    {
      id: 28,
      gameState: 'state24',
      text: "The nurse explains how vaccines train your immune system to fight diseases, keeping you healthy.",
      options: [
        {
          text: "Thank the nurse and get vaccinated.",
          nextText: 30
        },
        {
          text: "Offer to assist the nurse in the vaccination drive.",
          nextText: 31
        },
        {
            text: "Ignore the nurse.",
            nextText: 144,
          }
      ]
    },
    {
      id: 30,
      text: "You get vaccinated and are now protected from preventable diseases.\nCongratulations! You've ensured your health and learned about the importance of vaccines. You've won the game.",
      gameState: 'state22',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 31,
      text: "You help organize and guide children to get vaccinated, making sure everyone is aware of the importance of immunization.\nCongratulations! You've played a vital role in the vaccination drive. You've won the game.",
      gameState: 'state22',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 25,
      text: 'Maya: "Hey, let\'s all go together to get vaccinated. It\'s important for our health."',
      gameState: 'state25',
      options: [
        {
          text: "Convince your friends to join you for the vaccination.",
          nextText: 32
        },
        {
          text: "Go alone to get vaccinated if your friends decline.",
          nextText: 33
        },
        {
            text: "Go play with your friends and don't get vaccinated.",
            nextText: 144,
          }
      ]
    },
    {
      id: 32,
      text: "You successfully convince your friends, and together you all get vaccinated.\nCongratulations! You've helped ensure the health of your friends and yourself. You've won the game.",
      gameState: 'state22',
      options:
        [
          {
            text: "End",
            nextText: 2
          }
        ]
    },
    {
      id: 33,
      text: "Your friends decide not to join you, but you go ahead and get vaccinated to protect yourself.\nCongratulations! You've taken the initiative to protect your health. You've won the game.",
      gameState: 'state22',
      options:
        [
          {
            text: "End",
            nextText: 2
          }
        ]
    },
    {
        id: 144,
        text: "By not getting vaccinated, you put yourself at risk of preventable diseases.\nGame Over: You fall ill with a preventable disease due to not getting vaccinated. Try again?",
        gameState: 'state26',
        options:
          [
            {
              text: "Restart",
              nextText: 23
            }
          ]
    },

    {
      id: 34,
      text: "You play as Maria, an aspiring scientist who faces economic challenges in pursuing her dream. Your goal is to help Maria find opportunities and advocate for equitable access to education and opportunities.\nYou wake up early, excited about your dream of becoming a scientist. However, you're aware of the financial situation of your family and economic challenges you face. What do you want to do?",
      gameState: 'state27',
      options: [
        {
          text: "Search for scholarships and grants online.",
          nextText: 35
        },
        {
          text: "Talk to your parents about your dream and your need for support.",
          nextText: 36
        }
      ]
    },
    {
      id: 35,
      text: "You start researching scholarships and grants that could help you pursue your dream.",
      gameState: 'state28',
      options: [
        {
          text: "Apply for a local science scholarship.",
          nextText: 37
        },
        {
          text: "Explore online forums for advice on securing educational funding.",
          nextText: 38
        }
      ]
    },
    {
      id: 37,
      text: "You submit your application for the local science scholarship and hope for a positive outcome.",
      gameState: 'state29',
      options: [
        {
          text: "Continue searching for more scholarship opportunities.",
          nextText: 39
        },
        {
          text: "Reach out to a mentor for guidance on your application.",
          nextText: 40
        }
      ]
    },
    {
      id: 39,
      text: "You find additional scholarship opportunities and apply to as many as you can. You're one step closer to achieving your dream education. What next?",
      gameState: 'state29',
      options: [
        {
          text: "Reach out to a mentor for guidance on your application.",
          nextText: 40
        }
      ]
    },
    {
      id: 40,
      text: "A mentor helps you refine your scholarship application, increasing your chances of success. The mentor tells you to apply for various government schemes too. ",
      gameState: 'state30',
      options: [
        {
          text: "Listen to the mentor's advice",
          nextText: 41
        },
        {
            text: "Ignore the mentor's advice",
            nextText: 16
          }
      ]
    },
    {
        id: 16,
        text: "You ignore the advice and lose your chance to achieve your dream education. Try again?",
        gameState: 'state31',
        options: [
          {
            text: "Restart",
            nextText: 34
          }
        ]
      },
    {
      id: 38,
      text: "You connect with others who faced similar challenges and receive valuable advice on finding scholarships and grants.",
      gameState: 'state32',
      options: [
        {
          text: "Apply for scholarships following the advice you received.",
          nextText: 41
        },
        {
          text: "Start a crowdfunding campaign to gather support from your community.",
          nextText: 42
        },
        {
            text: "Ignore the advice.",
            nextText: 16
          }
      ]
    },
    {
      id: 41,
      text: "You apply for scholarships based on the advice and increase your chances of success.\nCongratulations! You secure a scholarship for your education. You've won the game.",
      gameState: 'state29',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 42,
      text: "You create a crowdfunding campaign to receive support from your community to fund your education. However, the crowdfunding approach doesn't workout. Try something else?",
      gameState: 'state33',
      options: [
        {
          text: "Restart",
          nextText: 34
        }
      ]
    },
    {
      id: 36,
      text: "You sit down with your parents to discuss your dream of becoming a scientist.\n1. Ask your parents for financial support to pursue your education.\n2. Discuss alternative ways your parents can support your dream, such as helping you find opportunities.",
      options: [
        {
          text: "Ask your parents for financial support to pursue your education.",
          nextText: 43
        },
        {
          text: "Discuss alternative ways your parents can support your dream, such as helping you find opportunities.",
          nextText: 44
        }
      ]
    },
    {
      id: 43,
      text: "Your parents express their support for your ambitions, but they cannot possibly afford to pay for your education. Try something else?",
      gameState: 'state34',
      options: [
        {
          text: "Restart",
          nextText: 34
        }
      ]
    },
    {
      id: 44,
      text: "Your parents suggest exploring local educational programs and opportunities that might not require significant financial investment.",
      gameState: 'state28',
      options: [
        {
          text: "Follow your parents' advice and explore local programs.",
          nextText: 45
        },
        {
          text: "Continue searching for scholarships and grants to reduce financial burdens.",
          nextText: 46
        }
      ]
    },
    {
      id: 45,
      text: "You explore local programs and discover a mentorship opportunity that aligns with your dream of becoming a scientist.\nCongratulations! You find a mentor and local programs to support your dream. You've won the game.",
      gameState: 'state29',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 46,
      text: "You appreciate your parents' advice but continue to seek scholarships and grants to lessen the financial burden.",
      options: [
        {
          text: "Apply for scholarships following your parents' advice.",
          nextText: 47
        },
        {
          text: "Create a crowdfunding campaign to gather additional support.",
          nextText: 42
        }
      ]
    },
    {
      id: 47,
      text: "You apply for scholarships with the support of your parents' advice and secure funding for your education.\nCongratulations! Your hard work and your parents' support pay off. You've won the game.",
      gameState: 'state29',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 49,
      text: "you play as Maya, a child participating in an environmental cleanup effort. Your goal is to help clean up the environment and understand the importance of a clean and habitable planet as a fundamental right for children.\nYou wake up to a beautiful morning, and you know it's the day of the village's environmental cleanup event. What do you want to do?",
      gameState: 'state35',
      options: [
        {
          text: "Head to the village square to join the cleanup effort.",
          nextText: 50
        },
        {
          text: "Talk to your friends and convince them to participate in the cleanup too.",
          nextText: 51
        }
      ]
    },
    {
      id: 50,
      text: "You arrive at the village square, where other children are already picking up trash and cleaning the area.\n1. Join a group of children in picking up litter.\n2. Approach the event organizer and ask how you can help.",
      gameState: 'state36',
      options: [
        {
          text: "Join a group of children in picking up litter.",
          nextText: 52
        },
        {
          text: "Approach the event organizer and ask how you can help.",
          nextText: 53
        }
      ]
    },
    {
      id: 52,
      text: "You start picking up trash with a group of enthusiastic children, making a noticeable difference in the area.",
      gameState: 'state37',
      options: [
        {
          text: "Continue cleaning with the group.",
          nextText: 54
        },
        {
          text: "Suggest organizing a recycling initiative in the village.",
          nextText: 55
        }
      ]
    },
    {
      id: 54,
      text: "You work together with the group, and soon the area looks much cleaner. You think of other ways to clean up the environment.",
      gameState: 'state38',
      options: [
        {
            text: "Suggest organizing a recycling initiative in the village.",
            nextText: 55
          }
      ]
    },
    {
      id: 55,
      text: "You propose the idea of recycling to the group, but they are not interested ",
      gameState: 'state39',
      options: [
        {
          text: "Feel disheartened and leave.",
          nextText: 56
        },
        {
          text: "Continue cleaning for now and address recycling later.",
          nextText: 57
        }
      ]
    },
    {
      id: 56,
      text: "Feeling disheartened, you leave the event without making any significant impact. Your quest for a cleaner planet ends in disappointment.. Try again?",
      gameState: 'state40',
      options: [
        {
          text: "Restart",
          nextText: 55
        }
      ]
    },
    {
      id: 57,
      text: "You decide to focus on cleaning for now and plan to address recycling initiatives in the future. Soon, people observe your keen interest and join you with your initiative.\nCongratulations! You've made a start in the right direction and continue to work toward a cleaner environment. You've won the game.",
      gameState: 'state41',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 53,
      text: 'Maya: "Hi, I want to help with the cleanup. How can I assist?"\nThe event organizer appreciates your enthusiasm and assigns you a role.',
      gameState: 'state42',
      options: [
        {
          text: "Follow the organizer's instructions and start your assigned task.",
          nextText: 58
        },
        {
          text: "Suggest ideas for making the event even more effective and impactful.",
          nextText: 59
        }
      ]
    },
    {
      id: 58,
      text: "You diligently follow the organizer's instructions and contribute to the cleanup effort.\nCongratulations! Your hard work contributes to the successful cleanup event. You've won the game.",
      gameState: 'state41',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 59,
      text: "You share your ideas with the event organizer, who appreciates your input.",
      gameState: 'state43',
      options: [
        {
          text: "Implement your ideas to enhance the event's impact.",
          nextText: 60
        },
        {
          text: "Continue with your assigned task and focus on the cleanup for now.",
          nextText: 61
        }
      ]
    },
    {
      id: 60,
      text: "Your suggestions lead to improved organization, and the event becomes even more effective in cleaning the environment.\nCongratulations! Your ideas make the cleanup event a great success. You've won the game.",
      gameState: 'state41',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 61,
      text: "You decide to prioritize the cleanup for now, trusting the event organizer's plan.\nCongratulations! Your hard work contributes to the successful cleanup event. You've won the game.",
      gameState: 'state41',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 51,
      gameState: 'state44',
      text: 'Maya: "Hey, let\'s all join the cleanup event. It\'s our chance to make a difference."',
      options: [
        {
          text: "Successfully convince your friends to participate in the cleanup.",
          nextText: 62
        },
        {
          text: "Go alone to the cleanup event if your friends decline.",
          nextText: 63
        }
      ]
    },
    {
      id: 62,
      text: "Your friends are convinced and excited to join you in the cleanup effort.\nCongratulations! You and your friends make a significant impact on the environment. You've won the game.",
      gameState: 'state41',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 63,
      text: "Your friends decline, but you attend the event alone, determined to make a difference.\nCongratulations! Your dedication leads to a cleaner environment. You've won the game.",
      gameState: 'state41',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
    id: 64,
    text: "You are Emily, a 10-year-old student in a town with two neighborhoods: the 'Green Hill' neighborhood, where houses are big and beautiful, and the 'Maple Street' neighborhood, where houses are small and run-down. You live in Maple Street, and today, you embark on a quest to address the issue of unequal access to resources and opportunities. You wake up in your modest room, determined to make a difference.",
    gameState: 'state74',
        options: [
      {
        text: "Have breakfast and head to your school, Maple Street Elementary.",
        nextText: 65
      },
      {
        text: "Skip school to investigate the differences between the neighborhoods.",
        nextText: 66
      }
    ]
  },
  {
    id: 65,
    text: "You arrive at Maple Street Elementary, a small school with outdated facilities. As you enter your classroom, your teacher, Mrs. Johnson, greets you.",
    gameState: 'state75',
      options: [
      {
        text: "Ask Mrs. Johnson about the school's challenges.",
        nextText: 67
      },
      {
        text: "Participate in the classroom activities.",
        nextText: 68
      },
      {
        text: "Sit quietly and observe your classmates.",
        nextText: 69
      }
    ]
  },
  {
    id: 67,
    text: "Mrs. Johnson explains the lack of books and materials, as well as the cramped classrooms. She believes every child deserves an equal chance.",
    gameState: 'state76',
      options: [
      {
        text: "Share your concerns with your classmates.",
        nextText: 70
      },
      {
        text: "Try to organize a school fundraiser to improve conditions.",
        nextText: 71
      }
    ]
  },

  {
    id: 70,
    text: "Your classmates agree that the school needs help. Together, you decide to write letters to parents and the school board to raise awareness about the unequal conditions..",
    gameState: 'state77',
      options: [
      {
        text: "Write letters to parents and the school board.",
        nextText: 72
      },
      {
        text: "Organize a meeting with parents and students to discuss improvements.",
        nextText: 73
      }

    ]
  },
  {
    id: 72,
    text: "You and your classmates write heartfelt letters. Some parents respond with support, while others dismiss your concerns.",
    gameState: 'state78',
      options: [
      {
        text: "Keep advocating and writing letters.",
        nextText: 74
      },
      {
        text: "Feel discouraged and give up.",
        nextText: 75
      }
    ]
  },
  {
    id: 74,
    text: "You continue advocating and writing letters, determined to make a change.\nCongratulations! Emily's quest for equity leads to positive change.",
    gameState: 'state79',
      options: [
      {
        text: "End",
        nextText: 2
      }
    ]
  },
  {
    id: 75,
    text: "You feel disheartened by the lack of support and give up on your mission. Emily's quest for equity ends in disappointment. Try again?",
    gameState: 'state80',
      option: [
      {
        text: "Restart",
        nextText: 72
      }
    ]
  },
  {
    id: 73,
    text: "You organize a meeting with parents and students to discuss improvements. Together, you plan a path towards creating a more equitable environment.\nCongratulations! Emily's quest for equity leads to positive change.",
    gameState: 'state81',
      options: [
      {
        text: "End",
        nextText: 2
      }
    ]
  },
  {
    id: 68,
    text: "You ask Mrs. Johnson for advice on how to address the school's challenges effectively.",
    gameState: 'state82',
      options: [
      {
        text: "Share your concerns with your classmates.",
        nextText: 76,
      },
      {
        text: "Try to organize a school fundraiser to improve conditions.",
        nextText: 77,
      }
    ]
  },
  {
    id: 76,
    text: "Your classmates agree that the school needs help. Together, you decide to write letters to parents and the school board to raise awareness about the unequal conditions.\n\n1. Write letters to parents and the school board.\n2. Organize a meeting with parents and students to discuss improvements.",
    gameState: 'state77',
      options: [
      {
        text: "Write letters to parents and the school board.",
        nextText: 78
      },
      {
        text: "Organize a meeting with parents and students to discuss improvements.",
        nextText: 145
      }
    ]
  },
  {
    id: 78,
    text: "You and your classmates write heartfelt letters. Some parents respond with support, while others dismiss your concerns.\n\n1. Keep advocating and writing letters.\n2. Feel discouraged and give up.",
    gameState: 'state78',
      options: [
      {
        text: "Keep advocating and writing letters.",
        nextText: 146
      },
      {
        text: "Feel discouraged and give up.",
        nextText: 147
      }
    ]
  },
  {
    id: 146,
    text: "You continue advocating and writing letters, determined to make a change.\nCongratulations! Emily's quest for equity leads to positive change.",
    gameState: 'state79',
      options: [
      {
        text: "End",
        nextText: 2
      }
    ]
  },
  {
    id: 147,
    text: "You feel disheartened by the lack of support and give up on your mission.\nEmily's quest for equity ends in disappointment. Try again?",
   gameState: 'state80',
      options: [
      {
        text: "End",
        nextText: 2
      },
    ]
  },
  {
    id: 145,
    text: "You organize a meeting with parents and students to discuss improvements. Together, you plan a path towards creating a more equitable environment.\n\nCongratulations! Emily's quest for equity leads to positive change.",
    gameState: 'state81',
      options: [
      {
        text: "End",
        nextText: 2
      }
    ]
  },
  {
    id: 66,
    text: "You spend the day exploring both neighborhoods and discover stark differences in resources and opportunities.",
    gameState: 'state74',
      options: [
      {
        text: "Decide to attend school tomorrow and share what you've learned.",
        nextText: 148
      },
      {
        text: "Continue exploring to gather more information.",
        nextText: 149
      }
    ]
  },
  {
    id: 148,
    text: "You return home, determined to make a change.\nCongratulations! Emily's quest for equity leads to positive change.",
    gameState: 'state79',
      options:
      [
        {
          text: "End",
          nextText: 2
        }
      ]
  },
  {
    id: 149,
    text: "You continue exploring, gaining more insights into the disparities between the neighborhoods.",
    gameState: 'state74',
      options: [
      {
        text: "Return home and plan to address the inequality.",
        nextText: 2
      },
      {
        text: "Keep exploring for more information.",
        nextText: 2
      }
    ]
  },
    {
      id: 79,
      text: "You are a villager in a community facing a severe issue of malnutrition among children. Your goal is to raise awareness and work towards ensuring that every child has the right to good nutrition for their survival and development. You decide to take action. What would you like to do?",
      gameState: 'state45',
      options: [
        {
          text: "Visit the village leader to discuss the issue.",
          nextText: 80
        },
        {
          text: "Seek advice from the local nutrition expert.",
          nextText: 81
        }
      ]
    },
    {
      id: 80,
      text: "You head to the village leader's house to discuss the pressing issue of malnutrition.",
      gameState: 'state46',
      options: [
        {
          text: "Express your concerns about child malnutrition and ask for the leader's support.",
          nextText: 82
        },
        {
          text: "Propose organizing a community meeting to address the problem together.",
          nextText: 83
        }
      ]
    },
    {
      id: 82,
      text: "You discuss the alarming issue of child malnutrition with the village leader, emphasizing the urgency of the matter.",
      gameState: 'state47',
      options: [
        {
          text: "Request the leader's help in raising awareness about the issue.",
          nextText: 84
        },
        {
          text: "Ask the leader to allocate resources for a nutrition program.",
          nextText: 85
        }
      ]
    },
    {
      id: 84,
      text: "The village leader agrees to support your initiative to raise awareness about child malnutrition.\nCongratulations! With the leader's support, you successfully raise awareness about malnutrition in your community. You've won the game.",
      gameState: 'state48',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 85,
      text: "You request the leader to allocate resources for a nutrition program to combat child malnutrition.",
      gameState: 'state49',
      options: [
        {
          text: "Work with the leader to implement a nutrition program.",
          nextText: 86
        },
        {
          text: "Ask for the leader's guidance on how to involve the community in addressing malnutrition.",
          nextText: 87
        }
      ]
    },
    {
      id: 86,
      text: "The leader agrees, and you both work together to develop and implement a nutrition program for the village.\nCongratulations! Your joint effort results in a successful nutrition program that helps combat child malnutrition. You've won the game.",
      gameState: 'state48',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 87,
      text: "The leader provides guidance on how to engage the community in addressing the issue of malnutrition.\nCongratulations! With the leader's guidance, you involve the community in the fight against child malnutrition. You've won the game.",
      gameState: 'state48',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 83,
      text: "You suggest organizing a community meeting to collectively address the issue of child malnutrition.",
      gameState: 'state50',
      options: [
        {
          text: "Work with the leader to organize the community meeting.",
          nextText: 88
        },
        {
          text: "Request the leader's assistance in inviting the local nutrition expert to the meeting.",
          nextText: 89
        }
      ]
    },
    {
      id: 88,
      text: "You and the village leader collaborate to plan and execute a successful community meeting.\nCongratulations! The community meeting raises awareness and unites the village in addressing child malnutrition. You've won the game.",
      gameState: 'state48',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 89,
      text: "You ask the leader to help invite the local nutrition expert to the community meeting.\nCongratulations! With the leader's assistance, the nutrition expert attends the meeting and provides valuable insights. You've won the game.",
      gameState: 'state48',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 81,
      text: "You decide to consult the local nutrition expert for guidance on addressing the issue of malnutrition.\n1. Ask the expert for advice on raising awareness about child malnutrition.\n2. Request guidance on implementing a nutrition program in the village.",
      gameState: 'state51',
      options: [
        {
          text: "Ask the expert for advice on raising awareness about child malnutrition.",
          nextText: 90
        },
        {
          text: "Request guidance on implementing a nutrition program in the village.",
          nextText: 91
        }
      ]
    },
    {
      id: 90,
      text: "You seek advice from the nutrition expert on effective ways to raise awareness about child malnutrition.\n1. Follow the expert's advice and initiate awareness campaigns.\n2. Ask the expert for assistance in organizing a community meeting.",
      gameState: 'state52',
      options: [
        {
          text: "Follow the expert's advice and initiate awareness campaigns.",
          nextText: 92
        },
        {
          text: "Ask the expert for assistance in organizing a community meeting.",
          nextText: 93
        }
      ]
    },
    {
      id: 92,
      text: "You implement awareness campaigns based on the expert's guidance, reaching out to the community.\nCongratulations! Your awareness campaigns are successful in highlighting the issue of child malnutrition. You've won the game.",
      gameState: 'state48',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 93,
      text: "You request the nutrition expert's assistance in organizing a community meeting to address child malnutrition.\nCongratulations! With the expert's help, the community meeting is a success and fosters awareness about malnutrition. You've won the game.",
      gameState: 'state48',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 91,
      text: "You ask the nutrition expert for guidance on developing and implementing a nutrition program in the village.\nCongratulations! With the expert's guidance, you successfully implement a nutrition program that combats child malnutrition. You've won the game.",
      gameState: 'state48',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 94,
      text: "You are Mr. Johnson, a passionate teacher at a diverse school. Today, you face various challenges in ensuring quality education for all your students. What would you like to do?",
      gameState: 'state53',
      options: [
        {
          text: "Prepare an engaging lesson plan for the day.",
          nextText: 95
        },
        {
          text: "Hold a meeting with parents to discuss inclusive education.",
          nextText: 96
        }
      ]
    },
    {
      id: 95,
      text: "You decide to focus on delivering an engaging lesson that caters to the diverse learning needs of your students.\n1. Incorporate interactive activities into the lesson.\n2. Modify the lesson to accommodate students with special needs.",
      gameState: 'state54',
      options: [
        {
          text: "Incorporate interactive activities into the lesson.",
          nextText: 97
        },
        {
          text: "Modify the lesson to accommodate students with special needs.",
          nextText: 98
        }
      ]
    },
    {
      id: 97,
      text: "You create a lesson plan with hands-on activities, making the subject matter more engaging for your students.",
      gameState: 'state55',
      options: [
        {
          text: "Conduct the lesson as planned with interactive activities.",
          nextText: 99
        },
        {
          text: "Ask your students for feedback on the new approach.",
          nextText: 100
        }
      ]
    },
    {
      id: 99,
      text: "The students thoroughly enjoy the interactive lesson, and they are more engaged in learning.\nCongratulations! Your innovative teaching approach enhances the quality of education for your students. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 100,
      text: "You seek feedback from your students to further improve your teaching methods.\nCongratulations! Your commitment to continuous improvement leads to a better learning experience for your students. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 98,
      text: "You adapt your lesson to ensure that all students, including those with special needs, can participate and learn effectively.",
      gameState: 'state57',
      options: [
        {
          text: "Implement the modified lesson plan for the entire class.",
          nextText: 101
        },
        {
          text: "Collaborate with the school's special education team for additional support.",
          nextText: 102
        }
      ]
    },
    {
      id: 101,
      text: "The modified lesson plan successfully caters to the diverse needs of your students, creating an inclusive learning environment.\nCongratulations! Your dedication to inclusive education makes a significant impact on your students. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 102,
      text: "You work closely with the school's special education team to ensure that students with special needs receive the necessary support.\nCongratulations! Your collaborative efforts result in a more inclusive and equitable learning environment. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 96,
      text: "You decide to engage parents in a discussion about the importance of inclusive education and their role in supporting it.",
      gameState: 'state58',
      options: [
        {
          text: "Invite parents to an evening meeting at the school.",
          nextText: 103
        },
        {
          text: "Send a letter home to parents explaining the importance of inclusive education.",
          nextText: 104
        }
      ]
    },
    {
      id: 103,
      text: "You organize an evening meeting at the school, where parents can discuss and learn about the benefits of inclusive education.\n1. Facilitate an open discussion about the challenges and solutions for inclusive education.\n2. Share success stories of students who have thrived in an inclusive environment.",
      gameState: 'state59',
      options: [
        {
          text: "Facilitate an open discussion about the challenges and solutions for inclusive education.",
          nextText: 105
        },
        {
          text: "Share success stories of students who have thrived in an inclusive environment.",
          nextText: 106
        }
      ]
    },
    {
      id: 105,
      text: "The meeting becomes a platform for constructive dialogue, and parents express their support for inclusive education.\nCongratulations! Your efforts foster understanding and support for inclusive education within the parent community. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 106,
      text: "You share inspiring success stories of students who have benefited from an inclusive education.\nCongratulations! The success stories touch the hearts of parents, strengthening their commitment to inclusive education. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 104,
      text: "You send a heartfelt letter home to parents, explaining the significance of inclusive education and inviting their support.\nCongratulations! Your letter inspires parents to become advocates for inclusive education, creating a more inclusive learning environment. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 107,
      text: "You are Sarah, a playground supervisor at a local park. You've noticed that some children are excluded from play due to limited accessibility. What would you like to do?\n1. Organize a meeting with parents and community members to discuss the need for an inclusive play area.\n2. Start a petition to raise awareness about the importance of inclusive playgrounds.",
      gameState: 'state60',
      options: [
        {
          text: "Organize a meeting with parents and community members to discuss the need for an inclusive play area.",
          nextText: 108
        },
        {
          text: "Start a petition to raise awareness about the importance of inclusive playgrounds.",
          nextText: 109
        }
      ]
    },
    {
      id: 108,
      text: "You decide to gather parents and community members to discuss the need for an inclusive play area.\n1. Share your observations about the current playground limitations.\n2. Invite a guest speaker who can provide insights on creating inclusive play spaces.",
      gameState: 'state58',
      options: [
        {
          text: "Share your observations about the current playground limitations.",
          nextText: 110
        },
        {
          text: "Invite a guest speaker who can provide insights on creating inclusive play spaces.",
          nextText: 111
        }
      ]
    },
    {
      id: 110,
      text: "During the meeting, you share your observations and experiences regarding the limitations of the current playground.\n1. Propose a plan to make the playground more inclusive.\n2. Ask parents for their suggestions on improving the playground.",
      gameState: 'state59',
      options: [
        {
          text: "Propose a plan to make the playground more inclusive.",
          nextText: 112
        },
        {
          text: "Ask parents for their suggestions on improving the playground.",
          nextText: 113
        }
      ]
    },
    {
      id: 112,
      text: "You present a comprehensive plan to make the playground more inclusive, addressing accessibility and diverse play equipment.\nCongratulations! Your plan is met with enthusiasm, and the community rallies behind the project. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 113,
      text: "You encourage parents to share their ideas and suggestions for making the playground more inclusive.\nCongratulations! The collaborative effort results in a well-rounded plan to create an inclusive play area. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 111,
      text: "You invite an expert in inclusive play area design to speak at the meeting.\n1. Listen to the expert's insights and discuss potential improvements.\n2. Ask the expert to guide the community in planning an inclusive playground.",
      gameState: 'state51',
      options: [
        {
          text: "Listen to the expert's insights and discuss potential improvements.",
          nextText: 114
        },
        {
          text: "Ask the expert to guide the community in planning an inclusive playground.",
          nextText: 115
        }
      ]
    },
    {
      id: 114,
      text: "The expert provides valuable insights, and you engage in a discussion with the community about potential improvements.\nCongratulations! The community gains a deeper understanding of inclusive playground design. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 115,
      text: "You request the expert to guide the community in planning and designing an inclusive playground.\nCongratulations! With the expert's guidance, the community develops a plan for an inclusive play area. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 109,
      text: "You decide to raise awareness by starting a petition highlighting the importance of inclusive playgrounds.\n1. Share the petition online and ask community members to sign it.\n2. Organize a community event to gather signatures and engage in discussions.",
      gameState: 'state61',
      options: [
        {
          text: "Share the petition online and ask community members to sign it.",
          nextText: 116
        },
        {
          text: "Organize a community event to gather signatures and engage in discussions.",
          nextText: 117
        }
      ]
    },
    {
      id: 116,
      text: "You create an online petition and share it with your community, urging them to sign and share it further.\nCongratulations! Your online petition gains significant support, raising awareness about the need for inclusive playgrounds. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 117,
      text: "You plan a community event where people can sign the petition in person and engage in discussions about inclusive play areas.\nCongratulations! The community event sparks important conversations and gathers many signatures for your petition. You've won the game.",
      gameState: 'state56',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 118,
      text: "You are Mark, a student council member at your school. The student council elections are approaching, and you want to make sure they are fair and inclusive. What would you like to do?",
      gameState: 'state62',
      options: [
        {
          text: "Organize a debate among the candidates to discuss their ideas and plans.",
          nextText: 119
        },
        {
          text: "Create a campaign committee to ensure fair representation for all candidates.",
          nextText: 120
        }
      ]
    },
    {
      id: 119,
      text: "You decide to hold a debate where candidates can discuss their ideas and plans with the student body.",
      gameState: 'state63',
      options: [
        {
          text: "Invite all candidates and set a date for the debate.",
          nextText: 121
        },
        {
          text: "Create a list of debate topics and rules to ensure fairness.",
          nextText: 122
        }
      ]
    },
    {
      id: 121,
      text: "You reach out to all the candidates and schedule a date for the debate.",
      gameState: 'state64',
      options: [
        {
          text: "Inform the school about the upcoming debate and invite questions from students.",
          nextText: 123
        },
        {
          text: "Collaborate with a teacher to moderate the debate.",
          nextText: 124
        }
      ]
    },
    {
      id: 123,
      text: "You inform the school about the upcoming debate and invite students to submit questions for the candidates.\nCongratulations! Student engagement is high, and the debate becomes a platform for students to voice their concerns and ideas. You've won the game.",
      gameState: 'state65',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 124,
      text: "You collaborate with a teacher who can serve as a neutral moderator during the debate.\nCongratulations! The debate is fair and productive, and students appreciate the unbiased moderation. You've won the game.",
      gameState: 'state65',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 122,
      text: "You prepare a list of debate topics and establish rules to ensure a fair and structured debate.",
      gameState: 'state66',
      options: [
        {
          text: "Share the list of topics and rules with all candidates for approval.",
          nextText: 125
        },
        {
          text: "Seek input from the student body to finalize the topics and rules.",
          nextText: 126
        }
      ]
    },
    {
      id: 125,
      text: "You share the list of debate topics and rules with the candidates and request their feedback.\nCongratulations! All candidates approve the topics and rules, ensuring a fair and organized debate. You've won the game.",
      gameState: 'state65',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 126,
      text: "You involve the student body in the decision-making process by seeking their input on debate topics and rules.\nCongratulations! The student body appreciates the opportunity to have a say in the debate, making it even more inclusive. You've won the game.",
      gameState: 'state65',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 120,
      text: "You decide to form a campaign committee to oversee the election process and ensure fairness.\n1. Recruit students from diverse backgrounds to join the campaign committee.\n2. Develop a code of conduct for campaigning and ask all candidates to adhere to it.",
      gameState: 'state67',
      options: [
        {
          text: "Recruit students from diverse backgrounds to join the campaign committee.",
          nextText: 127
        },
        {
          text: "Develop a code of conduct for campaigning and ask all candidates to adhere to it.",
          nextText: 128
        }
      ]
    },
    {
      id: 127,
      text: "You recruit students from different backgrounds to form a diverse campaign committee.\n1. Organize a meeting with the committee to discuss their roles and responsibilities.\n2. Assign specific tasks to committee members based on their strengths.",
      gameState: 'state68',
      options: [
        {
          text: "Organize a meeting with the committee to discuss their roles and responsibilities.",
          nextText: 129
        },
        {
          text: "Assign specific tasks to committee members based on their strengths.",
          nextText: 130
        }
      ]
    },
    {
      id: 129,
      text: "You hold a meeting with the campaign committee to outline their roles and responsibilities.\nCongratulations! The campaign committee operates smoothly and ensures fair representation for all candidates. You've won the game.",
      gameState: 'state65',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 130,
      text: "You delegate tasks within the campaign committee based on each member's strengths and skills.\nCongratulations! The campaign committee operates efficiently, and their efforts lead to a fair election process. You've won the game.",
      gameState: 'state65',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 128,
      text: "You create a code of conduct for campaigning and request all candidates to follow it.\nCongratulations! All candidates adhere to the code of conduct, ensuring a fair and respectful election campaign. You've won the game.",
      gameState: 'state65',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 131,
      text: "You are Aisha, a teenager who loves spending time online but recently encountered online bullying. Your goal is to stay safe and stand up against cyberbullying. What would you like to do?\n1. Report the cyberbullying incident to a trusted adult or guardian.\n2. Seek advice from an online safety expert.",
      gameState: 'state69',
      options: [
        {
          text: "Report the cyberbullying incident to a trusted adult or guardian.",
          nextText: 132
        },
        {
          text: "Seek advice from an online safety expert.",
          nextText: 133
        }
      ]
    },
    {
      id: 132,
      text: "You decide to confide in someone you trust about the cyberbullying incident.\n1. Talk to your older sibling about the situation.\n2. Discuss it with your parents and share your feelings.",
      gameState: 'state32',
      options: [
        {
          text: "Talk to your older sibling about the situation.",
          nextText: 134
        },
        {
          text: "Discuss it with your parents and share your feelings.",
          nextText: 135
        }
      ]
    },
    {
      id: 134,
      text: "You approach your older sibling, who has experience with online interactions.\n1. Share the details of the cyberbullying incident.\n2. Ask for advice on how to handle the situation effectively.",
      gameState: 'state70',
      options: [
        {
          text: "Share the details of the cyberbullying incident.",
          nextText: 136
        },
        {
          text: "Ask for advice on how to handle the situation effectively.",
          nextText: 137
        }
      ]
    },
    {
      id: 136,
      text: "You share the details of the incident with your older sibling.\nCongratulations! Your sibling offers valuable advice and suggests talking to your parents for further support. You've won the game.",
      gameState: 'state71',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 137,
      text: "You ask your older sibling for guidance on how to handle the cyberbullying incident effectively.\nCongratulations! Your sibling provides helpful tips, and you feel more empowered to address the issue. You've won the game.",
      gameState: 'state71',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 135,
      text: "You decide to talk to your parents and share your feelings about the cyberbullying incident.\n1. Describe the situation and your emotions honestly.\n2. Ask your parents for their guidance on how to handle online bullying.",
      gameState: 'state72',
      options: [
        {
          text: "Describe the situation and your emotions honestly.",
          nextText: 138
        },
        {
          text: "Ask your parents for their guidance on how to handle online bullying.",
          nextText: 139
        }
      ]
    },
    {
      id: 138,
      text: "You have an open and honest conversation with your parents, sharing details about the cyberbullying incident and your emotions.\nCongratulations! Your parents provide comfort and support, and together, you decide on a plan to address the issue. You've won the game.",
      gameState: 'state71',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 139,
      text: "You ask your parents for their guidance on how to handle online bullying effectively.\nCongratulations! Your parents offer valuable advice and reassure you that they will help you navigate the situation. You've won the game.",
      gameState: 'state71',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 133,
      text: "You decide to seek advice from an online safety expert who can provide guidance on dealing with cyberbullying.\n1. Search online for reputable online safety resources and guidelines.\n2. Ask your school counselor if they can connect you with an online safety expert.",
      gameState: 'state51',
      options: [
        {
          text: "Search online for reputable online safety resources and guidelines.",
          nextText: 140
        },
        {
          text: "Ask your school counselor if they can connect you with an online safety expert.",
          nextText: 141
        }
      ]
    },
    {
      id: 140,
      text: "You search online for reputable resources and guidelines on online safety.\n1. Find resources that offer tips on dealing with cyberbullying.\n2. Learn about online safety strategies and how to protect yourself online.",
      gameState: 'state73',
      options: [
        {
          text: "Find resources that offer tips on dealing with cyberbullying.",
          nextText: 142
        },
        {
          text: "Learn about online safety strategies and how to protect yourself online.",
          nextText: 143
        }
      ]
    },
    {
      id: 142,
      text: "You find resources that provide valuable tips on how to deal with cyberbullying effectively.\nCongratulations! Armed with this information, you feel more confident in addressing the cyberbullying incident. You've won the game.",
      gameState: 'state71',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 143,
      text: "You educate yourself about online safety strategies to better protect yourself from cyberbullying and online threats.\nCongratulations! Your knowledge about online safety empowers you to take control of the situation and protect yourself online. You've won the game.",
      gameState: 'state71',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 141,
      text: "You approach your school counselor and request assistance in connecting with an online safety expert.\nCongratulations! Your school counselor connects you with an online safety expert who provides guidance on handling cyberbullying effectively. You've won the game.",
      gameState: 'state71',
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    }
  ]
  
  startGame()
