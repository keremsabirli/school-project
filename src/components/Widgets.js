import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as repositoryActions from '../store/actions/repositoryActions';

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetData: (url, props) => dispatch(repositoryActions.getData(url, props))
    }
}

class Widgets extends React.Component {

}
export default connect(mapStateToProps, mapDispatchToProps)(Widgets);