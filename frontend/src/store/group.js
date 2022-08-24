import { csrfFetch } from './csrf';

const GET_GROUP = 'groups/getGroups';
const CREATE_GROUP = 'groups/createGroup';
const DELETE = 'groups/deleteGroup';

const getAllGroups = (groups) => {
  return {
    type: GET_GROUP,
    groups
  }
};

const createGroup = (group) => {
  return {
    type: CREATE_GROUP,
    group
  }
}

const deleteGroup = (deleted) => {
  return {
    type: DELETE,
    deleted
  }
}

export const getGroupsThunk = () => async dispatch => {
  const response = await csrfFetch('/api/groups');

  if (response.ok) {
    const groups = await response.json();
    dispatch(getAllGroups(groups));
    return groups;
  }
};

export const createGroupThunk = (group) => async dispatch => {
  const response = await csrfFetch('/api/groups', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(group)
  })

  if (response.ok) {
    const newGroup = response.json();
    dispatch(createGroup(newGroup))
    return newGroup
  }
}

export const deleteGroupThunk = (groupId) => async dispatch => {
  const response = await csrfFetch(`/api/groups/${groupId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const deleted = response.json();
    dispatch(deleteGroup(deleted))
  }
}

const initialState = {};

const groupsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_GROUP:
      newState = {...state, entries: [...action.groups]};
      return newState;
    case CREATE_GROUP:
      let newGroup = {...action.group};
      newState = {...state, newGroup}
    case DELETE:
      newState = {...state};
      return newState;
    default:
      return state
  }
}

export default groupsReducer