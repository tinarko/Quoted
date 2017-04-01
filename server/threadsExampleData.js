let threadsExampleData = [
  {
    _id: 1,
    outboundMsg: 'Coffee at 10am?',
    groupName: 'Friends',
    contacts: [
      {_id: 1,
        contactName: 'AJ',
        contactPhoneNumber: '1234567890'
      },
      {_id: 2,
        contactName: 'Kyle',
        contactPhoneNumber: '1234567891'
      },
      {_id: 3,
        contactName: 'John',
        contactPhoneNumber: '1234567892'
      },
      {_id: 4,
        contactName: 'Tina',
        contactPhoneNumber: '1234567893'
      }
    ],
    responses: [
      {_id: 1,
        fromNumber: '1234567890',
        inboundMsg: 'Nope!'
      },
      {_id: 2,
        fromNumber: '1234567891',
        inboundMsg: 'Sure'
      },
      {_id: 3,
        fromNumber: '1234567892',
        inboundMsg: 'Snooze'
      },
      {_id: 4,
        contactName: 'Tina',
        fromNumber: '1234567893',
        inboundMsg: 'What?'
      },
      {_id: 5,
        fromNumber: '1234567890',
        inboundMsg: 'Snow'
      }
    ]
  },
  {
    _id: 2,
    outboundMsg: 'Movie tomo night?',
    groupName: 'Friends',
    contacts: [
      {_id: 1,
        contactName: 'AJ',
        contactPhoneNumber: '1234567890'
      },
      {_id: 2,
        contactName: 'Kyle',
        contactPhoneNumber: '1234567891'
      },
      {_id: 3,
        contactName: 'John',
        contactPhoneNumber: '1234567892'
      },
      {_id: 4,
        contactName: 'Tina',
        contactPhoneNumber: '1234567893'
      }
    ],
    responses: [
      {_id: 1,
        fromNumber: '1234567890',
        inboundMsg: 'Nope!'
      },
      {_id: 2,
        fromNumber: '1234567891',
        inboundMsg: 'What time?'
      },
      {_id: 3,
        fromNumber: '1234567892',
        inboundMsg: 'Nah'
      },
      {_id: 4,
        contactName: 'Tina',
        fromNumber: '1234567893',
        inboundMsg: 'Beans'
      },
      {_id: 5,
        fromNumber: '1234567891',
        inboundMsg: 'Ned Flanders'
      }
    ]
  },
];

module.exports.threadsExampleData = threadsExampleData;