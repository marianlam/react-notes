import React from 'react';

const ColorPaletteBlock = (props) => {
  const hexCode = props.color;
  const blockStyle = {
    backgroundColor: `#${hexCode}`,
    width: '75px',
    height: '75px',
    cursor: 'pointer',
  };

  return (
    <div style={blockStyle}>
      {/* {hexCode} */}
    </div>
  );
};

export default ColorPaletteBlock;
