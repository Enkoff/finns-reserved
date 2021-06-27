const BASE_URL = "https://06604eb42cce.ngrok.io/api-test/";
export const SET_TABLE_DATA = "SET_TABLE_DATA";

export const fetchTableData = (selectedDate) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://06604eb42cce.ngrok.io/api-test/${selectedDate}`,
      { method: "GET" }
    );

    if(!response.ok) {
        const errorResData = await response.json();
        let message = 'Somthing wen wrong!';
        // console.log(errorResData);
        throw new Error()
    }
    const resData = await response.json();
    
    dispatch({
        type: SET_TABLE_DATA,
        tableData:
    })
  };
};
