const path = require('path')
const helpers = require(path.join(__dirname, '../../lib/helpers.js'))

module.exports = [
  {
    'serviceUserPersonalDetails': {
      'name': 'Dylan Adam Armstrong',
      'firstName': 'Dylan',
      'dateOfBirth': '1984-09-27',
      'address': [
        '1 Grey Lane',
        'Sheffield',
        'South Yorkshire',
        'S10 1AG'
      ],
      'phone': '07700 900 077',
      'email': 'example@example.com',
      'aliases': ['Dee'],
      'preferredLanguage': 'English',
      'nationality': 'British',
      'ethnicity': 'White: British',
      'religion': 'None',
      'gender': 'Male',
      'sexualOrientation': 'Heterosexual',
      'disabilitiesAndAdjustments': ['Autism spectrum condition'],
      'circumstances': {
        'employment': 'Full-time employed',
        'housingStatus': 'Living alone',
        'safeguardingIssues': []
      }
    },
    'personalContacts': [
      {
        'name': 'Pippa Wade',
        'relationship': 'Mum',
        'address': [
          '2 Grey Lane',
          'Sheffield',
          'South Yorkshire',
          'S10 1AG'
        ]
      }
    ],
    'professionalContacts': [
      {
        'name': 'Gary Millar',
        'phone': '0114 123 0000',
        'email': 'example@example.com',
        'provider': 'CPA South Yorkshire',
        'localDeliveryUnit': 'Rotherham',
        'team': 'Rotherham LMC',
        'allocatedUntilDate': '2019-11-19'
      }
    ],
    'PNC': '2012/123400000F',
    'CRN': 'J678910',
    'currentOrder': {
      'type': 'Community Order',
      'description': 'Using violence to secure entry (Criminal Law Act/CJ and Public Order Act) - 19563',
      'lengthInMonths': 12,
      'progressInMonths': 6,
      'startDate': '2021-01-05',
      'endDate': '2022-01-04',
      'offenceDate': '2020-11-15',
      'convictionDate': '2020-12-12',
      'court': "Sheffield Magistrates' Court",
      'responsibleCourt': "Sheffield Magistrates' Court",
      'requirements': {
        'rar': {
          'type': 'Rehabilitation Activity Requirement (RAR)',
          'value': '15 days',
          'lengthInDays': 15,
          'progressInDays': 5
        },
        'fine': {
          'type': 'Fine',
          'value': '£1000'
        }
      },
      'courtDocuments': [
        {
          'name': 'Pre-sentence report',
          'lastUpdateDate': '2020-12-03'
        },
        {
          'name': 'Order',
          'lastUpdateDate': '2020-12-03'
        },
        {
          'name': 'CPS Pack',
          'lastUpdateDate': '2020-12-03'
        },
        {
          'name': 'Previous convictions',
          'lastUpdateDate': '2020-12-03'
        }
      ]
    },
    'previousOrders': [
      {
        'title': 'ORA Community Order (12 Months)',
        'description': 'Careless driving - 80400',
        'endDate': '2018-05-17'
      },
      {
        'title': 'ORA Suspended Sentence Order (12 Months)',
        'description': 'Common assault and battery - 10501',
        'endDate': '2016-08-10'
      },
      {
        'title': 'CJA Std Determinate Custody (42 Months)',
        'description': 'Kidnapping - 03601',
        'endDate': '2015-06-26'
      },
      {
        'title': 'CJA Community Order (12 Months)',
        'description': 'Assaults occasioning actual bodily harm - 00806',
        'endDate': '2012-01-10'
      },
      {
        'title': 'CJA Community Order (12 Months)',
        'description': 'Offences against Public Order (Summary) - 12500',
        'endDate': '2010-06-30'
      }
    ],
    'breachesCount': 0,
    'restrainingOrdersCount': 0,
    'riskOfSeriousHarmLevel': {
      text: 'Medium',
      class: 'orange'
    },
    'riskOfHarm': [
      {
        'riskTo': 'Themselves',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'High',
          class: 'red'
        }
      },
      {
        'riskTo': 'Children',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'High',
          class: 'red'
        }
      },
      {
        'riskTo': 'Public',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'High',
          class: 'red'
        }
      },
      {
        'riskTo': 'Known adult',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'High',
          class: 'red'
        }
      },
      {
        'riskTo': 'Staff',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'High',
          class: 'red'
        }
      },
      {
        'riskTo': 'Prisoners',
        'inCommunity': {
          text: 'Medium',
          class: 'orange'
        },
        'inCustody': {
          text: 'High',
          class: 'red'
        }
      }
    ],
    'criminogenicNeeds': [
      'Accommodation',
      'Relationships',
      'Thinking and attitudes'
    ],
    'status': 'Previously known',
    'previousOrderStatus': 'Order ended 24 Nov 2016',
    'previousAppointment': {
      'session-date': helpers.yesterday(),
      'session-counts-towards-rar': 'Yes',
      'session-start-time': '1pm',
      'session-end-time': '2pm',
      'session-counts-towards-rar': 'Yes',
      'session-rar-category': 'Thinking skills, attitudes and behaviour',
      'type-of-session': 'Office visit',
      'repeating': 'No, it’s a one-off session',
      'confirmed': true,
      'sessionId': 456
    },
    'appointmentStatistics': {
      'complied': 5,
      'acceptableAbsence': 1,
      'failureToComply': 2
    },
    'contactHistory': [
      {
        'type': 'Office visit',
        'probationPractitioner': 'Mark Berridge',
        'timestamp': helpers.yesterday({atTime: '13:00'}),
        'sessionId': 456,
        'outcome': null
      },
      {
        'type': 'Text message from Service User',
        'timestamp': '2021-04-22T13:00',
        'contents': 'Hi Mark, got the email. I’ll be there. D.'
      },
      {
        'type': 'Email to Service User',
        'timestamp': '2021-04-10T13:00',
        'contents': `Hi Dylan,

        It’s really important that you come back in to see me. I understand that my last letter was sent to your old room so I’m trying you on the email address you provided me. We talked at the beginning of your probation about what might happen if you refuse to comply...`
      },
      {
        'type': 'Email to a third party',
        'timestamp': '2021-03-31T13:00',
        'contents': `Dear Jane

        I’m writing to enquire after Dylan and confirm he is settled in his new room? I have written to him about his non compliance in our last meeting and need to confirm that the letter has reached him?

        Cheers,
        Mark`
      },
      {
        'type': 'Office visit',
        'probationPractitioner': 'Mark Berridge',
        'timestamp': '2021-03-16T13:00',
        'outcome': {
          'comply': false
        },
        'contents': 'Dylan turned up for his appointment on time however he refused to talk about anything with me until “his new room was sorted out” I explained it wasn’t possible to move him until the 19th to which he stormed out of the meeting.'
      },
      {
        'type': 'Email from a third party',
        'timestamp': '2021-03-12T13:00',
        'contents': `Dear Mark,

        Thanks for your email, I’ve received Dylan’s request and we have a room available on the ground floor coming available on the 19th of March.

        All the best,
        Jane`
      },
      {
        'type': 'Email to a third party',
        'timestamp': '2021-02-27T13:00',
        'contents': `Dear Jane

        I’m writing to confirm that you have received my application on behalf of Dylan to change the room he has been allocated at the hostel. He now has part time work with very early shifts and is struggling with some of the noisier occupants on his floor.

        Thanks in advance,
        Mark`
      },
      {
        'type': 'Office visit',
        'probationPractitioner': 'Mark Berridge',
        'timestamp': '2021-02-08T13:00',
        'outcome': {
          'comply': true
        },
        'contents': 'Dylan arrived on time and presented well for his induction appointment. He filled in all the paperwork required without any resistance and said he understood the process. He mentioned his mum had talked to him a lot over the weekend and helped him to calm down. His mum appears to be a positive influence in his life, which I would like to explore further with him.'
      },
      {
        'type': 'Phone call',
        'probationPractitioner': 'Mark Berridge',
        'timestamp': '2021-02-03T13:00',
        'outcome': {
          'comply': false
        },
        'contents': 'I called Dylan to confirm he had understood where he needed to be and when for his induction appointment. He was rude and abusive and in general very hostile in reaction to his sentence saying this wasn’t his fault. He mentioned he “doesn’t have time for this”. I reiterated that he must be at the office on Monday as part of his sentence requirements and if he doesn’t it’s going to reflect very poorly.'
      },
      {
        'type': 'Communication with a third party',
        'probationPractitioner': 'Mark Berridge',
        'timestamp': '2021-02-02T22:15',
        'attachments': ['Email to social worker']
      }
    ]
  },
  {
    'serviceUserPersonalDetails': {
      'name': 'Džiugas Atraskevicius'
    },
    'status': 'Current',
    'currentOrder': {
      'type': 'CJA - Indeterminate Public Prot.'
    },
    'riskOfSeriousHarmLevel': {
      text: 'Medium',
      class: 'orange'
    }
  },
  {
    'serviceUserPersonalDetails': {
      'name': 'Spencer Gill'
    },
    'status': 'No record',
    'currentOrder': {
      'type': 'ORA Suspended Sentence Order'
    },
    'riskOfSeriousHarmLevel': {
      text: 'High',
      class: 'red'
    }
  }
]
