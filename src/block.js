const { PlainText, InspectorControls, InnerBlocks } = wp.blockEditor;
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

const setSizingOptions = (numCols) => {
  let options = [ {value: 'even', label: 'Evenly'}, {value: 'content', label: 'By content size'} ]
  if( numCols == 2){
    options.push({
      value: 'two-one',
      label: '2:1'
    },{
      value: 'one-two',
      label: '1:2'
    })
  }
  return options;
}

const setCollapseOptions = (sizing) => {
  let options = [
    {value: 'center', label: 'Centre'},
    {value: 'grow', label: 'Grow to fill row'},
    {value: 'left', label: 'To left'},
    {value: 'right', label: 'To right'}
  ]
  return options;
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
    },
    horizontalGap: {
      type: 'integer',
      default: 0
    },
    verticalGap: {
      type: 'integer',
      default: 0
    },
    collapse: {
      type: 'string',
      default: 'center'
    }
  },
  supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},

  edit( {attributes, className, setAttributes} ) {

    let { numCols } = attributes;
    let classes = 'columns-wrapper-editor columns-' + numCols + ' sizing-' + attributes.sizing + ' horizontal-gap-' + attributes.horizontalGap + ' collapse-' + attributes.collapse;

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
            options={ setSizingOptions( attributes.numCols )}
          />
          <SelectControl
            onChange={ (value) => setAttributes({ collapse: value }) }
            value={ attributes.collapse }
            label={'How should your columns break when the screen is not big enough?:'}
            options={ setCollapseOptions( attributes.sizing )}
          />
        </PanelBody>
        <PanelBody>
          <TextControl
            type="number"
            label="Gap size between columns:"
            value={ attributes.horizontalGap }
            onChange={ ( gapSize ) => {
              setAttributes( {
                horizontalGap: parseInt(gapSize, 10)
              } );
            } }
            min="0"
            max="3"
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

    let { numCols } = attributes;
    let classes = 'columns-wrapper columns-' + numCols + ' sizing-' + attributes.sizing + ' horizontal-gap-' + attributes.horizontalGap + ' collapse-' + attributes.collapse;

    return (
      <section className={ classes }>
        <InnerBlocks.Content />
      </section>
    );
  }


});
