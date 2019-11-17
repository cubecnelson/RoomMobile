import React, { Component } from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';

interface Props {
    loading?: boolean;
}

class LoadingView extends Component<Props> {
  render() {
    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.loading}>
        <View style={{backgroundColor: '#00000055', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{backgroundColor: '#00000088', padding: 30, borderRadius: 15}}>
            <ActivityIndicator size="large" color="white" />
          </View>
        </View>
      </Modal>
    )
  }
}

export const mapStateToProps = (state: any) => {
    console.log({state})
    return {
        loading: state.common.loading
    }
}

export default connect(mapStateToProps)(LoadingView)