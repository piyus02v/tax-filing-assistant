export interface User {
  id: string;
  email: string;
  fullName: string;
}

export interface FormSubmission {
  id: string;
  userId: string;
  formType: string;
  assessmentYear: string;
  formData: Record<string, any>;
}

export interface FieldSuggestion {
  fieldCode: string;
  suggestedValue: string;
  explanation: string;
  confidenceScore: number;
  citations: Citation[];
}

export interface Citation {
  document: string;
  page: number;
  section: string;
  text: string;
}
