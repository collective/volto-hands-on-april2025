import { addStyling } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';

export function HandsOnBlockSchema({ props, intl }) {
  const schema = {
    title: 'Hands-on Block',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [],
      },
    ],
    properties: {},
    required: [],
  };

  addStyling({ schema, intl });

  schema.properties.styles.schema.fieldsets[0].fields = [
    'blockWidth:noprefix',
    ...schema.properties.styles.schema.fieldsets[0].fields,
  ];

  schema.properties.styles.schema.properties['blockWidth:noprefix'] = {
    widget: 'blockWidth',
    title: 'Block width',
    default: 'default',
  };

  return schema;
}
