import React from "react";

// Styles
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-7 user-card">
      <img src={user.avatar_url} className="img-thumbnail" />

      <CardBody>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-ingo">
          Available for hire: {user.hireable ? "YES" : "No"}
        </div>
        <div className="text-ingo">Followers: {user.followers}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
