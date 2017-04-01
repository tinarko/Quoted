let threadsExampleData = [
  {
    _.id: 1,
    outboundMessage: 'Coffee at 10am?',
    contactGroup: {
      groupName: 'Friends',
      contacts: [
        {_.id: 1,
          contactName: 'AJ',
          phoneNumber: '1234567890'
        },
        {_.id: 2,
          contactName: 'Kyle',
          phoneNumber: '1234567891'
        },
        {_.id: 1,
          contactName: 'John',
          phoneNumber: '1234567892'
        },
        {_.id: 1,
          contactName: 'Tina',
          phoneNumber: '1234567893'
        }

      ]
    },
    responses: [
      {_.id: 1,
        phoneNumber: '1234567890',
        inboundMessage: 'Nope!'
      },
      {_.id: 2,
        phoneNumber: '1234567891',
        inboundMessage: 'Sure'
      },
      {_.id: 3,
        phoneNumber: '1234567892',
        inboundMessage: 'Snooze'
      },
      {_.id: 4,
        contactName: 'Tina',
        phoneNumber: '1234567893',
        inboundMessage: 'What?'
      },
      {_.id: 5,
        phoneNumber: '1234567890',
        inboundMessage: 'Snow'
      }
    ]
  },
  {
    _.id: 1,
    outboundMessage: 'Movie tomo night?',
    contactGroup: {
      groupName: 'Friends',
      contacts: [
        {_.id: 1,
          contactName: 'AJ',
          phoneNumber: '1234567890'
        },
        {_.id: 2,
          contactName: 'Kyle',
          phoneNumber: '1234567891'
        },
        {_.id: 1,
          contactName: 'John',
          phoneNumber: '1234567892'
        },
        {_.id: 1,
          contactName: 'Tina',
          phoneNumber: '1234567893'
        }

      ]
    },
    responses: [
      {_.id: 1,
        phoneNumber: '1234567890',
        inboundMessage: 'Nope!'
      },
      {_.id: 2,
        phoneNumber: '1234567891',
        inboundMessage: 'What time?'
      },
      {_.id: 3,
        phoneNumber: '1234567892',
        inboundMessage: 'Nah'
      },
      {_.id: 4,
        contactName: 'Tina',
        phoneNumber: '1234567893',
        inboundMessage: 'Beans'
      },
      {_.id: 5,
        phoneNumber: '1234567891',
        inboundMessage: 'Ned Flanders';
      }
    ]
  },
];

module.exports.threadsExampleData = threadsExampleData;