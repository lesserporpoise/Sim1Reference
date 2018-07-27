//////////////////app.js///////////////


import react ...  
import {updateNum} from "./ducks/reducer"
import {connect} from 'react-redux'

export default class app extends react.component(){
        return 
        divs...
        counter...
        {this.props.counter}
        button on click ()=> this.props.updateNum() "Increase"

    }

/////state below holds the state from redux.
    function mapStateToProps(state){
        const{counter} = state;
        return{
            counter
        }
    }

    export default connect(
        mapStateToPtops,
        {updateNum}
    )

    //////////////// src/ducks/reducer//////////////////

    const initialState={
        counter:0
    }

    const UPDATE_NUM = "UPDATE_NUM";

    function reducer(state = initialState, action){
        switch(action.type){
            case "UPDATE_NUM":
            console.log("do some thing here")
            return Object.assign({},state,{counter:action.payload})
            default:
            return state;
        }
    }

    export function updateNum(num){
        return {
            type:UPDATE_NUM,
            payload:num
        }
    }

    export default reducer;


    ///////////////////index.js///////////////////////

    import react, reactdom, ./index.css, app from app, {Provider} from react-redux

    




    reactDom.render(
        <Provider>
            <App>
        </Provider>
        document.getElementByID("root")
    )




    {/* /////////////////////store.js////////////////////////////


        import {createStore} from 'redux'
        import reducer from ./.ducks/reducerexpordt 
        default createStore(reducer) */}