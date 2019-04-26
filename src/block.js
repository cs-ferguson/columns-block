const { PlainText, InspectorControls, InnerBlocks } = wp.editor;
const { PanelBody, TextControl, SelectControl } = wp.components;
const { registerBlockType } = wp.blocks;
const { Fragment, createElement } = wp.element;
const { __ } = wp.i18n;

//import icon
import { cfIcon } from './icon.js';

//import column-block
import './column.js';

import './style.scss';
import './editor.scss';

const ALLOWED_BLOCKS = [ 'chrisf/column-block' ];

const getColumnsTemplate = (numCols) => {
  let els = [];
  for( let x = 0; x<numCols; x++ ){
    els.push([ 'chrisf/column-block' ])
  }
  return els;
}

registerBlockType('chrisf/columns-block', {
  title: 'Columns Block',
  icon: cfIcon,
  category: 'layout',
  attributes: {
    numCols: {
      type: 'integer',
      default: 2
    },
    sizing: {
      type: 'string',
      default: 'even'
    }
  },
  supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},

  edit( {attributes, className, setAttributes} ) {

    const { numCols } = attributes;
    const classes = 'columns-wrapper columns-' + numCols + ' spacing-' + attributes.sizing;

    return[
      <InspectorControls>
        <PanelBody>
          <div>
            <TextControl
              type="number"
  						label="Select number of columns:"
  						value={ attributes.numCols }
  						onChange={ ( nextColumns ) => {
  							setAttributes( {
  								numCols: parseInt(nextColumns, 10)
  							} );
  						} }
  						min="2"
  						max="6"
  					/>
          </div>
        </PanelBody>
        <PanelBody>
          <SelectControl
            onChange={ (value) => setAttributes({ sizing: value }) }
            value={ attributes.sizing }
            label={'How would you like your columns to size?:'}
            options={[ {value: 'even', label: 'Evenly'}, {value: 'content', label: 'By content size'} ]}
          />
        </PanelBody>
      </InspectorControls>,
      <section className={classes}>
        <InnerBlocks
          template={ getColumnsTemplate( numCols ) }
          templateLock="all"
          allowedBlocks={ ALLOWED_BLOCKS } />
      </section>
    ];
  },


  save( { attributes } ) {

    const { numCols } = attributes;
    const classes = 'columns-wrapper columns-' + numCols + ' spacing-' + attributes.sizing;

    return (
      <section className={ classes }>
        <InnerBlocks.Content />
      </section>
    );
  }


});
