import { StyleSheet } from 'react-native';

const CommonStyles = {
  shadow: StyleSheet.create({
    low: {
      elevation: 6,
      shadowColor: '#171725',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 18,
    }
  }),
  typo: StyleSheet.create({
    // Header
    header1_48: {
      // fontFamily: 'Hellix',
      fontWeight: '400',
      fontSize: 48,
      lineHeight: 58,
      letterSpacing: -0.5,
    },
    header3_32: {
      // fontFamily: 'Hellix',
      fontSize: 32,
      fontWeight: '600',
      lineHeight: 40,
    },
    
    // Paragraph
    paragraph1_16: {
      // fontFamily: 'Hellix',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
      letterSpacing: -(0.005 * 16), // -0.005em
    },
    paragraph3_14: {
      // fontFamily: 'Hellix',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
      letterSpacing: -0.5,
    },

    // Title
    title1_18: {
      // fontFamily: 'Hellix',
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 24,
    },
    title2_16: {
      // fontFamily: 'Hellix',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 24,
    },
    title3_14: {
      // fontFamily: 'Hellix',
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 24,
    }
  }),
};

export default CommonStyles;
