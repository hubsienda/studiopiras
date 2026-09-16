export type Pubblicazione = {
  order: number;
  title: string;
  subtitle: string;
  date: string;
  pages: number;
  pdf: string;
};

export const pubblicazioni: Pubblicazione[] = [
  {
    order: 1,
    title: "Pianificare il passaggio generazionale dell'impresa",
    subtitle: 'La holding di famiglia come architettura di continuità, governance e patrimonio',
    date: 'Settembre 2026',
    pages: 6,
    pdf: '/articoli/Studio_Piras_01_Pianificazione_Passaggio_Generazionale_6p.pdf',
  },
  {
    order: 2,
    title: 'Trust e pianificazione successoria del capitalismo familiare',
    subtitle: 'Quando il testamento non basta: governare oggi la continuità di domani',
    date: 'Settembre 2026',
    pages: 6,
    pdf: '/articoli/Studio_Piras_02_Trust_Pianificazione_Successoria_6p-1.pdf',
  },
  {
    order: 3,
    title: 'Holding e passaggio generazionale — dalla proprietà alla regia',
    subtitle: 'Centralizzare il controllo, governare il patrimonio, preparare la continuità',
    date: 'Settembre 2026',
    pages: 8,
    pdf: '/articoli/Studio_Piras_03_Holding_Passaggio_Generazionale_8p.pdf',
  },
  {
    order: 4,
    title: 'Società semplice e godimento dei beni da parte dei soci',
    subtitle: "La Cassazione ridisegna il confine tra patrimonio familiare e beni d'impresa",
    date: 'Settembre 2026',
    pages: 8,
    pdf: '/articoli/Studio_Piras_04_Societa_Semplice_Godimento_Beni_8p.pdf',
  },
  {
    order: 5,
    title: 'Trust, holding e fiscalità tra Italia e strutture estere',
    subtitle: 'Separazione patrimoniale, tassazione dei redditi, residenza e limiti della pianificazione',
    date: 'Settembre 2026',
    pages: 9,
    pdf: '/articoli/Studio_Piras_05_Trust_Holding_Fiscalita_Internazionale_9p.pdf',
  },
  {
    order: 6,
    title: 'Holding: la regia del gruppo tra governance e fiscalità',
    subtitle: 'Tipologie, PEX, dividendi, consolidato, IVA e finanza infragruppo',
    date: 'Settembre 2026',
    pages: 9,
    pdf: '/articoli/Studio_Piras_06_Holding_Strumento_Strategico_Gruppo_9p.pdf',
  },
  {
    order: 7,
    title: 'Trust o società semplice? Due strumenti, due logiche',
    subtitle: 'Protezione, governance e successione del patrimonio familiare',
    date: 'Settembre 2026',
    pages: 9,
    pdf: '/articoli/Studio_Piras_07_Trust_o_Societa_Semplice_9p.pdf',
  },
  {
    order: 8,
    title: "Composizione negoziata della crisi d'impresa",
    subtitle: 'Intervenire prima che la difficoltà diventi irreversibile',
    date: 'Settembre 2026',
    pages: 9,
    pdf: '/articoli/Studio_Piras_08_Composizione_Negoziata_Crisi_Impresa_9p.pdf',
  },
].sort((a, b) => a.order - b.order);
