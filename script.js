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
        nextText: 0
      },
      {
        text: 'Right to Equity',
        nextText: 0
      },
      {
        text: 'Right to a Clean Environment',
        nextText: 0
      },
      {
        text: 'Right to Opportunity',
        nextText: 0
      },
      {
        text: 'Right to Nutrition',
        nextText: 0
      },
      {
        text: 'Right to Education',
        nextText: 0
      },
      {
        text: 'Right to Play',
        nextText: 0
      },
      {
        text: 'Right to Voice',
        nextText: 0
      },
      {
        text: 'Right to a Safe Space',
        nextText: 0
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
        text: 'You try to calm them down everytime"',
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
]

startGame()
