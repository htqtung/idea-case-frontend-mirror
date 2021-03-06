import ActionTypes from "../actions/ActionTypes";

//Define initial states of reducer
export const initialState = {
  isLoading: false,
  memberList: [],
  memberIdsFound: null,
  memberCurrent: null,
  memberIdeaCommentList: [],

};

export default function members(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.MEMBERS_ALL_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.MEMBERS_ALL_OK:
      return {
        ...state,
        memberList: action.memberList,
          isLoading: false
      };
    case ActionTypes.MEMBERS_ALL_X:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.MEMBER_GETBYID_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.MEMBER_GETBYID_OK:
      return {
        ...state,
        memberCurrent: action.member,
          isLoading: false
      };
    case ActionTypes.MEMBER_GETBYID_X:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.MEMBER_UPDATE_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.MEMBER_UPDATE_OK:
      return {
        ...state,
        memberCurrent: action.member,
          isLoading: false
      };
    case ActionTypes.MEMBER_UPDATE_X:
      return {
        ...state,
        isLoading: false
      };

       //Idea comment by member id 
       case ActionTypes.MEMBERID_FOR_IDEACOMMENT_REQ:
       return {
         ...state,
         isLoading: true
       };
     case ActionTypes.MEMBERID_FOR_IDEACOMMENT_OK:
       return {
         ...state,
         memberIdeaCommentList: action.memberIdeaCommentList,
           isLoading: false
       };
     case ActionTypes.MEMBERID_FOR_IDEACOMMENT_X:
       return {
         ...state,
         isLoading: false
       };

    case null:
      return state;

    default:
      return state;
  }
}
