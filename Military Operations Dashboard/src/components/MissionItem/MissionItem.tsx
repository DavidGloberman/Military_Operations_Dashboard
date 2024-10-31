import "./MissionItem.css";
import { Mission, Status } from "../../types/types";
import { useEffect, useState } from "react";

interface MissionItemProps {
  mission: Mission;
  deleteMission: (missionId: string) => void;
  missionProgress: (missionId: string) => void;
}

const MissionItem: React.FC<MissionItemProps> = ({
  mission,
  deleteMission,
  missionProgress,
}) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handelCompleted = () => {
    if (mission.status == Status.Completed) setIsCompleted(true);
  };
  useEffect(() => {
    handelCompleted();
  });

  return (
    <div className="MissionItem">
      <div className="mission">
        <h5>Name: {mission.name}</h5>
        <h6>Status: {mission.status}</h6>
        <h6>Priority: {mission.priority}</h6>
        <h6>Description: {mission.description}</h6>
      </div>
      <div className="buttons">
        <button onClick={() => deleteMission(mission._id!)}>Delete</button>
        {!isCompleted && (
          <button
            onClick={() => {
              missionProgress(mission._id!);
            }}
          >
            Progress
          </button>
        )}
      </div>
    </div>
  );
};

export default MissionItem;
