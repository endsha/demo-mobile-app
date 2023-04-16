import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ViewStyle,
  TouchableOpacity,
  Image,
} from 'react-native';

import CommonStyles from '@constants/styles';
import Colors from '@constants/colors';

import { VoucherData } from '@custom-types/voucher';
type HorizontalListSectionProps = {
  title: string;
  data: VoucherData[];
};

const HorizontalListSection = (
  props: HorizontalListSectionProps,
): JSX.Element => {
  const { title, data } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <HorizontalListCard {...item} />}
        ItemSeparatorComponent={() => <View style={{ width: 24 }} />}
        contentContainerStyle={{ paddingHorizontal: 24, marginVertical: 24 }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const HorizontalListCard = (props: VoucherData): JSX.Element => {
  const { coin, description, image } = props;

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.cardImg}/>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{coin} Coins</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalListSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  sectionTitle: {
    ...CommonStyles.typo.title1_18,
    color: Colors.grey01,
    paddingHorizontal: 24,
  },
  card: {
    ...CommonStyles.shadow.low,
    backgroundColor: Colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.grey08,
    width: 200,
    height: 240,
  },
  cardImg: {
    width: '100%',
    height: 98,
    backgroundColor: Colors.grey01,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 16,
  },
  cardTitle: {
    ...CommonStyles.typo.title2_16,
    color: Colors.blueDark,
  },
  cardDescription: {
    ...CommonStyles.typo.paragraph1_16,
    color: Colors.grey04,
    marginTop: 8,
  },
});
