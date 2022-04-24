import { fetchDataWithToken, postTrackingAcitivity } from "@utils/fetch";

const MyWorkspaceService = {
  getWorkspaces: async () => {
    try {
      const response = await fetchDataWithToken('task/getWorkspaces');

      if (response.statusCode === 200) {
        return response.results.rows;
      }
    } catch (err) {
      console.log("ERROR getWorkspaces: ", err);
    }
  },
  trackActivity: async ({user, workspace}) => {
    try {
      const response = await postTrackingAcitivity('activities/tracking', {
        workspace: workspace,
        user: user,
      })
    } catch (err) {
      console.log("ERROR Tracking Activity: ", err);
    }
  }
}

export default MyWorkspaceService;