import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//thunk함수는 createAsyncThunk API를 사용함
//actionValue, 콜백함수를 인자를 가진다
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  //서버에서 todos(?)를 가져오는 상태를 나타냄
  //서버 통신이 시작되면 true, 통신이 끝나면 false로 변경
  error: null,
  //서버랑 통신이 실패한 경우 서버에서 보내줄 에러메세지 내용
};
//서버와의 통신을 관리할때는 데이터(todos),isLoading,error로 관리한다

export const __addComment = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      console.log("data:", data)
      //data = Promise를 반환
      return thunkAPI.fulfillWithValue(data.data);
      //반환된 Promise가 잘 처리되었는지 fulfillWithValue
    } catch (error) {
      console.log("error:", error)
      return thunkAPI.rejectWithValue(error);
      //반환된 Promise가 실패했는지 rejectWithValue
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.fulfilled]: (state, action) => {
      console.log("fulfilled 상태", state, action); // Promise가 fullfilled일 때 dispatch
    },
  },
});

export const { } = todosSlice.actions;
export default todosSlice.reducer;