import { p } from "framer-motion/client";

export interface Project {
    id: string;
    title: string;
    description: string;
    codeSnippet: string;
    imageUrl: string;
    videoUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    content?: string;
    tags?: string[];
    images?: string[];
    videos?: string[];
}

export const projects: Project[] = [
    {
        id: "ai-tutor",
        title: "AI Tutor",
        description: "A fully interactive educational assistant designed to help students learn faster using AI-driven personalization. Built using Python, Flask, Hugging Face Transformers, and custom logic for learning behavior detection. The system accepts multiple file types (PDF, PPTX, TXT), extracts text, summarizes key concepts, creates chapter-wise notes, and generates adaptive quizzes. It also identifies the user's learning speed (slow, average, fast) using response-time analytics and sends automated SMS progress updates to parents via Twilio. This project demonstrates real-world educational automation, multimodal processing, and full-stack backend development.",
        codeSnippet: "from flask import Flask, request\nfrom transformers import pipeline\n\napp = Flask(__name__)\nsummarizer = pipeline('summarization')\n\n@app.post('/summarize')\ndef summarize():\n    text = request.json['text']\n    summary = summarizer(text, max_length=150)[0]['summary_text']\n    return {'summary': summary}",
        imageUrl: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?_gl=1*1dy4lyw*_ga*MjIzMjg2NDE5LjE3NjQzMjI0MjQ.*_ga_8JE65Q40S6*czE3NjQzMjQ2OTYkbzIkZzEkdDE3NjQzMjQ3MDkkajQ3JGwwJGgw",
        githubUrl: "https://github.com/AnnaNutzz/AI-Powered-Learning-Assistant",
        demoUrl: "",
        tags: ["Python", "Flask", "Hugging Face", "AI/ML", "Twilio", "Vibe Coded"],
        images: ["/tutor1.jpeg"],
        videos: [],

        content: `

            # Kivy & Tkinter Applications — Collection Page

            ## 1. Overview
            This collection brings together a range of small but useful GUI projects created while learning Kivy and Tkinter. Each app focuses on clear layout structure, event-driven logic, simple animations, and readable code.  
            Kivy apps lean toward mobile-friendly interfaces and custom visuals, while Tkinter apps focus on quick desktop utilities.

            ---

            ## 2. Included Apps (Short Summaries)

            ### Date Appointment (Kivy)
            - **Purpose:** A simple appointment scheduler with date/time pickers and local storage.
            - **Features:** KivyMD date/time picker, JSON persistence, validation, confirmation dialogs, optional WhatsApp Web integration.
            - **Use case:** Demonstrates forms, dialogs, app flow, and external app triggers.

            **Snippet (saving appointment):**
            \`\`\`python
            def save_appointment(title, date_str, time_str):
                appt = {"title": title, "date": date_str, "time": time_str}
                with open("appointments.json", "a") as f:
                    f.write(json.dumps(appt) + "\\n")
            \`\`\`

            ---

            ### Heart Sync (Kivy)
            - **Purpose:** A heartbeat simulator built for practicing animations and timing.
            - **Features:** BPM slider, pulsing effect, start/stop, optional beep sound.
            - **Use case:** Demonstrates Clock scheduling, canvas animations, scaling effects.

            **Snippet (Clock-based animation):**
            \`\`\`python
            from kivy.clock import Clock

            def start_heartbeat(self, bpm):
                interval = 60.0 / bpm
                self.heartbeat_event = Clock.schedule_interval(self.toggle_beat, interval)
            \`\`\`

            ---

            ### Hangman (Kivy)
            - **Purpose:** A fully interactive Hangman game.
            - **Features:** Word bank, masked display, lives counter, on-screen keyboard.
            - **Use case:** Great example of game state, UI updates, and canvas drawing.

            **Snippet (guess handler):**
            \`\`\`python
            def guess_letter(letter):
                if letter in word:
                    reveal_letter(letter)
                else:
                    lives -= 1
                    update_hangman_canvas(lives)
            \`\`\`

            ---

            ### Rock-Paper-Scissors (CLI & UI)
            - **Purpose:** Two versions — CLI for logic and Kivy UI for visuals.
            - **Features:** Best-of-N mode, scoring, simple animations.
            - **Use case:** Shows how CLI logic can be elevated into a full UI.

            **Snippet (CLI core):**
            \`\`\`python
            import random
            def play_round(player):
                comp = random.choice(['rock','paper','scissors'])
                # determine winner
            \`\`\`

            ---

            ### Calculator (Tkinter)
            - **Purpose:** A clean, standard calculator app.
            - **Features:** Grid-based buttons, clear/backspace, decimals, keyboard bindings.
            - **Use case:** Demonstrates StringVar, dynamic updates, and safe expression parsing.

            **Snippet (button callback):**
            \`\`\`python
            def on_button_click(char):
                current = display_var.get()
                display_var.set(current + char)
            \`\`\`

            ---

            ### Number Guessing (Tkinter)
            - **Purpose:** A simple higher/lower guessing game.
            - **Features:** Hints, attempt counting, replay dialog.
            - **Use case:** Good for input parsing, simple loops, messageboxes.

            **Snippet:**
            \`\`\`python
            target = random.randint(1,100)
            def check_guess(val):
                if val == target:
                    show_win()
                elif val < target:
                    hint('Higher')
                else:
                    hint('Lower')
            \`\`\`

            ---

            ### Text Adventure (Tkinter)
            - **Purpose:** A minimal branching story adventure.
            - **Features:** JSON-based story nodes, choice buttons, save/load.
            - **Use case:** Demonstrates narrative state machines and UI updates.

            **JSON node example:**
            \`\`\`json
            { "id": "start", "text": "You awake in a room...", "choices": [{"label":"Look around","target":"look"}] }
            \`\`\`

            ---

            ### Kalaa Tokri (Kivy) — Product Catalog Viewer
            - **Purpose:** A clean product viewer built to practice layouts and scroll views.
            - **Features:** Scrollable cards, images, descriptions, responsive design.
            - **Note:** This is *not* an e-commerce system — no cart/checkout, just catalog UI.

            **Snippet (loading products):**
            \`\`\`python
            with open("products.json") as f:
                products = json.load(f)

            def load_items(rv):
                rv.data = [
                    {"image": p["image"], "title": p["title"], "desc": p["desc"]}
                    for p in products
                ]
            \`\`\`

            ---

            ### Currency Converter (VND → INR)
            - **Purpose:** A quick conversion utility.
            - **Features:** Input field, convert button, static rate, clean Tkinter UI.
            - **Use case:** Demonstrates small utility creation and formatting.

            **Snippet (conversion):**
            \`\`\`python
            VND_to_INR = 0.0034
            def convert(amount_vnd):
                return round(amount_vnd * VND_to_INR, 2)
            \`\`\`

            ---

            ## 3. Shared Implementation Tips
            - Use JSON for lightweight storage; SQLite for multi-screen persistence.
            - Buildozer for Android packaging (Kivy), PyInstaller for desktop.
            - Validate every input (numbers, dates) to avoid UI crashes.
            - Keep layout, logic, and data separated — simplifies debugging.

            ---

            ## 4. Example Requirements (Combined)
            \`\`\`
            kivy
            kivymd
            pillow
            python-dateutil
            pytz
            requests
            pyinstaller
            \`\`\`

            ---

            ## 5. Quick Testing Checklist
            - Test Kivy UIs on multiple screen sizes/orientations.
            - Verify Tkinter keyboard shortcuts and focus handling.
            - Add tests for game/utility logic where applicable.
            - Use try/except + logging for crash diagnosis.

            ---

            ## 6. Where to Go Next
            - Build APKs for Kivy games.
            - Add sound/animations for polish.
            - Add screenshots or GIFs to your portfolio.
            - Convert small apps into standalone executables.
            `
    },

    {
        id: "emotion-detection",
        title: "Real-Time Emotion Detection",
        description: "A real-time facial emotion recognition system built using OpenCV and a custom CNN trained on FER datasets. The model detects faces in live webcam feed, preprocesses them, predicts emotions in real-time, and logs results every 5 seconds for analytics. This project was developed as part of the Bennett University Specialization course and demonstrates practical AI engineering, real-time inference, data logging, and model deployment.",
        codeSnippet: "face = detector.detectMultiScale(gray)\nfor x, y, w, h in face:\n    roi = gray[y:y+h, x:x+w]\n    roi = cv2.resize(roi, (48,48))\n    pred = model.predict(roi.reshape(1,48,48,1))",
        imageUrl: "https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?_gl=1*1gbk4ry*_ga*MjIzMjg2NDE5LjE3NjQzMjI0MjQ.*_ga_8JE65Q40S6*czE3NjQzMjQ2OTYkbzIkZzEkdDE3NjQzMjUwMzAkajM1JGwwJGgw",
        githubUrl: "https://github.com/AnnaNutzz/Emotion-Detection",
        demoUrl: "",
        tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"],
        images: ["/emotion1.jpg"],
        videos: [],

        content: `
            ## 1. Overview
            Real-Time Emotion Detection is a computer vision project designed to identify human emotions (such as happy, angry, sad, neutral, surprise, and fear) directly from a webcam feed.  
            It uses OpenCV for face detection and a custom-trained Convolutional Neural Network for classification. The application displays a live bounding box around the detected face along with the predicted emotion and logs the output every 5 seconds in JSON format for analytics or future dashboard visualization.

            This project was built as part of the Specialization coursework at Bennett University.

            ---

            ## 2. Problem Statement
            Understanding human emotions programmatically is important for:

            - online therapy platforms  
            - classroom monitoring  
            - workplace mental health analytics  
            - AI tutors and virtual assistants  
            - meeting engagement detection  

            Traditional systems require high-quality hardware, expensive models, or cloud-level processing. The goal of this project was to create a **lightweight, offline, real-time** solution that:

            - performs fast inference  
            - works on CPU  
            - accurately classifies emotions  
            - logs results for further research or dashboards  

            ---

            ## 3. Objectives
            - Build a custom CNN classifier for seven basic emotions.
            - Use OpenCV to detect faces in real-time through webcam.
            - Preprocess face regions consistently (48×48 grayscale).
            - Predict emotions with minimal latency.
            - Store predictions every 5 seconds in structured JSON logs.
            - Provide a clean and readable real-time display overlay.

            ---

            ## 4. Dataset & Preprocessing
            The model was trained using:

            - FER2013  
            - supplemental cleaned datasets  

            Preprocessing steps:
            - convert to grayscale  
            - histogram equalization  
            - resize to 48×48  
            - normalization (divide by 255)  
            - one-hot encode labels  

            ---

            ## 5. Architecture Diagram (Text Description)

            **Input Layer**
            - Live webcam frame  
            - Face detection via Haar Cascade / DNN  

            **Preprocessing**
            - Grayscale  
            - ROI extraction  
            - Resize 48×48  
            - Normalize  

            **CNN Model**
            - Conv → ReLU → MaxPool  
            - Conv → ReLU → MaxPool  
            - Flatten  
            - Dense → Dropout  
            - Output (Softmax: 7 emotions)  

            **Output**
            - Emotion label  
            - JSON logs  
            - Real-time overlay  

            ---

            ## 6. Tech Stack

            **Languages**
            - Python  

            **Libraries**
            - TensorFlow/Keras  
            - OpenCV  
            - NumPy  
            - JSON  

            **Model Type**
            - Custom CNN (7-class classifier)

            ---

            ## 7. Main Features (Detailed)

            ### A. Real-Time Facial Detection
            Uses OpenCV Haar Cascade:

            - Fast  
            - Lightweight  
            - Works well on CPU  
            - No GPU dependency  

            ### B. Emotion Classification
            Predicts:
            - Happy  
            - Sad  
            - Neutral  
            - Angry  
            - Fear  
            - Surprise  
            - Disgust  

            ### C. JSON Logging (Every 5 Seconds)
            Each entry contains:
            - timestamp  
            - predicted emotion  
            - confidence  
            - frame count  

            Example:
            \`\`\`json
            {
                "timestamp": "2025-01-10T12:45:32",
                "emotion": "happy",
                "confidence": 0.94
            }
            \`\`\`

            ### D. Real-Time UI Overlay
            Bounding boxes + emotion text + confidence score appear directly in the webcam feed.

            ### E. Efficiency Optimizations
            - 48×48 input improves speed  
            - Single-channel grayscale reduces memory  
            - CNN depth optimized for CPU inference  

            ---

            ## 8. Implementation

            ### Face Detection
            \`\`\`python
            faces = detector.detectMultiScale(
                gray,
                scaleFactor=1.3,
                minNeighbors=5
            )
            \`\`\`

            ### ROI Extraction
            \`\`\`python
            for (x, y, w, h) in faces:
                roi = gray[y:y+h, x:x+w]
                roi = cv2.resize(roi, (48,48))
                roi = roi.reshape(1, 48, 48, 1)
            \`\`\`

            ### Prediction
            \`\`\`python
            prediction = model.predict(roi)
            emotion = labels[np.argmax(prediction)]
            \`\`\`

            ### JSON Logging
            \`\`\`python
            log_data = {
                "timestamp": datetime.now().isoformat(),
                "emotion": emotion,
                "confidence": float(prediction.max())
            }

            with open("logs.json", "a") as f:
                f.write(json.dumps(log_data) + ",\\n")
            \`\`\`

            ### Final UI Overlay
            \`\`\`python
            cv2.putText(
                frame,
                emotion,
                (x, y - 10),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.9,
                (0, 255, 0),
                2
            )
            \`\`\`

            ---

            ## 9. Challenges
            - Model overfitting during early training rounds  
            - FPS drop when face detection triggered too often  
            - Handling poor lighting and partial occlusions  
            - Improving accuracy for “fear” and “disgust” (naturally less represented)  
            - Synchronizing logging with real-time feed  

            ---

            ## 10. Results
            - Stable 20–25 FPS on standard laptop CPU  
            - Up to 91% accuracy on test set  
            - Smooth classification in continuous webcam feed  
            - Clean JSON logs ready for dashboards  
            - Consistent real-time overlays  

            ---

            ## 11. Future Improvements
            - Integrate with online therapy platforms  
            - Add multi-face detection with separate tracking IDs  
            - Improve dataset with better augmentation  
            - Deploy using FastAPI with GPU support  
            - Add emotion trends dashboard (Plotly/Dash)  
            - Integrate with your “Vision” capstone system
                                            
        `
    },

    {
        id: "asl-gesture-recognition",
        title: "ASL Gesture Recognition",
        description: "A real-time American Sign Language (ASL) alphabet recognition system using MediaPipe for hand landmark extraction and a custom CNN for letter classification. It captures hand keypoints from a live video feed, converts them into numerical features, and predicts the corresponding ASL letter with high accuracy. The system visualizes detected hand skeletons, overlays predictions, and supports future expansion into full word-level sign recognition. This project demonstrates practical human–computer interaction, deep learning, and MediaPipe integration.",
        codeSnippet: "results = hands.process(frame)\nif results.multi_hand_landmarks:\n    landmarks = extract_landmarks(results.multi_hand_landmarks[0])\n    pred = model.predict([landmarks])[0]",
        imageUrl: "https://images.pexels.com/photos/10029300/pexels-photo-10029300.jpeg?_gl=1*6lzqfh*_ga*MjIzMjg2NDE5LjE3NjQzMjI0MjQ.*_ga_8JE65Q40S6*czE3NjQzMjQ2OTYkbzIkZzEkdDE3NjQzMjUwMDYkajU5JGwwJGgw",
        githubUrl: "https://github.com/AnnaNutzz/gesture",
        demoUrl: "",
        tags: ["Python", "MediaPipe", "TensorFlow", "OpenCV", "CNN", "Hand Tracking"],
        images: [],
        videos: [],

        content: `
        ## 1. Overview
        ASL Gesture Recognition is a real-time sign language alphabet detection project built using Python, MediaPipe Hands, TensorFlow, and OpenCV.  
        The system detects hand landmarks through a webcam feed, extracts 21 keypoints per hand, preprocesses them into numerical vectors, and feeds them into a trained CNN classifier to predict ASL letters (A–Z).  

        The project includes:
        - real-time hand skeleton visualization  
        - smooth MediaPipe tracking  
        - letter prediction overlay  
        - clean dataset pipeline  
        - modular model architecture  

        This project was built for the Image and Video Processing course at Bennett University.

        ---

        ## 2. Problem Statement
        Sign language interpreters are limited. Deaf and hard-of-hearing individuals often rely on non-verbal communication that machines cannot interpret. Existing ASL recognition systems frequently:

        - require expensive setup  
        - rely on glove-based sensors  
        - need depth cameras  
        - fail under real-time conditions  
        - have limited alphabet coverage  

        The goal of this project was to build a **low-cost**, **reliable**, **webcam-only**, and **real-time** ASL alphabet recognizer that works offline.

        ---

        ## 3. Objectives
        - Use MediaPipe Hands to detect and track hand landmarks.  
        - Build a robust dataset for all ASL alphabet folders (A–Z, del, space, nothing).  
        - Train a CNN classifier for gesture recognition.  
        - Render real-time predictions with visual overlays.  
        - Maintain stable performance across lighting and hand sizes.  
        - Maintain a lightweight model that runs smoothly on CPU.

        ---

        ## 4. Dataset Description
        Your dataset:

        \`\`\`
        D:\\Bennett University\\Image and Video Processing\\gesture detection\\asl_alphabet_test\\asl_alphabet_test
        \`\`\`

        Includes:
        - 26 alphabet folders (A–Z)  
        - “del”, “space”, “nothing” gesture categories  
        - ~3,000+ images total  

        All images were preprocessed to:
        - 200×200  
        - RGB → hand landmarks only  
        - normalized coordinates  
        - fixed vector length (21 landmarks × (x,y,z) = 63 features)

        ---

        ## 5. Architecture Diagram (Text Description)

        **Input Layer**
        - Webcam frame  
        - MediaPipe Hands → 21 3D hand keypoints  

        **Preprocessing**
        - Flatten landmarks  
        - Normalize  
        - Shape → (63,)  

        **Model (CNN/MLP Hybrid)**
        - Dense → ReLU  
        - Dense → ReLU  
        - Dropout  
        - Dense → Softmax (29 classes)  

        **Output**
        - ASL letter  
        - Real-time overlay  
        - Future word stitching (planned)

        ---

        ## 6. Tech Stack
        **Languages**
        - Python  

        **Libraries**
        - MediaPipe  
        - OpenCV  
        - TensorFlow / Keras  
        - NumPy  

        **Tools**
        - Jupyter Notebook  
        - Custom dataset generator  
        - Model trainer script  

        ---

        ## 7. Main Features (Detailed)

        ### A. Real-Time Hand Tracking
        MediaPipe provides:
        - highly accurate finger joint detection  
        - fast inference speeds  
        - robust tracking even with partial visibility  

        ### B. Gesture Classification
        Supports:
        - A–Z  
        - del  
        - nothing  
        - space  

        Future-ready architecture allows:
        - dynamic sequences  
        - word-level recognition  
        - sentence-level interpretation  

        ### C. Keypoint Extraction
        Each hand yields 21 landmarks:

        - x, y pixel coordinates  
        - z depth coordinate  

        Flattened into 63 values:  
        \`\`\`
        [x1, y1, z1, ..., x21, y21, z21]
        \`\`\`

        ### D. Real-Time Letter Overlay
        The webcam feed shows:
        - green hand skeleton  
        - predicted letter box  
        - confidence score  

        ### E. Dataset Preprocessor
        Automatically:
        - filters bad frames  
        - extracts consistent landmarks  
        - saves CSV/NumPy dataset  

        ---

        ## 8. Implementation

        ### MediaPipe Hand Extraction
        \`\`\`python
        results = hands.process(frame)

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                mp_draw.draw_landmarks(
                    frame, 
                    hand_landmarks, 
                    mp_hands.HAND_CONNECTIONS
                )
        \`\`\`

        ### Landmark Vector Builder
        \`\`\`python
        def extract_landmarks(landmarks):
            data = []
            for lm in landmarks.landmark:
                data.extend([lm.x, lm.y, lm.z])
            return np.array(data)
        \`\`\`

        ### Model Prediction
        \`\`\`python
        vector = extract_landmarks(results.multi_hand_landmarks[0])
        vector = vector.reshape(1, 63)

        prediction = model.predict(vector)
        letter = labels[np.argmax(prediction)]
        \`\`\`

        ### Overlay on Webcam
        \`\`\`python
        cv2.putText(
            frame, 
            f"Letter: {letter}", 
            (10, 40),
            cv2.FONT_HERSHEY_SIMPLEX,
            1, 
            (0, 255, 0), 
            2
        )
        \`\`\`

        ---

        ## 9. Challenges Faced
        - Lighting changes causing landmark jitter  
        - MediaPipe occasionally detecting false positives  
        - Training stability on “space” and “nothing” categories  
        - Variations in hand orientation causing class confusion  
        - Feature scaling required consistent normalization  

        ---

        ## 10. Results
        - High accuracy on alphabet classification  
        - Smooth real-time inference on CPU  
        - Clean and stable MediaPipe tracking  
        - Reliable predictions even at lower resolutions  
        - Dataset size scalable for full ASL words  

        ---

        ## 11. Future Improvements
        - Add LSTM for temporal recognition  
        - Word-level prediction based on letter sequence  
        - Dataset augmentation for rotation and mirroring  
        - Deploy as a web app using TensorFlow.js  
        - Utility for sign-to-text in messaging apps  

            `
    },

    {
        id: "meeting-transcriber",
        title: "Meeting Transcriber & Summarizer",
        description: "An offline, CLI-based meeting assistant that records or imports audio, transcribes it using Whisper or faster-whisper, and generates structured summaries using a local Mistral-7B model. The system supports multilingual speech, time-stamped segments, and outputs clean, action-oriented notes following a custom point–subpoint–action format.",
        codeSnippet: "audio_path = 'meeting.mp3'\ntranscript = whisper_model.transcribe(audio_path)\nsummary = mistral_summarizer.generate(transcript)",
        imageUrl: "https://images.pexels.com/photos/6608154/pexels-photo-6608154.jpeg",
        githubUrl: "https://github.com/AnnaNutzz/AI-Powered-Meeting-Transcription-and-Summarizer",
        demoUrl: "",
        tags: ["Python", "Whisper", "Mistral", "Offline AI", "CLI Tool"],
        images: [],
        videos: [],

        content: `
            ## 1. Overview
            This project is an offline, command-line based Meeting Transcriber & Summarizer.  
            It processes raw audio files, converts them into accurate transcripts using Whisper or faster-whisper, and then generates structured, short summaries using a local LLM (Mistral-7B).  
            The system is designed to run fully offline for security and privacy, making it ideal for personal meetings, research sessions, classroom discussions, and confidential work environments.

            ---

            ## 2. Problem Statement
            Meetings often contain large amounts of information that people:
            - forget  
            - fail to document  
            - cannot search easily  
            - struggle to revisit  

            Most transcription tools are online and insecure.  
            This project solves all of these issues offline.

            ---

            ## 3. Objectives
            - Provide accurate offline speech-to-text transcription  
            - Support multilingual (English + Hindi) audio  
            - Generate clean, short, structured summaries  
            - Follow a strict output format:
            1. Point  
                a. discussion  
                Action Taken: …  
            - Work 100% offline for security  
            - Run on low-end laptops as well as high-end PCs  

            ---

            ## 4. Architecture (Text Description)

            **Input**  
            - Local audio file (MP3, WAV, M4A)

            **Processing Pipeline**  
            1. Whisper / faster-whisper transcription  
            2. Segment-level timestamps  
            3. Optional noise reduction  
            4. Feed transcript into Mistral-7B Instruct  
            5. Structured meeting summary generation  

            **Output**  
            - Full transcript  
            - Summary with point → subpoint → action structure  

            ---

            ## 5. Tech Stack

            **Programming Language**  
            - Python

            **Models**  
            - Whisper / faster-whisper  
            - Local Mistral-7B-Instruct  
            - Optional: whisper.cpp for CPU-only mode

            **Tools**  
            - ffmpeg  
            - pydub  
            - torch  
            - transformers (for Mistral)  

            **Execution**  
            - Pure CLI (no Flask, no webserver)

            ---

            ## 6. Features

            ### A. Offline Audio Transcription
            - Whisper small/medium  
            - Hindi + English support  
            - Accurate timestamps  
            - Stable even on low-end GPUs  

            ### B. Local Summarization (Mistral-7B)
            Produces:
            - Short points (5–10 words each)  
            - Sub-points for discussions  
            - “Action taken” line for each point  

            ### C. CLI Workflow
            - Run from terminal  
            - Pass audio path as argument  
            - Outputs .txt or .docx  

            ### D. Privacy & Security
            - No cloud calls  
            - Everything runs on-device  
            - Ideal for confidential meetings  

            ---

            ## 7. Implementation

            ### Whisper Transcription
            \`\`\`python
            from faster_whisper import WhisperModel

            model = WhisperModel(\"medium\", device=\"cuda\", compute_type=\"float16\")

            segments, info = model.transcribe(\"meeting.wav\")

            full_text = \"\\n\".join([s.text for s in segments])
            \`\`\`

            ### Local Mistral Summarizer
            \`\`\`python
            from transformers import AutoTokenizer, AutoModelForCausalLM

            tokenizer = AutoTokenizer.from_pretrained(\"./models/mistral-7b-instruct\")
            model = AutoModelForCausalLM.from_pretrained(\"./models/mistral-7b-instruct\")

            def summarize(text):
                prompt = f\"Summarize this meeting in strict point-subpoint-action format:\\n{text}\"
                inputs = tokenizer(prompt, return_tensors=\"pt\")
                output = model.generate(**inputs, max_new_tokens=500)
                return tokenizer.decode(output[0], skip_special_tokens=True)
            \`\`\`

            ### Running the Tool
            \`\`\`bash
            python transcriber.py meeting.wav > summary.txt
            \`\`\`

            ---

            ## 8. Challenges
            - Long audio files require chunking  
            - Ensuring summaries obey strict formatting  
            - Keeping everything fast on mid-range laptops  
            - Running Mistral locally with limited VRAM  

            ---

            ## 9. Results
            - Highly accurate bilingual transcription  
            - Very short, clean summaries  
            - Works on Dell G15, Aashwin’s PC, and Office PC  
            - No cloud dependency  

            ---

            ## 10. Future Improvements
            - Real-time transcription in terminal  
            - Speaker diarization (offline)  
            - DOCX/PDF export  
            - GUI version (Qt / Tkinter)  
            - Offline keyword search across transcripts  
            `
    },

    {
        id: "fuzzy-disease-consultant",
        title: "Fuzzy Logic Home Disease Consultant",
        description:
            "A lightweight fuzzy-logic based health assistant that interprets everyday symptoms and estimates the likelihood of common illnesses using smooth, human-like reasoning.",

        codeSnippet:
            "temp['fever'] = fuzz.trimf(temp.universe, [97, 101, 105])\nrule1 = ctrl.Rule(temp['fever'] & cough['high'], disease['flu'])",

        imageUrl:
            "https://images.pexels.com/photos/7195122/pexels-photo-7195122.jpeg",

        githubUrl:
            "https://github.com/AnnaNutzz/AI-Powered-Home-Disease-Consultant",

        demoUrl: "",

        tags: ["Python", "Fuzzy Logic", "scikit-fuzzy", "AI in Healthcare"],

        images: [],
        videos: [],

        content: `
            ## 1. Overview
            The Fuzzy Logic Home Disease Consultant is an AI system that assists users in identifying possible illnesses based on basic at-home symptoms.  
            Instead of using classical rule-based logic (IF temperature > X THEN fever), the system uses **fuzzy logic**, allowing for smooth, realistic transitions between mild, moderate, and severe symptoms.

            It models:
            - body temperature  
            - cough intensity  
            - fatigue level  
            - throat pain  
            - headache severity  

            Each symptom is represented as a fuzzy set, enabling natural interpretation similar to how humans reason with “slight fever” or “strong cough”.

            ---

            ## 2. Purpose
            Traditional medical rule engines fail when symptom boundaries are unclear — for example, a temperature of 99.3°F is neither “normal” nor fully “fever”.  
            Fuzzy logic solves this by allowing partial memberships, enabling:

            - more realistic symptom interpretation  
            - better handling of ambiguous input  
            - smoother disease scoring  

            This system helps users get preliminary guidance before visiting a doctor.

            ---

            ## 3. System Architecture

            ### Input Layer
            User-entered values:
            - temperature (°F)
            - cough intensity (0–10)
            - fatigue level (0–10)
            - throat pain (0–10)
            - headache severity (0–10)

            ### Fuzzy Layer
            Each symptom has:
            - membership functions (low, medium, high)
            - universe ranges  
            - trapezoidal or triangular curves

            ### Inference Engine
            Rules such as:
            - IF **fever** AND **strong cough** THEN **flu likelihood high**  
            - IF **mild fever** AND **mild fatigue** THEN **viral infection moderate**  
            - IF **no fever** AND **strong throat pain** THEN **throat infection high**

            ### Defuzzification
            Outputs real-valued likelihoods for:
            - Flu  
            - Viral infection  
            - Throat infection  
            - Fatigue syndrome  

            ---

            ## 4. Tech Stack

            **Languages**
            - Python

            **Libraries**
            - scikit-fuzzy  
            - NumPy  
            - Matplotlib (for visualization)  

            **Optional Extensions**
            - Flask for API deployment  
            - Simple UI for symptom sliders  

            ---

            ## 5. Example Membership Functions

            \`\`\`python
            import numpy as np
            import skfuzzy as fuzz
            from skfuzzy import control as ctrl

            temp = ctrl.Antecedent(np.arange(96, 106, 1), 'temp')
            cough = ctrl.Antecedent(np.arange(0, 11, 1), 'cough')

            disease = ctrl.Consequent(np.arange(0, 101, 1), 'disease')

            temp['normal'] = fuzz.trimf(temp.universe, [96, 97, 99])
            temp['fever']  = fuzz.trimf(temp.universe, [98, 101, 105])

            cough['low'] = fuzz.trimf(cough.universe, [0, 2, 4])
            cough['high'] = fuzz.trimf(cough.universe, [5, 7, 10])
            \`\`\`

            ---

            ## 6. Example Fuzzy Rule

            \`\`\`python
            rule1 = ctrl.Rule(temp['fever'] & cough['high'], disease['disease'])
            \`\`\`

            Rules combine symptoms to calculate disease likelihood.

            ---

            ## 7. Control System Setup

            \`\`\`python
            disease_control = ctrl.ControlSystem([rule1])
            disease_simulation = ctrl.ControlSystemSimulation(disease_control)

            # Input values
            disease_simulation.input['temp'] = 102
            disease_simulation.input['cough'] = 8

            disease_simulation.compute()
            print(disease_simulation.output['disease'])
            \`\`\`

            This returns a real-valued “disease likelihood score”.

            ---

            ## 8. Features

            ### ✔ Fuzzy membership interpretation  
            Translates real numbers into linguistic terms like “mild”, “medium”, “severe”.

            ### ✔ Multiple diseases supported  
            Outputs likelihoods for several conditions simultaneously.

            ### ✔ Smooth reasoning  
            Handles borderline cases more realistically than rigid IF/ELSE.

            ### ✔ Extensible rule base  
            Doctors or researchers can add new symptoms easily.

            ### ✔ Real-time inference  
            Sub-second computation even on basic CPUs.

            ---

            ## 9. Challenges Faced
            - Designing intuitive membership functions for symptoms.
            - Choosing effective ranges for health-related variables.
            - Balancing rule weights to avoid conflicting conclusions.
            - Ensuring results remain interpretable and not overly complex.

            ---

            ## 10. Results
            - The fuzzy model gives realistic predictions for common home-detectable conditions.
            - Provides smooth probability transitions instead of sharp classifications.
            - Useful as a pre-screening tool for everyday symptom checking.

            ---

            ## 11. Future Improvements
            - Add more diseases and symptom types.
            - Integrate with wearable sensors.
            - Improved UI interface with sliders for inputs.
            - Deploy as a mobile or PWA application.
            - Add multilingual support.

            `
    },


    {
        id: "heuristic-ttt",
        title: "Heuristic Tic-Tac-Toe",
        description: "A Tic-Tac-Toe implementation that uses heuristic evaluation rather than full minimax search. The evaluator scores board states by line potential, immediate wins/blocks, center control, and move order heuristics to play strong, fast moves with minimal search depth—appropriate for UI-driven applications and educational demos.",
        codeSnippet: "def heuristic(board, player):\n    score = 0\n    # immediate win/block checks\n    if is_winner(board, player): score += 100\n    if is_winner(board, opponent(player)): score -= 90\n    # center control\n    if board[1][1] == player: score += 5\n    # line potentials\n    for line in winning_lines:\n        score += line_potential(line, player)\n    return score",
        imageUrl: "https://images.pexels.com/photos/28454507/pexels-photo-28454507.jpeg",
        githubUrl: "https://github.com/AnnaNutzz/50-Days-50-Python-Projects/blob/main/18%20TTT%20tkinter.py",
        demoUrl: "",
        tags: ["Python", "Game AI", "Algorithms"],
        images: ["/ttt1.gif"],
        videos: [],

        content: `
            ## 1. Overview
            Heuristic Tic - Tac - Toe is an AI - driven implementation of classic Tic - Tac - Toe that replaces exhaustive minimax search with a compact, explainable heuristic evaluator.The goal is to make an opponent that is both fast and strong for real - time UI usage, educational demos, and to show how domain knowledge can replace brute force for small games.

            ---

            ## 2. Motivation
    - Minimax with full - depth search is simple for Tic - Tac - Toe, but it can be overkill when you want instant decisions and clear explainability.
            - Heuristics show how patterns(two -in -a - row, forks, center control) can be encoded succinctly.
            - Useful for embedding in UI apps where deterministic, fast moves and tunable behavior are preferred.

            ---

            ## 3. Objectives
    - Create a compact heuristic function to evaluate board positions.
            - Prioritize immediate win, block, and fork prevention.
            - Use move ordering and shallow search(1–2 ply) combined with heuristics.
            - Keep logic readable so it can be taught or extended.

            ---

            ## 4. Heuristic Components
    - **Immediate win**: highest priority.
            - **Immediate block**: block opponent's winning move.
    - **Fork creation / prevention**: detect and prefer moves that create or stop forks.
            - **Center control**: small bonus for center occupancy.
            - **Corner preference**: corners are valuable for forks and control.
            - **Line potential**: evaluate each winning line(row / col / diag) by how many of player's marks and empty slots remain.

---

            ## 5. Simple Evaluator Example

\`\`\`python
            def line_potential(line, player):
                # line is a list of 3 cells: 'X', 'O', or None
                count_player = line.count(player)
                count_opponent = line.count(opponent(player))
                if count_opponent == 0:
                    # potential to win in this line
                    return 3 ** count_player
                return 0

            def heuristic(board, player):
                score = 0
                # immediate win/block checks
                if is_winner(board, player):
                    return 1000
                if is_winner(board, opponent(player)):
                    return -900
                # center control
                if board[1][1] == player:
                    score += 5
                # line potential
                for line in winning_lines(board):
                    score += line_potential(line, player)
                return score
            \`\`\`

            ---

            \`\`\`python
            def best_move(board, player):
                moves = legal_moves(board)
                best = None
                best_score = -1e9
                for m in moves:
                    b2 = make_move(board, m, player)
                    score = heuristic(b2, player)
                    if score > best_score:
                        best_score = score
                        best = m
                return best
            \`\`\`

            ---

            ## 8. Edge Cases & Defensive Logic
            - Detect draws early and prefer moves that prolong win chances.
            - Handle symmetry for move ordering (mirror equivalent moves).
            - Prevent infinite loops in interactive UIs by validating moves.

            ---

            ## 9. Performance & Complexity
            - Evaluating all moves with the heuristic is O(n_moves * evaluation_time). For Tic-Tac-Toe, this is negligible.
            - No deep recursion required; suitable for web UI and mobile apps.

            ---

            ## 10. Testing & Metrics
            - Test against random players, greedy players, and full minimax to validate strength.
            - Measure win/draw/loss rates against baseline algorithms.
            - Add unit tests for all heuristic components (immediate win/block, fork detection).

            ---

            ## 11. Future Improvements
            - Expose difficulty by tuning heuristic weights or adding randomized move choice.
            - Add a learning component that adjusts weights based on game outcomes.
            - Expand to other small grid games (3D Tic-Tac-Toe, Connect-4 heuristics).

            `
    },

    {
        id: "kivy-tkinter-apps",
        title: "Kivy & Tkinter Applications (Collection)",
        description:
            "A curated collection of practical GUI projects built using Kivy and Tkinter — ranging from games to utilities to mini-tools. This set showcases hands-on experience with widget systems, animations, event loops, responsive layouts, JSON data handling, and the design of clean, maintainable UI logic.",

        codeSnippet:
            "from kivy.app import App\nfrom kivy.uix.boxlayout import BoxLayout\n\nclass MainScreen(BoxLayout):\n    pass\n\nclass MyApp(App):\n    def build(self):\n        return MainScreen()\n\nif __name__ == '__main__':\n    MyApp().run()",

        imageUrl: "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg",

        githubUrl: "https://github.com/AnnaNutzz/Kivy-Tkinter-Apps",

        demoUrl: "",

        tags: ["Python", "Kivy", "Tkinter", "GUI", "Games", "Utilities"],

        content: `
            # Kivy & Tkinter Applications — Full Collection Page

            ## 1. Overview
            This collection represents a major part of my journey in mastering Python UI frameworks.  
            Each app focuses on solving a small but meaningful problem — from scheduling tasks to simulating animations, building logic-based games, and creating lightweight desktop utilities.

            The **Kivy apps** demonstrate:
            - mobile-style UI design  
            - animations with Clock  
            - reusable components  
            - responsive layouts  
            - Android build workflows (Buildozer)

            The **Tkinter apps** focus on:
            - quick desktop tools  
            - grid/pack/place layouts  
            - messageboxes, input parsing  
            - event loops and state management  
            - small utilities designed for simplicity and reliability

            Together, these projects show a wide understanding of GUI development and rapid prototyping.

            ---

            ## 2. App-by-App Breakdown

            <div class="flex flex-col md:flex-row gap-8 items-center mb-12 border-b border-white/10 pb-12">
            <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2">Date Appointment (Kivy)</h3>
            <a href="https://github.com/AnnaNutzz/Go-on-a-Date-with-Me" target="_blank" class="text-primary hover:underline mb-4 inline-block">GitHub Repository</a>
            <p class="mb-4">A simple, clean appointment booking tool created to practice:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>working with KivyMD’s date and time pickers</li>
            <li>storing user data in JSON</li>
            <li>validating inputs</li>
            <li>sending confirmation messages via WhatsApp Web (optional)</li>
            </ul>
            <p class="mb-4">Useful for learning how forms, dialogs, and persistence work in a real UI.</p>
            <p class="font-bold mb-2">Snippet (saving data):</p>
            <pre class="bg-[#1e1e20] p-4 rounded-lg overflow-x-auto text-sm text-pink-300 font-mono"><code>def save_appointment(title, date_str, time_str):
                appt = {"title": title, "date": date_str, "time": time_str}
                with open("appointments.json", "a") as f:
                    f.write(json.dumps(appt) + "\\n")</code></pre>
            </div>
            <div class="w-[70px] shrink-0">
            <video src="/dateme1.mp4" class="w-full rounded-lg shadow-lg" controls></video>
            </div>
            </div>


            <div class="flex flex-col md:flex-row gap-8 items-center mb-12 border-b border-white/10 pb-12">
            <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2">Heart Sync (Kivy)</h3>
            <a href="https://github.com/AnnaNutzz/Heart-Sync" target="_blank" class="text-primary hover:underline mb-4 inline-block">GitHub Repository</a>
            <p class="mb-4">A visual heartbeat simulator built to understand animation timing.</p>
            <p class="mb-2">Key learning points:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>dynamic scaling animations</li>
            <li>interval-based updates</li>
            <li>UI/UX feedback loops</li>
            <li>controlling visuals using BPM input</li>
            </ul>
            <p class="font-bold mb-2">Snippet:</p>
            <pre class="bg-[#1e1e20] p-4 rounded-lg overflow-x-auto text-sm text-pink-300 font-mono"><code>from kivy.clock import Clock
            def start_heartbeat(self, bpm):
                interval = 60.0 / bpm
                self.heartbeat_event = Clock.schedule_interval(self.toggle_beat, interval)</code></pre>
            </div>
            <div class="w-[70px] shrink-0">
            <img src="https://placehold.co/300x200?text=Heart+Sync" class="w-full rounded-lg shadow-lg" />
            </div>
            </div>


            <div class="flex flex-col md:flex-row gap-8 items-center mb-12 border-b border-white/10 pb-12">
            <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2">Text Adventure (CLI)</h3>
            <a href="https://github.com/AnnaNutzz/50-Days-50-Python-Projects/blob/main/08%20adv%20game.py" target="_blank" class="text-primary hover:underline mb-4 inline-block">GitHub Repository</a>
            <p class="mb-4">A small interactive story with branching choices.</p>
            <p class="mb-2">Highlights:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>JSON-based story nodes</li>
            <li>multiple pathways</li>
            <li>reusable UI components</li>
            <li>save/load of story progress</li>
            </ul>
            <p class="font-bold mb-2">JSON Example:</p>
            <pre class="bg-[#1e1e20] p-4 rounded-lg overflow-x-auto text-sm text-pink-300 font-mono"><code>{ 
            "id": "start",
            "text": "You awake in a room...",
            "choices": [{"label": "Look around", "target": "look"}]
            }</code></pre>
            </div>
            <div class="w-[70px] shrink-0">
            <img src="https://placehold.co/300x200?text=Text+Adventure" class="w-full rounded-lg shadow-lg" />
            </div>
            </div>


            <div class="flex flex-col md:flex-row gap-8 items-center mb-12 border-b border-white/10 pb-12">
            <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2">Kalaa Tokri (Kivy)</h3>
            <a href="https://github.com/AnnaNutzz/Kalaa-Tokri-Application" target="_blank" class="text-primary hover:underline mb-4 inline-block">GitHub Repository</a>
            <p class="mb-4">A polished Kivy product catalog viewer.</p>
            <p class="mb-2">Key aspects:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>RecycleView lists</li>
            <li>image tiles</li>
            <li>scrollable interfaces</li>
            <li>responsive layout</li>
            <li>JSON-driven content</li>
            </ul>
            <p class="mb-4">Not an e-commerce system; purely a front-end UI.</p>
            <p class="font-bold mb-2">Snippet:</p>
            <pre class="bg-[#1e1e20] p-4 rounded-lg overflow-x-auto text-sm text-pink-300 font-mono"><code>with open("products.json") as f:
                products = json.load(f)

            def load_items(rv):
                rv.data = [
                    {"image": p["image"], "title": p["title"], "desc": p["desc"]}
                    for p in products
                ]</code></pre>
            </div>
            <div class="w-[70px] shrink-0">
            <img src="https://placehold.co/300x200?text=Kalaa+Tokri" class="w-full rounded-lg shadow-lg" />
            </div>
            </div>


            <div class="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2">VND → INR Currency Converter (Tkinter)</h3>
            <a href="https://github.com/AnnaNutzz/Currency-Exchange" target="_blank" class="text-primary hover:underline mb-4 inline-block">GitHub Repository</a>
            <p class="mb-4">A simple conversion tool created to understand:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>input fields</li>
            <li>formatting</li>
            <li>button actions</li>
            <li>standalone utility app structure</li>
            </ul>
            <p class="font-bold mb-2">Snippet:</p>
            <pre class="bg-[#1e1e20] p-4 rounded-lg overflow-x-auto text-sm text-pink-300 font-mono"><code>VND_to_INR = 0.0034
            def convert(amount_vnd):
                return round(amount_vnd * VND_to_INR, 2)</code></pre>
            </div>
            <div class="w-[70px] shrink-0">
            <video src="/data/exchange1.mp4" class="w-full rounded-lg shadow-lg" controls></video>
            </div>
            </div>

            
            <div class="flex flex-col md:flex-row gap-8 items-center mb-12 border-b border-white/10 pb-12">
            <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2">Rock-Paper-Scissors (CLI & Kivy UI)</h3>
            <a href="https://github.com/AnnaNutzz/50-Days-50-Python-Projects/blob/main/04%20rps.py" target="_blank" class="text-primary hover:underline mb-4 inline-block">GitHub Repository</a>
            <p class="mb-4">Two versions built intentionally:</p>
            <ol class="list-decimal pl-5 mb-4 space-y-1">
            <li>CLI version — test game logic</li>
            <li>Kivy version — showcase buttons, animations, scoring, events</li>
            </ol>
            <p class="mb-4">Demonstrates how game logic can be isolated from UI code for maintainability.</p>
            <p class="font-bold mb-2">Snippet:</p>
            <pre class="bg-[#1e1e20] p-4 rounded-lg overflow-x-auto text-sm text-pink-300 font-mono"><code>import random
            def play_round(player):
                comp = random.choice(['rock','paper','scissors'])
                # determine winner</code></pre>
            </div>
            <div class="w-[70px] shrink-0">
            <img src="https://placehold.co/300x200?text=RPS" class="w-full rounded-lg shadow-lg" />
            </div>
            </div>


            <div class="flex flex-col md:flex-row gap-8 items-center mb-12 border-b border-white/10 pb-12">
            <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2">Calculator (Tkinter)</h3>
            <a href="https://github.com/AnnaNutzz/Kivy-Tkinter-Apps" target="_blank" class="text-primary hover:underline mb-4 inline-block">GitHub Repository</a>
            <p class="mb-4">A fully functional calculator focusing on:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>button grid layouts</li>
            <li>expression parsing</li>
            <li>safe evaluation</li>
            <li>real-time updates using <code>StringVar</code></li>
            </ul>
            <p class="font-bold mb-2">Snippet:</p>
            <pre class="bg-[#1e1e20] p-4 rounded-lg overflow-x-auto text-sm text-pink-300 font-mono"><code>def on_button_click(char):
                current = display_var.get()
                display_var.set(current + char)</code></pre>
            </div>
            <div class="w-[70px] shrink-0">
            </div>
            </div>


            <div class="flex flex-col md:flex-row gap-8 items-center mb-12 border-b border-white/10 pb-12">
            <div class="flex-1">
            <h3 class="text-2xl font-bold mb-2">Number Guessing (CLI)</h3>
            <a href="https://github.com/AnnaNutzz/50-Days-50-Python-Projects/blob/main/07%20number%20guessing%20game.py" target="_blank" class="text-primary hover:underline mb-4 inline-block">GitHub Repository</a>
            <p class="mb-4">A minimal guessing game, great for practicing:</p>
            <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>messageboxes</li>
            <li>numeric validation</li>
            <li>instant UI feedback</li>
            <li>restarting game state cleanly</li>
            </ul>
            <p class="font-bold mb-2">Snippet:</p>
            <pre class="bg-[#1e1e20] p-4 rounded-lg overflow-x-auto text-sm text-pink-300 font-mono"><code>target = random.randint(1,100)
            def check_guess(val):
                if val == target:
                    show_win()
                elif val < target:
                    hint('Higher')
                else:
                    hint('Lower')</code></pre>
            </div>
            <div class="w-[70px] shrink-0">
            <img src="https://placehold.co/300x200?text=Number+Guessing" class="w-full rounded-lg shadow-lg" />
            </div>
            </div>

            ---

            ## 3. Shared Implementation Tips
            - **Store data smartly**: JSON for tiny tools, SQLite for multi-screen apps.
            - **Clean file structure**: separate logic, UI, assets, and state.
            - **Validation is essential**: especially for forms, calculators, and guessing games.
            - **Builds**:  
            - PyInstaller → EXE (desktop)  
            - Buildozer → APK (Android)  
            - **Testing**: Always check navigation flow, form filling, and error handling.

            ---

            ## 4. Combined Requirements
            \`\`\`
            kivy
            kivymd
            pillow
            python-dateutil
            pytz
            requests
            pyinstaller
            \`\`\`

            ---

            ## 5. Quick Testing Checklist
            - Test responsiveness on small & large screens (Kivy).
            - Ensure keyboard shortcuts work (Tkinter).
            - Add basic unit tests for game logic (RPS, Hangman).
            - Use logs + try/except for debugging unexpected crashes.

            ---

            ## 6. Where to Go Next
            - Export APKs for mobile versions.
            - Add GIF previews/screenshots to the portfolio.
            - Add subtle animations and sound effects.
            - Convert utility apps to standalone executables.
            - Merge multiple small games into a single “mini arcade” app.

                `
    }




];
