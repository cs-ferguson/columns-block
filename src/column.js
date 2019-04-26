const { InspectorControls, InnerBlocks, ColorPalette } = wp.editor;
const { PanelBody } = wp.components;
const { registerBlockType } = wp.blocks;

//import icon
import { cfIcon } from './icon.js';

export default registerBlockType('chrisf/column-block', {
  title: 'Single Column Block',
  parent: 'chrisf/columns-block',
  icon: cfIcon,
  category: 'common',
  attributes: {
    bgColor: {
      type: 'string'
    }
  },


  edit({ attributes, setAttributes }) {

    let styles = {};
    if( attributes.bgColor ){
      styles.backgroundColor = attributes.bgColor;
    }

    return [
      <InspectorControls>
        <PanelBody>
          <strong>Select a background color:</strong>
          <ColorPalette
            value={ attributes.bgColor }
            onChange={ color => setAttributes({ bgColor: color })}
          />
        </PanelBody>
      </InspectorControls>,
      <div className="column" style={ styles }>
        <InnerBlocks templateLock={ false } />
      </div>
    ];
  },


  save({ attributes } ) {
    let styles = {};
    if( attributes.bgColor ){
      styles.backgroundColor = attributes.bgColor;
    }

    return <div className="column"  style={ styles }><InnerBlocks.Content /></div>
  }


});
