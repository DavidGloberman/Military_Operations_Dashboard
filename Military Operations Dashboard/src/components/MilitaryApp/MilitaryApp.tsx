import React, { useEffect, useState } from "react";
import "./MilitaryApp.css";
import { Mission } from "../../types/types";
import AddMission from "../AddMission/AddMission";
import MissionList from "../MissionList/MissionList";
import {
  addNewMission,
  deleteMissionApi,
  getMissions,
  updateMission,
} from "../../DAL/fetch api";

const MilitaryApp: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [changeMissions, setChangeMissions] = useState<boolean>(true);

  const addMission = async (mission: Mission): Promise<void> => {
    await addNewMission(mission);
    setChangeMissions((prev) => !prev);
  };

  const deleteMission = async (missionId: string): Promise<void> => {
    await deleteMissionApi(missionId);
    setChangeMissions((prev) => !prev);
  };

  const missionProgress = async (missionId: string): Promise<void> => {
    await updateMission(missionId);
    setChangeMissions((prev) => !prev);
  };

  useEffect(() => {
    getMissions().then((missions) => setMissions(missions));
  }, [changeMissions]);


  return (
    <div className="MilitaryApp">
      <h1>Military Operations Dashboard</h1>
      <AddMission addMission={addMission} />
      <MissionList
        missions={missions}
        deleteMission={deleteMission}
        missionProgress={missionProgress}
      />
    </div>
  );
};

export default MilitaryApp;
