import { Toaster } from "sonner";
import { AppProvidersWrapper, BackToTop } from "./components";
import AllRoutes from "./routes/Routes";
import { configureFakeBackend } from "@/common";

// styles
import "@/assets/css/style.css";
import { AdminLayout } from "./layouts";

configureFakeBackend();

const App = () => {
  return (
    <AppProvidersWrapper>
      {/* <AllRoutes /> */}
      {/* <BackToTop /> */}
      {/* <Toaster richColors /> */}
      <AdminLayout/>
    </AppProvidersWrapper>
  );
};

export default App;
