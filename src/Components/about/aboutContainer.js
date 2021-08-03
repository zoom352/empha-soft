import { connect } from "react-redux"
import { someoneAC } from "../../Redux/reducer-about"
import aboutpredcontainer from "./aboutpredcontainer"




const mapStateToProps = (state) => {
    return {
        aboutPage: state.aboutPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        someone: () => {
            dispatch(someoneAC())
        }
    }
}

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(aboutpredcontainer)

export default AboutContainer;