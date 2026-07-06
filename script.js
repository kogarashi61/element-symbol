// 全118元素のデータ
const elements = [
    { no: 1, symbol: 'H', name: '水素' }, { no: 2, symbol: 'He', name: 'ヘリウム' },
    { no: 3, symbol: 'Li', name: 'リチウム' }, { no: 4, symbol: 'Be', name: 'ベリリウム' },
    { no: 5, symbol: 'B', name: 'ホウ素' }, { no: 6, symbol: 'C', name: '炭素' },
    { no: 7, symbol: 'N', name: '窒素' }, { no: 8, symbol: 'O', name: '酸素' },
    { no: 9, symbol: 'F', name: 'フッ素' }, { no: 10, symbol: 'Ne', name: 'ネオン' },
    { no: 11, symbol: 'Na', name: 'ナトリウム' }, { no: 12, symbol: 'Mg', name: 'マグネシウム' },
    { no: 13, symbol: 'Al', name: 'アルミニウム' }, { no: 14, symbol: 'Si', name: 'ケイ素' },
    { no: 15, symbol: 'P', name: 'リン' }, { no: 16, symbol: 'S', name: '硫黄' },
    { no: 17, symbol: 'Cl', name: '塩素' }, { no: 18, symbol: 'Ar', name: 'アルゴン' },
    { no: 19, symbol: 'K', name: 'カリウム' }, { no: 20, symbol: 'Ca', name: 'カルシウム' },
    { no: 21, symbol: 'Sc', name: 'スカンジウム' }, { no: 22, symbol: 'Ti', name: 'チタン' },
    { no: 23, symbol: 'V', name: 'バナジウム' }, { no: 24, symbol: 'Cr', name: 'クロム' },
    { no: 25, symbol: 'Mn', name: 'マンガン' }, { no: 26, symbol: 'Fe', name: '鉄' },
    { no: 27, symbol: 'Co', name: 'コバルト' }, { no: 28, symbol: 'Ni', name: 'ニッケル' },
    { no: 29, symbol: 'Cu', name: '銅' }, { no: 30, symbol: 'Zn', name: '亜鉛' },
    { no: 31, symbol: 'Ga', name: 'ガリウム' }, { no: 32, symbol: 'Ge', name: 'ゲルマニウム' },
    { no: 33, symbol: 'As', name: 'ヒ素' }, { no: 34, symbol: 'Se', name: 'セレン' },
    { no: 35, symbol: 'Br', name: '臭素' }, { no: 36, symbol: 'Kr', name: 'クリプトン' },
    { no: 37, symbol: 'Rb', name: 'ルビジウム' }, { no: 38, symbol: 'Sr', name: 'ストロンチウム' },
    { no: 39, symbol: 'Y', name: 'イットリウム' }, { no: 40, symbol: 'Zr', name: 'ジルコニウム' },
    { no: 41, symbol: 'Nb', name: 'ニオブ' }, { no: 42, symbol: 'Mo', name: 'モリブデン' },
    { no: 43, symbol: 'Tc', name: 'テクネチウム' }, { no: 44, symbol: 'Ru', name: 'ルテニウム' },
    { no: 45, symbol: 'Rh', name: 'ロジウム' }, { no: 46, symbol: 'Pd', name: 'パラジウム' },
    { no: 47, symbol: 'Ag', name: '銀' }, { no: 48, symbol: 'Cd', name: 'カドミウム' },
    { no: 49, symbol: 'In', name: 'インジウム' }, { no: 50, symbol: 'Sn', name: 'スズ' },
    { no: 51, symbol: 'Sb', name: 'アンチモン' }, { no: 52, symbol: 'Te', name: 'テルル' },
    { no: 53, symbol: 'I', name: 'ヨウ素' }, { no: 54, symbol: 'Xe', name: 'キセノン' },
    { no: 55, symbol: 'Cs', name: 'セシウム' }, { no: 56, symbol: 'Ba', name: 'バリウム' },
    { no: 57, symbol: 'La', name: 'ランタン' }, { no: 58, symbol: 'Ce', name: 'セリウム' },
    { no: 59, symbol: 'Pr', name: 'プラセオジム' }, { no: 60, symbol: 'Nd', name: 'ネオジム' },
    { no: 61, symbol: 'Pm', name: 'プロメチウム' }, { no: 62, symbol: 'Sm', name: 'サマリウム' },
    { no: 63, symbol: 'Eu', name: 'ユウロピウム' }, { no: 64, symbol: 'Gd', name: 'ガドリニウム' },
    { no: 65, symbol: 'Tb', name: 'テルビウム' }, { no: 66, symbol: 'Dy', name: 'ジスプロシウム' },
    { no: 67, symbol: 'Ho', name: 'ホルミウム' }, { no: 68, symbol: 'Er', name: 'エルビウム' },
    { no: 69, symbol: 'Tm', name: 'ツリウム' }, { no: 70, symbol: 'Yb', name: 'イッテルビウム' },
    { no: 71, symbol: 'Lu', name: 'ルテチウム' }, { no: 72, symbol: 'Hf', name: 'ハフニウム' },
    { no: 73, symbol: 'Ta', name: 'タンタル' }, { no: 74, symbol: 'W', name: 'タングステン' },
    { no: 75, symbol: 'Re', name: 'レニウム' }, { no: 76, symbol: 'Os', name: 'オスミウム' },
    { no: 77, symbol: 'Ir', name: 'イリジウム' }, { no: 78, symbol: 'Pt', name: '白金' },
    { no: 79, symbol: 'Au', name: '金' }, { no: 80, symbol: 'Hg', name: '水銀' },
    { no: 81, symbol: 'Tl', name: 'タリウム' }, { no: 82, symbol: 'Pb', name: '鉛' },
    { no: 83, symbol: 'Bi', name: 'ビスマス' }, { no: 84, symbol: 'Po', name: 'ポロニウム' },
    { no: 85, symbol: 'At', name: 'アスタチン' }, { no: 86, symbol: 'Rn', name: 'ラドン' },
    { no: 87, symbol: 'Fr', name: 'フランシウム' }, { no: 88, symbol: 'Ra', name: 'ラジウム' },
    { no: 89, symbol: 'Ac', name: 'アクチニウム' }, { no: 90, symbol: 'Th', name: 'トリウム' },
    { no: 91, symbol: 'Pa', name: 'プロトアクチニウム' }, { no: 92, symbol: 'U', name: 'ウラン' },
    { no: 93, symbol: 'Np', name: 'ネプツニウム' }, { no: 94, symbol: 'Pu', name: 'プルトニウム' },
    { no: 95, symbol: 'Am', name: 'アメリシウム' }, { no: 96, symbol: 'Cm', name: 'キュリウム' },
    { no: 97, symbol: 'Bk', name: 'バークリウム' }, { no: 98, symbol: 'Cf', name: 'カリホルニウム' },
    { no: 99, symbol: 'Es', name: 'アインスタイニウム' }, { no: 100, symbol: 'Fm', name: 'フェルミウム' },
    { no: 101, symbol: 'Md', name: 'メンデレビウム' }, { no: 102, symbol: 'No', name: 'ノーベリウム' },
    { no: 103, symbol: 'Lr', name: 'ローレンシウム' }, { no: 104, symbol: 'Rf', name: 'ラザホージウム' },
    { no: 105, symbol: 'Db', name: 'ドブニウム' }, { no: 106, symbol: 'Sg', name: 'シーボーギウム' },
    { no: 107, symbol: 'Bh', name: 'ボーリウム' }, { no: 108, symbol: 'Hs', name: 'ハッシウム' },
    { no: 109, symbol: 'Mt', name: 'マイトネリウム' }, { no: 110, symbol: 'Ds', name: 'ダームスタチウム' },
    { no: 111, symbol: 'Rg', name: 'レントゲニウム' }, { no: 112, symbol: 'Cn', name: 'コペルニシウム' },
    { no: 113, symbol: 'Nh', name: 'ニホニウム' }, { no: 114, symbol: 'Fl', name: 'フレロビウム' },
    { no: 115, symbol: 'Mc', name: 'モスコビウム' }, { no: 116, symbol: 'Lv', name: 'リバモリウム' },
    { no: 117, symbol: 'Ts', name: 'テネシン' }, { no: 118, symbol: 'Og', name: 'オガネソン' }
];

