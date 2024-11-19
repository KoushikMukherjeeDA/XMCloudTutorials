import React from 'react';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import {Image as JssImage, Link as JssLink, RichText as JssRichText, ImageField, Field, LinkField, Text
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
    Title: Field<string>;
  Summary:Field<string>;
  Description: Field<string>;
  Photo: ImageField;
  ArticleLink: LinkField;
};

interface ArticleProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
}

const ArticleComponent = (props: ArticleProps): JSX.Element => (
  <div className={`component article-component ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Please assign a datasource item to edit the content.</span>
    </div>
  </div>
);

export const Default = (props: ArticleProps): React.JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component my-component ${props.params.styles}`} id={id ? id : undefined}>
        <JssImage field={props.fields.Photo} />
        <div>
          <h2>
            <Text field={props.fields.Title} />
          </h2>
          <JssRichText field={props.fields.Description} />
          <JssLink field={props.fields.ArticleLink} />
        </div>
      </div>
    );
  }

  return <ArticleComponent {...props} />;
};
