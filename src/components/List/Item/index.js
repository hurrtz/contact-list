import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles, { COLOR_DEFAULT, COLOR_SELECTED } from './styles';

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

Item.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  style: PropTypes.number,
};

export default Item;
