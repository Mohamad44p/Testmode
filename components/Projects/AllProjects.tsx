import AllProjectsClient from "./AllProjectsClient";
import AsyncProjectsPage from "./AsyncProjectsPage";

export default function AllProjects() {
  return (
    <main>
      <AllProjectsClient>
        <AsyncProjectsPage />
      </AllProjectsClient>
    </main>
  );
}
