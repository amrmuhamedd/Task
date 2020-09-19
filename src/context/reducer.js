import patients from './patients'; 
export const initialState = {
    patients : patients,
    modal : false,
};
export const actionTypes = {
    ADD_PATIENT : "ADD_PATIENT",
    OPEN_MODAL : "OPEN_MODAL",
    CLOSE_MODAL : "CLOSE_MODAL",
    UPDATE_PATIENT : "UPDATE_PATIENT",
    DELETE_PATIENT : "DELETE_PATIENT"
}
const reducer = (state = initialState , action) => {
    switch (action.type) {
        case actionTypes.ADD_PATIENT :
            return {
                ...state,
               patients : [...state.patients , action.patient]
            } 
        case actionTypes.OPEN_MODAL :
            return {
                ...state,
                modal : true
            }
        case actionTypes.CLOSE_MODAL :
            return {
                ...state,
                modal : false
            }  
        case actionTypes.DELETE_PATIENT :
            let newPatients = state.patients.filter(item=> action.id !== item.id);
                return {
                   ...state , 
                   patients : newPatients   
            }  
        case actionTypes.UPDATE_PATIENT : 
           let index = state.patients.findIndex((obj => obj.id === action.id));
           state.patients[index].name = action.newPatient.name;
           state.patients[index].gender = action.newPatient.gender;
           state.patients[index].age = action.newPatient.age
          return state
        default:
            return state;
    }
};
export default reducer;