import axios from "axios";
import { Mission } from "../types/types";

const API_KEY = "olNNbJi_QA9DCmHBXsv7yFvdeLFcv8GEm8qG_-CjwVw";
const BASE_URL = "https://reactexambackend.onrender.com/missions/";

export const getMissions = async (): Promise<Mission[]> => {
  try {
    const response = await axios.get(BASE_URL + API_KEY);
    return response.data;
  } catch (error) {
    throw new Error("fetch failed");
  }
};

export const addNewMission = async (mission: Mission): Promise<Mission> => {
  try {
    const response = await axios.post(BASE_URL + API_KEY, mission);
    return response.data;
  } catch (error) {
    throw new Error("fetch failed");
  }
};

export const deleteMissionApi = async (missionId: string): Promise<void> => {
  try {
    const response = await axios.delete(BASE_URL + API_KEY + "/" + missionId);
    return response.data;
  } catch (error) {
    throw new Error("fetch failed");
  }
};

export const updateMission = async (missionId: string): Promise<Mission> => {
  try {
    const response = await axios.post(
      BASE_URL + API_KEY + "/progress/" + missionId
    );
    return response.data;
  } catch (error) {
    throw new Error("fetch failed");
  }
};
