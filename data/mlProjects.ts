export interface MLProject {
    day: number;
    title: string;
    phase: number;
    status: "done" | "in-progress" | "planned";
    tags: string[];
    githubUrl?: string;
}

const REPO_BASE = "https://github.com/AnnaNutzz/50-Days-50-ML-AI-Projects";

export const phases = [
    { id: 1, name: "Baby ML But Beautiful", range: "Days 1–10", color: "emerald" },
    { id: 2, name: "Deep Learning Fundamentals", range: "Days 11–20", color: "blue" },
    { id: 3, name: "Computer Vision", range: "Days 21–30", color: "purple" },
    { id: 4, name: "Natural Language Processing", range: "Days 31–40", color: "amber" },
    { id: 5, name: "AI Systems, Agents, MLOps, GenAI", range: "Days 41–50", color: "rose" },
];

export const mlProjects: MLProject[] = [
    // Phase 1 — Baby ML But Beautiful (Days 1–10)
    { day: 1, title: "Linear Regression From Scratch", phase: 1, status: "planned", tags: ["Regression", "Math"] },
    { day: 2, title: "Logistic Regression From Scratch", phase: 1, status: "planned", tags: ["Classification", "Math"] },
    { day: 3, title: "KNN Classifier", phase: 1, status: "planned", tags: ["KNN", "Distance Functions"] },
    { day: 4, title: "Naive Bayes – SMS Spam Filter", phase: 1, status: "planned", tags: ["NLP", "Bayes"] },
    { day: 5, title: "Decision Trees – Entropy & Gini", phase: 1, status: "planned", tags: ["Trees", "Visualization"] },
    { day: 6, title: "Random Forest – Feature Importance", phase: 1, status: "planned", tags: ["Ensemble", "Explainability"] },
    { day: 7, title: "K-Means – Image Color Quantization", phase: 1, status: "planned", tags: ["Clustering", "Images"] },
    { day: 8, title: "Hierarchical Clustering – Dendrogram", phase: 1, status: "planned", tags: ["Clustering", "Visualization"] },
    { day: 9, title: "PCA – Face Dimensionality Reduction", phase: 1, status: "planned", tags: ["PCA", "Faces"] },
    { day: 10, title: "t-SNE / UMAP – MNIST 2D Mapping", phase: 1, status: "planned", tags: ["Dimensionality", "MNIST"] },

    // Phase 2 — Deep Learning Fundamentals (Days 11–20)
    { day: 11, title: "Neural Network From Scratch", phase: 2, status: "planned", tags: ["Backprop", "Math"] },
    { day: 12, title: "Feedforward Classifier on MNIST", phase: 2, status: "planned", tags: ["MLP", "MNIST"] },
    { day: 13, title: "Dropout + BatchNorm Experiment", phase: 2, status: "planned", tags: ["Regularization", "Experiment"] },
    { day: 14, title: "CNN on CIFAR10 – Optimizer Comparison", phase: 2, status: "planned", tags: ["CNN", "CIFAR10"] },
    { day: 15, title: "Transfer Learning (VGG16) – Flowers", phase: 2, status: "planned", tags: ["Transfer Learning", "VGG16"] },
    { day: 16, title: "Custom Data Augmentation Pipeline", phase: 2, status: "planned", tags: ["Augmentation", "Pipeline"] },
    { day: 17, title: "Training Loops in PyTorch", phase: 2, status: "planned", tags: ["PyTorch", "Framework"] },
    { day: 18, title: "MobileNet – Lightweight Vision", phase: 2, status: "planned", tags: ["MobileNet", "Efficiency"] },
    { day: 19, title: "Model Quantization – 4× Size Reduction", phase: 2, status: "planned", tags: ["Quantization", "Optimization"] },
    { day: 20, title: "Model Pruning – Before/After", phase: 2, status: "planned", tags: ["Pruning", "Compression"] },

    // Phase 3 — Computer Vision (Days 21–30)
    { day: 21, title: "Object Detection with YOLOv8", phase: 3, status: "planned", tags: ["YOLO", "Detection"] },
    { day: 22, title: "Face Recognition – Siamese Networks", phase: 3, status: "planned", tags: ["Siamese", "Faces"] },
    { day: 23, title: "Eye Blink / Drowsiness Detector", phase: 3, status: "planned", tags: ["OpenCV", "Safety"] },
    { day: 24, title: "Pose Detection – Exercise Rep Counter", phase: 3, status: "planned", tags: ["MediaPipe", "Fitness"] },
    { day: 25, title: "Background Removal (U²-Net)", phase: 3, status: "planned", tags: ["Segmentation", "U-Net"] },
    { day: 26, title: "Image Captioning Mini Model", phase: 3, status: "planned", tags: ["Captioning", "Multimodal"] },
    { day: 27, title: "Fast Neural Style Transfer", phase: 3, status: "planned", tags: ["Style Transfer", "Art"] },
    { day: 28, title: "Document Scanner – Perspective Fix", phase: 3, status: "planned", tags: ["OpenCV", "Transforms"] },
    { day: 29, title: "Face Aging (Lightweight GAN)", phase: 3, status: "planned", tags: ["GAN", "Faces"] },
    { day: 30, title: "Traffic Sign Recognition", phase: 3, status: "planned", tags: ["Classification", "Safety"] },

    // Phase 4 — Natural Language Processing (Days 31–40)
    { day: 31, title: "Text Classification – IMDB Sentiment", phase: 4, status: "planned", tags: ["Sentiment", "NLP"] },
    { day: 32, title: "TF-IDF Search Engine", phase: 4, status: "planned", tags: ["TF-IDF", "Search"] },
    { day: 33, title: "Named Entity Recognition – BiLSTM-CRF", phase: 4, status: "planned", tags: ["NER", "LSTM"] },
    { day: 34, title: "Word2Vec From Scratch", phase: 4, status: "planned", tags: ["Embeddings", "Math"] },
    { day: 35, title: "DistilBERT Question Answering", phase: 4, status: "planned", tags: ["BERT", "QA"] },
    { day: 36, title: "Text Summarization – Pegasus/BART", phase: 4, status: "planned", tags: ["Summarization", "Transformers"] },
    { day: 37, title: "RNN / Seq2Seq Chatbot", phase: 4, status: "planned", tags: ["RNN", "Chatbot"] },
    { day: 38, title: "Toxic Comment Classification", phase: 4, status: "planned", tags: ["Moderation", "NLP"] },
    { day: 39, title: "GPT-2 Fine-Tuned Text Generator", phase: 4, status: "planned", tags: ["GPT-2", "GenAI"] },
    { day: 40, title: "Whisper Small – Speech-to-Text", phase: 4, status: "planned", tags: ["Whisper", "Audio"] },

    // Phase 5 — AI Systems, Agents, MLOps, GenAI (Days 41–50)
    { day: 41, title: "RAG System – Local PDF QA", phase: 5, status: "planned", tags: ["RAG", "LLM"] },
    { day: 42, title: "Vector Database – Notes Memory", phase: 5, status: "planned", tags: ["ChromaDB", "Embeddings"] },
    { day: 43, title: "LLM Agent – Tools & Reasoning", phase: 5, status: "planned", tags: ["Agents", "LLM"] },
    { day: 44, title: "Prompt Engineering Playground", phase: 5, status: "planned", tags: ["Prompting", "Streamlit"] },
    { day: 45, title: "Fine-tune Llama/Phi – Personal Bot", phase: 5, status: "planned", tags: ["Fine-tuning", "LLM"] },
    { day: 46, title: "Dockerize ML Model – REST API", phase: 5, status: "planned", tags: ["Docker", "Deployment"] },
    { day: 47, title: "GitHub Actions CI/CD – Auto Push", phase: 5, status: "planned", tags: ["CI/CD", "MLOps"] },
    { day: 48, title: "Model Monitoring – Drift Detection", phase: 5, status: "planned", tags: ["Monitoring", "MLOps"] },
    { day: 49, title: "Reinforcement Learning – CartPole", phase: 5, status: "planned", tags: ["RL", "OpenAI Gym"] },
    { day: 50, title: "End-to-End AI System – Voice Assistant", phase: 5, status: "planned", tags: ["Full System", "LLM"] },
];
