import React from 'react';

const ColorPaletteBlock = (props) => {
  const hexCode = props.color;

  return (
    <div>
      {hexCode}
    </div>
  );
};

export default ColorPaletteBlock;
