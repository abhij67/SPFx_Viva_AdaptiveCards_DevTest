import { ISPFxAdaptiveCard, BaseAdaptiveCardView } from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'AdaptiveCardTestAdaptiveCardExtensionStrings';
import { IAdaptiveCardTestAdaptiveCardExtensionProps, IAdaptiveCardTestAdaptiveCardExtensionState } from '../AdaptiveCardTestAdaptiveCardExtension';

export interface IQuickViewData {
  subTitle: string;
  title: string;
  description: string;
}

export class QuickView extends BaseAdaptiveCardView<
  IAdaptiveCardTestAdaptiveCardExtensionProps,
  IAdaptiveCardTestAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      subTitle: strings.SubTitle,
      title: strings.Title,
      description: this.properties.description
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }
}