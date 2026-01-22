const questions = [
    // 1. Examen de Recuperació ADA (2024-2025 V2)
    {
        category: "Recuperació 24-25",
        q: "1.- Què guarda a la cua amb prioritat l'algorisme de Dijkstra amb cua?",
        options: ["a) CVertex", "b) CVertex*", "c) CEdge", "d) CEdge*", "e) Cap de les anteriors."],
        correct: 4
    },
    {
        category: "Recuperació 24-25",
        q: "2.- La classe CTrack guarda una llista de...",
        options: ["a) CVertex", "b) CVertex*", "c) CEdge", "d) CEdge*", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "Recuperació 24-25",
        q: "3.- La classe CVisits guarda una llista de...",
        options: ["a) CVertex", "b) CVertex*", "c) CEdge", "d) CEdge*", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "Recuperació 24-25",
        q: "4.- Amb quina funció es generen nombres aleatoris?",
        options: ["a) int rand();", "b) int rand(int);", "c) int srand();", "d) int srand(int);", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "Recuperació 24-25",
        q: "5.- Els camins òptims que genera l'algorisme de backtracking pur...",
        options: ["a) No poden contenir cicles.", "b) Els trams del camí que no contenen visites no poden tenir cicles.", "c) Poden passar per la mateixa aresta en la mateixa direcció.", "d) No poden passar dues vegades pel mateix vèrtexs.", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "Recuperació 24-25",
        q: "6.- Com poden modificar el camp m_JaHePassat dels veïns d'un vèrtex v?",
        options: ["a) for (CEdge e v.m_Edges) e.m_Destination->m_JaHePassat=...", "b) for (CVertex* pV : v.m_Vertexs) pV->m_JaHePassat=...", "c) for (CEdge* pE : v.m_Edges) pE->m_Destination->m_JaHePassat=...", "d) for (CVertex vei v.m_Vertexs) vei.m_JaHePassat=...", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "Recuperació 24-25",
        q: "7.- El pas de seleccionar el següent vèrtex a processar després del vèrtex v es fa...",
        options: ["a) Mirant quin dels vèrtexs del graf té la mínima distància.", "b) Mirant quin dels vèrtexs veïns de v té la mínima distància.", "c) Mirant quin de les arestes del graf té la mínima distància.", "d) Mirant quin de les arestes veïnes de v té la mínima distància.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "Recuperació 24-25",
        q: "8.- Quants algorismes de branch&bound s'implementen a la pràctica?",
        options: ["a) 1", "b) 2", "c) 3", "d) 4", "e) Cap de les anteriors"],
        correct: 2
    },
    {
        category: "Recuperació 24-25",
        q: "9.- Quin és el mínim nombre d'execucions de l'algorisme de Dijkstra que són necessàries per crear la taula de camins entre n visites?",
        options: ["a) n x n", "b) (n-1) x (n-1)", "c) n", "d) n - 1", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "Recuperació 24-25",
        q: "10.- Un graf guarda els vèrtexs i arestes a...",
        options: ["a) list<CVertex> i list<CEdges>", "b) list<CVertex> i list<CEdges*>", "c) list<CVertex*> i list<CEdges*>", "d) vector<CVertex*> i vector<CEdges*>", "e) Cap de les anteriors."],
        correct: 0
    },

    // 2. Examen Segon Parcial ADA (2024-2025 V2)
    {
        category: "Segon Parcial 24-25",
        q: "1.- Quina és la forma correcta d'inicialitzar un camp per tots els vèrtexs d'un graf g?",
        options: ["a) for (CVertex &v: g.m_Vertices) v.camp=valor inicial;", "b) for (CVertex v: g.m_Vertices) v.camp=valor inicial;", "c) for (int i=0; i<g.m_Vertices.size(); ++i) g.m_Vertices[i].camp=valor inicial;", "d) for (int i=0; i<=g.m_Vertices.size(); ++i) g.m_Vertices[i].camp=valor inicial;", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "Segon Parcial 24-25",
        q: "2.- Com es pot accedir a un camp de tots els veïns d'un vèrtex v?",
        options: ["a) for (CEdge e: v. m_Edges) e.camp", "b) for (CVertex v: v. m_Vertexs) v.camp", "c) for (CEdge* pE: v. m_Edges) pE->m_pDestination->camp", "d) for (CVertex* pV: v. m_Vertexs) pV->camp", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "Segon Parcial 24-25",
        q: "3.- Què guarda l'algorisme de Dijkstra als vèrtexs del graf?",
        options: ["a) La distància, booleà que indica si el vèrtex està processat o no i un apuntador al vèrtex anterior.", "b) La distància, booleà que indica si el vèrtex està processat o no i un apuntador a l'aresta anterior.", "c) La distància, i un apuntador al vèrtex anterior.", "d) La distància i un apuntador a l'aresta anterior.", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "Segon Parcial 24-25",
        q: "4.- A la pràctica com es guarda un camí?",
        options: ["a) Amb una llista d'arestes: list<CEdge*>...", "b) Amb una llista de vèrtexs: list<CVertex*>...", "c) Amb una llista d'arestes: list<CEdge>...", "d) Amb una llista de vèrtexs: list<CVertex>...", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "Segon Parcial 24-25",
        q: "5.- En quins algorismes s'utilitza la taula de camins entre visites per solucionar el problema del viatjant de comerç?",
        options: ["a) backtracking-greedy, branch&bound 1, 2 i 3.", "b) Estratègia greedy, backtracking-greedy, branch&bound 1, 2 i 3.", "c) Backtracking-greedy, branch&bound 1, 2 i 3, probabilístic.", "d) Backtracking pur, backtracking-greedy, branch&bound 1, 2 i 3, probabilístic.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "Segon Parcial 24-25",
        q: "6.- Què no es pot fer amb les arestes i vèrtexs d'un graf?",
        options: ["a) Fer còpies dels objectes que els representen.", "b) Afegir camps als seus objectes.", "c) Cercar-los dintre del graf.", "d) Comptar el nombre d'objectes.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "Segon Parcial 24-25",
        q: "7.- Com podem comprovar si un camí C passa per un vèrtex apuntat per pV?",
        options: ["a) bool passaPer(CTrack &c, CVertex* pV) { for (CVertex v: c.m_Vertexs) if (v==pV) return true; return false; }", "b) bool passaPer(CTrack &c, CVertex* pV) { for (CVertex *p: c.m_Vertexs) if (p==pV) return true; return false; }", "c) bool passaPer(CTrack &c, CVertex* pV) { for (CEdge *pE: c.m_Edges) if (pE-> m_pOrigin ==pV) return true; return false; }", "d) bool passaPer(CTrack &c, CVertex* pV) { for (CEdge *pE: c.m_Edges) if (pE-> m_pOrigin ==pV) return true; if (c.m_Edges.empty()) return false; return c.m_Edges.back()->m_pDestination ==pV; }", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "Segon Parcial 24-25",
        q: "8.- Quantes solucions del viatjant de comerç guarda l'algorisme probabilístic?",
        options: ["a) Una la millor trobada fins al moment i la que s'està creant en l'intent en execució.", "b) La millor solució dels intents executats i la millor de l'intent en execució.", "c) La millor solució dels intents executats, la millor de l'intent en execució, la configuració veïna i la que s'està creant en l'intent en execució.", "d) La millor de l'intent en execució, la millor de les configuracions veïnes i la que s'està creant.", "e) Cap de les anteriors."],
        correct: 2
    },
    {
        category: "Segon Parcial 24-25",
        q: "9.- Quina és la declaració correcta per la cua amb prioritat utilitzada als algorismes de branch&bound?",
        options: ["a) priority_queue<CBBNode*, std::vector<CBBNode*>, comparador> queue;", "b) priority_queue<CBBNode, std::vector<CBBNode>, comparador> queue;", "c) priority_queue<CBBNode*, vector<CBBNode*>, comparador> queue;", "d) Totes les anteriors.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "Segon Parcial 24-25",
        q: "10.- Quins camps de CVertex no s'utilitzen per implementar els algorismes de la pràctica?",
        options: ["a) m_Name, m_Point.", "b) m_Name.", "c) m_Name, m_Point, m_Edges.", "d) m_Name, m_Point, m_Edges, m_pDijkstraPrevious.", "e) Cap de les anteriors"],
        correct: 0
    },

    // 3. Examen Segon Parcial ADA (2023-2024 V1)
    {
        category: "Segon Parcial 23-24",
        q: "1.- Quants algoritmes que resolen el problema del viatjant de comerç s'han lliurat?",
        options: ["a) Al lliurament greedy 3 algorismes, Al lliurament backtracking 2 algorismes, al lliurament branch&bound 3 algorismes, al lliurament probabilístic 1 algorisme.", "b) Al lliurament greedy 1 algorisme, Al lliurament backtracking 2 algorismes, al lliurament programació dinàmica 1 algorisme, al lliurament branch&bound 3 algorismes, al lliurament probabilístic 1 algorisme.", "c) Al lliurament greedy 2 algorisme, Al lliurament backtracking 2 algorismes, al lliurament branch&bound 3 algorismes.", "d) Al lliurament greedy 1 algorisme, Al lliurament backtracking 2 algorismes, al lliurament branch&bound 3 algorismes, al lliurament probabilístic 1 algorisme.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "Segon Parcial 23-24",
        q: "2.- Com es fa un lliurament de la pràctica (pràctica ja feta)?",
        options: ["a) Es posa el NIU i passwords dels dos components del grup al fitxer CorrectionClient.ini i s'executa CorrectionClient.exe nom_del_lliurament.", "b) Es posa el NIU i password d'un dels dos components del grup al fitxer CorrectionClient.ini i s'executa CorrectionClient.exe nom_del_lliurament.", "c) Es posa el NIU i password d'un dels dos components del grup al fitxer CorrectionClient.ini i al fitxer GraphApplication.cpp i s'executa CorrectionClient.exe DELIVERY nom_del_lliurament.", "d) Es posa el NIU i password d'un dels dos components del grup al fitxer CorrectionClient.ini i al fitxer GraphApplication.cpp es posa noms i NIUs dels dos components i s'executa CorrectionClient.exe DELIVERY nom_del_lliurament.", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "Segon Parcial 23-24",
        q: "3.- Com es pot inicialitzar un camp de tots els vèrtexs del graf g?",
        options: ["a) for (CVertex v: g.m_Vertexs) ...v.Camp=...", "b) for (CVertex &v: g.m_Vertexs) ... v.Camp=...", "c) for (CVertex *pV: g.m_Vertexs) ... pV->Camp=...", "d) for (CVertex *&pV: g.m_Vertexs) ... pV->Camp=...", "e) Cap de les anteriors."],
        correct: 4
    },
    {
        category: "Segon Parcial 23-24",
        q: "4.- Què no es pot fer amb els elements d'un graf?",
        options: ["a) Fer còpies dels objectes que els representen.", "b) Afegir camps als seus objectes.", "c) Cercar-los dintre del graf.", "d) Comptar el nombre d'objectes que els representen.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "Segon Parcial 23-24",
        q: "5.- Quins atributs conté un CVisits?",
        options: ["a) Una llista de vèrtexs i el graf al que pertanyen.", "b) Una llista d'apuntadors a vèrtexs i un apuntador al graf al que pertanyen.", "c) Una llista de vèrtexs.", "d) Una llista d'apuntadors a arestes.", "e) Cap de les anteriors."],
        correct: 1
    },
    {
        category: "Segon Parcial 23-24",
        q: "6.- Com podem obtenir la llista de vèrtexs veïns d'un vèrtex apuntat per pV?",
        options: ["a) list<CVertex> l; for (CVertex *pVei: pV->m_Neighbors) l.push_back(*pVei);", "b) list<CVertex*> l; for (CVertex *pVei: pV->m_Neighbors) l.push_back(pVei);", "c) list<CVertex> l; for (CEdge *pE: pV->m_Edges) l.push_back(pE->m_Destination);", "d) list<CVertex*> l; for (CEdge *pE: pV->m_Edges) l.push_back(pE->m_pDestination);", "e) Cap de les anteriors."],
        correct: 3
    },
    {
        category: "Segon Parcial 23-24",
        q: "7.- Què compleix un camí que sigui solució òptima del problema del viatjant de comerç en un graf no dirigit?",
        options: ["a) Que no passa dues vegades pel mateix vèrtex.", "b) Que no passa dues vegades per la mateixa aresta.", "c) Que no passa dues vegades per la mateixa aresta en el mateix sentit.", "d) Que no té cicles.", "e) Cap de les anteriors"],
        correct: 2
    },
    {
        category: "Segon Parcial 23-24",
        q: "8.- Com s'ha de definir el comparador d'una cua amb prioritat perquè els seus elements quedin ordenats del pes més petit al pes més gran?",
        options: ["a) struct comparator { bool operator() (Objecte &a, Objecte &b) {return a.pes > b.pes; }};", "b) struct comparator { bool operator() (Objecte &a, Objecte &b) {return a.pes < b.pes; }};", "c) bool comparator(Objecte &a, Objecte &b) { return a.pes > b.pes; }", "d) bool comparator(Objecte &a, Objecte &b) { return a.pes < b.pes; }", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "Segon Parcial 23-24",
        q: "9.- Els algoritmes que solucionen el problema del viatjant de comerç que no treballant directament sobre el graf utilitzant...",
        options: ["a) Una matriu de les longituds dels camins entre visites on també poden estar guardats els camins.", "b) Una cua amb prioritat de vèrtexs.", "c) Una cua amb prioritat de parelles de distància i vèrtex.", "d) Una cua amb prioritat de solucions parcials o totals.", "e) Cap de les anteriors."],
        correct: 0
    },
    {
        category: "Segon Parcial 23-24",
        q: "10.- Com podem comprovar si un camí C passa per un vèrtex apuntat per pV?",
        options: ["a) bool passaPer(CTrack &c, CVertex* pV) { for (CVertex v: c.m_Vertexs) if (v==pV) return true; return false; }", "b) bool passaPer(CTrack &c, CVertex* pV) { for (CVertex *p: c.m_Vertexs) if (p==pV) return true; return false; }", "c) bool passaPer(CTrack &c, CVertex* pV) { for (CEdge *pE: c.m_Edges) if (pE-> m_pDestination==pV) return true; if (c.m_Edges.empty()) return false; return c.m_Edges.front()->m_pOrigin==pV; }", "d) bool passaPer(CTrack &c, CVertex* pV) { for (CEdge *pE: c.m_Edges) if (pE-> m_pOrigin ==pV return true; if (c.m_Edges.empty()) return false; return c.m_Edges.back()->m_pOrigin ==pV; }", "e) Cap de les anteriors"],
        correct: 2
    }
];


let currentQuestion = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const categoryText = document.getElementById('category');
const qNumberText = document.getElementById('question-number');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.innerText = q.q;
    categoryText.innerText = q.category;
    qNumberText.innerText = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
    
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, q.correct, btn);
        optionsContainer.appendChild(btn);
    });

    prevBtn.disabled = currentQuestion === 0;
}

function checkAnswer(selected, correct, btn) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(b => b.disabled = true); // Bloquear tras responder

    if (selected === correct) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('incorrect');
        allOptions[correct].classList.add('correct');
    }
}

nextBtn.onclick = () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
};

prevBtn.onclick = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
};

// Iniciar

loadQuestion();

