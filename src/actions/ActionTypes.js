// An object that know all the ALLOWED ACTION TYPES
// ~ contract or standard

const ActionTypes = {

    // Category
    CATEGORIES_ALL_REQ: 'CATEGORIES_ALL_REQ',
    CATEGORIES_ALL_OK: 'CATEGORIES_ALL_OK',
    CATEGORIES_ALL_X: 'CATEGORIES_ALL_X',

    CATEGORY_ADD_REQ: 'CATEGORY_ADD_REQ',
    CATEGORY_ADD_OK: 'CATEGORY_ADD_OK',
    CATEGORY_ADD_X: 'CATEGORY_ADD_X',

    CATEGORY_DELETE_REQ: 'CATEGORY_DELETE_REQ',
    CATEGORY_DELETE_OK: 'CATEGORY_DELETE_OK',
    CATEGORY_DELETE_X: 'CATEGORY_DELETE_X',

    CATEGORY_GETBYID_REQ: 'CATEGORY_GETBYID_REQ',
    CATEGORY_GETBYID_OK: 'CATEGORY_GETBYID_OK',
    CATEGORY_GETBYID_X: 'CATEGORY_GETBYID_X',

    CATEGORY_UPDATE_REQ: 'CATEGORY_UPDATE_REQ',
    CATEGORY_UPDATE_OK: 'CATEGORY_UPDATE_OK',
    CATEGORY_UPDATE_X: 'CATEGORY_UPDATE_X',

    // Members
    MEMBERS_ALL_REQ: 'MEMBERS_ALL_REQ',
    MEMBERS_ALL_OK: 'MEMBERS_ALL_OK',
    MEMBERS_ALL_X: 'MEMBERS_ALL_X',

    MEMBERS_ADD_REQ: 'MEMBERS_ADD_REQ',
    MEMBERS_ADD_OK: 'MEMBERS_ADD_OK',
    MEMBERS_ADD_X: 'MEMBERS_ADD_X',

    MEMBERS_GETBYID_REQ: 'MEMBERS_GETBYID_REQ',
    MEMBERS_GETBYID_OK: 'MEMBERS_GETBYID_OK',
    MEMBERS_GETBYID_X: 'MEMBERS_GETBYID_X',

    MEMBER_DELETE_REQ: "MEMBER_DELETE_REQ",
    MEMBER_DELETE_OK: "MEMBER_DELETE_OK",
    MEMBER_DELETE_X: "CATEGORY_DELETE_X",

    MEMBER_UPDATE_REQ: "MEMBER_UPDATE_REQ",
    MEMBER_UPDATE_OK: "MEMBER_UPDATE_OK",
    MEMBER_UPDATE_X: "MEMBER_UPDATE_X",

    // Comments
    COMMENTS_BYIDEAID_REQ: 'COMMENTS_BYIDEAID_REQ',
    COMMENTS_BYIDEAID_OK: 'COMMENTS_BYIDEAID_OK',
    COMMENTS_BYIDEAID_X: 'COMMENTS_BYIDEAID_X',

    COMMENTS_BYMEMBERID_REQ: 'COMMENTS_BYMEMBERID_REQ',
    COMMENTS_BYMEMBERID_OK: 'COMMENTS_BYMEMBERID_OK',
    COMMENTS_BYMEMBERID_X: 'COMMENTS_BYMEMBERID_X',

    COMMENT_ADD_REQ: 'COMMENT_ADD_REQ',
    COMMENT_ADD_OK: 'COMMENT_ADD_OK',
    COMMENT_ADD_X: 'COMMENT_ADD_X',

    COMMENT_UPDATE_REQ: 'COMMENT_UPDATE_REQ',
    COMMENT_UPDATE_OK: 'COMMENT_UPDATE_OK',
    COMMENT_UPDATE_X: 'COMMENT_UPDATE_X',

    COMMENT_DELETE_REQ: 'COMMENT_DELETE_REQ',
    COMMENT_DELETE_OK: 'COMMENT_DELETE_OK',
    COMMENT_DELETE_X: 'COMMENT_DELETE_X',

    COMMENT_GETONE_REQ: 'COMMENT_GETONE_REQ',
    COMMENT_GETONE_OK: 'COMMENT_GETONE_OK',
    COMMENT_GETONE_X: 'COMMENT_GETONE_X',

    // Idea_Member
    IDEA_MEMBER_ALL_REQ: 'IDEA_MEMBER_ALL_REQ',
    IDEA_MEMBER_ALL_OK: 'IDEA_MEMBER_ALL_OK',
    IDEA_MEMBER_ALL_X: 'IDEA_MEMBER_ALL_X',

    IDEA_MEMBER_ADD_REQ: 'IDEA_MEMBER_ADD_REQ',
    IDEA_MEMBER_ADD_OK: 'IDEA_MEMBER_ADD_OK',
    IDEA_MEMBER_ADD_X: 'IDEA_MEMBER_ADD_X',

    IDEA_MEMBER_UPDATE_REQ: 'IDEA_MEMBER_UPDATE_REQ',
    IDEA_MEMBER_UPDATE_OK: 'IDEA_MEMBER_UPDATE_OK',
    IDEA_MEMBER_UPDATE_X: 'IDEA_MEMBER_UPDATE_X',

    IDEA_MEMBER_DEL_REQ: 'IDEA_MEMBER_DEL_REQ',
    IDEA_MEMBER_DEL_OK: 'IDEA_MEMBER_DEL_OK',
    IDEA_MEMBER_DEL_X: 'IDEA_MEMBER_DEL_X',

    //CATEGORY_RANDOMIZED_REQ:   'CATEGORY_RANDOMIZED_REQ',
    //CATEGORY_RANDOMIZED_OK:    'CATEGORY_RANDOMIZED_OK',
    //CATEGORY_RANDOMIZED_X:     'CATEGORY_RANDOMIZED_X',

    //CATEGORY_CURRENT_RESET:    'CATEGORY_CURRENT_RESET',

    // Idea
    IDEAS_ALL_REQ: 'IDEAS_ALL_REQ',
    IDEAS_ALL_OK: 'IDEAS_ALL_OK',
    IDEAS_ALL_X: 'IDEAS_ALL_X',

    IDEA_ADD_REQ: 'IDEA_ADD_REQ',
    IDEA_ADD_OK: 'IDEA_ADD_OK',
    IDEA_ADD_X: 'IDEA_ADD_X',

    IDEA_DELETE_REQ: 'IDEA_DELETE_REQ',
    IDEA_DELETE_OK: 'IDEA_DELETE_OK',
    IDEA_DELETE_X: 'IDEA_DELETE_X',

    IDEA_GETBYID_REQ: 'IDEA_GETBYID_REQ',
    IDEA_GETBYID_OK: 'IDEA_GETBYID_OK',
    IDEA_GETBYID_X: 'IDEA_GETBYID_X',

    IDEA_UPDATE_REQ: 'IDEA_UPDATE_REQ',
    IDEA_UPDATE_OK: 'IDEA_UPDATE_OK',
    IDEA_UPDATE_X: 'IDEA_UPDATE_X',
};

export default ActionTypes;