let currentQuestions = [];
let currentIndex = 0;
let isAnswered = false;
let wrongElements = []; // ★追加：間違えた元素を記憶する配列

// DOM要素の取得
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const controls = document.getElementById('controls');
const resultArea = document.getElementById('result-area');
const wrongListArea = document.getElementById('wrong-list-area'); // ★追加
const wrongList = document.getElementById('wrong-list');         // ★追加

const btnNormal = document.getElementById('btn-normal');
const btnRandom = document.getElementById('btn-random');
const btnNext = document.getElementById('btn-next');
const btnReset = document.getElementById('btn-reset');

const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const judgment = document.getElementById('judgment');
const correctAnswerText = document.getElementById('correct-answer');

// 順番通りモード開始
btnNormal.addEventListener('click', () => {
    currentQuestions = [...elements];
    startQuiz();
});

// ランダムモード開始
btnRandom.addEventListener('click', () => {
    currentQuestions = [...elements];
    for (let i = currentQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
    }
    startQuiz();
});

// クイズ初期化
function startQuiz() {
    startScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    controls.classList.remove('hidden');
    currentIndex = 0;
    wrongElements = []; // ★間違えた記憶をリセット
    wrongList.innerHTML = ''; // ★画面上のリストも空にする
    wrongListArea.classList.add('hidden'); // ★最初は間違えたリスト自体を隠しておく
    showQuestion();
}

