import Link from 'next/link'
import BasicLayout from '../components/BasicLayout'
import React from 'react'
import PropTypes from 'prop-types'
import { i18n, withTranslation } from '../i18n'

class Homepage extends React.Component{

  static async getInitialProps () {
    return {
      namespacesRequired: ['common']
    }
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
  }

  render(){
    const {t} = this.props;
    return(
      <BasicLayout title={t('h1')}>
        <p className="example">{t('h1')}</p>
      </BasicLayout>
    );
  }
}

export default withTranslation('index')(Homepage)