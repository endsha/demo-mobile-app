import { ImageSourcePropType } from "react-native";

export type VoucherData = {
  id: number;
  image: ImageSourcePropType;
  coinIcon?: string;
  coin: number;
  description: string;
  tag: string | null;
}