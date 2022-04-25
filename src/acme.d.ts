interface AcmeItem {
  id: number,
  text: string,
}

interface AcmeList {
  name: string;
  items: AcmeItem[];
}