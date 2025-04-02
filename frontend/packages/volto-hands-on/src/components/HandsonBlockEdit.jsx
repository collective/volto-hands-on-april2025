import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import { useIntl } from 'react-intl';

const HandsonBlockEdit = (props) => {
  const {
    block,
    data,
    style,
    className,
    blocksConfig,
    selected,
    onChangeBlock,
    navRoot,
    contentType,
    blocksErrors,
  } = props;
  const intl = useIntl();

  const schema = blocksConfig['handson'].blockSchema({
    props,
    intl,
  });

  return (
    <>
      <div style={style} className={className}>
        <div className="block-inner-container">My Edit component</div>
      </div>
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          onChangeBlock={onChangeBlock}
          formData={data}
          block={block}
          blocksConfig={blocksConfig}
          navRoot={navRoot}
          contentType={contentType}
          errors={blocksErrors}
        />
      </SidebarPortal>
    </>
  );
};

export default HandsonBlockEdit;
