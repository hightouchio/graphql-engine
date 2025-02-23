import React from 'react';
import ActualDocItem from '@theme/DocItem';
import HasuraConBanner from '@site/src/components/HasuraConBanner';
import GraphQLWithHasuraBanner from '@site/src/components/GraphQLWithHasuraBanner';
import PageHelpful from '@site/src/components/PageHelpful';
import CustomFooter from '@site/src/components/CustomFooter';
import styles from './styles.module.scss';

const CustomDocItem = (props) => {
  return (
    <div
      className={
        props.location.pathname === `/docs/latest/index/`
          ? `custom_doc_item_wrapper custom_doc_item_wrapper-x-wide`
          : `custom_doc_item_wrapper ${styles['custom_doc_item_wrapper']}`
      }
    >
      <ActualDocItem {...props} />
      <div className={styles['custom_doc_item_footer']}>
        <PageHelpful />
        <HasuraConBanner {...props} />
        <GraphQLWithHasuraBanner />
        <CustomFooter />
      </div>
    </div>
  );
};

export default CustomDocItem;
