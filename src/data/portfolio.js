export const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

export const rotatingLines = [
  'Turning real-time conversations into intelligent AI-driven systems through Speech Recognition and NLP.',
  'Building next-generation healthcare AI solutions that transform human interaction into meaningful digital intelligence.',
  'Creating scalable automation systems powered by Machine Learning, Real-Time AI, and intelligent data processing.',
  'Developing advanced AI applications focused on speech understanding, transcription, and intelligent workflows.',
  'Transforming unstructured conversational data into structured, actionable, and AI-powered insights.',
  'Engineering intelligent systems that combine Speech AI, automation, and real-time decision-making technologies.',
  'Designing futuristic AI experiences that bridge human communication with intelligent digital ecosystems.',
];

export const tickerItems = [
  'Healthcare AI',
  'Clinical Scribe',
  'Scikit-learn',
  'FastAPI',
  'HuggingFace',
  'AWS SageMaker',
  'Deep Learning',
  'NLP',
  'MLOps',
  'IBM Watson',
  'AssemblyAI',
  'WebSockets',
];

export const projects = [
  {
    number: 'PROJECT - 01',
    name: 'AI Clinical Scribe',
    live: true,
    wide: true,
    description:
      "Ambient AI documentation system for GP clinics. Streams doctor-patient audio in real time via WebSocket to AssemblyAI's v3 API, stores structured transcripts by encounter ID, and generates clean clinical notes - eliminating manual documentation for physicians. Speaker diarisation (doctor vs patient separation) currently in active development. Targeting US & UK GP clinics.",
    tags: ['FastAPI', 'WebSockets', 'AssemblyAI v3', 'Speaker Diarisation', 'Python'],
    violetTags: ['NLP', 'Clinical AI'],
    visual: 'Clinical AI',
  },
  {
    number: 'PROJECT - 02',
    name: 'Diabetes Prediction Model',
    description:
      'End-to-end supervised ML pipeline on the Pima Indians & BRFSS 2015 dataset. Full EDA with Matplotlib dashboards, data cleaning, class imbalance handling, feature engineering, and a Decision Tree Classifier achieving ~84% accuracy. Includes a real-time CLI prediction script for clinical input.',
    tags: ['Scikit-learn', 'Pandas', 'NumPy', 'Decision Tree', 'Python'],
    violetTags: ['EDA'],
  },
  {
    number: 'PROJECT - 03',
    name: 'Clinical Note Structuring API',
    description:
      'Backend prototype that converts raw consultation transcripts into structured SOAP-style clinical notes. Designed around GP workflows with sections for symptoms, assessment, medications, follow-up actions, and patient instructions.',
    tags: ['FastAPI', 'Python', 'REST API', 'Prompt Engineering'],
    violetTags: ['NLP', 'Healthcare AI'],
  },
  {
    number: 'PROJECT - 04',
    name: 'Doctor-Patient Diarisation Lab',
    description:
      'Experiment-focused speech AI project for separating doctor and patient turns in medical conversations. Built to compare transcript quality, speaker labels, pause handling, and downstream clinical-note accuracy.',
    tags: ['AssemblyAI', 'Python', 'Audio Processing', 'WebSockets'],
    violetTags: ['Speech AI', 'Diarisation'],
  },
  {
    number: 'PROJECT - 05',
    name: 'Medical Report Summarizer',
    description:
      'NLP tool that turns long diagnostic reports into concise patient-friendly summaries while preserving key findings, risk indicators, and recommended next steps. Focused on readable, safe, and clinically useful output.',
    tags: ['Transformers', 'HuggingFace', 'Python', 'Text Summarization'],
    violetTags: ['NLP', 'Clinical Text'],
  },
  {
    number: 'PROJECT - 06',
    name: 'Patient Risk Stratification Dashboard',
    description:
      'ML dashboard concept for identifying high-risk patients from clinical and lifestyle indicators. Includes preprocessing, feature importance, model evaluation, and a simple interface for comparing patient risk levels.',
    tags: ['Scikit-learn', 'Pandas', 'Matplotlib', 'Classification'],
    violetTags: ['Model Evaluation', 'Healthcare ML'],
  },
];

export const skillBlocks = [
  {
    title: 'Languages & Libraries',
    items: [
      [{ text: 'Python', type: 'lang' }],
      [
        { text: 'Pandas', type: 'lib' },
        { text: 'NumPy', type: 'lib' },
      ],
      [
        { text: 'Matplotlib', type: 'lib' },
        { text: 'Seaborn', type: 'lib' },
      ],
    ],
  },
  {
    title: 'Classical ML',
    items: ['Scikit-learn', 'Supervised Learning', 'Unsupervised Learning', 'EDA & Feature Engineering', 'Data Cleaning', 'Model Evaluation & Tuning'],
  },
  {
    title: 'Deep Learning & NLP',
    items: ['PyTorch', 'HuggingFace Transformers', 'HuggingFace Datasets', 'NLP / LLMs', 'IBM Watson NLP', 'AssemblyAI (ASR)'],
  },
];

export const secondarySkillBlocks = [
  {
    title: 'Mathematics for ML',
    tealDot: true,
    items: ['Probability & Statistics', 'Linear Algebra', 'Calculus (Gradient Descent)', 'Loss Functions & Optimization'],
  },
  {
    title: 'DevOps & Tools',
    tealDot: true,
    items: ['FastAPI & WebSockets', 'Streamlit', 'AWS SageMaker', 'MLOps'],
  },
];

export const dataWords = [
  'y = W x + b',
  'p = softmax(z)',
  'L = -sum y log(p)',
  'grad = dL / dW',
  'theta = theta - alpha grad',
  'sigma(z) = 1 / (1 + e^-z)',
  'A = softmax(QK^T / sqrt(d))',
  'h_t = tanh(Wx + Uh)',
  'P(y | x)',
  'X^T X',
  'cos(a,b) = a.b / |a||b|',
  'argmax p(y | x)',
];
