export const validateForm = (data: any): string => {
  if (
    !data?.name ||
    !data?.email ||
    !data?.phone ||
    !data?.subject ||
    !data?.project_requirements ||
    !data?.company_name 
  ) {
    return "Please fill in all required fields.";
  }
    
  return "";
};
