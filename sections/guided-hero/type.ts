type list_type_literals = 'ordered' | 'dotted';

export type howToUseGuidedData = {
  image: string;
  title: string;
  image_alt?: string;
  list_type: 'ordered' | 'dotted';
  list_items: string[];
};

export interface howToUseGuidedDataArray {
  data: howToUseGuidedData[];
}
