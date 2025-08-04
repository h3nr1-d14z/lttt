'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { questions } from '@/lib/questions';
import MathContent from '@/components/MathContent';

type ViewMode = 'study' | 'quiz' | 'review';

interface QuizAnswer {
  questionId: string;
  correct: boolean;
  timestamp: number;
}

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showQuestionDetails, setShowQuestionDetails] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [showChapterFilter, setShowChapterFilter] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('study');
  const [searchQuery, setSearchQuery] = useState('');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);
  const [showStats, setShowStats] = useState(false);
  const [studyTime, setStudyTime] = useState(0);
  const [sessionStartTime] = useState(Date.now());

  const chapters = Array.from(new Set(questions.map(q => q.chapter)));
  
  // Filter questions based on mode and search
  const filteredQuestions = useMemo(() => {
    let filtered = questions;
    
    // Filter by chapter
    if (selectedChapter !== 'all') {
      filtered = filtered.filter(q => q.chapter === selectedChapter);
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by mode
    if (viewMode === 'review') {
      filtered = filtered.filter(q => progress[q.id]);
    } else if (viewMode === 'quiz') {
      // Shuffle questions for quiz mode
      filtered = [...filtered].sort(() => Math.random() - 0.5);
    }
    
    return filtered;
  }, [selectedChapter, searchQuery, viewMode, progress]);

  const currentQuestion = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

  // Load saved data
  useEffect(() => {
    const savedProgress = localStorage.getItem('lttt-progress');
    const savedStudyTime = localStorage.getItem('lttt-study-time');
    const savedQuizAnswers = localStorage.getItem('lttt-quiz-answers');
    const savedLongestStreak = localStorage.getItem('lttt-longest-streak');
    
    if (savedProgress) {
      const parsedProgress = JSON.parse(savedProgress);
      setProgress(parsedProgress);
      // Calculate current streak
      const learnedQuestions = Object.keys(parsedProgress).filter(id => parsedProgress[id]);
      setCurrentStreak(learnedQuestions.length);
    }
    if (savedStudyTime) setStudyTime(parseInt(savedStudyTime));
    if (savedQuizAnswers) setQuizAnswers(JSON.parse(savedQuizAnswers));
    if (savedLongestStreak) setLongestStreak(parseInt(savedLongestStreak));
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem('lttt-progress', JSON.stringify(progress));
  }, [progress]);

  // Save quiz answers
  useEffect(() => {
    localStorage.setItem('lttt-quiz-answers', JSON.stringify(quizAnswers));
  }, [quizAnswers]);

  // Track study time
  useEffect(() => {
    const interval = setInterval(() => {
      const newStudyTime = studyTime + Math.floor((Date.now() - sessionStartTime) / 1000);
      setStudyTime(newStudyTime);
      localStorage.setItem('lttt-study-time', newStudyTime.toString());
    }, 1000);

    return () => clearInterval(interval);
  }, [studyTime, sessionStartTime]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case ' ':
          e.preventDefault();
          setShowAnswer(!showAnswer);
          break;
        case 'm':
          handleMarkAsLearned();
          break;
        case 's':
          e.preventDefault();
          setSearchQuery('');
          document.getElementById('search-input')?.focus();
          break;
        case 'i':
          setShowQuestionDetails(!showQuestionDetails);
          break;
        case 'r':
          if (viewMode !== 'review') {
            setViewMode('review');
          }
          break;
        case '1':
          setViewMode('study');
          break;
        case '2':
          setViewMode('quiz');
          break;
        case '3':
          setViewMode('review');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showAnswer, currentQuestionIndex]);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setShowAnswer(false);
    setShowQuestionDetails(false);
    
    setTimeout(() => {
      if (currentQuestionIndex < filteredQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else if (viewMode === 'quiz') {
        // Loop back to start in quiz mode
        setCurrentQuestionIndex(0);
      }
      setIsTransitioning(false);
    }, 150);
  }, [currentQuestionIndex, filteredQuestions.length, viewMode]);

  const handlePrevious = useCallback(() => {
    setIsTransitioning(true);
    setShowAnswer(false);
    setShowQuestionDetails(false);
    
    setTimeout(() => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
      setIsTransitioning(false);
    }, 150);
  }, [currentQuestionIndex]);

  const handleMarkAsLearned = useCallback(() => {
    if (!currentQuestion) return;
    
    const wasLearned = progress[currentQuestion.id];
    const newLearned = !wasLearned;
    
    setProgress(prev => ({
      ...prev,
      [currentQuestion.id]: newLearned
    }));

    // Update streak
    if (newLearned) {
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
        localStorage.setItem('lttt-longest-streak', newStreak.toString());
      }
    } else {
      setCurrentStreak(0);
    }

    if (viewMode === 'quiz') {
      setQuizAnswers(prev => [...prev, {
        questionId: currentQuestion.id,
        correct: true,
        timestamp: Date.now()
      }]);
    }
  }, [currentQuestion, viewMode, progress, currentStreak, longestStreak]);

  const handleJumpToQuestion = (index: number) => {
    setIsTransitioning(true);
    setShowAnswer(false);
    setShowQuestionDetails(false);
    
    setTimeout(() => {
      setCurrentQuestionIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const handleExportProgress = () => {
    const data = {
      progress,
      studyTime,
      quizAnswers,
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lttt-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const handleImportProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.progress) setProgress(data.progress);
        if (data.studyTime) setStudyTime(data.studyTime);
        if (data.quizAnswers) setQuizAnswers(data.quizAnswers);
        alert('Đã nhập dữ liệu thành công!');
      } catch (error) {
        alert('Lỗi khi nhập dữ liệu!');
      }
    };
    reader.readAsText(file);
  };

  const progressCount = Object.values(progress).filter(Boolean).length;
  const progressPercentage = (progressCount / questions.length) * 100;

  const stats = useMemo(() => {
    const recentQuizAnswers = quizAnswers.filter(a => 
      Date.now() - a.timestamp < 7 * 24 * 60 * 60 * 1000 // Last 7 days
    );
    const correctAnswers = recentQuizAnswers.filter(a => a.correct).length;
    const accuracy = recentQuizAnswers.length > 0 
      ? (correctAnswers / recentQuizAnswers.length * 100).toFixed(1)
      : 0;

    return {
      totalQuestions: questions.length,
      learned: progressCount,
      studyTimeMinutes: Math.floor(studyTime / 60),
      quizAttempts: recentQuizAnswers.length,
      quizAccuracy: accuracy
    };
  }, [progressCount, studyTime, quizAnswers]);

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Không tìm thấy câu hỏi phù hợp</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Lý thuyết Thông tin - Học câu hỏi
            </h1>
            <button
              onClick={() => setShowStats(!showStats)}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              📊 Thống kê
            </button>
          </div>

          {/* Stats Panel */}
          {showStats && (
            <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow animate-fade-in">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📈 Thống kê học tập</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Tổng câu hỏi</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{stats.totalQuestions}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Đã học</p>
                  <p className="text-xl font-semibold text-green-600">{stats.learned}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Thời gian học</p>
                  <p className="text-xl font-semibold text-blue-600">{stats.studyTimeMinutes} phút</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Lần làm quiz</p>
                  <p className="text-xl font-semibold text-purple-600">{stats.quizAttempts}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Độ chính xác</p>
                  <p className="text-xl font-semibold text-orange-600">{stats.quizAccuracy}%</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Streak dài nhất</p>
                  <p className="text-xl font-semibold text-red-600">{longestStreak}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Tiến độ: {progressCount}/{questions.length} câu</span>
              <span>{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Mode Selector */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setViewMode('study')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'study'
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              📚 Học tập
            </button>
            <button
              onClick={() => setViewMode('quiz')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'quiz'
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              🎯 Quiz
            </button>
            <button
              onClick={() => setViewMode('review')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === 'review'
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              🔄 Ôn tập ({progressCount})
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 Tìm kiếm câu hỏi (nhấn 's' để focus)..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Chapter Filter & Import/Export */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowChapterFilter(!showChapterFilter)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Lọc theo chương {showChapterFilter ? '▲' : '▼'}
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleExportProgress}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                title="Xuất dữ liệu"
              >
                💾 Xuất
              </button>
              <label className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer">
                📂 Nhập
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportProgress}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {showChapterFilter && (
            <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow animate-fade-in">
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="all">Tất cả chương</option>
                {chapters.map(chapter => (
                  <option key={chapter} value={chapter}>{chapter}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Question Card */}
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Câu {filteredQuestions.findIndex(q => q.id === currentQuestion.id) + 1}/{filteredQuestions.length}
                </span>
                <button
                  onClick={() => setShowQuestionDetails(!showQuestionDetails)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  title="Xem thông tin chi tiết (nhấn 'i')"
                >
                  ℹ️ Chi tiết
                </button>
              </div>
              <div className="flex gap-2 items-center">
                {progress[currentQuestion.id] && (
                  <span className="text-sm text-green-600 dark:text-green-400 animate-fade-in flex items-center gap-1">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    Đã học
                  </span>
                )}
                {viewMode === 'quiz' && (
                  <span className="text-sm text-purple-600 dark:text-purple-400 flex items-center gap-1">
                    🎯 Quiz
                  </span>
                )}
                {currentStreak > 0 && (
                  <span className="text-sm text-orange-600 dark:text-orange-400 flex items-center gap-1">
                    🔥 {currentStreak}
                  </span>
                )}
              </div>
            </div>
            
            {showQuestionDetails && (
              <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-3 rounded animate-fade-in">
                <p><strong>Chương:</strong> {currentQuestion.chapter}</p>
                <p className="mt-1"><strong>ID:</strong> {currentQuestion.id}</p>
                <p className="mt-1"><strong>Độ khó:</strong> {currentQuestion.answer.length > 200 ? 'Cao' : currentQuestion.answer.length > 100 ? 'Trung bình' : 'Thấp'}</p>
              </div>
            )}
          </div>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            <MathContent content={currentQuestion.question} />
          </h2>

          {/* Answer Section */}
          <div className={`transition-all duration-500 ease-in-out ${showAnswer ? 'max-h-[2000px] opacity-100 mb-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border-l-4 border-blue-500 animate-fade-in">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                💡 Đáp án:
              </h3>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <MathContent content={currentQuestion.answer} />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg ${
                showAnswer 
                  ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-orange-200 dark:shadow-orange-900/30'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 dark:shadow-blue-900/30'
              }`}
            >
              {showAnswer ? '🙈 Ẩn đáp án' : '👁️ Xem đáp án'}
              <span className="text-xs opacity-75 ml-2">(Space)</span>
            </button>
            
            <button
              onClick={handleMarkAsLearned}
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg ${
                progress[currentQuestion.id]
                  ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-200 dark:shadow-green-900/30'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 shadow-gray-200 dark:shadow-gray-900/30'
              }`}
            >
              {progress[currentQuestion.id] ? '✅ Đã học' : '📝 Đánh dấu đã học'}
              <span className="text-xs opacity-75 ml-2">(M)</span>
            </button>

            {viewMode === 'quiz' && (
              <button
                onClick={() => {
                  setQuizAnswers(prev => [...prev, {
                    questionId: currentQuestion.id,
                    correct: false,
                    timestamp: Date.now()
                  }]);
                  setCurrentStreak(0);
                  handleNext();
                }}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg shadow-red-200 dark:shadow-red-900/30 font-medium"
              >
                ❌ Chưa thuộc
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 disabled:hover:scale-100"
          >
            ← Câu trước
          </button>
          
          <span className="text-gray-600 dark:text-gray-400 font-medium">
            {currentQuestionIndex + 1} / {filteredQuestions.length}
          </span>
          
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === filteredQuestions.length - 1 && viewMode !== 'quiz'}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 disabled:hover:scale-100"
          >
            Câu sau →
          </button>
        </div>

        {/* Question Grid */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">Danh sách câu hỏi</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Nhấn số hoặc click để chuyển câu
            </span>
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
            {filteredQuestions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => handleJumpToQuestion(index)}
                className={`p-2 text-sm rounded transition-all transform hover:scale-110 ${
                  currentQuestion.id === q.id
                    ? 'bg-blue-600 text-white shadow-lg scale-110'
                    : progress[q.id]
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title={q.question}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Keyboard Shortcuts Help */}
        {/* Keyboard Shortcuts Help */}
        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">⌨️ Phím tắt:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-600 dark:text-gray-400">
            <div><kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">←→</kbd> Chuyển câu</div>
            <div><kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">Space</kbd> Xem đáp án</div>
            <div><kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">M</kbd> Đánh dấu</div>
            <div><kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">S</kbd> Tìm kiếm</div>
            <div><kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">I</kbd> Chi tiết</div>
            <div><kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">R</kbd> Ôn tập</div>
            <div><kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">1/2/3</kbd> Đổi chế độ</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        
        kbd {
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid;
          border-radius: 0.25rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .question-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .question-card:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}