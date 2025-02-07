import { createContext, useContext, useState, type ReactNode } from "react";

const FormContext = createContext<{
  formData: Record<string, unknown>;
  updateFormData: ({}) => void;
}>({
  formData: { body: "" },
  updateFormData: ({}) => {},
});

export const useFormContext = () => {
  return useContext(FormContext);
};

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState({ body: "" });

  const updateFormData = (updatedData: {}) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }));
  };

  return <FormContext.Provider value={{ formData, updateFormData }}>{children}</FormContext.Provider>;
}
