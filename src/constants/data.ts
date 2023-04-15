import { VoucherData } from "@custom-types/voucher";

const Data = {
  petrol: <VoucherData[]>[
    {
      id: 0,
      coin: 15,
      description:
        '50% discount for every $100 top-up on your Shell Petrol Card',
      tag: null,
    },
    {
      id: 1,
      coin: 1000,
      description: '70% discount top-up on your Shell Petrol Card',
      tag: 'Insufficient coins'
    },
  ],
  rentalDebate: <VoucherData[]>[
    {
      id: 0,
      coin: 20,
      description:
        'Get $20 Rental rebate',
      tag: null,
    },
    {
      id: 1,
      coin: 15,
      description:
        'Get $500 Rental rebate',
      tag: null,
    },
  ],
  foodAndBeverage: <VoucherData[]>[
    {
      id: 0,
      coin: 25,
      description:
        'NTUC Fairprice $50 Voucher',
      tag: null,
    },
    {
      id: 1,
      coin: 5,
      description:
        'Free Cold Stone Sundae at any flavour!',
      tag: null,
    },
  ],
};

export default Data;
