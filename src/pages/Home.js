import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

// Context
import { UserContext } from "../context/UserContext";

// Styles
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { toast } from "react-toastify";

// Components
import UserCard from "../components/UserCard";
import UserRepos from "../components/UserRepos";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  // Put anypage behind login
  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <Container className="home-container">
      <Row className="mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetails} color="primary">
                Fetch User
              </Button>
            </InputGroupAddon>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">
          {user ? <UserRepos repos_url={user.repos_url} /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
