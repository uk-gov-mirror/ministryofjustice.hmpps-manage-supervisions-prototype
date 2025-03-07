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
      'endDate': helpers.sentenceEndDate({lengthInMonths: 12, startDate: '2021-01-05'}),
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
      ],
      'personalDocuments': [
        {
          'name': 'Induction pack',
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
    'riskBadges': [
      {
        text: 'Risk to themselves',
        class: 'red'
      },
      {
        text: 'Risk to children',
        class: 'red'
      }
    ],
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
    'appointmentStatistics': {
      'complied': 5,
      'acceptableAbsence': 1,
      'failureToComply': 2
    },
    'contactHistory': [
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': helpers.yesterday({atTime: '13:00'}),
        'session-date': helpers.yesterday(),
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'sessionId': 456
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Text message',
        'from': 'Service user',
        'to': 'Mark Berridge',
        'timestamp': '2021-04-11T13:00',
        'contents': 'Hi Mark, got the email. I’ll be there. D.',
        'sessionId': 987
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Email',
        'from': 'Mark Berridge',
        'to': 'Service user',
        'timestamp': '2021-04-10T13:00',
        'contents': `Hi Dylan,

        It’s really important that you come back in to see me. I understand that my last letter was sent to your old room so I’m trying you on the email address you provided me. We talked at the beginning of your probation about what might happen if you refuse to comply...`,
        'sessionId': 986
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Email',
        'from': 'Mark Berridge',
        'to': 'Jane Goodhall',
        'timestamp': '2021-03-31T13:00',
        'contents': `Dear Jane

        I’m writing to enquire after Dylan and confirm he is settled in his new room? I have written to him about his non compliance in our last meeting and need to confirm that the letter has reached him?

        Cheers,
        Mark`,
        'sessionId': 985
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-16T13:00',
        'session-date': '2021-03-16',
        'session-end-time': '11am',
        'session-start-time': '10am',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'No',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Dylan turned up for his appointment on time however he refused to talk about anything with me until “his new room was sorted out”.

                          I explained it wasn’t possible to move him until the 19th to which he stormed out of the meeting.`,
        'sessionId': 984
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Email',
        'from': 'Jane Goodhall',
        'to': 'Mark Berridge',
        'timestamp': '2021-03-12T13:00',
        'contents': `Dear Mark,

        Thanks for your email, I’ve received Dylan’s request and we have a room available on the ground floor coming available on the 19th of March.

        All the best,
        Jane`,
        'sessionId': 983
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Email',
        'from': 'Mark Berridge',
        'to': 'Jane Goodhall',
        'timestamp': '2021-02-27T13:00',
        'contents': `Dear Jane

        I’m writing to confirm that you have received my application on behalf of Dylan to change the room he has been allocated at the hostel. He now has part time work with very early shifts and is struggling with some of the noisier occupants on his floor.

        Thanks in advance,
        Mark`,
        'sessionId': 982
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-02-08T13:00',
        'session-date': '2021-02-08',
        'session-start-time': '1pm',
        'session-end-time': '2pm',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'session-notes': 'Dylan arrived on time and presented well for his induction appointment. He filled in all the paperwork required without any resistance and said he understood the process. He mentioned his mum had talked to him a lot over the weekend and helped him to calm down. His mum appears to be a positive influence in his life, which I would like to explore further with him.',
        'sessionId': 981
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'type-of-session': 'Phone call',
        'timestamp': '2021-02-03T14:00',
        'session-date': '2021-02-03',
        'session-start-time': '1pm',
        'session-end-time': '2pm',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'No',
        'session-notes': 'I called Dylan to confirm he had understood where he needed to be and when for his induction appointment. He was rude and abusive and in general very hostile in reaction to his sentence saying this wasn’t his fault. He mentioned he “doesn’t have time for this”. I reiterated that he must be at the office on Monday as part of his sentence requirements and if he doesn’t it’s going to reflect very poorly.',
        'sessionId': 980
      }
    ]
  },
  {
    'serviceUserPersonalDetails': {
      'name': 'Brian Wilson',
      'firstName': 'Brian',
      'dateOfBirth': '1958-01-19',
      'address': [
        '11 Southern Way',
        'Bradford',
        'BR7 6DZ'
      ],
      'phone': '07700 900721',
      'email': 'example@example.biz',
      'aliases': ['Baz'],
      'preferredLanguage': 'English',
      'nationality': 'British',
      'ethnicity': 'White: British',
      'religion': 'None',
      'gender': 'Male',
      'sexualOrientation': 'Heterosexual',
      'disabilitiesAndAdjustments': ['Mental Illness'],
      'circumstances': {
        'employment': 'Retired (receiving a pension)',
        'housingStatus': 'Householder (Owner - freehold or leasehold)',
        'safeguardingIssues': ['Risk to "Adult at Risk"']
      }
    },
    'personalContacts': [
      {
        'name': 'Lewis Wilson',
        'relationship': 'Son',
        'address': [
          '57 Whatlington Road',
          'Coventry',
          'CV1 3PD'
        ]
      }
    ],
    'professionalContacts': [
      {
        'name': 'Sian McDougall',
        'phone': '01274 496 0993',
        'email': 'example@example.gov',
        'provider': 'National Probation Service',
        'localDeliveryUnit': 'Bradford Probation Office',
        'team': 'Sex offenders',
        'allocatedUntilDate': '2014-04-11'
      }
    ],
    'PNC': '2015/0292174J',
    'CRN': 'E577913',
    'currentOrder': {
      'type': 'ORA Suspended Sentence Order (24 Months)',
      'description': 'Breach of Sexual Offences Prevention Order (Sex Offs Act 2003) [incl Breaches of Sex Offender Order (C&D Act 1998) & Restraining Order (prior to SOA 2003)] - 06608',
      'lengthInMonths': 24,
      'progressInMonths': 17,
      'startDate': '2019-11-29',
      'endDate': helpers.sentenceEndDate({lengthInMonths: 24, startDate: '2019-11-29'}),
      'offenceDate': '2018-08-01',
      'convictionDate': '2019-10-11',
      'court': 'Bradford Crown Court',
      'responsibleCourt': 'Bradford Crown Court',
      'requirements': {
        'rar': {
          'type': 'Rehabilitation Activity Requirement (RAR)',
          'value': '20 days',
          'lengthInDays': 20,
          'progressInDays': 18
        },
        'upw': {
          'type': 'Unpaid work',
          'value': '150 hours',
          'lengthInHours': 150,
          'progressInHours': 5
        },
        'ap': {
          'type': 'Accredited Programme ',
          'value': 'Horizon'
        }
      },
      'courtDocuments': [
        {
          'name': 'Pre-sentence report',
          'lastUpdateDate': '2019-09-27'
        },
        {
          'name': 'Order',
          'lastUpdateDate': '2019-09-27'
        },
        {
          'name': 'CPS Pack',
          'lastUpdateDate': '2019-09-27'
        },
        {
          'name': 'Previous convictions',
          'lastUpdateDate': '2019-09-27'
        }
      ],
      'personalDocuments': [
        {
          'name': 'Induction pack',
          'lastUpdateDate': '2019-10-08'
        }
      ]
    },
    'previousOrders': [
      {
        'title': 'ORA Suspended Sentence Order (12 Months)',
        'description': 'Sexual assault on a female (Sexual Offences Act 2003) - 02005',
        'endDate': '2014-04-11'
      }
    ],
    'breachesCount': 1,
    'restrainingOrdersCount': 1,
    'riskBadges': [
      {
        text: 'Risk to children',
        class: 'red'
      },
      {
        text: 'Risk to known adults',
        class: 'red'
      }
    ],
    'riskOfSeriousHarmLevel': {
      text: 'High',
      class: 'red'
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
          text: 'High',
          class: 'red'
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
          text: 'High',
          class: 'red'
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
      'Alcohol Misuse',
      'Thinking & Behaviour'
    ],
    'status': 'Previously known',
    'previousOrderStatus': 'Order ended 14 Nov 2014',
    'appointmentStatistics': {
      'complied': 4,
      'acceptableAbsence': 0,
      'failureToComply': 0
    },
    'contactHistory': [
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': helpers.today({atTime: '10:00'}),
        'session-date': helpers.today(),
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'ES - RAR Programme',
        'session-rar-subcategory': 'TSP (Thinking Skills)',
        'sessionId': 600
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Phone appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-04-07T10:32',
        'session-date': '2021-04-07',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Brian answered as arranged. He stated that he has been fine this week and that he hasn’t been up to much and has only been reading books and newspapers. B was happy to discuss the emotional impact of his daughter not wanting contact with him. B says that he has been struggling with this and that it is taking a toll on his mental health.`,
        'sessionId': 601
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Text message',
        'from': 'Mark Berridge',
        'to': 'Service user',
        'timestamp': '2021-04-06T12:23',
        'contents': 'Hi Brian - it was good to speak today. To confirm, your next probation appointment is by telephone on 7th April 2021 at 10:00. I will call you. Telephone appointments are mandatory and enforceable. Many thanks, Mark',
        'sessionId': 602
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Email',
        'from': 'Mark Berridge',
        'to': 'Social Services',
        'timestamp': '2021-04-06T10:27',
        'contents': `I have tried to call you today regarding Brian Wilson. Could you give me a call back please when you can to for an update on the case. Kind regards, Mark`,
        'sessionId': 603
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Phone appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-31T10:53',
        'session-date': '2021-03-31',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Brian answered as arranged. Brian is concerned about his living arrangements as he has received a few threats. 
        We discussed B's objectives and I asked him to reflect on his progress over the last few months. He thinks he is progressing well and when asked what alternatives he now uses to deal with his emotions he explained that he likes to keep himself busy and have a routine in place.`,
        'sessionId': 604
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Office visit',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-02-19T10:53',
        'session-date': '2021-02-19',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Brian arrived at the office as arranged. He asked his wife to drive him, so she dropped him off and waited for his appointment to finish. We spoke for a while about his SP I asked if there was anything he would particularly like to have as an objective. He said that he wants to speak about the future and have plans in place to put his offence behind him. I informed him that it would be necessary to have objectives regarding his alcohol misuse.`,
        'sessionId': 605
      },
      {
        'type': 'Appointment',
        'type-of-session': 'Phone appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-03-11T10:16',
        'session-date': '2021-03-11',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'repeating': 'No, it’s a one-off session',
        'session-counts-towards-rar': 'No',
        'did-service-user-comply': 'Yes',
        'confirmed': true,
        'session-notes': `Brian answered as arranged. We talked about doing some work around healthy attitudes and how to manage alcohol use and emotions - reminded B of the need to manage any alcohol use especially if he is feeling low or angry and for him to consider the impact of his behaviour on his family. Brian accepted this.`,
        'sessionId': 606
      }
    ]
  },
  {
    'serviceUserPersonalDetails': {
      'name': 'Spencer Gil',
      'firstName': 'Spencer',
      'dateOfBirth': '1998-01-04',
      'address': [
        '27 Camber Road',
        'Leeds',
        'West Yorkshire',
        'LS6 5BR'
      ],
      'phone': '07811 011 188',
      'email': 'gilspencer@gmail.com',
      'aliases': [],
      'preferredLanguage': 'English',
      'nationality': 'British',
      'ethnicity': 'White',
      'religion': 'None',
      'gender': 'Male',
      'sexualOrientation': 'Heterosexual',
      'disabilitiesAndAdjustments': ['Attention Deficit Hyperactivity Disorder (ADHD)'],
      'circumstances': {
        'employment': 'Full-time employed',
        'housingStatus': 'Living with family',
        'safeguardingIssues': []
      }
    },
    'personalContacts': [
      {
        'name': 'Gerry Gil',
        'relationship': 'Dad',
        'address': [
          '27 Camber Road',
          'Leeds',
          'West Yorkshire',
          'LS6 5BR'
        ]
      }
    ],
    'professionalContacts': [],
    'PNC': '2021/234511111G',
    'CRN': 'K789021',
    'currentOrder': {
      'type': 'Suspended Sentence',
      'description': 'Drive whilst disqualified (Revised 2017). Road Traffic Act 1988',
      'lengthInMonths': 12,
      'progressInMonths': 0,
      'startDate': helpers.happenedOn({daysAgo: '3'}),
      'endDate': helpers.sentenceEndDate({lengthInMonths: 12, startDate: helpers.happenedOn({daysAgo: '3'})}),
      'offenceDate': '2021-01-03',
      'convictionDate': helpers.happenedOn({daysAgo: '3'}),
      'court': "Leeds Crown Court",
      'responsibleCourt': "Leeds Crown Court",
      'requirements': {
        'rar': {
          'type': 'Rehabilitation Activity Requirement (RAR)',
          'value': '20 days',
          'lengthInDays': 20,
          'progressInDays': 0
        },
        'upw': {
          'type': 'Unpaid work',
          'value': '150 hours',
          'lengthInHours': 150,
          'progressInHours': 0
        }
      },
      'courtDocuments': [
        {
          'name': 'Pre-sentence report',
          'lastUpdateDate': null
        },
        {
          'name': 'Order',
          'lastUpdateDate': null
        },
        {
          'name': 'CPS Pack',
          'lastUpdateDate': helpers.happenedOn({daysAgo: '3'})
        },
        {
          'name': 'Previous convictions',
          'lastUpdateDate': null
        }
      ],
      'personalDocuments': [
        {
          'name': 'Induction pack',
          'lastUpdateDate': null
        }
      ]
    },
    'previousOrders': [],
    'breachesCount': 0,
    'restrainingOrdersCount': 0,
    'riskBadges': [
      {
        text: 'Risk to themselves',
        class: 'red'
      },
      {
        text: 'Risk to children',
        class: 'red'
      }
    ],
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
      'Lifestyle & Associates'
    ],
    'status': 'No record',
    'appointmentStatistics': {
      'complied': 0,
      'acceptableAbsence': 0,
      'failureToComply': 0
    },
    'contactHistory': [
      {
        'type': 'Appointment',
        'timestamp': helpers.today({ atTime: '16:00' }),
        'session-date': helpers.today(),
        'session-start-time': '9:30am',
        'session-end-time': '10:30am',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'lastUpdatedBy': 'Mark Berridge',
        'sessionId': 123
      }
    ]
  },
  {
    'serviceUserPersonalDetails': {
      'name': 'Gary Hart',
      'firstName': 'Gary',
      'dateOfBirth': '1999-10-02',
      'address': [
        '94 Kendell Street',
        'Sheffield',
        'S2 9NL'
      ],
      'phone': '07700 900721',
      'email': 'example@example.com',
      'aliases': [],
      'preferredLanguage': 'English',
      'nationality': 'British',
      'ethnicity': 'White: British',
      'religion': 'None',
      'gender': 'Male',
      'sexualOrientation': 'Heterosexual',
      'disabilitiesAndAdjustments': [],
      'circumstances': {
        'employment': 'Full-time employed',
        'housingStatus': 'Living with parents',
        'safeguardingIssues': []
      }
    },
    'personalContacts': [
      {
        'name': 'Shelly Davis',
        'relationship': 'Partner',
        'address': [
          '100 Drive Street',
          'Flat 10',
          'Sheffield',
          'S23 5FW'
        ]
      },
      {
        'name': 'Bill and Sally Hart',
        'relationship': 'Parents',
        'address': [
          '94 Kendell Street',
          'Sheffield',
          'S2 9NL'
        ]
      }
    ],
    'professionalContacts': [
      {
        'name': 'Rotherham',
        'phone': '0114 7496 0681',
        'email': 'example@example.com',
        'provider': 'CPA South Yorkshire',
        'localDeliveryUnit': 'Rotherham',
        'team': 'Rotherham LMC',
        'allocatedUntilDate': '2019-11-19'
      }
    ],
    'PNC': 'BC34587',
    'CRN': '493227',
    'currentOrder': {
      'type': 'ORA Suspended Sentence Order',
      'description': 'Common assault and battery (Criminal Law Act/CJ and Public Order Act) - 10501',
      'lengthInMonths': 12,
      'progressInMonths': 6,
      'startDate': '2020-10-19',
      'endDate': helpers.sentenceEndDate({lengthInMonths: 12, startDate: '2020-10-19'}),
      'offenceDate': '2020-01-02',
      'convictionDate': '2020-03-03',
      'court': "Sheffield Magistrates' Court",
      'responsibleCourt': "Sheffield Magistrates' Court",
      'requirements': {
        'rar': {
          'type': 'Rehabilitation Activity Requirement (RAR)',
          'value': '15 days',
          'lengthInDays': 15,
          'progressInDays': 3
        },
        'fine': {
          'type': 'Alcohol treatment requirement',
          'value': null
        }
      },
      'courtDocuments': [
        {
          'name': 'Pre-sentence report',
          'lastUpdateDate': '2020-10-19'
        },
        {
          'name': 'Order',
          'lastUpdateDate': '2020-10-19'
        },
        {
          'name': 'CPS Pack',
          'lastUpdateDate': '2020-10-19'
        },
        {
          'name': 'Previous convictions',
          'lastUpdateDate': '2020-10-19'
        }
      ],
      'personalDocuments': [
        {
          'name': 'Induction pack',
          'lastUpdateDate': '2020-10-26'
        }
      ]
    },
    'previousOrders': [
      {
        'title': 'ORA Suspended Sentence Order (12 Months)',
        'description': 'Using violence to secure entry (Criminal Law Act/CJ and Public Order Act) - 19563',
        'endDate': '2019-08-15'
      }
    ],
    'breachesCount': 0,
    'restrainingOrdersCount': 0,
    'riskBadges': [
      {
        text: 'Risk to known adults',
        class: 'red'
      }
    ],
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
      'Alcohol Misuse',
      'Relationships',
      'Thinking and attitudes'
    ],
    'status': 'Previously known',
    'previousOrderStatus': 'Order ended 15 Aug 2019',
    'appointmentStatistics': {
      'complied': 6,
      'acceptableAbsence': 0,
      'failureToComply': 0
    },
    'contactHistory': [
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': helpers.today({ atTime: '10:00' }),
        'session-date': helpers.today(),
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `• Update Gary on referral to group programme
        • Review alcohol diary`,
        'sessionId': 10
      },
      {
        'type': 'Appointment',
        'timestamp': '2021-02-11T10:00',
        'session-date': '2021-02-11',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'ES - RAR Programme',
        'session-rar-subcategory': 'TSP (Thinking Skills)',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': `Gary has managed to pay off his gambling debt sooner than he expected by taking on some overtime at work. He seems really delighted with the progress. We discussed methods on how to not accumulate debt from now on and that his next goal was to start saving for a flat.

        His alcohol consumption has reduced however he still struggles when out with his mates. We moved on to another are to help focus on this by

        • demonstrating improved emotional self management

        His diary is a good step towards this but we discussed additional methods. He mentioned he likes going to his local gym, so we set a time early on Saturday mornings for him to book in a gym session so he avoids drinking too much the night before. We agreed to try this for a few weeks to see if it helps with his decision making.`,
        'sessionId': 9
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2021-01-11T10:00',
        'session-date': '2021-01-11',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Gary arrived on time and presented well. There was no sign of recent alcohol use and we discussed his alcohol diary to which he has said he managed it 4 days out of 7. This is an improvement for him.

        We discussed that I felt he would really benefit from group work on Building Better Relationships and he agreed he felt ready for group work now as he wanted to talk to other people “like him”

        Our next meeting we shall review his alcohol diary once more and continue work on thinking skills and attitudes`,
        'sessionId': 8
      },
      {
        'type': 'Phone call',
        'from': 'Service user',
        'to': 'Mark Berridge',
        'timestamp': '2021-01-04T13:00',
        'contents': `Phone call from Gary to double check when his next appointment was, we talked briefly about how his Christmas and new year had been. He mentioned that he got quite drunk and had an argument with his ex partner Shelly over the phone. He admitted that he had gone to her home and shouted outside the door and the police were called but Shelly refused to press charges. This matched the Reportable incidents information I received this morning.

        We talked about his goal to reduce his alcohol intake and that he will now keep a diary of his drinking and agreed to book in a supervision appointment for a week's time.`,
        'sessionId': 7
      },
      {
        'type': 'Appointment',
        'timestamp': '2020-12-23T10:00',
        'session-date': '2020-12-23',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'ES - RAR Programme',
        'session-rar-subcategory': 'TSP (Thinking Skills)',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': `Gary mentioned that his mum had helped him with his homework prior to the session. He was worried this would mean he had “cheated”. We discussed how leaning on others for support was a good thing when trying to complete a task especially someone like his mum who he has a good relationship with.

          Gary has completed the tasks set for him at our previous meeting and has set out 3 goals for the next 6 months

          Reduce his alcohol intake from 8 beers a day to 2
          To start saving for a deposit on his own flat
          To pay off his gambling debt of £800

          We discussed techniques for each off those goals and agreed we will review them every month to monitor progress. We also discussed how his 2nd goal needed to have something we can measure success by and have agreed to change it to “save £500 towards the first months rent as deposit on a flat”

          I have set Gary some further work for him to write down how he is going to achieve these things and break them down into steps`,
        'sessionId': 6
      },
      {
        'type': 'Appointment',
        'timestamp': '2020-12-04T10:00',
        'session-date': '2020-12-04',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'Yes',
        'session-rar-category': 'ES - RAR Programme',
        'session-rar-subcategory': 'TSP (Thinking Skills)',
        'type-of-session': 'Office visit',
        'repeating': 'No, it’s a one-off appointment',
        'confirmed': true,
        'did-service-user-comply': 'Yes',
        'lastUpdatedBy': 'Mark Berridge',
        'session-notes': `Gary presented on time and engaged well with the session.

        Started working with Gary on Thinking Skills and attitudes and agreed that our aim is to cover the following areas over the next few session

        • demonstrating improved problem-solving and goal setting skills
        • demonstrating improved emotional self management
        • considering other people’s perspectives and emotional responses
        • develop more positive relationships

        This session we discussed problem solving and goal setting skills. I have set Gary some homework to set 5 things he would like to achieve over the next 6 months that will improve his well being. For review at our next session. `,
        'sessionId': 5
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Email',
        'to': 'someone@socialservices.gov.uk',
        'from': 'Mark Berridge',
        'timestamp': '2020-11-24T13:00',
        'contents': `SUBJECT: Gary Hart
        Hi there,

        Just to inform you that Gary Hart is now longer living with his partner and her daughter which has reduced concerns I had over his living arrangements

        I’ll update you if that changes in the future.`,
        'sessionId': 4
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2020-11-23T10:00',
        'session-date': '2020-11-23',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Carried out initial sentence planning supervision appointments with Gary

          Gary and I discussed some of his criminogenic needs, he agreed that those were three areas he needed support with especially his use of alcohol when dealing with relationships. We agreed an action to refer him to an alcohol treatment programmer however he also agreed that we should do some work together on thinking skills and attitudes.

          Plan to allocate 5 of his 20 RAR days to that piece of work

          His current relationship with his partner Shelly has ended since our last meeting and he has moved in with his parents, with whom he has a good relationship. He understands that this is a good opportunity to get his alcohol consumption under control in a supportive environment. However he is adamant that he does not want to do any group work. I believe that group work is important to him rehabilitating and reducing his chance of reoffending so will approach this with him in the future.

          First 1-1 RAR session to be booked for 2 weeks time`,
        'sessionId': 3
      },
      {
        'type': 'Appointment',
        'lastUpdatedBy': 'Mark Berridge',
        'timestamp': '2020-10-24T10:00',
        'session-date': '2020-10-24',
        'session-start-time': '10am',
        'session-end-time': '11am',
        'session-counts-towards-rar': 'No',
        'type-of-session': 'Office visit',
        'did-service-user-comply': 'Yes',
        'repeating': 'No, it’s a one-off session',
        'confirmed': true,
        'session-notes': `Induction appointment with Gary

        Gary has always been in stable accommodation. Prior to moving in with his current partner he lived with his parents with whom he has a good relationship.

        Gary has a stable employment history working as a labourer on a construction site with his father. He earns approx. £2,500 a month. He has around £900 debt as a result of gambling, but he is working towards paying this off.

        Gary reports that he mostly drinks on weekends with his friends at the local pub. His previous conviction in 2019 was committed whilst he had been drinking heavily throughout the day.
        Gary has no children.

        Gary reports no issues with drug misuse. Gary reports good physical and mental health. There is no history of self-harm or suicide.`,
        'sessionId': 2
      },
      {
        'lastUpdatedBy': 'Mark Berridge',
        'type': 'Email',
        'from': 'someone@socialservices.gov',
        'to': 'Mark Berridge',
        'timestamp': '2020-10-23T13:00',
        'contents': `Hi there,
        I got your message about Gary Hart. Yes he is known to us.

        He has previously threatened his partner and their daughter when under the influence of alcohol. On one occasion Mr Hart assaulted his daughter, on another occasion the daughter witnessed Mr Hart self-harming.

        Daughter’s details follows:
        Carina Hart
        born 13/03/2009`,
        'sessionId': 1
      }
    ]
  }
]
