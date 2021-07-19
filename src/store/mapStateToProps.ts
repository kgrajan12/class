import { loadingStateToPropsType } from "utils/props";

export const loadingStateToProps: loadingStateToPropsType = (state) => ({
    user: state.app.user
});