import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const COLOR_DEFAULT = '#CCC';
const COLOR_SELECTED = '#AAA';

const Item = ({ id, title, selected, onSelect, style }) => (
  <TouchableOpacity
    onPress={() => onSelect(id)}
    style={[
      styles.item,
      style,
      { backgroundColor: selected ? COLOR_SELECTED : COLOR_DEFAULT },
    ]}
  >
    <Text>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLOR_DEFAULT,
    padding: 20,
  },
});

Item.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  style: PropTypes.number,
};

export default Item;
