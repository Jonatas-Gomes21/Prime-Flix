import { Toaster } from "sonner";

function ToasterProvider() {
  return (
    <Toaster
      position="top-center"
      richColors
      visibleToasts={1}
      duration={2000}
    />
  );
}

export default ToasterProvider;
