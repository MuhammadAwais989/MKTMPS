import React, { useState, useEffect } from "react";
import HeaderComponent from "../sections/HeaderComponent";
import { 
  FaBookOpen, 
  FaArrowLeft, 
  FaEdit, 
  FaTrash, 
  FaPlus, 
  FaSave, 
  FaTimes,
  FaCheckCircle,

} from "react-icons/fa";
import { 
  addHomework,
  fetchHomeworkRealtime, 
  deleteHomework, 
  updateHomework,
  cleanupOldHomework 
} from "../../firebase/homeworkService";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

// Ant Design Skeleton Import
import { Skeleton, Button } from 'antd';

const classes = [
  "Nursery", "KG-I", "KG-II",
  "Class 1", "Class 2", "Class 3",
  "Class 4", "Class 5",
  "Class 6", "Class 7",
  "Class 8", "Class 9", "Class 10"
];

const subjects = [
  "Mathematics", "Science", "English", "Urdu", 
  "Social Studies", "Computer", "Islamiat", "Drawing",
  "General Knowledge", "Quran", "Arabic", "PT/Health"
];

const HomeWork = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [subject, setSubject] = useState("");
  const [homework, setHomework] = useState("");
  const [homeworkList, setHomeworkList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editSubject, setEditSubject] = useState("");
  const [editHomework, setEditHomework] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("subject");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("User logged in:", user.email);
      } else {
        setCurrentUser(null);
        console.log("User not logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch realtime data when class selected
  useEffect(() => {
    let unsubscribe = () => {};
    
    if (selectedClass) {
      setIsLoading(true);
      // Clean up old homework first
      cleanupOldHomework();
      
      // Fetch realtime homework data
      unsubscribe = fetchHomeworkRealtime(selectedClass, (data) => {
        setHomeworkList(data);
        setIsLoading(false);
      });
    }
    
    // Cleanup subscription on unmount or when class changes
    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [selectedClass]);

  // Add homework to Firebase
  const handleAddHomework = async () => {
    if (!subject || !homework || !selectedClass) {
      alert("Please select subject and enter homework details");
      return;
    }

    setLoading(true);
    try {
      const result = await addHomework(selectedClass, subject, homework);
      
      if (result && result.success) {
        setSuccessMessage(`${subject} homework added successfully!`);
        setSubject("");
        setHomework("");
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error adding homework:", error);
      alert(`Failed to add homework: ${error.message || "Please check Firebase configuration"}`);
    } finally {
      setLoading(false);
    }
  };

  // Delete homework
  const handleDelete = async (id, subjectName) => {
    if (!window.confirm(`Are you sure you want to delete ${subjectName} homework?`)) {
      return;
    }

    try {
      const result = await deleteHomework(selectedClass, id);
      
      if (result && result.success) {
        setSuccessMessage(`${subjectName} homework deleted successfully!`);
        
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error deleting homework:", error);
      alert("Failed to delete homework. Please try again.");
    }
  };

  // Start editing homework
  const startEdit = (item) => {
    if (!currentUser) {
      alert("Please login to edit homework");
      return;
    }
    setEditingId(item.id);
    setEditSubject(item.subject);
    setEditHomework(item.homework);
  };

  // Save edited homework
  const handleSaveEdit = async () => {
    if (!editSubject || !editHomework) {
      alert("Please fill in both subject and homework details");
      return;
    }

    try {
      const result = await updateHomework(selectedClass, editingId, editSubject, editHomework);
      
      if (result && result.success) {
        setSuccessMessage(`${editSubject} homework updated successfully!`);
        setEditingId(null);
        setEditSubject("");
        setEditHomework("");
        
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error updating homework:", error);
      alert("Failed to update homework. Please try again.");
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditSubject("");
    setEditHomework("");
  };

  // Handle Enter key press in homework input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading && currentUser) {
      handleAddHomework();
    }
  };

  // Format date for display
  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Filter and sort homework
  const filteredHomework = homeworkList
    .filter(item => 
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.homework.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "subject") {
        return a.subject.localeCompare(b.subject);
      } else {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  // Render login prompt for add homework section
  const renderAddHomeworkSection = () => {
    if (!currentUser) {
      return (
        <div></div>
      );
    }

    return (
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaPlus className="text-blue-500" />
          Add New Homework
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 
              focus:ring-blue-500 focus:border-blue-500 bg-white"
              required
            >
              <option value="">Select Subject</option>
              {subjects.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Homework Details *
            </label>
            <input
              type="text"
              placeholder="Enter homework details..."
              value={homework}
              onChange={(e) => setHomework(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 
              focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <button
          onClick={handleAddHomework}
          disabled={loading || !subject || !homework}
          className="bg-linear-to-r from-blue-500 to-blue-600 text-white! 
          px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 
          disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2
          transition-all duration-300"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Adding...
            </>
          ) : (
            <>
              <FaPlus />
              Add Homework
            </>
          )}
        </button>

      </div>
    );
  };

  // Render action buttons based on login status
  const renderActionButtons = (item) => {
    if (!currentUser) {
      return null; // Return null to hide completely
    }

    return (
      <div className="flex gap-2">
        <button
          onClick={() => startEdit(item)}
          className="text-yellow-500 hover:text-yellow-700 p-2 
          hover:bg-yellow-50 rounded-lg transition-colors"
          title="Edit"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => handleDelete(item.id, item.subject)}
          className="text-red-500 hover:text-red-700 p-2 
          hover:bg-red-50 rounded-lg transition-colors"
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>
    );
  };

  // Render table columns based on login status
  const renderTableColumns = () => {
    return (
      <thead>
        <tr className="bg-gray-50">
          <th className="text-left p-4 font-semibold text-gray-700 border-b">
            Subject
          </th>
          <th className="text-left p-4 font-semibold text-gray-700 border-b">
            Homework Details
          </th>
          {currentUser && (
            <th className="text-left p-4 font-semibold text-gray-700 border-b">
              Actions
            </th>
          )}
        </tr>
      </thead>
    );
  };

  // Render table rows based on login status
  const renderTableRows = () => {
    return filteredHomework.map((item) => (
      <tr 
        key={item.id} 
        className="border-b hover:bg-gray-50 transition-colors"
      >
        {editingId === item.id ? (
          // Edit Mode Row (Only if logged in)
          currentUser ? (
            <td colSpan={currentUser ? 3 : 2} className="p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <select
                  value={editSubject}
                  onChange={(e) => setEditSubject(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 bg-white"
                  required
                >
                  <option value="">Select Subject</option>
                  {subjects.map((sub) => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={editHomework}
                  onChange={(e) => setEditHomework(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 md:col-span-2"
                  placeholder="Homework Details"
                  required
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg 
                    hover:bg-green-600 flex items-center gap-2"
                  >
                    <FaSave /> Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg 
                    hover:bg-gray-400 flex items-center gap-2"
                  >
                    <FaTimes /> Cancel
                  </button>
                </div>
              </div>
            </td>
          ) : null
        ) : (
          // View Mode Row
          <>
            <td className="p-4">
              <span className="font-medium text-gray-800">
                {item.subject}
              </span>
            </td>
            <td className="p-4 text-gray-700">
              {item.homework}
            </td>
            {currentUser && (
              <td className="p-4">
                {renderActionButtons(item)}
              </td>
            )}
          </>
        )}
      </tr>
    ));
  };

  // Render skeleton rows based on login status
  const renderSkeletonRows = () => {
    return [...Array(3)].map((_, index) => (
      <tr key={`skeleton-${index}`} className="border-b">
        <td className="p-4">
          <div className="flex items-center gap-2">
            <Skeleton.Input 
              active 
              size="small" 
              style={{ width: 100 }} 
            />
          </div>
        </td>
        <td className="p-4">
          <Skeleton 
            active 
            paragraph={{ rows: 1, width: '50%' }} 
            title={false}
          />
        </td>
        {currentUser && (
          <td className="p-4">
            <div className="flex gap-2">
              <Skeleton.Button 
                active 
                size="small" 
                shape="circle"
                style={{ width: 32, height: 32 }}
              />
              <Skeleton.Button 
                active 
                size="small" 
                shape="circle"
                style={{ width: 32, height: 32 }}
              />
            </div>
          </td>
        )}
      </tr>
    ));
  };

  return (
    <>
      <HeaderComponent title="Home Work"/>

      <section className="min-h-screen bg-linear-to-b from-blue-50 to-gray-100 -mt-30">
        <div className="max-w-6xl mx-auto px-4 py-8">
          
          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fadeIn">
              <div className="flex items-center gap-2">
                <FaCheckCircle />
                <span>{successMessage}</span>
              </div>
            </div>
          )}

          {/* ------------------------- CLASS SELECTION ------------------------- */}
          {!selectedClass && (
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Homework Management
              </h1>
              <p className="text-gray-600 mb-8">
                Select a class to view 
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {classes.map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setSelectedClass(cls)}
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl 
                    transition-all duration-300 hover:-translate-y-1 border border-gray-200
                    hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                        <FaBookOpen className="text-blue-600 text-xl" />
                      </div>
                      <h3 className="font-semibold text-gray-800">
                        {cls}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ------------------------- HOMEWORK MANAGEMENT ------------------------- */}
          {selectedClass && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              
              {/* Header */}
              <div className="bg-linear-to-r from-blue-500 to-blue-600 p-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedClass(null);
                      setHomeworkList([]);
                      setSubject("");
                      setHomework("");
                      setSuccessMessage("");
                    }}
                    className="flex items-center gap-2 text-white! bg-white/20 hover:bg-white/30 
                    px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <FaArrowLeft /> All Classes
                  </button>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">
                      {selectedClass} - Daily Homework
                    </h2>
                    <p className="text-blue-100 text-sm">
                      {formatDate()}
                    </p>
                    {currentUser && (
                      <p className="text-blue-200 text-xs mt-1">
                        Logged in as: {currentUser.email.split('@')[0]}
                      </p>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FaBookOpen className="text-white" />
                  </div>
                </div>
              </div>

              {/* Add Homework Form - Conditional based on login */}
              {renderAddHomeworkSection()}

              {/* Homework List */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Today's Homework List
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {homeworkList.length} {homeworkList.length === 1 ? 'item' : 'items'}
                    </span>
                    {!currentUser && (
                      <span className="text-xs text-gray-500 bg-yellow-50 px-2 py-1 rounded">
                        View only mode
                      </span>
                    )}
                  </div>
                </div>

                {isLoading ? (
                  // Skeleton Loading State
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      {renderTableColumns()}
                      <tbody>
                        {renderSkeletonRows()}
                      </tbody>
                    </table>
                  </div>
                ) : homeworkList.length === 0 ? (
                  <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <FaBookOpen className="text-5xl text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg mb-2">
                      No homework added for {selectedClass} today.
                    </p>
                    <p className="text-gray-400">
                      {currentUser ? 'Use the form above to add homework.' : 'Login to add homework.'}
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      {renderTableColumns()}
                      <tbody>
                        {renderTableRows()}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomeWork;