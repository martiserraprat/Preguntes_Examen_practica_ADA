const questions = [
    {
        category: "Recuperació 24-25",
        q: "1.- Quants algoritmes que resolen el problema del viatjant de comerç s'han lliurat?",
        options: ["a) Greedy 3, Backtracking 2, Branch&Bound 3, Probabilístic 1", "b) Greedy 1, Backtracking 2, Programació Dinàmica 1, Branch&Bound 3, Probabilístic 1", "c) Greedy 2, Backtracking 2, Branch&Bound 3", "d) Greedy 1, Backtracking 2, Branch&Bound 3, Probabilístic 1", "e) Cap de les anteriors."],
        correct: 4 // e
    },
    {
        category: "Recuperació 24-25",
        q: "2.- Com es fa un lliurament de la pràctica (pràctica ja feta)?",
        options: ["a) NIU/pass de tots dos a CorrectionClient.ini i CorrectionClient.exe", "b) NIU/pass d'un a CorrectionClient.ini i CorrectionClient.exe", "c) NIU/pass d'un a CorrectionClient.ini i GraphApplication.cpp i DELIVERY", "d) NIU/pass d'un a CorrectionClient.ini, noms/NIUs a GraphApplication.cpp i DELIVERY", "e) Cap de les anteriors."],
        correct: 3 // d
    },
    {
        category: "Recuperació 24-25",
        q: "3.- Com es pot inicialitzar un camp de tots els vèrtexs del graf g?",
        options: ["a) for (CVertex v: g.m_Vertexs)", "b) for (CVertex &v: g.m_Vertexs)", "c) for (CVertex *pV: g.m_Vertexs)", "d) for (CVertex *&pV: g.m_Vertexs)", "e) Cap de les anteriors."],
        correct: 1 // b
    },
    {
        category: "Recuperació 24-25",
        q: "4.- Què no es pot fer amb els elements d'un graf?",
        options: ["a) Fer còpies dels objectes que els representen.", "b) Afegir camps als seus objectes.", "c) Cercar-los dintre del graf.", "d) Comptar el nombre d'objectes.", "e) Cap de les anteriors."],
        correct: 0 // a
    },
    {
        category: "Recuperació 24-25",
        q: "5.- Quins atributs conté un CVisits?",
        options: ["a) Llista de vèrtexs i el graf.", "b) Llista d'apuntadors a vèrtexs i un apuntador al graf.", "c) Una llista de vèrtexs.", "d) Una llista d'apuntadors a arestes.", "e) Cap de les anteriors."],
        correct: 1 // b
    },
    {
        category: "Recuperació 24-25",
        q: "6.- Com podem obtenir la llista de vèrtexs veïns d'un vèrtex apuntat per pV?",
        options: ["a) list<CVertex> l (pVei)", "b) list<CVertex*> l (pVei)", "c) list<CVertex> l (pE->m_Destination)", "d) list<CVertex*> l (pE->m_pDestination)", "e) Cap de les anteriors."],
        correct: 2 // c
    },
    {
        category: "Recuperació 24-25",
        q: "7.- Què compleix un camí que sigui solució òptima del TSP en un graf no dirigit?",
        options: ["a) Que no passa dues vegades pel mateix vèrtex.", "b) Que no passa dues vegades per la mateixa aresta.", "c) No passa per la mateixa aresta en el mateix sentit.", "d) Que no té cicles.", "e) Cap de les anteriors."],
        correct: 0 // a
    },
    {
        category: "Recuperació 24-25",
        q: "8.- Definir comparador cua prioritat (pes petit a gran):",
        options: ["a) operator() {return a.pes > b.pes;}", "b) operator() {return a.pes < b.pes;}", "c) bool comparator {return a.pes > b.pes;}", "d) bool comparator {return a.pes < b.pes;}", "e) Cap de les anteriors."],
        correct: 2 // c
    },
    {
        category: "Recuperació 24-25",
        q: "9.- Els algoritmes que no treballen directament sobre el graf utilitzen...",
        options: ["a) Matriu de longituds.", "b) Cua amb prioritat de vèrtexs.", "c) Cua distància i vèrtex.", "d) Cua de solucions parcials o totals.", "e) Cap de les anteriors."],
        correct: 3 // d
    },
    {
        category: "Recuperació 24-25",
        q: "10.- Comprovació si camí C passa per pV:",
        options: ["a) for (CVertex v: c.m_Vertexs) if (v==pV)", "b) for (CVertex *p: c.m_Vertexs) if (p==pV)", "c) via Edges Destination/Origin", "d) via Edges Origin/Back", "e) Cap de les anteriors."],
        correct: 0 // a
    },

    // --- 2. Examen Segon Parcial ADA (2024-2025 V2) ---
    {
        category: "Parcial 24-25 V2",
        q: "1.- Pregunta 1 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 0 // a
    },
    {
        category: "Parcial 24-25 V2",
        q: "2.- Pregunta 2 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 2 // c
    },
    {
        category: "Parcial 24-25 V2",
        q: "3.- Pregunta 3 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 1 // b
    },
    {
        category: "Parcial 24-25 V2",
        q: "4.- Pregunta 4 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 0 // a
    },
    {
        category: "Parcial 24-25 V2",
        q: "5.- Pregunta 5 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 2 // c
    },
    {
        category: "Parcial 24-25 V2",
        q: "6.- Pregunta 6 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 0 // a
    },
    {
        category: "Parcial 24-25 V2",
        q: "7.- Pregunta 7 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 3 // d
    },
    {
        category: "Parcial 24-25 V2",
        q: "8.- Pregunta 8 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 2 // c
    },
    {
        category: "Parcial 24-25 V2",
        q: "9.- Pregunta 9 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 3 // d
    },
    {
        category: "Parcial 24-25 V2",
        q: "10.- Pregunta 10 (Parcial 24-25)",
        options: ["a) Opció A", "b) Opció B", "c) Opció C", "d) Opció D", "e) Cap de les anteriors."],
        correct: 0 // a
    },

    // --- 3. Examen Segon Parcial ADA (2023-2024 V1) ---
    {
        category: "Parcial 23-24 V1",
        q: "1.- Quants algoritmes que resolen el problema del viatjant de comerç s'han lliurat?",
        options: [
            "a) Al lliurament greedy 3 algorismes, Al lliurament backtracking 2 algorismes, al lliurament branch&bound 3 algorismes, al lliurament probabilístic 1 algorisme.",
            "b) Al lliurament greedy 1 algorisme, Al lliurament backtracking 2 algorismes, al lliurament programació dinàmica 1 algorisme, al lliurament branch&bound 3 algorismes, al lliurament probabilístic 1 algorisme.",
            "c) Al lliurament greedy 2 algorisme, Al lliurament backtracking 2 algorismes, al lliurament branch&bound 3 algorismes.",
            "d) Al lliurament greedy 1 algorisme, Al lliurament backtracking 2 algorismes, al lliurament branch&bound 3 algorismes, al lliurament probabilístic 1 algorisme.",
            "e) Cap de les anteriors."
        ],
        correct: 3 // d
    },
    {
        category: "Parcial 23-24 V1",
        q: "2.- Com es fa un lliurament de la pràctica (pràctica ja feta)?",
        options: [
            "a) Es posa el NIU i passwords dels dos components del grup al fitxer CorrectionClient.ini i s'executa CorrectionClient.exe nom_del_lliurament.",
            "b) Es posa el NIU i password d'un dels dos components del grup al fitxer CorrectionClient.ini i s'executa CorrectionClient.exe nom_del_lliurament.",
            "c) Es posa el NIU i password d'un dels dos components del grup al fitxer CorrectionClient.ini i al fitxer GraphApplication.cpp i s'executa CorrectionClient.exe DELIVERY nom_del_lliurament.",
            "d) Es posa el NIU i password d'un dels dos components del grup al fitxer CorrectionClient.ini i al fitxer GraphApplication.cpp es posa noms i NIUs dels dos components i s'executa CorrectionClient.exe DELIVERY nom_del_lliurament.",
            "e) Cap de les anteriors."
        ],
        correct: 3 // d
    },
    {
        category: "Parcial 23-24 V1",
        q: "3.- Com es pot inicialitzar un camp de tots els vèrtexs del graf g?",
        options: [
            "a) for (CVertex v: g.m_Vertexs) ...v.Camp=...",
            "b) for (CVertex &v: g.m_Vertexs) ... v.Camp=...",
            "c) for (CVertex *pV: g.m_Vertexs) ... pV->Camp=...",
            "d) for (CVertex *&pV: g.m_Vertexs) ... pV->Camp=...",
            "e) Cap de les anteriors."
        ],
        correct: 4 // e
    },
    {
        category: "Parcial 23-24 V1",
        q: "4.- Què no es pot fer amb els elements d'un graf?",
        options: [
            "a) Fer còpies dels objectes que els representen.",
            "b) Afegir camps als seus objectes.",
            "c) Cercar-los dintre del graf.",
            "d) Comptar el nombre d'objectes que els representen.",
            "e) Cap de les anteriors."
        ],
        correct: 0 // a
    },
    {
        category: "Parcial 23-24 V1",
        q: "5.- Quins atributs conté un CVisits?",
        options: [
            "a) Una llista de vèrtexs i el graf al que pertanyen.",
            "b) Una llista d'apuntadors a vèrtexs i un apuntador al graf al que pertanyen.",
            "c) Una llista de vèrtexs.",
            "d) Una llista d'apuntadors a arestes.",
            "e) Cap de les anteriors."
        ],
        correct: 1 // b
    },
    {
        category: "Parcial 23-24 V1",
        q: "6.- Com podem obtenir la llista de vèrtexs veïns d'un vèrtex apuntat per pV?",
        options: [
            "a) list<CVertex> l; for (CVertex *pVei: pV->m_Neighbors) l.push_back(*pVei);",
            "b) list<CVertex*> l; for (CVertex *pVei: pV->m_Neighbors) l.push_back(pVei);",
            "c) list<CVertex> l; for (CEdge *pE: pV->m_Edges) l.push_back(pE->m_Destination);",
            "d) list<CVertex*> l; for (CEdge *pE: pV->m_Edges) l.push_back(pE->m_pDestination);",
            "e) Cap de les anteriors."
        ],
        correct: 3 // d
    },
    {
        category: "Parcial 23-24 V1",
        q: "7.- Què compleix un camí que sigui solució òptima del problema del viatjant de comerç en un graf no dirigit?",
        options: [
            "a) Que no passa dues vegades pel mateix vèrtex.",
            "b) Que no passa dues vegades per la mateixa aresta.",
            "c) Que no passa dues vegades per la mateixa aresta en el mateix sentit.",
            "d) Que no té cicles.",
            "e) Cap de les anteriors."
        ],
        correct: 2 // c
    },
    {
        category: "Parcial 23-24 V1",
        q: "8.- Com s'ha de definir el comparador d'una cua amb prioritat perquè els seus elements quedin ordenats del pes més petit al pes més gran?",
        options: [
            "a) struct comparator { bool operator() (Objecte &a, Objecte &b) {return a.pes > b.pes; }};",
            "b) struct comparator { bool operator() (Objecte &a, Objecte &b) {return a.pes < b.pes; }};",
            "c) bool comparator(Objecte &a, Objecte &b) { return a.pes > b.pes; }",
            "d) bool comparator(Objecte &a, Objecte &b) { return a.pes < b.pes; }",
            "e) Cap de les anteriors."
        ],
        correct: 0 // a
    },
    {
        category: "Parcial 23-24 V1",
        q: "9.- Els algoritmes que solucionen el problema del viatjant de comerç que no treballant directament sobre el graf utilitzant...",
        options: [
            "a) Una matriu de les longituds dels camins entre visites on també poden estar guardats els camins.",
            "b) Una cua amb prioritat de vèrtexs.",
            "c) Una cua amb prioritat de parelles de distància i vèrtex.",
            "d) Una cua amb prioritat de solucions parcials o totals.",
            "e) Cap de les anteriors."
        ],
        correct: 0 // a
    },
    {
        category: "Parcial 23-24 V1",
        q: "10.- Com podem comprovar si un camí C passa per un vèrtex apuntat per pV?",
        options: [
            "a) bool passaPer(CTrack &c, CVertex* pV) { for (CVertex v: c.m_Vertexs) if (v==pV) return true; return false; }",
            "b) bool passaPer(CTrack &c, CVertex* pV) { for (CVertex *p: c.m_Vertexs) if (p==pV) return true; return false; }",
            "c) bool passaPer(CTrack &c, CVertex* pV) { for (CEdge *pE: c.m_Edges) if (pE->m_pDestination==pV) return true; if (c.m_Edges.empty()) return false; return c.m_Edges.front()->m_pOrigin==pV; }",
            "d) bool passaPer(CTrack &c, CVertex* pV) { for (CEdge *pE: c.m_Edges) if (pE-> m_pOrigin ==pV return true; if (c.m_Edges.empty()) return false; return c.m_Edges.back()->m_pOrigin ==pV; }",
            "e) Cap de les anteriors"
        ],
        correct: 2 // c
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