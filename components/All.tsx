import ProjectsPage from "./AsyncProject";
import CardsSec from "./CardsSec";
import ClientAll from "./ClientAll";

export default function All() {
  return (
    <div>
      <ClientAll>
        <ProjectsPage />
      </ClientAll>
    </div>
  );
}
