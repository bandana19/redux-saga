export function setValue() {
    return {
        type: "SET_DATA",
    }
}
export function setCart() {
    return {
        type: "ADD_CART",
    }
}
export function addData(studentData) {
    return {
        type: "ADD_DATA",
        studentData: studentData

    }
}
export function deleteData(index) {
    return {
        type: "DELETE_ITEM",
        index: index

    }
}
export function upDataName(studentDetails,indexNo){
    return{
        type:"UP_DATA_NAME",
        studentDetails:studentDetails,
        indexNo:indexNo
    }   
}

