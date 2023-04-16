import { ImageSourcePropType } from "react-native";

export type VoucherData = {
  id: number;
  image: ImageSourcePropType;
  hasCoinIcon?: boolean;
  coin: number;
  description: string;
  tag: string | null;
}