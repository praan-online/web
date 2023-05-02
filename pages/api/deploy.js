import { useHasNewDeploy } from "next-deploy-notifications";

function App() {
  let { hasNewDeploy } = useHasNewDeploy();

  return (
    <div>
      <main>Your app</main>

      {hasNewDeploy && (
        <Notification>
          New version available!
          <button onClick={() => window.location.reload()}>Refresh</button>
        </Notification>
      )}
    </div>
  );
}