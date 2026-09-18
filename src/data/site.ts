export const site = {
  name: 'Studio Piras',
  subtitle: 'Dottore Commercialista · Revisore Legale',
  claim: 'Decisioni complesse, risposte chiare.',
  phone: '+39 070 861888',
  email: 'info@studiopiras.it',
  vat: '02132430923',
  offices: [
    { name: "Quartu Sant’Elena", address: "Via Sicilia, 65 – 09045 Quartu Sant’Elena (CA)", map: 'https://maps.app.goo.gl/iVhLexuVpJkG6cqR8' },
    { name: 'Milano', address: 'Via G.B. Pergolesi, 2 – 20124 Milano', map: 'https://maps.app.goo.gl/swAubEgGiwc8RyTy7' },
  ],
};

export type ServiceArea = { slug:string; title:string; intro:string; paragraphs:string[]; when:string[]; method:string; cta:string; };

export const services: ServiceArea[] = [
  {
    slug:'consulenza-societaria-fiscale', title:'Consulenza societaria e fiscale',
    intro:'Le scelte fiscali e societarie incidono sulla struttura dell’impresa, sui suoi equilibri economici e sul patrimonio dell’imprenditore.',
    paragraphs:[
      'Lo Studio garantisce un supporto costante ad aziende, società e gruppi nella conduzione degli aspetti fiscali, tributari e societari, dalla definizione delle strategie fino al puntuale compimento di ogni adempimento.',
      "Offriamo consulenza affiancando la proprietà e gli organi direttivi nel soppesare i riflessi fiscali, patrimoniali ed economici derivanti dalle scelte d'impresa, ponendo massima cura nella sintonia tra assetto societario, operatività e traguardi aziendali.",
      "Rientrano in questo ambito anche i servizi di consulenza contabile, la predisposizione del bilancio, l'assistenza agli organi di governance e l'orientamento nei passaggi societari di maggior rilievo."
    ],
    when:['Pianificazione fiscale e societaria','Bilanci e fiscalità d’impresa','Scelte degli organi amministrativi','Riorganizzazione degli assetti societari','Valutazione degli effetti economici e patrimoniali'],
    method:"Prendiamo le mosse dalla decisione strategica, individuiamo i perimetri normativi e tributari e ponderiamo l'impatto dell'operazione, prima di convertire la scelta in atti formali ed esecuzioni operative.", cta:'Parliamo della questione'
  },
  {
    slug:'operazioni-straordinarie', title:'Operazioni straordinarie e riorganizzazioni societarie',
    intro:'Una fusione, una scissione o una cessione non è soltanto un atto tecnico: modifica assetti, rischi, fiscalità, finanza e prospettive dell’impresa.',
    paragraphs:[
      'Lo Studio assiste imprese, soci e gruppi nella progettazione e realizzazione di operazioni straordinarie, valutando congiuntamente gli aspetti societari, fiscali, economici e finanziari.',
      'L’attività comprende fusioni, scissioni, conferimenti, trasformazioni, acquisizioni e cessioni di partecipazioni, aziende e rami d’azienda, riorganizzazioni degli assetti proprietari e operazioni finalizzate alla separazione di attività o patrimoni.',
      'L’obiettivo non è individuare soltanto l’operazione tecnicamente possibile, ma confrontare le alternative e costruire la soluzione più coerente con gli obiettivi industriali, patrimoniali e familiari dell’imprenditore.'
    ],
    when:['Fusioni, scissioni e conferimenti','Trasformazioni societarie','Acquisizioni e cessioni','Separazione di attività e patrimoni','Riorganizzazioni proprietarie','Operazioni su aziende e partecipazioni'],
    method:'Mettiamo a confronto le alternative, gli effetti fiscali, societari e finanziari e le conseguenze nel tempo, coordinando l’esecuzione con le altre competenze necessarie.', cta:'Confrontiamoci sull’operazione'
  },
  {
    slug:'holding-gruppi-governance', title:'Holding, gruppi e governance',
    intro:'La costituzione di una holding non è un fine in sé. È uno strumento che deve essere coerente con la struttura del gruppo, i flussi finanziari e gli obiettivi dei soci.',
    paragraphs:[
      'Lo Studio assiste nella progettazione e riorganizzazione di holding e gruppi societari, nella definizione dei rapporti tra società operative e patrimoniali, nell’organizzazione dei flussi infragruppo e nella valutazione delle implicazioni fiscali delle diverse strutture.',
      "Particolare attenzione è dedicata alla governance, alla gestione dei rapporti interpersonali e generazionali tra soci, alla ripartizione dei ruoli operativi e alla definizione di assetti organizzativi idonei a sostenere lo sviluppo dell'attività nel tempo."
    ],
    when:['Costituzione o revisione di una holding','Riorganizzazione di gruppi societari','Rapporti tra società operative e patrimoniali','Flussi finanziari infragruppo','Governance e rapporti tra soci','Distribuzione di ruoli e responsabilità'],
    method:'Analizziamo la struttura esistente e gli obiettivi reali prima di proporre un assetto. La holding è valutata come parte di un sistema, non come soluzione automatica.', cta:'Parliamo della struttura del gruppo'
  },
  {
    slug:'pianificazione-patrimoniale-passaggio-generazionale', title:'Pianificazione patrimoniale e passaggio generazionale',
    intro:'Patrimonio, partecipazioni e continuità dell’impresa richiedono decisioni che coinvolgono proprietà, gestione, famiglia e fiscalità.',
    paragraphs:[
      'Il patrimonio dell’imprenditore, le partecipazioni societarie e la continuità dell’impresa richiedono una pianificazione che non può essere affrontata soltanto sotto il profilo fiscale.',
      'Lo Studio affianca imprenditori e famiglie nella valutazione degli strumenti societari e patrimoniali utili a organizzare il passaggio generazionale, proteggere la continuità aziendale e disciplinare il rapporto tra proprietà, gestione e patrimonio familiare.',
      'L’analisi può coinvolgere holding familiari, patti e assetti societari, operazioni di riorganizzazione, strumenti di pianificazione successoria e, quando opportuno, il coordinamento con professionisti legali e notarili.'
    ],
    when:['Preparazione del passaggio generazionale','Riorganizzazione delle partecipazioni familiari','Separazione tra proprietà e gestione','Continuità dell’impresa','Assetti societari tra più generazioni','Coordinamento con profili legali e notarili'],
    method:'Ricostruiamo interessi, ruoli, patrimonio e obiettivi della famiglia imprenditoriale, quindi valutiamo strumenti e tempi con una lettura unitaria delle conseguenze.', cta:'Parliamo della pianificazione'
  },
  {
    slug:'finanza-impresa', title:'Finanza d’impresa e pianificazione',
    intro:'Un’operazione sostenibile fiscalmente e societariamente deve esserlo anche sul piano economico e finanziario.',
    paragraphs:[
      'Lo Studio supporta l’impresa nella predisposizione di business plan e piani economico-finanziari, nell’analisi degli investimenti, dei fabbisogni e dei flussi di cassa e nella valutazione della sostenibilità delle operazioni.',
      'L’attività comprende inoltre l’assistenza nell’accesso a finanziamenti, contributi e strumenti agevolativi, con un approccio che parte dal progetto imprenditoriale e non dal singolo incentivo.'
    ],
    when:['Business plan e piani finanziari','Analisi degli investimenti','Fabbisogni finanziari e flussi di cassa','Valutazione della sostenibilità di operazioni','Finanziamenti','Contributi e strumenti agevolativi'],
    method:'Partiamo dal progetto, dai numeri e dalla capacità finanziaria dell’impresa. Solo dopo valutiamo strumenti di finanziamento o agevolazione coerenti con l’operazione.', cta:'Confrontiamoci sul progetto'
  },
  {
    slug:'contenzioso-tributario', title:'Contenzioso tributario',
    intro:'Una verifica fiscale richiede decisioni tempestive: prima di difendersi occorre capire la fondatezza delle contestazioni, il rischio e le alternative.',
    paragraphs:[
      'Lo Studio assiste il cliente sin dalle prime fasi della verifica fiscale e durante il procedimento di accertamento, valutando tempestivamente la fondatezza delle contestazioni, il rischio economico e le possibili strategie.',
      'L’assistenza prosegue nelle procedure deflative e conciliative e, quando necessario, nel giudizio tributario.',
      'Ogni scelta viene valutata non soltanto sotto il profilo giuridico, ma anche considerando costi, tempi, effetti finanziari e probabilità di definizione della controversia.'
    ],
    when:['Verifiche fiscali','Procedimenti di accertamento','Valutazione preventiva della controversia','Procedure deflative','Conciliazione','Giudizio tributario'],
    method:'Valutiamo documenti, contestazioni, rischio economico e opzioni disponibili prima di definire la strategia, evitando automatismi tra accertamento e contenzioso.', cta:'Parliamo della verifica'
  }
];
