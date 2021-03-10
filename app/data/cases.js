module.exports = {
  'cases': [
    {
      'serviceUserPersonalDetails': {
        'name': 'Dylan Adam Armstrong',
        'firstName': 'Dylan',
        'dateOfBirth': '1984-09-27',
        'age': 35
      },
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
      'riskIndicators': [
        {
          'type': 'ROSHA score',
          'value': 'Medium'
        },
        {
          'type': 'OGRS score',
          'value': '0.5'
        },
        {
          'type': 'RSR score',
          'value': '3 - 6.89% - Medium'
        }
      ],
      'criminogenicNeeds': [
        'Accommodation',
        'Relationships',
        'Thinking and attitudes'
      ],
      'link': 'progress',
      'status': 'Previously known',
      'previousOrderStatus': 'Order ended 24 Nov 2016',
      'risk': 'Medium',
      'nextAppointment': null
    },
    {
      'serviceUserPersonalDetails': {
        'name': 'Džiugas Atraskevicius'
      },
      'link': '',
      'status': 'Current',
      'currentOrder': {
        'type': 'CJA - Indeterminate Public Prot.'
      },
      'risk': 'Medium',
      'nextAppointment': '2020-12-07T09:30:00'
    },
    {
      'serviceUserPersonalDetails': {
        'name': 'Spencer Gill'
      },
      'link': '',
      'status': 'No record',
      'currentOrder': {
        'type': 'ORA Suspended Sentence Order'
      },
      'risk': 'High',
      'nextAppointment': null
    }
  ]
}
