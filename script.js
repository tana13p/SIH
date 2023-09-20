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
  
  let state = {}
  
  function startGame() {
    state = {}
    showTextNode(1)
  }
  
  function showTextNode(textNodeIndex) {
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
      options: [
        {
          text: 'Start Game',
          nextText: 2
        },
      ]
    },
    {
      id: 2,
      text: 'What right would you want to learn about?',
      options: [
        {
          text: 'Right to Live Free from Violence, \nExploitation, and Abuse',
          nextText: 3
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
          nextText: 34
        },
        {
          text: 'Right to a Clean Environment',
          nextText: 49
        },
        {
          text: 'Right to Opportunity',
          nextText: 64
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
      options: [
        {
          text: 'Restart',
          nextText: 3,
        },
      ],
    },
    {
      id: 6,
      text: 'Your parents get annoyed and tell you not to interfere',
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
      options: [
        {
          text: 'End',
          nextText: 2
        }
      ]
    },
    {
      id: 12,
      text: "You're playing Maya, a young child living in village with limited access to clean water.\nOh no! I can't wait for this problem to get over now.\nWhen will we get access to clean water?  ",
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
  
      text: "You go to the village well, but it's almost dry. You fill your bucket with murky water. What will you do next?\n1. Take the water home for your family.\n2. Decide to investigate the water source to find a solution.",
      options: [
        {
          text: "Take the water home for your family.",
          nextText: 15,
        },
        {
          text: "Decide to investigate the water source to find a solution.",
          nextText: 16,
        }
      ]
    },
    {
      id: 15,
      text: "You bring the dirty water home, but your family remains at risk of waterborne diseases.\nGame Over: Your family's health is at risk due to the dirty water. Try again?",
      options: [
        {
          text: "Restart",
          nextText: 12,
        }
      ]
    },
    {
      id: 16,
      text: "You gather some friends and decide to follow the path of the water source to its origin.\n1. Discover a contaminated stream polluting the village's water supply.\n2. Find a potential underground spring that could provide clean water.",
      options: [
        {
          text: "Discover a contaminated stream polluting the village's water supply.",
          nextText: 17,
        }, {
          text: "Find a potential underground spring that could provide clean water.",
          nextText: 18,
        }
      ]
    },
    {
      id: 14,
      text: "You and your friends realize that the village's water source has been polluted by nearby industries.\n1. Organize a village meeting to address the issue.\n2. Inform local authorities about the pollution.",
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
      text: "You successfully gather the villagers, and together you create a plan to clean the polluted stream and find an alternative clean water source.\nCongratulations! You've taken the first step to secure clean water for your village. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 20,
      text: "Local authorities investigate and take action against the industries responsible for the pollution. Your village's water source is gradually cleaned.\nCongratulations! You've helped bring attention to the issue and secured a safer water source. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 17,
      text: "You and your friends discover an underground spring with clean water.\n1. Start a community project to dig a well and access the clean water.\n2. Seek assistance from a charitable organization to fund the well.",
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
      text: "The community comes together, and with hard work, you successfully dig a well that provides clean water for the village.\nCongratulations! You've provided clean water for your village. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 22,
      text: "With the help of a charitable organization, you secure the funds needed to dig a well for your village.\nCongratulations! Your determination has paid off, and you've secured clean water for your village. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2,
        }
      ]
    },
    {
      id: 23,
      text: "You wake up to a sunny morning in your village, and you know it's the day of the vaccination drive. What do you want to do?\n1. Head to the village square where the vaccination drive is taking place.\n2. Talk to your friends and encourage them to come with you to get vaccinated.",
      options: [
        {
          text: "Head to the village square where the vaccination drive is taking place.",
          nextText: 24,
        },
        {
          text: "Talk to your friends and encourage them to come with you to get vaccinated.",
          nextText: 25,
        }
      ]
    },
    {
      id: 24,
      text: "You arrive at the village square, where a mobile clinic is set up. The nurse is administering vaccines to children.\n1. Join the line to get your vaccine.\n2. Approach the nurse to ask about the importance of vaccines.",
      options: [
        {
          text: "Join the line to get your vaccine.",
          nextText: 26
        },
        {
          text: "Approach the nurse to ask about the importance of vaccines.",
          nextText: 27
        }
      ]
    },
    {
      id: 26,
      text: "You wait in line and get vaccinated, protecting yourself from preventable diseases.\nCongratulations! You've taken the first step to ensure your health. You've won the game.",
      options: {
        text: "End",
        nextText: 2
      }
    },
    {
      id: 27,
      text: 'Maya: "Hi, why are vaccines important?"\nNurse: "Vaccines help protect you from serious diseases. They make your immune system strong."\n1. Ask the nurse how vaccines work.\n2. Offer to help the nurse by spreading awareness in the village.',
      options: [
        {
          text: "Ask the nurse how vaccines work.",
          nextText: 28
        },
        {
          text: "Offer to help the nurse by spreading awareness in the village.",
          nextText: 29
        }
      ]
    },
    {
      id: 28,
      text: "The nurse explains how vaccines train your immune system to fight diseases, keeping you healthy.\n1. Thank the nurse and get vaccinated.\n2. Offer to assist the nurse in the vaccination drive.",
      options: [
        {
          text: "Thank the nurse and get vaccinated.",
          nextText: 30
        },
        {
          text: "Offer to assist the nurse in the vaccination drive.",
          nextText: 31
        }
      ]
    },
    {
      id: 30,
      text: "You get vaccinated and are now protected from preventable diseases.\nCongratulations! You've ensured your health and learned about the importance of vaccines. You've won the game.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 25,
      text: 'Maya: "Hey, let\'s all go together to get vaccinated. It\'s important for our health."\n1. Convince your friends to join you for the vaccination.\n2. Go alone to get vaccinated if your friends decline.',
      options: [
        {
          text: "Convince your friends to join you for the vaccination.",
          nextText: 32
        },
        {
          text: "Go alone to get vaccinated if your friends decline.",
          nextText: 33
        }
      ]
    },
    {
      id: 32,
      text: "You successfully convince your friends, and together you all get vaccinated.\nCongratulations! You've helped ensure the health of your friends and yourself. You've won the game.",
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
      options:
        [
          {
            text: "End",
            nextText: 2
          }
        ]
    },
    {
      id: 34,
      text: "You wake up early, excited about your dream of becoming a scientist. However, you're aware of the economic challenges you face. What do you want to do?\n1. Search for scholarships and grants online.\n2. Talk to your parents about your dream and your need for support.",
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
      text: "You start researching scholarships and grants that could help you pursue your dream.\n1. Apply for a local science scholarship.\n2. Explore online forums for advice on securing educational funding.",
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
      text: "You submit your application for the local science scholarship and hope for a positive outcome.\n1. Continue searching for more scholarship opportunities.\n2. Reach out to a mentor for guidance on your application.",
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
      text: "You find additional scholarship opportunities and apply to as many as you can.\nCongratulations! Your determination pays off, and you secure a scholarship for your education. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 40,
      text: "A mentor helps you refine your scholarship application, increasing your chances of success.\nCongratulations! With the mentor's guidance, you secure a scholarship for your education. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 38,
      text: "You connect with others who faced similar challenges and receive valuable advice on finding scholarships and grants.\n1. Apply for scholarships following the advice you received.\n2. Start a crowdfunding campaign to gather support from your community.",
      options: [
        {
          text: "Apply for scholarships following the advice you received.",
          nextText: 41
        },
        {
          text: "Start a crowdfunding campaign to gather support from your community.",
          nextText: 42
        }
      ]
    },
    {
      id: 41,
      text: "You apply for scholarships based on the advice from the online forums and increase your chances of success.\nCongratulations! You secure a scholarship for your education. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 42,
      text: "You create a crowdfunding campaign and receive support from your community to fund your education.\nCongratulations! Your community comes together to help you pursue your dream. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
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
      text: "Your parents express their support for your dream and promise to do their best to help you financially.\nCongratulations! Your parents are behind you, and you secure the financial support you need. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 44,
      text: "Your parents suggest exploring local educational programs and opportunities that might not require significant financial investment.\n1. Follow your parents' advice and explore local programs.\n2. Continue searching for scholarships and grants to reduce financial burdens.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 46,
      text: "You appreciate your parents' advice but continue to seek scholarships and grants to lessen the financial burden.\n1. Apply for scholarships following your parents' advice.\n2. Create a crowdfunding campaign to gather additional support.",
      options: [
        {
          text: "Apply for scholarships following your parents' advice.",
          nextText: 47
        },
        {
          text: "Create a crowdfunding campaign to gather additional support.",
          nextText: 48
        }
      ]
    },
    {
      id: 47,
      text: "You apply for scholarships with the support of your parents' advice and secure funding for your education.\nCongratulations! Your hard work and your parents' support pay off. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 48,
      text: "You create a crowdfunding campaign and receive support from your extended network.\nCongratulations! Your crowdfunding campaign helps fund your education. You've won the game.",
      option: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 49,
      text: "You wake up to a beautiful morning, and you know it's the day of the village's environmental cleanup event. What do you want to do?\n1. Head to the village square to join the cleanup effort.\n2. Talk to your friends and convince them to participate in the cleanup too.",
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
      text: "You start picking up trash with a group of enthusiastic children, making a noticeable difference in the area.\n1. Continue cleaning with the group.\n2. Suggest organizing a recycling initiative in the village.",
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
      text: "You work together with the group, and soon the area looks much cleaner.\nCongratulations! You've made a positive impact on the environment. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 55,
      text: "You propose the idea of recycling to the group, and they all agree it's a great idea.\n1. Work together to set up a recycling program in the village.\n2. Continue cleaning for now and address recycling later.",
      options: [
        {
          text: "Work together to set up a recycling program in the village.",
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
      text: "You and the group start a recycling initiative in the village, reducing waste and promoting environmental responsibility.\nCongratulations! You've not only cleaned up but also initiated positive change in your village. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 57,
      text: "You decide to focus on cleaning for now and plan to address recycling initiatives in the future.\nCongratulations! You've made a start in the right direction and continue to work toward a cleaner environment. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 53,
      text: 'Maya: "Hi, I want to help with the cleanup. How can I assist?"\nThe event organizer appreciates your enthusiasm and assigns you a role.\n1. Follow the organizer\'s instructions and start your assigned task.\n2. Suggest ideas for making the event even more effective and impactful.',
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 59,
      text: "You share your ideas with the event organizer, who appreciates your input.\n1. Implement your ideas to enhance the event's impact.\n2. Continue with your assigned task and focus on the cleanup for now.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 51,
      text: 'Maya: "Hey, let\'s all join the cleanup event. It\'s our chance to make a difference."\n1. Successfully convince your friends to participate in the cleanup.\n2. Go alone to the cleanup event if your friends decline.',
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 64,
      text: "Maria wakes up with a passion for science and dreams of becoming a scientist. However, she faces financial challenges that seem insurmountable. What would you like to do?\n1. Start looking for science scholarship opportunities online.\n2. Talk to your school teacher about your dream and ask for guidance.",
      options: [
        {
          text: "Start looking for science scholarship opportunities online.",
          nextText: 65
        },
        {
          text: "Talk to your school teacher about your dream and ask for guidance.",
          nextText: 66
        }
      ]
    },
    {
      id: 65,
      text: "You begin searching for scholarships that can help you pursue your dream of becoming a scientist.\n1. Apply for a local science scholarship.\n2. Explore online forums for advice on securing educational funding.",
      options: [
        {
          text: "Apply for a local science scholarship.",
          nextText: 67
        },
        {
          text: "Explore online forums for advice on securing educational funding.",
          nextText: 68
        }
      ]
    },
    {
      id: 67,
      text: "You submit your application for a local science scholarship and keep your fingers crossed for a positive response.\n1. Continue searching for more scholarship opportunities.\n2. Reach out to a mentor for guidance on your application.",
      options: [
        {
          text: "Continue searching for more scholarship opportunities.",
          nextText: 69
        },
        {
          text: "Reach out to a mentor for guidance on your application.",
          nextText: 70
        }
      ]
    },
    {
      id: 69,
      text: "You find additional scholarship opportunities and apply to as many as you can.\nCongratulations! Your determination pays off, and you secure a scholarship for your education. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 70,
      text: "You seek guidance from a mentor who helps you refine your scholarship application, increasing your chances of success.\nCongratulations! With the mentor's guidance, you secure a scholarship for your education. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 68,
      text: "You connect with others who have faced similar challenges and receive valuable advice on finding scholarships and grants.\n1. Apply for scholarships following the advice you received.\n2. Start a crowdfunding campaign to gather support from your community.",
      options: [
        {
          text: "Apply for scholarships following the advice you received.",
          nextText: 71
        },
        {
          text: "Start a crowdfunding campaign to gather support from your community.",
          nextText: 72
        }
      ]
    },
    {
      id: 71,
      text: "You apply for scholarships based on the advice from the online forums and increase your chances of success.\nCongratulations! You secure a scholarship for your education. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 72,
      text: "You create a crowdfunding campaign and receive support from your community to fund your education.\nCongratulations! Your community comes together to help you pursue your dream. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 66,
      text: "You decide to open up to your school teacher about your dream of becoming a scientist.\n1. Ask your teacher for advice on finding opportunities in science.\n2. Request your teacher to mentor you in your scientific pursuits.",
      options: [
        {
          text: "Ask your teacher for advice on finding opportunities in science.",
          nextText: 73
        },
        {
          text: "Request your teacher to mentor you in your scientific pursuits.",
          nextText: 74
        }
      ]
    },
    {
      id: 73,
      text: "Your teacher provides guidance on how to find opportunities and resources in the field of science.\n1. Follow your teacher's advice and explore local opportunities.\n2. Continue searching for scholarships and grants to reduce financial burdens.",
      options: [
        {
          text: "Follow your teacher's advice and explore local opportunities.",
          nextText: 75
        },
        {
          text: "Continue searching for scholarships and grants to reduce financial burdens.",
          nextText: 76
        }
      ]
    },
    {
      id: 75,
      text: "You explore local science programs and discover an internship opportunity that aligns with your dream.\nCongratulations! You find local opportunities and get closer to your dream of becoming a scientist. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 76,
      text: "While you appreciate your teacher's advice, you continue seeking scholarships and grants to lessen the financial burden.\n1. Apply for scholarships following your teacher's advice.\n2. Create a crowdfunding campaign to gather additional support.",
      options: [
        {
          text: "Apply for scholarships following your teacher's advice.",
          nextText: 77
        },
        {
          text: "Create a crowdfunding campaign to gather additional support.",
          nextText: 78
        }
      ]
    },
    {
      id: 77,
      text: "You apply for scholarships with your teacher's guidance and secure funding for your education.\nCongratulations! Your hard work and your teacher's support pay off. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 78,
      text: "You create a crowdfunding campaign and receive support from your extended network.\nCongratulations! Your crowdfunding campaign helps fund your education. You've won the game.",
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 74,
      text: "You ask your teacher to mentor you, hoping to gain valuable insights and support.\nCongratulations! Your teacher becomes your mentor and guides you on your journey to becoming a scientist. You've won the game.",
      options:
        [
          {
            text: "End",
            nextText: 2
          }
        ]
    },
    {
      id: 79,
      text: "You are a villager in a community facing a severe issue of malnutrition among children. You decide to take action. What would you like to do?\n1. Visit the village leader to discuss the issue.\n2. Seek advice from the local nutrition expert.",
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
      text: "You head to the village leader's house to discuss the pressing issue of malnutrition.\n1. Express your concerns about child malnutrition and ask for the leader's support.\n2. Propose organizing a community meeting to address the problem together.",
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
      text: "You discuss the alarming issue of child malnutrition with the village leader, emphasizing the urgency of the matter.\n1. Request the leader's help in raising awareness about the issue.\n2. Ask the leader to allocate resources for a nutrition program.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 85,
      text: "You request the leader to allocate resources for a nutrition program to combat child malnutrition.\n1. Work with the leader to implement a nutrition program.\n2. Ask for the leader's guidance on how to involve the community in addressing malnutrition.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 83,
      text: "You suggest organizing a community meeting to collectively address the issue of child malnutrition.\n1. Work with the leader to organize the community meeting.\n2. Request the leader's assistance in inviting the local nutrition expert to the meeting.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 94,
      text: "You are Mr. Johnson, a passionate teacher at a diverse school. Today, you face various challenges in ensuring quality education for all your students. What would you like to do?\n1. Prepare an engaging lesson plan for the day.\n2. Hold a meeting with parents to discuss inclusive education.",
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
      text: "You create a lesson plan with hands-on activities, making the subject matter more engaging for your students.\n1. Conduct the lesson as planned with interactive activities.\n2. Ask your students for feedback on the new approach.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 98,
      text: "You adapt your lesson to ensure that all students, including those with special needs, can participate and learn effectively.\n1. Implement the modified lesson plan for the entire class.\n2. Collaborate with the school's special education team for additional support.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 96,
      text: "You decide to engage parents in a discussion about the importance of inclusive education and their role in supporting it.\n1. Invite parents to an evening meeting at the school.\n2. Send a letter home to parents explaining the importance of inclusive education.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 118,
      text: "You are Mark, a student council member at your school. The student council elections are approaching, and you want to make sure they are fair and inclusive. What would you like to do?\n1. Organize a debate among the candidates to discuss their ideas and plans.\n2. Create a campaign committee to ensure fair representation for all candidates.",
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
      text: "You decide to hold a debate where candidates can discuss their ideas and plans with the student body.\n1. Invite all candidates and set a date for the debate.\n2. Create a list of debate topics and rules to ensure fairness.",
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
      text: "You reach out to all the candidates and schedule a date for the debate.\n1. Inform the school about the upcoming debate and invite questions from students.\n2. Collaborate with a teacher to moderate the debate.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    },
    {
      id: 122,
      text: "You prepare a list of debate topics and establish rules to ensure a fair and structured debate.\n1. Share the list of topics and rules with all candidates for approval.\n2. Seek input from the student body to finalize the topics and rules.",
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
      options: [
        {
          text: "End",
          nextText: 2
        }
      ]
    }
  ]
  
  startGame()
