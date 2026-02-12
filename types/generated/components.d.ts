import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContextualSignature extends Struct.ComponentSchema {
  collectionName: 'components_shared_contextual_signatures';
  info: {
    displayName: 'contextual_signature';
  };
  attributes: {
    Contextual_CTA: Schema.Attribute.String;
    Contextual_signature: Schema.Attribute.Text;
  };
}

export interface SharedExperimentFrame extends Struct.ComponentSchema {
  collectionName: 'components_shared_experiment_frames';
  info: {
    displayName: 'experiment_frame';
  };
  attributes: {
    out_of_scope: Schema.Attribute.Text;
    target_user_profile: Schema.Attribute.Text;
    test_duration: Schema.Attribute.Text;
    tools_and_data: Schema.Attribute.Text;
    usage_context: Schema.Attribute.Text;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    og_description: Schema.Attribute.Text;
    og_image: Schema.Attribute.Media<'images'>;
    og_title: Schema.Attribute.String;
    seo_description: Schema.Attribute.Text;
    seo_title: Schema.Attribute.String;
  };
}

export interface SharedTakeaway extends Struct.ComponentSchema {
  collectionName: 'components_shared_takeaways';
  info: {
    displayName: 'Takeaway';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contextual-signature': SharedContextualSignature;
      'shared.experiment-frame': SharedExperimentFrame;
      'shared.seo': SharedSeo;
      'shared.takeaway': SharedTakeaway;
    }
  }
}
