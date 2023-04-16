import { VoucherData } from "@custom-types/voucher";
import Images from "@constants/images";
import CoinIcon from "@components/icons/CoinIcon";

const Data = {
  petrol: <VoucherData[]>[
    {
      id: 0,
      image: Images.home.petrol_1,
      coin: 15,
      description:
        '50% discount for every $100 top-up on your Shell Petrol Card',
      tag: null,
    },
    {
      id: 1,
      image: Images.home.petrol_2,
      hasCoinIcon: true,
      coin: 1000,
      description: '70% discount top-up on your Shell Petrol Card',
      tag: 'Insufficient coins'
    },
  ],
  rentalDebate: <VoucherData[]>[
    {
      id: 0,
      coin: 20,
      image: Images.home.rental_1,
      description:
        'Get $20 Rental rebate',
      tag: null,
    },
    {
      id: 1,
      coin: 15,
      image: Images.home.rental_2,
      description:
        'Get $500 Rental rebate',
      tag: null,
    },
  ],
  foodAndBeverage: <VoucherData[]>[
    {
      id: 0,
      coin: 25,
      image: Images.home.food_1,
      description:
        'NTUC Fairprice $50 Voucher',
      tag: null,
    },
    {
      id: 1,
      coin: 5,
      image: Images.home.food_2,
      description:
        'Free Cold Stone Sundae at any flavour!',
      tag: null,
    },
  ],
};

export default Data;
