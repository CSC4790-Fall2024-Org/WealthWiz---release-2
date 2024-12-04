import React, { useState, useEffect } from "react";
import { View, TextInput, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig"; // Make sure to import Firebase auth
import Menu from "../components/Menu";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ProfilePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // State for current user profile

  // Fetch current user profile from Firestore
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid); // Reference to user's Firestore document
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setCurrentUser({
              email: user.email,
              username: userData.username || "No username available", // Fetching username from Firestore
              profilePicture: user.photoURL || require("../assets/profile.png"), // Fallback profile picture
            });
          }
        } catch (error) {
          console.error("Error fetching user data from Firestore:", error);
        }
      }
    };

    fetchCurrentUser();
  }, []);

  const searchUsers = async (queryText) => {
    if (queryText.trim() === "") {
      setUsers([]);
      return;
    }

    setLoading(true);

    try {
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("email", ">=", queryText),
        where("email", "<=", queryText + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);

      const searchResults = [];
      querySnapshot.forEach((doc) => {
        searchResults.push({ id: doc.id, ...doc.data() });
      });

      setUsers(searchResults);
    } catch (error) {
      console.error("Error searching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Text style={styles.home}>Profile</Text>
      </View>
      {/* Current User Profile */}
      {currentUser && (
        <View style={styles.currentUserProfile}>
          <Image
            source={currentUser.profilePicture}
            style={styles.profilePicture}
          />
          <View>
            <Text style={styles.username}>{currentUser.username}</Text>
            <Text style={styles.email}>{currentUser.email}</Text>
          </View>
        </View>
      )}

      {/* Search Input */}

      <View style={styles.middlePart}>
        <Text style={styles.home}>Search for friends</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by email..."
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          searchUsers(text);
        }}
      />

      {/* Loading Indicator */}
      {loading && <Text style={styles.loadingText}>Loading...</Text>}

      {/* Users List */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Image
              source={
                item.profilePicture
                  ? { uri: item.profilePicture }
                  : require("../assets/profile.png") // Fallback profile picture
              }
              style={styles.profilePicture}
            />
            <View style={styles.userInfo}>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.username}>{item.username || "No username available"}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* No Results */}
      {users.length === 0 && !loading && searchQuery.trim() !== "" && (
        <Text style={styles.noResultsText}>No users found with that email.</Text>
      )}

      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "15%",
  },
  topPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
  },
  home: {
    fontSize: FontSize.size_13xl,
  },
  middlePart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  currentUserProfile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
    width: "90%",
    alignSelf: "center",
  },
  searchInput: {
    borderWidth: 1,
    width: "90%",
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  profilePicture: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    justifyContent: "center",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
  },
  addButton: {
    backgroundColor: "#2FDB81", // Green button color
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfilePage;