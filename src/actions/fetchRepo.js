import actionTypes from 'constants/actionTypes'

export default function fetchRepo(organization, project){
  return {
    url: `repos/${organization}/${project}`,
    baseURL : 'https://api.github.com/',
    onRequest : () => {
      return {
        type : actionTypes.FETCH_REPO_PENDING,
      }
    },
    onSuccess : ({ data }) => {
      return {
        type : actionTypes.FETCH_REPO_SUCCESS,
        payload : {
          name : data.name,
          description : data.description,
          starCount : data.stargazers_count,
        },
      }
    },
    onError : () => {
      return {
        type : actionTypes.FETCH_REPO_ERROR,
      }
    },
  }
}
