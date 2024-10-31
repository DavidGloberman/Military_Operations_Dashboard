import React from "react";
import "./MissionList.css";
import { Mission } from "../../types/types";
import MissionItem from "../MissionItem/MissionItem";

interface MissionListProps {
  missions: Mission[];
  deleteMission: (missionId: string) => void;
  missionProgress: (missionId: string) => void;
}

const MissionList: React.FC<MissionListProps> = ({
  missions,
  deleteMission,
  missionProgress,
}) => {
  return (
    <div className="MissionList">
      <h1>Missions</h1>
      {missions.map((mission, idx) => {
        return (
          <MissionItem
            key={idx}
            mission={mission}
            deleteMission={deleteMission}
            missionProgress={missionProgress}
          />
        );
      })}
    </div>
  );
};

export default MissionList;
