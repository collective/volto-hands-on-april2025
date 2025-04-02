import HandsOnView from './components/HandsonBlockView';
import HandsOnEdit from './components/HandsonBlockEdit';
import { HandsOnBlockSchema } from './components/HandsOnBlockSchema';
import codeSVG from '@plone/volto/icons/code.svg';

const applyConfig = (config) => {
  config.settings.isMultilingual = false;
  config.settings.supportedLanguages = ['en'];
  config.settings.defaultLanguage = 'en';

  config.blocks.blocksConfig.handson = {
    id: 'handson',
    title: 'Hands-on',
    icon: codeSVG,
    group: 'common',
    edit: HandsOnEdit,
    view: HandsOnView,
    blockSchema: HandsOnBlockSchema,
    sidebarTab: 1,
  };

  return config;
};

export default applyConfig;
