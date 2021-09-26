import { Commit, Dispatch } from "vuex"

export interface StateProps {
    token: string;
    username: string;
    commit: Commit;
    dispatch: Dispatch;
}