import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

// styles
import "./Root.css";

export default function Root() {
  return (
    <>
      <Navbar />

      <div className="Root">
        <h1>What do you want to do?</h1>

        <div className="btn-flex-initial">
          <Link to="/viewer">
            <button>
              I’m a user and I want to join or view the queue list
            </button>
          </Link>

          <Link
            to="/verify"
            state={{ route: "/manage-queue", cancelRoute: "/" }}
          >
            <button>I’m Mia and I want to manage the queue list</button>
          </Link>
        </div>
      </div>
    </>
  );
}
