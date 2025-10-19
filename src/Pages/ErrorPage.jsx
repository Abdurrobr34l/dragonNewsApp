import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div>
        <img
          src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg"
          alt="Error illustration"
        />
      </div>

      <div className="max-w-md">
        <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Oops! Page not found.</h2>
        {/* <p className="mb-6 text-base-content/70">
          {error?.statusText || error?.message || "Sorry, we couldn’t find the page you were looking for."}
        </p> */}
        <p className="mb-6 text-base-content/70">
          Sorry, we couldn’t find the page you were looking for.
        </p>

        <div className="flex justify-center">
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ErrorPage;
