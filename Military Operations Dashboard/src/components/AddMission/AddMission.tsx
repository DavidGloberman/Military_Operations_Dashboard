import React, { useState } from "react";
import "./AddMission.css";
import { Mission, Priority, Status } from "../../types/types";

interface AddMissionProps {
  addMission: (mission: Mission) => void;
}

const AddMission: React.FC<AddMissionProps> = ({ addMission }) => {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.Pending);
  const [priority, setPriority] = useState<Priority>(Priority.High);
  const [description, setDescription] = useState<string>("");

  const handelAddMission = (e: React.FormEvent) => {
    e.preventDefault();
    const newMission: Mission = {
      name: name,
      status: status,
      priority: priority,
      description: description,
    };

    addMission(newMission);
  };

  return (
    <form className="AddMission" onSubmit={handelAddMission}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        type="text"
        name="name"
        placeholder="name"
      />
      <select
        onChange={(e: any) => setStatus(e.target.value)}
        name="status"
        id="status"
      >
        <option value={Status.Pending}>Pending</option>
        <option value={Status.InProgress}>In Progress</option>
        <option value={Status.Completed}>Completed</option>
      </select>
      <select
        onChange={(e: any) => setPriority(e.target.value)}
        name="priority"
        id="priority"
      >
        <option value={Priority.High}>High</option>
        <option value={Priority.Low}>Low</option>
      </select>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
        type="text"
        name="description"
        placeholder="description"
      />
      <input type="submit" placeholder="Add" />
    </form>
  );
};

export default AddMission;
