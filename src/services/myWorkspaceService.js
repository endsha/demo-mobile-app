import { fetchDataWithToken, postTrackingAcitivity } from "@utils/fetch";
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyWorkspaceService = {
  getWorkspaces: async () => {
    try {
      const response = await fetchDataWithToken('task/getWorkspaces');

      if (response.statusCode === 200) {
        return response.results.rows;
      }
    } catch (err) {
      console.log("ERROR getWorkspaces: ", err);
      return [];
    }
  },
  getTasks: async () => {
    try {
      const response = await fetchDataWithToken('task/list');

      if (response.statusCode === 200) {
        return response.results.rows;
      }
    } catch (err) {
      console.log("ERROR getWorkspaces: ", err);
      return [];
    }
  },
  trackActivity: async ({ workspaceId, taskId}) => {
    try {
      const userId = await AsyncStorage.getItem('user_id');
      const response = await postTrackingAcitivity('activities/tracking', {
        workspaceId: workspaceId,
        userId: userId,
        taskId: taskId,
      })
    } catch (err) {
      console.log("ERROR Tracking Activity: ", err);
    }
  }
}

export default MyWorkspaceService;