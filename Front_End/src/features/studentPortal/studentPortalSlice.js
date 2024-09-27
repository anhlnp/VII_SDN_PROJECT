import { createSlice } from '@reduxjs/toolkit';

const studentPortalSlice = createSlice({
  name: 'studentPortal',
  initialState: {
    studentInfo: null, // Thông tin sinh viên
    courses: [], // Danh sách khóa học
    isLoggedIn: false, // Trạng thái đăng nhập
  },
  reducers: {
    // Cập nhật thông tin sinh viên
    setStudentInfo: (state, action) => {
      state.studentInfo = action.payload;
    },
    // Cập nhật danh sách khóa học
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    // Thêm khóa học mới vào danh sách
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    // Đăng nhập
    login: (state) => {
      state.isLoggedIn = true;
    },
    // Đăng xuất
    logout: (state) => {
      state.isLoggedIn = false;
      state.studentInfo = null;
      state.courses = [];
    },
  },
});

// Export các action để sử dụng trong ứng dụng
export const { setStudentInfo, setCourses, addCourse, login, logout } = studentPortalSlice.actions;

// Export reducer để thêm vào store
export default studentPortalSlice.reducer;
