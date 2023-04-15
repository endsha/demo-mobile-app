import { StyleSheet } from 'react-native';

const CommonStyles = {
  typo: StyleSheet.create({
    // Header
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
    }
  }),
};

export default CommonStyles;