// 問題の表示
function showQuestion() {
    isAnswered = false;
    resultArea.classList.add('hidden');
    answerInput.disabled = false;
    answerInput.value = '';
    
    const currentElem = currentQuestions[currentIndex];
    questionText.textContent = `${currentElem.no} ${currentElem.symbol}`;
    
    answerInput.focus();
}

// Enter（改行）キーでの解答判定
answerInput.addEventListener('keydown', (e) => {
    if (e.isComposing) return;

    if (e.key === 'Enter') {
        e.preventDefault();

        if (isAnswered) return;
        
        checkAnswer();
    }
});

// 判定処理
function checkAnswer() {
    isAnswered = true;
    answerInput.disabled = true;
    
    const currentElem = currentQuestions[currentIndex];
    const userAnswer = answerInput.value.trim();
    
    // 正解判定
    if (userAnswer === currentElem.name) {
        judgment.textContent = '◯';
        judgment.className = 'correct';
    } else {
        judgment.textContent = '×';
        judgment.className = 'incorrect';
        
        // 間違えたら配列に保存し、リストを更新する
        recordWrongElement(currentElem);
    }
    
    correctAnswerText.textContent = `${currentElem.name}`;
    resultArea.classList.remove('hidden');
    
    // 前回の修正通り、少し待ってから次へボタンにフォーカスを当てる
    setTimeout(() => {
        btnNext.focus();
    }, 800);
}

// ★追加：間違えた元素を記録して画面に表示する関数
function recordWrongElement(elem) {
    // 既にリストに入っているか確認（同じ問題を何度も間違えたとき重複させないため）
    const isAlreadyRecorded = wrongElements.some(e => e.no === elem.no);
    
    if (!isAlreadyRecorded) {
        wrongElements.push(elem);
        
        // 新しいリストアイテム（li）を作って画面に追加
        const li = document.createElement('li');
        li.textContent = `${elem.no} ${elem.symbol}：${elem.name}`;
        wrongList.appendChild(li);
        
        // 1つでも間違えたら、間違えたリストエリアを表示する
        wrongListArea.classList.remove('hidden');
    }
}

// 次へボタン処理
btnNext.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
});

// 終了処理
function finishQuiz() {
    quizScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    // 終了時、もし1つも間違えていなければリストエリアは隠れたまま、間違えていればそのまま表示されます
}

// 最初からボタン処理（リセット）
btnReset.addEventListener('click', () => {
    startScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    controls.classList.add('hidden');
});
