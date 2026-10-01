 export const getTheData = (formRef: React.RefObject<HTMLFormElement | null>) => {
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form!);
    const data = Object.fromEntries(formData.entries());
    return data;
  };