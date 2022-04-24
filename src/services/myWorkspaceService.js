import { fetchDataWithToken } from "@utils/fetch";

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
  }
}

export default MyWorkspaceService;