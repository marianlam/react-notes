import React from 'react';

const ColorPaletteBlock = (props) => {
  const hexCode = props.color;
  const blockStyle = {
    backgroundColor: `#${hexCode}`,
    boxShadow: '1px 1px 2px gray',
    cursor: 'pointer',
    margin: '8px',
    width: '75px',
    height: '75px',
  };

  return (
    <div className="color-palette-blocks" style={blockStyle}>
      {/* {hexCode} */}
    </div>
  );
};

export default ColorPaletteBlock;
