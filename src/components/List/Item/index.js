import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Redirect } from 'utils/router';
import { isMobile } from 'utils/common';

import styles, { COLOR_DEFAULT, COLOR_SELECTED } from './styles';

const Item = ({ id, title, selected, onSelect, style }) => {
  const [doRedirect, setDoRedirect] = useState(false);

  const handlePress = () => {
    onSelect(id);

    if (isMobile) {
      setDoRedirect(true);
    }
  };

  if (doRedirect) {
    return <Redirect to="/details" />;
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.item,
        style,
        { backgroundColor: selected ? COLOR_SELECTED : COLOR_DEFAULT },
      ]}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  style: PropTypes.number,
};

export default Item;
