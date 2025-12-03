"use client";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { db, auth } from "@/lib/firebase";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [activeTab, setActiveTab] = useState<"snippet" | "focus" | "experiment" | "changelog">("snippet");

    // Form States
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); // For snippet
    const [codeSnippet, setCodeSnippet] = useState("");

    // Snippet specific
    const [category, setCategory] = useState("idea");
    const [tags, setTags] = useState("");
    const [painLevel, setPainLevel] = useState(0);

    // Current Focus specific
    const [focusStatus, setFocusStatus] = useState("prototype");
    const [focusProgress, setFocusProgress] = useState(0);
    const [focusEta, setFocusEta] = useState("");

    // Experiment specific
    const [expProblem, setExpProblem] = useState("");
    const [expModel, setExpModel] = useState("");
    const [expDataset, setExpDataset] = useState("");
    const [expResult, setExpResult] = useState("");
    const [expFailures, setExpFailures] = useState("");
    const [expNext, setExpNext] = useState("");

    // Changelog specific
    const [changelogVersion, setChangelogVersion] = useState("");
    const [changelogChanges, setChangelogChanges] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "IGotMoneyOnMyMind17042001") {
            try {
                await signInAnonymously(auth);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Auth failed:", error);
                alert("Login failed (Firebase Auth Error)");
            }
        } else {
            alert("Incorrect password");
        }
    };

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setStatusMessage("Starting upload...");

        try {
            // 3. Save to Firestore
            setStatusMessage("Saving to database...");
            console.log("Saving to Firestore...");
            let collectionName = "snippets";
            let data: any = {
                title,
                createdAt: serverTimestamp(),
            };

            if (activeTab === "snippet") {
                collectionName = "snippets";
                data = {
                    ...data,
                    content,
                    category,
                    tags: tags.split(",").map(t => t.trim()).filter(t => t),
                    painLevel: Number(painLevel)
                };
            } else if (activeTab === "focus") {
                collectionName = "current_focus";
                data = {
                    project: title, // reusing title state for project name
                    status: focusStatus,
                    progress: Number(focusProgress),
                    eta: focusEta,
                    createdAt: serverTimestamp()
                };
            } else if (activeTab === "experiment") {
                collectionName = "experiments";
                data = {
                    title, // reusing title for experiment name
                    problem: expProblem,
                    model: expModel,
                    dataset: expDataset,
                    result: expResult,
                    failures: expFailures,
                    next: expNext,
                    createdAt: serverTimestamp()
                };
            } else if (activeTab === "changelog") {
                collectionName = "changelog";
                data = {
                    version: changelogVersion,
                    changes: changelogChanges.split("\n").filter(line => line.trim()),
                    date: new Date().toISOString(),
                    createdAt: serverTimestamp()
                };
            }

            await addDoc(collection(db, collectionName), data);
            console.log("Document written");

            alert("Uploaded successfully!");
            // Reset form
            setTitle("");
            setContent("");
            setCodeSnippet("");
            setTags("");
            setPainLevel(0);
            setFocusProgress(0);
            setFocusEta("");
            setExpProblem("");
            setExpModel("");
            setExpDataset("");
            setExpResult("");
            setExpFailures("");
            setExpNext("");
            setChangelogVersion("");
            setChangelogChanges("");
        } catch (error) {
            console.error("Error uploading:", error);
            alert(`Upload failed: ${error}`);
        } finally {
            setLoading(false);
            setStatusMessage("");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-xl border border-gray-700 space-y-4">
                    <h1 className="text-2xl font-bold">Admin Access</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white"
                    />
                    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded">
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto py-12">
            <h1 className="text-3xl font-bold mb-8">Add New Content</h1>

            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                <button
                    onClick={() => setActiveTab("snippet")}
                    className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === "snippet" ? "bg-blue-600" : "bg-gray-800"}`}
                >
                    Add Snippet
                </button>
                <button
                    onClick={() => setActiveTab("focus")}
                    className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === "focus" ? "bg-green-600" : "bg-gray-800"}`}
                >
                    Update Focus
                </button>
                <button
                    onClick={() => setActiveTab("experiment")}
                    className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === "experiment" ? "bg-orange-600" : "bg-gray-800"}`}
                >
                    Add Experiment
                </button>
                <button
                    onClick={() => setActiveTab("changelog")}
                    className={`px-4 py-2 rounded whitespace-nowrap ${activeTab === "changelog" ? "bg-yellow-600" : "bg-gray-800"}`}
                >
                    Add Log
                </button>
            </div>

            <form onSubmit={handleUpload} className="space-y-6 bg-gray-800 p-8 rounded-xl border border-gray-700">
                {activeTab !== "changelog" && (
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            {activeTab === "focus" ? "Project Name" : activeTab === "experiment" ? "Experiment Name" : "Title"}
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                            required
                        />
                    </div>
                )}

                {(activeTab === "snippet") && (
                    <div>
                        <label className="block text-sm font-medium mb-2">Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded p-2 h-48"
                            required
                        />
                    </div>
                )}

                {activeTab === "snippet" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                            >
                                <option value="idea">Idea</option>
                                <option value="learning">Learning</option>
                                <option value="graveyard">Bug Graveyard</option>
                                <option value="betrayal">Tech Betrayal</option>
                                <option value="workflow">Workflow</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
                            <input
                                type="text"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                                placeholder="react, bug, fix"
                            />
                        </div>
                        {(category === "graveyard" || category === "betrayal") && (
                            <div>
                                <label className="block text-sm font-medium mb-2">Pain Level (1-10)</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={painLevel}
                                    onChange={(e) => setPainLevel(Number(e.target.value))}
                                    className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                                />
                            </div>
                        )}
                    </>
                )}

                {activeTab === "focus" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-2">Status</label>
                            <select
                                value={focusStatus}
                                onChange={(e) => setFocusStatus(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                            >
                                <option value="idea">Idea Phase</option>
                                <option value="prototype">Prototyping</option>
                                <option value="debugging">Debugging Hell</option>
                                <option value="polishing">Polishing</option>
                                <option value="almost_done">Almost Done</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Progress (%)</label>
                            <input
                                type="number"
                                min="0"
                                max="100"
                                value={focusProgress}
                                onChange={(e) => setFocusProgress(Number(e.target.value))}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">ETA (Optional but funny)</label>
                            <input
                                type="text"
                                value={focusEta}
                                onChange={(e) => setFocusEta(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                                placeholder="When the stars align..."
                            />
                        </div>
                    </>
                )}

                {activeTab === "experiment" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-2">Problem</label>
                            <input
                                type="text"
                                value={expProblem}
                                onChange={(e) => setExpProblem(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                                placeholder="What were you trying to solve?"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Model</label>
                                <input
                                    type="text"
                                    value={expModel}
                                    onChange={(e) => setExpModel(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                                    placeholder="e.g. Llama 3, Custom CNN"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Dataset</label>
                                <input
                                    type="text"
                                    value={expDataset}
                                    onChange={(e) => setExpDataset(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                                    placeholder="e.g. MNIST, Custom Scrape"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Result</label>
                            <textarea
                                value={expResult}
                                onChange={(e) => setExpResult(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2 h-24"
                                placeholder="What happened?"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Failures (The fun part)</label>
                            <textarea
                                value={expFailures}
                                onChange={(e) => setExpFailures(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2 h-24"
                                placeholder="What broke? What was stupid?"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Next Iteration</label>
                            <input
                                type="text"
                                value={expNext}
                                onChange={(e) => setExpNext(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                                placeholder="What will you try next?"
                            />
                        </div>
                    </>
                )}

                {activeTab === "changelog" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-2">Version</label>
                            <input
                                type="text"
                                value={changelogVersion}
                                onChange={(e) => setChangelogVersion(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2"
                                placeholder="v1.0.0"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Changes (One per line)</label>
                            <textarea
                                value={changelogChanges}
                                onChange={(e) => setChangelogChanges(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded p-2 h-48"
                                placeholder="- Added cool feature&#10;- Fixed dumb bug"
                                required
                            />
                        </div>
                    </>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded transition-all disabled:opacity-50"
                >
                    {loading ? "Uploading..." : "Publish Content"}
                </button>
                {loading && (
                    <p className="text-center text-sm text-gray-400 mt-2 animate-pulse">
                        {statusMessage}
                    </p>
                )}
            </form>
        </div>
    );
}
