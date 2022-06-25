interface AcmeItem {
  id: string,
  text: string,
}

interface AcmeList {
  name: string;
  items: AcmeItem[];
}