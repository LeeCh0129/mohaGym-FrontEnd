import React, { useState } from "react";
import Modal from "react-modal";
import "./members.css";

Modal.setAppElement("#root");

const teamMembers = [
  {
    id: 1,
    name: "이찬호",
    status: "Active",
    email: "chanho@example.com",
    phone: "123-456-7890",
    tags: ["일반회원"],
  },
  {
    id: 2,
    name: "최영민",
    status: "Inactive",
    email: "youngmin@example.com",
    phone: "123-544-3260",
    tags: ["일반회원"],
  },
  {
    id: 3,
    name: "한창희",
    status: "Inactive",
    email: "changhee@example.com",
    phone: "546-224-0245",
    tags: ["PT회원"],
  },
  {
    id: 4,
    name: "배지환",
    status: "Inactive",
    email: "paris@example.com",
    phone: "785-654-3210",
    tags: ["PT회원"],
  },
  // Add more team members here
];

export default function Members() {
  const [members, setMembers] = useState(teamMembers);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddMember = (newMember) => {
    setMembers([...members, newMember]);
    setIsModalOpen(false);
  };

  const handleUpdateMember = (updatedMember) => {
    const updatedMembers = members.map((member) =>
      member.id === updatedMember.id ? updatedMember : member
    );
    setMembers(updatedMembers);
    setSelectedMember(null);
    setIsModalOpen(false);
  };

  const handleDeleteMember = (memberId) => {
    const updatedMembers = members.filter((member) => member.id !== memberId);
    setMembers(updatedMembers);
    setSelectedMember(null);
  };

  const handleEditClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    setIsEditMode(true);
  };

  const openModal = () => {
    setSelectedMember(null);
    setIsModalOpen(true);
    setIsEditMode(false);
  };

  return (
    <div className="members-container">
      <h2>MohaGym Members</h2>
      <h3>members total ({members.length})</h3>
      <table className="members-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Tags</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.status}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
                {member.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`tag ${tag === "PT회원" ? "pt-member" : ""}`}
                  >
                    {tag}
                  </span>
                ))}
              </td>
              <td>
                <button
                  onClick={() => handleEditClick(member)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteMember(member.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={openModal} className="add-member-btn">
        Add Member
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setSelectedMember(null);
          setIsModalOpen(false);
          setIsEditMode(false);
        }}
        contentLabel={isEditMode ? "Edit Member Modal" : "Add Member Modal"}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>{isEditMode ? "Edit Member" : "Add Member"}</h2>
        <form
          className="member-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            if (isEditMode) {
              handleUpdateMember({
                id: selectedMember.id,
                name: formData.get("name"),
                status: formData.get("status"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                tags: formData.get("tags").split(","),
              });
            } else {
              handleAddMember({
                id: members.length + 1,
                name: formData.get("name"),
                status: formData.get("status"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                tags: formData.get("tags").split(","),
              });
            }
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={selectedMember ? selectedMember.name : ""}
            required
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            defaultValue={selectedMember ? selectedMember.status : ""}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={selectedMember ? selectedMember.email : ""}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            defaultValue={selectedMember ? selectedMember.phone : ""}
            required
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated)"
            defaultValue={selectedMember ? selectedMember.tags.join(",") : ""}
          />
          <button type="submit" className="add-btn">
            {isEditMode ? "Update" : "Add"}
          </button>
        </form>
      </Modal>
    </div>
  );
}
