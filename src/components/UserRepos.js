import React, { useState, useEffect } from "react";
import Axios from "axios";

// Styles
import { ListGroup, ListGroupItem } from "reactstrap";

const UserRepos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);

    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup className="user-repos">
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-primary">
            <a target="_blank" rel="noreferrer" href={repo.html_url}>
              {repo.name}
            </a>
          </div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UserRepos;
